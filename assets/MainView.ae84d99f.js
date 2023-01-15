import{o as z,e as M,h as q,j as A,i as H,p as R}from"./element-plus.fb666207.js";import{u as S}from"./vue-router.69f890f6.js";import{_ as F,r as b}from"./index.1dd983cf.js";import{d as h,G,ac as c,o as w,c as x,V as e,T as t,Q as k,ae as N,a as d,X as i,a5 as u,a$ as O,a_ as U}from"./@vue.7d1f6ddd.js";import"./@vueuse.25c52eed.js";import"./@element-plus.b03326dd.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./lodash-es.b61273cf.js";import"./js-md5.3b4e41e9.js";import"./@kangc.35373149.js";import"./vue.5238b06c.js";import"./highlight.js.7457627b.js";import"./codemirror.b14f8d38.js";import"./sakana-widget.756df383.js";const L=_=>(O("data-v-650d2ca5"),_=_(),U(),_),Q=L(()=>d("span",{style:{"font-weight":"bolder",color:"#666666","font-size":"larger","margin-left":"4.5px"}},"\u601D\u91CFDAO\u4E0A\u7684\u85CF\u5178\u9601",-1)),X=["src"],J={style:{top:"0",color:"#666666","font-weight":"bolder","font-size":"24px","word-break":"break-all",overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"1","-webkit-box-orient":"vertical",margin:"0 0 10px","word-wrap":"break-word"}},K={style:{height:"150px",width:"auto"}},W={style:{color:"#777777",width:"99%",display:"-webkit-box",padding:"0px 0px 0px 5px","white-space":"pre-wrap","word-break":"break-all","word-wrap":"break-word",overflow:"hidden","text-overflow":"ellipsis","-webkit-line-clamp":"4","-webkit-box-orient":"vertical"}},Y={style:{color:"#777777","font-size":"small",bottom:"10px",position:"absolute",width:"55%"}},Z={__name:"MainView",setup(_){const m=S(),y=h(""),v=h(""),f=h(parseInt(m.params.page||1));let E="https://api.ixiaowai.cn/gqapi/gqapi.php";function g(n){const s="http://astralcyber.ml:3000",r=new Headers;r.append("Content-Type","application/json");let o={method:"GET",headers:r,redirect:"follow"};fetch(`${s}/article/?_page=${n}&_limit=4`,o).then(l=>l.json()).then(l=>{v.value=l,n!==1?b.push({name:"Page",params:{page:n}}):b.push({name:"Main"})})}function C(){const n="http://astralcyber.ml:3000",s=new Headers;s.append("Content-Type","application/json");let r={method:"GET",headers:s,redirect:"follow"};fetch(`${n}/article/`,r).then(o=>o.json()).then(o=>{y.value=o.length})}G(()=>{typeof m.params.page<"u"?g(m.params.page):g(1),C()});function I(n){return E+"?"+n+")"}return(n,s)=>{const r=c("Reading"),o=z,l=M,V=q,p=A,$=c("User"),j=c("Folder"),B=c("Paperclip"),D=c("EditPen"),P=H,T=R;return w(),x(k,null,[e(l,null,{default:t(()=>[e(o,{size:20,style:{color:"#E57B89","margin-top":"3px"}},{default:t(()=>[e(r)]),_:1}),Q]),_:1}),e(V,{id:"divider","border-style":"dashed","content-position":"left"}),(w(!0),x(k,null,N(v.value,a=>(w(),x("div",null,[e(l,{onClick:ee=>n.$router.push({name:"Article",params:{articleId:a.id}}),style:{cursor:"pointer"}},{default:t(()=>[e(p,{span:24,style:{"margin-bottom":"20px"}},{default:t(()=>[e(P,{class:"articleCard"},{default:t(()=>[e(l,null,{default:t(()=>[e(p,{span:10,class:"articleImgBox"},{default:t(()=>[d("img",{src:I(a.id),class:"articleImg"},null,8,X)]),_:2},1024),e(p,{span:14,style:{padding:"10px 15px 15px 15px"}},{default:t(()=>[d("h1",J,i(a.topic),1),d("div",K,[d("span",W,i(a.intro),1),d("span",Y,[e(l,null,{default:t(()=>[e(p,{span:12},{default:t(()=>[e(o,{style:{top:"2px"}},{default:t(()=>[e($)]),_:1}),u(" \u4F5C\u8005\uFF1A"+i(a.author),1)]),_:2},1024),e(p,{span:12},{default:t(()=>[e(o,{style:{top:"2px"}},{default:t(()=>[e(j)]),_:1}),u(" \u5206\u7C7B\uFF1A"+i(a.assort),1)]),_:2},1024),e(p,{span:12},{default:t(()=>[e(o,{style:{top:"2px"}},{default:t(()=>[e(B)]),_:1}),u(" \u53D1\u5E03\u4E8E\uFF1A"+i(a.createDate),1)]),_:2},1024),e(p,{span:12},{default:t(()=>[e(o,{style:{top:"2px"}},{default:t(()=>[e(D)]),_:1}),u(" \u4FEE\u6539\u4E8E\uFF1A"+i(a.changeDate),1)]),_:2},1024)]),_:2},1024)])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]))),256)),e(l,{style:{width:"100%"},class:"pagination",align:"middle",justify:"center"},{default:t(()=>[e(T,{style:{transform:"scale(1.2,1.2)"},"hide-on-single-page":!0,"page-size":4,"current-page":f.value,"onUpdate:current-page":s[0]||(s[0]=a=>f.value=a),layout:"prev, pager, next",total:y.value,onCurrentChange:s[1]||(s[1]=a=>g(f.value))},null,8,["current-page","total"])]),_:1})],64)}}},ge=F(Z,[["__scopeId","data-v-650d2ca5"]]);export{ge as default};
