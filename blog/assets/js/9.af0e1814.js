(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(e,v,_){"use strict";_.r(v);var l=_(0),a=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"flex布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex布局","aria-hidden":"true"}},[e._v("#")]),e._v(" Flex布局")]),e._v(" "),_("h2",{attrs:{id:"flex基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" flex基本概念")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("容器")]),e._v("具有这样的特点：父容器可以统一设置子容器的排列方式，子容器也可以单独设置自身的排列方式，如果两者同时设置，以子容器的设置为准。\n"),_("ol",[_("li",[e._v("轴——主轴，交叉轴")]),e._v(" "),_("li",[e._v("容器——父容器，子容器")])])])]),e._v(" "),_("h2",{attrs:{id:"flex基本属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex基本属性","aria-hidden":"true"}},[e._v("#")]),e._v(" flex基本属性")]),e._v(" "),_("h3",{attrs:{id:"一-父容器设置属性（以父容器作为布局基准）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-父容器设置属性（以父容器作为布局基准）","aria-hidden":"true"}},[e._v("#")]),e._v(" 一.父容器设置属性（以父容器作为布局基准）")]),e._v(" "),_("ul",[_("li",[e._v("设置子容器沿主轴排列："),_("code",[e._v("justify-content")]),e._v("——用于定义如何沿着主轴(横轴)方向排列子容器，包含以下属性值：\n"),_("ol",[_("li",[_("code",[e._v("flex-start")]),e._v("：起始端对齐")]),e._v(" "),_("li",[_("code",[e._v("flex-end")]),e._v("：末尾段对齐")]),e._v(" "),_("li",[_("code",[e._v("center")]),e._v("：居中对齐")]),e._v(" "),_("li",[_("code",[e._v("space-around")]),e._v("：子容器沿主轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半")]),e._v(" "),_("li",[_("code",[e._v("space-between")]),e._v("：子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切")])])]),e._v(" "),_("li",[e._v("设置子容器如何沿交叉轴排列："),_("code",[e._v("align-items")]),e._v("——用于定义如何沿着交叉(纵轴)轴方向分配子容器的间距，包含以下属性值：\n"),_("ol",[_("li",[_("code",[e._v("flex-start")]),e._v("：起始端对齐")]),e._v(" "),_("li",[_("code",[e._v("flex-end")]),e._v("：末尾段对齐")]),e._v(" "),_("li",[_("code",[e._v("center")]),e._v("：居中对齐")]),e._v(" "),_("li",[_("code",[e._v("baseline")]),e._v("：基线对齐，这里的 baseline 默认是指首行文字，即 first baseline，所有子容器向基线对齐，交叉轴起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线")]),e._v(" "),_("li",[_("code",[e._v("stretch")]),e._v("：子容器沿交叉轴方向的尺寸拉伸至与父容器一致")])])])]),e._v(" "),_("h3",{attrs:{id:"二-子容器设置属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-子容器设置属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 二.子容器设置属性")]),e._v(" "),_("ul",[_("li",[e._v("在主轴上如何伸缩：flex属性，包含以下属性值：\n"),_("ol",[_("li",[e._v("无单位数字——比例")]),e._v(" "),_("li",[e._v("带单位px的数字")]),e._v(" "),_("li",[e._v("none不伸缩")])])]),e._v(" "),_("li",[e._v("单独设置子容器如何沿交叉轴排列："),_("code",[e._v("align-self")]),e._v("，包含的属性同"),_("code",[e._v("align-items")]),e._v("保持一致。")])]),e._v(" "),_("h3",{attrs:{id:"三-在父容器上设置flex轴（主轴，交叉轴）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-在父容器上设置flex轴（主轴，交叉轴）","aria-hidden":"true"}},[e._v("#")]),e._v(" 三.在父容器上设置flex轴（主轴，交叉轴）")]),e._v(" "),_("ul",[_("li",[e._v("主轴伸缩方向\n"),_("ol",[_("li",[e._v("从左向右："),_("code",[e._v("flex-direction")]),e._v(": "),_("code",[e._v("row")])]),e._v(" "),_("li",[e._v("向左：flex-direction:"),_("code",[e._v("row-reverse")])]),e._v(" "),_("li",[e._v("从上向下：flex-direction: "),_("code",[e._v("column")])]),e._v(" "),_("li",[e._v("向上：flex-direction: "),_("code",[e._v("column-reverse")])])])])]),e._v(" "),_("h3",{attrs:{id:"四-在父容器上设置是否换行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四-在父容器上设置是否换行","aria-hidden":"true"}},[e._v("#")]),e._v(" 四.在父容器上设置是否换行")]),e._v(" "),_("ul",[_("li",[e._v("对应属性："),_("code",[e._v("flex-wrap")]),e._v("，属性值如下：\n"),_("ol",[_("li",[_("code",[e._v("nowrap")]),e._v("：不换行")]),e._v(" "),_("li",[_("code",[e._v("wrap")]),e._v("：换行")]),e._v(" "),_("li",[_("code",[e._v("wrap-reverse")]),e._v("：逆序换行,沿着交叉轴反方向排列")]),e._v(" "),_("li",[e._v("轴向与换行组合设置："),_("code",[e._v("flex-flow")]),e._v(",相当于 flex-direction 与 flex-wrap 的组合")]),e._v(" "),_("li",[e._v("多行沿交叉轴对齐："),_("code",[e._v("align-content")]),e._v(",当子容器多行排列时，设置行与行之间的对齐方式")])])])]),e._v(" "),_("h3",{attrs:{id:"五-子容器上设置是否伸缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五-子容器上设置是否伸缩","aria-hidden":"true"}},[e._v("#")]),e._v(" 五.子容器上设置是否伸缩")]),e._v(" "),_("ul",[_("li",[e._v("设置基准大小："),_("code",[e._v("flex-basis")]),e._v("——表示在不伸缩的情况下子容器的原始尺寸。主轴为横向时代表宽度，主轴为纵向时代表高度")]),e._v(" "),_("li",[e._v("设置扩展比例："),_("code",[e._v("flex-grow")]),e._v("——子容器弹性伸展的比例")]),e._v(" "),_("li",[e._v("设置排列顺序："),_("code",[e._v("order")]),e._v("——改变子容器的排列顺序，覆盖DOM结构中的顺序，默认值为 0，可以为负值，数值越小排列越靠前")])])])}],!1,null,null,null);v.default=a.exports}}]);