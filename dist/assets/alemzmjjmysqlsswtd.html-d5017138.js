const e=JSON.parse('{"key":"v-1ea792f1","path":"/nice-article/weixin/alemzmjjmysqlsswtd.html","title":"如何解决 MySQL 死锁问题？","lang":"zh-CN","frontmatter":{"title":"如何解决 MySQL 死锁问题？","shortTitle":"如何解决 MySQL 死锁问题？","description":"咱们使用 MySQL 大概率上都会遇到死锁问题，这实在是个令人非常头痛的","author":"狼王","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://javabetter.cn/nice-article/weixin/alemzmjjmysqlsswtd.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"如何解决 MySQL 死锁问题？"}],["meta",{"property":"og:description","content":"咱们使用 MySQL 大概率上都会遇到死锁问题，这实在是个令人非常头痛的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"狼王"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何解决 MySQL 死锁问题？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狼王\\"}]}"]]},"headers":[{"level":2,"title":"什么是死锁","slug":"什么是死锁","link":"#什么是死锁","children":[]},{"level":2,"title":"InnoDB 锁类型","slug":"innodb-锁类型","link":"#innodb-锁类型","children":[]},{"level":2,"title":"间隙锁( gap lock )","slug":"间隙锁-gap-lock","link":"#间隙锁-gap-lock","children":[]},{"level":2,"title":"next-key lock","slug":"next-key-lock","link":"#next-key-lock","children":[]},{"level":2,"title":"意向锁( Intention lock )","slug":"意向锁-intention-lock","link":"#意向锁-intention-lock","children":[]},{"level":2,"title":"插入意向锁( Insert Intention lock )","slug":"插入意向锁-insert-intention-lock","link":"#插入意向锁-insert-intention-lock","children":[]},{"level":2,"title":"锁模式兼容矩阵","slug":"锁模式兼容矩阵","link":"#锁模式兼容矩阵","children":[]},{"level":2,"title":"阅读死锁日志","slug":"阅读死锁日志","link":"#阅读死锁日志","children":[]},{"level":2,"title":"日志分析如下:","slug":"日志分析如下","link":"#日志分析如下","children":[]},{"level":2,"title":"经典案例分析","slug":"经典案例分析","link":"#经典案例分析","children":[]},{"level":2,"title":"案例一:事务并发 insert 唯一键冲突","slug":"案例一-事务并发-insert-唯一键冲突","link":"#案例一-事务并发-insert-唯一键冲突","children":[]},{"level":2,"title":"案例二:先 update 再 insert 的并发死锁问题","slug":"案例二-先-update-再-insert-的并发死锁问题","link":"#案例二-先-update-再-insert-的并发死锁问题","children":[]},{"level":2,"title":"如何尽可能避免死锁","slug":"如何尽可能避免死锁","link":"#如何尽可能避免死锁","children":[]}],"git":{"createdTime":1667089581000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":9.46,"words":2837},"filePathRelative":"nice-article/weixin/alemzmjjmysqlsswtd.md","localizedDate":"2022年10月30日","excerpt":"<p>使用 MySQL 的过程中，大概率上都会遇到死锁问题，这实在是个令人头痛的问题。今天二哥就来对死锁进行一个详细地分析，并结合常见的死锁案例进行探讨，同时，给出一些如何去尽可能避免死锁的建议，希望能给球友们一些帮助和启发。</p>\\n<h2> 什么是死锁</h2>\\n<p>死锁是并发系统中一个常见的问题，同样也会出现在数据库 MySQL 的并发读写请求场景中。</p>\\n<p>当两个及以上的事务，都在等待对方释放已经持有的锁，或因为加锁顺序不一致造成循环等待锁资源的时候，就会出现“<strong>死锁</strong>”。</p>\\n<p>常见的报错信息为 <code>Deadlock found when trying to get lock...</code>。</p>"}');export{e as data};