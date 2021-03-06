var W=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var I=(n,i,o)=>i in n?W(n,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[i]=o,L=(n,i)=>{for(var o in i||(i={}))H.call(i,o)&&I(n,o,i[o]);if(S)for(var o of S(i))U.call(i,o)&&I(n,o,i[o]);return n},z=(n,i)=>K(n,X(i));import{r as d,D as P,f as r,j as e,F as G}from"./index.465e1347.js";import{D as J,P as Y}from"./entry.fad2a68c.js";import"./_commonjsHelpers.294d03c4.js";function B(){const{appData:n,editAppData:i}=d.exports.useContext(P),[o,w]=d.exports.useState(n.qinfo.time*60);return d.exports.useEffect(()=>{setInterval(()=>{w(v=>v-1)},1e3)},[]),r("span",{style:{backgroundColor:`${parseInt(o/60)<2?"red":"#5cb85c"}`,color:"whitesmoke",padding:"2px 10px",borderRadius:"5px",fontWeight:"bold"},children:[parseInt(o/3600),":",parseInt(o/60),":",parseInt(o%60)]})}let D;const Z=()=>{document.getElementsByClassName("m3")[0].requestFullscreen()};function re(){const{appData:n,editAppData:i}=d.exports.useContext(P),[o,w]=d.exports.useState(null),[v,R]=d.exports.useState(!1),j=({numPages:t})=>{w(t),R(!0),D=setTimeout(E,n.qinfo.time*6e4)},[c,u]=d.exports.useState(n.qinfo.answers.map(t=>["nvd",null])),[N,F]=d.exports.useState(n.qinfo.language[0]),T=t=>{F(t.target.value),console.log(N)},[s,_]=d.exports.useState(1),[m,f]=d.exports.useState({nvd:n.qinfo.answers.length,nad:0,asd:0,mfr:0,amr:0}),[g,h]=d.exports.useState(null),x=t=>{h(parseInt(t.target.value)),u(a=>(a[s-1][1]=parseInt(t.target.value),a))},q=()=>{let t=s-1,a=c[t][0],b=event.target.dataset.i;h(null),u(l=>(l[t][0]=b,l[t][1]=null,l)),f(l=>(l[a]-=1,l[b]+=1,l))},O=()=>{u(t=>(t[0][0]="nad",t)),f(t=>(t.nvd-=1,t.nad+=1,t))};d.exports.useEffect(O,[]);const k=t=>{c[t-1][0]==="nvd"&&(u(a=>(a[t-1][0]="nad",a)),f(a=>(a.nvd-=1,a.nad+=1,a))),_(t)},$=()=>{let t=null;t=s===1?o:s-1,h(c[t-1][1]),k(t)},A=()=>{let t=null;t=s===o?1:s+1,h(c[t-1][1]),k(t)},M=t=>{let a=null;a=parseInt(t.target.dataset.key)+1,h(c[a-1][1]),k(a)},y=t=>{if(g===null){alert("Please choose an option");return}let a=s-1,b=c[a][0],l=t.target.dataset.i;u(p=>(p[a][0]=l,p)),f(p=>(p[b]-=1,p[l]+=1,p)),A()},C=document.getElementById("m31"),V=()=>{C.scrollTo({top:0})},Q=()=>{C.scrollTo({top:C.scrollHeight})},E=()=>{i(z(L({},n),{answer:{response:c,data:m},page:"result"})),clearTimeout(D)};return r("div",{className:"m",style:{height:"100vh"},children:[e("nav",{className:"m1"}),e("header",{className:"m2",children:r("div",{className:"m21",children:[e("table",{className:"m211",children:r("tbody",{children:[r("tr",{children:[e("td",{rowSpan:"4",className:"m2112",style:{backgroundImage:`url(${n.uinfo.avatar})`}}),e("td",{children:"Candidate Name"}),e("td",{children:": "}),e("td",{className:"m2115",children:n.uinfo.name})]}),r("tr",{children:[e("td",{children:"Exam Name"}),e("td",{children:": "}),e("td",{className:"m2116",children:n.qinfo.category.split(" | ")[0]})]}),r("tr",{children:[e("td",{children:"Subject Name"}),e("td",{children:": "}),e("td",{className:"m2117",children:n.qinfo.name})]}),r("tr",{className:"m213",children:[e("td",{children:"Remaining Time"}),e("td",{children:": "}),e("td",{children:v?e(B,{}):e(G,{children:"Time"})})]})]})}),e("select",{className:"m212",value:N,onChange:T,children:n.qinfo.language.map((t,a)=>e("option",{value:t,children:t},a))})]})}),r("div",{className:"m3",children:[r("main",{className:"m31",id:"m31",children:[r("div",{className:"m3110",children:[e("span",{onClick:Q,id:"up",className:"m31101",children:r("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m17.575 4.0336-.24009 20.602-3.3133-4.3701-4.0816 3.3136 10.084 10.997 10.372-11.286-3.9856-3.1215-3.7455 4.8984c-.048018-6.9954-.096037-13.991-.14406-20.986z",fill:"#fff"})]})}),r("h4",{children:["Question number: ",s]})]}),e(J,{file:`./courses/${n.qinfo.id}/${n.qinfo.test}${N}.pdf`,onLoadSuccess:j,children:e(Y,{pageNumber:s,renderTextLayer:!1})}),r("div",{className:"m3112",children:[r("label",{htmlFor:"option-one",children:[e("input",{id:"option-one",name:"radio",value:"1",type:"radio",checked:g===1,onChange:x}),"\xA0(A)"]}),r("label",{htmlFor:"option-two",children:[e("input",{id:"option-two",name:"radio",value:"2",type:"radio",checked:g===2,onChange:x}),"\xA0(B)"]}),r("label",{htmlFor:"option-three",children:[e("input",{id:"option-three",name:"radio",value:"3",type:"radio",checked:g===3,onChange:x}),"\xA0(C)"]}),r("label",{htmlFor:"option-four",children:[e("input",{id:"option-four",name:"radio",value:"4",type:"radio",checked:g===4,onChange:x}),"\xA0(D)"]})]}),e("div",{className:"m3110",children:e("span",{onClick:V,className:"m31101",children:r("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m22.761 34.577.24009-20.602 3.3133 4.3701 4.0816-3.3136-10.084-10.997-10.372 11.286 3.9856 3.1215 3.7455-4.8984c.04802 6.9954.09604 13.991.14406 20.986z",fill:"#fff"})]})})})]}),r("div",{className:"m32",children:[r("div",{className:"opt",children:[e("button",{className:"m3211",onClick:q,"data-i":"nad",children:" CLEAR RESPONSE "}),e("button",{className:"m3212",onClick:y,"data-i":"amr",children:" SAVE & MARK FOR REVIEW "}),e("button",{className:"m3213",onClick:y,"data-i":"asd",children:" SAVE & NEXT "}),e("button",{className:"m3214",onClick:y,"data-i":"mfr",children:" MARK FOR REVIEW AND NEXT "})]}),r("div",{className:"opt",children:[e("button",{onClick:$,children:"\xAB\xA0BACK"}),e("button",{onClick:A,children:"NEXT\xA0\xBB"})]})]}),r("div",{className:"m33",children:[e("span",{className:"nvd",children:m.nvd}),e("div",{children:"Not Visited"}),e("span",{className:"nad",children:m.nad}),e("div",{children:"Not Answered"}),e("span",{className:"asd",children:m.asd}),e("div",{children:"Answered"}),e("span",{className:"mfr",children:m.mfr}),e("div",{children:"Marked for Review"}),e("span",{className:"amr",children:m.amr}),e("div",{className:"m33j",children:"Answered & Marked for Review (Will be considered for evalution)"})]}),e("aside",{className:"m34",children:c.map((t,a)=>e("div",{className:t[0],onClick:M,"data-key":a,children:a+1},a))}),r("div",{className:"opt",children:[e("button",{className:"m35 m36",onClick:Z,children:"Fullscreen"}),e("button",{className:"m35",children:e(B,{})}),e("button",{onClick:E,children:"SUBMIT"})]})]}),e("footer",{className:"m4"})]})}export{re as default};
