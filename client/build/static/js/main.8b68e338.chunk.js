(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(14),A=c.n(s),r=c(7),i=c(6),o=c(12),j=c.n(o),l=c(15),u=c(17),h=c(2),d=c(23),g=c(8),b=c(84),E="SET_ALERT",B="REMOVE_ALERT",O="REGISTER_SUCCESS",m="USER_LOADED",x="AUTH_ERROR",p="LOGIN_SUCCESS",C="LOGOUT",w="GET_PROFILE",I="GET_PROFILES",Q="GET_REPOS",f="NO_REPOS",F="UPDATE_PROFILE",G="CLEAR_PROFILE",N="PROFILE_ERROR",D="ACCOUNT_DELETED",S="GET_POSTS",U="GET_POST",y="POST_ERROR",R="UPDATE_LIKES",v="DELETE_POST",k="ADD_POST",Y="ADD_COMMENT",M="REMOVE_COMMENT",H=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(a){var n=Object(b.a)();a({type:E,payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return a({type:B,payload:n})}),c)}},L=c(40),K=c.n(L),J=c(18),Z=c(41),W=c(42),T=c(24),P=[];var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case E:return[].concat(Object(T.a)(e),[a]);case B:return e.filter((function(e){return e.id!==a}));default:return e}},V={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case m:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case O:case p:return Object(h.a)(Object(h.a)(Object(h.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case D:return Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});case x:case C:return Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},X={profile:null,profiles:[],repos:[],loading:!0,error:{}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case w:case F:return Object(h.a)(Object(h.a)({},e),{},{profile:a,loading:!1});case I:return Object(h.a)(Object(h.a)({},e),{},{profiles:a,loading:!1});case N:return Object(h.a)(Object(h.a)({},e),{},{error:a,loading:!1,profile:null});case G:return Object(h.a)(Object(h.a)({},e),{},{profile:null,repos:[]});case Q:return Object(h.a)(Object(h.a)({},e),{},{repos:a,loading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{repos:[]});default:return e}},$={posts:[],post:null,loading:!0,error:{}};var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case S:return Object(h.a)(Object(h.a)({},e),{},{posts:a,loading:!1});case U:return Object(h.a)(Object(h.a)({},e),{},{post:a,loading:!1});case k:return Object(h.a)(Object(h.a)({},e),{},{posts:[a].concat(Object(T.a)(e.posts)),loading:!1});case v:return Object(h.a)(Object(h.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==a})),loading:!1});case y:return Object(h.a)(Object(h.a)({},e),{},{error:a,loading:!1});case R:return Object(h.a)(Object(h.a)({},e),{},{posts:e.posts.map((function(e){return e._id===a.id?Object(h.a)(Object(h.a)({},e),{},{likes:a.likes}):e})),loading:!1});case Y:return Object(h.a)(Object(h.a)({},e),{},{post:Object(h.a)(Object(h.a)({},e.post),{},{comments:a}),loading:!1});case M:return Object(h.a)(Object(h.a)({},e),{},{post:Object(h.a)(Object(h.a)({},e.post),{},{comments:e.post.comments.filter((function(e){return e._id!==a}))}),loading:!1});default:return e}},te=Object(J.combineReducers)({alert:q,auth:z,profile:_,post:ee}),ce=function(e){e?(ie.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete ie.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},ae=[W.a],ne=Object(J.createStore)(te,{},Object(Z.composeWithDevTools)(J.applyMiddleware.apply(void 0,ae))),se=ne.getState();ne.subscribe((function(){var e=se;if(se=ne.getState(),e.auth.token!==se.auth.token){var t=se.auth.token;ce(t)}}));var Ae=ne,re=K.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});re.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&Ae.dispatch({type:C}),Promise.reject(e)}));var ie=re,oe=function(){return function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.get("/auth");case 3:c=e.sent,t({type:m,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:x});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},je=c(0),le=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:H,register:function(e){return function(){var t=Object(l.a)(j.a.mark((function t(c){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ie.post("/users",e);case 3:a=t.sent,c({type:O,payload:a.data}),c(oe()),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(n=t.t0.response.data.errors)&&n.forEach((function(e){return c(H(e.msg,"danger"))})),c({type:"REGISTER_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,c=e.register,n=e.isAuthenticated,s=Object(a.useState)({name:"",email:"",password:"",password2:""}),A=Object(d.a)(s,2),o=A[0],g=A[1],b=o.name,E=o.email,B=o.password,O=o.password2,m=function(e){return g(Object(h.a)(Object(h.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(l.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),B!==O?t("Passwords do not match","danger"):c({name:b,email:E,password:B});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(je.jsx)(i.a,{to:"/dashboard"}):Object(je.jsxs)(a.Fragment,{children:[Object(je.jsx)("h1",{className:"large text-primary",children:"Sign Up"}),Object(je.jsxs)("p",{className:"lead",children:[Object(je.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(je.jsxs)("form",{className:"form",onSubmit:x,children:[Object(je.jsx)("div",{className:"form-group",children:Object(je.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:b,onChange:m})}),Object(je.jsxs)("div",{className:"form-group",children:[Object(je.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:E,onChange:m}),Object(je.jsx)("small",{className:"form-text",children:"This site uses Gravatar so if you want a profile image, use a Gravatar email"})]}),Object(je.jsx)("div",{className:"form-group",children:Object(je.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:B,onChange:m})}),Object(je.jsx)("div",{className:"form-group",children:Object(je.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:O,onChange:m})}),Object(je.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Register"})]}),Object(je.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(je.jsx)(r.b,{to:"/login",children:"Sign In"})]})]})})),ue=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{login:function(e,t){return function(){var c=Object(l.a)(j.a.mark((function c(a){var n,s,A;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n={email:e,password:t},c.prev=1,c.next=4,ie.post("/auth",n);case 4:s=c.sent,a({type:p,payload:s.data}),a(oe()),c.next=14;break;case 9:c.prev=9,c.t0=c.catch(1),(A=c.t0.response.data.errors)&&A.forEach((function(e){return a(H(e.msg,"danger"))})),a({type:"LOGIN_FAIL"});case 14:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.login,c=e.isAuthenticated,n=e.user,s=Object(a.useState)({email:"",password:""}),A=Object(d.a)(s,2),o=A[0],j=A[1],l=o.email,g=o.password,b=function(e){return j(Object(h.a)(Object(h.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))};return c&&n?Object(je.jsx)(i.a,{to:"/home/"}):Object(je.jsxs)(a.Fragment,{children:[Object(je.jsx)("h1",{className:"large text-primary",children:"Sign In"}),Object(je.jsxs)("p",{className:"lead",children:[Object(je.jsx)("i",{className:"fas fa-user"})," Sign Into Your Account"]}),Object(je.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(l,g)},children:[Object(je.jsx)("div",{className:"form-group",children:Object(je.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:l,onChange:b,required:!0})}),Object(je.jsx)("div",{className:"form-group",children:Object(je.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:g,onChange:b,minLength:"6"})}),Object(je.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Login"})]}),Object(je.jsxs)("p",{className:"my-1",children:["Don't have an account? ",Object(je.jsx)(r.b,{to:"/register",children:"Sign Up"})]})]})})),he=c(16),de=(c(79),Object(g.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return n.a.useEffect((function(){t.forEach((function(e){switch(e.alertType){case"info":he.NotificationManager.info("Info message",e.msg);break;case"success":he.NotificationManager.success("Success message",e.msg);break;case"warning":case"danger":he.NotificationManager.warning("Warning message",e.msg);break;case"error":he.NotificationManager.error("Error message",e.msg)}}))}),[t]),Object(je.jsx)("div",{children:Object(je.jsx)(he.NotificationContainer,{})})}))),ge=function(){return Object(je.jsxs)(a.Fragment,{children:[Object(je.jsxs)("h1",{className:"x-large text-primary",children:[Object(je.jsx)("i",{className:"fas fa-exclamation-triangle"})," Page Not Found"]}),Object(je.jsx)("p",{className:"large",children:"Sorry, this page does not exist"})]})},be=c(44),Ee=function(){return Object(je.jsx)(a.Fragment,{children:Object(je.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},Be=["component","auth"],Oe=Object(g.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,c=e.auth,a=c.isAuthenticated,n=c.loading,s=Object(be.a)(e,Be);return Object(je.jsx)(i.b,Object(h.a)(Object(h.a)({},s),{},{render:function(e){return n?Object(je.jsx)(Ee,{}):a?Object(je.jsx)(t,Object(h.a)({},e)):Object(je.jsx)(i.a,{to:"/login"})}}))})),me=c.p+"static/media/menu-logo.5e53ae38.svg",xe=Object(g.b)((function(e){return{user:e.auth.user}}),{logout:function(){return{type:C}}})((function(e){var t=e.logout,c=Object(i.g)(),a=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.push("/home");case 2:return e.next=4,c.push("/home/".concat(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(je.jsx)("div",{className:"col-md-2 p-2 sidebar",children:Object(je.jsxs)("div",{className:"container-fluid",children:[Object(je.jsxs)("div",{className:"row my-4 mx-2 h3 menuItem",onClick:function(){return a("")},children:[Object(je.jsx)("img",{src:me,alt:"MENULOGO",className:"pr-2",height:"30px"}),"InsuRon"]}),Object(je.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:"Liberty Mutual"}),Object(je.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:"State Farm"}),Object(je.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:"Nationwide"}),Object(je.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:"The Hartford"}),Object(je.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:"Progressive"}),Object(je.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:"Travelers"}),Object(je.jsx)("div",{className:"row mx-3 menuItem",onClick:t,style:{position:"absolute",bottom:"20px"},children:"\u2199 Sign Out"})]})})})),pe=c.p+"static/media/logo.94f944fc.svg",Ce=c.p+"static/media/alarm.c9e9bad9.svg",we=c.p+"static/media/userAvatar.e20ca47f.png",Ie=Object(g.b)((function(e){return{user:e.auth.user}}),{})((function(e){var t=e.user;return Object(je.jsxs)("div",{className:"m-3 adminHeader",children:[Object(je.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(je.jsx)("div",{className:"col-md-6 mr-auto mb-3",children:Object(je.jsx)(r.b,{to:"/",children:Object(je.jsx)("img",{src:pe,alt:"LOGO",width:"250px"})})}),Object(je.jsxs)("div",{className:"col-md-6 d-flex flex-row-reverse align-items-center",children:[Object(je.jsxs)("div",{children:[Object(je.jsx)("img",{src:Ce,alt:"ALARM",width:"22px",className:"mr-2"}),Object(je.jsx)("span",{className:"mr-2",children:t.name}),Object(je.jsx)("img",{src:t.avatar?t.avatar:we,alt:"AVATAR",className:"rounded-circle",width:"35px"})]}),Object(je.jsx)("div",{className:"mr-3",children:Object(je.jsx)("div",{style:{height:"30px",width:"180px",backgroundColor:"#E8E8E8",color:"#555"},children:Object(je.jsxs)("span",{className:"ml-2",children:[Object(je.jsx)("i",{className:"fa fa-search mt-2 mr-1"}),Object(je.jsx)("input",{placeholder:"Search",className:"headerInput"})]})})})]})]}),Object(je.jsxs)("div",{className:"customerTable table-responsive",children:[Object(je.jsxs)("table",{className:"table table-hover",children:[Object(je.jsx)("thead",{children:Object(je.jsxs)("tr",{children:[Object(je.jsx)("th",{children:"Policy Number"}),Object(je.jsx)("th",{children:"Company/Policyholder"}),Object(je.jsx)("th",{children:"Policy Premium"}),Object(je.jsx)("th",{children:"Next Due Date"}),Object(je.jsx)("th",{children:"Priority"})]})}),Object(je.jsxs)("tbody",{children:[Object(je.jsxs)("tr",{children:[Object(je.jsx)("td",{children:"E84142547102"}),Object(je.jsx)("td",{children:"CapStone, LLC"}),Object(je.jsx)("td",{children:"$2,540.96"}),Object(je.jsx)("td",{children:"08/24/2021"}),Object(je.jsx)("td",{children:Object(je.jsx)("button",{className:"btn btn-danger btn-sm",children:"HIGH"})})]}),Object(je.jsxs)("tr",{children:[Object(je.jsx)("td",{children:"E83451645694"}),Object(je.jsx)("td",{children:"Rick Anderson"}),Object(je.jsx)("td",{children:"$3,178.17"}),Object(je.jsx)("td",{children:"09/13/2021"}),Object(je.jsx)("td",{children:Object(je.jsx)("button",{className:"btn btn-warning btn-sm",children:"MED"})})]}),Object(je.jsxs)("tr",{children:[Object(je.jsx)("td",{children:"E83451645694"}),Object(je.jsx)("td",{children:"Ekindo Solutions, INC"}),Object(je.jsx)("td",{children:"$7,648.55"}),Object(je.jsx)("td",{children:"11/30/2021"}),Object(je.jsx)("td",{children:Object(je.jsx)("button",{className:"btn btn-success btn-sm",children:"LOW"})})]})]})]}),Object(je.jsxs)("div",{className:"d-flex align-items-center mx-3 my-2",children:[Object(je.jsx)("div",{className:"mr-auto addClient",children:"+ ADD CLIENT"}),Object(je.jsxs)("div",{className:"d-flex align-items-center pageControl",children:[Object(je.jsx)("div",{className:"mr-3",children:"1 - 10 OF 47"}),Object(je.jsxs)("div",{children:[Object(je.jsx)("i",{class:"fas fa-angle-double-left mr-2"}),Object(je.jsx)("i",{class:"fas fa-angle-double-right"})]})]})]})]})]})})),Qe=function(){return Object(je.jsx)("div",{className:"container-fluid bg-admin",children:Object(je.jsxs)("div",{className:"row",children:[Object(je.jsx)(xe,{}),Object(je.jsx)("div",{className:"col-md-10",children:Object(je.jsx)(r.a,{basename:"/home",children:Object(je.jsx)(Oe,{exact:!0,path:"",component:Ie})})})]})})},fe=function(){return Object(je.jsx)(je.Fragment,{children:"Customer Home"})},Fe=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){var t=e.isAuthenticated,c=e.user;return t&&c&&"admin"===c.type?Object(je.jsx)(Qe,{}):t&&c&&"customer"===c.type?Object(je.jsx)(fe,{}):Object(je.jsx)("section",{className:"home",children:Object(je.jsx)("div",{className:"dark-overlay",children:Object(je.jsx)("div",{className:"landing-inner",children:Object(je.jsxs)("div",{className:"buttons",children:[Object(je.jsx)(r.b,{to:"/register",className:"btn btn-primary",children:"Sign Up"}),Object(je.jsx)(r.b,{to:"/login",className:"btn btn-light",children:"Login"})]})})})})})),Ge=function(e){return Object(je.jsxs)("section",{children:[Object(je.jsx)(de,{}),Object(je.jsxs)(i.d,{children:[Object(je.jsx)(i.b,{exact:!0,path:"/register",component:le}),Object(je.jsx)(i.b,{exact:!0,path:"/login",component:ue}),Object(je.jsx)(i.b,{exact:!0,path:"/home",component:Fe}),Object(je.jsx)(Oe,{path:"/home",component:Fe}),Object(je.jsx)(i.b,{component:ge})]})]})},Ne=(c(80),function(){return Object(a.useEffect)((function(){localStorage.token&&ce(localStorage.token),Ae.dispatch(oe()),window.addEventListener("storage",(function(){localStorage.token||Ae.dispatch({type:C})}))}),[]),Object(je.jsx)(g.a,{store:Ae,children:Object(je.jsx)(r.a,{children:Object(je.jsx)(a.Fragment,{children:Object(je.jsxs)(i.d,{children:[Object(je.jsx)(i.b,{exact:!0,path:"/",children:Object(je.jsx)(i.a,{to:"/home"})}),Object(je.jsx)(i.b,{component:Ge})]})})})})});A.a.render(Object(je.jsx)(Ne,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8b68e338.chunk.js.map