(this.webpackJsonpresume_maker=this.webpackJsonpresume_maker||[]).push([[0],{18:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},59:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),o=s(19),n=s.n(o),a=(s(51),s(52),s(11)),l=s(3),i=(s(18),s(0));var p=function(e){var t=e.photourl,s=e.setphotourl,c=e.name,r=e.setname,o=e.subtitle,n=e.setsubtitle,a=e.userdesc,l=e.setuserdesc,p=e.email,j=e.setemail,h=e.contact,d=e.setcontact,m=e.address,x=e.setaddress,b=e.github,u=e.setgithub,O=e.linkedin,f=e.setlinkedin,g=e.portfolio,y=e.setportfolio;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"heading",children:"Information"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Photo"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:t,onChange:function(e){return s(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Name",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Subtitle"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",value:o,onChange:function(e){return n(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box textarea",children:[Object(i.jsx)("span",{className:"details",children:"Description"}),Object(i.jsx)("textarea",{type:"text",placeholder:"Description",value:a,onChange:function(e){return l(e.target.value)}})]})]}),Object(i.jsx)("h1",{className:"heading",children:"Extra Information"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Email"}),Object(i.jsx)("input",{type:"text",placeholder:"Email Address",value:p,onChange:function(e){return j(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Contact"}),Object(i.jsx)("input",{type:"text",placeholder:"Number",value:h,onChange:function(e){return d(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Address"}),Object(i.jsx)("input",{type:"text",placeholder:"Address",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Github"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Linkedin"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:O,onChange:function(e){return f(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Portfolio"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:g,onChange:function(e){return y(e.target.value)}})]})]})]})})},j=s(75),h=s(25),d=s.n(h);var m=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("p",{className:"skill",children:[e.item,Object(i.jsx)(d.a,{onClick:function(){e.onSelect(e.id)}})]})})})};var x=function(e){var t=e.input,s=e.skills,c=e.listofitems,r=e.deleteitems,o=e.setinput;return e.setskills,Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"heading",children:"Skills"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Skills"}),Object(i.jsx)("input",{type:"text",placeholder:"Type Your Skills Here",value:t,onChange:function(e){return o(e.target.value)}}),Object(i.jsx)(j.a,{onClick:c,children:"+"})]}),Object(i.jsx)("div",{className:"skills-section",children:s.map((function(e,t){return Object(i.jsx)(m,{item:e,id:t,onSelect:r},t)}))})]})]})},b=s(4);function u(e){var t=e.number,s=e.project,c=e.setproject,r=e.name,o=e.link,n=e.tech,a=e.desc;return Object(i.jsxs)("div",{className:"form experience",children:[Object(i.jsxs)("h2",{children:["Project #",t," "]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Project Name",value:r,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Link"}),Object(i.jsx)("input",{type:"text",placeholder:"Github/working Link",value:o,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{link:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Tech Used"}),Object(i.jsx)("input",{type:"text",placeholder:"Technology Used",value:n,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{tech:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box textarea",children:[Object(i.jsx)("span",{className:"details",children:"Description"}),Object(i.jsx)("textarea",{type:"text",placeholder:"Description",value:a,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{desc:e.target.value}))}})]})]})}var O=function(e){var t=e.project,s=e.setproject,c=e.name,r=e.link,o=e.tech,n=e.desc,a=e.project2,l=e.setproject2,p=e.name2,j=e.link2,h=e.tech2,d=e.desc2,m=e.project3,x=e.setproject3,b=e.name3,O=e.link3,f=e.tech3,g=e.desc3,y=e.project4,v=e.setproject4,S=e.name4,N=e.link4,k=e.tech4,I=e.desc4;return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)(u,{number:1,project:t,setproject:s,name:c,link:r,tech:o,desc:n}),Object(i.jsx)(u,{number:2,project:a,setproject:l,name:p,link:j,tech:h,desc:d}),Object(i.jsx)(u,{number:3,project:m,setproject:x,name:b,link:O,tech:f,desc:g}),Object(i.jsx)(u,{number:4,project:y,setproject:v,name:S,link:N,tech:k,desc:I})]})},f=function(e){var t=e.number,s=e.exp,c=e.setexp,r=e.postname,o=e.company,n=e.from,a=e.to,l=e.expdesc;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form experience",children:[Object(i.jsxs)("h2",{children:["Experience #",t," "]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Post Title"}),Object(i.jsx)("input",{type:"text",placeholder:"Post Name",value:r,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{postname:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Company"}),Object(i.jsx)("input",{type:"text",placeholder:"Company Name",value:o,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{company:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"From"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"1.3rem"},value:n,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{from:e.target.value}))}}),Object(i.jsx)("span",{className:"details",style:{marginLeft:"1rem",width:"20%"},children:"To"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"0"},value:a,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{to:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box textarea",children:[Object(i.jsx)("span",{className:"details",children:"Experience"}),Object(i.jsx)("textarea",{type:"text",placeholder:"Write your Experience Here",value:l,onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{expdesc:e.target.value}))}})]})]})})};var g=function(e){var t=e.exp,s=e.setexp,c=e.postname,r=e.company,o=e.from,n=e.to,a=e.expdesc,l=e.exp2,p=e.setexp2,j=e.postname2,h=e.company2,d=e.from2,m=e.to2,x=e.expdesc2,b=e.exp3,u=e.setexp3,O=e.postname3,g=e.company3,y=e.from3,v=e.to3,S=e.expdesc3,N=e.exp4,k=e.setexp4,I=e.postname4,C=e.company4,W=e.from4,z=e.to4,E=e.expdesc4,w=e.exp5,J=e.setexp5,A=e.postname5,L=e.company5,P=e.from5,T=e.to5,U=e.expdesc5,Y=e.exp6,F=e.setexp6,B=e.postname6,H=e.company6,R=e.from6,_=e.to6,D=e.expdesc6;return Object(i.jsxs)("div",{className:"form workexp",children:[Object(i.jsx)("h1",{className:"heading",children:"Work Experience"}),Object(i.jsx)(f,{number:1,exp:t,setexp:s,postname:c,company:r,from:o,to:n,expdesc:a}),Object(i.jsx)(f,{number:2,exp:l,setexp:p,postname:j,company:h,from:d,to:m,expdesc:x}),Object(i.jsx)(f,{number:3,exp:b,setexp:u,postname:O,company:g,from:y,to:v,expdesc:S}),Object(i.jsx)(f,{number:4,exp:N,setexp:k,postname:I,company:C,from:W,to:z,expdesc:E}),Object(i.jsx)(f,{number:5,exp:w,setexp:J,postname:A,company:L,from:P,to:T,expdesc:U}),Object(i.jsx)(f,{number:6,exp:Y,setexp:F,postname:B,company:H,from:R,to:_,expdesc:D})]})},y=s(8);function v(e){var t=e.number,s=e.edu,c=e.setedu,r=e.school,o=e.course,n=e.from,a=e.to,l=e.ach,p=e.id,j=function(e,t,r){var o=s[e];o=Object(b.a)(Object(b.a)({},o),{},Object(y.a)({},t,r)),c(Object(b.a)(Object(b.a)({},s),{},Object(y.a)({},e,o)))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form experience",children:[Object(i.jsxs)("h2",{children:["Education #",t," "]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"School"}),Object(i.jsx)("input",{type:"text",placeholder:"School Name",value:r,onChange:function(e){return j(p,"school",e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Course"}),Object(i.jsx)("input",{type:"text",placeholder:"Course Name",value:o,onChange:function(e){return j(p,"course",e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"From"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"1.3rem"},value:n,onChange:function(e){return j(p,"from",e.target.value)}}),Object(i.jsx)("span",{className:"details",style:{marginLeft:"1rem",width:"20%"},children:"To"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"0"},value:a,onChange:function(e){return j(p,"to",e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Achievements"}),Object(i.jsx)("input",{type:"text",placeholder:"Achievements",value:l,onChange:function(e){return j(p,"ach",e.target.value)}})]})]})})}var S=function(e){var t=e.edu,s=e.setedu,r=Object(c.useState)(2),o=Object(l.a)(r,2),n=o[0],a=o[1];return Object(i.jsxs)("div",{className:"form education",children:[Object(i.jsx)("h1",{className:"heading",children:"Education"}),Object.keys(t).map((function(e,c){return Object(i.jsx)(v,{number:c+1,edu:t,id:e,school:t[e].school,setedu:s,course:t[e].course,from:t[e].from,to:t[e].to,ach:t[e].ach},c+1)})),Object(i.jsx)("button",{className:"add-edu-button",onClick:function(){return function(e,t){s(Object(b.a)(Object(b.a)({},e),{},Object(y.a)({},"edu_".concat(t),{school:"",course:"",from:"",to:"",ach:""}))),a((function(e){return e+1}))}(t,n)},style:{marginTop:"20px"},children:"Add more Educaiton"})]})},N=function(e){return Object(i.jsxs)("div",{className:"achivelist",children:[Object(i.jsx)("p",{children:e.item}),Object(i.jsx)(d.a,{onClick:function(){e.onSelect(e.id)}})]})};var k=function(e){var t=e.ach,s=e.setach,c=e.list,r=(e.setlist,e.additem),o=e.deleteitem;return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"heading",children:"Achievements"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Achievements"}),Object(i.jsx)("input",{type:"text",placeholder:"Type Your Achievements Here",style:{width:"85%"},value:t,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)(j.a,{onClick:r,children:"+"})]}),Object(i.jsx)("div",{className:"skills-section",style:{boxShadow:"none",height:"22rem"},children:c.map((function(e,t){return Object(i.jsx)(N,{item:e,id:t,onSelect:o},t)}))})]})]})},I=s(35),C=s(36),W=s(24),z=s(44),E=s(43),w=(s(59),s(37)),J=s.n(w),A=s(38),L=s.n(A),P=s(39),T=s.n(P),U=s(40),Y=s.n(U),F=s(41),B=s.n(F),H=s(42),R=s.n(H),_=s(29),D=s.n(_),M=function(e){Object(z.a)(s,e);var t=Object(E.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"resume",children:[Object(i.jsxs)("div",{className:"info",children:[""===this.props.photourl?null:Object(i.jsx)("img",{src:this.props.photourl,alt:""}),Object(i.jsxs)("div",{className:"main-info",children:[Object(i.jsx)("h1",{style:{color:this.props.primary},children:this.props.name}),Object(i.jsx)("h3",{children:this.props.subtitle}),Object(i.jsx)("p",{children:this.props.userdesc})]})]}),this.props.email||this.props.contact||this.props.address||this.props.github||this.props.linkedin||this.props.portfolio?Object(i.jsxs)("div",{className:"extrainfo",children:[""===this.props.email?null:Object(i.jsxs)("a",{href:this.props.email,children:[" ",Object(i.jsx)(J.a,{style:{color:this.props.primary}})," ",this.props.email]}),""===this.props.contact?null:Object(i.jsxs)("a",{href:this.props.contact,children:[" ",Object(i.jsx)(L.a,{style:{color:this.props.primary}})," ",this.props.contact]}),""===this.props.address?null:Object(i.jsxs)("a",{href:this.props.address,children:[" ",Object(i.jsx)(T.a,{style:{color:this.props.primary}})," ",this.props.address]}),""===this.props.github?null:Object(i.jsxs)("a",{href:this.props.github,children:[Object(i.jsx)(Y.a,{style:{color:this.props.primary}}),this.props.github]}),""===this.props.linkedin?null:Object(i.jsxs)("a",{href:this.props.linkedin,children:[Object(i.jsx)(B.a,{style:{color:this.props.primary}}),this.props.linkedin]}),""===this.props.portfolio?null:Object(i.jsxs)("a",{href:this.props.portfolio,children:[Object(i.jsx)(R.a,{style:{color:this.props.primary}}),this.props.portfolio]})]}):null,Object(i.jsxs)("div",{className:"section",children:[Object(i.jsxs)("div",{className:"left-section",children:[""===this.props.exp3.postname&&""===this.props.exp2.postname&&""===this.props.exp.postname&&""===this.props.exp4.postname&&""===this.props.exp5.postname&&""===this.props.exp6.postname?null:Object(i.jsxs)("div",{className:"experiences",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Experience"}),""===this.props.exp.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp.from," - ",this.props.exp.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp.expdesc]})]}),""===this.props.exp2.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp2.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp2.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp2.from," - ",this.props.exp2.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp2.expdesc]})]}),""===this.props.exp3.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp3.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp3.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp3.from," - ",this.props.exp3.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp3.expdesc]})]}),""===this.props.exp4.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp4.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp4.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp4.from," - ",this.props.exp4.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp4.expdesc]})]}),""===this.props.exp5.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp5.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp5.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp5.from," - ",this.props.exp5.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp5.expdesc]})]}),""===this.props.exp6.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp6.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp6.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp6.from," - ",this.props.exp6.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp6.expdesc]})]})]}),Object.keys(this.props.edu).reduce((function(t,s){return void 0===e.props.edu[s].school||""===e.props.edu[s].school||t?t:Object(i.jsx)("div",{className:"education",children:Object(i.jsx)("h2",{className:"section-heading",style:{color:e.props.primary},children:"Education"})})}),!1),Object(i.jsx)("div",{children:Object.keys(this.props.edu).map((function(t,s){if(void 0!==e.props.edu[t].school&&""!==e.props.edu[t].school)return Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:e.props.secondary},children:e.props.edu[t].school}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:e.props.edu[t].course}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[e.props.edu[t].from," - ",e.props.edu[t].to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Achievements:"}),Object(i.jsxs)("p",{style:{},children:["- ",e.props.edu[t].ach]})]})}))})]}),Object(i.jsxs)("div",{className:"right-section",children:[0===this.props.skills.length?null:Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Skills"}),Object(i.jsx)("div",{children:this.props.skills.map((function(t){return Object(i.jsx)("p",{className:"skill",style:{backgroundColor:e.props.secondary},children:t})}))})]}),""===this.props.project3.name&&""===this.props.project2.name&&""===this.props.project.name?null:Object(i.jsxs)("div",{className:"projects",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Projects"}),""===this.props.project.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project.name}),""===this.props.project.link?null:Object(i.jsx)("a",{href:this.props.project.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project.desc]})]}),""===this.props.project2.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project2.name}),""===this.props.project2.link?null:Object(i.jsx)("a",{href:this.props.project2.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project2.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project2.desc]})]}),""===this.props.project3.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project3.name}),""===this.props.project3.link?null:Object(i.jsx)("a",{href:this.props.project2.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project3.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project3.desc]})]}),""===this.props.project4.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project4.name}),""===this.props.project4.link?null:Object(i.jsx)("a",{href:this.props.project4.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project4.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project4.desc]})]})]}),0===this.props.achlist.length?null:Object(i.jsxs)("div",{className:"achiec",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Achievements"}),Object(i.jsx)("div",{children:this.props.achlist.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{style:{fontWeight:"600"},children:["- ",e]})})}))})]})]})]})]})}}]),s}(r.a.PureComponent);var G=function(){var e=Object(c.useRef)(),t=Object(I.useReactToPrint)({content:function(){return e.current}}),s=Object(c.useState)("info"),r=Object(l.a)(s,2),o=r[0],n=r[1],j=Object(c.useState)(""),h=Object(l.a)(j,2),d=h[0],m=h[1],b=Object(c.useState)(""),u=Object(l.a)(b,2),f=u[0],y=u[1],v=Object(c.useState)(""),N=Object(l.a)(v,2),C=N[0],W=N[1],z=Object(c.useState)(""),E=Object(l.a)(z,2),w=E[0],J=E[1],A=Object(c.useState)(""),L=Object(l.a)(A,2),P=L[0],T=L[1],U=Object(c.useState)(""),Y=Object(l.a)(U,2),F=Y[0],B=Y[1],H=Object(c.useState)(""),R=Object(l.a)(H,2),_=R[0],D=R[1],G=Object(c.useState)(""),q=Object(l.a)(G,2),K=q[0],Q=q[1],V=Object(c.useState)(""),X=Object(l.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)(""),te=Object(l.a)(ee,2),se=te[0],ce=te[1],re=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),oe=Object(l.a)(re,2),ne=oe[0],ae=oe[1],le=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),ie=Object(l.a)(le,2),pe=ie[0],je=ie[1],he=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),de=Object(l.a)(he,2),me=de[0],xe=de[1],be=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),ue=Object(l.a)(be,2),Oe=ue[0],fe=ue[1],ge=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),ye=Object(l.a)(ge,2),ve=ye[0],Se=ye[1],Ne=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),ke=Object(l.a)(Ne,2),Ie=ke[0],Ce=ke[1],We=Object(c.useState)({edu_1:{school:"",course:"",from:"",to:"",ach:""}}),ze=Object(l.a)(We,2),Ee=ze[0],we=ze[1],Je={edu_1:{school:"",course:"",from:"",to:"",ach:""}},Ae=Object(c.useState)(""),Le=Object(l.a)(Ae,2),Pe=Le[0],Te=Le[1],Ue=Object(c.useState)([]),Ye=Object(l.a)(Ue,2),Fe=Ye[0],Be=Ye[1],He=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Re=Object(l.a)(He,2),_e=Re[0],De=Re[1],Me=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Ge=Object(l.a)(Me,2),qe=Ge[0],Ke=Ge[1],Qe=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Ve=Object(l.a)(Qe,2),Xe=Ve[0],Ze=Ve[1],$e=Object(c.useState)({name:"",link:"",tech:"",desc:""}),et=Object(l.a)($e,2),tt=et[0],st=et[1],ct={name:"",link:"",tech:"",desc:""},rt=Object(c.useState)(""),ot=Object(l.a)(rt,2),nt=ot[0],at=ot[1],lt=Object(c.useState)([]),it=Object(l.a)(lt,2),pt=it[0],jt=it[1],ht=Object(c.useState)("#34678c"),dt=Object(l.a)(ht,2),mt=dt[0],xt=dt[1],bt=Object(c.useState)("rgb(242, 100, 100)"),ut=Object(l.a)(bt,2),Ot=ut[0],ft=ut[1];return Object(c.useEffect)((function(){var e=null===localStorage.getItem("name")?"":localStorage.getItem("name");y(e),W(null==localStorage.getItem("subtitle")?"":localStorage.getItem("subtitle")),m(null==localStorage.getItem("photourl")?"":localStorage.getItem("photourl")),J(null==localStorage.getItem("userdesc")?"":localStorage.getItem("userdesc")),T(null==localStorage.getItem("email")?"":localStorage.getItem("email")),B(null==localStorage.getItem("contact")?"":localStorage.getItem("contact")),D(null==localStorage.getItem("address")?"":localStorage.getItem("address")),Q(null==localStorage.getItem("github")?"":localStorage.getItem("github")),$(null==localStorage.getItem("linkedin")?"":localStorage.getItem("linkedin")),ce(null==localStorage.getItem("portfolio")?"":localStorage.getItem("portfolio")),Be(null==localStorage.getItem("skills")?[]:JSON.parse(localStorage.getItem("skills"))),jt(null==localStorage.getItem("list")?[]:JSON.parse(localStorage.getItem("list"))),we(null==localStorage.getItem("edu")?Je:JSON.parse(localStorage.getItem("edu"))),De(null==localStorage.getItem("project")?ct:JSON.parse(localStorage.getItem("project"))[0]),Ke(null==localStorage.getItem("project")?ct:JSON.parse(localStorage.getItem("project"))[1]),Ze(null==localStorage.getItem("project")?ct:JSON.parse(localStorage.getItem("project"))[2]),st(null==localStorage.getItem("project")?ct:JSON.parse(localStorage.getItem("project"))[3]),ae(null==localStorage.getItem("exp")?ne:JSON.parse(localStorage.getItem("exp"))[0]),je(null==localStorage.getItem("exp")?pe:JSON.parse(localStorage.getItem("exp"))[1]),xe(null==localStorage.getItem("exp")?me:JSON.parse(localStorage.getItem("exp"))[2]),fe(null==localStorage.getItem("exp")?Oe:JSON.parse(localStorage.getItem("exp"))[3]),Se(null==localStorage.getItem("exp")?ve:JSON.parse(localStorage.getItem("exp"))[4]),Ce(null==localStorage.getItem("exp")?Ie:JSON.parse(localStorage.getItem("exp"))[5])}),[]),Object(c.useEffect)((function(){localStorage.setItem("photourl",d),localStorage.setItem("name",f),localStorage.setItem("subtitle",C),localStorage.setItem("userdesc",w),localStorage.setItem("email",P),localStorage.setItem("contact",F),localStorage.setItem("address",_),localStorage.setItem("github",K),localStorage.setItem("linkedin",Z),localStorage.setItem("portfolio",se),localStorage.setItem("skills",JSON.stringify(Fe)),localStorage.setItem("list",JSON.stringify(pt)),localStorage.setItem("edu",JSON.stringify(Ee)),localStorage.setItem("project",JSON.stringify([_e,qe,Xe,tt])),localStorage.setItem("exp",JSON.stringify([ne,pe,me,Oe,ve,Ie]))}),[f,C,d,w,P,F,_,K,se,Z,ne,Fe,pt,Ee,_e,qe,Xe,tt,ne,pe,me,Oe,ve,Ie]),Object(i.jsxs)("div",{id:"main",children:[Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h2",{children:"Hash/Hub"}),Object(i.jsxs)("h1",{children:["\ud83d\udcc4",Object(i.jsx)("span",{children:"Resume Maker "})," "]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsx)("a",{href:"https://github.com/vedant-jain03/Resume-Maker",children:"Contribute"}),Object(i.jsx)("a",{href:"https://github.com/vedant-jain03/Resume-Maker",children:"Give us star"})]})]}),Object(i.jsxs)("main",{className:"maincomponent",children:[Object(i.jsxs)("div",{className:"left",children:[Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("li",{className:"info"===o?"active":"",onClick:function(){return n("info")},children:"Info"}),Object(i.jsx)("li",{className:"Experience"===o?"active":"",onClick:function(){return n("Experience")},children:"Experience"}),Object(i.jsx)("li",{className:"Education"===o?"active":"",onClick:function(){return n("Education")},children:"Education"}),Object(i.jsx)("li",{className:"Skills"===o?"active":"",onClick:function(){return n("Skills")},children:"Skills"}),Object(i.jsx)("li",{className:"Projects"===o?"active":"",onClick:function(){return n("Projects")},children:"Projects"}),Object(i.jsx)("li",{className:"Achievements"===o?"active":"",onClick:function(){return n("Achievements")},style:{width:"25%"},children:"Achievements"})]}),"info"===o?Object(i.jsx)(p,{photourl:d,setphotourl:m,name:f,setname:y,subtitle:C,setsubtitle:W,userdesc:w,setuserdesc:J,email:P,setemail:T,contact:F,setcontact:B,address:_,setaddress:D,github:K,setgithub:Q,linkedin:Z,setlinkedin:$,portfolio:se,setportfolio:ce}):null,"Experience"===o?Object(i.jsx)(g,{exp:ne,setexp:ae,postname:ne.postname,company:ne.company,from:ne.from,to:ne.to,expdesc:ne.expdesc,exp2:pe,setexp2:je,postname2:pe.postname,company2:pe.company,from2:pe.from,to2:pe.to,expdesc2:pe.expdesc,exp3:me,setexp3:xe,postname3:me.postname,company3:me.company,from3:me.from,to3:me.to,expdesc3:me.expdesc,exp4:Oe,setexp4:fe,postname4:Oe.postname,company4:Oe.company,from4:Oe.from,to4:Oe.to,expdesc4:Oe.expdesc,exp5:ve,setexp5:Se,postname5:ve.postname,company5:ve.company,from5:ve.from,to5:ve.to,expdesc5:ve.expdesc,exp6:Ie,setexp6:Ce,postname6:Ie.postname,company6:Ie.company,from6:Ie.from,to6:Ie.to,expdesc6:Ie.expdesc}):null,"Education"===o?Object(i.jsx)(S,{edu:Ee,setedu:we}):null,"Skills"===o?Object(i.jsx)(x,{input:Pe,skills:Fe,listofitems:function(){Be((function(e){return[].concat(Object(a.a)(e),[Pe])})),Te("")},deleteitems:function(e){Be((function(t){return t.filter((function(t,s){return e!==s}))}))},setinput:Te,setskills:Be}):null,"Projects"===o?Object(i.jsx)(O,{project:_e,setproject:De,name:_e.name,link:_e.link,tech:_e.tech,desc:_e.desc,project2:qe,setproject2:Ke,name2:qe.name,link2:qe.link,tech2:qe.tech,desc2:qe.desc,project3:Xe,setproject3:Ze,name3:Xe.name,link3:Xe.link,tech3:Xe.tech,desc3:Xe.desc,project4:tt,setproject4:st,name4:tt.name,link4:tt.link,tech4:tt.tech,desc4:tt.desc}):null,"Achievements"===o?Object(i.jsx)(k,{ach:nt,setach:at,list:pt,setlist:jt,additem:function(){jt((function(e){return[].concat(Object(a.a)(e),[nt])})),at("")},deleteitem:function(e){jt((function(t){return t.filter((function(t,s){return e!==s}))}))}}):null,Object(i.jsx)("div",{className:"scroller"})]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsxs)("div",{className:"up",children:[Object(i.jsx)("button",{className:"print-button",onClick:t,children:"Print this out!"}),Object(i.jsxs)("div",{className:"theme",children:[Object(i.jsx)("h2",{children:"Theme"}),Object(i.jsx)("div",{className:"#34678c"===mt?"combo active":"combo",onClick:function(){xt("#34678c"),ft("rgb(242, 100, 100)")}}),Object(i.jsx)("div",{className:"#2b273f"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, #2b273f, #7cff81)"},onClick:function(){xt("#2b273f"),ft("#7cff81")}}),Object(i.jsx)("div",{className:"black"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, black, #cddc39)"},onClick:function(){xt("black"),ft("#cddc39")}}),Object(i.jsx)("div",{className:"rgb(0 150 151)"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, rgb(0 150 151), #ff9800)"},onClick:function(){xt("rgb(0 150 151)"),ft("#ff9800")}}),Object(i.jsx)("div",{className:"rgb(70 88 178)"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, rgb(70 88 178), #91c1dc)"},onClick:function(){xt("rgb(70 88 178)"),ft("#91c1dc")}}),Object(i.jsx)("div",{className:"rgb(38 70 83)"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, rgb(38 70 83), #2a9d8f)"},onClick:function(){xt("rgb(38 70 83)"),ft("#2a9d8f")}}),Object(i.jsx)("div",{className:"rgb(188 108 37)"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, rgb(188 108 37), #dda15e)"},onClick:function(){xt("rgb(188 108 37)"),ft("#dda15e")}}),Object(i.jsx)("div",{className:"rgb(0 48 73)"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, rgb(0 48 73), #d62828)"},onClick:function(){xt("rgb(0 48 73)"),ft("#d62828")}}),Object(i.jsx)("div",{className:"rgb(140 47 57)"===mt?"combo active":"combo",style:{background:"linear-gradient(45deg, rgb(140 47 57), #b23a48)"},onClick:function(){xt("rgb(140 47 57)"),ft("#b23a48")}})]})]}),Object(i.jsx)("div",{className:"resume-preview",children:Object(i.jsx)(M,{photourl:d,name:f,subtitle:C,userdesc:w,email:P,contact:F,address:_,github:K,linkedin:Z,portfolio:se,exp:ne,exp2:pe,exp3:me,exp4:Oe,exp5:ve,exp6:Ie,edu:Ee,skills:Fe,achlist:pt,project:_e,project2:qe,project3:Xe,project4:tt,primary:mt,secondary:Ot,ref:e})})]})]}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"Copyright \xa9 2021. All rights reserved."})})]})};var q=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(G,{})})};n.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(q,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.9ef70729.chunk.js.map