(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{1374:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var o=a(52);var s=a(51);var c=a(54);var i=a(62);var u=a(32);var l=a(29);var p=a(23);var d=a(43);var f=a(34);var m=a(369);var v=a(166);var g=a(1449);var b=a(97);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function h(e,t,a,r,n,o,s){try{var c=e[o](s);var i=c.value}catch(e){a(e);return}if(c.done){t(i)}else{Promise.resolve(i).then(r,n)}}function y(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function s(e){h(o,r,n,s,c,"next",e)}function c(e){h(o,r,n,s,c,"throw",e)}s(undefined)})}}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(t){r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};if(t%2){w(Object(a),true).forEach(function(t){x(e,t,a[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(a))}else{w(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}}return e}function x(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}function k(e,t){return M(e)||P(e,t)||A(e,t)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(!e)return;if(typeof e==="string")return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}function E(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function P(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var s,c;try{for(a=a.call(e);!(n=(s=a.next()).done);n=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){o=true;c=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw c}}return r}function M(e){if(Array.isArray(e))return e}var N=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var S=function e(t){var a=t.getContactUsDetails,f=t.match,g=t.updateSupportTicket,b=t.contactUsDetails,h=t.ticket,w=t.getTicketType,O=t.admins,A=t.getAdmins,E=t.assignSupportTicket;var P=Object(r["useState"])({status:""}),M=k(P,2),N=M[0],S=M[1];var U=Object(r["useState"])(""),R=k(U,2),T=R[0],D=R[1];var _=Object(r["useState"])(false),C=k(_,2),H=C[0],G=C[1];var L=Object(r["useState"])(false),X=k(L,2),I=X[0],q=X[1];Object(r["useEffect"])(function(){if(f.params.id){a(f.params.id)}},[f.params.id]);var J=function e(t){return S(j(j({},N),{},x({},t.target.name,t.target.value)))};var z=N.status;var F=function e(){G(true)};var $=function e(){G(false)};var B=function e(){q(true)};var K=function e(){q(false)};var Q=function(){var e=y(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:t.preventDefault();g(b===null||b===void 0?void 0:b.ticket_id,z);$();case 3:case"end":return a.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();var V=function(){var e=y(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:t.preventDefault();E(b===null||b===void 0?void 0:b.ticket_id,T);K();case 3:case"end":return a.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{style:{minHeight:"90vh"}},n.a.createElement(m["a"],null,n.a.createElement("title",null,"Contact Us"),n.a.createElement("meta",{name:"description",content:"Contact Us Details"})),n.a.createElement(v["a"],{title:"Contact Us details",match:f}),n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ticket Type")),h===null||h===void 0?void 0:h.name),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ticket Id")),b===null||b===void 0?void 0:b.ticket_id),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User type")),b===null||b===void 0?void 0:b.for_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Channel")),b===null||b===void 0?void 0:b.channel))),n.a.createElement(o["a"],{isOpen:H,toggle:function e(){return $()}},n.a.createElement(s["a"],{toggle:function e(){return $()}},"Update Ticket Status"),n.a.createElement(c["a"],null,n.a.createElement(i["a"],{onSubmit:Q},n.a.createElement(u["a"],null,n.a.createElement(l["a"],{for:"phoneNumber"},"status "),n.a.createElement(p["a"],{type:"select",name:"status",value:z,onChange:J,required:true},n.a.createElement("option",{value:"1"},"New"),n.a.createElement("option",{value:"2"},"Opened"),n.a.createElement("option",{value:"3"},"In-progress"),n.a.createElement("option",{value:"4"},"Closed"),n.a.createElement("option",{value:"5"},"Unresolved"))),n.a.createElement(d["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))),n.a.createElement(o["a"],{isOpen:I,toggle:function e(){return K()}},n.a.createElement(s["a"],{toggle:function e(){return K()}},"Assign Admin"),n.a.createElement(c["a"],null,n.a.createElement(i["a"],{onSubmit:V},n.a.createElement(l["a"],null,"Assign To"),n.a.createElement(p["a"],{type:"select",name:"assignedTo",value:T,onChange:function e(t){return D(t.target.value)},required:true},n.a.createElement("option",{value:""},"Select"),(O===null||O===void 0?void 0:O.length)>0&&O.map(function(e){return n.a.createElement("option",{key:e.auth_id,value:e.auth_id},e.first_name," ",e.last_name)})),n.a.createElement(d["a"],{type:"submit",variant:"contained",className:"text-white btn-success mt-3"},"Submit"))))))))};N(S,"useState{[formData, setFormData]({status: ''})}\nuseState{[adminId, setAdminId]('')}\nuseState{[addNewUserModal, setAddNewUserModal](false)}\nuseState{[addNewUserModal2, setAddNewUserModal2](false)}\nuseEffect{}");function U(e){return{getContactUsDetails:function t(a){return e(Object(g["e"])(a))},getAdmins:function t(){return e(Object(b["d"])())}}}var R=function e(t){return{contactUsDetails:t.support.contactUsDetails,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus,admins:t.admins.admins}};var T=Object(f["b"])(R,U)(S);t["default"]=T;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(S,"ContactUsDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUsDetails.js");e.register(U,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUsDetails.js");e.register(R,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUsDetails.js");e.register(T,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUsDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1449:function(e,t,a){"use strict";(function(e){a.d(t,"b",function(){return f});a.d(t,"g",function(){return m});a.d(t,"f",function(){return v});a.d(t,"h",function(){return g});a.d(t,"i",function(){return b});a.d(t,"a",function(){return h});a.d(t,"c",function(){return y});a.d(t,"d",function(){return w});a.d(t,"e",function(){return j});var r=a(15);var n=a.n(r);var o=a(4);var s=a(3);var c=a(5);var i=a.n(c);var u=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,a,r,n,o,s){try{var c=e[o](s);var i=c.value}catch(e){a(e);return}if(c.done){t(i)}else{Promise.resolve(i).then(r,n)}}function p(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function s(e){l(o,r,n,s,c,"next",e)}function c(e){l(o,r,n,s,c,"throw",e)}s(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,a,r,s,i,l){return function(){var e=p(regeneratorRuntime.mark(function e(p){var d,f;return regeneratorRuntime.wrap(function e(m){while(1){switch(m.prev=m.next){case 0:d={support_id:t,channel:a,comment:r,status:s,assigned_to:i,auth_id:l};m.prev=1;m.next=4;return p(Object(o["d"])());case 4:m.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issue-log"),d);case 6:f=m.sent;if(!(f.data.status==="error")){m.next=11;break}c["NotificationManager"].error(f.data.msg);m.next=13;break;case 11:m.next=13;return c["NotificationManager"].success("SupportTickets Created Successfully!");case 13:p(Object(o["b"])());m.next=20;break;case 16:m.prev=16;m.t0=m["catch"](1);p(Object(o["b"])());c["NotificationManager"].error(m.t0.response.data.result);case 20:case"end":return m.stop()}}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var r=arguments.length>2?arguments[2]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(i){var l;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;r&&i(Object(o["c"])());!r&&i(Object(o["d"])());p.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?page=").concat(t,"&item_per_page=20&status=").concat(a));case 5:l=p.sent;if(l.data.status==="error"){c["NotificationManager"].error(l.data.msg)}else{i({type:s["lc"],payload:l.data.data})}i(Object(o["a"])());i(Object(o["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);i(Object(o["a"])());i(Object(o["b"])());c["NotificationManager"].error(p.t0.response.data.message);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t,a){return function(){var e=p(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;!a&&r(Object(o["c"])());a&&r(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/").concat(t));case 5:i=l.sent;if(i.data.status==="error"){c["NotificationManager"].error(i.data.msg)}else{r({type:s["nc"],payload:i.data.data})}r(Object(o["b"])());r(Object(o["a"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);r(Object(o["b"])());r(Object(o["a"])());c["NotificationManager"].error(l.t0.response.data.message);case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(a){var r,o;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?component=count&&status=").concat(t));case 3:r=i.sent;if(r.data.status==="error"){c["NotificationManager"].error(r.data.msg)}else{a({type:s["mc"],payload:(o=r.data.data)===null||o===void 0?void 0:o.total})}i.next=10;break;case 7:i.prev=7;i.t0=i["catch"](0);c["NotificationManager"].error(i.t0.response.data.message);case 10:case"end":return i.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,a){return function(){var e=p(regeneratorRuntime.mark(function e(r){var s,i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:s={status:a,issue_id:t};l.prev=1;l.next=4;return r(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issue-status"),s);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}c["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return c["NotificationManager"].success("Ticket Updated Successfully!");case 13:r(v(t,true));case 14:l.next=16;return r(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);r(Object(o["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,a){return function(){var e=p(regeneratorRuntime.mark(function e(r){var s,i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:s={auth_id:a,issue_id:t};l.prev=1;l.next=4;return r(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/assign-issue"),s);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}c["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return c["NotificationManager"].success("Ticket Updated Successfully!");case 13:r(v(t,true));case 14:l.next=16;return r(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);r(Object(o["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return function(){var e=p(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;t&&r(Object(o["c"])());!t&&r(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?page=").concat(a,"&item_per_page=20"));case 5:i=l.sent;if(i.data.status==="error"){c["NotificationManager"].error(i.data.msg)}else{r({type:s["q"],payload:i.data.data})}r(Object(o["a"])());r(Object(o["b"])());l.next=15;break;case 11:l.prev=11;l.t0=l["catch"](0);r(Object(o["a"])());r(Object(o["b"])());case 15:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var w=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?component=count"));case 3:a=o.sent;if(a.data.status==="error"){c["NotificationManager"].error(a.data.msg)}else{t({type:s["r"],payload:(r=a.data)!==null&&r!==void 0&&r.data.total?a.data.data.total:0})}o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var j=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;a(Object(o["c"])());i.next=4;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/").concat(t));case 4:r=i.sent;if(r.data.status==="error"){c["NotificationManager"].error(r.data.msg)}else{a({type:s["s"],payload:r.data.data})}a(Object(o["a"])());i.next=12;break;case 9:i.prev=9;i.t0=i["catch"](0);a(Object(o["a"])());case 12:case"end":return i.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(m,"getSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(v,"getSupportTicket","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(g,"getSupportTicketsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(b,"updateSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(h,"assignSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(y,"getContactUs","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(w,"getContactUsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(j,"getContactUsDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);