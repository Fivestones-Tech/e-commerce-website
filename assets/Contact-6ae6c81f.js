import{r as l,T as w,j as s,a as d}from"./index-29c6ebea.js";import{D as F}from"./DefaultLayout-d466fc47.js";const m={_origin:"https://api.emailjs.com"},q=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},y=(t,e,a)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class v{constructor(e){this.status=e.status,this.text=e.responseText}}const x=(t,e,a={})=>new Promise((o,i)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:r})=>{const c=new v(r);c.status===200||c.text==="OK"?o(c):i(c)}),n.addEventListener("error",({target:r})=>{i(new v(r))}),n.open("POST",m._origin+t,!0),Object.keys(a).forEach(r=>{n.setRequestHeader(r,a[r])}),n.send(e)}),T=(t,e,a,o)=>{const i=o||m._userID;return y(i,t,e),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:t,template_id:e,template_params:a}),{"Content-type":"application/json"})},C=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},N=(t,e,a,o)=>{const i=o||m._userID,n=C(a);y(i,t,e);const r=new FormData(n);return r.append("lib_version","3.2.0"),r.append("service_id",t),r.append("template_id",e),r.append("user_id",i),x("/api/v1.0/email/send-form",r)},R={init:q,send:T,sendForm:N},P=()=>{const t=l.useRef(null),e=l.useRef(null),a=l.useContext(w),[o,i]=l.useState(""),[n,r]=l.useState(!0),[c,h]=l.useState(!1),[b,g]=l.useState(!0),_=()=>{const u=e.current,p=/^[^\s@]{6,}@[^\s@]+\.[^\s@]+$/;let f=u.value,j=p.test(f);r(j)},E=async u=>{u.preventDefault(),h(!0);const p=t.current;try{if(n)await R.sendForm("srvice_fxvcxyj","template_vggxabq",p,"CC6qrRtlQzRCdePxS"),h(!1),g(!0),i("Message sent Successfully."),u.target.reset();else throw new Error("Your Email is Invalid try using normal Email")}catch(f){h(!1),g(!1),n?n&&i("Theirs is an error sending your mail check your connection"):i(f.message)}},S=()=>s("div",{className:"loadingio-spinner-rolling-vc8zers97pd",children:s("div",{className:"ldio-zlxdtiiq8cb",children:s("div",{})})});return s(F,{children:d("div",{className:"contact-container",style:{color:a.theme==="light"?null:"#FFF"},children:[s("h1",{children:"Contact Us"}),s("h2",{children:"Get in Touch"}),d("form",{ref:t,action:"",className:a.theme==="light"?"contact-form":"contact-form darkmode-contact-form",onSubmit:E,children:[s("input",{type:"text",name:"name",id:"",placeholder:"Your Name",required:!0}),s("input",{ref:e,type:"email",onBlur:_,name:"email",id:"",placeholder:"Your Email",required:!0}),!n&&s("p",{style:{color:"red"},children:"Please enter a valid email address"}),s("input",{type:"text",name:"subject",id:"subject",placeholder:"Subject",required:!0}),s("textarea",{name:"message",id:"",cols:30,rows:10,placeholder:"Message",required:!0}),c?s(S,{}):s("p",{style:{color:b?"rgb(100, 195, 100)":"red"},className:"message",children:o}),s("button",{className:`btn ${a.theme==="light"?"btn-outline-dark":"btn-outline-light"}`,type:"submit",children:"Send Message"})]}),d("div",{className:"contact-information",style:{color:a.theme==="light"?null:"#FFF"},children:[s("h2",{children:"Contact Informations"}),d("ol",{children:[d("li",{children:[" ",s("span",{children:"Phone: "}),"+2349083387814"]}),d("li",{children:[" ",s("span",{children:"Email: "}),"Folaweogunnaike@gmail.com"]})]})]})]})})};export{P as default};
