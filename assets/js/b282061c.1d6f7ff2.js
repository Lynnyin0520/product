"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[776],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),o=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=o(a),u=r,k=s["".concat(i,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(k,p(p({ref:e},m),{},{components:a})):n.createElement(k,p({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[s]="string"==typeof t?t:r,p[1]=d;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7986:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},p="UploadMedia-\u4e0a\u4f20\u5a92\u4f53\u6587\u4ef6",d={unversionedId:"UploadMedia",id:"UploadMedia",title:"UploadMedia-\u4e0a\u4f20\u5a92\u4f53\u6587\u4ef6",description:"Request Parameters",source:"@site/docs/8-UploadMedia.md",sourceDirName:".",slug:"/UploadMedia",permalink:"/docs/UploadMedia",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/main/docs/docs/8-UploadMedia.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{}},i={},o=[{value:"Request Parameters",id:"request-parameters",level:2},{value:"Request Example",id:"request-example",level:2},{value:"Response Parameters",id:"response-parameters",level:2},{value:"Data Parameters",id:"data-parameters",level:2},{value:"Response Example",id:"response-example",level:2}],m={toc:o},s="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uploadmedia-\u4e0a\u4f20\u5a92\u4f53\u6587\u4ef6"},"UploadMedia-\u4e0a\u4f20\u5a92\u4f53\u6587\u4ef6"),(0,r.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"UploadMedia"),(0,r.kt)("td",{parentName:"tr",align:null},"YES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d26\u6237ID\uff08\u7f51\u5173\u53c2\u6570\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"YES")))),(0,r.kt)("h2",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "UploadMedia",\n    "accountId": 8899,\n    "companyId": 8899,\n    "BusinessPhone": "8615000579987",\n    "File":"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"\n}\n')),(0,r.kt)("h2",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"UploadMediaResponse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0\u6210\u529f\uff0c\u975e0\u5931\u8d25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6570\u636e")))),(0,r.kt)("h2",{id:"data-parameters"},"Data Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5a92\u4f53ID")))),(0,r.kt)("h2",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "UploadMediaResponse",\n    "Data": {\n        "Id": "765769601625028"\n    },\n    "Message": "",\n    "RequestId": "cf3288ef-1af0-4cef-824c-ef67b5f832ea",\n    "RetCode": 0\n}\n')))}c.isMDXComponent=!0}}]);