"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[2467],{9278:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(9301);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,v=p["".concat(s,".").concat(u)]||p[u]||h[u]||a;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(8448),o=(r(9301),r(9278));const a={id:"development-release",title:"Project Release Process",sidebar_position:1},l=void 0,i={unversionedId:"development/publishing-process/development-release",id:"development/publishing-process/development-release",title:"Project Release Process",description:"SolidUI project release process",source:"@site/docs/development/publishing-process/README8.md",sourceDirName:"development/publishing-process",slug:"/development/publishing-process/development-release",permalink:"/docs/development/publishing-process/development-release",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/docs/development/publishing-process/README8.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"development-release",title:"Project Release Process",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Co-Construction Process",permalink:"/docs/development/project-process/development-construction"},next:{title:"Server-side Compilation",permalink:"/docs/development/server-compilation/development-server"}},s={},c=[{value:"SolidUI project release process",id:"solidui-project-release-process",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Materials pack",id:"materials-pack",level:2},{value:"branch",id:"branch",level:3},{value:"Create a release-${release_version}-rcx branch based on the development branch to be released",id:"create-a-release-release_version-rcx-branch-based-on-the-development-branch-to-be-released",level:3},{value:"tag",id:"tag",level:3},{value:"clone the corresponding release branches locally",id:"clone-the-corresponding-release-branches-locally",level:3},{value:"The version number is confirmed",id:"the-version-number-is-confirmed",level:2},{value:"Verify material package",id:"verify-material-package",level:2},{value:"Initiate a vote",id:"initiate-a-vote",level:2},{value:"Community voting phase",id:"community-voting-phase",level:3},{value:"Close the voting thread",id:"close-the-voting-thread",level:3},{value:"Cancel the vote (if necessary)",id:"cancel-the-vote-if-necessary",level:3},{value:"Announce the results of the vote",id:"announce-the-results-of-the-vote",level:3},{value:"Official release",id:"official-release",level:2},{value:"GitHub version created",id:"github-version-created",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"solidui-project-release-process"},"SolidUI project release process"),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Now it is the PMC member who initiates the release process and has the release rights."),(0,o.kt)("h2",{id:"materials-pack"},"Materials pack"),(0,o.kt)("h3",{id:"branch"},"branch"),(0,o.kt)("p",null,"Pull the new branch from the release branch as the release branch. If you want to release ${release_version}, pull the new branch release-${release_version}-${condition_version} from the release branch, All operations thereafter occur on the release-${release_version}-${condition_version} branch."),(0,o.kt)("h3",{id:"create-a-release-release_version-rcx-branch-based-on-the-development-branch-to-be-released"},"Create a release-${release_version}-rcx branch based on the development branch to be released"),(0,o.kt)("p",null,"If the currently developed source branch is dev-0.1.0, and you need to release version 0.1.0, create a branch: release-0.1.0-rc1"),(0,o.kt)("h3",{id:"tag"},"tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git tag -a release-0.1.0-rc1 -m "release 0.1.0-rc1"\ngit push origin release-0.1.0-rc1\n')),(0,o.kt)("h3",{id:"clone-the-corresponding-release-branches-locally"},"clone the corresponding release branches locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#-b release-0.1.0-rc1 Specifies the clone branch -c(config) specifies the configuration core to use. Lf =false turns off the newline conversion\nGit clone - release - 0.1.0 from b - rc1 - c core. Autocrlf = false git@github.com: CloudOrc/SolidUI git\n")),(0,o.kt)("h2",{id:"the-version-number-is-confirmed"},"The version number is confirmed"),(0,o.kt)("h2",{id:"verify-material-package"},"Verify material package"),(0,o.kt)("p",null,"It is best to verify the prepared materials on both Windows and UNIx-like systems to avoid system compatibility issues such as line breaks"),(0,o.kt)("h2",{id:"initiate-a-vote"},"Initiate a vote"),(0,o.kt)("h3",{id:"community-voting-phase"},"Community voting phase"),(0,o.kt)("p",null,"When an issue initiates a vote, the PMC needs to check whether the version is correct according to the document before voting. At least 3 +1 PMC member votes can be counted before the voting is closed."),(0,o.kt)("h3",{id:"close-the-voting-thread"},"Close the voting thread"),(0,o.kt)("p",null,"If the required number of votes has been reached and you need to reply to the voting email before collecting the results, the voting thread is closed."),(0,o.kt)("h3",{id:"cancel-the-vote-if-necessary"},"Cancel the vote (if necessary)"),(0,o.kt)("p",null,"If there are some serious problems that need to be repaired and re-released, the voting needs to be cancelled. The release manager needs to start a new issue of voting cancellation and explain it."),(0,o.kt)("h3",{id:"announce-the-results-of-the-vote"},"Announce the results of the vote"),(0,o.kt)("p",null,"issue the results"),(0,o.kt)("h2",{id:"official-release"},"Official release"),(0,o.kt)("h3",{id:"github-version-created"},"GitHub version created"),(0,o.kt)("p",null,"To create the page ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI/releases/new"},"https://github.com/CloudOrc/SolidUI/releases/new")," based on previous SolidUI 0.1.0 from - rc1 branch created called 0.1.0 from the tag, Fill in the title SolidUI release-0.1.0 and write release notes for that version"),(0,o.kt)("p",null,"check"),(0,o.kt)("p",null,"Merge ${release_version}-RC branch to master branch (if not merged)"))}h.isMDXComponent=!0}}]);