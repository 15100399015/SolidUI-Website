"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[885],{9278:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9301);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2025:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(8448),o=(r(9301),r(9278));const a={},i=void 0,l={type:"mdx",permalink:"/download/release-note/2.1.1",source:"@site/src/pages/download/release-note/2.1.1.md",description:"Release Notes 2.1.1",frontMatter:{}},u=[{value:"Release Notes 2.1.1",id:"release-notes-211",level:2},{value:"Bugfix",id:"bugfix",level:3},{value:"Improvements",id:"improvements",level:3}],s={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"release-notes-211"},"Release Notes 2.1.1"),(0,o.kt)("div",{style:{height:"30px"}}),(0,o.kt)("p",null,"Apache StreamPark (incubating) 2.1.1 is a bug fix version, which fixes some major bugs affecting the production environment."),(0,o.kt)("div",{style:{height:"30px"}}),(0,o.kt)("h3",{id:"bugfix"},"Bugfix"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed the bug that the job cannot be started under Flink 1.14 (#2749)"),(0,o.kt)("li",{parentName:"ul"},"Fixed the bug of IDAP login error (#2775)"),(0,o.kt)("li",{parentName:"ul"},"Fixed the bug that the Application type was displayed incorrectly (#2778)"),(0,o.kt)("li",{parentName:"ul"},"Fixed the bug of ingress version number parsing (#2749)"),(0,o.kt)("li",{parentName:"ul"},"Fixed the bug that the status of the ResourceManager could not be obtained normally after the master-slave switch occurred (#2749)"),(0,o.kt)("li",{parentName:"ul"},"Fixed the bug that the Flink plugin could not be loaded normally in the yarn-session running mode (#2800)")),(0,o.kt)("h3",{id:"improvements"},"Improvements"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added support for job status acquisition when hadoop sample auth is enabled (#2793)")))}p.isMDXComponent=!0}}]);