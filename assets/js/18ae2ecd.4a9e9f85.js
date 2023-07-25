"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[1422],{9278:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9301);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(8448),a=(n(9301),n(9278));const o={id:"deployment-standalone",title:"Deployed Separately",sidebar_position:3},i="SolidUI is deployed separately",l={unversionedId:"deployment/overall/deployment-standalone",id:"deployment/overall/deployment-standalone",title:"Deployed Separately",description:"1. First-time installation preparations",source:"@site/docs/deployment/overall/deployment-standalone.md",sourceDirName:"deployment/overall",slug:"/deployment/overall/deployment-standalone",permalink:"/docs/deployment/overall/deployment-standalone",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/docs/deployment/overall/deployment-standalone.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"deployment-standalone",title:"Deployed Separately",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SolidUI Docker-Compose deployment",permalink:"/docs/deployment/overall/deployment-docker"},next:{title:"Community Operation",permalink:"/docs/operational/community-operation/"}},s={},d=[{value:"1. First-time installation preparations",id:"1-first-time-installation-preparations",level:2},{value:"1.1 Linux server",id:"11-linux-server",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:4},{value:"1.2 JDK preparation",id:"12-jdk-preparation",level:3},{value:"1.3 Database preparation",id:"13-database-preparation",level:3},{value:"2. Configuration modification",id:"2-configuration-modification",level:2},{value:"2.1 Installation package preparation",id:"21-installation-package-preparation",level:3},{value:"3. The server follows and starts",id:"3-the-server-follows-and-starts",level:2},{value:"3.1 Preparations",id:"31-preparations",level:3},{value:"3.2 Configuration modification",id:"32-configuration-modification",level:3},{value:"3.3 Server start",id:"33-server-start",level:3},{value:"4. Front-end deployment",id:"4-front-end-deployment",level:2},{value:"4.1 Preparations",id:"41-preparations",level:3},{value:"4.2 Startup",id:"42-startup",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"solidui-is-deployed-separately"},"SolidUI is deployed separately"),(0,a.kt)("h2",{id:"1-first-time-installation-preparations"},"1. First-time installation preparations"),(0,a.kt)("h3",{id:"11-linux-server"},"1.1 Linux server"),(0,a.kt)("h4",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("p",null,"Install one SolidUI microservice with at least 512M memory. The default jvm -Xmx memory size of each microservice is 512M (if the memory is not enough, you can try to reduce it to 256/128M, and you can also increase it if the memory is enough)."),(0,a.kt)("h3",{id:"12-jdk-preparation"},"1.2 JDK preparation"),(0,a.kt)("p",null,"Java version requirements: jdk1.8.0_201 or above"),(0,a.kt)("h3",{id:"13-database-preparation"},"1.3 Database preparation"),(0,a.kt)("p",null,"Mysql5.7 or above"),(0,a.kt)("h2",{id:"2-configuration-modification"},"2. Configuration modification"),(0,a.kt)("h3",{id:"21-installation-package-preparation"},"2.1 Installation package preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method 1: Download the address from the official website: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases"),", and download the corresponding installation package (overall installation package)."),(0,a.kt)("li",{parentName:"ul"},"Method 2: Compile the project installation package by yourself according to the SolidUI back-end compilation and front-end compilation.")),(0,a.kt)("p",null,"After uploading the installation package solidui-x.x.x-bin.tar.gz, decompress the installation package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," tar -zxvf solidui-x.x.x-bin.tar.gz\n")),(0,a.kt)("p",null,"The directory structure after decompression is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"drwxr-xr-x 2 root root 4096 Jun 10 20:31 docker\ndrwxr-xr-x 6 root root 4096 Jun 11 17:57 entrance-server\n-rw-r--r-- 1 root root 27711 Jun 4 21:47 LICENSE\ndrwxr-xr-x 3 root root 4096 Jun 11 18:03 licenses\n-rw-r--r-- 1 root root 24875 Jun 4 19:29 NOTICE\ndrwxr-xr-x 4 root root 4096 Jun 11 18:26 solidui-web\n")),(0,a.kt)("h2",{id:"3-the-server-follows-and-starts"},"3. The server follows and starts"),(0,a.kt)("h3",{id:"31-preparations"},"3.1 Preparations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Initialize database ddl and dml paths\nsolidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql\n\n# Enter the mysql database\nmysql -h192.168.xx.xx -P3306 -uroot -p\n\n# create database\nCREATE DATABASE solidui DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;\n\n# Execute the database initialization script\n\nsource solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql\n\n")),(0,a.kt)("h3",{id:"32-configuration-modification"},"3.2 Configuration modification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd solidui-x.x.x-bin/entrance-server/conf\n# Modify database connection information\nvi application.yaml\ndatasource:\nurl: jdbc:mysql://localhost:3306/solidui?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai\nusername: root\npassword: root\n\n# 0.2.0 version adds python service configuration\nvi solidui-x.x.x-bin/soliduimodelui/.env\n# Modify database connection information\nDB_HOST=localhost\nDB_PORT=3306\nDB_NAME=solidui\nDB_USER=root\nDB_PASS=SolidUI@123\n\n")),(0,a.kt)("h3",{id:"33-server-start"},"3.3 Server start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd solidui-x.x.x-bin/entrance-server\n# start the service\nsh bin/start.sh\n# Out of service\nsh bin/stop.sh\n\n# 0.2.0 version adds python service\ncd solidui-x.x.x-bin\npip install -e .\nmodelui\n")),(0,a.kt)("h2",{id:"4-front-end-deployment"},"4. Front-end deployment"),(0,a.kt)("h3",{id:"41-preparations"},"4.1 Preparations"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment/front-end/deployment-web"},"Frontend Deployment")),(0,a.kt)("h3",{id:"42-startup"},"4.2 Startup"),(0,a.kt)("p",null,"Visit the default link http://localhost:8099"),(0,a.kt)("p",null,"Default username and password: admin/admin"))}u.isMDXComponent=!0}}]);