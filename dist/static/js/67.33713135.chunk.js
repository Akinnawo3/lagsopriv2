(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{1373:function(t,e,a){"use strict";a.r(e);(function(t){var r=a(0);var n=a.n(r);var o=a(223);var c=a(225);var s=a(18);var i=a(224);var u=a(116);var l=a(66);var p=a(20);var d=a(34);var f=a(104);var m=a.n(f);var v=a(103);var g=a(40);var b=a(1449);var h=a(102);var x=a(166);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();function y(t,e){return O(t)||A(t,e)||k(t,e)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(t,e){if(!t)return;if(typeof t==="string")return w(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor)a=t.constructor.name;if(a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(t,e)}function w(t,e){if(e==null||e>t.length)e=t.length;for(var a=0,r=new Array(e);a<e;a++){r[a]=t[a]}return r}function A(t,e){var a=t&&(typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var c,s;try{for(a=a.call(t);!(n=(c=a.next()).done);n=true){r.push(c.value);if(e&&r.length===e)break}}catch(t){o=true;s=t}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw s}}return r}function O(t){if(Array.isArray(t))return t}var P=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(t){return t};var E=function t(e){var a=e.contactUs,d=e.getContactUs,f=e.contactUsCount,b=e.getContactUsCount,j=e.loading,k=e.match;var w=Object(r["useState"])(1),A=y(w,2),O=A[0],P=A[1];Object(r["useEffect"])(function(){d(true);b()},[]);var E=function t(e){P(e);d("",e);window.scrollTo(0,0)};console.log(f);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(x["a"],{title:"Contact Us",match:k}),!j&&(a===null||a===void 0?void 0:a.length)>0&&n.a.createElement(l["a"],{heading:"Contact us",fullBlock:true},n.a.createElement("div",{className:"float-right"},n.a.createElement("a",{href:"#",onClick:function t(e){return e.preventDefault()},className:"btn-sm btn-outline-default mr-10"},"Export to Excel")),n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(o["a"],null,n.a.createElement(i["a"],null,n.a.createElement(u["a"],{hover:true},n.a.createElement(s["a"],null,"Subject"),n.a.createElement(s["a"],null,"Description"),n.a.createElement(s["a"],null,"Date/ Time"),n.a.createElement(s["a"],null,"Status"),n.a.createElement(s["a"],null,"Action"))),n.a.createElement(c["a"],null,n.a.createElement(r["Fragment"],null,a.map(function(t,e){return n.a.createElement(u["a"],{hover:true,key:e},n.a.createElement(s["a"],null,t.subject),n.a.createElement(s["a"],null,Object(g["D"])(t.description)),n.a.createElement(s["a"],null,Object(g["a"])(t.createdAt)),n.a.createElement(s["a"],null,n.a.createElement(h["a"],{color:t.status===1?"success":"danger"},t.status===1?"Closed":"Open")),n.a.createElement(s["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary"},n.a.createElement(p["b"],{to:"/admin/support/contact-us/".concat(t.contact_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(m.a,{activePage:O,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:f,onChange:E}))),(a===null||a===void 0?void 0:a.length)<1&&n.a.createElement(v["a"],null))};P(E,"useState{[currentPage, setCurrentPage](1)}\nuseEffect{}");function M(t){return{getContactUs:function e(a,r){return t(Object(b["c"])(a,r))},getContactUsCount:function e(){return t(Object(b["d"])())}}}var C=function t(e){return{contactUs:e.support.contactUs,contactUsCount:e.support.contactUsCount,loading:e.loading.loading,loadingStatus:e.loading.loadingStatus}};var N=Object(d["b"])(C,M)(E);e["default"]=N;(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!t){return}t.register(E,"ContactUs","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUs.js");t.register(M,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUs.js");t.register(C,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUs.js");t.register(N,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/contactUs.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,a(7)(t))},1449:function(t,e,a){"use strict";(function(t){a.d(e,"b",function(){return f});a.d(e,"g",function(){return m});a.d(e,"f",function(){return v});a.d(e,"h",function(){return g});a.d(e,"i",function(){return b});a.d(e,"a",function(){return h});a.d(e,"c",function(){return x});a.d(e,"d",function(){return y});a.d(e,"e",function(){return j});var r=a(15);var n=a.n(r);var o=a(4);var c=a(3);var s=a(5);var i=a.n(s);var u=a(17);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();function l(t,e,a,r,n,o,c){try{var s=t[o](c);var i=s.value}catch(t){a(t);return}if(s.done){e(i)}else{Promise.resolve(i).then(r,n)}}function p(t){return function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function c(t){l(o,r,n,c,s,"next",t)}function s(t){l(o,r,n,c,s,"throw",t)}c(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(t){return t};var f=function t(e,a,r,c,i,l){return function(){var t=p(regeneratorRuntime.mark(function t(p){var d,f;return regeneratorRuntime.wrap(function t(m){while(1){switch(m.prev=m.next){case 0:d={support_id:e,channel:a,comment:r,status:c,assigned_to:i,auth_id:l};m.prev=1;m.next=4;return p(Object(o["d"])());case 4:m.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issue-log"),d);case 6:f=m.sent;if(!(f.data.status==="error")){m.next=11;break}s["NotificationManager"].error(f.data.msg);m.next=13;break;case 11:m.next=13;return s["NotificationManager"].success("SupportTickets Created Successfully!");case 13:p(Object(o["b"])());m.next=20;break;case 16:m.prev=16;m.t0=m["catch"](1);p(Object(o["b"])());s["NotificationManager"].error(m.t0.response.data.result);case 20:case"end":return m.stop()}}},t,null,[[1,16]])}));return function(e){return t.apply(this,arguments)}}()};var m=function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var r=arguments.length>2?arguments[2]:undefined;return function(){var t=p(regeneratorRuntime.mark(function t(i){var l;return regeneratorRuntime.wrap(function t(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;r&&i(Object(o["c"])());!r&&i(Object(o["d"])());p.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?page=").concat(e,"&item_per_page=20&status=").concat(a));case 5:l=p.sent;if(l.data.status==="error"){s["NotificationManager"].error(l.data.msg)}else{i({type:c["lc"],payload:l.data.data})}i(Object(o["a"])());i(Object(o["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);i(Object(o["a"])());i(Object(o["b"])());s["NotificationManager"].error(p.t0.response.data.message);case 16:case"end":return p.stop()}}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()};var v=function t(e,a){return function(){var t=p(regeneratorRuntime.mark(function t(r){var i;return regeneratorRuntime.wrap(function t(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;!a&&r(Object(o["c"])());a&&r(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/").concat(e));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{r({type:c["nc"],payload:i.data.data})}r(Object(o["b"])());r(Object(o["a"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);r(Object(o["b"])());r(Object(o["a"])());s["NotificationManager"].error(l.t0.response.data.message);case 16:case"end":return l.stop()}}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()};var g=function t(e){return function(){var t=p(regeneratorRuntime.mark(function t(a){var r,o;return regeneratorRuntime.wrap(function t(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?component=count&&status=").concat(e));case 3:r=i.sent;if(r.data.status==="error"){s["NotificationManager"].error(r.data.msg)}else{a({type:c["mc"],payload:(o=r.data.data)===null||o===void 0?void 0:o.total})}i.next=10;break;case 7:i.prev=7;i.t0=i["catch"](0);s["NotificationManager"].error(i.t0.response.data.message);case 10:case"end":return i.stop()}}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()};var b=function t(e,a){return function(){var t=p(regeneratorRuntime.mark(function t(r){var c,i;return regeneratorRuntime.wrap(function t(l){while(1){switch(l.prev=l.next){case 0:c={status:a,issue_id:e};l.prev=1;l.next=4;return r(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issue-status"),c);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}s["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:r(v(e,true));case 14:l.next=16;return r(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);r(Object(o["b"])());case 21:case"end":return l.stop()}}},t,null,[[1,18]])}));return function(e){return t.apply(this,arguments)}}()};var h=function t(e,a){return function(){var t=p(regeneratorRuntime.mark(function t(r){var c,i;return regeneratorRuntime.wrap(function t(l){while(1){switch(l.prev=l.next){case 0:c={auth_id:a,issue_id:e};l.prev=1;l.next=4;return r(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/assign-issue"),c);case 6:i=l.sent;if(!(i.data.status==="error")){l.next=11;break}s["NotificationManager"].error(i.data.msg);l.next=14;break;case 11:l.next=13;return s["NotificationManager"].success("Ticket Updated Successfully!");case 13:r(v(e,true));case 14:l.next=16;return r(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);r(Object(o["b"])());case 21:case"end":return l.stop()}}},t,null,[[1,18]])}));return function(e){return t.apply(this,arguments)}}()};var x=function t(e){var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return function(){var t=p(regeneratorRuntime.mark(function t(r){var i;return regeneratorRuntime.wrap(function t(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;e&&r(Object(o["c"])());!e&&r(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?page=").concat(a,"&item_per_page=20"));case 5:i=l.sent;if(i.data.status==="error"){s["NotificationManager"].error(i.data.msg)}else{r({type:c["q"],payload:i.data.data})}r(Object(o["a"])());r(Object(o["b"])());l.next=15;break;case 11:l.prev=11;l.t0=l["catch"](0);r(Object(o["a"])());r(Object(o["b"])());case 15:case"end":return l.stop()}}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()};var y=function t(){return function(){var t=p(regeneratorRuntime.mark(function t(e){var a,r;return regeneratorRuntime.wrap(function t(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?component=count"));case 3:a=o.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{e({type:c["r"],payload:(r=a.data)!==null&&r!==void 0&&r.data.total?a.data.data.total:0})}o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()};var j=function t(e){return function(){var t=p(regeneratorRuntime.mark(function t(a){var r;return regeneratorRuntime.wrap(function t(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;a(Object(o["c"])());i.next=4;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/").concat(e));case 4:r=i.sent;if(r.data.status==="error"){s["NotificationManager"].error(r.data.msg)}else{a({type:c["s"],payload:r.data.data})}a(Object(o["a"])());i.next=12;break;case 9:i.prev=9;i.t0=i["catch"](0);a(Object(o["a"])());case 12:case"end":return i.stop()}}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()};(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!t){return}t.register(f,"createSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(m,"getSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(v,"getSupportTicket","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(g,"getSupportTicketsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(b,"updateSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(h,"assignSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(x,"getContactUs","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(y,"getContactUsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");t.register(j,"getContactUsDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,a(7)(t))}}]);