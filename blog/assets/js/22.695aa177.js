(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{198:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"git多人协作操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git多人协作操作","aria-hidden":"true"}},[e._v("#")]),e._v(" git多人协作操作")]),e._v(" "),a("h2",{attrs:{id:"项目多人协作的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目多人协作的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目多人协作的问题")]),e._v(" "),a("ol",[a("li",[e._v("同一个项目，开发不同的功能，发布到测试环境会相互覆盖；")]),e._v(" "),a("li",[e._v("如何保证代码是最新的代码；")])]),e._v(" "),a("h2",{attrs:{id:"正确操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确操作步骤","aria-hidden":"true"}},[e._v("#")]),e._v(" 正确操作步骤")]),e._v(" "),a("ol",[a("li",[e._v("组内成员每个人对会有一个从master检出的本地开发分支，dev_01,dev_02；")]),e._v(" "),a("li",[e._v(".组员1开发的功能需要测试，在本地分支dev_01，提交到工作区，切换到dev分支，git merge dev_01,合并dev_01分支，同理，组员2的功能需要测试，dev_02的分支也合并到dev分支，互相不影响；每次合并之后的dev分支需要同步到远端，保证其他人的dev代码是最新的；")]),e._v(" "),a("li",[e._v("组员1 的代码需要上线，直接合并dev_01的代码和master分支代码，同时删除上一个分支，从合并之后的master分支检出一份新的本地分支dev_001；组员2的功能还在测试，代码放在dev分支上不受影响；")]),e._v(" "),a("li",[e._v("需要保证dev分支的代码和master分支的同步（master代码直接更改和操作，使得本地代码落后），因此每天早上需要将本地master分支和远端代码保持同步，pull下来后，将本地master代码合并到本地dev分支上面， git rebase master dev，以master为基础将master代码合并到dev分支并切换到对应dev分支上面。")])])])}],!1,null,null,null);t.default=s.exports}}]);