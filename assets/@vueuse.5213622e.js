import{g as Q,d as R,s as x,w as L,r as W,u as B,e as k,f as M,n as V,h as y,i as D}from"./@vue.0557ba9e.js";var z=Object.defineProperty,U=Object.defineProperties,G=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&S(e,r,t[r]);if(T)for(var r of T(t))q.call(t,r)&&S(e,r,t[r]);return e},J=(e,t)=>U(e,G(t));function de(e,t){var r;const n=x();return L(()=>{n.value=e()},J(K({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),W(n)}var $;const b=typeof window<"u",ve=e=>typeof e=="boolean",me=e=>typeof e=="number",X=e=>typeof e=="string",h=()=>{};b&&(($=window==null?void 0:window.navigator)==null?void 0:$.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function I(e){return typeof e=="function"?e():B(e)}function Y(e,t){function r(...n){return new Promise((s,a)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(s).catch(a)})}return r}function Z(e,t=!0,r=!0,n=!1){let s=0,a,u=!0,l=h,f;const p=()=>{a&&(clearTimeout(a),a=void 0,l(),l=h)};return v=>{const m=I(e),o=Date.now()-s,i=()=>f=v();if(p(),m<=0)return s=Date.now(),i();if(o>m&&(r||!u))s=Date.now(),i();else if(t)return new Promise((d,F)=>{l=n?F:d,a=setTimeout(()=>{s=Date.now(),u=!0,d(i()),p()},m-o)});return!r&&!a&&(a=setTimeout(()=>u=!0,m)),u=!1,f}}function ee(e){return e}function E(e){return Q()?(R(e),!0):!1}function Oe(e,t=200,r=!1,n=!0,s=!1){return Y(Z(t,r,n,s),e)}function te(e,t=!0){k()?M(e):t?e():V(e)}function _e(e,t,r={}){const{immediate:n=!0}=r,s=y(!1);let a=null;function u(){a&&(clearTimeout(a),a=null)}function l(){s.value=!1,u()}function f(...p){u(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=null,e(...p)},I(t))}return n&&(s.value=!0,b&&f()),E(l),{isPending:s,start:f,stop:l}}function _(e){var t;const r=I(e);return(t=r==null?void 0:r.$el)!=null?t:r}const w=b?window:void 0,re=b?window.document:void 0;function O(...e){let t,r,n,s;if(X(e[0])||Array.isArray(e[0])?([r,n,s]=e,t=w):[t,r,n,s]=e,!t)return h;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const a=[],u=()=>{a.forEach(c=>c()),a.length=0},l=(c,v,m)=>(c.addEventListener(v,m,s),()=>c.removeEventListener(v,m,s)),f=D(()=>_(t),c=>{u(),c&&a.push(...r.flatMap(v=>n.map(m=>l(c,v,m))))},{immediate:!0,flush:"post"}),p=()=>{f(),u()};return E(p),p}function ye(e,t,r={}){const{window:n=w,ignore:s=[],capture:a=!0,detectIframe:u=!1}=r;if(!n)return;let l=!0,f;const p=o=>s.some(i=>{if(typeof i=="string")return Array.from(n.document.querySelectorAll(i)).some(d=>d===o.target||o.composedPath().includes(d));{const d=_(i);return d&&(o.target===d||o.composedPath().includes(d))}}),c=o=>{n.clearTimeout(f);const i=_(e);if(!(!i||i===o.target||o.composedPath().includes(i))){if(o.detail===0&&(l=!p(o)),!l){l=!0;return}t(o)}},v=[O(n,"click",c,{passive:!0,capture:a}),O(n,"pointerdown",o=>{const i=_(e);i&&(l=!o.composedPath().includes(i)&&!p(o))},{passive:!0}),O(n,"pointerup",o=>{if(o.button===0){const i=o.composedPath();o.composedPath=()=>i,f=n.setTimeout(()=>c(o),50)}},{passive:!0}),u&&O(n,"blur",o=>{var i;const d=_(e);((i=n.document.activeElement)==null?void 0:i.tagName)==="IFRAME"&&!(d!=null&&d.contains(n.document.activeElement))&&t(o)})].filter(Boolean);return()=>v.forEach(o=>o())}function ne(e,t=!1){const r=y(),n=()=>r.value=Boolean(e());return n(),te(n,t),r}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g="__vueuse_ssr_handlers__";P[g]=P[g]||{};P[g];function be({document:e=re}={}){if(!e)return y("visible");const t=y(e.visibilityState);return O(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var j=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,ae=(e,t)=>{var r={};for(var n in e)se.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&j)for(var n of j(e))t.indexOf(n)<0&&oe.call(e,n)&&(r[n]=e[n]);return r};function we(e,t,r={}){const n=r,{window:s=w}=n,a=ae(n,["window"]);let u;const l=ne(()=>s&&"ResizeObserver"in s),f=()=>{u&&(u.disconnect(),u=void 0)},p=D(()=>_(e),v=>{f(),l.value&&s&&v&&(u=new ResizeObserver(t),u.observe(v,a))},{immediate:!0,flush:"post"}),c=()=>{f(),p()};return E(c),{isSupported:l,stop:c}}var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ie=Object.defineProperty,C=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))ue.call(t,r)&&N(e,r,t[r]);if(C)for(var r of C(t))le.call(t,r)&&N(e,r,t[r]);return e};const fe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ce({linear:ee},fe);function he({window:e=w}={}){if(!e)return y(!1);const t=y(e.document.hasFocus());return O(e,"blur",()=>{t.value=!1}),O(e,"focus",()=>{t.value=!0}),t}export{b as a,ve as b,O as c,_ as d,Oe as e,_e as f,be as g,he as h,me as i,de as j,ye as o,E as t,we as u};