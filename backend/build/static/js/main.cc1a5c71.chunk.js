(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(26),l=c.n(s),r=c(10),o=c(14),i=(c(80),c(81),c(15)),j=c(139),d=c(132),b=c(140),u=c(12),h=c.n(u),x="LOGIN_SUCCESS",m="LOGIN_FAIL",p="LOGOUT_SUCCESS",O="REGISTER_SUCCESS",v="REGISTER_FAIL",g="USER_LOADING",f="USER_LOADED",y="AUTH_ERROR",k="POST_LOAD",w="POST_LOAD_FAIL",C="DELETE_POST",S="ADD_POST",N=function(e){var t=e().auth.token,c={headers:{"Content-Type":"application/json"}};return t&&(c.headers.Authorization="Token ".concat(t)),c},L=c(1);var T=Object(i.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e,t){h.a.post("".concat("http://localhost:8000","/api/auth/logout/"),null,N(t)).then((function(t){e({type:p})})).catch((function(e){console.log(e)}))}}})((function(e){var t=e.auth,c=e.logout,a={textDecoration:"none",fontWeight:"bolder"},n=t.isAuthenticated,s=(t.user,Object(L.jsxs)(j.a,{children:[Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/create/post",style:a,children:"Create Post"})}),Object(L.jsx)(j.a.Link,{children:Object(L.jsx)(r.c,{to:"/dashboard",style:a,children:"Dashboard"})}),Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/profile/",style:a,children:"Profile"})}),Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(d.a,{onClick:c,children:"Logout"})})]})),l=Object(L.jsxs)(j.a,{children:[Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/login",style:a,children:"Login"})}),Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/signup",style:a,children:"Signup"})})]});return Object(L.jsx)("div",{children:Object(L.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",style:{boxShadow:"5px 0 15px rgb(0 0 0 / 2"},children:[Object(L.jsx)(b.a.Brand,{href:"#home",className:"mx-4",children:"Blog Website"}),Object(L.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(L.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(L.jsxs)(j.a,{className:"ml-auto mx-3",children:[Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/",style:a,children:"Home"})}),Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/about",style:a,children:"About us"})}),Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/post",style:a,children:"Post"})}),Object(L.jsx)(j.a.Link,{className:"mx-1",children:Object(L.jsx)(r.c,{to:"/contact",style:a,children:"Contact us"})}),n?s:l]})})]})})}));var z=function(e){var t=e.children;return Object(L.jsxs)(a.Fragment,{children:[Object(L.jsx)(T,{}),t]})},I=c(7),A=c(69),B=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.component,c=e.isAuthenticated,a=Object(A.a)(e,["component","isAuthenticated"]);return Object(L.jsx)(o.b,Object(I.a)(Object(I.a)({},a),{},{render:function(e){return c?Object(L.jsx)(t,Object(I.a)({},e)):Object(L.jsx)(o.a,{to:"/login"})}}))})),E=c(133),q=c(134),G=c(70);var F=Object(i.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth,c=t.isAuthenticated,a=t.user;return t.token,Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{style:{display:"flex",justifyContent:"center",alignItem:"center",height:"88vh"},children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(G.a,{children:Object(L.jsx)("div",{style:{marginTop:50},children:Object(L.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/10/29/23/19/wordpress-1013189_960_720.png",style:{height:"70vh"}})})}),Object(L.jsx)(G.a,{children:Object(L.jsxs)("div",{style:{marginTop:"30vh"},children:[Object(L.jsxs)("div",{style:{paddingBottom:60},children:[Object(L.jsx)("h1",{className:"text-center",children:"Welcome to our world"}),Object(L.jsx)("p",{className:"text-center",children:"We help people by providing guidance.Share your experiences to help others."})]}),0==c?Object(L.jsxs)("div",{className:"text-center",children:[Object(L.jsx)(r.b,{to:"/signup",children:Object(L.jsx)(d.a,{className:"btn btn-primary",style:{margin:10,padding:10,borderRadius:50,width:130,fontWeight:"bolder",color:"white"},children:"Signp"})}),Object(L.jsx)(r.b,{to:"/login",children:Object(L.jsx)(d.a,{className:"btn btn-warning",style:{margin:10,padding:10,borderRadius:50,width:130,fontWeight:"bolder",color:"white"},children:"Login"})})]}):Object(L.jsx)("div",{children:Object(L.jsx)("h2",{className:"text-center my-4 text-capitalize",children:a?Object(L.jsxs)("div",{children:["Hi!",Object(L.jsxs)("span",{className:"text-capitalize text-primary",children:[" ",a.username," "]}),"Share your ideas to us."]}):null})})]})})]})})})})),D=c(20),R=c(8),P=c(138);var _=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(c){var a=JSON.stringify({username:e,password:t});h.a.post("".concat("http://localhost:8000","/api/auth/login"),a,{headers:{"Content-Type":"application/json"}}).then((function(e){c({type:x,payload:e.data})})).catch((function(e){c({type:m})}))}}})((function(e){var t=e.login,c=e.isAuthenticated,n=Object(a.useState)({username:"",password:""}),s=Object(R.a)(n,2),l=s[0],r=s[1],i=l.username,j=l.password,b=function(e){return r(Object(I.a)(Object(I.a)({},l),{},Object(D.a)({},e.target.name,e.target.value)))};return c?Object(L.jsx)(o.a,{to:"/dashboard"}):Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(G.a,{xs:12,lg:6}),Object(L.jsxs)(G.a,{xs:12,lg:6,style:{height:"91.5vh"},children:[Object(L.jsx)("h1",{style:{margin:"5vh 0vh 5vh 0vh"},children:"Login"}),Object(L.jsxs)(P.a,{onSubmit:function(e){return function(e){e.preventDefault(),t(i,j)}(e)},children:[Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(L.jsx)(P.a.Label,{children:"Username"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Username*",name:"username",onChange:function(e){return b(e)},value:i,required:!0}),Object(L.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicPassword",className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Password"}),Object(L.jsx)(P.a.Control,{type:"password",placeholder:"Password*",name:"password",onChange:function(e){return b(e)},value:j,minLength:"6",required:!0})]}),Object(L.jsx)(d.a,{variant:"primary",type:"submit",className:"mt-4",children:"Submit"})]})]})]})})})})),U=c(135);var W=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){var t=e.username,c=e.email,a=e.password;return function(e){console.log("username",t);var n=JSON.stringify({username:t,email:c,password:a});console.log(n),h.a.post("".concat("http://localhost:8000","/api/auth/register"),n,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:O,payload:t.data})})).catch((function(t){e({type:v})}))}}})((function(e){var t=e.register,c=e.isAuthenticated,n=Object(a.useState)({username:"",email:"",password:"",password2:""}),s=Object(R.a)(n,2),l=s[0],i=s[1],j=Object(a.useState)(!1),b=Object(R.a)(j,2),u=b[0],h=b[1],x=Object(a.useState)(!1),m=Object(R.a)(x,2),p=m[0],O=m[1],v=l.username,g=l.email,f=l.password,y=l.password2,k=function(e){return i(Object(I.a)(Object(I.a)({},l),{},Object(D.a)({},e.target.name,e.target.value)))};return c?Object(L.jsx)(o.a,{to:"/dashboard"}):Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(G.a,{xs:12,lg:6}),Object(L.jsxs)(G.a,{xs:12,lg:6,style:{height:"91.5vh"},children:[Object(L.jsx)("h1",{style:{margin:"5vh 0vh 3vh 0vh"},children:"Signup"}),Object(L.jsxs)("div",{children:[1==u?Object(L.jsx)(U.a,{variant:"success",children:"Account created successfully.Login to continue."}):null,1==p?Object(L.jsx)(U.a,{variant:"danger",children:"Password didn't match .Try again."}):null]}),Object(L.jsxs)(P.a,{onSubmit:function(e){return function(e){e.preventDefault(),f===y?(console.log(v,g,f),t({username:v,password:f,email:g}),h(!0)):O(!0)}(e)},children:[Object(L.jsxs)(P.a.Group,{controlId:"username",children:[Object(L.jsx)(P.a.Label,{children:"Username"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Username*",name:"username",onChange:function(e){return k(e)},value:v,required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"email",className:"mt-3",children:[Object(L.jsx)(P.a.Label,{children:"Email address"}),Object(L.jsx)(P.a.Control,{type:"email",placeholder:"Email*",name:"email",onChange:function(e){return k(e)},value:g,required:!0}),Object(L.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(L.jsxs)(P.a.Group,{controlId:"password",className:"mt-3",children:[Object(L.jsx)(P.a.Label,{children:"Password"}),Object(L.jsx)(P.a.Control,{type:"password",placeholder:"Password*",name:"password",onChange:function(e){return k(e)},value:f,minLength:"6",required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"re_password",className:"mt-3",children:[Object(L.jsx)(P.a.Label,{children:"Confirm Password"}),Object(L.jsx)(P.a.Control,{type:"password",placeholder:"Password*",name:"password2",onChange:function(e){return k(e)},value:y,minLength:"6",required:!0})]}),Object(L.jsx)(d.a,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]}),Object(L.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(L.jsx)(r.b,{to:"/login",style:{textDecoration:"none",fontWeight:"bolder"},children:"Login"})]})]})]})})})})),H=c(137),Y=c(141),J=c(51),V=c.n(J),M=c(52),K=c.n(M);var Q=Object(i.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth,c=(t.isAuthenticated,t.user),n=t.token,s=Object(a.useState)([]),l=Object(R.a)(s,2),o=l[0],i=l[1],j=Object(a.useState)(!0),b=Object(R.a)(j,2),u=b[0],x=b[1],m=Object(a.useState)([]),p=Object(R.a)(m,2),O=p[0],v=p[1];Object(a.useEffect)((function(){var e={headers:{"content-type":"application/json",Authorization:"Token ".concat(n)}};h.a.get("".concat("http://localhost:8000","/posts/dashboard/"),e).then((function(e){console.log(e.data),i(e.data),x(!1),h.a.get("".concat("http://localhost:8000","/user/profile/").concat(c.id,"/")).then((function(e){v(e.data)})).catch((function(e){return console.log("profile doesnot exit")}))}))}),[]);var g=Object(a.useState)(!1),f=Object(R.a)(g,2),y=f[0],k=f[1],w=function(){return k(!1)};return Object(L.jsxs)("div",{style:{marginBottom:100},children:[Object(L.jsx)("h2",{className:"text-center my-4 text-capitalize",children:c?Object(L.jsxs)("div",{children:["Welcome back! ",Object(L.jsxs)("span",{className:"text-capitalize text-primary",children:[" ",c.username," "]})]}):null}),Object(L.jsx)("div",{style:{textAlign:"center",marginTop:30},children:1==u?Object(L.jsx)(K.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):null}),Object(L.jsxs)(E.a,{children:[void 0==O.image?null:Object(L.jsxs)(q.a,{style:{borderRadius:"10px",overflow:"hidden",boxShadow:"5px 0 15px rgb(0 0 0 / 2)"},children:[Object(L.jsxs)(G.a,{lg:6,xs:12,className:"text-center",children:[Object(L.jsx)("img",{variant:"top",src:"".concat("http://localhost:8000")+O.image,style:{marginTop:"15vh",height:280,width:"50%",borderRadius:"100%"}}),Object(L.jsx)("div",{style:{marginTop:100},children:Object(L.jsx)(r.b,{to:"/profile/",children:Object(L.jsx)(d.a,{className:"btn btn-primary",children:"Edit Profile"})})})]}),Object(L.jsxs)(G.a,{lg:6,xs:12,style:{color:"#c7c9d3",paddingBottom:30,padding:20},children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{style:{marginTop:50,marginBottom:15},children:O.name}),Object(L.jsx)("p",{style:{marginTop:10},children:O.college}),Object(L.jsx)("p",{style:{marginBottom:30,marginTop:-15},children:O.city})]}),Object(L.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"40%"},children:[Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:O.facebook,children:Object(L.jsx)("i",{class:"fab fa-facebook-square",style:{fontSize:35}})})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{children:Object(L.jsx)("i",{class:"fab fa-linkedin",style:{fontSize:35}})})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{children:Object(L.jsx)("i",{class:"fab fa-instagram",style:{fontSize:35}})})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{children:Object(L.jsx)("i",{class:"fab fa-twitter-square",style:{fontSize:35}})})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{style:{marginTop:30,marginBottom:30},children:"About"}),Object(L.jsxs)("p",{style:{marginBottom:30,marginTop:-15},children:["Skills: ",O.skills]}),Object(L.jsxs)("p",{children:["fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",O.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",O.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",O.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",O.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",O.bio]})]})]})]}),Object(L.jsxs)(H.a,{show:y,onHide:w,centered:!0,children:[Object(L.jsx)(H.a.Header,{children:Object(L.jsx)(H.a.Title,{children:"Deletion Confirm"})}),Object(L.jsx)(H.a.Body,{children:"Your post deleted Successfully.Please refresh your page."}),Object(L.jsx)(H.a.Footer,{children:Object(L.jsx)(d.a,{variant:"primary",onClick:w,children:"Close"})})]}),Object(L.jsxs)(q.a,{children:[Object(L.jsx)("div",{style:{padding:30},children:Object(L.jsx)("h2",{className:"text-center",children:"Post created by you"})}),o.map((function(e){return Object(L.jsx)(G.a,{lg:4,xs:12,className:"my-3",children:Object(L.jsxs)(Y.a,{style:{padding:0,margin:0,borderRadius:"10px",overflow:"hidden",boxShadow:"5px 0 15px rgb(0 0 0 / 2",outline:"none",border:"none"},children:[Object(L.jsx)(Y.a.Img,{variant:"top",src:"".concat("http://localhost:8000")+e.image,style:{height:200}}),Object(L.jsxs)(Y.a.Body,{style:{background:"#2c303a",color:"#c7c9d3"},children:[Object(L.jsx)(Y.a.Title,{style:{width:"max-content"},children:e.title}),Object(L.jsx)("div",{style:{height:50,overflow:"hidden"},children:Object(L.jsxs)(Y.a.Text,{children:["fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",e.content]})})]}),Object(L.jsx)(Y.a.Footer,{style:{background:"#2c303a",color:"#c7c9d3",display:"flex",justifyContent:"space-between"},children:Object(L.jsxs)("small",{className:"text-muted",children:["Last updated ",V()(e.created_at).fromNow()]})}),Object(L.jsxs)(Y.a.Footer,{style:{background:"#2c303a",color:"#c7c9d3",display:"flex",justifyContent:"space-between"},children:[Object(L.jsx)(r.b,{to:"/details/".concat(e.id),children:Object(L.jsx)(d.a,{className:"btn",variant:"outline-success",style:{float:"left",borderRadius:20,paddingTop:5,paddingBottom:5},children:"View Post "})}),Object(L.jsx)(d.a,{className:"btn",variant:"outline-danger",onClick:function(){return function(e){var t={headers:{"content-type":"application/json",Authorization:"Token ".concat(n)}};h.a.delete("".concat("http://localhost:8000","/posts/delete/").concat(e,"/"),t).then((function(e){console.log("Deleted Successfully"),k(!0)}))}(e.id)},style:{float:"right",borderRadius:20,paddingTop:5,paddingBottom:5},children:" Delete Post "})]})]})})}))]})]})]})}));var X=function(){return Object(L.jsx)("div",{style:{marginBottom:50},children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)("div",{style:{marginTop:20,marginBottom:30},children:Object(L.jsx)("h1",{className:"text-center",children:"About Us"})}),Object(L.jsx)(G.a,{lg:6,xs:12,children:Object(L.jsx)("div",{className:"text-center",children:Object(L.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/09/09/01/01/tree-2730787_960_720.png",style:{height:"60vh",width:"90%"}})})}),Object(L.jsx)(G.a,{lg:6,xs:12,children:Object(L.jsx)("div",{style:{marginTop:50},children:Object(L.jsx)("q",{children:"Lorem iqsum dolor sit amet consectetur, adipisicing elit. Possimus magni illo, asperiores reprehenderit unde, incidunt placeat sequi quae, saepe sint iusto assumenda. Facilis eaque debitis, sapiente officia incidunt similique error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eligendi quo sit nihil vel consequatur officiis quam! Ipsa hic enim veritatis suscipit ullam cupiditate odio unde dolorem tempora blanditiis! Voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde, ea quisquam reprehenderit dolor est deleniti doloribus eaque veritatis omnis assumenda fuga adipisci in vel? Officia laudantium voluptatem vero ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit iste neque dicta quae velit nobis laborum reprehenderit illum et numquam, unde quo. Officiis quas officia neque excepturi, laboriosam similique."})})})]})})})};var Z=function(){var e=Object(a.useState)(!1),t=Object(R.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({name:"",email:"",subject:"",message:""}),l=Object(R.a)(s,2),r=l[0],o=l[1],i=r.name,j=r.email,b=r.subject,u=r.message,x=function(e){return o(Object(I.a)(Object(I.a)({},r),{},Object(D.a)({},e.target.name,e.target.value)))};return Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(G.a,{xs:12,lg:6,children:Object(L.jsx)("div",{className:"text-center",children:Object(L.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_960_720.jpg",style:{width:"100%",marginTop:120}})})}),Object(L.jsxs)(G.a,{xs:12,lg:6,style:{height:"91.5vh"},children:[Object(L.jsx)("h2",{style:{margin:"3vh 0vh 3vh 0vh"},children:"Send message to Us"}),1==c?Object(L.jsx)(U.a,{variant:"success",children:"Your message send successfully"}):null,Object(L.jsxs)(P.a,{onSubmit:function(e){return function(e){e.preventDefault(),h.a.post("".concat("http://localhost:8000","/contacts/send/"),r,{headers:{"content-type":"application/json"}}).then((function(e){console.log("post seccessfully"),n(!0),o({name:"",email:"",subject:"",message:""})})).catch((function(e){return console.log(e)}))}(e)},children:[Object(L.jsxs)(P.a.Group,{controlId:"name",children:[Object(L.jsx)(P.a.Label,{children:"Name"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Enter Name",name:"name",value:i,onChange:function(e){return x(e)},required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"email",className:"mt-3",children:[Object(L.jsx)(P.a.Label,{children:"Email"}),Object(L.jsx)(P.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:j,onChange:function(e){return x(e)},required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"subject",className:"mt-3",children:[Object(L.jsx)(P.a.Label,{children:"Subject"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Enter subject",name:"subject",value:b,onChange:function(e){return x(e)},required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"message",className:"mt-3",children:[Object(L.jsx)(P.a.Label,{children:"Write your messages"}),Object(L.jsx)(P.a.Control,{as:"textarea",rows:5,placeholder:"Write something .....",name:"message",value:u,onChange:function(e){return x(e)},required:!0})]}),Object(L.jsx)(d.a,{variant:"primary",type:"submit",className:"mt-4",children:"Submit"})]})]})]})})})};var $=c(136),ee=c(71);var te=function(){var e=Object(a.useState)([]),t=Object(R.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),l=Object(R.a)(s,2),o=l[0],i=l[1];Object(a.useEffect)((function(){h.a.get("".concat("http://localhost:8000","/posts/")).then((function(e){console.log(e.data),n(e.data),i(!1)}))}),[]);var j=Object(a.useState)(""),b=Object(R.a)(j,2),u=b[0],x=b[1];return Object(L.jsx)("div",{children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)("div",{style:{marginTop:40},children:Object(L.jsxs)($.a,{className:"mb-3",style:{height:50},children:[Object(L.jsx)(ee.a,{style:{borderBottomLeftRadius:50,borderTopLeftRadius:50},placeholder:"Search...",onChange:function(e){return x(e.target.value)},value:u}),Object(L.jsx)($.a.Append,{children:Object(L.jsx)($.a.Text,{style:{padding:15,borderBottomRightRadius:50,borderTopRightRadius:50,background:"blue",color:"white",fontWeight:"bolder"},children:"Search"})})]})}),Object(L.jsx)("div",{style:{textAlign:"center",marginTop:30},children:1==o?Object(L.jsx)(K.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):null}),Object(L.jsx)(q.a,{children:c.filter((function(e){return" "==u||e.title.toLowerCase().includes(u.toString().toLowerCase())?e:void 0})).map((function(e){return Object(L.jsx)(G.a,{lg:4,xs:12,className:"my-3",children:Object(L.jsxs)(Y.a,{style:{padding:0,margin:0,borderRadius:"10px",overflow:"hidden",boxShadow:"5px 0 15px rgb(0 0 0 / 2",outline:"none",border:"none",background:"#2c303a",color:"#c7c9d3"},children:[Object(L.jsx)(Y.a.Img,{variant:"top",src:"".concat("http://localhost:8000")+e.image,style:{height:200}}),Object(L.jsxs)(Y.a.Body,{children:[Object(L.jsx)("div",{style:{marginRight:10,overflow:"hidden"},children:Object(L.jsx)(Y.a.Title,{style:{width:"max-content"},children:e.title})}),Object(L.jsx)("div",{style:{height:50,overflow:"hidden"},children:Object(L.jsxs)(Y.a.Text,{children:["fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",e.content]})})]}),Object(L.jsxs)(Y.a.Footer,{style:{background:"#2c303a",color:"#c7c9d3"},children:[Object(L.jsxs)("small",{className:"text-muted",children:["Last updated ",V()(e.created_at).fromNow()]}),Object(L.jsx)(r.b,{to:"/details/".concat(e.id),children:Object(L.jsx)(d.a,{className:"btn ",style:{float:"right",background:"#444857",color:"#c7c9d3",outline:"none",borderRadius:20,paddingTop:5,paddingBottom:5},children:"View more"})})]})]})})}))})]})})};var ce=Object(i.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth,c=Object(a.useState)({title:"",content:""}),n=Object(R.a)(c,2),s=n[0],l=n[1],r=s.title,o=s.content,i=function(e){return l(Object(I.a)(Object(I.a)({},s),{},Object(D.a)({},e.target.name,e.target.value)))},j=Object(a.useState)(null),b=Object(R.a)(j,2),u=b[0],x=b[1],m=Object(a.useState)(!1),p=Object(R.a)(m,2),O=p[0],v=p[1],g=(t.isAuthenticated,t.user,t.token);return Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(G.a,{xs:12,lg:6,children:Object(L.jsx)("img",{src:"https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png",style:{width:"100%",marginTop:80,height:"70vh"}})}),Object(L.jsxs)(G.a,{xs:12,lg:6,children:[Object(L.jsx)("h1",{style:{margin:"5vh 0vh 5vh 0vh"},children:"Create Your Post"}),1==O?Object(L.jsx)(U.a,{variant:"success",children:"Your post created successfully"}):null,Object(L.jsxs)(P.a,{onSubmit:function(e){return function(e){e.preventDefault();var t=new FormData;t.append("image",u,u.name),t.append("title",r),t.append("content",o);var c={headers:{"content-type":"multipart/form-data",Authorization:"Token ".concat(g)}};h.a.post("".concat("http://localhost:8000","/posts/create/"),t,c).then((function(e){console.log("post seccessfully"),v(!0),l({title:"",content:""})})).catch((function(e){return console.log(e)}))}(e)},children:[Object(L.jsxs)(P.a.Group,{controlId:"title",children:[Object(L.jsx)(P.a.Label,{children:"Heading"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Enter heading",name:"title",onChange:function(e){return i(e)},value:r,required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"content",className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Details"}),Object(L.jsx)(P.a.Control,{as:"textarea",rows:6,placeholder:"Write something .....",name:"content",onChange:function(e){return i(e)},value:o,required:!0})]}),Object(L.jsx)(P.a.Group,{className:"mt-4",children:Object(L.jsx)(P.a.File,{id:"custom-file",custom:!0,accept:"image/png, image/jpeg",onChange:function(e){x(e.target.files[0])}})}),Object(L.jsx)(d.a,{variant:"primary",type:"submit",className:"mt-4",children:"Submit"})]})]})]})})})}));function ae(e){e.props;var t=Object(o.f)().id;console.log(t);var c=Object(a.useState)([]),n=Object(R.a)(c,2),s=n[0],l=n[1],r=Object(a.useState)([]),i=Object(R.a)(r,2),j=i[0],d=i[1];return Object(a.useEffect)((function(){h.a.get("".concat("http://localhost:8000","/posts/details/").concat(t,"/")).then((function(e){console.log(e.data),l(e.data),h.a.get("".concat("http://localhost:8000","/user/profile/").concat(e.data.user,"/")).then((function(e){d(e.data)})).catch((function(e){return console.log("profile doesnot exit")}))})).catch((function(e){return console.log(e)}))}),[]),Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(q.a,{style:{overflow:"hidden",marginTop:50,marginBottom:50},children:[Object(L.jsxs)(G.a,{xs:12,lg:6,style:{borderRadius:"10px",overflow:"hidden",boxShadow:"5px 0 15px rgb(0 0 0 / 2)"},children:[Object(L.jsx)("img",{variant:"top",src:"".concat("http://localhost:8000")+s.image,style:{marginTop:40,height:400,width:"100%"}}),Object(L.jsxs)("div",{style:{color:"#c7c9d3",paddingBottom:30},children:[Object(L.jsx)("h3",{className:"text-center",style:{marginTop:30,marginBottom:30,textAlign:"center"},children:s.title}),Object(L.jsx)("div",{children:Object(L.jsxs)("p",{children:["fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",s.content,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",s.content,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",s.content]})})]})]}),Object(L.jsx)(G.a,{xs:12,lg:6,children:void 0==j.image?null:Object(L.jsxs)("div",{style:{borderRadius:"10px",overflow:"hidden",boxShadow:"5px 0 15px rgb(0 0 0 / 2)"},children:[Object(L.jsx)("div",{className:"text-center",style:{background:"blue",paddingTop:80},children:Object(L.jsx)("img",{variant:"top",src:"".concat("http://localhost:8000")+j.image,style:{marginBottom:-140,height:280,width:"50%",borderRadius:"100%"}})}),Object(L.jsxs)("div",{style:{color:"#c7c9d3",paddingBottom:30,padding:20,marginTop:150},children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{style:{marginTop:50,marginBottom:15},children:j.name}),Object(L.jsx)("p",{style:{marginTop:10},children:j.college}),Object(L.jsx)("p",{style:{marginBottom:30,marginTop:-15},children:j.city})]}),Object(L.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"40%"},children:[Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:j.facebook,children:Object(L.jsx)("i",{class:"fab fa-facebook-square",style:{fontSize:35}})})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{children:Object(L.jsx)("i",{class:"fab fa-linkedin",style:{fontSize:35}})})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{children:Object(L.jsx)("i",{class:"fab fa-instagram",style:{fontSize:35}})})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{children:Object(L.jsx)("i",{class:"fab fa-twitter-square",style:{fontSize:35}})})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{style:{marginTop:30,marginBottom:30},children:"About"}),Object(L.jsxs)("p",{children:["fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",j.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",j.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",j.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",j.bio,"fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v ",j.bio]})]})]})]})})]})})})}var ne=Object(i.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth,c=(t.isAuthenticated,t.user),n=t.token,s=Object(a.useState)([]),l=Object(R.a)(s,2),r=(l[0],l[1],Object(a.useState)({name:"",college:"",city:"",skills:"",bio:"",facebook:"",instagram:"",linkedin:"",twitter:""})),o=Object(R.a)(r,2),i=o[0],j=o[1],b=Object(a.useState)(null),u=Object(R.a)(b,2),x=u[0],m=u[1],p=Object(a.useState)(!1),O=Object(R.a)(p,2),v=O[0],g=O[1],f=Object(a.useState)(null),y=Object(R.a)(f,2),k=y[0],w=y[1];console.log("ID OF EDIT PROFILE",k),console.log(x),console.log(v),Object(a.useEffect)((function(){h.a.get("".concat("http://localhost:8000","/user/profile/").concat(c.id,"/")).then((function(e){console.log("DATA:",e.data),w(e.data.id),m(e.data.image),j({name:e.data.name,college:e.data.college,city:e.data.city,skills:e.data.skills,bio:e.data.bio,facebook:e.data.facebook,instagram:e.data.instagram,linkedin:e.data.linkedin,twitter:e.data.twitter})})).catch((function(e){g(!0),console.log("profile doesn't exit")}))}),[]);var C=i.name,S=i.college,N=i.city,T=i.skills,z=i.bio,A=i.facebook,B=i.instagram,F=i.linkedin,_=i.twitter,W=function(e){return j(Object(I.a)(Object(I.a)({},i),{},Object(D.a)({},e.target.name,e.target.value)))},H=Object(a.useState)(!1),Y=Object(R.a)(H,2),J=Y[0],V=Y[1];return Object(L.jsx)("div",{children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)("div",{children:Object(L.jsx)("h3",{className:"text-center my-4",children:"Create your profile here"})}),Object(L.jsxs)("div",{children:[1==J?Object(L.jsx)(U.a,{variant:"success",children:"Your profile created successfully"}):null,Object(L.jsxs)(P.a,{onSubmit:function(e){return function(e){e.preventDefault(),console.log(C,S,N,T,z,A,B,F,_,x);var t=new FormData;t.append("image",x),t.append("name",C),t.append("college",S),t.append("city",N),t.append("skills",T),t.append("bio",z),t.append("facebook",A),t.append("instagram",B),t.append("linkedin",F),t.append("twitter",_);var c={headers:{"content-type":"multipart/form-data",Authorization:"Token ".concat(n)}};1==v?h.a.post("".concat("http://localhost:8000","/user/createprofile/"),t,c).then((function(e){console.log("Profile created successfully"),V(!0)})).catch((function(e){return console.log(e)})):(console.log("Put method working"),h.a.post("".concat("http://localhost:8000","/user/editprofile/").concat(k),t,c).then((function(e){console.log("Profile updated successfully"),V(!0)})).catch((function(e){return console.log("Front end error",e)})))}(e)},children:[Object(L.jsxs)(q.a,{children:[Object(L.jsxs)(G.a,{xs:12,lg:6,children:[Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Full Name"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Full Name*",name:"name",onChange:function(e){return W(e)},value:C,required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"College Name"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"College Name*",name:"college",onChange:function(e){return W(e)},value:S,required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"City"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"City*",name:"city",onChange:function(e){return W(e)},value:N})]}),Object(L.jsxs)(P.a.Group,{className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Upload Profile Image"}),Object(L.jsx)(P.a.File,{id:"custom-file",custom:!0,onChange:function(e){m(e.target.files[0])}})]}),Object(L.jsxs)(P.a.Group,{controlId:"content",className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Skills"}),Object(L.jsx)(P.a.Control,{as:"textarea",rows:6,placeholder:"Write your skills .....",name:"skills",onChange:function(e){return W(e)},value:T})]})]}),Object(L.jsxs)(G.a,{xs:12,lg:6,children:[Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Facebook"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Facebook Url*",name:"facebook",onChange:function(e){return W(e)},value:A})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Instagram"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Instagram Url*",name:"instagram",onChange:function(e){return W(e)},value:B})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"LinkedIn"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"LinkedIn Url*",name:"linkedin",onChange:function(e){return W(e)},value:F})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Twitter"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Twitter Url*",name:"twitter",onChange:function(e){return W(e)},value:_})]}),Object(L.jsxs)(P.a.Group,{controlId:"content",className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Details"}),Object(L.jsx)(P.a.Control,{as:"textarea",rows:6,placeholder:"Write something about yourself .....",name:"bio",onChange:function(e){return W(e)},value:z,required:!0})]})]})]}),Object(L.jsx)(d.a,{variant:"primary",type:"submit",className:"my-3",children:"Submit"})]})]})]})})}));var se=Object(i.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth,c=(t.isAuthenticated,t.user,t.token),n=Object(a.useState)([]),s=Object(R.a)(n,2),l=(s[0],s[1],Object(a.useState)({name:"",college:"",city:"",skills:"",bio:"",facebook:"",instagram:"",linkedin:"",twitter:""})),r=Object(R.a)(l,2),o=r[0],i=r[1],j=o.name,b=o.college,u=o.city,x=o.skills,m=o.bio,p=o.facebook,O=o.instagram,v=o.linkedin,g=o.twitter,f=function(e){return i(Object(I.a)(Object(I.a)({},o),{},Object(D.a)({},e.target.name,e.target.value)))},y=Object(a.useState)(null),k=Object(R.a)(y,2),w=k[0],C=k[1],S=Object(a.useState)(!1),N=Object(R.a)(S,2),T=N[0],z=N[1];return Object(L.jsx)("div",{children:Object(L.jsxs)(E.a,{children:[Object(L.jsx)("div",{children:Object(L.jsx)("h3",{className:"text-center my-4",children:"Edit your profile here"})}),Object(L.jsxs)("div",{children:[1==T?Object(L.jsx)(U.a,{variant:"success",children:"Your post created successfully"}):null,Object(L.jsxs)(P.a,{onSubmit:function(e){return function(e){e.preventDefault(),console.log(j,b,u,x,m,p,O,v,g);var t=new FormData;t.append("image",w,w.name),t.append("name",j),t.append("college",b),t.append("city",u),t.append("skills",x),t.append("bio",m),t.append("facebook",p),t.append("instagram",O),t.append("linkedin",v),t.append("twitter",g);var a={headers:{"content-type":"multipart/form-data",Authorization:"Token ".concat(c)}};h.a.post("".concat("http://localhost:8000","/user/createprofile/"),t,a).then((function(e){console.log("post seccessfully"),z(!0)})).catch((function(e){return console.log(e)}))}(e)},children:[Object(L.jsxs)(q.a,{children:[Object(L.jsxs)(G.a,{xs:12,lg:6,children:[Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Full Name"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Full Name*",name:"name",onChange:function(e){return f(e)},value:j,required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"College Name"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"College Name*",name:"college",onChange:function(e){return f(e)},value:b,required:!0})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"City"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"City*",name:"city",onChange:function(e){return f(e)},value:u})]}),Object(L.jsxs)(P.a.Group,{className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Upload Profile Image"}),Object(L.jsx)(P.a.File,{id:"custom-file",custom:!0,accept:"image/png, image/jpeg",onChange:function(e){C(e.target.files[0])}})]}),Object(L.jsxs)(P.a.Group,{controlId:"content",className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Skills"}),Object(L.jsx)(P.a.Control,{as:"textarea",rows:6,placeholder:"Write your skills .....",name:"skills",onChange:function(e){return f(e)},value:x})]})]}),Object(L.jsxs)(G.a,{xs:12,lg:6,children:[Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Facebook"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Facebook Url*",name:"facebook",onChange:function(e){return f(e)},value:p})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Instagram"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Instagram Url*",name:"instagram",onChange:function(e){return f(e)},value:O})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"LinkedIn"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"LinkedIn Url*",name:"linkedin",onChange:function(e){return f(e)},value:v})]}),Object(L.jsxs)(P.a.Group,{controlId:"formBasicEmail",className:"my-3",children:[Object(L.jsx)(P.a.Label,{children:"Twitter"}),Object(L.jsx)(P.a.Control,{type:"text",placeholder:"Twitter Url*",name:"twitter",onChange:function(e){return f(e)},value:g})]}),Object(L.jsxs)(P.a.Group,{controlId:"content",className:"mt-4",children:[Object(L.jsx)(P.a.Label,{children:"Details"}),Object(L.jsx)(P.a.Control,{as:"textarea",rows:6,placeholder:"Write something about yourself .....",name:"bio",onChange:function(e){return f(e)},value:m,required:!0})]})]})]}),Object(L.jsx)(d.a,{variant:"primary",type:"submit",className:"my-3",children:"Submit"})]})]})]})})})),le=c(36),re=c(73),oe=c(74),ie={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},je=c(75),de={posts:[]},be=Object(le.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(I.a)(Object(I.a)({},e),{},{posts:t.payload});case C:return Object(I.a)(Object(I.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});case S:return Object(I.a)(Object(I.a)({},e),{},{posts:[].concat(Object(je.a)(e.posts),[t.payload])});case w:return Object(I.a)(Object(I.a)({},e),{},{posts:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case f:return Object(I.a)(Object(I.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case x:case O:return localStorage.setItem("token",t.payload.token),Object(I.a)(Object(I.a)(Object(I.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case y:case m:case p:case v:return localStorage.removeItem("token"),Object(I.a)(Object(I.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),ue=[oe.a],he=Object(le.createStore)(be,{},Object(re.composeWithDevTools)(le.applyMiddleware.apply(void 0,ue)));var xe=function(){return Object(a.useEffect)((function(){he.dispatch((function(e,t){e({type:g}),h.a.get("".concat("http://localhost:8000","/api/auth/user"),N(t)).then((function(t){e({type:f,payload:t.data})})).catch((function(t){e({type:y})}))}))}),[]),Object(L.jsx)(i.a,{store:he,children:Object(L.jsx)(r.a,{children:Object(L.jsxs)(z,{children:[Object(L.jsx)(o.b,{exact:!0,path:"/",component:F}),Object(L.jsx)(o.b,{exact:!0,path:"/about",component:X}),Object(L.jsx)(o.b,{exact:!0,path:"/contact",component:Z}),Object(L.jsx)(o.b,{exact:!0,path:"/post",component:te}),Object(L.jsx)(B,{exact:!0,path:"/dashboard",component:Q}),Object(L.jsx)(o.b,{exact:!0,path:"/signup",component:W}),Object(L.jsx)(o.b,{exact:!0,path:"/login",component:_}),Object(L.jsx)(o.b,{exact:!0,path:"/create/post",component:ce}),Object(L.jsx)(o.b,{exact:!0,path:"/details/:id",component:ae}),Object(L.jsx)(o.b,{exact:!0,path:"/profile/",component:ne}),Object(L.jsx)(o.b,{exact:!0,path:"/edit/profile/",component:se})]})})})};l.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(xe,{})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.cc1a5c71.chunk.js.map