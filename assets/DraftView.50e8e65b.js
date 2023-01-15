import{f as L,g as Q,j as X,e as K,h as W,o as Y,i as Z,p as ee,q as T}from"./element-plus.fb666207.js";import{u as te}from"./vue-router.ba9f7e29.js";import{_ as oe,u as ae,r as k}from"./index.a9d27ee1.js";import{d as c,G as ne,ac as g,o as D,c as E,V as t,T as o,u as $,Q as U,ae as le,a as i,a5 as f,X as d,a8 as se}from"./@vue.7d1f6ddd.js";import"./@vueuse.25c52eed.js";import"./@element-plus.b03326dd.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./lodash-es.b61273cf.js";import"./js-md5.3b4e41e9.js";import"./@kangc.35373149.js";import"./vue.5238b06c.js";import"./highlight.js.7457627b.js";import"./codemirror.b14f8d38.js";import"./sakana-widget.756df383.js";const re={class:"dialog-footer"},ie={style:{"font-weight":"bolder",color:"#666666","font-size":"x-large"}},pe=["src"],de={style:{top:"0",color:"#666666","font-weight":"bolder","font-size":"24px","word-break":"break-all",overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"1","-webkit-box-orient":"vertical",margin:"0 0 10px","word-wrap":"break-word"}},ue={style:{height:"150px",width:"auto"}},ce={style:{color:"#777777",width:"99%",display:"-webkit-box",padding:"0px 0px 0px 5px","white-space":"pre-wrap","word-break":"break-all","word-wrap":"break-word",overflow:"hidden","text-overflow":"ellipsis","-webkit-line-clamp":"4","-webkit-box-orient":"vertical"}},fe={style:{color:"#777777","font-size":"small",bottom:"10px",position:"absolute",width:"55%"}},me={__name:"DraftView",setup(_e){const h=c(!1),p=ae(),w=te(),C=c(),I=c([]),y=c([]),x=c(parseInt(w.params.page||1));let j="https://api.ixiaowai.cn/gqapi/gqapi.php";const r=c({authorUuid:p.$userInfo.value.id,topic:"",content:"",intro:"",assort:"",author:p.$userInfo.value.username,createDate:"",changeDate:"",tag:"",like:0}),m="http://astralcyber.ml:3000",u=new Headers;u.append("Content-Type","application/json"),setInterval(()=>{console.log(r.value)},5e3);async function O(a){let e={method:"GET",headers:u,redirect:"follow"};await fetch(`${m}/draft/${a}`,e).then(l=>l.json()).then(l=>{r.value=l}),h.value=!0}function b(a){I.value=se(y.value).slice(a*4-4,a*4),a!==1?k.push({name:"DraftPage",params:{page:a}}):k.push({name:"Draft"})}async function V(){let a={method:"GET",headers:u,redirect:"follow"};await fetch(`${m}/draft/`,a).then(e=>e.json()).then(e=>{for(let l in e)e[l].authorUuid===p.$userInfo.value.id&&y.value.push(e[l]);C.value=y.value.length}),typeof w.params.page<"u"?b(w.params.page):b(1)}async function S(){let a={method:"DELETE",headers:u,redirect:"follow"};const e=r.value;a.body=JSON.stringify(e),await fetch(`${m}/draft/${r.value.id}`,a).then(()=>{T({message:"\u5220\u9664\u6210\u529F",type:"success"}),h.value=!1}).catch(l=>alert(l)),location.replace(location.origin+"/draft")}function B(){let a={method:"PATCH",headers:u,redirect:"follow"};const e=r.value;a.body=JSON.stringify(e),fetch(`${m}/draft/${r.value.id}`,a).then(()=>{T({message:"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"})}).catch(l=>alert(l)),V()}function P(){k.push({name:"Main"})}ne(()=>{if(localStorage.getItem("id")!==null){p.$station.value=!0;let a={method:"GET",headers:u,redirect:"follow"};fetch(`${m}/users/${localStorage.getItem("id")}`,a).then(e=>e.json()).then(e=>{p.$userInfo.value=e}).catch(e=>alert(e))}V()});function G(a){return j+"?"+a+")"}return(a,e)=>{const l=g("v-md-editor"),q=L,z=Q,s=X,_=K,N=W,F=g("User"),v=Y,H=g("Folder"),M=g("Paperclip"),R=g("EditPen"),A=Z,J=ee;return D(),E(U,null,[t(z,{width:"80vw",modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=n=>h.value=n),title:"Editor","align-center":"align-center","close-on-click-modal":!1,onClose:e[3]||(e[3]=n=>r.value={authorUuid:$(p).$userInfo.value.id,topic:"",content:"",intro:"",assort:"",author:$(p).$userInfo.value.username,createDate:"",changeDate:"",tag:"",like:0})},{footer:o(()=>[i("span",re,[t(q,{type:"danger",onClick:S},{default:o(()=>[f(" \u5220\u9664 ")]),_:1}),t(q,{type:"primary",onClick:e[1]||(e[1]=()=>{})},{default:o(()=>[f(" \u53D1\u5E03 ")]),_:1})])]),default:o(()=>[t(l,{modelValue:r.value.content,"onUpdate:modelValue":e[0]||(e[0]=n=>r.value.content=n),height:"60vh",onSave:B},null,8,["modelValue"])]),_:1},8,["modelValue"]),t(_,{style:{height:"24px"},justify:"space-between",align:"middle"},{default:o(()=>[t(s,{span:3},{default:o(()=>[i("span",{class:"back",onClick:P}," \u2B05 \u85CF\u5178\u9601 ")]),_:1}),t(s,{span:10,style:{"text-align":"center"}},{default:o(()=>[i("span",ie,d($(p).$userInfo.value.username)+"\u7684\u8349\u7A3F\u7BB1",1)]),_:1}),t(s,{span:3,style:{"text-align":"right"}},{default:o(()=>[i("span",{onClick:P,style:{cursor:"pointer","font-weight":"bolder",color:"#989898","font-size":"larger"}},"\u65BD\u5DE5\u4E2D")]),_:1})]),_:1}),t(N,{id:"divider","border-style":"dashed","content-position":"left"}),(D(!0),E(U,null,le(I.value,n=>(D(),E("div",null,[t(_,{onClick:ge=>O(n.id),style:{cursor:"pointer"}},{default:o(()=>[t(s,{span:24,style:{"margin-bottom":"20px"}},{default:o(()=>[t(A,{class:"articleCard"},{default:o(()=>[t(_,null,{default:o(()=>[t(s,{span:10,class:"articleImgBox"},{default:o(()=>[i("img",{src:G(n.id),class:"articleImg"},null,8,pe)]),_:2},1024),t(s,{span:14,style:{padding:"10px 15px 15px 15px"}},{default:o(()=>[i("h1",de,d(n.topic),1),i("div",ue,[i("span",ce,d(n.intro),1),i("span",fe,[t(_,null,{default:o(()=>[t(s,{span:12},{default:o(()=>[t(v,{style:{top:"2px"}},{default:o(()=>[t(F)]),_:1}),f(" \u4F5C\u8005\uFF1A"+d(n.author),1)]),_:2},1024),t(s,{span:12},{default:o(()=>[t(v,{style:{top:"2px"}},{default:o(()=>[t(H)]),_:1}),f(" \u5206\u7C7B\uFF1A"+d(n.assort),1)]),_:2},1024),t(s,{span:12},{default:o(()=>[t(v,{style:{top:"2px"}},{default:o(()=>[t(M)]),_:1}),f(" \u53D1\u5E03\u4E8E\uFF1A"+d(n.createDate),1)]),_:2},1024),t(s,{span:12},{default:o(()=>[t(v,{style:{top:"2px"}},{default:o(()=>[t(R)]),_:1}),f(" \u4FEE\u6539\u4E8E\uFF1A"+d(n.changeDate),1)]),_:2},1024)]),_:2},1024)])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]))),256)),t(_,{style:{width:"100%"},class:"pagination",align:"middle",justify:"center"},{default:o(()=>[t(J,{style:{transform:"scale(1.2,1.2)"},"hide-on-single-page":!0,"page-size":4,"current-page":x.value,"onUpdate:current-page":e[4]||(e[4]=n=>x.value=n),layout:"prev, pager, next",total:C.value,onCurrentChange:e[5]||(e[5]=n=>b(x.value))},null,8,["current-page","total"])]),_:1})],64)}}},Te=oe(me,[["__scopeId","data-v-e975051e"]]);export{Te as default};