(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{179:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"原生常用api总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生常用api总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 原生常用API总结")]),t._v(" "),s("h2",{attrs:{id:"url类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url类","aria-hidden":"true"}},[t._v("#")]),t._v(" URL类")]),t._v(" "),s("ul",[s("li",[t._v("eg-url = 'https://b.jianbing.com/act/home/huodong/20190318.php?p=jianbing#reload'")])]),t._v(" "),s("ol",[s("li",[t._v("window.location.href——url")]),t._v(" "),s("li",[t._v("window.location.origin——https://b.jianbing.com(域源)")]),t._v(" "),s("li",[t._v("window.location.host——b.jianbing.com(域名)")]),t._v(" "),s("li",[t._v("window.location.protocol——https(协议)")]),t._v(" "),s("li",[t._v("window.location.pathname——b.jianbing.com/act/home/huodong/20190318.php(URL名称)")]),t._v(" "),s("li",[t._v("window.location.search——?p=jianbing(URL参数)")]),t._v(" "),s("li",[t._v("window.location.hash——#reload(Hash参数)")])]),t._v(" "),s("h2",{attrs:{id:"css选择器类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css选择器类","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS选择器类")]),t._v(" "),s("ul",[s("li",[t._v("这两种DOM选择符查找的是静态的DOM元素，取出之后不会随着文档流中元素的变化而变化")])]),t._v(" "),s("ol",[s("li",[t._v("document.querySelector(selectors)——selectors是对应的选择器字符串,查找出对应的元素组中的第一个")]),t._v(" "),s("li",[t._v("document.querySelectorAll(selectors)——查找出对应的所有元素的节点集合(NodeList)")])]),t._v(" "),s("ul",[s("li",[t._v("以下选择器查找的是动态的DOM元素，每次都会重新查询一次文档流中DOM节点")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("document.getElementById(id)——通过元素的id进行查找")]),t._v(" "),s("li",[t._v("document.getElementsByTagName(标签名)——通过标签名查找对应的元素集合，是一个数组")]),t._v(" "),s("li",[t._v("document.getElementsByClassName(类名)——通过类名查找对应元素集合")]),t._v(" "),s("li",[t._v("document.styleSheets[0].addRules(ele, style)——向对应的元素添加特定样式，特别是伪类")])]),t._v(" "),s("h2",{attrs:{id:"dom操作类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom操作类","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM操作类")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Element.getBoundingClientRect()——返回元素的属性以及相对于视窗的位置")]),t._v(" "),s("ol",[s("li",[t._v("返回的是一个对象，对象包含[width, height, left, top, right, bottom]等属性")]),t._v(" "),s("li",[t._v("一般主流浏览器都支持")])])]),t._v(" "),s("li",[s("p",[t._v("获取视窗宽高")])])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取视窗宽高的兼容写法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" clientWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" clientHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"日期类兼容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期类兼容","aria-hidden":"true"}},[t._v("#")]),t._v(" 日期类兼容")]),t._v(" "),s("ul",[s("li",[t._v("new Date()设置日期在IOS中的兼容问题")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-03-18 17:55:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这种‘-’日期连接方式在IOS中不支持")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// debug")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-03-18 17:55:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/-/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即用'/'代替'-'对日期进行定义即可")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"audio类兼容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio类兼容","aria-hidden":"true"}},[t._v("#")]),t._v(" audio类兼容")]),t._v(" "),s("ul",[s("li",[t._v("微信端audio播放写法")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WeixinJSBridgeReady'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    audioDom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保WeixinJSBridge加载完成执行对应回调")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}],!1,null,null,null);a.default=e.exports}}]);