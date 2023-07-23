"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,y=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return r?o.createElement(y,l(l({ref:t},d),{},{components:r})):o.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={id:"deployment-docker",title:"Docker-Compose Deployment",sidebar_position:1},l="SolidUI Docker-Compose deployment",c={unversionedId:"deployment/overall/deployment-docker",id:"deployment/overall/deployment-docker",title:"Docker-Compose Deployment",description:"1. Environment preparation",source:"@site/docs/deployment/overall/README_DOCKER.md",sourceDirName:"deployment/overall",slug:"/deployment/overall/deployment-docker",permalink:"/docs/deployment/overall/deployment-docker",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/deployment/overall/README_DOCKER.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deployment-docker",title:"Docker-Compose Deployment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Front-End Deployment",permalink:"/docs/deployment/front-end/deployment"},next:{title:"Deployed Separately",permalink:"/docs/deployment/overall/deployment-standalone"}},i={},p=[{value:"1. Environment preparation",id:"1-environment-preparation",level:2},{value:"2. Start DolphinScheduler with docker-compose (recommended)",id:"2-start-dolphinscheduler-with-docker-compose-recommended",level:2},{value:"2.1 Download deployment package or source code",id:"21-download-deployment-package-or-source-code",level:3},{value:"2.2 Pull the image and start the service",id:"22-pull-the-image-and-start-the-service",level:3},{value:"2.3 Accessing Services",id:"23-accessing-services",level:3}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"solidui-docker-compose-deployment"},"SolidUI Docker-Compose deployment"),(0,n.kt)("h2",{id:"1-environment-preparation"},"1. Environment preparation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," 1.13.1+\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," 1.11.0+"),(0,n.kt)("h2",{id:"2-start-dolphinscheduler-with-docker-compose-recommended"},"2. Start DolphinScheduler with docker-compose (recommended)"),(0,n.kt)("p",null,"This method needs to install docker-compose first, there are already a lot of information on the installation of docker-compose on the Internet, please install it yourself"),(0,n.kt)("h3",{id:"21-download-deployment-package-or-source-code"},"2.1 Download deployment package or source code"),(0,n.kt)("p",null,"Download at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases")),(0,n.kt)("p",null,"Please download the source package solidui-x.x.x-bin.tar.gz"),(0,n.kt)("h3",{id:"22-pull-the-image-and-start-the-service"},"2.2 Pull the image and start the service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Enter the server (take Centos7 as an example)\ntar -zxvf solidui-x.x.x-bin.tar.gz\n\ncd solidui-x.x.x-src/solidui-dist/docker/\n\ndocker-compose up -d\n\n")),(0,n.kt)("h3",{id:"23-accessing-services"},"2.3 Accessing Services"),(0,n.kt)("p",null,"Access link http://localhost:8099"),(0,n.kt)("p",null,"Default username and password: admin/adm"))}s.isMDXComponent=!0}}]);