(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[4921],{8794:function(e){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(o(n(1)),n(6)),i=o(r),c=o(n(7)),s=o(n(8)),u=o(n(9)),l=o(n(10)),d=o(n(11)),f=o(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,d.default)(m,b),(0,l.default)(m,b.once),m},h=function(){m=(0,f.default)(),v()},g=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){b=a(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return y(b.disable)||t?g():(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)((function(){(0,l.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",h),m)};e.exports={init:w,refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,y=setTimeout(l,t),E?o(e):g}function i(e){var n=t-(e-w);return N?x(n,h-(e-O)):n}function s(e){var n=e-w;return void 0===w||n>=t||n<0||N&&e-O>=h}function l(){var e=j();return s(e)?d(e):void(y=setTimeout(l,i(e)))}function d(e){return y=void 0,M&&b?o(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),O=0,b=w=v=y=void 0}function m(){return void 0===y?g:d(j())}function p(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===y)return r(w);if(N)return y=setTimeout(l,t),o(w)}return void 0===y&&(y=setTimeout(l,t)),g}var b,v,h,g,y,w,O=0,E=!1,N=!1,M=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,a(n)&&(E=!!n.leading,h=(N="maxWait"in n)?k(c(n.maxWait)||0,t):h,M="trailing"in n?!!n.trailing:M),p.cancel=f,p.flush=m,p}function o(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return a(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),n(e,t,{leading:r,maxWait:t,trailing:i})}function a(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function i(e){return"symbol"==(void 0===e?"undefined":s(e))||r(e)&&w.call(e)==d}function c(e){if("number"==typeof e)return e;if(i(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):m.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=h||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,x=Math.min,j=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,y=setTimeout(l,t),E?a(e):g}function c(e){var n=t-(e-j);return N?k(n,h-(e-O)):n}function u(e){var n=e-j;return void 0===j||n>=t||n<0||N&&e-O>=h}function l(){var e=x();return u(e)?d(e):void(y=setTimeout(l,c(e)))}function d(e){return y=void 0,M&&b?a(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),O=0,b=j=v=y=void 0}function m(){return void 0===y?g:d(x())}function p(){var e=x(),n=u(e);if(b=arguments,v=this,j=e,n){if(void 0===y)return r(j);if(N)return y=setTimeout(l,t),a(j)}return void 0===y&&(y=setTimeout(l,t)),g}var b,v,h,g,y,j,O=0,E=!1,N=!1,M=!0;if("function"!=typeof e)throw new TypeError(s);return t=i(t)||0,o(n)&&(E=!!n.leading,h=(N="maxWait"in n)?w(i(n.maxWait)||0,t):h,M="trailing"in n?!!n.trailing:M),p.cancel=f,p.flush=m,p}function o(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function r(e){return"symbol"==(void 0===e?"undefined":c(e))||a(e)&&y.call(e)==l}function i(e){if("number"==typeof e)return e;if(r(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=m.test(e);return n||p.test(e)?b(e.slice(2),n?2:8):f.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),y=Object.prototype.toString,w=Math.max,k=Math.min,x=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!o()}function r(e,t){var n=window.document,a=new(o())(i);c=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:a,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,r){n(e,a+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(12)),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(13)),r=function(e,t){var n=0,o=0,r=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(o=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),n=(0,a.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return i.anchorPlacement||i.offset||isNaN(t)||(o=t),n+o};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},7144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(9301),a=n(9469);function r(e){let{children:t,fallback:n}=e;return(0,a.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},7897:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var o=n(9301),a=n(7144),r=n(9469);const i=JSON.parse('{"zh-CN":{"info":{"desc":"SolidUI \u793e\u533a\u7531\u8d21\u732e\u8005\u7ec4\u6210\u3002 \u8d21\u732e\u8005\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee SolidUI \u9879\u76ee\u7684\u6e90\u4ee3\u7801\u5e76\u53c2\u4e0e\u8d21\u732e\u5f53\u4e2d(\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee3\u7801\u7684\u8d21\u732e)\u3002 \u8d21\u732e\u8005\u901a\u8fc7\u63d0\u4ea4\u8865\u4e01\u548c\u5efa\u8bae\u6765\u6539\u5584\u9879\u76ee\u3002 \u8be5\u9879\u76ee\u7684\u8d21\u732e\u8005\u6570\u91cf\u662f\u65e0\u9650\u7684\u3002 \u65e0\u8bba\u662f\u7410\u788e\u7684\u6e05\u7406\u5de5\u4f5c\uff0c\u91cd\u8981\u7684\u65b0\u529f\u80fd\u8fd8\u662f\u5176\u4ed6\u91cd\u5927\u7684\u5956\u52b1\uff0c\u5bf9 StreamPark \u6240\u505a\u7684\u6240\u6709\u8d21\u732e\u90fd\u5c06\u53d7\u5230\u6781\u5927\u7684\u8d5e\u8d4f\u3002","tip":"(\u6392\u540d\u4e0d\u5206\u5148\u540e)"},"contributors":[{"avatarUrl":"https://avatars.githubusercontent.com/u/16789827?v=4","gitUrl":"https://github.com/dlimeng","name":"Li Meng"},{"avatarUrl":"https://avatars.githubusercontent.com/u/35603505?v=4","gitUrl":"https://github.com/nutsjian","name":"Gu Jian"},{"avatarUrl":"https://avatars.githubusercontent.com/u/46127018?v=4","gitUrl":"https://github.com/15100399015","name":"Yang LiPeng"},{"avatarUrl":"https://avatars.githubusercontent.com/u/1073365?v=4","gitUrl":"https://github.com/jacktao007","name":"Tao ZhiQiang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/52304716?v=4","gitUrl":"https://github.com/ziyu211","name":"Zheng Wen"},{"avatarUrl":"https://avatars.githubusercontent.com/u/42433093?v=4","gitUrl":"https://github.com/limingoo","name":"Li MingMing"}]},"en":{"info":{"desc":"The SolidUI team is comprised of Members and Contributors. Members have direct access to the source of SolidUI project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. All contributions to StreamPark are greatly appreciated, whether for trivial cleanups, big new features or other material rewards.","tip":"(In no particular order)"},"contributors":[{"avatarUrl":"https://avatars.githubusercontent.com/u/16789827?v=4","gitUrl":"https://github.com/dlimeng","name":"Li Meng"},{"avatarUrl":"https://avatars.githubusercontent.com/u/35603505?v=4","gitUrl":"https://github.com/nutsjian","name":"Gu Jian"},{"avatarUrl":"https://avatars.githubusercontent.com/u/46127018?v=4","gitUrl":"https://github.com/15100399015","name":"Yang LiPeng"},{"avatarUrl":"https://avatars.githubusercontent.com/u/1073365?v=4","gitUrl":"https://github.com/jacktao007","name":"Tao ZhiQiang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/52304716?v=4","gitUrl":"https://github.com/ziyu211","name":"Zheng Wen"},{"avatarUrl":"https://avatars.githubusercontent.com/u/42433093?v=4","gitUrl":"https://github.com/limingoo","name":"Li MingMing"}]}}');var c,s=n(5429);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",u({className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200,"aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,c||(c=o.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"})))};var d=n(8794),f=n.n(d);function m(){const e=(0,r.Z)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",t=i?.[e];return o.createElement(a.Z,null,(()=>(f().init({offset:100,duration:700,easing:"ease-out-quad",once:!0}),window.addEventListener("load",f().refresh),o.createElement(s.Z,null,o.createElement("div",{className:"block team_page",style:{padding:"10px 0 30px"}},o.createElement("h3",{className:"fs-2 mb-4 fw-bold text-center"},"SolidUI Team"),o.createElement("hr",{className:"divider my-4 mx-auto",style:{maxWidth:"10rem"}}),o.createElement("p",{className:"team_desc team_indent"},t.info.desc),o.createElement("h3",{className:"team_title mb-5"},"Contributors",o.createElement("span",{className:"desc"},t.info.tip)),o.createElement("div",{className:"row bg-gray py-4"},t.contributors.map(((e,t)=>o.createElement("div",{className:"team_user mb-5 px-4",key:t,"data-aos":"fade-up","data-aos-delay":100*t},o.createElement("a",{href:e.gitUrl,target:"_blank"},o.createElement("div",{className:"team team-hover rounded"},o.createElement("div",{className:"team-img"},o.createElement("img",{src:e.avatarUrl,alt:e.name})),o.createElement("div",{className:"team-info"},o.createElement("span",{className:"team-name text-dark"},e.name),o.createElement("p",{className:"team-leader d-flex align-items-center justify-content-center"},o.createElement(l,{className:"github-icon"}),e.name)))))))))))))}}}]);