"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Delete SMS Template",sidebar_position:3},p="DeleteUSMSTemplate",i={unversionedId:"api/list/DeleteUSMSTemplate",id:"api/list/DeleteUSMSTemplate",title:"DeleteUSMSTemplate",description:"Call the DeleteUSMSTemplate API to delete an SMS template.",source:"@site/docs/api/list/DeleteUSMSTemplate.md",sourceDirName:"api/list",slug:"/api/list/DeleteUSMSTemplate",permalink:"/docs/api/list/DeleteUSMSTemplate",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/api/list/DeleteUSMSTemplate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Delete SMS Template",sidebar_position:3},sidebar:"api",previous:{title:"Create USMS Template",permalink:"/docs/api/list/CreateUSMSTemplate"},next:{title:"Query one or more SMS templates",permalink:"/docs/api/list/QueryUSMSTemplate"}},o={},s=[{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response Elements",id:"response-elements",level:2},{value:"Request Example",id:"request-example",level:2},{value:"Response Example",id:"response-example",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deleteusmstemplate"},"DeleteUSMSTemplate"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Call the DeleteUSMSTemplate API to delete an SMS template.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deleting templates that are currently under review is not supported;"),(0,r.kt)("li",{parentName:"ul"},"Deleted SMS templates cannot be restored, so please operate with caution.")),(0,r.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The value is: DeleteUSMSTemplate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID\uff1a",(0,r.kt)("a",{parentName:"td",href:"/docs/api/"},"Get AccountId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateIds"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template ID (i.e. the work order ID when applying for the SMS template), supports an array format."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("h2",{id:"response-elements"},"Response Elements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message is not returned."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation name."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the status code description. If the operation is successful, it is returned as empty by default."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h2",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.uspeedo.com/api -H \'Content-Type: application/json\' -d \'{\n   "Action": "DeleteUSMSTemplate",\n   "AccountId": 1,\n   "TemplateIds": ["UTA1908XXXX8B3F","UTA1908XXXX8B3D"],\n}\'\n\n')),(0,r.kt)("h2",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "DeleteUSMSTemplateResponse", \n    "Message": "", \n    "RetCode": 0\n}\n')))}d.isMDXComponent=!0}}]);