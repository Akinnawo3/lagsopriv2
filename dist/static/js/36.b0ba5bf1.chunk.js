(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{1364:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var c=r(43);var o=r(15);var s=r.n(o);var i=r(65);var u=r(36);var l=r(34);var p=r(27);var d=r(1477);var f=r(32);var v=r(1447);var m=r(98);var g=r(17);var b=r(367);var h=r(5);var y=r.n(h);var j=r(369);var k=r(166);var x=r(62);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function w(e,t,r,a,n,c,o){try{var s=e[c](o);var i=s.value}catch(e){r(e);return}if(s.done){t(i)}else{Promise.resolve(i).then(a,n)}}function O(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var c=e.apply(t,r);function o(e){w(c,a,n,o,s,"next",e)}function s(e){w(c,a,n,o,s,"throw",e)}o(undefined)})}}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);if(t){a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){C(Object(r),true).forEach(function(t){E(e,t,r[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{C(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}}return e}function E(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function S(e,t){return I(e)||R(e,t)||D(e,t)||N()}function N(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e,t){if(!e)return;if(typeof e==="string")return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}function M(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function R(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var c=false;var o,s;try{for(r=r.call(e);!(n=(o=r.next()).done);n=true){a.push(o.value);if(t&&a.length===t)break}}catch(e){c=true;s=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(c)throw s}}return a}function I(e){if(Array.isArray(e))return e}var U=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var _=function e(t){var r=t.getTicketTypes,o=t.ticketTypes,d=t.createSupport,f=t.admins,v=t.getAdmins,m=t.loadingStatus,y=t.match;var w=Object(a["useState"])({ticketId:"",forType:"",channel:"",desc:"",status:"",assignedTo:"",email:""}),C=S(w,2),N=C[0],D=C[1];var M=function e(t){return D(T(T({},N),{},E({},t.target.name,t.target.value)))};var R=N.ticketId,I=N.forType,U=N.channel,_=N.desc,A=N.status,H=N.assignedTo;var L=Object(a["useState"])(""),G=S(L,2),V=G[0],P=G[1];var q=Object(a["useState"])([]),F=S(q,2),z=F[0],B=F[1];var J=Object(a["useState"])(false),$=S(J,2),K=$[0],Q=$[1];var W=Object(a["useState"])(false),X=S(W,2),Y=X[0],Z=X[1];var ee=Object(a["useState"])(""),te=S(ee,2),re=te[0],ae=te[1];var ne=Object(a["useState"])(false),ce=S(ne,2),oe=ce[0],se=ce[1];var ie=function e(){return se(true)};var ue=function e(){return se(false)};Object(a["useEffect"])(function(){r();v()},[]);var le=function(){var e=O(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:t.preventDefault();r.next=3;return d(R,U,_,A,H,re);case 3:D({ticketId:"",forType:"",channel:"",desc:"",status:"",assignedTo:"",email:""});P("");case 5:case"end":return r.stop()}}},e)}));return function t(r){return e.apply(this,arguments)}}();var pe=function e(t){t.preventDefault();P(t.target.value)};Object(a["useEffect"])(function(){if(oe&&V.length>2){var e=setTimeout(function(){de()},2e3);return function(){return clearTimeout(e)}}else{Z(false)}},[V]);var de=function(){var e=O(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;if(I){r.next=4;break}h["NotificationManager"].error("select user type");return r.abrupt("return");case 4:Q(true);r.next=7;return s.a.get("".concat(g["a"].user,"/v1.1/admin/users?q=").concat(V,"&user_type=").concat(I));case 7:t=r.sent;B(t.data.data);Z(true);Q(false);r.next=15;break;case 13:r.prev=13;r.t0=r["catch"](0);case 15:case"end":return r.stop()}}},e,null,[[0,13]])}));return function t(){return e.apply(this,arguments)}}();var fe=function e(t){P("".concat(t.first_name," ").concat(t.last_name));ae(t.auth_id);Z(false)};return n.a.createElement("div",{className:"bg-white",style:{minHeight:"99vh"}},n.a.createElement(j["a"],null,n.a.createElement("title",null,"Create Ticket"),n.a.createElement("meta",{name:"description",content:"Create Ticket"})),n.a.createElement(k["a"],{title:"Create Tickets",match:y}),n.a.createElement(i["a"],{onSubmit:function e(t){return Object(x["b"])("create_tickets",function(){return le(t)})}},n.a.createElement("div",{className:"row  justify-content-around"},n.a.createElement("div",{className:"col-sm-6 bg-white"},n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Ticket Type"),n.a.createElement(p["a"],{type:"select",name:"ticketId",value:R,onChange:M,required:true},n.a.createElement("option",{value:""},"Select"),o&&o.map(function(e){return n.a.createElement("option",{key:e.support_id,value:e.support_id},e.title)}))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Description of ticket "),n.a.createElement(p["a"],{type:"textarea",name:"desc",value:_,onChange:M,required:true})),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Status "),n.a.createElement(p["a"],{type:"select",name:"status",value:A,onChange:M,required:true},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"1"},"New"),n.a.createElement("option",{value:"2"},"Opened"),n.a.createElement("option",{value:"3"},"In-progress"),n.a.createElement("option",{value:"4"},"Closed"),n.a.createElement("option",{value:"5"},"Unresolved"))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Channel"),n.a.createElement(p["a"],{type:"text",name:"channel",value:U,onChange:M,required:true}))),n.a.createElement("div",{className:"col-sm-5 bg-white"},n.a.createElement("div",null,n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"User Type"),n.a.createElement(p["a"],{type:"select",name:"forType",value:I,onChange:M,required:true},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"driver"},"Driver"),n.a.createElement("option",{value:"rider"},"Passenger"))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],{htmlFor:"browser"},"Ticket For"),n.a.createElement(p["a"],{onFocus:ie,onBlur:ue,type:"search",className:"search-input-lg",name:"searchData",value:V,onChange:pe,placeholder:"Search.. name, email, phone number",autoComplete:"off",required:true}),K&&n.a.createElement("div",{className:"page-loader d-flex justify-content-center mb-30 mt-30"},n.a.createElement(b["a"],{size:24})),!K&&(z===null||z===void 0?void 0:z.length)>0&&Y&&n.a.createElement("div",{className:"pr-4 w-100",style:{position:"absolute"}},n.a.createElement("div",{className:"bg-white",style:{border:"1px solid #EBEDF2",maxHeight:"200px",overflow:"auto",zIndex:10,width:"100%"}},(z===null||z===void 0?void 0:z.length)>0&&z.map(function(e){return n.a.createElement("option",{onClick:function t(){return fe(e)},key:e.auth_id,className:"p-2 custom-dropdown"},e.first_name," ",e.last_name)})))),n.a.createElement(u["a"],null,n.a.createElement(l["a"],null,"Assign To"),n.a.createElement(p["a"],{type:"select",name:"assignedTo",value:H,onChange:M,required:true},n.a.createElement("option",{value:""},"Select"),(f===null||f===void 0?void 0:f.length)>0&&f.map(function(e){return n.a.createElement("option",{key:e.auth_id,value:e.auth_id},e.first_name," ",e.last_name)})))))),n.a.createElement("div",{className:"mt-5 float-right",style:{paddingRight:"15px"}},n.a.createElement(c["a"],{disabled:m,type:"submit",variant:"contained",className:"text-white btn-success"},m?"loading..":"Submit"))))};U(_,'useState{[formData, setFormData]({ticketId: "", forType: "", channel: "", desc: "", status: "", assignedTo: "", email: ""})}\nuseState{[searchData, setSearchData]("")}\nuseState{[searchedUser, setSearchedUser]([])}\nuseState{[loading, setLoading](false)}\nuseState{[isShow, setIsShow](false)}\nuseState{[userAuthId, setUserAuthId]("")}\nuseState{[focused, setFocused](false)}\nuseEffect{}\nuseEffect{}');function A(e){return{createSupport:function t(r,a,n,c,o,s){return e(Object(v["b"])(r,a,n,c,o,s))},getAdmins:function t(){return e(Object(m["d"])())},getTicketTypes:function t(r,a){return e(Object(d["e"])(r,a))}}}var H=function e(t){return{ticketTypes:t.ticketTypes.ticketTypes,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus,admins:t.admins.admins}};var L=Object(f["b"])(H,A)(_);t["default"]=L;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(_,"SupportSetup","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\support\\supportSetup.js");e.register(A,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\support\\supportSetup.js");e.register(H,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\support\\supportSetup.js");e.register(L,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\support\\supportSetup.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))},1447:function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return f});r.d(t,"g",function(){return v});r.d(t,"f",function(){return m});r.d(t,"h",function(){return g});r.d(t,"i",function(){return b});r.d(t,"a",function(){return h});r.d(t,"c",function(){return y});r.d(t,"d",function(){return j});r.d(t,"e",function(){return k});var a=r(15);var n=r.n(a);var c=r(4);var o=r(3);var s=r(5);var i=r.n(s);var u=r(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,c,o){try{var s=e[c](o);var i=s.value}catch(e){r(e);return}if(s.done){t(i)}else{Promise.resolve(i).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var c=e.apply(t,r);function o(e){l(c,a,n,o,s,"next",e)}function s(e){l(c,a,n,o,s,"throw",e)}o(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r,a,o,i,l){return function(){var e=p(regeneratorRuntime.mark(function e(p){var d,f;return regeneratorRuntime.wrap(function e(v){while(1){switch(v.prev=v.next){case 0:d={support_id:t,channel:r,comment:a,status:o,assigned_to:i,auth_id:l};v.prev=1;v.next=4;return p(Object(c["d"])());case 4:v.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issue-log"),d);case 6:f=v.sent;if(!(f.data.status==="error")){v.next=11;break}s["NotificationManager"].error(f.data.msg);v.next=13;break;case 11:v.next=13;return s["NotificationManager"].success("SupportTickets Created Successfully!");case 13:p(Object(c["b"])());v.next=20;break;case 16:v.prev=16;v.t0=v["catch"](1);p(Object(c["b"])());s["NotificationManager"].error(v.t0.response.data.result);case 20:case"end":return v.stop()}}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var a=arguments.length>2?arguments[2]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(i){var l;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;a&&i(Object(c["c"])());!a&&i(Object(c["d"])());p.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?page=").concat(t,"&item_per_page=20&status=").concat(r));case 5:l=p.sent;if(l.data.status==="error"){s["NotificationManager"].error(l.data.msg)}else{i({type:o["jc"],payload:l.data.data})}i(Object(c["a"])());i(Object(c["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);i(Object(c["a"])());i(Object(c["b"])());s["NotificationManager"].error(p.t0.response.data.message);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;!r&&a(Object(c["c"])());r&&a(Object(c["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/").concat(t));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{a({type:o["lc"],payload:i.data.data})}a(Object(c["b"])());a(Object(c["a"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(c["b"])());a(Object(c["a"])());s["NotificationManager"].error(l.t0.response.data.message);case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a,c;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?component=count&&status=").concat(t));case 3:a=i.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:o["kc"],payload:(c=a.data.data)===null||c===void 0?void 0:c.total})}i.next=10;break;case 7:i.prev=7;i.t0=i["catch"](0);s["NotificationManager"].error(i.t0.response.data.message);case 10:case"end":return i.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var o,i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:o={status:r,issue_id:t};l.prev=1;l.next=4;return a(Object(c["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issue-status"),o);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}s["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:a(m(t,true));case 14:l.next=16;return a(Object(c["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);a(Object(c["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var o,i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:o={auth_id:r,issue_id:t};l.prev=1;l.next=4;return a(Object(c["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/assign-issue"),o);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}s["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:a(m(t,true));case 14:l.next=16;return a(Object(c["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);a(Object(c["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;t&&a(Object(c["c"])());!t&&a(Object(c["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?page=").concat(r,"&item_per_page=20"));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{a({type:o["q"],payload:i.data.data})}a(Object(c["a"])());a(Object(c["b"])());l.next=15;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(c["a"])());a(Object(c["b"])());case 15:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var j=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;c.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?component=count"));case 3:r=c.sent;if(r.data.status==="error"){s["NotificationManager"].error(r.data.msg)}else{t({type:o["r"],payload:(a=r.data)!==null&&a!==void 0&&a.data.total?r.data.data.total:0})}c.next=9;break;case 7:c.prev=7;c.t0=c["catch"](0);case 9:case"end":return c.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var k=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;r(Object(c["c"])());i.next=4;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/").concat(t));case 4:a=i.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:o["s"],payload:a.data.data})}r(Object(c["a"])());i.next=12;break;case 9:i.prev=9;i.t0=i["catch"](0);r(Object(c["a"])());case 12:case"end":return i.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createSupportTickets","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(v,"getSupportTickets","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(m,"getSupportTicket","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(g,"getSupportTicketsCount","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(b,"updateSupportTickets","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(h,"assignSupportTickets","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(y,"getContactUs","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(j,"getContactUsCount","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js");e.register(k,"getContactUsDetails","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\supportAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))},1477:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return f});r.d(t,"e",function(){return v});r.d(t,"c",function(){return m});r.d(t,"f",function(){return g});r.d(t,"b",function(){return b});r.d(t,"d",function(){return h});var a=r(15);var n=r.n(a);var c=r(4);var o=r(3);var s=r(5);var i=r.n(s);var u=r(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,c,o){try{var s=e[c](o);var i=s.value}catch(e){r(e);return}if(s.done){t(i)}else{Promise.resolve(i).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var c=e.apply(t,r);function o(e){l(c,a,n,o,s,"next",e)}function s(e){l(c,a,n,o,s,"throw",e)}o(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r,a,o){return function(){var e=p(regeneratorRuntime.mark(function e(i){var l,p;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:l={title:t,user_type:r,issues:a,description:o};d.prev=1;d.next=4;return i(Object(c["d"])());case 4:d.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issues"),l);case 6:p=d.sent;if(!(p.data.status==="error")){d.next=11;break}s["NotificationManager"].error(p.data.msg);d.next=17;break;case 11:d.next=13;return s["NotificationManager"].success("Ticket Created Successfully!");case 13:d.next=15;return i(v());case 15:d.next=17;return i(h());case 17:i(Object(c["b"])());d.next=24;break;case 20:d.prev=20;d.t0=d["catch"](1);i(Object(c["b"])());s["NotificationManager"].error(d.t0.response.data.result);case 24:case"end":return d.stop()}}},e,null,[[1,20]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var r=arguments.length>1?arguments[1]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;r&&a(Object(c["c"])());!r&&a(Object(c["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issues/?page_no=").concat(t,"&no_per_page=20"));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{a({type:o["oc"],payload:i.data.data})}a(Object(c["a"])());a(Object(c["b"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(c["b"])());a(Object(c["a"])());s["NotificationManager"].error("network error, try again later");case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;r&&a(Object(c["c"])());!r&&a(Object(c["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/user/support/").concat(t,"/"));case 5:i=l.sent;if(i.data.status==="error"){}else{a({type:o["nc"],payload:i.data.data})}a(Object(c["a"])());a(Object(c["b"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(c["b"])());a(Object(c["a"])());s["NotificationManager"].error("network error, try again later");case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,r,a,o,i){return function(){var e=p(regeneratorRuntime.mark(function e(l){var p,d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:p={title:r,user_type:a,issues:o,description:i};f.prev=1;f.next=4;return l(Object(c["d"])());case 4:f.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issues/").concat(t),p);case 6:d=f.sent;if(!(d.data.status==="error")){f.next=11;break}s["NotificationManager"].error(d.data.msg);f.next=17;break;case 11:f.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:f.next=15;return l(v());case 15:f.next=17;return l(h());case 17:f.next=19;return l(Object(c["b"])());case 19:f.next=25;break;case 21:f.prev=21;f.t0=f["catch"](1);l(Object(c["b"])());console.log(f.t0);case 25:case"end":return f.stop()}}},e,null,[[1,21]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;r(Object(c["d"])());o.next=4;return n.a.delete("".concat(u["a"].support,"/v1.1/supports/issues/").concat(t));case 4:a=o.sent;if(!(a.data.status==="error")){o.next=9;break}s["NotificationManager"].error(a.data.msg);o.next=15;break;case 9:o.next=11;return s["NotificationManager"].success("ClassType Deleted Successfully!");case 11:o.next=13;return r(v());case 13:o.next=15;return r(h());case 15:o.next=17;return r(Object(c["b"])());case 17:o.next=24;break;case 19:o.prev=19;o.t0=o["catch"](0);o.next=23;return r(Object(c["b"])());case 23:s["NotificationManager"].error(o.t0.response.data.result);case 24:case"end":return o.stop()}}},e,null,[[0,19]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;c.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issues?component=count"));case 3:a=c.sent;t({type:o["pc"],payload:(r=a.data.data)===null||r===void 0?void 0:r.total});c.next=9;break;case 7:c.prev=7;c.t0=c["catch"](0);case 9:case"end":return c.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createTicketType","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\ticketTypeAction.js");e.register(v,"getTicketTypes","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\ticketTypeAction.js");e.register(m,"getTicketType","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\ticketTypeAction.js");e.register(g,"updateTicketType","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\ticketTypeAction.js");e.register(b,"deleteTicketType","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\ticketTypeAction.js");e.register(h,"getTicketTypeCount","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\ticketTypeAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))}}]);