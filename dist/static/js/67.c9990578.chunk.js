(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{1362:function(e,t,a){"use strict";a.r(t);(function(e){var n=a(0);var r=a.n(n);var c=a(223);var i=a(225);var o=a(18);var s=a(224);var l=a(116);var u=a(66);var d=a(6);var v=a(20);var f=a(34);var m=a(1478);var p=a(103);var g=a(104);var b=a.n(g);var h=a(102);var y=a(40);var w=a(166);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function x(e,t){return R(e)||A(e,t)||j(e,t)||E()}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e,t){if(!e)return;if(typeof e==="string")return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(e,t)}function k(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,n=new Array(t);a<t;a++){n[a]=e[a]}return n}function A(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var n=[];var r=true;var c=false;var i,o;try{for(a=a.call(e);!(r=(i=a.next()).done);r=true){n.push(i.value);if(t&&n.length===t)break}}catch(e){c=true;o=e}finally{try{if(!r&&a["return"]!=null)a["return"]()}finally{if(c)throw o}}return n}function R(e){if(Array.isArray(e))return e}var H=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var q=a(229);var O=function e(t){var a=t.match,f=t.getServiceRequests,m=t.getServiceRequestsCount,g=t.serviceRequests,E=t.serviceRequestsCount,j=t.loading;var k=Object(n["useState"])(""),A=x(k,2),R=A[0],H=A[1];var O=Object(d["g"])();var P=q.parse(O.location.search,{ignoreQueryPrefix:true}).page;var M=Object(n["useState"])(function(){return P===undefined?1:parseInt(P,10)}),S=x(M,2),N=S[0],_=S[1];Object(n["useEffect"])(function(){if(a.params.id){if(P===undefined||g.length<1){f(N,true,"","completed",R,a.params.id);m("","completed",R,a.params.id)}}},[R]);var G=function e(t){O.push("".concat(O.location.pathname,"?page=").concat(t));f(N,true,"","completed",R,a.params.id);_(t);window.scrollTo(0,0)};return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(w["a"],{title:"Maintenance History",match:a}),r.a.createElement("div",null,r.a.createElement(u["a"],{heading:"Maintenance History",fullBlock:true,style:{minHeight:"70vh"}},r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},r.a.createElement("select",{type:"select",className:"p-1 px-4",value:R,onChange:function e(t){return H(t.target.value)}},r.a.createElement("option",{value:""},"Request type "),y["B"].map(function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.name)}))),r.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},r.a.createElement(c["a"],null,r.a.createElement(s["a"],null,r.a.createElement(l["a"],{hover:true},r.a.createElement(o["a"],null,"Type"),r.a.createElement(o["a"],null,"Time"),r.a.createElement(o["a"],null,"Covered by warranty"),r.a.createElement(o["a"],null,"Driver name"),r.a.createElement(o["a"],null,"plate number "),r.a.createElement(o["a"],null,"Urgency "),r.a.createElement(o["a"],null,"Status"),r.a.createElement(o["a"],null,"Action"))),r.a.createElement(i["a"],null,!j&&r.a.createElement(n["Fragment"],null,g.length>0&&g.map(function(e){return r.a.createElement(l["a"],{hover:true,key:e._id},r.a.createElement(o["a"],{className:"text-capitalize"},e===null||e===void 0?void 0:e.service_type),r.a.createElement(o["a"],null,Object(y["a"])(e===null||e===void 0?void 0:e.createdAt)),r.a.createElement(o["a"],{className:"fw-bold text-".concat(e!==null&&e!==void 0&&e.covered_by_warranty?"success":"danger")},e!==null&&e!==void 0&&e.covered_by_warranty?"Yes":"No"),r.a.createElement(o["a"],null,e.driver_name),r.a.createElement(o["a"],null,e.plate_number),r.a.createElement(o["a"],{className:"fw-bold text-capitalize text-".concat(e.urgency==="low"?"warning":e.urgency==="high"?"danger":"secondary")},e.urgency?e.urgency:"N/A"),r.a.createElement(o["a"],null,r.a.createElement(h["a"],{color:Object(y["m"])(e===null||e===void 0?void 0:e.status),style:{minWidth:80}},e.status)),r.a.createElement(o["a"],null,r.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},r.a.createElement(v["b"],{to:{pathname:"/admin/maintenance/".concat(e===null||e===void 0?void 0:e._id),state:{maintenanceHistory:true}}},r.a.createElement("i",{className:"ti-eye"})))))}))))),r.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},r.a.createElement(b.a,{activePage:N,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:E,onChange:G}))),g.length<1&&r.a.createElement(p["a"],null)))};H(O,'useState{[serviceType, setServiceType]("")}\nuseHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}',function(){return[d["g"]]});function P(e){return{getServiceRequests:function t(a,n,r,c,i,o){return e(Object(m["b"])(a,n,r,c,i,o))},getServiceRequestsCount:function t(a,n,r,c){return e(Object(m["c"])(a,n,r,c))}}}var M=function e(t){return{serviceRequests:t.serviceRequests.serviceRequests,serviceRequestsCount:t.serviceRequests.serviceRequestsCount,loading:t.loading.loading}};var S=Object(f["b"])(M,P)(O);t["default"]=S;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(O,"VehicleMaintenanceHistory","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maintenance-log/vehicleMaintenanceHistory.js");e.register(P,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maintenance-log/vehicleMaintenanceHistory.js");e.register(M,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maintenance-log/vehicleMaintenanceHistory.js");e.register(S,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maintenance-log/vehicleMaintenanceHistory.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1478:function(e,t,a){"use strict";(function(e){a.d(t,"b",function(){return f});a.d(t,"c",function(){return m});a.d(t,"a",function(){return p});a.d(t,"d",function(){return g});var n=a(15);var r=a.n(n);var c=a(4);var i=a(3);var o=a(5);var s=a.n(o);var l=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t,a,n,r,c,i){try{var o=e[c](i);var s=o.value}catch(e){a(e);return}if(o.done){t(s)}else{Promise.resolve(s).then(n,r)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var c=e.apply(t,a);function i(e){u(c,n,r,i,o,"next",e)}function o(e){u(c,n,r,i,o,"throw",e)}i(undefined)})}}var v=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";var u=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";var v=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"";return function(){var e=d(regeneratorRuntime.mark(function e(d){var f;return regeneratorRuntime.wrap(function e(m){while(1){switch(m.prev=m.next){case 0:m.prev=0;m.t0=a;if(!m.t0){m.next=5;break}m.next=5;return d(Object(c["c"])());case 5:m.t1=!a;if(!m.t1){m.next=9;break}m.next=9;return d(Object(c["d"])());case 9:m.next=11;return r.a.get("".concat(l["a"].oem,"/v1.1/admin/service-requests/?oem_id=").concat(n,"&status=").concat(s,"&service_type=").concat(u,"&vehicle_id=").concat(v,"&item_per_page=20&page=").concat(t));case 11:f=m.sent;if(f.data.status==="error"){o["NotificationManager"].error(f.data.msg)}else{d({type:i["Zb"],payload:f.data.data})}d(Object(c["a"])());d(Object(c["b"])());m.next=21;break;case 17:m.prev=17;m.t2=m["catch"](0);d(Object(c["a"])());d(Object(c["b"])());case 21:case"end":return m.stop()}}},e,null,[[0,17]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var c=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=d(regeneratorRuntime.mark(function e(s){var u;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;d.next=3;return r.a.get("".concat(l["a"].oem,"/v1.1/admin/service-requests/?oem_id=").concat(t,"&status=").concat(a,"&service_type=").concat(n,"&vehicle_id=").concat(c,"&component=count"));case 3:u=d.sent;if(u.data.status==="error"){o["NotificationManager"].error(u.data.msg)}else{s({type:i["ac"],payload:u.data.data.total?u.data.data.total:0})}d.next=9;break;case 7:d.prev=7;d.t0=d["catch"](0);case 9:case"end":return d.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var p=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(n){var s;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;u.t0=a;if(!u.t0){u.next=5;break}u.next=5;return n(Object(c["c"])());case 5:u.t1=!a;if(!u.t1){u.next=9;break}u.next=9;return n(Object(c["d"])());case 9:u.next=11;return r.a.get("".concat(l["a"].oem,"/v1.1/admin/service-requests/").concat(t));case 11:s=u.sent;if(s.data.status==="error"){o["NotificationManager"].error(s.data.msg)}else{n({type:i["Yb"],payload:s.data.data})}n(Object(c["a"])());n(Object(c["b"])());u.next=21;break;case 17:u.prev=17;u.t2=u["catch"](0);n(Object(c["a"])());n(Object(c["b"])());case 21:case"end":return u.stop()}}},e,null,[[0,17]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(n){var i;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;n(Object(c["d"])());s.next=4;return r.a.put("".concat(l["a"].oem,"/v1.1/service-requests/").concat(t),a);case 4:i=s.sent;if(!(i.data.status==="error")){s.next=9;break}o["NotificationManager"].error(i.data.msg);s.next=12;break;case 9:o["NotificationManager"].success("Service request updated successfully");s.next=12;return n(p(t,true));case 12:n(Object(c["b"])());s.next=19;break;case 15:s.prev=15;s.t0=s["catch"](0);n(Object(c["b"])());console.log(s.t0);case 19:case"end":return s.stop()}}},e,null,[[0,15]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"getServiceRequests","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/serviceRequestAction.js");e.register(m,"getServiceRequestsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/serviceRequestAction.js");e.register(p,"getServiceRequest","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/serviceRequestAction.js");e.register(g,"updateServiceRequest","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/serviceRequestAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);