(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{1323:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var o=a(223);var i=a(225);var c=a(18);var l=a(224);var s=a(116);var u=a(166);var d=a(67);var f=a(20);var p=a(34);var v=a(1466);var m=a(104);var g=a.n(m);var h=a(103);var b=a(115);var y=a(102);var x=a(40);var w=a(64);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function j(e,t,a,r,n,o,i){try{var c=e[o](i);var l=c.value}catch(e){a(e);return}if(c.done){t(l)}else{Promise.resolve(l).then(r,n)}}function E(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){j(o,r,n,i,c,"next",e)}function c(e){j(o,r,n,i,c,"throw",e)}i(undefined)})}}function _(e,t){return M(e)||P(e,t)||A(e,t)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(!e)return;if(typeof e==="string")return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}function O(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function P(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var i,c;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){o=true;c=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw c}}return r}function M(e){if(Array.isArray(e))return e}var N=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var S=a(229);var R=function e(t){var a=t.history,p=t.match,v=t.getSchedule,m=t.schedule,j=t.loading,k=t.getScheduleCount,A=t.scheduleCount,O=t.exportSchedule;var P=S.parse(a.location.search,{ignoreQueryPrefix:true}).page;var M=Object(r["useState"])(function(){return P===undefined?1:parseInt(P,10)}),N=_(M,2),R=N[0],C=N[1];var H=Object(r["useState"])(""),G=_(H,2),L=G[0],X=G[1];var D=Object(r["useState"])(""),F=_(D,2),I=F[0],T=F[1];var J=Object(r["useRef"])(null);Object(r["useEffect"])(function(){if(P===undefined||m.length<1){v(R,true);k()}},[]);var Q=function(){var e=E(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:a.push("".concat(a.location.pathname,"?page=").concat(t));r.next=3;return C(t);case 3:r.next=5;return window.scrollTo(0,0);case 5:v(t);case 6:case"end":return r.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();var V=function e(){v(1,false,L,I);k(L,I)};var z=function e(){J.current.open()};var U=function e(){J.current.close();O(L,I)};console.log(m);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(u["a"],{title:"Schedules",match:p}),n.a.createElement(d["a"],{heading:"Schedules",fullBlock:true,style:{minHeight:"70vh"}},n.a.createElement("div",{className:"ml-2"},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:L,min:"2018-01-01",max:Object(x["x"])(),onChange:function e(t){X(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:I,min:"2018-01-01",max:Object(x["x"])(),onChange:function e(t){T(t.target.value)}})),n.a.createElement(b["a"],{onClick:function e(){return V()},style:{height:"30px"},className:"align-items-center justify-content-center",color:"success"},"Apply filter"),n.a.createElement("div",{className:"float-right"},n.a.createElement(b["a"],{onClick:function e(){return z()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel"))),m.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},!j&&n.a.createElement(o["a"],null,n.a.createElement(l["a"],null,n.a.createElement(s["a"],{hover:true},n.a.createElement(c["a"],null,"First Name"),n.a.createElement(c["a"],null,"Last Name"),n.a.createElement(c["a"],null,"Date / Time"),n.a.createElement(c["a"],null,"Status"),n.a.createElement(c["a"],null,"Action"))),n.a.createElement(i["a"],null,n.a.createElement(r["Fragment"],null,m.length>0&&m.map(function(e,t){var a,r,o,i,l,u,d,p,v,m;return n.a.createElement(s["a"],{hover:true,key:t},n.a.createElement(c["a"],null,(a=e.users)===null||a===void 0?void 0:a.first_name),n.a.createElement(c["a"],null,(r=e.users)===null||r===void 0?void 0:r.last_name),n.a.createElement(c["a"],null,new Date((o=e.ride_data[0])===null||o===void 0?void 0:o.ride_date).toDateString()," ",(i=e.ride_data[0])===null||i===void 0?void 0:i.ride_time),n.a.createElement(c["a"],null,n.a.createElement(y["a"],{color:(e===null||e===void 0?void 0:(l=e.ride_data[0])===null||l===void 0?void 0:l.ride_status)===0?"secondary":(e===null||e===void 0?void 0:(u=e.ride_data[0])===null||u===void 0?void 0:u.ride_status)===1?"success":(e===null||e===void 0?void 0:(d=e.ride_data[0])===null||d===void 0?void 0:d.ride_status)===2?"primary":"danger"},(e===null||e===void 0?void 0:(p=e.ride_data[0])===null||p===void 0?void 0:p.ride_status)===0?"Pending":(e===null||e===void 0?void 0:(v=e.ride_data[0])===null||v===void 0?void 0:v.ride_status)===1?"Acknowledged":(e===null||e===void 0?void 0:(m=e.ride_data[0])===null||m===void 0?void 0:m.ride_status)===2?"Group":"Cacelled")),n.a.createElement(c["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary"},n.a.createElement(f["b"],{to:"/admin/schedule/".concat(e.auth_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(g.a,{activePage:R,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:A,onChange:Q}))),(m===null||m===void 0?void 0:m.length)<1&&n.a.createElement(h["a"],null)),n.a.createElement(w["a"],{ref:J,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:U}))};N(R,'useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{exportRef}\nuseEffect{}');function C(e){return{getSchedule:function t(a,r,n,o){return e(Object(v["f"])(a,r,n,o))},getScheduleCount:function t(a,r){return e(Object(v["g"])(a,r))},exportSchedule:function t(a,r){return e(Object(v["b"])(a,r))}}}var H=function e(t){return{schedule:t.fdt.schedule,scheduleCount:t.fdt.scheduleCount,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var G=Object(p["b"])(H,C)(R);t["default"]=G;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(R,"Schedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/schedule.js");e.register(C,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/schedule.js");e.register(H,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/schedule.js");e.register(G,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/schedule.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1466:function(e,t,a){"use strict";(function(e){a.d(t,"c",function(){return p});a.d(t,"e",function(){return v});a.d(t,"d",function(){return m});a.d(t,"a",function(){return g});a.d(t,"b",function(){return h});a.d(t,"f",function(){return b});a.d(t,"h",function(){return y});a.d(t,"g",function(){return x});var r=a(15);var n=a.n(r);var o=a(3);var i=a(4);var c=a(5);var l=a.n(c);var s=a(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t,a,r,n,o,i){try{var c=e[o](i);var l=c.value}catch(e){a(e);return}if(c.done){t(l)}else{Promise.resolve(l).then(r,n)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){u(o,r,n,i,c,"next",e)}function c(e){u(o,r,n,i,c,"throw",e)}i(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var l=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=d(regeneratorRuntime.mark(function e(u){var d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:f.prev=0;a&&u(Object(i["c"])());!a&&u(Object(i["d"])());f.next=5;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group&item_per_page=20&page=").concat(t,"&start_date=").concat(r,"&end_date=").concat(l));case 5:d=f.sent;if(d.data.status==="error"){c["NotificationManager"].error(d.data.msg)}else{u({type:o["H"],payload:d.data.data})}u(Object(i["a"])());u(Object(i["b"])());f.next=16;break;case 11:f.prev=11;f.t0=f["catch"](0);u(Object(i["b"])());u(Object(i["a"])());c["NotificationManager"].error(f.t0.response.data.result);case 16:case"end":return f.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;a(Object(i["c"])());l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group&auth_id=").concat(t));case 4:r=l.sent;if(r.data.status==="error"){c["NotificationManager"].error(r.data.msg)}else{a({type:o["J"],payload:r.data.data.length>0?r.data.data[0]:{}})}a(Object(i["a"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](0);a(Object(i["a"])());c["NotificationManager"].error(l.t0.response.data.result);case 13:case"end":return l.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group-count&start_date=").concat(t,"&end_date=").concat(a));case 3:i=l.sent;if(i.data.status==="error"){c["NotificationManager"].error(i.data.msg)}else{r({type:o["I"],payload:i.data.data.total?i.data.data.total:0})}l.next=10;break;case 7:l.prev=7;l.t0=l["catch"](0);c["NotificationManager"].error(l.t0.response.data.result);case 10:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:r(Object(i["d"])());l.prev=1;l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=export&start_date=").concat(t,"&end_date=").concat(a));case 4:o=l.sent;if(o.data.status==="error"){c["NotificationManager"].error(o.data.msg)}else{c["NotificationManager"].success("Excel file sent to your email successfully")}r(Object(i["b"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](1);c["NotificationManager"].error(l.t0.response.data.result);r(Object(i["b"])());case 13:case"end":return l.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:r(Object(i["d"])());l.prev=1;l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=export&start_date=").concat(t,"&end_date=").concat(a));case 4:o=l.sent;if(o.data.status==="error"){c["NotificationManager"].error(o.data.msg)}else{c["NotificationManager"].success("Excel file sent to your email successfully")}r(Object(i["b"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](1);c["NotificationManager"].error(l.t0.response.data.result);r(Object(i["b"])());case 13:case"end":return l.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var l=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=d(regeneratorRuntime.mark(function e(u){var d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:f.prev=0;a&&u(Object(i["c"])());!a&&u(Object(i["d"])());f.next=5;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=group&item_per_page=20&page=").concat(t,"&start_date=").concat(r,"&end_date=").concat(l));case 5:d=f.sent;if(d.data.status==="error"){c["NotificationManager"].error(d.data.msg)}else{u({type:o["Ub"],payload:d.data.data})}u(Object(i["a"])());u(Object(i["b"])());f.next=16;break;case 11:f.prev=11;f.t0=f["catch"](0);u(Object(i["b"])());u(Object(i["a"])());c["NotificationManager"].error(f.t0.response.data.result);case 16:case"end":return f.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;a(Object(i["c"])());l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&auth_id=").concat(t));case 4:r=l.sent;if(r.data.status==="error"){c["NotificationManager"].error(r.data.msg)}else{a({type:o["Wb"],payload:r.data.data.length>0?r.data.data[0]:{}})}a(Object(i["a"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](0);a(Object(i["a"])());c["NotificationManager"].error(l.t0.response.data.result);case 13:case"end":return l.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var x=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=count&start_date=").concat(t,"&end_date=").concat(a));case 3:i=l.sent;if(i.data.status==="error"){c["NotificationManager"].error(i.data.msg)}else{r({type:o["Vb"],payload:i.data.data.total?i.data.data.total:0})}l.next=10;break;case 7:l.prev=7;l.t0=l["catch"](0);c["NotificationManager"].error(l.t0.response.data.result);case 10:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"getFdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(v,"getFdtDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(m,"getFdtCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(g,"exportFdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(h,"exportSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(b,"getSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(y,"getScheduleDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(x,"getScheduleCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);