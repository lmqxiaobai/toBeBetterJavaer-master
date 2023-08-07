const e=JSON.parse('{"key":"v-5bc8e34a","path":"/basic-grammar/basic-data-type.html","title":"Java数据类型全解析：基本数据类型与引用数据类型","lang":"zh-CN","frontmatter":{"title":"Java数据类型全解析：基本数据类型与引用数据类型","shortTitle":"Java数据类型","category":["Java核心"],"tag":["Java语法基础"],"description":"本文详细探讨了Java数据类型，包括比特与字节、基本数据类型、单精度与双精度、int与char互转、包装器类型、引用数据类型以及堆与栈的内存模型。通过阅读本文，您将全面了解Java数据类型的概念与使用方法，为Java编程打下坚实基础。","head":[["meta",{"name":"keywords","content":"Java, 数据类型, 比特, 字节, 基本数据类型, 引用数据类型, 单精度, 双精度, int, char, 包装器类型, 堆, 栈, 内存模型, 类型转换"}],["meta",{"property":"og:url","content":"https://javabetter.cn/basic-grammar/basic-data-type.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java数据类型全解析：基本数据类型与引用数据类型"}],["meta",{"property":"og:description","content":"本文详细探讨了Java数据类型，包括比特与字节、基本数据类型、单精度与双精度、int与char互转、包装器类型、引用数据类型以及堆与栈的内存模型。通过阅读本文，您将全面了解Java数据类型的概念与使用方法，为Java编程打下坚实基础。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java语法基础"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java数据类型全解析：基本数据类型与引用数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、比特和字节","slug":"_01、比特和字节","link":"#_01、比特和字节","children":[]},{"level":3,"title":"02、基本数据类型","slug":"_02、基本数据类型","link":"#_02、基本数据类型","children":[]},{"level":3,"title":"03、单精度和双精度","slug":"_03、单精度和双精度","link":"#_03、单精度和双精度","children":[]},{"level":3,"title":"04、int 和 char 类型互转","slug":"_04、int-和-char-类型互转","link":"#_04、int-和-char-类型互转","children":[]},{"level":3,"title":"05、包装器类型","slug":"_05、包装器类型","link":"#_05、包装器类型","children":[]},{"level":3,"title":"06、引用数据类型","slug":"_06、引用数据类型","link":"#_06、引用数据类型","children":[]},{"level":3,"title":"07、堆和栈","slug":"_07、堆和栈","link":"#_07、堆和栈","children":[]},{"level":3,"title":"08、小结","slug":"_08、小结","link":"#_08、小结","children":[]}],"git":{"createdTime":1634887330000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":19},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":15.94,"words":4781},"filePathRelative":"basic-grammar/basic-data-type.md","localizedDate":"2021年10月22日","excerpt":"<h1> 3.3 Java 数据类型</h1>\\n<p>“Java 是一种静态类型的编程语言，这意味着所有变量必须在使用之前声明好，也就是必须得先指定变量的类型和名称。”我吸了一口麦香可可奶茶后对三妹说。</p>\\n<p>Java 中的数据类型可分为 2 种：</p>\\n<p>1）<strong>基本数据类型</strong>。</p>\\n<p>基本数据类型是 Java 语言操作数据的基础，包括 boolean、char、byte、short、int、long、float 和 double，共 8 种。</p>\\n<p>2）<strong>引用数据类型</strong>。</p>\\n<p>除了基本数据类型以外的类型，都是所谓的引用类型。常见的有<a href=\\"https://javabetter.cn/array/array.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">数组</a>（对，没错，数组是引用类型，后面我们会讲）、class（也就是<a href=\\"https://javabetter.cn/oo/object-class.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">类</a>），以及<a href=\\"https://javabetter.cn/oo/interface.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">接口</a>（指向的是实现接口的类的对象）。</p>"}');export{e as data};