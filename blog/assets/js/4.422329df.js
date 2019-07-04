(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(t,s,a){t.exports=a.p+"assets/img/loop.5269fc0a.png"},190:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"js执行原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js执行原理","aria-hidden":"true"}},[t._v("#")]),t._v(" JS执行原理")]),t._v(" "),n("h2",{attrs:{id:"js是单线程语言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js是单线程语言","aria-hidden":"true"}},[t._v("#")]),t._v(" JS是"),n("code",[t._v("单线程")]),t._v("语言")]),t._v(" "),n("ul",[n("li",[t._v("JS的执行是按照语句出现的先后顺序执行的，即同步执行")]),t._v(" "),n("li",[t._v("单线程的原因：防止多次操作同一个DOM，并且是矛盾的操作，导致无法判断谁有决定权")])]),t._v(" "),n("h3",{attrs:{id:"线程和进程的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("线程")]),t._v("和"),n("code",[t._v("进程")]),t._v("的区别")]),t._v(" "),n("ol",[n("li",[t._v("进程：从计算机硬件执行角度上考虑，所有的程序执行都需要"),n("code",[t._v("CPU")]),t._v("的调控和运行，在某个程序A执行的过程中，CPU需要先加载其所需要的"),n("code",[t._v("上下文环境")]),t._v("，运行程序，最后保存其上下文环境的整个执行时间的总和")]),t._v(" "),n("li",[t._v("线程：指在一个进程下的更细小的CPU时间段，线程共享一个进程的上下文环境")]),t._v(" "),n("li",[t._v("一般情况一个进程可以包含多个线程")])]),t._v(" "),n("h2",{attrs:{id:"浏览器是多进程的应用程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程的应用程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器是"),n("code",[t._v("多进程")]),t._v("的应用程序")]),t._v(" "),n("ol",[n("li",[t._v("Browser进程")]),t._v(" "),n("li",[t._v("第三方插件进程")]),t._v(" "),n("li",[t._v("GPU进程")]),t._v(" "),n("li",[t._v("浏览器渲染进程")])]),t._v(" "),n("ul",[n("li",[t._v("采用多进程的优势：避免单个进程崩溃导致整个浏览器的崩溃，互相直接隔离不干扰")]),t._v(" "),n("li",[t._v("和前端渲染有关的进程是浏览器渲染进程")])]),t._v(" "),n("h2",{attrs:{id:"浏览器渲染进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染进程","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器渲染进程")]),t._v(" "),n("ul",[n("li",[t._v("包含多个线程：\n"),n("ol",[n("li",[t._v("GUI渲染线程")]),t._v(" "),n("li",[t._v("JS引擎线程")]),t._v(" "),n("li",[t._v("事件触发线程")]),t._v(" "),n("li",[t._v("定时器触发线程")]),t._v(" "),n("li",[t._v("异步http请求线程")])])]),t._v(" "),n("li",[t._v("其中GUI和JS引擎为互斥线程，因此JS的解析会"),n("code",[t._v("阻塞")]),t._v("页面的渲染")])]),t._v(" "),n("h2",{attrs:{id:"js代码的执行顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js代码的执行顺序","aria-hidden":"true"}},[t._v("#")]),t._v(" JS代码的执行顺序")]),t._v(" "),n("ul",[n("li",[t._v("任务进入"),n("code",[t._v("执行栈")]),t._v("：\n"),n("ol",[n("li",[t._v("同步任务——主线程-执行完毕主线程为空的时候开始读取队列的函数-推到主线程执行栈执行")]),t._v(" "),n("li",[t._v("异步任务——"),n("code",[t._v("Event Table")]),t._v("-注册对应回调函数-事件触发将任务置于"),n("code",[t._v("Event Queue")])]),t._v(" "),n("li",[t._v("主线程任务执行结束空闲时，开始查询Event Queue中是否有等待的异步任务，如果有则进入到主线程中执行")]),t._v(" "),n("li",[t._v("整个流程就一直循环进行。")])])])]),t._v(" "),n("h2",{attrs:{id:"异步任务包含宏任务和微任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步任务包含宏任务和微任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步任务包含"),n("code",[t._v("宏任务")]),t._v("和"),n("code",[t._v("微任务")])]),t._v(" "),n("ul",[n("li",[t._v("宏任务是值一般等待的耗时时间比较久的任务，包含以下：\n"),n("code",[t._v("setTimeout")]),t._v("、"),n("code",[t._v("MessageChannel")]),t._v("、"),n("code",[t._v("postMessage")]),t._v("、"),n("code",[t._v("setImmediate")])]),t._v(" "),n("li",[t._v("微任务指的是耗时短，迅速执行的任务，包含以下：\n"),n("code",[t._v("MutationObsever")]),t._v("、"),n("code",[t._v("Promise.then")]),t._v("等")]),t._v(" "),n("li",[t._v("两者之间的关系是：\n先执行一个宏任务，执行结束之后再查看队列中是否有等待执行的微任务，如果有，将对应的所有等待的微任务全部执行完毕，一次事件循环结束，进入下一个宏任务，具体流程如下图所示：\n"),n("img",{attrs:{src:a(168),alt:"avatar"}})])]),t._v(" "),n("h2",{attrs:{id:"案例分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例分析")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("333")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("444")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回的先后顺序是：222=>444=>333=>111")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主线程任务(第一次宏任务)=>执行注册的微任务then")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// =>执行第二个宏任务setTimeout")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports}}]);