(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{1366:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var o=r(43);var c=r(15);var s=r.n(c);var i=r(62);var u=r(32);var l=r(29);var p=r(23);var d=r(1479);var f=r(34);var v=r(1449);var m=r(97);var g=r(16);var b=r(367);var h=r(5);var y=r.n(h);var x=r(369);var k=r(166);var w=r(63);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function j(e,t,r,a,n,o,c){try{var s=e[o](c);var i=s.value}catch(e){r(e);return}if(s.done){t(i)}else{Promise.resolve(i).then(a,n)}}function O(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function c(e){j(o,a,n,c,s,"next",e)}function s(e){j(o,a,n,c,s,"throw",e)}c(undefined)})}}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);if(t){a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){A(Object(r),true).forEach(function(t){E(e,t,r[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{A(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}}return e}function E(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function S(e,t){return _(e)||R(e,t)||M(e,t)||P()}function P(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(e,t){if(!e)return;if(typeof e==="string")return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}function N(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function R(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var c,s;try{for(r=r.call(e);!(n=(c=r.next()).done);n=true){a.push(c.value);if(t&&a.length===t)break}}catch(e){o=true;s=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw s}}return a}function _(e){if(Array.isArray(e))return e}var H=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var L=function e(t){var r=t.getTicketTypes,c=t.ticketTypes,d=t.createSupport,f=t.admins,v=t.getAdmins,m=t.loadingStatus,y=t.match;var j=Object(a["useState"])({ticketId:"",forType:"",channel:"",desc:"",status:"",assignedTo:"",email:""}),A=S(j,2),P=A[0],M=A[1];var N=function e(t){return M(T(T({},P),{},E({},t.target.name,t.target.value)))};var R=P.ticketId,_=P.forType,H=P.channel,L=P.desc,C=P.status,G=P.assignedTo;var X=Object(a["useState"])(""),D=S(X,2),I=D[0],U=D[1];var q=Object(a["useState"])([]),F=S(q,2),z=F[0],B=F[1];var J=Object(a["useState"])(false),$=S(J,2),K=$[0],Q=$[1];var V=Object(a["useState"])(false),W=S(V,2),Y=W[0],Z=W[1];var ee=Object(a["useState"])(""),te=S(ee,2),re=te[0],ae=te[1];var ne=Object(a["useState"])(false),oe=S(ne,2),ce=oe[0],se=oe[1];var ie=function e(){return se(true)};var ue=function e(){return se(false)};Object(a["useEffect"])(function(){r();v()},[]);var le=function(){var e=O(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:t.preventDefault();r.next=3;return d(R,H,L,C,G,re);case 3:M({ticketId:"",forType:"",channel:"",desc:"",status:"",assignedTo:"",email:""});U("");case 5:case"end":return r.stop()}}},e)}));return function t(r){return e.apply(this,arguments)}}();var pe=function e(t){t.preventDefault();U(t.target.value)};Object(a["useEffect"])(function(){if(ce&&I.length>2){var e=setTimeout(function(){de()},2e3);return function(){return clearTimeout(e)}}else{Z(false)}},[I]);var de=function(){var e=O(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;if(_){r.next=4;break}h["NotificationManager"].error("select user type");return r.abrupt("return");case 4:Q(true);r.next=7;return s.a.get("".concat(g["a"].user,"/v1.1/admin/users?q=").concat(I,"&user_type=").concat(_));case 7:t=r.sent;B(t.data.data);Z(true);Q(false);r.next=15;break;case 13:r.prev=13;r.t0=r["catch"](0);case 15:case"end":return r.stop()}}},e,null,[[0,13]])}));return function t(){return e.apply(this,arguments)}}();var fe=function e(t){U("".concat(t.first_name," ").concat(t.last_name));ae(t.auth_id);Z(false)};return n.a.createElement("div",{className:"bg-white",style:{minHeight:"99vh"}},n.a.createElement(x["a"],null,n.a.createElement("title",null,"Create Ticket"),n.a.createElement("meta",{name:"description",content:"Create Ticket"})),n.a.createElement(k["a"],{title:"Create Tickets",match:y}),n.a.createElement(i["a"],{onSubmit:function e(t){return Object(w["b"])("create_tickets",function(){return le(t)})}},n.a.createElement("div",{className:"row  justify-content-around"},n.a.createElement("div",{className:"col-sm-6 bg-white"},n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Ticket Type"),n.a.createElement(p["a"],{type:"select",name:"ticketId",value:R,onChange:N,required:true},n.a.createElement("option",{value:""},"Select"),c&&c.map(function(e){return n.a.createElement("option",{key:e.support_id,value:e.support_id},e.title)}))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Description of ticket "),n.a.createElement(p["a"],{type:"textarea",name:"desc",value:L,onChange:N,required:true})),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Status "),n.a.createElement(p["a"],{type:"select",name:"status",value:C,onChange:N,required:true},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"1"},"New"),n.a.createElement("option",{value:"2"},"Opened"),n.a.createElement("option",{value:"3"},"In-progress"),n.a.createElement("option",{value:"4"},"Closed"),n.a.createElement("option",{value:"5"},"Unresolved"))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Channel"),n.a.createElement(p["a"],{type:"text",name:"channel",value:H,onChange:N,required:true}))),n.a.createElement("div",{className:"col-sm-5 bg-white"},n.a.createElement("div",null,n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"User Type"),n.a.createElement(p["a"],{type:"select",name:"forType",value:_,onChange:N,required:true},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"driver"},"Driver"),n.a.createElement("option",{value:"rider"},"Passenger"))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],{htmlFor:"browser"},"Ticket For"),n.a.createElement(p["a"],{onFocus:ie,onBlur:ue,type:"search",className:"search-input-lg",name:"searchData",value:I,onChange:pe,placeholder:"Search.. name, email, phone number",autoComplete:"off",required:true}),K&&n.a.createElement("div",{className:"page-loader d-flex justify-content-center mb-30 mt-30"},n.a.createElement(b["a"],{size:24})),!K&&(z===null||z===void 0?void 0:z.length)>0&&Y&&n.a.createElement("div",{className:"pr-4 w-100",style:{position:"absolute"}},n.a.createElement("div",{className:"bg-white",style:{border:"1px solid #EBEDF2",maxHeight:"200px",overflow:"auto",zIndex:10,width:"100%"}},(z===null||z===void 0?void 0:z.length)>0&&z.map(function(e){return n.a.createElement("option",{onClick:function t(){return fe(e)},key:e.auth_id,className:"p-2 custom-dropdown"},e.first_name," ",e.last_name)})))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Assign To"),n.a.createElement(p["a"],{type:"select",name:"assignedTo",value:G,onChange:N,required:true},n.a.createElement("option",{value:""},"Select"),(f===null||f===void 0?void 0:f.length)>0&&f.map(function(e){return n.a.createElement("option",{key:e.auth_id,value:e.auth_id},e.first_name," ",e.last_name)})))))),n.a.createElement("div",{className:"mt-5 float-right",style:{paddingRight:"15px"}},n.a.createElement(o["a"],{disabled:m,type:"submit",variant:"contained",className:"text-white btn-success"},m?"loading..":"Submit"))))};H(L,'useState{[formData, setFormData]({ticketId: "", forType: "", channel: "", desc: "", status: "", assignedTo: "", email: ""})}\nuseState{[searchData, setSearchData]("")}\nuseState{[searchedUser, setSearchedUser]([])}\nuseState{[loading, setLoading](false)}\nuseState{[isShow, setIsShow](false)}\nuseState{[userAuthId, setUserAuthId]("")}\nuseState{[focused, setFocused](false)}\nuseEffect{}\nuseEffect{}');function C(e){return{createSupport:function t(r,a,n,o,c,s){return e(Object(v["b"])(r,a,n,o,c,s))},getAdmins:function t(){return e(Object(m["d"])())},getTicketTypes:function t(r,a){return e(Object(d["e"])(r,a))}}}var G=function e(t){return{ticketTypes:t.ticketTypes.ticketTypes,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus,admins:t.admins.admins}};var X=Object(f["b"])(G,C)(L);t["default"]=X;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(L,"SupportSetup","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportSetup.js");e.register(C,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportSetup.js");e.register(G,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportSetup.js");e.register(X,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportSetup.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1449:function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return f});r.d(t,"g",function(){return v});r.d(t,"f",function(){return m});r.d(t,"h",function(){return g});r.d(t,"i",function(){return b});r.d(t,"a",function(){return h});r.d(t,"c",function(){return y});r.d(t,"d",function(){return x});r.d(t,"e",function(){return k});var a=r(15);var n=r.n(a);var o=r(4);var c=r(3);var s=r(5);var i=r.n(s);var u=r(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,o,c){try{var s=e[o](c);var i=s.value}catch(e){r(e);return}if(s.done){t(i)}else{Promise.resolve(i).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function c(e){l(o,a,n,c,s,"next",e)}function s(e){l(o,a,n,c,s,"throw",e)}c(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r,a,c,i,l){return function(){var e=p(regeneratorRuntime.mark(function e(p){var d,f;return regeneratorRuntime.wrap(function e(v){while(1){switch(v.prev=v.next){case 0:d={support_id:t,channel:r,comment:a,status:c,assigned_to:i,auth_id:l};v.prev=1;v.next=4;return p(Object(o["d"])());case 4:v.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issue-log"),d);case 6:f=v.sent;if(!(f.data.status==="error")){v.next=11;break}s["NotificationManager"].error(f.data.msg);v.next=13;break;case 11:v.next=13;return s["NotificationManager"].success("SupportTickets Created Successfully!");case 13:p(Object(o["b"])());v.next=20;break;case 16:v.prev=16;v.t0=v["catch"](1);p(Object(o["b"])());s["NotificationManager"].error(v.t0.response.data.result);case 20:case"end":return v.stop()}}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var a=arguments.length>2?arguments[2]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(i){var l;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;a&&i(Object(o["c"])());!a&&i(Object(o["d"])());p.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?page=").concat(t,"&item_per_page=20&status=").concat(r));case 5:l=p.sent;if(l.data.status==="error"){s["NotificationManager"].error(l.data.msg)}else{i({type:c["lc"],payload:l.data.data})}i(Object(o["a"])());i(Object(o["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);i(Object(o["a"])());i(Object(o["b"])());s["NotificationManager"].error(p.t0.response.data.message);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;!r&&a(Object(o["c"])());r&&a(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/").concat(t));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{a({type:c["nc"],payload:i.data.data})}a(Object(o["b"])());a(Object(o["a"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(o["b"])());a(Object(o["a"])());s["NotificationManager"].error(l.t0.response.data.message);case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a,o;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?component=count&&status=").concat(t));case 3:a=i.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:c["mc"],payload:(o=a.data.data)===null||o===void 0?void 0:o.total})}i.next=10;break;case 7:i.prev=7;i.t0=i["catch"](0);s["NotificationManager"].error(i.t0.response.data.message);case 10:case"end":return i.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var c,i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:c={status:r,issue_id:t};l.prev=1;l.next=4;return a(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issue-status"),c);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}s["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:a(m(t,true));case 14:l.next=16;return a(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);a(Object(o["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var c,i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:c={auth_id:r,issue_id:t};l.prev=1;l.next=4;return a(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/assign-issue"),c);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}s["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:a(m(t,true));case 14:l.next=16;return a(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);a(Object(o["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;t&&a(Object(o["c"])());!t&&a(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?page=").concat(r,"&item_per_page=20"));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{a({type:c["q"],payload:i.data.data})}a(Object(o["a"])());a(Object(o["b"])());l.next=15;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(o["a"])());a(Object(o["b"])());case 15:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var x=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?component=count"));case 3:r=o.sent;if(r.data.status==="error"){s["NotificationManager"].error(r.data.msg)}else{t({type:c["r"],payload:(a=r.data)!==null&&a!==void 0&&a.data.total?r.data.data.total:0})}o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var k=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;r(Object(o["c"])());i.next=4;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/").concat(t));case 4:a=i.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:c["s"],payload:a.data.data})}r(Object(o["a"])());i.next=12;break;case 9:i.prev=9;i.t0=i["catch"](0);r(Object(o["a"])());case 12:case"end":return i.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(v,"getSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(m,"getSupportTicket","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(g,"getSupportTicketsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(b,"updateSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(h,"assignSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(y,"getContactUs","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(x,"getContactUsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(k,"getContactUsDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1479:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return f});r.d(t,"e",function(){return v});r.d(t,"c",function(){return m});r.d(t,"f",function(){return g});r.d(t,"b",function(){return b});r.d(t,"d",function(){return h});var a=r(15);var n=r.n(a);var o=r(4);var c=r(3);var s=r(5);var i=r.n(s);var u=r(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,o,c){try{var s=e[o](c);var i=s.value}catch(e){r(e);return}if(s.done){t(i)}else{Promise.resolve(i).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function c(e){l(o,a,n,c,s,"next",e)}function s(e){l(o,a,n,c,s,"throw",e)}c(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r,a,c){return function(){var e=p(regeneratorRuntime.mark(function e(i){var l,p;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:l={title:t,user_type:r,issues:a,description:c};d.prev=1;d.next=4;return i(Object(o["d"])());case 4:d.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issues"),l);case 6:p=d.sent;if(!(p.data.status==="error")){d.next=11;break}s["NotificationManager"].error(p.data.msg);d.next=17;break;case 11:d.next=13;return s["NotificationManager"].success("Ticket Created Successfully!");case 13:d.next=15;return i(v());case 15:d.next=17;return i(h());case 17:i(Object(o["b"])());d.next=24;break;case 20:d.prev=20;d.t0=d["catch"](1);i(Object(o["b"])());s["NotificationManager"].error(d.t0.response.data.result);case 24:case"end":return d.stop()}}},e,null,[[1,20]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var r=arguments.length>1?arguments[1]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;r&&a(Object(o["c"])());!r&&a(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issues/?page_no=").concat(t,"&no_per_page=20"));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{a({type:c["qc"],payload:i.data.data})}a(Object(o["a"])());a(Object(o["b"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(o["b"])());a(Object(o["a"])());s["NotificationManager"].error("network error, try again later");case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;r&&a(Object(o["c"])());!r&&a(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/user/support/").concat(t,"/"));case 5:i=l.sent;if(i.data.status==="error"){}else{a({type:c["pc"],payload:i.data.data})}a(Object(o["a"])());a(Object(o["b"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(o["b"])());a(Object(o["a"])());s["NotificationManager"].error("network error, try again later");case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,r,a,c,i){return function(){var e=p(regeneratorRuntime.mark(function e(l){var p,d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:p={title:r,user_type:a,issues:c,description:i};f.prev=1;f.next=4;return l(Object(o["d"])());case 4:f.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issues/").concat(t),p);case 6:d=f.sent;if(!(d.data.status==="error")){f.next=11;break}s["NotificationManager"].error(d.data.msg);f.next=17;break;case 11:f.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:f.next=15;return l(v());case 15:f.next=17;return l(h());case 17:f.next=19;return l(Object(o["b"])());case 19:f.next=25;break;case 21:f.prev=21;f.t0=f["catch"](1);l(Object(o["b"])());console.log(f.t0);case 25:case"end":return f.stop()}}},e,null,[[1,21]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;r(Object(o["d"])());c.next=4;return n.a.delete("".concat(u["a"].support,"/v1.1/supports/issues/").concat(t));case 4:a=c.sent;if(!(a.data.status==="error")){c.next=9;break}s["NotificationManager"].error(a.data.msg);c.next=15;break;case 9:c.next=11;return s["NotificationManager"].success("ClassType Deleted Successfully!");case 11:c.next=13;return r(v());case 13:c.next=15;return r(h());case 15:c.next=17;return r(Object(o["b"])());case 17:c.next=24;break;case 19:c.prev=19;c.t0=c["catch"](0);c.next=23;return r(Object(o["b"])());case 23:s["NotificationManager"].error(c.t0.response.data.result);case 24:case"end":return c.stop()}}},e,null,[[0,19]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issues?component=count"));case 3:a=o.sent;t({type:c["rc"],payload:(r=a.data.data)===null||r===void 0?void 0:r.total});o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(v,"getTicketTypes","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(m,"getTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(g,"updateTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(b,"deleteTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(h,"getTicketTypeCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))}}]);