import{r as s,u as h,j as e,a as l,L as y}from"./index-29c6ebea.js";const N=()=>{const[c,g]=s.useState(""),[u,d]=s.useState(""),[p,a]=s.useState(""),m=h(),n=s.useRef(null),w=localStorage.getItem("Userdata"),o=JSON.parse(w);return e("div",{className:"login-container",children:l("form",{action:"",className:"login-form",onSubmit:t=>{t.preventDefault();const r=n.current;let i={email:c,password:u};if(!o)r.style.color="red",a("User Not Register Try Signing Up");else if(i.email===o.email&&i.password===o.password){let f=!0;localStorage.setItem("token",JSON.stringify(f)),r.style.color="green",a("Login Successful"),setTimeout(()=>{m("/products")},2e3),t.target.reset()}else r.style.color="red",a("Login Not Successful")},children:[e("h3",{children:"Login to account"}),e("p",{className:"access",children:"access to buy products and view your cart"}),e("input",{onChange:t=>g(t.target.value),type:"email",name:"email",id:"email",placeholder:"E-mail Address",required:!0}),e("input",{onChange:t=>d(t.target.value),type:"password",name:"password",id:"password",placeholder:"Password",required:!0}),e("button",{type:"submit",children:"Login"}),e("p",{ref:n,className:"wrong",children:p}),l("p",{className:"already",children:["Yet to Register? ",e(y,{to:"/signup",children:"Register your account"})]})]})})};export{N as default};
