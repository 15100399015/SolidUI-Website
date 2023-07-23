"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8429],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),k=i,m=h["".concat(s,".").concat(k)]||h[k]||d[k]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={title:"How to Verify Release",sidebar_position:4},l="Verify the candidate version",o={unversionedId:"release/how-to-verify",id:"release/how-to-verify",title:"How to Verify Release",description:"For detailed check list, please refer to the official check list",source:"@site/community/release/how-to-verify.md",sourceDirName:"release",slug:"/release/how-to-verify",permalink:"/zh-CN/community/release/how-to-verify",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to Verify Release",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/zh-CN/community/release/how_to_release"}},s={},c=[{value:"1. Download the candidate version",id:"1-download-the-candidate-version",level:2},{value:"2. Verify that the uploaded version is compliant",id:"2-verify-that-the-uploaded-version-is-compliant",level:2},{value:"2.1 Check whether the release package is complete",id:"21-check-whether-the-release-package-is-complete",level:3},{value:"2.2 Check gpg signature",id:"22-check-gpg-signature",level:3},{value:"2.2.1 Import public key",id:"221-import-public-key",level:4},{value:"2.2.2 Trust the public key",id:"222-trust-the-public-key",level:4},{value:"2.2.3 Check the gpg signature",id:"223-check-the-gpg-signature",level:4},{value:"2.3 Check sha512 hash",id:"23-check-sha512-hash",level:3},{value:"2.4 Check the binary package",id:"24-check-the-binary-package",level:3},{value:"2.5 Check the source package",id:"25-check-the-source-package",level:3},{value:"3. Email reply",id:"3-email-reply",level:2},{value:"4. Precautions",id:"4-precautions",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verify-the-candidate-version"},"Verify the candidate version"),(0,i.kt)("p",null,"For detailed check list, please refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,i.kt)("h2",{id:"1-download-the-candidate-version"},"1. Download the candidate version"),(0,i.kt)("p",null,"Download the candidate version to be released to the local environment Need to rely on gpg tool, if not, it is recommended to install ",(0,i.kt)("inlineCode",{parentName:"p"},"gpg2"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the network is poor, downloading may be time-consuming. The download is completed normally in about 20 minutes, please wait patiently.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#If there is svn locally, you can clone to the local\n$ svn co https://dist.apache.org/repos/dist/dev/incubator/streampark/${release_version}-${rc_version}/\n#or download the material file directly\n$ wget https://dist.apache.org/repos/dist/dev/incubator/streampark/${release_version}-${rc_version}/xxx.xxx\n")),(0,i.kt)("h2",{id:"2-verify-that-the-uploaded-version-is-compliant"},"2. Verify that the uploaded version is compliant"),(0,i.kt)("p",null,"Start the verification process, which includes but is not limited to the following content and forms."),(0,i.kt)("h3",{id:"21-check-whether-the-release-package-is-complete"},"2.1 Check whether the release package is complete"),(0,i.kt)("p",null,"The package uploaded to dist must include the source code package, and the binary package is optional."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Whether to include the source code package"),(0,i.kt)("li",{parentName:"ol"},"Whether to include the signature of the source code package"),(0,i.kt)("li",{parentName:"ol"},"Whether to include the sha512 of the source code package"),(0,i.kt)("li",{parentName:"ol"},"If the binary package is uploaded, also check the contents listed in (2)-(4)")),(0,i.kt)("h3",{id:"22-check-gpg-signature"},"2.2 Check gpg signature"),(0,i.kt)("p",null,"First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)"),(0,i.kt)("h4",{id:"221-import-public-key"},"2.2.1 Import public key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl  https://downloads.apache.org/incubator/streampark/KEYS > KEYS # Download KEYS\n$ gpg --import KEYS # Import KEYS to local\n")),(0,i.kt)("h4",{id:"222-trust-the-public-key"},"2.2.2 Trust the public key"),(0,i.kt)("p",null,"Trust the KEY used in this version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --edit-key xxxxxxxxxx #KEY user used in this version\ngpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\ngpg> trust #trust\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5 #choose 5\nDo you really want to set this key to ultimate trust? (y/N) y  #choose y\n                                                            \ngpg>\n         \n")),(0,i.kt)("h4",{id:"223-check-the-gpg-signature"},"2.2.3 Check the gpg signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done\n")),(0,i.kt)("p",null,"check result"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If something like the following appears, it means the signature is correct. Keyword: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Good signature")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'apache-streampark-xxx-incubating-src.tar.gz\ngpg: Signature made XXXX\ngpg: using RSA key XXXXX\ngpg: Good signature from "xxx @apache.org>"\n')),(0,i.kt)("h3",{id:"23-check-sha512-hash"},"2.3 Check sha512 hash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n")),(0,i.kt)("h3",{id:"24-check-the-binary-package"},"2.4 Check the binary package"),(0,i.kt)("p",null,"unzip  ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-streampark_${scala.version}-${release.version}-incubating-bin.tar.gz")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# scala 2.11 \ntar -xzvf apache-streampark_2.11-${release.version}-incubating-bin.tar.gz\n\n# scala 2.12 \ntar -xzvf apache-streampark_2.12-${release.version}-incubating-bin.tar.gz\n")),(0,i.kt)("p",null,"check as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check whether the source package contains unnecessary files, which makes the tar package too large"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,i.kt)("inlineCode",{parentName:"li"},"incubating")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Only text files exist, not binary files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All files have ASF license at the beginning"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Able to compile correctly"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for extra files or folders, such as empty folders, etc."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,i.kt)("h3",{id:"25-check-the-source-package"},"2.5 Check the source package"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If the binary/web-binary package is uploaded, check the binary package.")),(0,i.kt)("p",null,"Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-streampark-${release_version}-incubating-src.tar.gz")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd apache-streampark-${release_version}-incubating-src\n\n# execute build.sh\n./build.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"package mode, just select mixed mode "))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[StreamPark]"," StreamPark supports front-end and server-side mixed / detached packaging mode, Which mode do you need ?"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"mixed mode")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"detached mode"),(0,i.kt)("p",{parentName:"li"},"select 1")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[StreamPark]"," StreamPark supports Scala 2.11 and 2.12. Which version do you need ?"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"2.11"),(0,i.kt)("li",{parentName:"ol"},"2.12"))),(0,i.kt)("p",null,"It takes about 8 minutes to compile once. After the compilation is completed, the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"dist"))," directory will be generated under the project root path, and the final compiled project binary will be placed here, and the following checks will be made:"),(0,i.kt)("p",null,"and check as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All text files have ASF license at the beginning"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the third-party dependent license:"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Compatible with third-party dependent licenses"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All third-party dependent licenses are named in the ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If you are relying on the Apache license and there is a ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file, then these ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," files also need to be added to the version of the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,i.kt)("p",null,"You can refer to this article: ",(0,i.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy")),(0,i.kt)("h2",{id:"3-email-reply"},"3. Email reply"),(0,i.kt)("p",null,"If you initiate a posting vote, you can refer to this response example to reply to the email after verification"),(0,i.kt)("font",{color:"red"},"When replying to the email, you must bring the information that you have checked by yourself. Simply replying to `+1 approve` is invalid.",(0,i.kt)("p",null,"When PPMC votes in the ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@streampark.apache.org"},"dev@streampark.apache.org")," streampark community, Please bring the binding suffix to indicate that it has a binding vote for the vote in the streampark community, and it is convenient to count the voting results."),(0,i.kt)("p",null,"When IPMC votes in the ",(0,i.kt)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," incubator community. Please bring the binding suffix to indicate that the voting in the incubator community has a binding vote, which is convenient for counting the voting results.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you have already voted on ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@streampark.apache.org"},"dev@streampark.apache.org"),", you can take it directly to the incubator community when you reply to the vote, such as:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"//Incubator community voting, only IPMC members have binding binding\uff0cPPMC needs to be aware of binding changes\nForward my +1 from dev@listreamparknkis (non-binding)\nCopy my +1 from streampark DEV ML (non-binding)\n"))),(0,i.kt)("p",null,"Non-PPMC/Non-IPMC member:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"+1 (non-binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \n")),(0,i.kt)("p",null,"PPMC/IPMC member:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"//Incubator community voting, only IPMC members have binding binding\n+1 (binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \n")),(0,i.kt)("h2",{id:"4-precautions"},"4. Precautions"),(0,i.kt)("font",{color:"red"},"If you have maven tools installed, you can replace ./mvnw or mvnw.cmd with your own mvn command",(0,i.kt)("p",null,"mvnw is short for Maven Wrapper. It can support running Maven projects without installing Maven and configuring environment variables. If it can't find it, it will download the corresponding Maven version according to the configuration file")))}h.isMDXComponent=!0}}]);