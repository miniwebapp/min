var c=Object.defineProperty,h=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var a=(n,i,o)=>i in n?c(n,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[i]=o,l=(n,i)=>{for(var o in i||(i={}))u.call(i,o)&&a(n,o,i[o]);if(r)for(var o of r(i))g.call(i,o)&&a(n,o,i[o]);return n},s=(n,i)=>h(n,d(i));import{r as m,D as p,f as t,j as e}from"./index.5007d03a.js";function x(){const{appData:n,editAppData:i}=m.exports.useContext(p),o=()=>{document.getElementById("terms").checked?i(s(l({},n),{page:"exam"})):alert("Please check Terms and Conditions and then proceed")};return t("div",{id:"instructionpage",className:"l",children:[e("h3",{className:"l1",children:"Please read the instructions carefully"}),e("p",{children:e("br",{})}),e("h4",{children:e("u",{children:"General Instructions:"})}),e("p",{children:e("br",{})}),t("ol",{children:[t("li",{children:["Total duration of ",n.qinfo.name," is ",n.qinfo.time," min."]}),e("li",{children:"The clock will be set at the server. The countdown timer in the top left corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination."}),t("li",{children:["The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols:",t("ol",{children:[t("li",{children:[e("img",{src:"",className:"l2"}),"\xA0You have not visited the question yet."]}),t("li",{children:[e("img",{src:"",className:"l2"}),"\xA0You have not answered the question."]}),t("li",{children:[e("img",{src:"",className:"l2"}),"\xA0You have answered the question."]}),t("li",{children:[e("img",{src:"",className:"l2"}),"\xA0You have NOT answered the question, but have marked the question for review."]}),t("li",{children:[e("img",{src:"",className:"l2"}),'\xA0The question(s) "Answered and Marked for Review" will be considered for evalution.']})]})]}),e("li",{children:'You can click on the ">" arrow which apperes to the left of question palette to collapse the question palette thereby maximizing the question window. To view the question palette again, you can click on "<" which appears on the right side of question window.'}),e("li",{children:'You can click on your "Profile" image on top right corner of your screen to change the language during the exam for entire question paper. On clicking of Profile image you will get a drop-down to change the question content to the desired language.'}),t("li",{children:["You can click on\xA0",t("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,style:{verticalAlign:"middle"},children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m17.575 4.0336-.24009 20.602-3.3133-4.3701-4.0816 3.3136 10.084 10.997 10.372-11.286-3.9856-3.1215-3.7455 4.8984c-.048018-6.9954-.096037-13.991-.14406-20.986z",fill:"#fff"})]}),"\xA0to navigate to the bottom and\xA0",t("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,style:{verticalAlign:"middle"},children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m22.761 34.577.24009-20.602 3.3133 4.3701 4.0816-3.3136-10.084-10.997-10.372 11.286 3.9856 3.1215 3.7455-4.8984c.04802 6.9954.09604 13.991.14406 20.986z",fill:"#fff"})]}),"\xA0to navigate to top of the question are, without scrolling."]})]}),e("h4",{children:e("u",{children:"Navigating to a Question:"})}),e("ol",{start:"7",children:t("li",{children:["To answer a question, do the following:",t("ol",{type:"a",children:[e("li",{children:"Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question."}),t("li",{children:["Click on\xA0",e("strong",{children:"Save & Next"}),"\xA0to save your answer for the current question and then go to the next question."]}),t("li",{children:["Click on\xA0",e("strong",{children:"Mark for Review & Next"}),"\xA0to save your answer for the current question, mark it for review, and then go to the next question."]})]})]})}),e("h4",{children:e("u",{children:"Answering a Question:"})}),t("ol",{start:"8",children:[t("li",{children:["Procedure for answering a multiple choice type question:",t("ol",{type:"a",children:[e("li",{children:"To select you answer, click on the button of one of the options."}),t("li",{children:["To deselect your chosen answer, click on the button of the chosen option again or click on the\xA0",e("strong",{children:"Clear Response"}),"\xA0button"]}),e("li",{children:"To change your chosen answer, click on the button of another option"}),e("li",{children:"To save your answer, you MUST click on the Save & Next button."}),e("li",{children:"To mark the question for review, click on the Mark for Review & Next button."})]})]}),e("li",{children:"To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question."})]}),e("h4",{children:e("u",{children:"Navigating through sections:"})}),t("ol",{start:"10",children:[e("li",{children:"Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by click on the section name. The section you are currently viewing is highlighted."}),e("li",{children:"After click the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section."}),e("li",{children:"You can shuffle between sections and questions anything during the examination as per your convenience only during the time stipulated."}),e("li",{children:"Candidate can view the corresponding section summery as part of the legend that appears in every section above the question palette."})]}),e("h4",{className:"l3",children:"Please note all questions will appear in your default language. This language can be changed for a particular question later on."}),e("input",{type:"checkbox",id:"terms"}),e("label",{htmlFor:"terms",children:"\xA0\xA0I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations."}),e("p",{className:"lo",onClick:o,children:"PROCEED"})]})}export{x as default};
