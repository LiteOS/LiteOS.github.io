(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{546:function(t,s,a){t.exports=a.p+"assets/img/result07.4934c2f0.png"},596:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"范例07（任务中创建和删除实验）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#范例07（任务中创建和删除实验）","aria-hidden":"true"}},[t._v("#")]),t._v(" 范例07（任务中创建和删除实验）")]),t._v(" "),n("p",[t._v("Task1(低)创建Task2(高)，Task2会抢占低优先级Task1，Task2开始执行，完成后会调用vTaskDelete删除自己。Task1重新运行")]),t._v(" "),n("h2",{attrs:{id:"功能说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),n("h2",{attrs:{id:"代码讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码讲解")]),t._v(" "),n("h3",{attrs:{id:"_1-使用-los-taskcreate-创建低优先级任务-tasklo；"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-los-taskcreate-创建低优先级任务-tasklo；","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 使用 "),n("code",[t._v("LOS_TaskCreate")]),t._v(" 创建低优先级任务 "),n("code",[t._v("TaskLo")]),t._v("；")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("UINT32 "),n("span",{attrs:{class:"token function"}},[t._v("Example07_Entry")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("puts")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example07_Entry\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_TaskLo"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_LO"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"TaskLo"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTaskLo"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskLoID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example_TaskLo create Failed!\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-tasklo-执行完成创建高优先级任务-taskhi；"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-tasklo-执行完成创建高优先级任务-taskhi；","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. "),n("code",[t._v("TaskLo")]),t._v(" 执行完成创建高优先级任务 "),n("code",[t._v("TaskHi")]),t._v("；")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Example_TaskLo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    UINT32 i"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 创建高优先级任务")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_TaskHi"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_HI"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"TaskHi"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTaskHi"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskHiID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example_TaskHi create Failed!\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"TaskLo is finshed.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_3-高优先级任务会抢占低优先级，执行完成后删除自己；"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-高优先级任务会抢占低优先级，执行完成后删除自己；","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 高优先级任务会抢占低优先级，执行完成后删除自己；")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Example_TaskHi")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 i"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 高优先级任务完成后，删除自己")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"TaskHi is running and about to delete itself.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_uwTskHiID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果演示")]),t._v(" "),n("p",[n("img",{attrs:{src:a(546),alt:""}})])])}],o=a(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="example07.md";s.default=r.exports}}]);