import{u as n,b as e,j as r}from"./index.51f76716.js";import{C as d,t as l,B as c,s as m}from"./CardMedia.4adf4202.js";import{D as o,l as s}from"./Divider.2041457b.js";const u=a=>{const t=a.course,i=n();return e(d,{raised:!0,onClick:()=>{i(`/product/${t.id}`)},sx:{display:"flex",borderRadius:2,flexDirection:{xs:"row",sm:"column"},my:1,mx:"auto",maxWidth:{xs:"100%",sm:"30%",md:"23%",lg:"18%"},width:{xs:"100%",sm:"30%",md:"23%",lg:"18%"}},children:[r(l,{component:"img",sx:{width:{xs:"7rem",sm:"auto"},height:"auto"},image:`./courses/${t.id}/large.jpg`,loading:"lazy",alt:""}),r(o,{}),e(c,{sx:{display:"flex",flexDirection:"column",width:{xs:"calc(100% - 7rem)",sm:"100%"}},children:[e(m,{sx:{textAlign:"center"},children:[r(s,{noWrap:!0,color:"primary",children:t.title}),r(s,{variant:"subtitle2",noWrap:!0,color:"text.secondary",children:t.about})]}),r(o,{}),e(s,{variant:"subtitle2",noWrap:!0,m:1,fontWeight:"bold",textAlign:"center",color:"text.secondary",children:[t.tests," Tests | ",t.questions," Questions"]})]})]})};var h=u;export{h as P};
