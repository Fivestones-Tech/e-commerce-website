import{R as k,r as N,T as At,j as f,F as rt,a as w,L as Dt}from"./index-29c6ebea.js";import{a as Rt,S as I}from"./index-ec3bfb26.js";const L=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,e,n,i="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:i,prefix:l,name:c};return e&&!D(a)?null:a}const r=o[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return e&&!D(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return e&&!D(c,n)?null:c}return null},D=(t,e)=>t?!!((t.provider===""||t.provider.match(L))&&(e&&t.prefix===""||t.prefix.match(L))&&t.name.match(L)):!1,yt=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...yt,...B}),H=Object.freeze({...Y,body:"",hidden:!1});function Bt(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function st(t,e){const n=Bt(t,e);for(const i in H)i in B?i in t&&!(i in n)&&(n[i]=B[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function $t(t,e){const n=t.icons,i=t.aliases||Object.create(null),o=Object.create(null);function r(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=i[s]&&i[s].parent,l=c&&r(c);l&&(o[s]=[c].concat(l))}return o[s]}return(e||Object.keys(n).concat(Object.keys(i))).forEach(r),o}function Ut(t,e,n){const i=t.icons,o=t.aliases||Object.create(null);let r={};function s(c){r=st(i[c]||o[c],r)}return s(e),n.forEach(s),st(t,r)}function wt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const i=$t(t);for(const o in i){const r=i[o];r&&(e(o,Ut(t,o,r)),n.push(o))}return n}const zt={provider:"",aliases:{},not_found:{},...yt};function Q(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function xt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Q(t,zt))return null;const n=e.icons;for(const o in n){const r=n[o];if(!o.match(L)||typeof r.body!="string"||!Q(r,H))return null}const i=e.aliases||Object.create(null);for(const o in i){const r=i[o],s=r.parent;if(!o.match(L)||typeof s!="string"||!n[s]&&!i[s]||!Q(r,H))return null}return e}const ct=Object.create(null);function Qt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function P(t,e){const n=ct[t]||(ct[t]=Object.create(null));return n[e]||(n[e]=Qt(t,e))}function Z(t,e){return xt(e)?wt(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function qt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let F=!1;function St(t){return typeof t=="boolean"&&(F=t),F}function Ht(t){const e=typeof t=="string"?$(t,!0,F):t;if(e){const n=P(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Vt(t,e){const n=$(t,!0,F);if(!n)return!1;const i=P(n.provider,n.prefix);return qt(i,n.name,e)}function Kt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),F&&!e&&!t.prefix){let o=!1;return xt(t)&&(t.prefix="",wt(t,(r,s)=>{s&&Vt(r,s)&&(o=!0)})),o}const n=t.prefix;if(!D({provider:e,prefix:n,name:"a"}))return!1;const i=P(e,n);return!!Z(i,t)}const vt=Object.freeze({width:null,height:null}),It=Object.freeze({...vt,...B}),Wt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Gt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function lt(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(Wt);if(i===null||!i.length)return t;const o=[];let r=i.shift(),s=Gt.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*e*n)/n)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}const Jt=t=>t==="unset"||t==="undefined"||t==="none";function Xt(t,e){const n={...Y,...t},i={...It,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(b=>{const y=[],j=b.hFlip,x=b.vFlip;let d=b.rotate;j?x?d+=2:(y.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),y.push("scale(-1 1)"),o.top=o.left=0):x&&(y.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),y.push("scale(1 -1)"),o.top=o.left=0);let S;switch(d<0&&(d-=Math.floor(d/4)*4),d=d%4,d){case 1:S=o.height/2+o.top,y.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:y.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:S=o.width/2+o.left,y.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}d%2===1&&(o.left!==o.top&&(S=o.left,o.left=o.top,o.top=S),o.width!==o.height&&(S=o.width,o.width=o.height,o.height=S)),y.length&&(r='<g transform="'+y.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=o.width,a=o.height;let u,p;s===null?(p=c===null?"1em":c==="auto"?a:c,u=lt(p,l/a)):(u=s==="auto"?l:s,p=c===null?lt(u,a/l):c==="auto"?a:c);const h={},m=(b,y)=>{Jt(y)||(h[b]=y.toString())};return m("width",u),m("height",p),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:h,body:r}}const Yt=/\sid="(\S+)"/g,Zt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let te=0;function ee(t,e=Zt){const n=[];let i;for(;i=Yt.exec(t);)n.push(i[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const s=typeof e=="function"?e(r):e+(te++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const V=Object.create(null);function ne(t,e){V[t]=e}function K(t){return V[t]||V[""]}function tt(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const et=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],R=[];for(;T.length>0;)T.length===1||Math.random()>.5?R.push(T.shift()):R.push(T.pop());et[""]=tt({resources:["https://api.iconify.design"].concat(R)});function oe(t,e){const n=tt(e);return n===null?!1:(et[t]=n,!0)}function nt(t){return et[t]}const ie=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let at=ie();function re(t,e){const n=nt(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const r=e+".json?icons=";i=n.maxURL-o-n.path.length-r.length}return i}function se(t){return t===404}const ce=(t,e,n)=>{const i=[],o=re(t,e),r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(i.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function le(t){if(typeof t=="string"){const e=nt(t);if(e)return e.path}return"/"}const ae=(t,e,n)=>{if(!at){n("abort",424);return}let i=le(e.provider);switch(e.type){case"icons":{const r=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});i+=r+".json?"+l.toString();break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;at(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(se(s)?"abort":"next",s)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},ue={prepare:ce,send:ae};function fe(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,c=o.name,l=n[r]||(n[r]=Object.create(null)),a=l[s]||(l[s]=P(r,s));let u;c in a.icons?u=e.loaded:s===""||a.missing.has(c)?u=e.missing:u=e.pending;const p={provider:r,prefix:s,name:c};u.push(p)}),e}function kt(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(o=>o.id!==e))})}function de(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,o=t.prefix;e.forEach(r=>{const s=r.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:i,prefix:o,name:a});else if(t.missing.has(a))s.missing.push({provider:i,prefix:o,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||kt([t],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let he=0;function pe(t,e,n){const i=he++,o=kt.bind(null,n,i);if(!e.pending.length)return o;const r={id:i,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),o}function ge(t,e=!0,n=!1){const i=[];return t.forEach(o=>{const r=typeof o=="string"?$(o,e,n):o;r&&i.push(r)}),i}var me={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function be(t,e,n,i){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let g=t.resources.slice(0);for(s=[];g.length>1;){const v=Math.floor(Math.random()*g.length);s.push(g[v]),g=g.slice(0,v).concat(g.slice(v+1))}s=s.concat(g)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,u,p=null,h=[],m=[];typeof i=="function"&&m.push(i);function b(){p&&(clearTimeout(p),p=null)}function y(){l==="pending"&&(l="aborted"),b(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function j(g,v){v&&(m=[]),typeof g=="function"&&m.push(g)}function x(){return{startTime:c,payload:e,status:l,queriesSent:a,queriesPending:h.length,subscribe:j,abort:y}}function d(){l="failed",m.forEach(g=>{g(void 0,u)})}function S(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function Ot(g,v,E){const O=v!=="success";switch(h=h.filter(C=>C!==g),l){case"pending":break;case"failed":if(O||!t.dataAfterTimeout)return;break;default:return}if(v==="abort"){u=E,d();return}if(O){u=E,h.length||(s.length?z():d());return}if(b(),S(),!t.random){const C=t.resources.indexOf(g.resource);C!==-1&&C!==t.index&&(t.index=C)}l="completed",m.forEach(C=>{C(E)})}function z(){if(l!=="pending")return;b();const g=s.shift();if(g===void 0){if(h.length){p=setTimeout(()=>{b(),l==="pending"&&(S(),d())},t.timeout);return}d();return}const v={status:"pending",resource:g,callback:(E,O)=>{Ot(v,E,O)}};h.push(v),a++,p=setTimeout(z,t.rotate),n(g,e,v.callback)}return setTimeout(z),x}function Ct(t){const e={...me,...t};let n=[];function i(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=be(e,c,l,(p,h)=>{i(),a&&a(p,h)});return n.push(u),u}function r(c){return n.find(l=>c(l))||null}return{query:o,find:r,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:i}}function ut(){}const q=Object.create(null);function ye(t){if(!q[t]){const e=nt(t);if(!e)return;const n=Ct(e),i={config:e,redundancy:n};q[t]=i}return q[t]}function we(t,e,n){let i,o;if(typeof t=="string"){const r=K(t);if(!r)return n(void 0,424),ut;o=r.send;const s=ye(t);s&&(i=s.redundancy)}else{const r=tt(t);if(r){i=Ct(r);const s=t.resources?t.resources[0]:"",c=K(s);c&&(o=c.send)}}return!i||!o?(n(void 0,424),ut):i.query(e,o,n)().abort}const ft="iconify2",M="iconify",Pt=M+"-count",dt=M+"-version",Nt=36e5,xe=168;function W(t,e){try{return t.getItem(e)}catch{}}function ot(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ht(t,e){try{t.removeItem(e)}catch{}}function G(t,e){return ot(t,Pt,e.toString())}function J(t){return parseInt(W(t,Pt))||0}const U={local:!0,session:!0},jt={local:new Set,session:new Set};let it=!1;function Se(t){it=t}let A=typeof window>"u"?{}:window;function Et(t){const e=t+"Storage";try{if(A&&A[e]&&typeof A[e].length=="number")return A[e]}catch{}U[t]=!1}function Tt(t,e){const n=Et(t);if(!n)return;const i=W(n,dt);if(i!==ft){if(i){const c=J(n);for(let l=0;l<c;l++)ht(n,M+l.toString())}ot(n,dt,ft),G(n,0);return}const o=Math.floor(Date.now()/Nt)-xe,r=c=>{const l=M+c.toString(),a=W(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}ht(n,l)}};let s=J(n);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,G(n,s)):jt[t].add(c))}function _t(){if(!it){Se(!0);for(const t in U)Tt(t,e=>{const n=e.data,i=e.provider,o=n.prefix,r=P(i,o);if(!Z(r,n).length)return!1;const s=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function ve(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const i in U)Tt(i,o=>{const r=o.data;return o.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e});return!0}function Ie(t,e){it||_t();function n(i){let o;if(!U[i]||!(o=Et(i)))return;const r=jt[i];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=J(o),!G(o,s+1))return;const c={cached:Math.floor(Date.now()/Nt),provider:t.provider,data:e};return ot(o,M+s.toString(),JSON.stringify(c))}e.lastModified&&!ve(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function pt(){}function ke(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,de(t)}))}function Ce(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,o=t.iconsToLoad;delete t.iconsToLoad;let r;if(!o||!(r=K(n)))return;r.prepare(n,i,o).forEach(c=>{we(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=Z(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(p=>{u.delete(p)}),Ie(t,l)}catch(a){console.error(a)}ke(t)})})}))}const Pe=(t,e)=>{const n=ge(t,!0,St()),i=fe(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,pt)}),()=>{l=!1}}const o=Object.create(null),r=[];let s,c;return i.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,r.push(P(a,u));const p=o[a]||(o[a]=Object.create(null));p[u]||(p[u]=[])}),i.pending.forEach(l=>{const{provider:a,prefix:u,name:p}=l,h=P(a,u),m=h.pendingIcons||(h.pendingIcons=new Set);m.has(p)||(m.add(p),o[a][u].push(p))}),r.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&Ce(l,o[a][u])}),e?pe(e,i,r):pt};function Ne(t,e){const n={...t};for(const i in e){const o=e[i],r=typeof o;i in vt?(o===null||o&&(r==="string"||r==="number"))&&(n[i]=o):r===typeof n[i]&&(n[i]=i==="rotate"?o%4:o)}return n}const je=/[\s,]+/;function Ee(t,e){e.split(je).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Te(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:i(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return e}function _e(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Le(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Fe(t){return'url("data:image/svg+xml,'+Le(t)+'")'}const Lt={...It,inline:!1},Me={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Oe={display:"inline-block"},X={backgroundColor:"currentColor"},Ft={backgroundColor:"transparent"},gt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},mt={webkitMask:X,mask:X,background:Ft};for(const t in mt){const e=mt[t];for(const n in gt)e[t+n]=gt[n]}const Ae={...Lt,inline:!0};function bt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const De=(t,e,n,i)=>{const o=n?Ae:Lt,r=Ne(o,e),s=e.mode||"svg",c={},l=e.style||{},a={...s==="svg"?Me:{},ref:i};for(let x in e){const d=e[x];if(d!==void 0)switch(x){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":r[x]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&Ee(r,d);break;case"color":c.color=d;break;case"rotate":typeof d=="string"?r[x]=Te(d):typeof d=="number"&&(r[x]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete a["aria-hidden"];break;default:o[x]===void 0&&(a[x]=d)}}const u=Xt(t,r),p=u.attributes;if(r.inline&&(c.verticalAlign="-0.125em"),s==="svg"){a.style={...c,...l},Object.assign(a,p);let x=0,d=e.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:ee(u.body,d?()=>d+"ID"+x++:"iconifyReact")},k.createElement("svg",a)}const{body:h,width:m,height:b}=t,y=s==="mask"||(s==="bg"?!1:h.indexOf("currentColor")!==-1),j=_e(h,{...p,width:m+"",height:b+""});return a.style={...c,"--svg":Fe(j),width:bt(p.width),height:bt(p.height),...Oe,...y?X:Ft,...l},k.createElement("span",a)};St(!0);ne("",ue);if(typeof document<"u"&&typeof window<"u"){_t();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Kt(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;oe(n,o)||console.error(i)}catch{console.error(i)}}}}class Mt extends k.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const n=this.state,i=this.props.icon;if(typeof i=="object"&&i!==null&&typeof i.body=="string"){this._icon="",this._abortLoading(),(e||n.icon===null)&&this._setData({data:i});return}let o;if(typeof i!="string"||(o=$(i,!1,!0))===null){this._abortLoading(),this._setData(null);return}const r=Ht(o);if(!r){(!this._loading||this._loading.name!==i)&&(this._abortLoading(),this._icon="",this._setData(null),r!==null&&(this._loading={name:i,abort:Pe([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==i||n.icon===null){this._abortLoading(),this._icon=i;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:r,classes:s}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,n=this.state.icon;if(n===null)return e.children?e.children:k.createElement("span",{});let i=e;return n.classes&&(i={...e,className:(typeof e.className=="string"?e.className+" ":"")+n.classes.join(" ")}),De({...Y,...n.data},i,e._inline,e._ref)}}const _=k.forwardRef(function(e,n){const i={...e,_ref:n,_inline:!1};return k.createElement(Mt,i)});k.forwardRef(function(e,n){const i={...e,_ref:n,_inline:!0};return k.createElement(Mt,i)});const $e=()=>{const[t,e]=N.useState([]),[n,i]=N.useState([]),[o,r]=N.useState(!1),[s,c]=N.useState(null),l=N.useContext(At);N.useEffect(()=>{(async()=>{r(!0);try{const m=await Rt.get("https://fakestoreapi.com/products");if(m.status!==200)throw Error("Their's a problem fetching products");const b=m.data;e(b),i(b)}catch(m){c(m.message),m&&r(!1)}r(!1)})()},[]);const a=()=>w("div",{className:"products-loading",children:[f("div",{className:"title",children:f("h1",{children:f(I,{height:50,width:300})})}),w("div",{className:"loading-btns",children:[f("button",{children:f(I,{className:"btn",height:40,width:50})}),f("button",{children:f(I,{className:"btn",height:40,width:130})}),f("button",{children:f(I,{className:"btn",height:40,width:160})}),f("button",{children:f(I,{className:"btn",height:40,width:100})}),f("button",{children:f(I,{className:"btn",height:40,width:90})})]}),w("div",{className:"product-loading",children:[f("div",{className:"loading",children:f(I,{height:350,width:"100%"})}),f("div",{className:"loading",children:f(I,{height:350,width:"100%"})}),f("div",{className:"loading",children:f(I,{height:350,width:"100%"})}),f("div",{className:"loading",children:f(I,{height:350,width:"100%"})})]})]}),u=h=>{const m=t.filter(b=>b.category===h);i(m)};return f(rt,{children:f("div",{className:"products-container",children:o?f(a,{}):f(()=>f(rt,{children:s?w("h1",{className:"error",children:[" ",s," Can't Fetch Products"]}):w("div",{className:l.theme==="light"?"product-container":"product-container product-darkmode",children:[f("h1",{children:" Latest Products "}),w("div",{className:"filter-buttons",children:[w("button",{className:l.theme==="light"?"btn btn-outline-dark":"btn btn-outline-light",onClick:()=>i(t),children:[" ",f("span",{children:"All"})," ",f("span",{children:f(_,{icon:"solar:global-outline"})})," "]}),w("button",{className:l.theme==="light"?"btn btn-outline-dark":"btn btn-outline-light",onClick:()=>u("men's clothing"),children:[" ",f("span",{children:"Men's Products"}),f("span",{children:f(_,{icon:"icons8:user-male"})})," "]}),w("button",{className:l.theme==="light"?"btn btn-outline-dark":"btn btn-outline-light",onClick:()=>u("women's clothing"),children:[" ",f("span",{children:"Women's Products"}),f("span",{children:f(_,{icon:"icons8:user-female"})})," "]}),w("button",{className:l.theme==="light"?"btn btn-outline-dark":"btn btn-outline-light",onClick:()=>u("electronics"),children:[" ",f("span",{children:"Electronics"})," ",f("span",{children:f(_,{icon:"streamline:computer-screen-1-screen-device-electronics-monitor-diplay-computer"})})," "]}),w("button",{className:l.theme==="light"?"btn btn-outline-dark":"btn btn-outline-light",onClick:()=>u("jewelery"),children:[" ",f("span",{children:"Jewelries"})," ",f("span",{children:f(_,{icon:"streamline:shopping-jewelry-diamond-2-diamond-money-payment-finance-wealth"})})," "]})]}),f("div",{className:"main_products-container",children:n.map(h=>w("div",{className:"main-product",children:[f("div",{className:"products-img",children:f("img",{src:h.image,alt:h.title})}),w("div",{className:"details",children:[w("h5",{className:"products-title",children:[h.title.substring(0,12),"..."]}),w("p",{className:"products-price",children:["$ ",h.price]})]}),f(Dt,{to:`/products/${h.id}`,className:l.theme==="light"?"btn btn-outline-dark":"btn btn-outline-light",children:"Buy Now"})]},h.id))})]})}),{})})})};export{$e as P};