"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[6453],{9278:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(9301);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5105:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(8448),n=(a(9301),a(9278));const i={},l=void 0,o={type:"mdx",permalink:"/download/release-note/2.0.0",source:"@site/src/pages/download/release-note/2.0.0.md",description:"Release Notes 2.0.0",frontMatter:{}},p=[{value:"Release Notes 2.0.0",id:"release-notes-200",level:2},{value:"Features",id:"features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bugfix",id:"bugfix",level:3}],u={toc:p},m="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-notes-200"},"Release Notes 2.0.0"),(0,n.kt)("div",{style:{height:"30px"}}),(0,n.kt)("p",null,"Apache StreamPark (incubating) 2.0.0 is the first Apache version since StreamPark joined the ASF incubator. In this version, many new features have been added, and many bugs have been fixed. It is important for the stability and functionality of the entire product this\nA very big improvement, as follows:"),(0,n.kt)("div",{style:{height:"30px"}}),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ldap login support (#1181)"),(0,n.kt)("li",{parentName:"ul"},"Add team management (#1265)"),(0,n.kt)("li",{parentName:"ul"},"The front-end handles the exception display uniformly (#1281)"),(0,n.kt)("li",{parentName:"ul"},"Build script support. (#1021)"),(0,n.kt)("li",{parentName:"ul"},"Spark support. (#1338)"),(0,n.kt)("li",{parentName:"ul"},"Support Flink 1.16 submit (#1938)"),(0,n.kt)("li",{parentName:"ul"},"Support the team management (#1733)"),(0,n.kt)("li",{parentName:"ul"},"Added variable management (#1850)"),(0,n.kt)("li",{parentName:"ul"},"New WebUI ready based on vue3 (#2003)"),(0,n.kt)("li",{parentName:"ul"},"i18n Support (#2088)"),(0,n.kt)("li",{parentName:"ul"},"HOCON conf file support (#1968)"),(0,n.kt)("li",{parentName:"ul"},"Unify flink configuration (#1858)"),(0,n.kt)("li",{parentName:"ul"},"knox proxy cluster #1044 (#1052)"),(0,n.kt)("li",{parentName:"ul"},"Verify flinksql support hive Dialect (#1170)"),(0,n.kt)("li",{parentName:"ul"},"Remove unnecessary findUserRole (#1883)"),(0,n.kt)("li",{parentName:"ul"},"Show the project build log in Web UI (#1673)"),(0,n.kt)("li",{parentName:"ul"},"Execution run-mode support streaming and batch (#1670)"),(0,n.kt)("li",{parentName:"ul"},"feishu, dingtalk, wecom alert support. (#1138)")),(0,n.kt)("h3",{id:"improvements"},"Improvements"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kerberos httpclient support (#1090)"),(0,n.kt)("li",{parentName:"ul"},"Database postgres support (#1457)"),(0,n.kt)("li",{parentName:"ul"},"Simplify checkpoint/state related configuration (#1755)"),(0,n.kt)("li",{parentName:"ul"},"Simplify restartStrategy related configuration (#1749)"),(0,n.kt)("li",{parentName:"ul"},"Simplify the configuration of runtime-mode and parallelism-default (#1764)"),(0,n.kt)("li",{parentName:"ul"},"Simplify the configuration of watermark interval (#1745)"),(0,n.kt)("li",{parentName:"ul"},"Split each version of sql-upgrade.sql into a different directory (#1696)"),(0,n.kt)("li",{parentName:"ul"},"Sender Email takes effect immediately when the configuration is modified (#1586)"),(0,n.kt)("li",{parentName:"ul"},"The common module avoids using Flink api (#1763)"),(0,n.kt)("li",{parentName:"ul"},"Unified swagger api docs description (#2096)"),(0,n.kt)("li",{parentName:"ul"},"Update mysql upgrade sql (#1651)"),(0,n.kt)("li",{parentName:"ul"},"after change team the routers need to be regenerated (#1868)"),(0,n.kt)("li",{parentName:"ul"},"applist search-box improvement (#1271)"),(0,n.kt)("li",{parentName:"ul"},"change app name synchronously when changing k8s-clusterId (#1221)"),(0,n.kt)("li",{parentName:"ul"},"check savepoint path improvement."),(0,n.kt)("li",{parentName:"ul"},"deploy flink on k8s job-state improvement"),(0,n.kt)("li",{parentName:"ul"},"flink on k8s metric-watcher improvement (#1292)"),(0,n.kt)("li",{parentName:"ul"},"flinksql syntax improvement and testcase added (#1237)"),(0,n.kt)("li",{parentName:"ul"},"maven dependency optimization (#1014)"),(0,n.kt)("li",{parentName:"ul"},"workspace class Improvement (#1928)"),(0,n.kt)("li",{parentName:"ul"},"front-end api-exception improvement (#2031)"),(0,n.kt)("li",{parentName:"ul"},"get appname improvement (#2075)"),(0,n.kt)("li",{parentName:"ul"},"history upload-jars improvement (#2114)"),(0,n.kt)("li",{parentName:"ul"},"on k8s mode kubernetes.container.image.pull-policy improvement (#2057)"),(0,n.kt)("li",{parentName:"ul"},"support paging in other database (#1475)"),(0,n.kt)("li",{parentName:"ul"},"Precision state judgment based on archive logs (#1910)"),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix same name udf updated, it can't work(#1204) (#1273)"),(0,n.kt)("li",{parentName:"ul"},"parse create function syntax bug fixed. (#1216)"),(0,n.kt)("li",{parentName:"ul"},"kerberos getLoginUser bug fixed .#1030 (#1055)"),(0,n.kt)("li",{parentName:"ul"},"Added SUSPENDED button and removed FINISHED redundant configuration(#1176) (#1940)"),(0,n.kt)("li",{parentName:"ul"},"After building the project, the build time is not updated (#2058)"),(0,n.kt)("li",{parentName:"ul"},"An error is reported when the mysql upgrade sql statement is executed #2048 (#2050)"),(0,n.kt)("li",{parentName:"ul"},"Depend Apps button permission control failed (#1971)"),(0,n.kt)("li",{parentName:"ul"},"Failed to mark the latest savepoint and checkpoint #1989 (#1991)"),(0,n.kt)("li",{parentName:"ul"},"Fix Copy is missing projectid and moudle bug fixed (#1498)"),(0,n.kt)("li",{parentName:"ul"},"Fix pop-up window shows flink-conf.yaml bug #1420 (#1421)"),(0,n.kt)("li",{parentName:"ul"},"Fix streampark login failure when switching postgres data sources (#1461)"),(0,n.kt)("li",{parentName:"ul"},"Fix the  SavePointMapper obsolete @update latest type bug (#1540)"),(0,n.kt)("li",{parentName:"ul"},"Fix the Latest checkpoint not updated when job restart in K8S mode bug (#1476)"),(0,n.kt)("li",{parentName:"ul"},"Fix the NPE bug and refactor some code (#1656)"),(0,n.kt)("li",{parentName:"ul"},"Fix the help when user/role name already exists (#1635)"),(0,n.kt)("li",{parentName:"ul"},"Fix the job cannot be start due to wrong type (#1825)"),(0,n.kt)("li",{parentName:"ul"},"Fix the mapping between alarmType and implement class(#2046)"),(0,n.kt)("li",{parentName:"ul"},"Fix the mysql field name bug (#1483)"),(0,n.kt)("li",{parentName:"ul"},"Fix the tail buffer memory leak (#1664)"),(0,n.kt)("li",{parentName:"ul"},"Fix the wrong duration (#1585)"),(0,n.kt)("li",{parentName:"ul"},"Flink auto recover taskmanager failed #1175 (#1178)"),(0,n.kt)("li",{parentName:"ul"},"Flink cluster cannot modify the flink version #1992 (#1993)"),(0,n.kt)("li",{parentName:"ul"},"StreamPark cannot search for failed status tasks (#1917)"),(0,n.kt)("li",{parentName:"ul"},"Taskmanager memory usage statistics calculation error on yarn mode #1061 (#1065)"),(0,n.kt)("li",{parentName:"ul"},"The configured value cannot be cleared in the System Setting module #2084 (#2085)"),(0,n.kt)("li",{parentName:"ul"},"The copy function of the application does not copy the args information (#2083)"),(0,n.kt)("li",{parentName:"ul"},"The yarn-queue parameter is specified but does not take effect (#1330)"),(0,n.kt)("li",{parentName:"ul"},"dynamicProperties env.java.opts not support bug fixed (#2019)"),(0,n.kt)("li",{parentName:"ul"},"extractProgramArgs parsing args parameter error (#1652)"),(0,n.kt)("li",{parentName:"ul"},"find jar in error path #1060 (#1064)"),(0,n.kt)("li",{parentName:"ul"},"fix delete job bug fixed (#1391)"),(0,n.kt)("li",{parentName:"ul"},"fix spark build error caused by scala 2.11 (#1331)"),(0,n.kt)("li",{parentName:"ul"},"fix yarn session address config loss (#1312)"),(0,n.kt)("li",{parentName:"ul"},"fixed 'Kube Conf File' param can not displayed at Flink Cluster Edit Page (#1879)"),(0,n.kt)("li",{parentName:"ul"},"fixed the ignore restored option bug (#1839)"),(0,n.kt)("li",{parentName:"ul"},"flink cluster management bug fixed (#2100)"),(0,n.kt)("li",{parentName:"ul"},"flink-job archivefile parse bug fixed (#2094)"),(0,n.kt)("li",{parentName:"ul"},"front-end enum bug fixed (#2023)"),(0,n.kt)("li",{parentName:"ul"},"generate pom with correctly parsed version (#2151)"),(0,n.kt)("li",{parentName:"ul"},"get param from application config bug fixed. (#2165)"),(0,n.kt)("li",{parentName:"ul"},"http client default auth #1075 (#1078)"),(0,n.kt)("li",{parentName:"ul"},"init config filter null value (#1963)"),(0,n.kt)("li",{parentName:"ul"},"project list modules bug fixed (#2026)"),(0,n.kt)("li",{parentName:"ul"},"should use fromYamlFile function to read conf file in flink 1.15 shims (#1410)"),(0,n.kt)("li",{parentName:"ul"},"submit flink job argument type mismath #1165 (#1182)"),(0,n.kt)("li",{parentName:"ul"},"support flinksql set syntax (#1926)"),(0,n.kt)("li",{parentName:"ul"},"update mysql.version from '8.0.16' to '8.0.27' as CVE-2021-2471. (#2141)"),(0,n.kt)("li",{parentName:"ul"},"yarn kerberos acl #1046 (#1053)"),(0,n.kt)("li",{parentName:"ul"},"yarn-queue don't work fixed (#1332)"),(0,n.kt)("li",{parentName:"ul"},"Fixed some job properties are not replicated bug When copy a job (#1559)"),(0,n.kt)("li",{parentName:"ul"},"Non-admin user can't login problem fixed (#1346)"),(0,n.kt)("li",{parentName:"ul"},"fix custom savepoint address reading failed on canceling job bug (#1433)"),(0,n.kt)("li",{parentName:"ul"},"fixed the build.sh bug (#1916)"),(0,n.kt)("li",{parentName:"ul"},"application conf bug (#2035)"),(0,n.kt)("li",{parentName:"ul"},"cluster edit bug ,header show lock (#2098)"),(0,n.kt)("li",{parentName:"ul"},"copy api bug fix (#2125)"),(0,n.kt)("li",{parentName:"ul"},"fix application create bug and add variable preview (#1927)"),(0,n.kt)("li",{parentName:"ul"},"fix variable drawer bug,fix dark theme style bug (#2016)"),(0,n.kt)("li",{parentName:"ul"},"handle history version error,improve login footer style (#1957)"),(0,n.kt)("li",{parentName:"ul"},"history version compare bug,Fix option logs link jumping problem (#1995)"),(0,n.kt)("li",{parentName:"ul"},"page style and application bug (#1903)"),(0,n.kt)("li",{parentName:"ul"},"project list pagination error (#2155)"),(0,n.kt)("li",{parentName:"ul"},"swagger interface call back-end interface can not get parameter values (#1601)"),(0,n.kt)("li",{parentName:"ul"},"user modal gender bug, flinksql editor fullscreen (#2000)"),(0,n.kt)("li",{parentName:"ul"},"username len and fix role error (#2005)"),(0,n.kt)("li",{parentName:"ul"},"copy application miss param bug fix (#1503)"),(0,n.kt)("li",{parentName:"ul"},"init ddl schema bug fixed. (#1472)"),(0,n.kt)("li",{parentName:"ul"},"job build state bug fixed. (#1530)"),(0,n.kt)("li",{parentName:"ul"},"kerberos tgtRefreshTime bug fixed. (#1542)"),(0,n.kt)("li",{parentName:"ul"},"ldap login bug fixed. (#1507)"),(0,n.kt)("li",{parentName:"ul"},"log4j conflict fixed. (#1478)"),(0,n.kt)("li",{parentName:"ul"},"on k8s get metrics bug fixed (#1999\uff09"),(0,n.kt)("li",{parentName:"ul"},"postgresql schema ddl and init data bug fixed. (#1509)"),(0,n.kt)("li",{parentName:"ul"},"primary key auto_increment bug fixed (#1469)"),(0,n.kt)("li",{parentName:"ul"},"project query failure bug fixed"),(0,n.kt)("li",{parentName:"ul"},"send alert job' monitor-url bug fixed."),(0,n.kt)("li",{parentName:"ul"},"yarn knox proxy unnecessary kerberos auth, just for page redirect (#1154)"),(0,n.kt)("li",{parentName:"ul"},"yarn-session cluster in remote mode can't edit bug fixed (#1315)")))}s.isMDXComponent=!0}}]);