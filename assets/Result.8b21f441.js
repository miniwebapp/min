var B=Object.defineProperty,N=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(r,a,i)=>a in r?B(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,l=(r,a)=>{for(var i in a||(a={}))S.call(a,i)&&p(r,i,a[i]);if(m)for(var i of m(a))A.call(a,i)&&p(r,i,a[i]);return r},c=(r,a)=>N(r,R(a));import{r as f,D,k as H,f as t,j as e}from"./index.465e1347.js";import{b as Q,T as b,d as h}from"./CourseDataBase.1b1e32e1.js";import{S as x,T as w,a as v,b as C,c as d,d as n,e as g}from"./TableRow.b8286e9c.js";const E=()=>{const{appData:r,editAppData:a}=f.exports.useContext(D),i=r.answer.response.map((o,s)=>{let u="inherit";return(o[0]==="asd"||o[0]==="amr")&&(u=o[1]===r.qinfo.answers[s]?"#71eb71":"#eb7171"),[s+1,o[0],o[1],r.qinfo.answers[s],u]}),k=()=>{a(c(l({},r),{page:"home"})),y("/home")},T=()=>{a(c(l({},r),{page:"evaluation",answer:c(l({},r.answer),{response:i})}))},y=H(),[W,j]=f.exports.useState(!1);return W?t(Q,{p:1,maxWidth:"sm",mx:"auto",children:[e(x,{direction:"row",px:2,py:5,justifyContent:"space-between",alignItems:"center",children:e(b,{variant:"h5",fontWeight:"bold",color:"primary",children:"Your responses"})}),e(h,{variant:"contained",fullWidth:!0,sx:{mb:3},onClick:T,children:"Question wise view"}),e(w,{children:t(v,{border:2,children:[e(C,{children:t(d,{sx:{backgroundColor:"#eee"},children:[e(n,{children:"Question Number"}),e(n,{children:"Status"}),e(n,{children:"Choosen answer"}),e(n,{children:"Correct answer"})]})}),e(g,{children:i.map((o,s)=>t(d,{sx:{backgroundColor:o[4]},children:[e(n,{children:o[0]}),e(n,{children:o[1]}),e(n,{children:o[2]}),e(n,{children:o[3]})]},s))})]})}),e(h,{variant:"contained",fullWidth:!0,sx:{mt:3},onClick:k,children:"Back To Home"})]}):t(w,{sx:{maxWidth:650,mx:"auto",overflow:"hidden",p:1},children:[e(x,{direction:"row",px:2,py:5,justifyContent:"space-between",alignItems:"center",children:e(b,{variant:"h5",fontWeight:"bold",color:"primary",children:"Your responses"})}),t(v,{border:2,children:[e(C,{children:t(d,{sx:{backgroundColor:"#eee"},children:[e(n,{children:"Status"}),e(n,{children:"Number of Questions"})]})}),t(g,{children:[t(d,{children:[e(n,{children:"Not Visited"}),e(n,{children:r.answer.data.nvd})]}),t(d,{children:[e(n,{children:"Not Answered"}),e(n,{children:r.answer.data.nad})]}),t(d,{children:[e(n,{children:"Answered"}),e(n,{children:r.answer.data.asd})]}),t(d,{children:[e(n,{children:"Marked for Review"}),e(n,{children:r.answer.data.mfr})]}),t(d,{children:[e(n,{children:"Answered & Marked for Review (Will be considered for evalution)"}),e(n,{children:r.answer.data.amr})]})]})]}),e(h,{variant:"contained",fullWidth:!0,sx:{mt:3},onClick:()=>j(!0),children:"Confirm"})]})};export{E as default};