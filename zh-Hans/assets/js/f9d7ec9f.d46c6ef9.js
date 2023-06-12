"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6506],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,p(p({ref:e},o),{},{components:n})):a.createElement(c,p({ref:e},o))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},416:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"\u83b7\u53d6\u77ed\u4fe1\u53d1\u9001\u72b6\u6001",sidebar_position:8},p="GetUSMSSendReceipt",i={unversionedId:"api/list/GetUSMSSendReceipt",id:"api/list/GetUSMSSendReceipt",title:"GetUSMSSendReceipt",description:"\u8c03\u7528\u63a5\u53e3GetUSMSSendReceipt\u77ed\u4fe1\u53d1\u9001\u72b6\u6001\u4fe1\u606f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/api/list/GetUSMSSendReceipt.md",sourceDirName:"api/list",slug:"/api/list/GetUSMSSendReceipt",permalink:"/zh-Hans/docs/api/list/GetUSMSSendReceipt",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/api/list/GetUSMSSendReceipt.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"\u83b7\u53d6\u77ed\u4fe1\u53d1\u9001\u72b6\u6001",sidebar_position:8},sidebar:"api",previous:{title:"UploadMedia",permalink:"/zh-Hans/docs/api/list/UploadMedia"},next:{title:"GetMedia",permalink:"/zh-Hans/docs/api/list/GetMedia"}},d={},s=[{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response Elements",id:"response-elements",level:2},{value:"ReceiptPerSession",id:"receiptpersession",level:2},{value:"ReceiptPerPhone",id:"receiptperphone",level:2},{value:"Request Example",id:"request-example",level:2},{value:"Response Example",id:"response-example",level:2}],o={toc:s},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getusmssendreceipt"},"GetUSMSSendReceipt"),(0,r.kt)("p",null,"\u8c03\u7528\u63a5\u53e3GetUSMSSendReceipt\u77ed\u4fe1\u53d1\u9001\u72b6\u6001\u4fe1\u606f"),(0,r.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a\uff1aGetUSMSSendReceipt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76eeID\uff1a",(0,r.kt)("a",{parentName:"td",href:"../index"},"\u83b7\u53d6AccountId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SessionNoSet"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u77ed\u4fe1\u65f6\u8fd4\u56de\u7684SessionNo\u96c6\u5408\uff0c\u5355\u6b21\u8c03\u7528\u96c6\u5408\u6570\u9700\u63a7\u5236\u5728100\u4e2a\u4ee5\u5185"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u77ed\u4fe1\u63d0\u4ea4\u53d1\u9001\u540e\uff0c\u53ef\u8c03\u7528\u63a5\u53e3GetUSMSSendReceipt\u67e5\u8be2\u53ca\u83b7\u53d6\u77ed\u4fe1\u53d1\u9001\u7684\u72b6\u6001\u4fe1\u606f\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e5\u53d1\u9001\u540e\u672a\u7acb\u5373\u62ff\u5230\u56de\u6267\u72b6\u6001\uff0c\u5efa\u8bae\u5728\u53d1\u9001\u540e5\u81f310\u5206\u949f\u5185\u5728\u5c1d\u8bd5\u4ee3\u7528\u83b7\u53d6;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e5\u8d85\u8fc712\u5c0f\u65f6\u4ecd\u672a\u62ff\u5230\u53d1\u9001\u72b6\u6001\uff0c\u53ef\u8054\u7cfb",(0,r.kt)("inlineCode",{parentName:"p"},"support@uspeedo.com"),"\u6280\u672f\u652f\u6301\u534f\u52a9"))),(0,r.kt)("h2",{id:"response-elements"},"Response Elements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53RetCode\u4e0d\u4e3a0\u65f6\uff0cMessage\u4e2d\u663e\u793a\u5177\u4f53\u9519\u8bef\u63cf\u8ff0\uff0c\u82e5RetCode\u4e3a0\uff0c\u4e0d\u8fd4\u56deMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u6267\u4fe1\u606f\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("h2",{id:"receiptpersession"},"ReceiptPerSession"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SessionNo"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u77ed\u4fe1\u65f6\u8fd4\u56de\u7684SessionNo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReceiptSet"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u624b\u673a\u53f7\u7684\u77ed\u4fe1\u56de\u6267\u4fe1\u606f\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("h2",{id:"receiptperphone"},"ReceiptPerPhone"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u53f7\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CostCount"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8017\u77ed\u4fe1\u6761\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReceiptResult"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u6267\u7ed3\u679c\uff0c\u679a\u4e3e\u503c\uff1a",(0,r.kt)("br",null),"  Success: \u4ee3\u8868\u6210\u529f ",(0,r.kt)("br",null),"  Fail: \u4ee3\u8868\u5931\u8d25  ",(0,r.kt)("br",null),"  Unknow: \u4ee3\u8868\u672a\u77e5 ",(0,r.kt)("br",null),"  SubmitFail: \u4ee3\u8868\u63d0\u4ea4\u5931\u8d25"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReceiptCode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u62a5\u544a\u7f16\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReceiptDesc"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u6267\u7ed3\u679c\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReceiptTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u6267\u8fd4\u56de\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7684\u4e1a\u52a1\u6807\u8bc6ID\uff0c\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("h2",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.uspeedo.com/api -H \'Content-Type: application/json\' -d \'{\n   "Action": "GetUSMSSendReceipt",\n   "AccountId": 1,\n   "SessionNoSet": ["nAQDODtO"]\n}\'\n')),(0,r.kt)("h2",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "GetUSMSSendReceiptResponse", \n    "Message": "OnVhSPcD", \n    "Data": [\n        {\n            "SessionNo": "BmThtoRB", \n            "ReceiptSet": [\n                {\n                    "CostCount": 6, \n                    "ReceiptTime": 6, \n                    "UserId": "1213", \n                    "ReceiptCode": "0", \n                    "Phone": "QbPtKJPa", \n                    "ReceiptResult": "Success", \n                    "ReceiptDesc": "DxMRsuET"\n                }\n            ]\n        }\n    ], \n    "RetCode": 0\n}\n')))}u.isMDXComponent=!0}}]);