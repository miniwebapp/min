var f=Object.defineProperty,C=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var u=(t,e,a)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,l=(t,e)=>{for(var a in e||(e={}))v.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))D.call(e,a)&&u(t,a,e[a]);return t},c=(t,e)=>C(t,y(e));import{r as h,D as x,j as r,f as o,k as A,F as W}from"./index.465e1347.js";import{T as s,D as d,b as i,d as R,C as k}from"./CourseDataBase.1b1e32e1.js";import{R as S}from"./ResponsiveAppBar.04ab78d0.js";import{C as B,c as j,d as z,a as q,b as O,G as m}from"./Grid.744f6d41.js";import{A as T}from"./ShoppingCart.1472a63b.js";import{C as E,R as F}from"./Rating.13f6c281.js";import{S as G}from"./TableRow.b8286e9c.js";import"./_commonjsHelpers.294d03c4.js";import"./listItemTextClasses.99509e17.js";import"./utils.c1c813d1.js";import"./appendOwnerState.c28deb05.js";import"./ownerDocument.d64bc4d4.js";const I=t=>{const e=t.course,{appData:a,editAppData:n}=h.exports.useContext(x);return r(B,{raised:!0,sx:{m:1},children:o(j,{onClick:()=>{n(c(l({},a),{page:"course",qinfo:c(l({},a.qinfo),{id:e.id})}))},children:[r(z,{component:"img",image:`./courses/${e.id}/large.jpg`,sx:{display:{xs:"none",sm:"block"}},loading:"lazy",alt:""}),r(q,{avatar:r(T,{variant:"square",src:""}),title:o(s,{noWrap:!0,color:"primary",children:[" ",e.title," "]}),subheader:e.about,sx:{display:{xs:"flex",sm:"none"}}}),r(d,{sx:{display:{xs:"none",sm:"block"}}}),o(O,{sx:{textAlign:"center",display:{xs:"none",sm:"block"}},children:[r(s,{noWrap:!0,color:"primary",children:e.title}),r(s,{variant:"subtitle2",noWrap:!0,color:"text.secondary",children:e.about})]}),r(d,{}),o(s,{variant:"subtitle2",noWrap:!0,m:1,fontWeight:"bold",textAlign:"center",color:"text.secondary",children:[e.tests.length," Tests | ",e.tests.reduce((g,b)=>g+b[1].length,0)," Questions"]}),r(d,{}),r(s,{variant:"subtitle2",noWrap:!0,p:1,fontWeight:"bold",textAlign:"center",color:"primary",display:"flex",justifyContent:"space-around",alignItems:"center",children:e.bestSeller?r(E,{variant:"filled",label:"Bestseller",color:"success",size:"small"}):o(i,{sx:{display:"flex",alignItems:"center"},children:[o(i,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:["(",e.rating,")"]}),r(F,{value:e.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})})]})})};var M=I;function _(){const{appData:t,editAppData:e}=h.exports.useContext(x),a=A();return o(W,{children:[r(S,{}),o(i,{p:2,children:[r(s,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Dashboard"}),r(i,{sx:{bgcolor:"#f543"},borderRadius:1,p:1,children:t.uinfo.enrolled.length===0?o(G,{direction:"column",children:[r(s,{variant:"h4",p:4,fontWeight:"bold",color:"text.secondary",align:"center",children:"No Courses Registered"}),r(R,{variant:"contained",onClick:()=>{a("/search")},children:"ADD SOME COURSES"})]}):r(m,{container:!0,spacing:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:t.uinfo.enrolled.map(n=>r(m,{item:!0,xs:1,children:r(M,{course:k[n]})},n))})})]})]})}export{_ as default};
