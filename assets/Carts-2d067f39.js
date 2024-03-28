import{u as p,c as v,r as n,P as C,T as N,j as e,F as g,a as t,L as k,h as r}from"./index-29c6ebea.js";import{D as f}from"./DefaultLayout-d466fc47.js";import{u as x}from"./useDispatch-8b85e73e.js";const E=()=>{const d=p();let o=localStorage.getItem("token");const c=x(),s=v(a=>a.cart.value),h=n.useContext(C),i=n.useContext(N);let l=0;s.forEach(a=>{l+=a.totalPrice}),n.useEffect(()=>{o||d("/login")},[]);const m=()=>e(g,{children:e("div",{className:"empty-cart-div",children:t("div",{className:i.theme==="light"?"empty-cart":"empty-cart cart-darkmode",children:[e("h1",{children:" Your Cart is empty.. "}),e("h1",{children:" Go back to products page to shop some items.."}),e(k,{className:`btn ${i.theme==="light"?"btn-outline-dark":"btn-outline-light"}`,to:"/products",children:" Go to Products Page "})]})})}),u=()=>t("div",{className:i.theme==="light"?"cart-items":"cart-items cart-darkmode",children:[s.map(a=>t("div",{className:"item",children:[t("div",{className:"img-details",children:[t("div",{className:"item-img",children:[e("img",{src:a.image,alt:a.title}),e("div",{className:"remove",children:e("i",{onClick:()=>c(r.removeOneTime(a.id)),className:"fa-solid fa-xmark fa-beat text-dark"})})]}),t("div",{className:"details",children:[e("h2",{children:a.title}),t("p",{children:["Unit Price: $",a.price]}),t("div",{className:"qty",children:[e("span",{onClick:()=>c(r.addCart(a)),children:e("i",{className:"fa-solid fa-plus"})}),e("span",{children:a.qty}),e("span",{onClick:()=>c(r.removeCart(a.id)),children:e("i",{className:"fa-solid fa-minus"})})]})]})]}),e("div",{className:"total-price",children:t("p",{children:["$",Math.round(a.totalPrice)]})})]},a.id)),t("div",{className:"checkout",children:[e("div",{className:"btn",children:e("button",{onClick:()=>{h.setAmount(l),c(r.clearItem()),d("/checkout")},children:"Proceed to Checkout"})}),t("div",{className:"details",children:[t("p",{children:["Products in Cart:  ",t("span",{children:[s.length," items"]})]}),t("p",{children:["Total: ",t("span",{children:["$",Math.round(l)]})]})]})]})]});return e(f,{children:e("div",{className:"cart",children:s.length===0?e(m,{}):e(u,{})})})};export{E as default};