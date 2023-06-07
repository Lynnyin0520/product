"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Golang",sidebar_position:2},l="GO SDK",c={unversionedId:"sdk/package/go",id:"sdk/package/go",title:"GO SDK",description:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sdk/package/go.md",sourceDirName:"sdk/package",slug:"/sdk/package/go",permalink:"/zh-Hans/docs/sdk/package/go",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/sdk/package/go.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Golang",sidebar_position:2},sidebar:"sdk",previous:{title:"\u751f\u6210API\u7b7e\u540d",permalink:"/zh-Hans/docs/sdk/signature-2"}},s={},i=[{value:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e00\u51c6\u5907\u5de5\u4f5c",level:2},{value:"1) \u83b7\u53d6API\u79d8\u94a5\u4fe1\u606f",id:"1-\u83b7\u53d6api\u79d8\u94a5\u4fe1\u606f",level:3},{value:"2) \u7533\u8bf7\u77ed\u4fe1\u6a21\u677f",id:"2-\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f",level:3},{value:"\u4e8c\u3001\u914d\u7f6eSDK",id:"\u4e8c\u914d\u7f6esdk",level:2},{value:"1) \u4f7f\u7528 go get \u5b89\u88c5",id:"1-\u4f7f\u7528-go-get-\u5b89\u88c5",level:3},{value:"2) \u4f7f\u7528 go mod \u5b89\u88c5",id:"2-\u4f7f\u7528-go-mod-\u5b89\u88c5",level:3},{value:"3) \u53c2\u6570\u8bf4\u660e",id:"3-\u53c2\u6570\u8bf4\u660e",level:3},{value:"4) \u6784\u9020API\u7b7e\u540d",id:"4-\u6784\u9020api\u7b7e\u540d",level:3},{value:"\u4e09\u3001\u5b8c\u6574\u793a\u4f8b",id:"\u4e09\u5b8c\u6574\u793a\u4f8b",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-sdk"},"GO SDK"),(0,a.kt)("h2",{id:"\u4e00\u51c6\u5907\u5de5\u4f5c"},"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("h3",{id:"1-\u83b7\u53d6api\u79d8\u94a5\u4fe1\u606f"},"1) \u83b7\u53d6API\u79d8\u94a5\u4fe1\u606f"),(0,a.kt)("p",null,"\u8c03\u7528API\u524d\u9700\u8981\u83b7\u53d6\u79d8\u94a5\u4fe1\u606f\u751f\u6210\u7b7e\u540d",(0,a.kt)("inlineCode",{parentName:"p"},"X-Signature"),"\u9700\u8981\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeyId")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),"\u53ef\u4ece\u63a7\u5236\u53f0\u8d26\u6237\u4e2d\u83b7\u53d6\u3002",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"\u83b7\u53d6\u6b65\u9aa4\u8be6\u89c1\uff1a\u5982\u4f55\u83b7\u53d6AccessKeyId\u3001AccessKeySecret"),"."),(0,a.kt)("h3",{id:"2-\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f"},"2) \u7533\u8bf7\u77ed\u4fe1\u6a21\u677f"),(0,a.kt)("p",null,"\u60a8\u53ef\u5728\u77ed\u4fe1\u670d\u52a1-\u63a7\u5236\u53f0\u7684",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"\u56fd\u9645\u77ed\u4fe1/\u77ed\u4fe1\u7b7e\u540d\u6a21\u5757"),".\uff0c\u81ea\u52a9\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f\uff1b\u8be6\u7ec6\u7533\u8bf7\u6b65\u9aa4\u8be6\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"\u5982\u4f55\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f")),(0,a.kt)("h2",{id:"\u4e8c\u914d\u7f6esdk"},"\u4e8c\u3001\u914d\u7f6eSDK"),(0,a.kt)("h3",{id:"1-\u4f7f\u7528-go-get-\u5b89\u88c5"},"1) \u4f7f\u7528 go get \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"go get github.com/uSpeedo/usms-sdk-go\n")),(0,a.kt)("p",null,"Note \u5982\u679c\u9047\u5230\u7f51\u7edc\u4e0d\u7a33\u5b9a\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u670d\u52a1\u5668\u6765\u52a0\u901f\u4e0b\u8f7d\uff0c\u4f8b\u5982\u4f7f\u7528 GOPROXY \u52a0\u901f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"export GOPROXY=https://goproxy.io\n")),(0,a.kt)("h3",{id:"2-\u4f7f\u7528-go-mod-\u5b89\u88c5"},"2) \u4f7f\u7528 go mod \u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u4efb\u610f\u4ee3\u7801\u4e2d\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import _ "github.com/uSpeedo/usms-sdk-go"\n\n')),(0,a.kt)("p",null,"\u4e4b\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"go mod init\ngo mod tidy\n")),(0,a.kt)("h3",{id:"3-\u53c2\u6570\u8bf4\u660e"},"3) \u53c2\u6570\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u624b\u673a\u53f7\u5217\u8868\uff08PhoneNumbers\uff09\uff1a\u652f\u6301\u56fd\u9645\u53ca\u56fd\u5185\u77ed\u4fe1\uff0c\u56fd\u9645\u77ed\u4fe1\u4f7f\u7528 (86)13812345678 \u683c\u5f0f\uff0c\u9700\u8981\u5728\u624b\u673a\u53f7\u7801\u524d\u9762\u5e26\u4e0a\u56fd\u9645\u7535\u8bdd\u533a\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u77ed\u4fe1\u6a21\u677f ID\uff08TemplateId\uff09: \u9996\u6b21\u4f7f\u7528\uff0c\u9700\u8981\u5728 UCloud \u63a7\u5236\u53f0\u7533\u8bf7\u6a21\u677f\uff0c\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u5c06\u6a21\u677f ID \u4f20\u5165\u5230\u8be5\u5904\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u77ed\u4fe1\u6a21\u677f\u53c2\u6570\u5217\u8868\uff08TemplateParams\uff09\uff1a\u77ed\u4fe1\u6a21\u677f\u4e2d\u53ef\u4f20\u5165\u53d8\u91cf\uff0c\u7533\u8bf7\u7684\u65f6\u5019\u6a21\u677f\u4e2d\u6709\u51e0\u4e2a\u53d8\u91cf\uff0c\u5219\u9700\u8981\u4f20\u5165\u51e0\u4e2a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u77ed\u4fe1\u7b7e\u540d\uff08SigContent\uff09\uff1a\u9996\u6b21\u4f7f\u7528\uff0c\u9700\u8981\u5728 UCloud \u63a7\u5236\u53f0\u7533\u8bf7\u7b7e\u540d\uff0c\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u5c06\u7b7e\u540d\u4f20\u5165\u8be5\u5904\u3002\u9996\u6b21\u7533\u8bf7\u7684\u7b7e\u540d\u4e3a\u9ed8\u8ba4\u7b7e\u540d\uff0c\u6709\u9ed8\u8ba4\u7b7e\u540d\u5b58\u5728\u65f6\uff0c\u8be5\u53c2\u6570\u53ef\u4e0d\u586b\u3002")),(0,a.kt)("h3",{id:"4-\u6784\u9020api\u7b7e\u540d"},"4) \u6784\u9020API\u7b7e\u540d"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u751f\u6210\u7b7e\u540d\u65b9\u9996\u5148\u5c06\u6240\u6709\u53c2\u6570\u548c\u503c\u653e\u5165\u4e00\u4e2amap \u4e2d\uff0c\u5e76\u6309\u7167 key \u503c\u5347\u5e8f\u6392\u5217\u3002\u7136\u540e\u5c06\u6240\u6709\u53c2\u6570\u62fc\u63a5\u8d77\u6765\uff0c\u7ec4\u6210\u7b7e\u540d\u539f\u6587\u3002\u6700\u540e\u4f7f\u7528 SHA1\u7b7e\u540d\u539f\u6587\u8fdb\u884c\u7b7e\u540d\u3002\u82e5\u63a5\u53e3\u4e2d\u9700\u643a\u5e26\u56fe\u7247/\u89c6\u9891\u7b49\u6587\u4ef6\u4e0a\u4f20\u8bf7\u6c42\uff0c\u6587\u4ef6\u6d41\u4e0d\u53c2\u4e0e\u7b7e\u540d\uff0c\u8bf7\u81ea\u884c\u5c06\u6587\u4ef6\u8f6c\u6362\u6210\u6587\u4ef6\u6d41\u5f62\u5f0f\uff0c\u4e14\u4ee5\u6587\u4ef6\u6d41\u683c\u5f0f\u8bf7\u6c42\u3002")),(0,a.kt)("p",null,"1) \u4ece\u63a7\u5236\u53f0\u8d26\u6237\u4e2d\u83b7\u53d6AccessKeySecret"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1\n")),(0,a.kt)("p",null,"2) \u83b7\u53d6\u8bf7\u6c42\u4e2d\u7684\u8bf7\u6c42\u62a5\u6587\u4e3b\u4f53\uff08request body\uff09\u5e76\u6309\u7167\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u952e\u503c ASCII \u7801\u9012\u589e\u6392\u5e8f\uff08\u5b57\u6bcd\u5347\u5e8f\u6392\u5e8f\uff09\uff0c\u5982\u679c\u9047\u5230\u76f8\u540c\u5b57\u7b26\u5219\u6309\u7167\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u7684\u952e\u503c ASCII \u7801\u9012\u589e\u6392\u5e8f\uff0c\u4ee5\u6b64\u7c7b\u63a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"Action"     :  "SendBatchUSMSMessage",\n"Limit"      :  10,\n"Region"     :  "cn-bj2"\n}\n')),(0,a.kt)("p",null,"3) \u5c06\u6392\u5e8f\u540e\u7684\u53c2\u6570\u4e0e\u5176\u5bf9\u5e94\u503c\uff0c\u7ec4\u5408\u6210 \u53c2\u6570\u53c2\u6570\u503c \u7684\u683c\u5f0f\uff0c\u5e76\u5728\u672c\u7b7e\u540d\u4e32\u7684\u7ed3\u5c3e\u62fc\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),"\uff0c\u6b64\u65f6\u751f\u6210\u7684\u5b57\u7b26\u4e32\u4e3a\u5f85\u7b7e\u540d\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ActionSendBatchUSMSMessageLimit10Regioncn-bj2MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1\n")),(0,a.kt)("p",null,"4) \u8ba1\u7b97\u7b7e\u540d\u503c"),(0,a.kt)("p",null,"\u4f7f\u7528 SHA1 \u7f16\u7801\u5f85\u7b7e\u540d\u5b57\u7b26\u4e32\uff0c\u751f\u6210\u8bf7\u6c42\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"575fd93b539c4eb9837c8de6651e92389456adfa\n")),(0,a.kt)("p",null,"5) \u8bbe\u7f6eHTTP\u5934"),(0,a.kt)("p",null,"API\u8bf7\u6c42\u8981\u6c42\u901a\u8fc7HTTP Header\u6765\u4f20\u9012\u7b7e\u540d\u4fe1\u606f\uff0c\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u56db\u4e2a\u53c2\u6570"),(0,a.kt)("p",null,"X-Signature  \u7b7e\u540d\u503c"),(0,a.kt)("p",null,"X-Timestamp  \u65f6\u95f4\u6233\uff0c\u4e94\u5206\u949f\u4ee5\u5185"),(0,a.kt)("p",null,"X-Nonce      \u968f\u673a\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"X-Access-Key-Id \u63a7\u5236\u53f0\u8d26\u6237\u7684AccessKeyId"),(0,a.kt)("h2",{id:"\u4e09\u5b8c\u6574\u793a\u4f8b"},"\u4e09\u3001\u5b8c\u6574\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/uSpeedo/usms-sdk-go/private/utils"\n    "time"\n\n    "github.com/uSpeedo/usms-sdk-go/services/usms"\n    "github.com/uSpeedo/usms-sdk-go/um"\n    "github.com/uSpeedo/usms-sdk-go/um/auth"\n    "github.com/uSpeedo/usms-sdk-go/um/config"\n    "github.com/uSpeedo/usms-sdk-go/um/log"\n)\n\nfunc main() {\n    cfg := config.NewConfig()\n    cfg.LogLevel = log.DebugLevel\n\n    credential := auth.NewCredential()\n    credential.AccessKeyId = "..."\n    credential.AccessKeySecret = "..."\n\n    client := usms.NewClient(&cfg, &credential)\n\n    // send request\n    req := client.NewSendBatchUSMSMessageRequest()\n    req.AccountId = um.Int(1)\n    req.Action = um.String("SendBatchUSMSMessage")\n    req.Target = &usms.SendBatchInfo{\n        TemplateId: "...",\n        Targets: []usms.SendBatchTarget{\n            {TemplateParams: []string{"1311"}, Phone: "138xxxx1123"},\n        },\n    }\n    //add header\n    req.SetNonce(utils.RandStr(10))\n    req.SetAccessKeyId(credential.AccessKeyId)\n    req.SetSignature(credential.CreateSign(makeSendParamMap(req)))\n    t, _ := time.ParseDuration("-2m")\n    req.SetTimestamp(time.Now().Add(t).Unix())\n    resp, err := client.SendBatchUSMSMessage(req)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("%+v", resp)\n}\n\nfunc makeSendParamMap(req *usms.SendBatchUSMSMessageRequest) map[string]interface{} {\n    m := make(map[string]interface{}, 0)\n    m["AccountId"] = req.AccountId\n    m["Target"] = req.Target\n    m["Action"] = req.Action\n    return m\n}\n')))}d.isMDXComponent=!0}}]);