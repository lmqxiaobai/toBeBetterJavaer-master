const e=JSON.parse('{"key":"v-9ae84c1e","path":"/thread/volatile.html","title":"Java并发编程volatile关键字解析","lang":"zh-CN","frontmatter":{"title":"Java并发编程volatile关键字解析","shortTitle":"volatile关键字解析","description":"Java并发编程volatile关键字解析","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,volatile"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/volatile.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java并发编程volatile关键字解析"}],["meta",{"property":"og:description","content":"Java并发编程volatile关键字解析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发编程volatile关键字解析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"volatile 变量的特性","slug":"volatile-变量的特性","link":"#volatile-变量的特性","children":[]},{"level":2,"title":"volatile 禁止指令重排规则","slug":"volatile-禁止指令重排规则","link":"#volatile-禁止指令重排规则","children":[]},{"level":2,"title":"volatile 禁止指令重排分析","slug":"volatile-禁止指令重排分析","link":"#volatile-禁止指令重排分析","children":[]},{"level":2,"title":"volatile 不适用场景","slug":"volatile-不适用场景","link":"#volatile-不适用场景","children":[{"level":3,"title":"volatile 不适合复合操作","slug":"volatile-不适合复合操作","link":"#volatile-不适合复合操作","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}]},{"level":2,"title":"单例模式的双重锁要加volatile","slug":"单例模式的双重锁要加volatile","link":"#单例模式的双重锁要加volatile","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":7.19,"words":2157},"filePathRelative":"thread/volatile.md","localizedDate":"2022年3月23日","excerpt":"<h1> Java并发编程volatile关键字解析</h1>\\n<p>“三妹啊，这节我们来学习 Java 并发编程中的 volatile 关键字，以及容易遇到的坑。”看着三妹好学的样子，我倍感欣慰。</p>\\n<p>“好呀，哥。”三妹愉快的答应了。</p>\\n<h2> volatile 变量的特性</h2>\\n<p>volatile 可以保证可见性，但不保证原子性：</p>\\n<ul>\\n<li>当写一个 volatile 变量时，JMM 会把该线程本地内存中的变量强制刷新到主内存中去；</li>\\n<li>这个写操作会导致其他线程中的 volatile 变量缓存无效。</li>\\n</ul>\\n<h2> volatile 禁止指令重排规则</h2>"}');export{e as data};
