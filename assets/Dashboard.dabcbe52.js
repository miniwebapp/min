var f=Object.defineProperty,C=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var u=(t,e,a)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,l=(t,e)=>{for(var a in e||(e={}))v.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))D.call(e,a)&&u(t,a,e[a]);return t},c=(t,e)=>C(t,y(e));import{r as h,D as x,j as r,f as s,k as A,F as W}from"./index.5007d03a.js";import{T as o,D as d,b as i,d as R,C as k}from"./CourseDataBase.80129286.js";import{R as S}from"./ResponsiveAppBar.fc319e29.js";import{C as B,c as j,d as z,a as q,b as O,G as m}from"./Grid.d2e512ef.js";import{A as T}from"./ShoppingCart.098a85c9.js";import{C as E,R as F}from"./Rating.86338e74.js";import{S as G}from"./TableRow.ae116217.js";import"./listItemTextClasses.fcd525e2.js";import"./utils.61c74489.js";import"./appendOwnerState.8ac2ae0c.js";import"./ownerDocument.d64bc4d4.js";const I=t=>{const e=t.course,{appData:a,editAppData:n}=h.exports.useContext(x);return r(B,{raised:!0,sx:{m:1},children:s(j,{onClick:()=>{n(c(l({},a),{page:"course",qinfo:c(l({},a.qinfo),{id:e.id})}))},children:[r(z,{component:"img",image:`./courses/${e.id}/large.jpg`,sx:{display:{xs:"none",sm:"block"}},loading:"lazy",alt:""}),r(q,{avatar:r(T,{variant:"square",src:""}),title:s(o,{noWrap:!0,color:"primary",children:[" ",e.title," "]}),subheader:e.about,sx:{display:{xs:"flex",sm:"none"}}}),r(d,{sx:{display:{xs:"none",sm:"block"}}}),s(O,{sx:{textAlign:"center",display:{xs:"none",sm:"block"}},children:[r(o,{noWrap:!0,color:"primary",children:e.title}),r(o,{variant:"subtitle2",noWrap:!0,color:"text.secondary",children:e.about})]}),r(d,{}),s(o,{variant:"subtitle2",noWrap:!0,m:1,fontWeight:"bold",textAlign:"center",color:"text.secondary",children:[e.tests.length," Tests | ",e.tests.reduce((g,b)=>g+b[1].length,0)," Questions"]}),r(d,{}),r(o,{variant:"subtitle2",noWrap:!0,p:1,fontWeight:"bold",textAlign:"center",color:"primary",display:"flex",justifyContent:"space-around",alignItems:"center",children:e.bestSeller?r(E,{variant:"filled",label:"Bestseller",color:"success",size:"small"}):s(i,{sx:{display:"flex",alignItems:"center"},children:[s(i,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:["(",e.rating,")"]}),r(F,{value:e.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})})]})})};var M=I;function Z(){const{appData:t,editAppData:e}=h.exports.useContext(x),a=A();return s(W,{children:[r(S,{}),s(i,{p:2,children:[r(o,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Dashboard"}),r(i,{sx:{bgcolor:"#f543"},borderRadius:1,p:1,children:t.uinfo.enrolled.length===0?s(G,{direction:"column",children:[r(o,{variant:"h4",p:4,fontWeight:"bold",color:"text.secondary",align:"center",children:"No Courses Registered"}),r(R,{variant:"contained",onClick:()=>{a("/search")},children:"ADD SOME COURSES"})]}):r(m,{container:!0,spacing:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:t.uinfo.enrolled.map(n=>r(m,{item:!0,xs:1,children:r(M,{course:k[n]})},n))})})]})]})}export{Z as default};
