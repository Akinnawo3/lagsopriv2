(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{1369:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var o=r(166);var s=r(34);var i=r(1449);var c=r(1460);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t){return v(e)||f(e,t)||p(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(!e)return;if(typeof e==="string")return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}function d(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function f(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var s,i;try{for(r=r.call(e);!(n=(s=r.next()).done);n=true){a.push(s.value);if(t&&a.length===t)break}}catch(e){o=true;i=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw i}}return a}function v(e){if(Array.isArray(e))return e}var m=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var g=r(229);var b=function e(t){var r=t.history,s=t.match,i=t.getSupportTickets,l=t.getSupportTicketsCount,p=t.support;var d=g.parse(r.location.search,{ignoreQueryPrefix:true}).page;var f=Object(a["useState"])(function(){return d===undefined?1:parseInt(d,10)}),v=u(f,2),m=v[0],b=v[1];Object(a["useEffect"])(function(){if(d===undefined||p.length<1){i(m,3,true);l(4)}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(o["a"],{title:"Tickets",match:s}),n.a.createElement(c["a"],{support_type:4,header:"Closed Tickets"}))};m(b,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function h(e){return{getSupportTickets:function t(r,a,n){return e(Object(i["g"])(r,a,n))},getSupportTicketsCount:function t(r){return e(Object(i["h"])(r))}}}var y=function e(t){return{support:t.support.support,supportCount:t.support.supportCount,ticketTypes:t.ticketTypes.ticketTypes,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var k=Object(s["b"])(y,h)(b);t["default"]=k;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(b,"ClosedSupport","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/closedSupport.js");e.register(h,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/closedSupport.js");e.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/closedSupport.js");e.register(k,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/closedSupport.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1449:function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return f});r.d(t,"g",function(){return v});r.d(t,"f",function(){return m});r.d(t,"h",function(){return g});r.d(t,"i",function(){return b});r.d(t,"a",function(){return h});r.d(t,"c",function(){return y});r.d(t,"d",function(){return k});r.d(t,"e",function(){return x});var a=r(15);var n=r.n(a);var o=r(4);var s=r(3);var i=r(5);var c=r.n(i);var u=r(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,o,s){try{var i=e[o](s);var c=i.value}catch(e){r(e);return}if(i.done){t(c)}else{Promise.resolve(c).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function s(e){l(o,a,n,s,i,"next",e)}function i(e){l(o,a,n,s,i,"throw",e)}s(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r,a,s,c,l){return function(){var e=p(regeneratorRuntime.mark(function e(p){var d,f;return regeneratorRuntime.wrap(function e(v){while(1){switch(v.prev=v.next){case 0:d={support_id:t,channel:r,comment:a,status:s,assigned_to:c,auth_id:l};v.prev=1;v.next=4;return p(Object(o["d"])());case 4:v.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issue-log"),d);case 6:f=v.sent;if(!(f.data.status==="error")){v.next=11;break}i["NotificationManager"].error(f.data.msg);v.next=13;break;case 11:v.next=13;return i["NotificationManager"].success("SupportTickets Created Successfully!");case 13:p(Object(o["b"])());v.next=20;break;case 16:v.prev=16;v.t0=v["catch"](1);p(Object(o["b"])());i["NotificationManager"].error(v.t0.response.data.result);case 20:case"end":return v.stop()}}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var a=arguments.length>2?arguments[2]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(c){var l;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;a&&c(Object(o["c"])());!a&&c(Object(o["d"])());p.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?page=").concat(t,"&item_per_page=20&status=").concat(r));case 5:l=p.sent;if(l.data.status==="error"){i["NotificationManager"].error(l.data.msg)}else{c({type:s["lc"],payload:l.data.data})}c(Object(o["a"])());c(Object(o["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);c(Object(o["a"])());c(Object(o["b"])());i["NotificationManager"].error(p.t0.response.data.message);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var c;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;!r&&a(Object(o["c"])());r&&a(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/").concat(t));case 5:c=l.sent;if(c.data.status==="error"){i["NotificationManager"].error(c.data.msg)}else{a({type:s["nc"],payload:c.data.data})}a(Object(o["b"])());a(Object(o["a"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(o["b"])());a(Object(o["a"])());i["NotificationManager"].error(l.t0.response.data.message);case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a,o;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;c.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issue-log/?component=count&&status=").concat(t));case 3:a=c.sent;if(a.data.status==="error"){i["NotificationManager"].error(a.data.msg)}else{r({type:s["mc"],payload:(o=a.data.data)===null||o===void 0?void 0:o.total})}c.next=10;break;case 7:c.prev=7;c.t0=c["catch"](0);i["NotificationManager"].error(c.t0.response.data.message);case 10:case"end":return c.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var s,c;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:s={status:r,issue_id:t};l.prev=1;l.next=4;return a(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issue-status"),s);case 6:c=l.sent;if(!(c.data.status==="error")){l.next=11;break}i["NotificationManager"].error(c.data.msg);l.next=14;break;case 11:l.next=13;return i["NotificationManager"].success("Ticket Updated Successfully!");case 13:a(m(t,true));case 14:l.next=16;return a(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);a(Object(o["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var s,c;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:s={auth_id:r,issue_id:t};l.prev=1;l.next=4;return a(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/assign-issue"),s);case 6:c=l.sent;if(!(c.data.status==="error")){l.next=11;break}i["NotificationManager"].error(c.data.msg);l.next=14;break;case 11:l.next=13;return i["NotificationManager"].success("Ticket Updated Successfully!");case 13:a(m(t,true));case 14:l.next=16;return a(Object(o["b"])());case 16:l.next=21;break;case 18:l.prev=18;l.t0=l["catch"](1);a(Object(o["b"])());case 21:case"end":return l.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return function(){var e=p(regeneratorRuntime.mark(function e(a){var c;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;t&&a(Object(o["c"])());!t&&a(Object(o["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?page=").concat(r,"&item_per_page=20"));case 5:c=l.sent;if(c.data.status==="error"){i["NotificationManager"].error(c.data.msg)}else{a({type:s["q"],payload:c.data.data})}a(Object(o["a"])());a(Object(o["b"])());l.next=15;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(o["a"])());a(Object(o["b"])());case 15:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var k=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/?component=count"));case 3:r=o.sent;if(r.data.status==="error"){i["NotificationManager"].error(r.data.msg)}else{t({type:s["r"],payload:(a=r.data)!==null&&a!==void 0&&a.data.total?r.data.data.total:0})}o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var x=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;r(Object(o["c"])());c.next=4;return n.a.get("".concat(u["a"].support,"/v1.1/contacts/").concat(t));case 4:a=c.sent;if(a.data.status==="error"){i["NotificationManager"].error(a.data.msg)}else{r({type:s["s"],payload:a.data.data})}r(Object(o["a"])());c.next=12;break;case 9:c.prev=9;c.t0=c["catch"](0);r(Object(o["a"])());case 12:case"end":return c.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(v,"getSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(m,"getSupportTicket","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(g,"getSupportTicketsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(b,"updateSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(h,"assignSupportTickets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(y,"getContactUs","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(k,"getContactUsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js");e.register(x,"getContactUsDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/supportAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1460:function(e,t,r){"use strict";(function(e){var a=r(0);var n=r.n(a);var o=r(223);var s=r(225);var i=r(18);var c=r(224);var u=r(116);var l=r(67);var p=r(20);var d=r(34);var f=r(104);var v=r.n(f);var m=r(103);var g=r(40);var b=r(1449);var h=r(102);var y=r(6);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function k(e,t){return P(e)||A(e,t)||j(e,t)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e,t){if(!e)return;if(typeof e==="string")return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}function w(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function A(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var s,i;try{for(r=r.call(e);!(n=(s=r.next()).done);n=true){a.push(s.value);if(t&&a.length===t)break}}catch(e){o=true;i=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw i}}return a}function P(e){if(Array.isArray(e))return e}var O=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var S=r(229);var E=function e(t){var r=t.support,d=t.getSupportTickets,f=t.loading,b=t.support_type,x=t.supportCount,j=t.header;var w=Object(y["g"])();var A=S.parse(w.location.search,{ignoreQueryPrefix:true}).page;var P=Object(a["useState"])(function(){return A===undefined?1:parseInt(A,10)}),O=k(P,2),E=O[0],M=O[1];var T=function e(t){w.push("".concat(w.location.pathname,"?page=").concat(t));M(t);d(t,b);window.scrollTo(0,0)};return n.a.createElement("div",null,!f&&(r===null||r===void 0?void 0:r.length)>0&&n.a.createElement(l["a"],{heading:j,fullBlock:true},n.a.createElement("div",{className:"float-right"},n.a.createElement("a",{href:"#",onClick:function e(t){return t.preventDefault()},className:"btn-sm btn-outline-default mr-10"},"Export to Excel")),n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(o["a"],null,n.a.createElement(c["a"],null,n.a.createElement(u["a"],{hover:true},n.a.createElement(i["a"],null,"Status"),n.a.createElement(i["a"],null,"User Name"),n.a.createElement(i["a"],null,"User Type"),n.a.createElement(i["a"],null,"Date/ Time"),n.a.createElement(i["a"],null,"Trip Reference"),n.a.createElement(i["a"],null,"Assigned"),n.a.createElement(i["a"],null,"Action"))),n.a.createElement(s["a"],null,n.a.createElement(a["Fragment"],null,r.map(function(e,t){var r,a,o,s;return n.a.createElement(u["a"],{hover:true,key:t},n.a.createElement(i["a"],null,Object(g["w"])(e.status)),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(r=e.user_data)===null||r===void 0?void 0:r.first_name," ",e===null||e===void 0?void 0:(a=e.user_data)===null||a===void 0?void 0:a.first_last),n.a.createElement(i["a"],{className:"text-capitalize"},e===null||e===void 0?void 0:(o=e.user_data)===null||o===void 0?void 0:o.user_type),n.a.createElement(i["a"],null,Object(g["a"])(e.createdAt)),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(s=e.trip_data)===null||s===void 0?void 0:s.trip_ref),n.a.createElement(i["a"],null,n.a.createElement(h["a"],{color:e.assign_to?"success":"danger"},e.assign_to?"Yes":"No")),n.a.createElement(i["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary"},n.a.createElement(p["b"],{to:"/admin/support/".concat(e.issue_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(v.a,{activePage:E,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:x,onChange:T}))),(r===null||r===void 0?void 0:r.length)<1&&n.a.createElement(m["a"],null))};O(E,"useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}",function(){return[y["g"]]});function M(e){return{getSupportTickets:function t(r,a,n){return e(Object(b["g"])(r,a,n))}}}var T=function e(t){return{support:t.support.support,supportCount:t.support.supportCount,ticketTypes:t.ticketTypes.ticketTypes,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var H=Object(d["b"])(T,M)(E);t["a"]=H;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(E,"SupportTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/components/supportTable.js");e.register(M,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/components/supportTable.js");e.register(T,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/components/supportTable.js");e.register(H,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/components/supportTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))}}]);