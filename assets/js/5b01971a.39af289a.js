"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8410],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=s(a),g=r,k=u["".concat(m,".").concat(g)]||u[g]||d[g]||l;return a?n.createElement(k,p(p({ref:e},o),{},{components:a})):n.createElement(k,p({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[u]="string"==typeof t?t:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4153:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},p="GetTemplates",i={unversionedId:"whatsapp/api/List/GetTemplates",id:"whatsapp/api/List/GetTemplates",title:"GetTemplates",description:"To get a list of template associated with a business phone.",source:"@site/docs/whatsapp/api/List/4-GetTemplates.md",sourceDirName:"whatsapp/api/List",slug:"/whatsapp/api/List/GetTemplates",permalink:"/docs/whatsapp/api/List/GetTemplates",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/whatsapp/api/List/4-GetTemplates.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"whatsapp",previous:{title:"GetAccountPhoneList",permalink:"/docs/whatsapp/api/List/GetAccountPhoneList"},next:{title:"DeleteTemplate",permalink:"/docs/whatsapp/api/List/DeleteTemplate"}},m={},s=[{value:"Request Parameters",id:"request-parameters",level:2},{value:"Request Example",id:"request-example",level:2},{value:"Response Parameters",id:"response-parameters",level:2},{value:"Data Parameters",id:"data-parameters",level:2},{value:"Paging Parameters",id:"paging-parameters",level:2},{value:"Cursor Parameters",id:"cursor-parameters",level:2},{value:"template Parameters",id:"template-parameters",level:2},{value:"QualityScore Parameters",id:"qualityscore-parameters",level:2},{value:"component Parameters",id:"component-parameters",level:2},{value:"Response Example",id:"response-example",level:2}],o={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gettemplates"},"GetTemplates"),(0,r.kt)("p",null,"To get a list of template associated with a business phone.  "),(0,r.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Value: GetTemplates."),(0,r.kt)("td",{parentName:"tr",align:null},"YES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Account Id."),(0,r.kt)("td",{parentName:"tr",align:null},"YES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BusinessPhone"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of template."),(0,r.kt)("td",{parentName:"tr",align:null},"YES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template name."),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit size of each search."),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"After"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination mark."),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Before"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination mark."),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h2",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "GetTemplates",\n    "AccountId": 8899,\n    "BusinessPhone": "8615xxxx79987",\n    "Name":"ceshi",\n    "Limit":2,\n    "After":"MAZDZD"\n}\n')),(0,r.kt)("h2",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"GetTemplatesResponse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0 for success ",(0,r.kt)("a",{parentName:"td",href:"/docs/whatsapp/api/List/Enum#error_code"},"Error Codes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Request Id.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Return data.")))),(0,r.kt)("h2",{id:"data-parameters"},"Data Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"[]template"),(0,r.kt)("td",{parentName:"tr",align:null},"Template list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paging"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Paging info.")))),(0,r.kt)("h2",{id:"paging-parameters"},"Paging Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cursor"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination mark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Next"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Next page. If it is not empty, you can turn the page forwards.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prev"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Prev page. If it is not empty, you can turn the page backwards.")))),(0,r.kt)("h2",{id:"cursor-parameters"},"Cursor Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"After"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Paging cursor(Next Page).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Before"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Paging cursor(Prev Page).")))),(0,r.kt)("h2",{id:"template-parameters"},"template Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Id.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/whatsapp/api/List/Enum#template_category"},"Category"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/whatsapp/api/List/Enum#template_status"},"Status"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RejectedReason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Rejected Reason.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QualityScore"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Quality Score.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Components"),(0,r.kt)("td",{parentName:"tr",align:null},"[]component"),(0,r.kt)("td",{parentName:"tr",align:null},"Template Components.")))),(0,r.kt)("h2",{id:"qualityscore-parameters"},"QualityScore Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Score"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/whatsapp/api/List/Enum#template_quality_score"},"Quality Score"))))),(0,r.kt)("h2",{id:"component-parameters"},"component Parameters"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components"},"Components")),(0,r.kt)("h2",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "GetTemplatesResponse",\n    "Data": {\n        "Data": [\n            {\n                "Category": "AUTHENTICATION",\n                "Components": [\n                    {\n                        "Example": {\n                            "BodyText": [\n                                [\n                                    "1313"\n                                ]\n                            ]\n                        },\n                        "Text": "Hi, your verification code is {{1}}, Please do not share the information with others",\n                        "Type": "BODY"\n                    }\n                ],\n                "ID": "92962xxxx754",\n                "Language": "en",\n                "Name": "ceshiyanzhengma",\n                "QualityScore": {\n                    "Score": "UNKNOWN"\n                },\n                "Tags": [\n                    "TEST_TAG"\n                ],\n                "RejectedReason": "INVALID_FORMAT",\n                "Status": "REJECTED"\n            },\n            {\n                "Category": "UTILITY",\n                "Components": [\n                    {\n                        "Example": {\n                            "HeaderHandle": [\n                                "https://scontent.whatsapp.net/v/t61.29466-34/339053090_782169319941265_6515992918508567612_n.png?ccb=1-7&_nc_sid=57045b&_nc_ohc=kqoiquC7lvYAX_nBRL_&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&oh=01_AdQ6WI1_lWevNio26xXchMxcIv8aeVoF1UD9cTVdXtkkuw&oe=646FF3F7"\n                            ]\n                        },\n                        "Format": "IMAGE",\n                        "Type": "HEADER"\n                    },\n                    {\n                        "Text": "TEST TEMPLATE",\n                        "Type": "BODY"\n                    },\n                    {\n                        "Buttons": [\n                            {\n                                "Text": "LINK",\n                                "Type": "URL",\n                                "URL": "http://uspeedo.com/"\n                            }\n                        ],\n                        "Type": "BUTTONS"\n                    }\n                ],\n                "ID": "782xxxx607932",\n                "Language": "af",\n                "Name": "ceshi",\n                "Tags": null,\n                "QualityScore": {\n                    "Score": "UNKNOWN"\n                },\n                "RejectedReason": "INCORRECT_CATEGORY",\n                "Status": "REJECTED"\n            }\n        ],\n        "Paging": {\n            "Cursors": {\n                "After": "MgZDZD",\n                "Before": "MQZDZD"\n            },\n            "Next": "",\n            "Previous": ""\n        }\n    },\n    "Message": "",\n    "RequestId": "d71eb04c-7475-4f06-8be4-96cea6041545",\n    "RetCode": 0\n}\n')))}d.isMDXComponent=!0}}]);