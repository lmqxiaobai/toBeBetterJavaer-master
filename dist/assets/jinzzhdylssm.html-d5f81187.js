const t=JSON.parse('{"key":"v-6c7a141a","path":"/nice-article/zhihu/jinzzhdylssm.html","title":"进制转换的原理是什么？","lang":"zh-CN","frontmatter":{"title":"进制转换的原理是什么？","shortTitle":"进制转换的原理是什么？","description":"老实说我不知道你那里不懂……求更多解释……我先猜着来，有什么不合适的，您说话。据我推测，你这个阶段…","tag":["优质文章"],"author":"曹文雯","category":["知乎"],"head":[["meta",{"name":"keywords","content":"数学,编程,计算机,二进制,高中数学"}],["meta",{"property":"og:url","content":"https://javabetter.cn/nice-article/zhihu/jinzzhdylssm.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"进制转换的原理是什么？"}],["meta",{"property":"og:description","content":"老实说我不知道你那里不懂……求更多解释……我先猜着来，有什么不合适的，您说话。据我推测，你这个阶段…"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"曹文雯"}],["meta",{"property":"article:tag","content":"优质文章"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"进制转换的原理是什么？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹文雯\\"}]}"]]},"headers":[],"git":{"createdTime":1671605820000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":4.33,"words":1300},"filePathRelative":"nice-article/zhihu/jinzzhdylssm.md","localizedDate":"2022年12月21日","excerpt":"<p>老实说，在我一开始学编程的时候，根本没有去关注进制之间的转换问题，直到后来阅读了一本《程序是怎样跑起来的》，里面对进制转换，尤其是十进制和二进制之间的转换，感觉十分有趣。</p>\\n<p>比如说二进制左移一位，会发生什么？</p>\\n<p>右移一位，又会发生什么？</p>\\n<p>明白了之后，当我再去阅读 JDK 的一些涉及到位移/取余的代码的时候，就会恍然大悟，哦，原来如此啊。那今天这篇内容也希望给球友们一些帮助和参考。</p>\\n<p>二进制换十进制 是比 十进制换二进制更基础的，我们从这里讲起。</p>\\n<p>进制这事儿，说到底就是位值原理，即：</p>\\n<p><strong>同一个数字，放在不同的数位上，代表不同大小的数</strong>。</p>"}');export{t as data};
