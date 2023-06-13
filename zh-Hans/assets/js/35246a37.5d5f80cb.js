"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,p(p({ref:e},o),{},{components:a})):n.createElement(k,p({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},613:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"\u4fee\u6539\u77ed\u4fe1\u6a21\u677f",sidebar_position:4},p="UpdateUSMSTemplate",i={unversionedId:"sms/api/list/UpdateUSMSTemplate",id:"sms/api/list/UpdateUSMSTemplate",title:"UpdateUSMSTemplate",description:"\u8c03\u7528\u63a5\u53e3UpdateUSMSTemplate\u4fee\u6539\u672a\u901a\u8fc7\u5ba1\u6838\u7684\u77ed\u4fe1\u6a21\u677f\uff0c\u5e76\u91cd\u65b0\u63d0\u4ea4\u5ba1\u6838",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sms/api/list/UpdateUSMSTemplate.md",sourceDirName:"sms/api/list",slug:"/sms/api/list/UpdateUSMSTemplate",permalink:"/zh-Hans/docs/sms/api/list/UpdateUSMSTemplate",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/sms/api/list/UpdateUSMSTemplate.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"\u4fee\u6539\u77ed\u4fe1\u6a21\u677f",sidebar_position:4},sidebar:"sms",previous:{title:"GetTemplates",permalink:"/zh-Hans/docs/sms/api/list/GetTemplates"},next:{title:"\u67e5\u8be2\u4e00\u4e2a\u6216\u591a\u4e2a\u77ed\u4fe1\u6a21\u677f",permalink:"/zh-Hans/docs/sms/api/list/QueryUSMSTemplate"}},m={},s=[{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response Elements",id:"response-elements",level:2},{value:"Request Example",id:"request-example",level:2}],o={toc:s},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updateusmstemplate"},"UpdateUSMSTemplate"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8c03\u7528\u63a5\u53e3UpdateUSMSTemplate\u4fee\u6539\u672a\u901a\u8fc7\u5ba1\u6838\u7684\u77ed\u4fe1\u6a21\u677f\uff0c\u5e76\u91cd\u65b0\u63d0\u4ea4\u5ba1\u6838")),(0,r.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a\uff1a UpdateUSMSTemplate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76eeID\uff1a",(0,r.kt)("a",{parentName:"td",href:"../index"},"\u83b7\u53d6AccountId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u77ed\u4fe1\u6a21\u677fID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Template"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u7684\u6a21\u677f\u5185\u5bb9\u3002\u6a21\u677f\u540d\u79f0\u548c\u6a21\u677f\u5185\u5bb9\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002\u5c0f\u4e8e\u7b49\u4e8e600\u4e2a\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u7684\u6a21\u677f\u540d\u79f0\u3002\u5c0f\u4e8e\u7b49\u4e8e32\u4e2a\u5b57\uff0c\u6bcf\u4e2a\u4e2d\u6587\u3001\u82f1\u6587\u3001\u6570\u7ec4\u3001\u7b26\u5408\u90fd\u8ba1\u4e3a\u4e00\u4e2a\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remark"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u77ed\u4fe1\u6a21\u677f\u7533\u8bf7\u539f\u56e0\u8bf4\u660e\uff0c\u5b57\u6570\u4e0d\u8d85\u8fc7128\uff0c\u6bcf\u4e2a\u4e2d\u6587\u3001\u7b26\u53f7\u3001\u82f1\u6587\u3001\u6570\u5b57\u7b49\u90fd\u8ba1\u4e3a1\u4e2a\u5b57\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u677f\u53d8\u91cf\u5c5e\u6027\u8bf4\u660e"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u6d88\u606f\u6a21\u677f\u3002\u7528\u4e8e\u4fee\u6539\u73b0\u6709\u6a21\u677f\uff0c\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u82e5\u4fee\u6539\u4e86\u6a21\u677f\u5185\u5bb9\uff0c\u6a21\u677f\u72b6\u6001\u7b49\u4f1a\u91cd\u7f6e\u5230\u521d\u521b\u72b6\u6001\uff1b\u82e5\u53ea\u4fee\u6539\u6a21\u677f\u540d\u79f0\uff0c\u5219\u4e0d\u4f1a\u91cd\u7f6e")),(0,r.kt)("h2",{id:"response-elements"},"Response Elements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53RetCode\u4e0d\u4e3a0\u65f6\uff0cMessage\u4e2d\u663e\u793a\u5177\u4f53\u9519\u8bef\u63cf\u8ff0\uff0c\u82e5RetCode\u4e3a0\uff0c\u4e0d\u8fd4\u56deMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u751f\u9519\u8bef\u65f6\u8868\u793a\u9519\u8bef\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("h2",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.uspeedo.com/api -H \'Content-Type: application/json\' -d \'{\n   "Action": "UpdateUSMSTemplate",\n   "AccountId": 1,\n   "TemplateId": "UTA1908XXXX8B3F",\n   "Template": "alertXXXXXXXXXXXXXXXXXXXXXXXX",\n   "TemplateName": "ucloud-alert",\n   "Remark": "XXXXXXXXXXXXXXX",\n   "Instruction": "cmUVPDNr"\n}\'\n')),(0,r.kt)("h1",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "UpdateUSMSTemplateResponse", \n    "Message": "", \n    "RetCode": 0\n}\n')))}u.isMDXComponent=!0}}]);