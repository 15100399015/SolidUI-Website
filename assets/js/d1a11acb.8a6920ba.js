"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[1776],{9278:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(9301);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7260:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(8448),a=(r(9301),r(9278));const i={},l=void 0,o={type:"mdx",permalink:"/download/release-note/2.1.0",source:"@site/src/pages/download/release-note/2.1.0.md",description:"Release Notes 2.1.0",frontMatter:{}},p=[{value:"Release Notes 2.1.0",id:"release-notes-210",level:2},{value:"Features",id:"features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bugfix",id:"bugfix",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"release-notes-210"},"Release Notes 2.1.0"),(0,a.kt)("div",{style:{height:"30px"}}),(0,a.kt)("p",null,"Apache StreamPark (incubating) 2.1.0 is an important upgrade version. In this current version, we have upgraded many dependencies version to address vulnerabilities and risks, support Flink 1.17. Numerous improvements have been incorporated, and many bugs have been fixed. Stability and security have been further improved."),(0,a.kt)("div",{style:{height:"30px"}}),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support Flink 1.17 (#2533)"),(0,a.kt)("li",{parentName:"ul"},"Support external link (#2375)"),(0,a.kt)("li",{parentName:"ul"},"Support openapi3 (#2459)"),(0,a.kt)("li",{parentName:"ul"},"Support yarn-queue management. (#2317)"),(0,a.kt)("li",{parentName:"ul"},"Refactor settings page (#2545)"),(0,a.kt)("li",{parentName:"ul"},"Support trigger savepoint manually (#2268)")),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upgrade Hadoop Version to 3.3.4 (#2650)"),(0,a.kt)("li",{parentName:"ul"},"Upgrade springboot version to 2.7.11 (#2685)"),(0,a.kt)("li",{parentName:"ul"},"Upgrade mybatis-plus to 3.5.3.1 (#2666)"),(0,a.kt)("li",{parentName:"ul"},"FlinkHome check improvement (#2548)"),(0,a.kt)("li",{parentName:"ul"},"Ingress multi-version adaptation (#2704)"),(0,a.kt)("li",{parentName:"ul"},"Start-script improvement (#2715)"),(0,a.kt)("li",{parentName:"ul"},"Reset password improvement(#2696)"),(0,a.kt)("li",{parentName:"ul"},"Workspace local permission check improvement(#2557)"),(0,a.kt)("li",{parentName:"ul"},"DDL schema column length improvement (#2680)"),(0,a.kt)("li",{parentName:"ul"},"Trigger savepoint improvement (#2679)"),(0,a.kt)("li",{parentName:"ul"},"FlinkHome delete support (#2615)"),(0,a.kt)("li",{parentName:"ul"},"Start script and ldap config improvement (#2640)"),(0,a.kt)("li",{parentName:"ul"},"Add more constraints the user permission (#2634)"),(0,a.kt)("li",{parentName:"ul"},"Consistently use pnpm in build and CI  (#2507)"),(0,a.kt)("li",{parentName:"ul"},"Record more info of application log (#2472)"),(0,a.kt)("li",{parentName:"ul"},"i18n improvement (#2346)"),(0,a.kt)("li",{parentName:"ul"},"Spark app support user args (#2627)")),(0,a.kt)("h3",{id:"bugfix"},"Bugfix"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trigger savepoint timeout bug fixed. (#2575)"),(0,a.kt)("li",{parentName:"ul"},"Postgresql scheme data type error #2649 (#2660)"),(0,a.kt)("li",{parentName:"ul"},"No log output in kubernetes session cluster bug fixed (#2599)"),(0,a.kt)("li",{parentName:"ul"},"The restartSize in the application cannot be set to 0 (#2491)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state.checkpoints.num-retained")," is invalid (#2333)"),(0,a.kt)("li",{parentName:"ul"},"Yarn per job mode the yarn-queue parameter is not work #2669 (#2670)"),(0,a.kt)("li",{parentName:"ul"},"Modifications should be disabled when building a project (#2596) (#2597)"),(0,a.kt)("li",{parentName:"ul"},"The editor of the system setting module does not have permission control (#2637)"),(0,a.kt)("li",{parentName:"ul"},"Delete application will not remove k8s watching (#2598)"),(0,a.kt)("li",{parentName:"ul"},"Duplicate dependencies in console module (#2519)"),(0,a.kt)("li",{parentName:"ul"},"The application can be started repeatedly by calling the api #2488 (#2499)"),(0,a.kt)("li",{parentName:"ul"},"Application parameter restartSize cannot be updated to the database #2482 (#2484)"),(0,a.kt)("li",{parentName:"ul"},"login failed when ldap password was changed (#2478)")))}m.isMDXComponent=!0}}]);