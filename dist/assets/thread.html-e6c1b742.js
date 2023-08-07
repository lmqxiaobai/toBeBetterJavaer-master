import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as s,a as e,d as a,b as r,e as n}from"./app-1c5b5ce3.js";const c={},h=n('<h1 id="java并发编程" tabindex="-1"><a class="header-anchor" href="#java并发编程" aria-hidden="true">#</a> Java并发编程</h1><p>众所周知，Java 并发是 Java 程序员必须懂但又很难懂的一块知识点。一般来说，很少有人敢说自己精通 Java 并发的，一是容易被面试官吊打，二是并发编程涉及到操作系统、内存、CPU 等计算机专业比较核心的内容，比较考验一个程序员的内功。</p><p>今天这篇内容就来给大家盘点一下 Java 并发到底该如何从入门到精通，请及时用鸡毛掸子把收藏夹里的灰清理一下。在阅读过程中，如果有所帮助，麻烦默默收藏和主动转发，算是对我码字的这份坚持的亿点点鼓励。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、为什么要学-java-并发" tabindex="-1"><a class="header-anchor" href="#一、为什么要学-java-并发" aria-hidden="true">#</a> 一、为什么要学 Java 并发？</h2><p>有句话不知道当讲不当讲，先讲了再说，就是“如果你只想 CURD，那么 Java 并发不学也罢！”但其实呢，大家都已经被教育的很有涵养了，工作中拧不拧螺丝不重要，重要的是面试一定要会造火箭，不然面试的机会都很难捞得到。</p><p>那作为 Java 体系中非常重要的一环，Java 并发自然是必须要掌握的，最起码也得会起个多线程吧？哈哈哈。高级点的，像平常开发中用到的 Tomcat 服务器、消息中间件、RPC 框架等等，它们的底层都涉及到了并发编程。</p><p>当然了，Java 并发涉及到东西实在是不少，包括操作系统的知识，Java 虚拟机的一些知识，Java 线程模型的知识，多线程相关的关键字，比如说 synchronized、volatile 等，还有锁的知识、JDK 提供的工具类等等，学起来还是非常容易令人头大的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因此，我们需要一些高效的学习路线图，以及一些优质的学习资源，从而减少我们学习Java 并发编程所投入的时间和精力。</p><h2 id="二、java-并发学习路线图" tabindex="-1"><a class="header-anchor" href="#二、java-并发学习路线图" aria-hidden="true">#</a> 二、Java 并发学习路线图</h2><p>这是我最近整理的一张关于 Java 并发编程的思维导图，大的方向可以分为三个部分：线程基础、理论基础、工具类 JUC。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-map.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>线程基础部分包括：</p><ul><li>线程的创建方式</li><li>线程的状态切换</li><li>线程的基本操作</li><li>线程组和线程优先级</li></ul><p>理论基础包括：</p><ul><li>进程和线程的区别</li><li>多线程解决了什么问题，又带来了什么问题？</li><li>如何解决并发问题？包括 Java 内存模型，以及两个常见的关键字 volatile 和 synchronized</li></ul><p>工具类 JUC 包括：</p><ul><li>锁 Lock 系的 AQS、ReentrantLock、ReentrantReadWriteLock、Condition、LockSupport</li><li>并发容器系的 ConcurrentHashMap、ConcurrentLinkedQueue、CopyOnWriteArrayList、ThreadLocal、BlockingQueue</li><li>线程池系的 ThreadPoolExecutor、ScheduledThreadPoolExecutor</li><li>原子系的 AtomicInteger、AtomicIntegerArray、AtomicReference 等等</li><li>通信工具系的倒计时器 CountDownLatch、循环栅栏 CyclicBarrier、资源访问控制 Semaphore、数据交换 Exchanger、移相器Phaser</li><li>Fork/Join框架</li></ul><p>最后再来个经典的生产者消费者模式进行实践，整个 Java 并发体系就学得非常扎实了！</p><h2 id="三、硬核-java-并发学习资料" tabindex="-1"><a class="header-anchor" href="#三、硬核-java-并发学习资料" aria-hidden="true">#</a> 三、硬核 Java 并发学习资料</h2><h3 id="_1-java进阶之路" tabindex="-1"><a class="header-anchor" href="#_1-java进阶之路" aria-hidden="true">#</a> <strong>1）Java进阶之路</strong></h3><p>学 Java，当然要找二哥的Java进阶之路，网址我贴下面了哈：</p>',23),d={href:"https://javabetter.cn/home.html",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"进去直接找 Java 核心里面的 Java 并发编程就对了。我按照前面的思维导图整理了 29 篇文章，全部都是硬核级别的，跟着学就对了。",-1),u=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/thread-20230410204505.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),g=e("h3",{id:"_2-视频",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-视频","aria-hidden":"true"},"#"),a(),e("strong",null,"2）视频")],-1),b=e("p",null,"懂的都懂，看视频到 B 站。黑马的《Java并发编程》评价还不错，300 多个小节，我觉得讲的比较好的有三部分：synchronized优化原理、AQS和线程池。",-1),_=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-4.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),v={href:"https://www.bilibili.com/video/BV16J411h7Rd",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"还有尚硅谷宋红康老师讲的这个视频。",-1),m=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/thread-20230406095805.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),J={href:"https://www.bilibili.com/video/BV1Kw411Z7dF/",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"_3-书籍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-书籍","aria-hidden":"true"},"#"),a(),e("strong",null,"3）书籍")],-1),x={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},k=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-5.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),y=e("p",null,"《Java 并发编程实战》这本书从总体上来看，分两条主线：",-1),z=e("ul",null,[e("li",null,"介绍 Java 并发包的重要组件和原理"),e("li",null,"如何利用这些组件来保证线程安全")],-1),w=e("p",null,"到底该如何获得线程安全呢？背会并理解下面这段话：",-1),C=e("blockquote",null,[e("p",null,"Writing thread-safe code is, at its core, about managing access to state, and in particular to shared, mutable state.")],-1),L={href:"https://book.douban.com/subject/26591326/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://book.douban.com/subject/35634953/",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"之后，再去啃《Java 并发编程实战》就会发现没有以前那么费劲了，这本书之所以被誉为 Java 并发编程的圣经，确实可以看得出作者在并发编程方面有着丰富的经验。",-1),R=e("h3",{id:"_4-开源电子书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-开源电子书","aria-hidden":"true"},"#"),a(),e("strong",null,"4）开源电子书")],-1),P={href:"http://concurrent.redspider.group/RedSpider.html",target:"_blank",rel:"noopener noreferrer"},A=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-6.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),q={href:"https://github.com/RedSpider1/concurrent",target:"_blank",rel:"noopener noreferrer"},H={href:"https://javabetter.cn/pdf/java-concurrent.html",target:"_blank",rel:"noopener noreferrer"},V=e("strong",null,"沉默王二",-1),D=e("strong",null,"并发",-1),F=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"扫码关注后回复「并发」关键字",tabindex:"0",loading:"lazy"}),e("figcaption",null,"扫码关注后回复「并发」关键字")],-1),U=e("p",null,"再推荐一份 GitHub 上星标 3.6k+ 的 Java 并发知识点总结：",-1),E={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},G=e("p",null,"仓库里有一句话我非常喜欢，也分享给各位小伙伴：",-1),I=e("blockquote",null,[e("p",null,"努力的意义，就是，在以后的日子里，放眼望去全是自己喜欢的人和事！")],-1),W=e("h3",{id:"_5-付费专栏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-付费专栏","aria-hidden":"true"},"#"),a(),e("strong",null,"5）付费专栏")],-1),N={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},O=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/thread-20230410210802.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Q=e("p",null,"一句话介绍一下二哥的编程星球，这是一个编程学习指南 + Java项目实战 + LeetCode 刷题的私密圈子，你可以阅读星球专栏、向二哥提问、帮你制定学习计划、和球友一起打卡成长。这是 PDF 的大致内容，想要加入星球的用户，可以提前感受一下。",-1),T=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/thread-20230410211343.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),K={href:"http://gk.link/a/11cBH",target:"_blank",rel:"noopener noreferrer"},M=e("a",{href:"http://gk.link/a/11cBH",target:"_blank"},[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/thread-20230410204829.png"})],-1),Z=e("h2",{id:"四、优质八股文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四、优质八股文","aria-hidden":"true"},"#"),a(" 四、优质八股文")],-1),X={href:"https://javabetter.cn/sidebar/sanfene/javathread.html",target:"_blank",rel:"noopener noreferrer"},Y=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-7.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),$=e("p",null,"为了方便大家的阅读和背诵，我已经将其整理到了二哥的小破站《Java进阶之路》上，面渣逆袭 Java 并发篇：",-1),ee={href:"https://javabetter.cn/sidebar/sanfene/javathread.html",target:"_blank",rel:"noopener noreferrer"},ae=e("p",null,"Java 并发编程八股文（背诵版）：",-1),te={href:"https://javabetter.cn/baguwen/java-thread.html",target:"_blank",rel:"noopener noreferrer"},re=n('<p>这两份八股文的质量都非常高，来看一下AQS了解多少小节下的内容，图文并茂，非常容易消化和吸收。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>诚实点说，如果能把这两份八股文背会的话，简历上就真的敢写“精通”Java 并发了。</p><h2 id="五、java-并发学习心得" tabindex="-1"><a class="header-anchor" href="#五、java-并发学习心得" aria-hidden="true">#</a> 五、Java 并发学习心得</h2><p>Java 提供的并发组件，大致可以分为两类：</p><ul><li>从预防阶段下手，防止错误发生，比如说 synchronized 关键字</li><li>一旦发生错误能及时重试，比如说 CAS</li></ul><p>对于线程数量比较多的并发场景，采用预防的措施会比较合理，这样大部分线程就不会因为小概率时间的 CAS 重试浪费掉大量的 CPU 周期；在线程数量小的时候，CAS 的意义就比较大，因为预防措施带来的线程切换要比 CAS 等待的开销更大。</p><p>想要学好 Java 并发编程，就必须得对下图中提到的基础概念进行充分的理解。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在我看来，并发编程主要是用来解决这两个痛点的：</p><ul><li>多个线程对同一变量造成的不一致问题；</li><li>为提高性能，计算机的很多执行单元都配备了缓存，那势必会影响并发编程的数据一致性。</li></ul><p>需要提醒一点的是，多线程并发虽然是用来解决性能问题的，但并不意味着所有情况下都需要开启多线程，有时候反而会适得其反，那如果不是特别要求，尽量不要过早开启多线程。</p><p>并发编程是 Java 体系当中相对难掌握的一块知识点，比较考验一名程序员的内功，其实并发编程最早的应用领域就是操作系统的实现。</p><p>如果你已经有一定的编程经验，建议先学一下《计算机组成原理》，对操作系统、内存、CPU 先进行一些大致的了解，然后再来学习 Java 并发编程，可能就会感觉舒服多了！</p><p>结合我多年的工作经验来看，并发编程可以抽象成<strong>三个核心问题：分工、同步和互斥</strong>。</p><p>1）分工</p><p>分工指的是如何高效地拆解任务并分配给线程，像并发编程领域的一些设计模式，比如说生产者与消费者就是用来进行分工的。</p><p>2）同步</p><p>同步指的是线程之间如何协作，一个线程执行完了一个任务，要通知另外一个线程开工。还拿生产者-消费者模型来说吧，当队列满的时候，生产者线程等待，当队列不满的时候，生产者线程需要被唤醒重新执行；当队列空的时候，消费者线程开始等待，不空的时候，消费者线程被重新唤醒。</p><p>3）互斥</p><p>互斥指的是保证同一时刻只有一个线程访问共享资源，是解决线程安全问题的杀手锏。</p><p>当多个线程同时访问一个共享变量的时候，很容易出现“线程安全”问题，因为结果可能是不确定的——导致出现这个问题的根源就是可见性、有序性和原子性——为了解决它们，Java 引入了内存模型的概念，可以在一定程度上缓解“线程安全”的问题，但要想完全解决“线程安全”问题，还得靠互斥。</p><p>互斥的核心技术就是锁，比如说 synchronized，还有各种 Lock。</p><p>锁可以解决线程安全的问题，但同时也就意味着程序的性能要受到影响。</p><p>因此，Java 提供了针对不同场景下的锁，比如说读写锁 ReadWriteLock，可以解决多线程同时读，但只有一个线程能写的问题；但 ReadWriteLock 也有自己的问题，就是如果有线程正在读，写线程需要等待度线程释放锁后才能获得写锁，也就是读的过程中不允许写，属于一种悲观的读锁。</p><p>为了进一步提升并发执行的效率，Java 8 引入了一个新的读写锁 StampedLock，与ReadWriteLock 相比，StampedLock的优势在于读的过程中也允许获取写锁后写入，但带来的问题就是可能读的数据不一致，需要一点额外的代码来判断读的过程中是否有写入，本质上是一种乐观的锁。</p><p>乐观锁的意思就是估计读的过程中大概率不会有写入，而悲观锁则是读的过程中拒绝有写入，两者的区别就在于性能上会有差异，乐观锁需要针对小概率事件进行多一步的检测，但性能也会有所提升；悲观锁更能保证“线程安全性”。</p><p>听我这么一说，是不是一下子就清晰多了！</p><p>另外，需要 Java 学习资料的话，可以直接戳我整理的这个 GitHub/码云仓库——📚Java程序员必读书单整理，附下载地址，助力每一个Java程序员构建属于自己的知识体系。包括但不限于Java、设计模式、计算机网络、操作系统、数据库、数据结构与算法、大数据、架构、面试等等。</p>',29),ne={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},ie=e("p",null,"给大家截图展示一下里面都有哪些优质的 PDF：",-1),le=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/java-books.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),se=e("p",null,[e("strong",null,"Java 并发编程虽然难学，会涉及到操作系统、CPU、内存等偏基础方面的内容，但如果你能坚持学下去，内功自然而然就提升了一大截"),a("。")],-1),ce=e("hr",null,null,-1),he={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},de={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},pe=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),a(" 即可免费领取。")],-1),ue=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function ge(be,_e){const t=i("ExternalLinkIcon");return l(),s("div",null,[h,e("blockquote",null,[e("p",null,[e("a",d,[a("https://javabetter.cn/home.html"),r(t)])])]),p,u,g,b,_,e("blockquote",null,[e("p",null,[a("视频地址："),e("a",v,[a("https://www.bilibili.com/video/BV16J411h7Rd"),r(t)])])]),f,m,e("blockquote",null,[e("p",null,[a("视频地址："),e("a",J,[a("https://www.bilibili.com/video/BV1Kw411Z7dF/"),r(t)])])]),j,e("p",null,[a("纸质书只推荐一本《"),e("a",x,[a("Java 并发编程实战"),r(t)]),a("》，豆瓣评分 9.0。不过这本书确实有点老了，基本上是按照 Java 6 来讲解的，希望出版社能早点出 2.0 版。")]),k,y,z,w,C,e("p",null,[a("如果发现不是很好懂，想从国内作者下手的话，可以尝试一下《"),e("a",L,[a("Java并发编程的艺术"),r(t)]),a("》和《"),e("a",B,[a("图解Java并发编程"),r(t)]),a("》这两本书，虽然豆瓣上评分一般，但对于构建 Java 并发的知识体系还是有很大帮助的。")]),S,R,e("p",null,[a("推荐 RedSpider社区的"),e("a",P,[a("深入浅出 Java 多线程"),r(t)]),a("，比Java 并发编程实战更通俗易懂一些，因为里面穿插了很多精美的手绘图。")]),A,e("blockquote",null,[e("p",null,[a("GitHub地址："),e("a",q,[a("https://github.com/RedSpider1/concurrent"),r(t)])])]),e("p",null,[a("考虑到有些小伙伴可能需要 "),e("a",H,[a("PDF 版本"),r(t)]),a("，我花了一周的时间整理了一份，需要的小伙伴请扫描下方的二维码关注作者的原创公众号「"),V,a("」回复关键字「"),D,a("」就可以拉取到了。")]),F,U,e("blockquote",null,[e("p",null,[e("a",E,[a("https://github.com/CL0610/Java-concurrency"),r(t)])])]),G,I,W,e("p",null,[a("技术派楼仔出品的《Java 并发编程》小册，暂时只对《"),e("a",N,[a("二哥的编程星球（戳链接有优惠券）"),r(t)]),a("》用户开放，如果你需要这份 PDF 并且想享受更多服务的话，可以扫码加入。")]),O,Q,T,e("p",null,[a("王宝令老师在极客时间上开了一门《Java 并发编程实战》的付费专栏，质量还是挺高的，喜欢的小伙伴可以戳"),e("a",K,[a("链接"),r(t)]),a("去购买。")]),M,Z,e("p",null,[a("这里给大家推荐两份 Java 并发编程方面的八股文，一份来自"),e("a",X,[a("三分恶滴滴的面渣逆袭"),r(t)]),a("，一份来自小牛，先截图给大家看一下 Java 并发方面都有哪些高频的面试题。")]),Y,$,e("blockquote",null,[e("p",null,[e("a",ee,[a("https://javabetter.cn/sidebar/sanfene/javathread.html"),r(t)])])]),ae,e("blockquote",null,[e("p",null,[e("a",te,[a("https://javabetter.cn/baguwen/java-thread.html"),r(t)])])]),re,e("ul",null,[e("li",null,[a("GitHub 地址："),e("a",ne,[a("https://github.com/itwanger/JavaBooks"),r(t)])]),e("li",null,[a("码云地址："),e("a",oe,[a("https://gitee.com/itwanger/JavaBooks"),r(t)])])]),ie,le,se,ce,e("p",null,[a("GitHub 上标星 8700+ 的开源知识库《"),e("a",he,[a("二哥的 Java 进阶之路"),r(t)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),e("a",de,[a("太赞了，GitHub 上标星 8700+ 的 Java 教程"),r(t)])]),pe,ue])}const me=o(c,[["render",ge],["__file","thread.html.vue"]]);export{me as default};
