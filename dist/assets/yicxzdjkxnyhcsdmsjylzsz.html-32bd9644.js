import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as a,a as e,d as i,b as d,e as t}from"./app-1c5b5ce3.js";const o={},l=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),i(" 前言")],-1),p=e("p",null,"接口性能问题，对于从事后端开发的同学来说，是一个绕不开的话题。想要优化一个接口的性能，需要从多个方面着手。",-1),u={href:"https://mp.weixin.qq.com/s?__biz=MzkwNjMwMTgzMQ==&mid=2247490731&idx=1&sn=29ed0295c7990157a3a56ba33cf7f8be&chksm=c0ebc443f79c4d55a2bac81744992c96f97737e5d0717ec99231f4d08f57a7f0220eafdac9c9&token=660773166&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>本文将会接着接口性能优化这个话题，从实战的角度出发，聊聊我是如何优化一个慢查询接口的。</p><p>上周我优化了一下线上的批量评分查询接口，将接口性能从最初的<code>20s</code>，优化到目前的<code>500ms</code>以内。</p><p>总体来说，用三招就搞定了。</p><p>到底经历了什么？</p><h2 id="_1-案发现场" tabindex="-1"><a class="header-anchor" href="#_1-案发现场" aria-hidden="true">#</a> 1. 案发现场</h2><p>我们每天早上上班前，都会收到一封线上慢查询接口汇总邮件，邮件中会展示<code>接口地址</code>、<code>调用次数</code>、<code>最大耗时</code>、<code>平均耗时</code>和<code>traceId</code>等信息。</p><p>我看到其中有一个批量评分查询接口，最大耗时达到了<code>20s</code>，平均耗时也有<code>2s</code>。</p><p>用<code>skywalking</code>查看该接口的调用信息，发现绝大数情况下，该接口响应还是比较快的，大部分情况都是500ms左右就能返回，但也有少部分超过了20s的请求。</p><p>这个现象就非常奇怪了。</p><p>莫非跟数据有关？</p><p>比如：要查某一个组织的数据，是非常快的。但如果要查平台，即组织的根节点，这种情况下，需要查询的数据量非常大，接口响应就可能会非常慢。</p><p>但事实证明不是这个原因。</p><p>很快有个同事给出了答案。</p><p>他们在结算单列表页面中，批量请求了这个接口，但他传参的数据量非常大。</p><p>怎么回事呢？</p><p>当初说的需求是这个接口给分页的列表页面调用，每页大小有：10、20、30、50、100，用户可以选择。</p><p>换句话说，调用批量评价查询接口，一次性最多可以查询100条记录。</p><p>但实际情况是：结算单列表页面还包含了很多订单。基本上每一个结算单，都有多个订单。调用批量评价查询接口时，需要把结算单和订单的数据合并到一起。</p><p>这样导致的结果是：调用批量评价查询接口时，一次性传入的参数非常多，入参list中包含几百、甚至几千条数据都有可能。</p><h2 id="_2-现状" tabindex="-1"><a class="header-anchor" href="#_2-现状" aria-hidden="true">#</a> 2. 现状</h2><p>如果一次性传入几百或者几千个id，批量查询数据还好，可以走主键索引，查询效率也不至于太差。</p><p>但那个批量评分查询接口，逻辑不简单。</p><p>伪代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public List&lt;ScoreEntity&gt; query(List&lt;SearchEntity&gt; list) {
    //结果
    List&lt;ScoreEntity&gt; result = Lists.newArrayList();
    //获取组织id
    List&lt;Long&gt; orgIds = list.stream().map(SearchEntity::getOrgId).collect(Collectors.toList());
    //通过regin调用远程接口获取组织信息
    List&lt;OrgEntity&gt; orgList = feginClient.getOrgByIds(orgIds);
    
    for(SearchEntity entity : list) {
        //通过组织id找组织code
        String orgCode = findOrgCode(orgList, entity.getOrgId());
    
        //通过组合条件查询评价
        ScoreSearchEntity scoreSearchEntity = new ScoreSearchEntity();
        scoreSearchEntity.setOrgCode(orgCode);
        scoreSearchEntity.setCategoryId(entity.getCategoryId());
        scoreSearchEntity.setBusinessId(entity.getBusinessId());
        scoreSearchEntity.setBusinessType(entity.getBusinessType());
        List&lt;ScoreEntity&gt; resultList = scoreMapper.queryScore(scoreSearchEntity);
        
        if(CollectionUtils.isNotEmpty(resultList)) {
            ScoreEntity scoreEntity = resultList.get(0);
            result.add(scoreEntity);
        }
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实在真实场景中，代码比这个复杂很多，这里为了给大家演示，简化了一下。</p><p>最关键的地方有两点：</p><ol><li>在接口中远程调用了另外一个接口</li><li>需要在for循环中查询数据</li></ol><p>其中的第1点，即：在接口中远程调用了另外一个接口，这个代码是必须的。</p><p>因为如果在<code>评价表</code>中冗余一个组织code字段，万一哪天<code>组织表</code>中的组织code有修改，不得不通过某种机制，通知我们同步修改评价表的组织code，不然就会出现数据不一致的问题。</p><p>很显然，如果要这样调整的话，业务流程上要改了，代码改动有点大。</p><p>所以，还是先保持在接口中远程调用吧。</p><p>这样看来，可以优化的地方只能在：for循环中查询数据。</p><h2 id="_3-第一次优化" tabindex="-1"><a class="header-anchor" href="#_3-第一次优化" aria-hidden="true">#</a> 3. 第一次优化</h2><p>由于需要在for循环中，每条记录都要根据不同的条件，查询出想要的数据。</p><p>由于业务系统调用这个接口时，没有传<code>id</code>，不好在<code>where</code>条件中用<code>id in (...)</code>，这方式批量查询数据。</p><p>其实，有一种办法不用循环查询，一条sql就能搞定需求：使用<code>or</code>关键字拼接，例如：(org_code=&#39;001&#39; and category_id=123 and business_id=111 and business_type=1) <code>or</code> (org_code=&#39;002&#39; and category_id=123 and business_id=112 and business_type=2) <code>or</code> (org_code=&#39;003&#39; and category_id=124 and business_id=117 and business_type=1)...</p><p>这种方式会导致sql语句会非常长，性能也会很差。</p><p>其实还有一种写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>where (a,b) in ((1,2),(1,3)...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过这种sql，如果一次性查询的数据量太多的话，性能也不太好。</p><p>居然没法改成批量查询，就只能优化单条查询sql的执行效率了。</p><p>首先从<code>索引</code>入手，因为改造成本最低。</p><blockquote><p>第一次优化是<code>优化索引</code>。</p></blockquote><p>评价表之前建立一个business_id字段的<code>普通索引</code>，但是从目前来看效率不太理想。</p><p>由于我果断加了<code>联合索引</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table user_score add index  \`un_org_category_business\` (\`org_code\`,\`category_id\`,\`business_id\`,\`business_type\`) USING BTREE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该联合索引由：<code>org_code</code>、<code>category_id</code>、<code>business_id</code>和<code>business_type</code>四个字段组成。</p><p>经过这次优化，效果立竿见影。</p><p>批量评价查询接口最大耗时，从最初的<code>20s</code>，缩短到了<code>5s</code>左右。</p><h2 id="_4-第二次优化" tabindex="-1"><a class="header-anchor" href="#_4-第二次优化" aria-hidden="true">#</a> 4. 第二次优化</h2><p>由于需要在for循环中，每条记录都要根据不同的条件，查询出想要的数据。</p><p>只在一个线程中查询数据，显然太慢。</p><p>那么，为何不能改成多线程调用？</p><blockquote><p>第二次优化，查询数据库由<code>单线程</code>改成<code>多线程</code>。</p></blockquote><p>但由于该接口是要将查询出的所有数据，都返回回去的，所以要获取查询结果。</p><p>使用多线程调用，并且要获取返回值，这种场景使用java8中的<code>CompleteFuture</code>非常合适。</p><p>代码调整为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletableFuture[] futureArray = dataList.stream()
     .map(data -&gt; CompletableFuture
          .supplyAsync(() -&gt; query(data), asyncExecutor)
          .whenComplete((result, th) -&gt; {
       })).toArray(CompletableFuture[]::new);
CompletableFuture.allOf(futureArray).join();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>CompleteFuture</code>的本质是创建<code>线程</code>执行，为了避免产生太多的线程，所以使用<code>线程池</code>是非常有必要的。</p><p>优先推荐使用<code>ThreadPoolExecutor</code>类，我们自定义线程池。</p><p>具体代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ExecutorService threadPool = new ThreadPoolExecutor(
    8, //corePoolSize线程池中核心线程数
    10, //maximumPoolSize 线程池中最大线程数
    60, //线程池中线程的最大空闲时间，超过这个时间空闲线程将被回收
    TimeUnit.SECONDS,//时间单位
    new ArrayBlockingQueue(500), //队列
    new ThreadPoolExecutor.CallerRunsPolicy()); //拒绝策略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用<code>ThreadPoolTaskExecutor</code>类创建线程池：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class ThreadPoolConfig {

    /**
     * 核心线程数量，默认1
     */
    private int corePoolSize = 8;

    /**
     * 最大线程数量，默认Integer.MAX_VALUE;
     */
    private int maxPoolSize = 10;

    /**
     * 空闲线程存活时间
     */
    private int keepAliveSeconds = 60;

    /**
     * 线程阻塞队列容量,默认Integer.MAX_VALUE
     */
    private int queueCapacity = 1;

    /**
     * 是否允许核心线程超时
     */
    private boolean allowCoreThreadTimeOut = false;


    @Bean(&quot;asyncExecutor&quot;)
    public Executor asyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(corePoolSize);
        executor.setMaxPoolSize(maxPoolSize);
        executor.setQueueCapacity(queueCapacity);
        executor.setKeepAliveSeconds(keepAliveSeconds);
        executor.setAllowCoreThreadTimeOut(allowCoreThreadTimeOut);
        // 设置拒绝策略，直接在execute方法的调用线程中运行被拒绝的任务
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        // 执行初始化
        executor.initialize();
        return executor;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过这次优化，接口性能也提升了5倍。</p><p>从<code>5s</code>左右，缩短到<code>1s</code>左右。</p><p>但整体效果还不太理想。</p><h2 id="_5-第三次优化" tabindex="-1"><a class="header-anchor" href="#_5-第三次优化" aria-hidden="true">#</a> 5. 第三次优化</h2><p>经过前面的两次优化，批量查询评价接口性能有一些提升，但耗时还是大于1s。</p><p>出现这个问题的根本原因是：<code>一次性查询的数据太多</code>。</p><p>那么，我们为什么不限制一下，每次查询的记录条数呢？</p><blockquote><p>第三次优化，限制一次性查询的记录条数。其实之前也做了限制，不过最大是2000条记录，从目前看效果不好。</p></blockquote><p>限制该接口一次只能查<code>200</code>条记录，如果超过<code>200</code>条则会报错提示。</p><p>如果直接对该接口做限制，则可能会导致业务系统出现异常。</p><p>为了避免这种情况的发生，必须跟业务系统团队一起讨论一下优化方案。</p><p>主要有下面两个方案：</p><h3 id="_5-1-前端做分页" tabindex="-1"><a class="header-anchor" href="#_5-1-前端做分页" aria-hidden="true">#</a> 5.1 前端做分页</h3><p>在结算单列表页中，每个结算单默认只展示1个订单，多余的分页查询。</p><p>这样的话，如果按照每页最大100条记录计算的话，结算单和订单最多一次只能查询200条记录。</p><p>这就需要业务系统的前端做<code>分页功能</code>，同时后端接口要调整支持<code>分页查询</code>。</p><p>但目前现状是前端没有多余开发资源。</p><p>由于人手不足的原因，这套方案目前只能暂时搁置。</p><h3 id="_5-2-分批调用接口" tabindex="-1"><a class="header-anchor" href="#_5-2-分批调用接口" aria-hidden="true">#</a> 5.2 分批调用接口</h3><p>业务系统后端之前是<code>一次性</code>调用评价查询接口，现在改成<code>分批</code>调用。</p><p>比如：之前查询500条记录，业务系统只调用一次查询接口。</p><p>现在改成业务系统每次只查100条记录，分5批调用，总共也是查询500条记录。</p><p>这样不是变慢了吗？</p><p>答：如果那5批调用评价查询接口的操作，是在for循环中单线程顺序的，整体耗时当然可能会变慢。</p><p>但业务系统也可以改成<code>多线程</code>调用，只需最终汇总结果即可。</p><p>此时，有人可能会问题：在评价查询接口的服务器多线程调用，跟在其他业务系统中多线程调用不是一回事？</p><p>还不如把批量评价查询接口的服务器中，<code>线程池</code>的<code>最大线程数</code>调大一点？</p><p>显然你忽略了一件事：线上应用一般不会被部署成单点。绝大多数情况下，为了避免因为服务器挂了，造成单点故障，基本会部署至少2个节点。这样即使一个节点挂了，整个应用也能正常访问。</p><blockquote><p>当然也可能会出现这种情况：假如挂了一个节点，另外一个节点可能因为访问的流量太大了，扛不住压力，也可能因此挂掉。</p></blockquote><p>换句话说，通过业务系统中的多线程调用接口，可以将访问接口的流量负载均衡到不同的节点上。</p><p>他们也用8个线程，将数据分批，每批100条记录，最后将结果汇总。</p><p>经过这次优化，接口性能再次提升了1倍。</p><p>从<code>1s</code>左右，缩短到小于<code>500ms</code>。</p><p>温馨提醒一下，无论是在批量查询评价接口查询数据库，还是在业务系统中调用批量查询评价接口，使用多线程调用，都只是一个临时方案，并不完美。</p><p>这样做的原因主要是为了先快速解决问题，因为这种方案改动是最小的。</p><p>要从根本上解决问题，需要重新设计这一套功能，需要修改表结构，甚至可能需要修改业务流程。但由于牵涉到多条业务线，多个业务系统，只能排期慢慢做了。</p><hr><p><strong>微信8.0将好友放开到了一万，小伙伴可以加我大号了，先到先得，再满就真没了</strong></p><p><strong>扫描下方二维码即可加我微信啦，<code>2022，抱团取暖，一起牛逼。</code></strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-yicxzdjkxnyhcsdmsjylzsz-e5ad6bcd-46d8-4911-8390-f988d742ece7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="推荐阅读" tabindex="-1"><a class="header-anchor" href="#推荐阅读" aria-hidden="true">#</a> 推荐阅读</h2>`,105),b={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501313&idx=1&sn=4dc42f4e2662a5637ebbab646d699150&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501304&idx=1&sn=c9a17d313ad432081982132b2c1e79cc&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501215&idx=1&sn=cd5e281cde81c8873b4bd19979d40191&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501139&idx=1&sn=21d24ce2dff862350eadfd876a3ea585&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501074&idx=1&sn=629db39555b3d344f928b87abecbba69&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2248700+820&idx=1&sn=9895bd4c39b90d45eb2a10efedb236ac&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},y={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247499376&idx=1&sn=3ed28795cdd35fbaa3506e74a56703b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486684&idx=1&sn=807fd808adac8019eb2095ba088efe54&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},z=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-yicxzdjkxnyhcsdmsjylzsz-ffb0ad5d-a393-4a43-b594-74374c54f601.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w={href:"https://mp.weixin.qq.com/s/fPgFzGloyUTzSHkXa43M9w",target:"_blank",rel:"noopener noreferrer"};function q(S,k){const n=r("ExternalLinkIcon");return c(),a("div",null,[l,p,e("p",null,[i("其实，我之前也写过一篇接口性能优化相关的文章《"),e("a",u,[i("聊聊接口性能优化的11个小技巧"),d(n)]),i("》，发表之后在全网广受好评，感兴趣的小伙们可以仔细看看。")]),v,e("ul",null,[e("li",null,[e("a",b,[i("新来个技术总监，把 RabbitMQ 讲的那叫一个透彻，佩服！"),d(n)])]),e("li",null,[e("a",m,[i("支持Nacos 2.1.0！这套Spring Cloud Gateway+Oauth2终极权限解决方案升级了！"),d(n)])]),e("li",null,[e("a",h,[i("JetBrains正式宣布：产品涨价！"),d(n)])]),e("li",null,[e("a",g,[i("当开发同事辞职，接手到垃圾代码怎么办?"),d(n)])]),e("li",null,[e("a",_,[i("还在用命令行看日志？快用Kibana吧，可视化日志分析YYDS！"),d(n)])]),e("li",null,[e("a",x,[i("Mall电商实战项目全面升级！支持最新版SpringBoot，干掉循环依赖..."),d(n)])]),e("li",null,[e("a",y,[i("重磅更新！Mall实战教程全面升级，瞬间高大上了！"),d(n)])]),e("li",null,[e("a",f,[i("40K+Star！Mall电商实战项目开源回忆录！"),d(n)])])]),z,e("blockquote",null,[e("p",null,[i("转载链接："),e("a",w,[i("https://mp.weixin.qq.com/s/fPgFzGloyUTzSHkXa43M9w"),d(n)]),i("，出处：macrozheng，整理：沉默王二")])])])}const M=s(o,[["render",q],["__file","yicxzdjkxnyhcsdmsjylzsz.html.vue"]]);export{M as default};
