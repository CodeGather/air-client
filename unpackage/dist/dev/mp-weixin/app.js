require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([8],[,,,,,function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=s(o(0)),l=s(o(7)),a=s(o(69)),r=s(o(11));function s(e){return e&&e.__esModule?e:{default:e}}u.default.use(a.default),u.default.config.productionTip=!1,u.default.prototype.$store=r.default,l.default.mpType="app",new u.default(n({store:r.default},l.default)).$mount()},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(10),u=o.n(n),l=!1;var a=function(e){l||o(8)},r=o(1)(u.a,null,a,null,null);r.options.__file="..\\..\\..\\..\\project\\Sean\\air-client\\App.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=r.exports},function(e,t){},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(o(0)),u=l(o(3));function l(e){return e&&e.__esModule?e:{default:e}}n.default.use(u.default);var a=new u.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(e,t){e.userName=t||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1}}});t.default=a}],[5]);
//# sourceMappingURL=.sourcemap/app.js.map