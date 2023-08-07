const e=JSON.parse('{"key":"v-aa6f42a4","path":"/nice-article/weixin/zhifxtjgzmsjwntywdyp.html","title":"支付系统就该这么设计（万能通用），稳的一批！","lang":"zh-CN","frontmatter":{"title":"支付系统就该这么设计（万能通用），稳的一批！","shortTitle":"支付系统就该这么设计（万能通用），稳的一批！","description":"支付系统到底长什么样，又是怎么运行交互的呢？","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://javabetter.cn/nice-article/weixin/zhifxtjgzmsjwntywdyp.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"支付系统就该这么设计（万能通用），稳的一批！"}],["meta",{"property":"og:description","content":"支付系统到底长什么样，又是怎么运行交互的呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T04:52:56.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:modified_time","content":"2023-02-22T04:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支付系统就该这么设计（万能通用），稳的一批！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-22T04:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"1. 支付系统总览","slug":"_1-支付系统总览","link":"#_1-支付系统总览","children":[{"level":3,"title":"核心系统交互","slug":"核心系统交互","link":"#核心系统交互","children":[]},{"level":3,"title":"业务图谱","slug":"业务图谱","link":"#业务图谱","children":[]}]},{"level":2,"title":"2. 核心系统解析","slug":"_2-核心系统解析","link":"#_2-核心系统解析","children":[{"level":3,"title":"交易核心","slug":"交易核心","link":"#交易核心","children":[]},{"level":3,"title":"支付核心","slug":"支付核心","link":"#支付核心","children":[]},{"level":3,"title":"渠道网关","slug":"渠道网关","link":"#渠道网关","children":[]},{"level":3,"title":"资金核算","slug":"资金核算","link":"#资金核算","children":[]}]},{"level":2,"title":"3. 服务治理","slug":"_3-服务治理","link":"#_3-服务治理","children":[{"level":3,"title":"平台统一上下文","slug":"平台统一上下文","link":"#平台统一上下文","children":[]},{"level":3,"title":"数据一致性治理","slug":"数据一致性治理","link":"#数据一致性治理","children":[]},{"level":3,"title":"DB拆分","slug":"db拆分","link":"#db拆分","children":[]},{"level":3,"title":"异步化","slug":"异步化","link":"#异步化","children":[]}]},{"level":2,"title":"4. 生产实践","slug":"_4-生产实践","link":"#_4-生产实践","children":[{"level":3,"title":"性能压测","slug":"性能压测","link":"#性能压测","children":[]},{"level":3,"title":"稳定性治理","slug":"稳定性治理","link":"#稳定性治理","children":[]},{"level":3,"title":"核心链路分离","slug":"核心链路分离","link":"#核心链路分离","children":[]},{"level":3,"title":"服务依赖降级","slug":"服务依赖降级","link":"#服务依赖降级","children":[]}]}],"git":{"createdTime":1673745531000,"updatedTime":1677041576000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":4.43,"words":1329},"filePathRelative":"nice-article/weixin/zhifxtjgzmsjwntywdyp.md","localizedDate":"2023年1月15日","excerpt":"<blockquote>\\n<p>作者：PetterLiu</p>\\n<p>来源：<a href=\\"http://www.cnblogs.com/wintersun/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">www.cnblogs.com/wintersun/</a></p>\\n</blockquote>\\n<p>支付永远是一个公司的核心领域，因为这是一个有交易属性公司的命脉。那么，支付系统到底长什么样，又是怎么运行交互的呢?抛开带有支付牌照的金融公司的支付架构，下述链路和系统组成基本上符合绝大多数支付场景。其实整体可以看成是交易核心+支付核心 两个大系统。交易系统关联了业务场景和底层支付，而支付系统完成了调用支付工具到对账清算等一系列相关操作。下面我们就来一起看下各个系统的核心组成和交互。</p>"}');export{e as data};
