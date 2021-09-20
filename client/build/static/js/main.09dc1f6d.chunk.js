(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(15),s=c.n(n),i=c(9),o=c(8),l=c(5),A=c.n(l),u=c(10),j=c(17),d=c(4),m=c(16),h=c(2),b=c(84),g="SET_ALERT",p="REMOVE_ALERT",x="REGISTER_SUCCESS",O="USER_LOADED",f="AUTH_ERROR",E="LOGIN_SUCCESS",B="LOGOUT",C="CARRIERS_LOADED",w="CUSTOMERS_LOADED",N="PRIORITY_EDIT_SHOW",v="PRIORITY_EDIT_CUSTOMER_LOADED",y=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;return function(a){var r=Object(b.a)();a({type:g,payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){return a({type:p,payload:r})}),c)}},I=c(39),Q=c.n(I),F=c(19),D=c(40),G=c(41),S=c(43),k=[];var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case g:return[].concat(Object(S.a)(e),[a]);case p:return e.filter((function(e){return e.id!==a}));default:return e}},U={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case O:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case x:case E:return Object(d.a)(Object(d.a)(Object(d.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case f:case B:return Object(d.a)(Object(d.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},M={carriers:[],customers:[],carrierCustomers:[],customerForPriorityEdit:null,customerPriorityEditModalShow:!1};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case C:return Object(d.a)(Object(d.a)({},e),{},{carriers:a});case w:return Object(d.a)(Object(d.a)({},e),{},{customers:a});case N:return Object(d.a)(Object(d.a)({},e),{},{customerPriorityEditModalShow:a});case v:return Object(d.a)(Object(d.a)({},e),{},{customerForPriorityEdit:a});default:return e}},L=Object(F.combineReducers)({alert:R,auth:Y,admin:H}),P=function(e){e?(T.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete T.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},J=[G.a],K=Object(F.createStore)(L,{},Object(D.composeWithDevTools)(F.applyMiddleware.apply(void 0,J))),W=K.getState();K.subscribe((function(){var e=W;if(W=K.getState(),e.auth.token!==W.auth.token){var t=W.auth.token;P(t)}}));var Z=K,q=Q.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});q.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&Z.dispatch({type:B}),Promise.reject(e)}));var T=q,V=function(){return function(){var e=Object(u.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("/auth");case 3:c=e.sent,t({type:O,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:f});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},z=function(){return{type:B}},X=c(0),_=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:y,register:function(e){return function(){var t=Object(u.a)(A.a.mark((function t(c){var a,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.post("/users",e);case 3:a=t.sent,c({type:x,payload:a.data}),c(V()),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(r=t.t0.response.data.errors)&&r.forEach((function(e){return c(y(e.msg,"danger"))})),c({type:"REGISTER_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,c=e.register,r=e.isAuthenticated,n=Object(a.useState)({name:"",email:"",password:"",password2:""}),s=Object(m.a)(n,2),l=s[0],h=s[1],b=l.name,g=l.email,p=l.password,x=l.password2,O=function(e){return h(Object(d.a)(Object(d.a)({},l),{},Object(j.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(u.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),p!==x?t("Passwords do not match","danger"):c({name:b,email:g,password:p});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(X.jsx)(o.a,{to:"/dashboard"}):Object(X.jsxs)(a.Fragment,{children:[Object(X.jsx)("h1",{className:"large text-primary",children:"Sign Up"}),Object(X.jsxs)("p",{className:"lead",children:[Object(X.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(X.jsxs)("form",{className:"form",onSubmit:f,children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:b,onChange:O})}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:g,onChange:O}),Object(X.jsx)("small",{className:"form-text",children:"This site uses Gravatar so if you want a profile image, use a Gravatar email"})]}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:p,onChange:O})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:x,onChange:O})}),Object(X.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Register"})]}),Object(X.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(X.jsx)(i.b,{to:"/login",children:"Sign In"})]})]})})),$=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{login:function(e,t){return function(){var c=Object(u.a)(A.a.mark((function c(a){var r,n,s;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r={username:e,password:t},c.prev=1,c.next=4,T.post("/auth",r);case 4:n=c.sent,a({type:E,payload:n.data}),a(y("Successfully Logged In","success")),a(V()),c.next=15;break;case 10:c.prev=10,c.t0=c.catch(1),(s=c.t0.response.data.errors)&&s.forEach((function(e){return a(y(e.msg,"danger"))})),a({type:"LOGIN_FAIL"});case 15:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.login,c=e.isAuthenticated,a=e.user,n=r.a.useState({username:"",password:""}),s=Object(m.a)(n,2),i=s[0],l=s[1],A=i.username,u=i.password,h=function(e){return l(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},e.target.name,e.target.value)))};return c&&a?Object(X.jsx)(o.a,{to:"/home/"}):Object(X.jsx)("div",{className:"container-fluid bg-login",children:Object(X.jsx)("div",{className:"container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsx)("div",{className:"col-md-3"}),Object(X.jsxs)("div",{className:"col-md-6 pt-4",children:[Object(X.jsx)("div",{className:"p-5 d-flex justify-content-center",children:Object(X.jsx)("h1",{style:{fontSize:"75px"},children:"Aquerate"})}),Object(X.jsxs)("form",{className:"form p-5",onSubmit:function(e){e.preventDefault(),t(A,u)},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"form-control",value:A,onChange:h,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:u,onChange:h,minLength:"6"})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"form-control btn-info",value:"Login"})})]})]}),Object(X.jsx)("div",{className:"col-md-3"})]})})})})),ee=c(18),te=(c(79),Object(h.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return r.a.useEffect((function(){t.forEach((function(e){switch(e.alertType){case"info":ee.NotificationManager.info("Info message",e.msg,1e3);break;case"success":ee.NotificationManager.success("Success message",e.msg,1e3);break;case"warning":case"danger":ee.NotificationManager.warning("Warning message",e.msg);break;case"error":ee.NotificationManager.error("Error message",e.msg)}}))}),[t]),Object(X.jsx)("div",{children:Object(X.jsx)(ee.NotificationContainer,{})})}))),ce=function(){return Object(X.jsxs)(a.Fragment,{children:[Object(X.jsxs)("h1",{className:"x-large text-primary",children:[Object(X.jsx)("i",{className:"fas fa-exclamation-triangle"})," Page Not Found"]}),Object(X.jsx)("p",{className:"large",children:"Sorry, this page does not exist"})]})},ae=c(44),re=function(){return Object(X.jsx)(a.Fragment,{children:Object(X.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},ne=["component","auth"],se=Object(h.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,c=e.auth,a=c.isAuthenticated,r=c.loading,n=Object(ae.a)(e,ne);return Object(X.jsx)(o.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return r?Object(X.jsx)(re,{}):a?Object(X.jsx)(t,Object(d.a)({},e)):Object(X.jsx)(o.a,{to:"/login"})}}))})),ie=function(e,t){return Object(u.a)(A.a.mark((function c(){return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.push("/".concat(t));case 2:case"end":return c.stop()}}),c)})))},oe=function(){return function(){var e=Object(u.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/admin/getCustomers");case 2:(c=e.sent).data.success&&t({type:w,payload:c.data.customers});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(e,t){return function(){var c=Object(u.a)(A.a.mark((function c(a){return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:a({type:N,payload:e}),t&&a({type:v,payload:t});case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},Ae=c.p+"static/media/menu-logo.5e53ae38.svg",ue=Object(h.b)((function(e){return{user:e.auth.user,carriers:e.admin.carriers}}),{logout:z,getCarriers:function(){return function(){var e=Object(u.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/admin/getCarriers");case 2:(c=e.sent).data.success&&t({type:C,payload:c.data.carriers});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.logout,c=e.getCarriers,a=e.carriers,n=Object(o.g)();r.a.useEffect((function(){c()}),[c]);var s=function(){var e=Object(u.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.push("/");case 2:return e.next=4,n.push("/home");case 4:return e.next=6,n.push("/home/".concat(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsx)("div",{className:"col-md-2 p-2 sidebar",children:Object(X.jsxs)("div",{className:"container-fluid",children:[Object(X.jsxs)("div",{className:"row my-4 mx-2 h3 menuItem",onClick:function(){return s("")},children:[Object(X.jsx)("img",{src:Ae,alt:"MENULOGO",className:"pr-2"}),"Aquerate"]}),a.map((function(e,t){return Object(X.jsx)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return s("carrier/".concat(e._id))},children:e.name},t)})),Object(X.jsx)("div",{className:"row mx-3 menuItem signoutLink",onClick:t,children:"\u2199 Sign Out"})]})})})),je=Object(h.b)((function(e){return{show:e.admin.customerPriorityEditModalShow,customer:e.admin.customerForPriorityEdit}}),{setCustomerForPriorityEdit:le,updateCustomerPriority:function(e,t){return function(){var c=Object(u.a)(A.a.mark((function c(a){return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,T.post("/admin/updateCustomerPriority/".concat(e),{priority:t});case 2:c.sent.data.success&&(a(oe()),a({type:N,payload:!1}));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.show,c=e.customer,a=e.setCustomerForPriorityEdit,r=e.updateCustomerPriority;return t?Object(X.jsx)("div",{className:"modal mt-5 pt-5",children:Object(X.jsx)("div",{className:"modal-dialog",children:Object(X.jsxs)("div",{className:"modal-content",children:[Object(X.jsxs)("div",{className:"modal-header",children:[Object(X.jsx)("h4",{className:"modal-title",children:"Choose a Priority..."}),Object(X.jsx)("button",{className:"close",onClick:function(){a(!1)},children:"X"})]}),Object(X.jsxs)("div",{className:"modal-body",children:[Object(X.jsx)("button",{className:"btn btn-block "+("high"===c.priority?"btn-danger":"btn-outline-danger"),onClick:function(){r(c._id,"high")},children:"HIGH"}),Object(X.jsx)("button",{className:"btn btn-block "+("mid"===c.priority?"btn-warning":"btn-outline-warning"),onClick:function(){r(c._id,"mid")},children:"MID"}),Object(X.jsx)("button",{className:"btn btn-block "+("low"===c.priority?"btn-success":"btn-outline-success"),onClick:function(){r(c._id,"low")},children:"LOW"})]})]})})}):null})),de=c.p+"static/media/alarm.c9e9bad9.svg",me=c.p+"static/media/userAvatar.e20ca47f.png",he=Object(h.b)((function(e){return{user:e.auth.user}}),{})((function(e){var t=e.user;return Object(X.jsxs)("div",{className:"row adminHeader d-flex align-items-center mb-3 mt-3",children:[Object(X.jsx)("div",{className:"col-md-6 mr-auto mb-3"}),Object(X.jsxs)("div",{className:"col-md-6 d-flex flex-row-reverse align-items-center",children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("img",{src:de,alt:"ALARM",width:"22px",className:"mr-2"}),Object(X.jsx)("span",{className:"mr-2",children:t.name}),Object(X.jsx)("img",{src:t.avatar?t.avatar:me,alt:"AVATAR",className:"rounded-circle",width:"35px"})]}),Object(X.jsx)("div",{className:"mr-3",children:Object(X.jsx)("div",{style:{height:"30px",width:"180px",backgroundColor:"#E8E8E8",color:"#555"},children:Object(X.jsxs)("span",{className:"ml-2",children:[Object(X.jsx)("i",{className:"fa fa-search mt-2 mr-1"}),Object(X.jsx)("input",{placeholder:"Search",className:"headerInput"})]})})})]})]})})),be=Object(h.b)((function(e){return{}}),{goPage:ie,setCustomerForPriorityEdit:le})((function(e){var t=e.item,c=e.goPage,a=e.setCustomerForPriorityEdit,n=Object(o.g)(),s=r.a.useState("btn-success"),i=Object(m.a)(s,2),l=i[0],A=i[1];return r.a.useEffect((function(){A("high"===t.priority?"btn-danger":"mid"===t.priority?"btn-warning":"btn-success")}),[t]),Object(X.jsxs)("tr",{onClick:function(){return c(n,"customer/".concat(t._id))},children:[Object(X.jsx)("td",{children:t.policyNumber}),Object(X.jsx)("td",{children:t.companyName}),Object(X.jsxs)("td",{children:["$ ",t.ppmfeEndorsements]}),Object(X.jsx)("td",{children:t.peDates.slice(0,10)}),Object(X.jsx)("td",{children:Object(X.jsx)("button",{className:"text-uppercase btn btn-sm "+l,onClick:function(e){e.stopPropagation(),a(!0,t)},children:t.priority})})]})})),ge=Object(h.b)((function(e){return{customers:e.admin.customers}}),{goPage:ie,getCustomers:oe})((function(e){var t=e.goPage,c=e.getCustomers,a=e.customers,n=Object(o.g)();return r.a.useEffect((function(){c()}),[c]),Object(X.jsxs)("div",{className:"m-2 main",children:[Object(X.jsx)(he,{}),Object(X.jsxs)("div",{className:"customerTable table-responsive",children:[Object(X.jsxs)("table",{className:"table table-hover",children:[Object(X.jsx)("thead",{children:Object(X.jsxs)("tr",{children:[Object(X.jsx)("th",{children:"Policy Number"}),Object(X.jsx)("th",{children:"Company/Policyholder"}),Object(X.jsx)("th",{children:"Policy Premium"}),Object(X.jsx)("th",{children:"Next Due Date"}),Object(X.jsx)("th",{children:"Priority"})]})}),Object(X.jsx)("tbody",{children:a.map((function(e,t){return Object(X.jsx)(be,{item:e},t)}))})]}),Object(X.jsxs)("div",{className:"d-flex align-items-center mx-3 my-2",children:[Object(X.jsx)("div",{className:"mr-auto addClient",children:Object(X.jsx)("span",{onClick:function(){return t(n,"addCustomer")},children:"+ ADD CLIENT"})}),Object(X.jsxs)("div",{className:"d-flex align-items-center pageControl",children:[Object(X.jsx)("div",{className:"mr-3",children:"1 - 10 OF 47"}),Object(X.jsxs)("div",{children:[Object(X.jsx)("i",{className:"fas fa-angle-double-left mr-2"}),Object(X.jsx)("i",{className:"fas fa-angle-double-right"})]})]})]})]})]})})),pe=Object(h.b)((function(e){return{}}),{})((function(){return Object(X.jsx)("div",{className:"m-2 main",children:"Master Admin Customer"})})),xe=Object(h.b)((function(e){return{carriers:e.admin.carriers}}),{addCustomer:function(e,t){return function(){var c=Object(u.a)(A.a.mark((function c(a){return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,T.post("/admin/addCustomer",e);case 2:c.sent.data.success&&(a(y("Client Added Successfully!","success")),a(ie(t,"")));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.addCustomer,c=e.carriers,a=Object(o.g)(),n=r.a.useState({name:"",username:"",password:"",password2:"",carrier:"",policyNumber:"",companyName:"",peDates:"",ppmfeEndorsements:0,email:"",glcDescription:"",glccoRate:0,glcccoRate:0,wccDescription:"",wccRate:0}),s=Object(m.a)(n,2),i=s[0],l=s[1],A=i.name,u=i.username,h=i.password,b=i.password2,g=i.carrier,p=i.policyNumber,x=i.companyName,O=i.peDates,f=i.ppmfeEndorsements,E=i.email,B=i.glcDescription,C=i.glccoRate,w=i.glcccoRate,N=i.wccDescription,v=i.wccRate,y=function(e){l(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(X.jsxs)("div",{className:"m-2 main",children:[Object(X.jsx)(he,{}),Object(X.jsxs)("form",{className:"p-4 form",onSubmit:function(e){e.preventDefault(),t(i,a)},children:[Object(X.jsx)("div",{className:"h4 mb-3",children:"Add Client"}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Name of Client"}),Object(X.jsx)("input",{type:"text",className:"form-control",name:"name",value:A,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Username of Client"}),Object(X.jsx)("input",{type:"text",className:"form-control",name:"username",value:u,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Password"}),Object(X.jsx)("input",{type:"password",className:"form-control",name:"password",value:h,onChange:y,minLength:"6"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Confirm Password"}),Object(X.jsx)("input",{type:"password",className:"form-control",name:"password2",value:b,onChange:y,minLength:"6"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Carrier"}),Object(X.jsxs)("select",{className:"form-control",name:"carrier",value:g,onChange:y,required:!0,children:[Object(X.jsx)("option",{value:"",children:"Choose Carrier..."}),c.map((function(e,t){return Object(X.jsx)("option",{value:e._id,children:e.name},t)}))]})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Policy Number"}),Object(X.jsx)("input",{type:"text",className:"form-control",name:"policyNumber",value:p,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Name of Company/Policyholder"}),Object(X.jsx)("input",{type:"text",className:"form-control",name:"companyName",value:x,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Policy Effective Dates"}),Object(X.jsx)("input",{type:"date",className:"form-control",name:"peDates",value:O,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Policy Premium Minus Fully Earned Endorsements (_$)"}),Object(X.jsx)("input",{type:"Number",className:"form-control",name:"ppmfeEndorsements",value:f,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Policy Holder Email"}),Object(X.jsx)("input",{type:"email",className:"form-control",name:"email",value:E,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"General Liability Class Description"}),Object(X.jsx)("input",{type:"text",className:"form-control",name:"glcDescription",value:B,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"General Liability Class Code Ongoing Rate (_%)"}),Object(X.jsx)("input",{type:"Number",className:"form-control",name:"glccoRate",value:C,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"General Liability Class Code Completed Ops Rate (_%)"}),Object(X.jsx)("input",{type:"Number",className:"form-control",name:"glcccoRate",value:w,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Workers Comp Class Description"}),Object(X.jsx)("input",{type:"text",className:"form-control",name:"wccDescription",value:N,onChange:y,required:!0})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Workers Comp Class Rate (_$)"}),Object(X.jsx)("input",{type:"Number",className:"form-control",name:"wccRate",value:v,onChange:y,required:!0})]}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("button",{type:"submit",className:"form-control btn-success",value:"SUBMIT",children:"SUBMIT"})})]})]})})),Oe=Object(h.b)((function(e){return{customers:e.admin.customers}}),{getCustomers:oe})((function(e){var t=e.match,c=e.getCustomers,a=e.customers,n=r.a.useState([]),s=Object(m.a)(n,2),i=s[0],o=s[1];return r.a.useEffect((function(){c()}),[c]),r.a.useEffect((function(){o(a.filter((function(e){return e.carrier===t.params.id})))}),[a,t]),Object(X.jsxs)("div",{className:"m-2 main",children:[Object(X.jsx)(he,{}),Object(X.jsx)("div",{className:"customerTable table-responsive",children:Object(X.jsxs)("table",{className:"table table-hover",children:[Object(X.jsx)("thead",{children:Object(X.jsxs)("tr",{children:[Object(X.jsx)("th",{children:"Policy Number"}),Object(X.jsx)("th",{children:"Company/Policyholder"}),Object(X.jsx)("th",{children:"Policy Premium"}),Object(X.jsx)("th",{children:"Next Due Date"}),Object(X.jsx)("th",{children:"Priority"})]})}),Object(X.jsx)("tbody",{children:i.map((function(e,t){return Object(X.jsx)(be,{item:e},t)}))})]})})]})})),fe=function(){return Object(X.jsx)("div",{className:"container-fluid bg-admin",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsx)(ue,{}),Object(X.jsxs)("div",{className:"col-md-10",children:[Object(X.jsxs)(i.a,{basename:"/home",children:[Object(X.jsx)(se,{exact:!0,path:"/",component:ge}),Object(X.jsx)(se,{exact:!0,path:"/addCustomer",component:xe}),Object(X.jsx)(se,{exact:!0,path:"/customer/:id",component:pe}),Object(X.jsx)(se,{exact:!0,path:"/carrier/:id",component:Oe})]}),Object(X.jsx)(je,{})]})]})})},Ee=Object(h.b)((function(e){return{user:e.auth.user}}),{logout:z})((function(e){var t=e.logout,c=Object(o.g)(),a=function(){var e=Object(u.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.push("/");case 2:return e.next=4,c.push("/home");case 4:return e.next=6,c.push("/home/".concat(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsx)("div",{className:"col-md-2 p-2 sidebar",children:Object(X.jsxs)("div",{className:"container-fluid",children:[Object(X.jsxs)("div",{className:"row my-4 mx-2 h3 menuItem",onClick:function(){return a("")},children:[Object(X.jsx)("img",{src:Ae,alt:"MENULOGO",className:"pr-2"}),"Aquerate"]}),Object(X.jsxs)("div",{className:"row mx-3 my-1 menuItem",onClick:function(){return a("")},children:[Object(X.jsx)("i",{className:"fas fa-user-friends"}),"My Account"]}),Object(X.jsx)("div",{className:"row mx-3 menuItem signoutLink",onClick:t,children:"\u2199 Sign Out"})]})})})),Be=Object(h.b)((function(e){return{user:e.auth.user}}),{})((function(e){var t=e.user;return Object(X.jsx)("div",{className:"m-2",children:Object(X.jsxs)("div",{className:"row adminHeader d-flex align-items-center mb-3 mt-3",children:[Object(X.jsx)("div",{className:"col-md-6 mr-auto mb-3"}),Object(X.jsxs)("div",{className:"col-md-6 d-flex flex-row-reverse align-items-center",children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("img",{src:de,alt:"ALARM",width:"22px",className:"mr-2"}),Object(X.jsx)("span",{className:"mr-2",children:t.name}),Object(X.jsx)("img",{src:t.avatar?t.avatar:me,alt:"AVATAR",className:"rounded-circle",width:"35px"})]}),Object(X.jsx)("div",{className:"mr-3",children:Object(X.jsx)("div",{style:{height:"30px",width:"180px",backgroundColor:"#E8E8E8",color:"#555"},children:Object(X.jsxs)("span",{className:"ml-2",children:[Object(X.jsx)("i",{className:"fa fa-search mt-2 mr-1"}),Object(X.jsx)("input",{placeholder:"Search",className:"headerInput"})]})})})]})]})})})),Ce=function(){return Object(X.jsx)("div",{className:"container-fluid bg-admin",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsx)(Ee,{}),Object(X.jsx)("div",{className:"col-md-10",children:Object(X.jsx)(i.a,{basename:"/home",children:Object(X.jsx)(se,{exact:!0,path:"/",component:Be})})})]})})},we=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){var t=e.isAuthenticated,c=e.user;return t&&c&&"admin"===c.type?Object(X.jsx)(fe,{}):t&&c&&"customer"===c.type?Object(X.jsx)(Ce,{}):Object(X.jsx)(o.a,{to:"/login"})})),Ne=function(e){return Object(X.jsxs)("section",{children:[Object(X.jsx)(te,{}),Object(X.jsxs)(o.d,{children:[Object(X.jsx)(o.b,{exact:!0,path:"/register",component:_}),Object(X.jsx)(o.b,{exact:!0,path:"/login",component:$}),Object(X.jsx)(o.b,{exact:!0,path:"/home",component:we}),Object(X.jsx)(se,{path:"/home",component:we}),Object(X.jsx)(o.b,{component:ce})]})]})},ve=(c(80),function(){return Object(a.useEffect)((function(){localStorage.token&&P(localStorage.token),Z.dispatch(V()),window.addEventListener("storage",(function(){localStorage.token||Z.dispatch({type:B})}))}),[]),Object(X.jsx)(h.a,{store:Z,children:Object(X.jsx)(i.a,{children:Object(X.jsx)(a.Fragment,{children:Object(X.jsxs)(o.d,{children:[Object(X.jsx)(o.b,{exact:!0,path:"/",children:Object(X.jsx)(o.a,{to:"/login"})}),Object(X.jsx)(o.b,{component:Ne})]})})})})});s.a.render(Object(X.jsx)(ve,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.09dc1f6d.chunk.js.map