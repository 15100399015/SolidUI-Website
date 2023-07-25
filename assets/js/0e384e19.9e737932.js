"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[9671],{9278:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var i=n(9301);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,g=function(e,t){if(null==e)return{};var n,i,g={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(g[n]=e[n]);return g}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(g[n]=e[n])}return g}var A=i.createContext({}),c=function(e){var t=i.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(A.Provider,{value:t},e.children)},s="mdxType",B={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,g=e.mdxType,a=e.originalType,A=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=g,u=s["".concat(A,".").concat(d)]||s[d]||B[d]||a;return n?i.createElement(u,r(r({ref:t},l),{},{components:n})):i.createElement(u,r({ref:t},l))}));function u(e,t){var n=arguments,g=t&&t.mdxType;if("string"==typeof e||g){var a=n.length,r=new Array(a);r[0]=d;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o[s]="string"==typeof e?e:g,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>r,default:()=>B,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(8448),g=(n(9301),n(9278));const a={id:"intro",title:"What is SolidUI",sidebar_position:1},r="Introduce",o={unversionedId:"intro",id:"intro",title:"What is SolidUI",description:"AI-generated visualization prototyping and editing platform, support 2D, 3D models, combined with LLM(Large Language Model) for quick editing.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"What is SolidUI",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick start",permalink:"/docs/user-guide/quick-start"}},A={},c=[{value:"Core Features",id:"core-features",level:2},{value:"Self-developed Wensheng graph language model",id:"self-developed-wensheng-graph-language-model",level:2},{value:"RLHF process",id:"rlhf-process",level:2}],l={toc:c},s="wrapper";function B(e){let{components:t,...a}=e;return(0,g.kt)(s,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,g.kt)("h1",{id:"introduce"},"Introduce"),(0,g.kt)("p",null,"AI-generated visualization prototyping and editing platform, support 2D, 3D models, combined with LLM(Large Language Model) for quick editing."),(0,g.kt)("h2",{id:"core-features"},"Core Features"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Minimalist process, concise design"),(0,g.kt)("li",{parentName:"ul"},"Various 2D legends"),(0,g.kt)("li",{parentName:"ul"},"Various 3D legends"),(0,g.kt)("li",{parentName:"ul"},"Various 3D scenes"),(0,g.kt)("li",{parentName:"ul"},"Support multiple data sources"),(0,g.kt)("li",{parentName:"ul"},"Support Huggingface space"),(0,g.kt)("li",{parentName:"ul"},"Support plug-in robot"),(0,g.kt)("li",{parentName:"ul"},"Support SolidUI-Model"),(0,g.kt)("li",{parentName:"ul"},"Support Large Language Model"),(0,g.kt)("li",{parentName:"ul"},"Containerized deployment")),(0,g.kt)("h1",{id:"quickstart"},"QuickStart"),(0,g.kt)("p",null,"For quick experience"),(0,g.kt)("p",null,"Want to start with ",(0,g.kt)("a",{parentName:"p",href:"/docs/deployment/overall/deployment-standalone"},"Standalone")),(0,g.kt)("p",null,"Want to start with ",(0,g.kt)("a",{parentName:"p",href:"/docs/deployment/overall/deployment-docker"},"Docker")),(0,g.kt)("h1",{id:"whats-this"},"What's this?"),(0,g.kt)("p",null,"With the rise of language models for generating images from text, SolidUI wants to help people quickly build visualization tools. The visualization content includes 2D, 3D, and 3D scenes, so as to quickly construct 3D data presentation scenes. SolidUI is an innovative project that aims to combine natural language processing (NLP) with computer graphics to realize the function of Vincent diagram. By building a self-developed Wensheng graph language model, SolidUI uses the RLHF (Reinforcement Learning Human Feedback) process to realize the process from text description to graph generation."),(0,g.kt)("h2",{id:"self-developed-wensheng-graph-language-model"},"Self-developed Wensheng graph language model"),(0,g.kt)("p",null,"SolidUI's Vincent graph language model is a deep learning model that can convert natural language descriptions input by users into specific graphical representations. This model is trained on a large amount of text and graphics data, and learns the mapping relationship from text to graphics. To achieve this goal, SolidUI's self-developed Vincent graph language model has the following characteristics:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Combining NLP and computer graphics to realize the process from text description to graphic generation"),(0,g.kt)("li",{parentName:"ul"},"Can handle various types of graphics, such as 2D, 3D and scenes, etc."),(0,g.kt)("li",{parentName:"ul"},"The model training process involves a large amount of text and graphics data to ensure the quality and accuracy of the generated graphics")),(0,g.kt)("h2",{id:"rlhf-process"},"RLHF process"),(0,g.kt)("p",null,"SolidUI uses the RLHF (Reinforcement Learning Human Feedback) process to optimize the performance of the Vincent graph language model. The process leverages human feedback to guide the model's learning process, enabling the model to better meet user needs. The main steps of the RLHF process include:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Collect Feedback: Users rate the generated graphs, providing feedback on the quality and accuracy of the graphs."),(0,g.kt)("li",{parentName:"ul"},"Updating the model: Based on the feedback collected, the model is updated using reinforcement learning algorithms to improve the quality and accuracy of the generated graphics."),(0,g.kt)("li",{parentName:"ul"},"Iterative optimization: The process of collecting feedback and updating the model is repeated until the model performance reaches a satisfactory level.")),(0,g.kt)("p",null,"Through this process, SolidUI's Vincent graph language model is able to continuously learn and improve from user feedback, producing graphics of higher quality and accuracy."),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"Version 0.1.0",src:n(6938).Z,width:"1209",height:"582"})),(0,g.kt)("h1",{id:"document"},"Document"),(0,g.kt)("p",null,"For a complete list of documentation for SolidUI v0.1.0, see ",(0,g.kt)("a",{parentName:"p",href:"https://website.solidui.top/"},"SolidUI-Doc")),(0,g.kt)("h1",{id:"contribute"},"Contribute"),(0,g.kt)("p",null,"We welcome and look forward to more contributors participating in building SolidUI, whether it is code, documentation, or other forms of contribution that can help the community."),(0,g.kt)("h1",{id:"contact-us"},"Contact US"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"For any questions and suggestions about SolidUI, you can submit an issue for tracking, processing and experience sharing"),(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("a",{parentName:"li",href:"https://twitter.com/dlimeng192048"},"twitter")),(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("a",{parentName:"li",href:"https://www.youtube.com/@dlimeng"},"youtube")),(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("a",{parentName:"li",href:"https://space.bilibili.com/472576729"},"bilibili")," (in Chinese)"),(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("a",{parentName:"li",href:"https://join.slack.com/t/solidui/shared_invite/zt-1r83iino0-SZD38aHAIw2KBA~DSpZndA"},"slack")),(0,g.kt)("li",{parentName:"ul"},"You can scan the QR code below and join our WeChat group for faster response (in Chinese)")),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"SolidUI1",src:n(3634).Z,width:"500",height:"500"})),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"WeChat Official Account (in Chinese)")),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"SolidUI2",src:n(276).Z,width:"500",height:"500"})),(0,g.kt)("h1",{id:"who-is-using-solidui"},"Who is using SolidUI"),(0,g.kt)("p",null,"We created an issue ",(0,g.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI/issues/1"},"[Who is Using SolidUI]")," for user feedback and documentation of who is using SolidUI."),(0,g.kt)("h1",{id:"contributors"},"Contributors"),(0,g.kt)("p",null,"Thanks to everyone who contributed PR~ \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,g.kt)("a",{href:"https://github.com/CloudOrc/SolidUI/graphs/contributors"},(0,g.kt)("img",{src:"https://contrib.rocks/image?repo=CloudOrc/SolidUI"})),(0,g.kt)("h1",{id:"thanks-and-support"},"Thanks And Support"),(0,g.kt)("p",null,"We are very grateful for your support and recognition of our project and development work. In open source software development, we deeply know that user and community feedback and support are crucial. Our project has provided a README and Issue system to facilitate user deployment and problem solving, while also helping to increase project activity. We will prioritize issues raised in the issues."),(0,g.kt)("p",null,"If you are interested in the community, welcome to participate (code, documentation, use), welcome to participate in any form."),(0,g.kt)("p",null,"If you feel that the SolidUI project is valuable to you and are willing to support our development work, please give the project a little star or ",(0,g.kt)("a",{parentName:"p",href:"https://afdian.net/a/solidui"},"sponsor us"),"."))}B.isMDXComponent=!0},6938:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/designpage-26289d04645e6f3d4aa534905e347a89.png"},3634:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},276:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);