require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{22:function(e,t,a){"use strict";var s=n(a(0)),o=n(a(23));function n(e){return e&&e.__esModule?e:{default:e}}new s.default(o.default).$mount()},23:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(25),o=a.n(s),n=a(26),i=!1;var r=function(e){i||a(24)},l=a(1)(o.a,n.a,r,null,null);l.options.__file="..\\..\\..\\..\\project\\Sean\\air-client\\pages\\reg\\reg.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] reg.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},24:function(e,t){},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s,o=a(4),n=(s=o)&&s.__esModule?s:{default:s};t.default={data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)e.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))e.showToast({icon:"none",title:"邮箱地址不合法"});else{var t={account:this.account,password:this.password,email:this.email};n.default.addUser(t),e.showToast({title:"注册成功"}),e.navigateBack({delta:1})}}}}}).call(t,a(2).default)},26:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[e._v("账号：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入账号",eventid:"b2n-0"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),e._v(" "),a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[e._v("密码：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入密码",eventid:"2xP-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[e._v("邮箱：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"Gpc-2"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"Jjx-3"},on:{tap:e.register}},[e._v("注册")])],1)])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};t.a=o}},[22]);
//# sourceMappingURL=../../.sourcemap/pages/reg/reg.js.map