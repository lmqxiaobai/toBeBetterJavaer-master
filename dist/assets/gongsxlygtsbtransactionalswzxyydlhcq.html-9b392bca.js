import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as d,a as e,d as i,b as a,e as t}from"./app-1c5b5ce3.js";const c={},o=t(`<p>Java 后端面试的时候，面试官经常会问到 @Transactional 的原理，以及容易踩的坑，之前一面百度，就遇到过，今天就带大家把这几块知识吃透。</p><p>这篇文章，<strong>会先讲述 @Transactional 的 4 种不生效的 Case，然后再通过源码解读，分析 @Transactional 的执行原理，以及部分 Case 不生效的真正原因。</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-912703df-775a-48b9-abbb-0e951d9da1bf.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="项目准备" tabindex="-1"><a class="header-anchor" href="#项目准备" aria-hidden="true">#</a> 项目准备</h2><p>下面是 DB 数据和 DB 操作接口：</p><table><thead><tr><th>uid</th><th>uname</th><th>usex</th></tr></thead><tbody><tr><td>1</td><td>张三</td><td>女</td></tr><tr><td>2</td><td>陈恒</td><td>男</td></tr><tr><td>3</td><td>楼仔</td><td>男</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 提供的接口
public interface UserDao {
    // select * from user_test where uid = &quot;#{uid}&quot;
    public MyUser selectUserById(Integer uid);
    // update user_test set uname =#{uname},usex = #{usex} where uid = #{uid}
    public int updateUser(MyUser user);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基础测试代码，testSuccess() 是事务生效的情况：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Service
public class UserController {
    @Autowired
    private UserDao userDao;

    public void update(Integer id) {
        MyUser user = new MyUser();
        user.setUid(id);
        user.setUname(&quot;张三-testing&quot;);
        user.setUsex(&quot;女&quot;);
        userDao.updateUser(user);
    }

    public MyUser query(Integer id) {
        MyUser user = userDao.selectUserById(id);
        return user;
    }

    // 正常情况
    @Transactional(rollbackFor = Exception.class)

    public void testSuccess() throws Exception {
        Integer id = 1;
        MyUser user = query(id);
        System.out.println(&quot;原记录:&quot; + user);
        update(id);
        throw new Exception(&quot;事务生效&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务不生效的几种-case" tabindex="-1"><a class="header-anchor" href="#事务不生效的几种-case" aria-hidden="true">#</a> 事务不生效的几种 Case</h2><p>主要讲解 4 种事务不生效的 Case：</p><ul><li><strong>类内部访问</strong>：A 类的 a1 方法没有标注 @Transactional，a2 方法标注 @Transactional，在 a1 里面调用 a2；</li><li><strong>私有方法</strong>：将 @Transactional 注解标注在非 public 方法上；</li><li><strong>异常不匹配</strong>：@Transactional 未设置 rollbackFor 属性，方法返回 Exception 等异常；</li><li><strong>多线程</strong>：主线程和子线程的调用，线程抛出异常。</li></ul><h3 id="case-1-类内部访问" tabindex="-1"><a class="header-anchor" href="#case-1-类内部访问" aria-hidden="true">#</a> Case 1: 类内部访问</h3><p>我们在类 UserController 中新增一个方法 testInteralCall()：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void testInteralCall() throws Exception {
    testSuccess();
    throw new Exception(&quot;事务不生效：类内部访问&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 testInteralCall() 没有标注 @Transactional，我们再看一下测试用例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void main(String[] args) throws Exception {
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);
    UserController uc = (UserController) applicationContext.getBean(&quot;userController&quot;);
    try {
        uc.testSuccess();
    } finally {
        MyUser user =  uc.query(1);
        System.out.println(&quot;修改后的记录:&quot; + user);
    }
}
// 输出：
// 原记录:MyUser(uid=1, uname=张三, usex=女)
// 修改后的记录:MyUser(uid=1, uname=张三-testing, usex=女)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可以看到，事务并没有回滚，这个是什么原因呢？</p><p>因为 @Transactional 的工作机制是基于 AOP 实现，AOP 是使用动态代理实现的，如果通过代理直接调用 testSuccess()，通过 AOP 会前后进行增强，增强的逻辑其实就是在 testSuccess() 的前后分别加上开启、提交事务的逻辑，后面的源码会进行剖析。</p><p>现在是通过 testInteralCall() 去调用 testSuccess()，testSuccess() 前后不会进行任何增强操作，也就是<strong>类内部调用，不会通过代理方式访问。</strong></p>`,20),u={href:"https://blog.csdn.net/Ahuuua/article/details/123877835",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="case-2-私有方法" tabindex="-1"><a class="header-anchor" href="#case-2-私有方法" aria-hidden="true">#</a> Case 2: 私有方法</h3><p>在私有方法上，添加 @Transactional 注解也不会生效：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Transactional(rollbackFor = Exception.class)

private void testPirvateMethod() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;原记录:&quot; + user);
    update(id);
    throw new Exception(&quot;测试事务生效&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接使用时，下面这种场景不太容易出现，因为 IDEA 会有提醒，文案为: Methods annotated with &#39;@Transactional&#39; must be overridable，<strong>至于深层次的原理，源码部分会给你解读。</strong></p><h3 id="case-3-异常不匹配" tabindex="-1"><a class="header-anchor" href="#case-3-异常不匹配" aria-hidden="true">#</a> Case 3: 异常不匹配</h3><p>这里的 @Transactional 没有设置 rollbackFor = Exception.class 属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Transactional
public void testExceptionNotMatch() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;原记录:&quot; + user);
    update(id);
    throw new Exception(&quot;事务不生效：异常不匹配&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>测试方法：同 Case1

// 输出：
// 原记录:User[uid=1,uname=张三,usex=女]
// 修改后的记录:User[uid=1,uname=张三-test,usex=女]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@Transactional 注解默认处理运行时异常，即只有抛出运行时异常时，才会触发事务回滚，否则并不会回滚，<strong>至于深层次的原理，源码部分会给你解读。</strong></p><h3 id="case-4-多线程" tabindex="-1"><a class="header-anchor" href="#case-4-多线程" aria-hidden="true">#</a> Case 4: 多线程</h3><p>下面给出两个不同的姿势，一个是子线程抛异常，主线程 ok；一个是子线程 ok，主线程抛异常。</p><h4 id="父线程抛出异常" tabindex="-1"><a class="header-anchor" href="#父线程抛出异常" aria-hidden="true">#</a> 父线程抛出异常</h4><p>父线程抛出异常，子线程不抛出异常：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void testSuccess() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;原记录:&quot; + user);
    update(id);
}
@Transactional(rollbackFor = Exception.class)

public void testMultThread() throws Exception {
    new Thread(new Runnable() {
        @SneakyThrows
        @Override
        public void run() {
            testSuccess();
        }
    }).start();
    throw new Exception(&quot;测试事务不生效&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父线程抛出线程，事务回滚，因为子线程是独立存在，和父线程不在同一个事务中，所以子线程的修改并不会被回滚，</p><h4 id="子线程抛出异常" tabindex="-1"><a class="header-anchor" href="#子线程抛出异常" aria-hidden="true">#</a> 子线程抛出异常</h4><p>父线程不抛出异常，子线程抛出异常：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void testSuccess() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;原记录:&quot; + user);
    update(id);
    throw new Exception(&quot;测试事务不生效&quot;);
}
@Transactional(rollbackFor = Exception.class)

public void testMultThread() throws Exception {
    new Thread(new Runnable() {
        @SneakyThrows
        @Override
        public void run() {
            testSuccess();
        }
    }).start();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于子线程的异常不会被外部的线程捕获，所以父线程不抛异常，事务回滚没有生效。</p><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><p><strong>下面我们从源码的角度，对 @Transactional 的执行机制和事务不生效的原因进行解读。</strong></p><h3 id="transactional-执行机制" tabindex="-1"><a class="header-anchor" href="#transactional-执行机制" aria-hidden="true">#</a> @Transactional 执行机制</h3><p>我们只看最核心的逻辑，代码中的 interceptorOrInterceptionAdvice 就是 TransactionInterceptor 的实例，入参是 this 对象。</p><blockquote><p>红色方框有一段注释，大致翻译为 “它是一个拦截器，所以我们只需调用即可：在构造此对象之前，将静态地计算切入点。”</p></blockquote><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-3995e575-2cd3-4f62-80d9-c0fbba3c99b9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>this 是 ReflectiveMethodInvocation 对象，成员对象包含 UserController 类、testSuccess() 方法、入参和代理对象等。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-47edf894-16e1-423b-a59a-cbb1bf1f5fba.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入 invoke() 方法后：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-a4464977-3c8f-4800-8ffd-c4e458828b0e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>前方高能！！！这里就是事务的核心逻辑，包括判断事务是否开启、目标方法执行、事务回滚、事务提交。</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-4b46998f-2c1a-4e7c-abc7-e34113ea33f3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="private-导致事务不生效原因" tabindex="-1"><a class="header-anchor" href="#private-导致事务不生效原因" aria-hidden="true">#</a> private 导致事务不生效原因</h3><p>在上面这幅图中，第一个红框区域调用了方法 getTransactionAttribute()，主要是为了获取 txAttr 变量，它是用于读取 @Transactional 的配置，如果这个 txAttr = null，后面就不会走事务逻辑，我们看一下这个变量的含义：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-d87a548a-cdf7-4027-8a8c-6e37a2cb908f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们直接进入 getTransactionAttribute()，重点关注获取事务配置的方法。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-d5397df4-4a66-4187-92fe-6b7f991aff1a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>前方高能！！！这里就是 private 导致事务不生效的原因所在</strong>，allowPublicMethodsOnly() 一直返回 false，所以重点只关注 isPublic() 方法。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-be1475dd-5e66-4685-9009-34c2bc1eed00.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面通过位与计算，判断是否为 Public，对应的几类修饰符如下：</p><ul><li>PUBLIC: 1</li><li>PRIVATE: 2</li><li>PROTECTED: 4</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-5b4f2786-0507-4c14-af2b-79a492317bb0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看到这里，是不是豁然开朗了，有没有觉得很有意思呢~~</p><h3 id="异常不匹配原因" tabindex="-1"><a class="header-anchor" href="#异常不匹配原因" aria-hidden="true">#</a> 异常不匹配原因</h3><p>我们继续回到事务的核心逻辑，因为主方法抛出 Exception() 异常，进入事务回滚的逻辑：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-244514a1-f700-4781-aebe-cc6617c682e2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入 rollbackOn() 方法，判断该异常是否能进行回滚，这个需要判断主方法抛出的 Exception() 异常，是否在 @Transactional 的配置中：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-32c3759b-7673-4a0a-8e6d-d9e4b0d5cd7d.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们进入 getDepth() 看一下异常规则匹配逻辑，因为我们对 @Transactional 配置了 rollbackFor = Exception.class，所以能匹配成功：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-d4e16c96-45b4-49b6-bd5e-8061469b7aab.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>示例中的 winner 不为 null，所以会跳过下面的环节。但是当 winner = null 时，也就是没有设置 rollbackFor 属性时，会走默认的异常捕获方式。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-f08272b5-7365-47c1-a0a1-72307200c08a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>前方高能！！！这里就是异常不匹配原因的原因所在</strong>，我们看一下默认的异常捕获方式：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-5cc091e2-bcd6-4d81-92ba-ee04509990b7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是不是豁然开朗，<strong>当没有设置 rollbackFor 属性时，默认只对 RuntimeException 和 Error 的异常执行回滚。</strong></p><hr>`,55),v={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},g=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-3ad64454-3033-40f1-840a-8bd90880b065.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),p=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-853616ff-76bd-40f6-9261-5e45285d3d56.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-976002e6-741c-4948-a4a4-a32ec44a903a.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),h=e("strong",null,"670 多名",-1),x={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-6938df3e-6bd3-423e-879a-2b4dafa86bee.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-3e6e49be-d833-4c4d-9e23-5d54f4132a9a.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),q=e("hr",null,null,-1),_=e("p",null,"没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。",-1),j=e("p",null,[e("strong",null,"推荐阅读"),i("：")],-1),z={href:"https://mp.weixin.qq.com/s/ja_fEGFBBWM3TLhdT0aeMw",target:"_blank",rel:"noopener noreferrer"},T={href:"https://mp.weixin.qq.com/s/yH42DxmRBSjrr0SW9N3MFg",target:"_blank",rel:"noopener noreferrer"},E={href:"https://mp.weixin.qq.com/s/miOagyv4x3HrqVaU38uh4w",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mp.weixin.qq.com/s/s7KwW0cw2ZPR60SPFc6K0Q",target:"_blank",rel:"noopener noreferrer"},U={href:"https://mp.weixin.qq.com/s/iETW0dCfxxTTiRt1-WmeNw",target:"_blank",rel:"noopener noreferrer"},C={href:"https://mp.weixin.qq.com/s/9Naa2r7Xkf9D4d9tqEdgVQ",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mp.weixin.qq.com/s/2IUe50xBhuEWKDzARVd51A",target:"_blank",rel:"noopener noreferrer"},I={href:"https://mp.weixin.qq.com/s/3lqp4x1B5LI1hNjWAi6v1g",target:"_blank",rel:"noopener noreferrer"},M={href:"https://mp.weixin.qq.com/s/APhxZ7ddmU8d9SEOr4w-iQ",target:"_blank",rel:"noopener noreferrer"};function A(B,P){const n=r("ExternalLinkIcon");return l(),d("div",null,[o,e("blockquote",null,[e("p",null,[i("如果还是不太清楚，推荐再看看这篇文章，里面有完整示例，非常完美诠释“类内部访问”不能前后增强的原因："),e("a",u,[i("https://blog.csdn.net/Ahuuua/article/details/123877835"),a(n)])])]),b,e("p",null,[i("一个人可以走得很快，但一群人才能走得更远。欢迎加入"),e("a",v,[i("二哥的编程星球"),a(n)]),i("，里面的每个球友都非常的友善，除了鼓励你，还会给你提出合理的建议。星球提供的三份专属专栏《Java 面试指南》、《编程喵 🐱（Spring Boot+Vue 前后端分离）实战项目笔记》、《Java 版 LeetCode 刷题笔记》，干货满满，价值连城。")]),g,p,m,e("p",null,[i("已经有 "),h,i(" 小伙伴加入"),e("a",x,[i("二哥的编程星球"),a(n)]),i("了，如果你也需要一个良好的学习氛围，"),e("a",f,[i("戳链接"),a(n)]),i("加入我们的大家庭吧！这是一个 Java 学习指南 + 编程实战 + LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、跟着二哥一起做实战项目，冲冲冲。")]),y,w,q,_,j,e("ul",null,[e("li",null,[e("a",z,[i("今年这情况，真有点想读研了"),a(n)])]),e("li",null,[e("a",T,[i("专升本上岸的秘诀"),a(n)])]),e("li",null,[e("a",E,[i("愤怒，一个破培训班要价 28 万"),a(n)])]),e("li",null,[e("a",k,[i("公司不卡学历，却担心自己实力不够"),a(n)])]),e("li",null,[e("a",U,[i("今年面试有点小难，还是要冲"),a(n)])]),e("li",null,[e("a",C,[i("人生当中挣到的第一个 1 万元"),a(n)])]),e("li",null,[e("a",S,[i("新一代开源免费的终端工具，太酷了"),a(n)])]),e("li",null,[e("a",I,[i("Java 后端四件套学习资料"),a(n)])])]),e("blockquote",null,[e("p",null,[i("参考链接："),e("a",M,[i("https://mp.weixin.qq.com/s/APhxZ7ddmU8d9SEOr4w-iQ"),a(n)]),i("，出处：macrozheng，整理：沉默王二")])])])}const O=s(c,[["render",A],["__file","gongsxlygtsbtransactionalswzxyydlhcq.html.vue"]]);export{O as default};
