import{r,D as u,b as l,j as s}from"./index.51f76716.js";import{P as p}from"./ProductCard.bb8e2ab3.js";import{B as t}from"./CardMedia.4adf4202.js";import{l as c}from"./Divider.2041457b.js";function j(){const{dataBase:a,editDataBase:d}=r.exports.useContext(u),[o,n]=r.exports.useState([]);return r.exports.useEffect(()=>{fetch("./courses/database.json").then(e=>e.ok?e.json():[]).then(e=>n(e))},[]),l(t,{p:2,children:[s(c,{variant:"h5",color:"primary",align:"center",children:"Courses enrolled"}),s(t,{display:"flex",flexWrap:"wrap",m:"auto",p:1,children:o.filter(e=>{if(a.uinfo.enrolled.includes(e.id))return e}).map((e,i)=>s(p,{course:e},i))})]})}export{j as default};
