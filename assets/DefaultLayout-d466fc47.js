import{r as i,T as h,j as e,F as m,a as t,L as r,u as g,c as b,N as c}from"./index-29c6ebea.js";const u=()=>{const a=i.useContext(h);return e(m,{children:e("div",{className:"mode",children:e("button",{onClick:()=>{const s=a.theme==="light"?"dark":"light";a.setTheme(s),localStorage.setItem("theme",s)},children:e("i",{className:a.theme==="light"?"bx bxs-moon":"bx bxs-sun text-light"})})})})};const v=()=>{const a=i.useContext(h);return e(m,{children:t("footer",{className:a.theme==="light"?"footer":"footer footer-darkmode",children:[e("div",{className:"first",children:"SHOPit E-COMMERCE-WEBSITE All right reserved"}),t("div",{className:"icons",children:[t("li",{children:[" ",e(r,{target:"_blank",children:e("i",{className:"fa-brands fa-github"})})," "]}),t("li",{children:[" ",e(r,{target:"_blank",children:e("i",{className:"fa-brands fa-twitter"})})," "]}),t("li",{children:[" ",e(r,{target:"_blank",children:e("i",{className:"fa-brands fa-linkedin"})})," "]})]})]})})};const N=()=>{const a=localStorage.getItem("token"),o=g(),s=b(l=>l.cart.value),n=i.useContext(h),d=()=>{localStorage.removeItem("token"),o("/")};return e(m,{children:e("nav",{className:`navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm ${n.theme==="light"?null:"navbar-darkmode"}`,children:t("div",{className:"container-fluid",children:[e(r,{to:"/",className:"navbar-brand",children:"SHOPit"}),t("button",{className:`navbar-toggler ${n.theme==="light"?null:"bg-light"}`,type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[e("span",{className:"navbar-toggler-icon"}),s.length===0?null:e("span",{className:"show-cart",children:s.length})]}),t("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[t("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0",children:[e("li",{className:"nav-item",children:e(c,{exact:"true",className:"nav-link","aria-current":"page",to:"/",style:({isActive:l})=>({transform:l?"translateY(-5px)":null,color:n.theme==="light"?"black":"white"}),children:"Home"})}),e("li",{className:"nav-item",children:e(c,{to:"/products",className:"nav-link",style:({isActive:l})=>({transform:l?"translateY(-5px)":null,color:n.theme==="light"?"black":"white"}),children:"Products"})}),e("li",{className:"nav-item",children:e(c,{to:"/about",className:"nav-link",style:({isActive:l})=>({transform:l?"translateY(-5px)":null,color:n.theme==="light"?"black":"white"}),children:"About"})}),e("li",{className:"nav-item",children:e(c,{to:"/contact",className:"nav-link",style:({isActive:l})=>({transform:l?"translateY(-5px)":null,color:n.theme==="light"?"black":"white"}),children:"Contacts"})})]}),e("div",{className:"buttons",children:t("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[e("li",{className:"nav-item",children:a?e("button",{onClick:d,className:`btn ${n.theme==="light"?"btn-outline-dark":"btn-outline-light"}`,children:"Log Out"}):t(r,{to:"/login",className:`btn ${n.theme==="light"?"btn-outline-dark":"btn-outline-light"}`,children:["Login ",e("i",{className:"fa-solid fa-right-to-bracket"})]})}),e("li",{className:"nav-item",children:t(r,{to:"/cart",className:"btn btn-outline-dark cart-li",children:[e("i",{className:"fa-solid fa-cart-shopping"}),s.length===0?null:e("span",{children:s.length})]})})]})})]})]})})})},p=({children:a})=>{const o=i.useContext(h);return t(m,{children:[e(N,{}),e("div",{style:{backgroundColor:o.theme==="light"?null:"#000000"},children:a}),e(u,{}),e(v,{})]})};export{p as D};