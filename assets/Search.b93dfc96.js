import{r as l,D as g,k as x,f as t,F as m,j as e}from"./index.465e1347.js";import{A as C,g as B,I as n,b as p,d as k,C as d}from"./CourseDataBase.1b1e32e1.js";import{P as h}from"./ProductCard.f4c1446c.js";import{A as b}from"./ArrowBack.7c6460e6.js";import{H as I,S,B as v,a as w}from"./ShoppingCart.1472a63b.js";import{e as y}from"./InputBase.35b1f951.js";import{G as a}from"./Grid.744f6d41.js";import"./_commonjsHelpers.294d03c4.js";import"./Rating.13f6c281.js";import"./appendOwnerState.c28deb05.js";import"./ownerDocument.d64bc4d4.js";function N(){const{appData:u,editAppData:A}=l.exports.useContext(g),o=x(),[s,f]=l.exports.useState(""),c=r=>{f(r.target.value.toLowerCase())};return t(m,{children:[e(C,{position:"sticky",children:t(B,{children:[e(n,{size:"large",edge:"start",color:"inherit",onClick:()=>o(-1),children:e(b,{})}),e(n,{size:"large",edge:"start",color:"inherit",onClick:()=>o("/home"),children:e(I,{})}),t(p,{sx:{position:"relative",borderRadius:1.5,width:"100%",backgroundColor:"#ffffff26","&:hover":{backgroundColor:"#ffffff40"},mx:{sm:5,lg:20}},children:[e(p,{sx:{pl:2,height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e(S,{})}),e(y,{autoFocus:!0,sx:{color:"inherit","& .MuiInputBase-input":{pl:6,pr:1,py:1,width:"100%"},width:"100%"},value:s,placeholder:"Search\u2026",onChange:c})]}),e(n,{color:"inherit",sx:{ml:1},onClick:()=>{o("/cart")},children:e(v,{badgeContent:u.uinfo.cartItems.length,color:"secondary",children:e(w,{})})})]})}),s==""?t(m,{children:[["UGC","CSIR"].map(r=>e(k,{variant:"outlined",value:r,onClick:c,sx:{m:1,mr:0},children:r},r)),e(a,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:d.map((r,i)=>e(a,{item:!0,xs:1,children:e(h,{course:r})},i))})]}):e(a,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:d.filter(r=>(r.title+r.about+r.category).toLowerCase().includes(s)).map((r,i)=>e(a,{item:!0,xs:1,children:e(h,{course:r})},i))})]})}export{N as default};
