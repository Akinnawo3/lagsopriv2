(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{1325:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var l=a(102);var i=a(34);var o=a(369);var s=a(166);var c=a(20);var d=a(1466);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t){return v(e)||g(e,t)||f(e,t)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(!e)return;if(typeof e==="string")return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}function m(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function g(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var l=false;var i,o;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){l=true;o=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(l)throw o}}return r}function v(e){if(Array.isArray(e))return e}var h=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var b=function e(t){var a,i,d,p;var f=t.getScheduleDetails,m=t.match,g=t.loading,v=t.scheduleDetails;var h=Object(r["useState"])(false),b=u(h,2),E=b[0],y=b[1];var x=Object(r["useState"])({}),N=u(x,2),w=N[0],_=N[1];Object(r["useEffect"])(function(){f(m.params.id)},[m.params.id]);return n.a.createElement("div",{className:"mb-5",style:{minHeight:"90vh"}},n.a.createElement(o["a"],null,n.a.createElement("title",null,"Schedule Details"),n.a.createElement("meta",{name:"description",content:"Schedule Details"})),n.a.createElement(s["a"],{title:"Schedule details",match:m}),!g&&n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content px-4"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Name")),n.a.createElement(c["b"],{to:"/admin/passengers/".concat(v===null||v===void 0?void 0:v.auth_id)},v===null||v===void 0?void 0:(a=v.users)===null||a===void 0?void 0:a.first_name," ",v===null||v===void 0?void 0:(i=v.users)===null||i===void 0?void 0:i.last_name," ")),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Email")),v===null||v===void 0?void 0:(d=v.users)===null||d===void 0?void 0:d.email),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Phone Number")),v===null||v===void 0?void 0:(p=v.users)===null||p===void 0?void 0:p.phone_number),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Start Address")),v===null||v===void 0?void 0:v.start_address),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"End Address")),v===null||v===void 0?void 0:v.end_address),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Start Latitude")),v===null||v===void 0?void 0:v.start_lat),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"End Latitude")),v===null||v===void 0?void 0:v.end_lat),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Start Longitude")),v===null||v===void 0?void 0:v.start_lon),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"End Longitude")),v===null||v===void 0?void 0:v.end_lon),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ride Class")),v===null||v===void 0?void 0:v.ride_class),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ride Date")),v===null||v===void 0?void 0:v.ride_date),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ride Time")),v===null||v===void 0?void 0:v.ride_time),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ride Type")),v===null||v===void 0?void 0:v.ride_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Setup Type")),v===null||v===void 0?void 0:v.setup_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Payment Method")),v===null||v===void 0?void 0:v.payment_method),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ride Status")),n.a.createElement(l["a"],{color:(v===null||v===void 0?void 0:v.ride_status)===1?"success":(v===null||v===void 0?void 0:v.ride_status)===2?"danger":"warning"},(v===null||v===void 0?void 0:v.ride_status)===1?"Accepted":(v===null||v===void 0?void 0:v.ride_status)===2?"Declined":"Pending"))))))))};h(b,"useState{[isModal, setIsModal](false)}\nuseState{[riderDetails, setRiderDetails]({})}\nuseEffect{}");function E(e){return{getScheduleDetails:function t(a){return e(Object(d["h"])(a))}}}var y=function e(t){return{scheduleDetails:t.fdt.scheduleDetails,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var x=Object(i["b"])(y,E)(b);t["default"]=x;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(b,"ScheduleDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/scheduleDetails.js");e.register(E,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/scheduleDetails.js");e.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/scheduleDetails.js");e.register(x,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/schedule/scheduleDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1466:function(e,t,a){"use strict";(function(e){a.d(t,"c",function(){return f});a.d(t,"e",function(){return m});a.d(t,"d",function(){return g});a.d(t,"a",function(){return v});a.d(t,"b",function(){return h});a.d(t,"f",function(){return b});a.d(t,"h",function(){return E});a.d(t,"g",function(){return y});var r=a(15);var n=a.n(r);var l=a(3);var i=a(4);var o=a(5);var s=a.n(o);var c=a(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function d(e,t,a,r,n,l,i){try{var o=e[l](i);var s=o.value}catch(e){a(e);return}if(o.done){t(s)}else{Promise.resolve(s).then(r,n)}}function u(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var l=e.apply(t,a);function i(e){d(l,r,n,i,o,"next",e)}function o(e){d(l,r,n,i,o,"throw",e)}i(undefined)})}}var p=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=u(regeneratorRuntime.mark(function e(d){var u;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;a&&d(Object(i["c"])());!a&&d(Object(i["d"])());p.next=5;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group&item_per_page=20&page=").concat(t,"&start_date=").concat(r,"&end_date=").concat(s));case 5:u=p.sent;if(u.data.status==="error"){o["NotificationManager"].error(u.data.msg)}else{d({type:l["J"],payload:u.data.data})}d(Object(i["a"])());d(Object(i["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);d(Object(i["b"])());d(Object(i["a"])());o["NotificationManager"].error(p.t0.response.data.result);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t){return function(){var e=u(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;a(Object(i["c"])());s.next=4;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group&auth_id=").concat(t));case 4:r=s.sent;if(r.data.status==="error"){o["NotificationManager"].error(r.data.msg)}else{a({type:l["L"],payload:r.data.data.length>0?r.data.data[0]:{}})}a(Object(i["a"])());s.next=13;break;case 9:s.prev=9;s.t0=s["catch"](0);a(Object(i["a"])());o["NotificationManager"].error(s.t0.response.data.result);case 13:case"end":return s.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=u(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;s.next=3;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group-count&start_date=").concat(t,"&end_date=").concat(a));case 3:i=s.sent;if(i.data.status==="error"){o["NotificationManager"].error(i.data.msg)}else{r({type:l["K"],payload:i.data.data.total?i.data.data.total:0})}s.next=10;break;case 7:s.prev=7;s.t0=s["catch"](0);o["NotificationManager"].error(s.t0.response.data.result);case 10:case"end":return s.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=u(regeneratorRuntime.mark(function e(r){var l;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:r(Object(i["d"])());s.prev=1;s.next=4;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=export&start_date=").concat(t,"&end_date=").concat(a));case 4:l=s.sent;if(l.data.status==="error"){o["NotificationManager"].error(l.data.msg)}else{o["NotificationManager"].success("Excel file sent to your email successfully")}r(Object(i["b"])());s.next=13;break;case 9:s.prev=9;s.t0=s["catch"](1);o["NotificationManager"].error(s.t0.response.data.result);r(Object(i["b"])());case 13:case"end":return s.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=u(regeneratorRuntime.mark(function e(r){var l;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:r(Object(i["d"])());s.prev=1;s.next=4;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=export&start_date=").concat(t,"&end_date=").concat(a));case 4:l=s.sent;if(l.data.status==="error"){o["NotificationManager"].error(l.data.msg)}else{o["NotificationManager"].success("Excel file sent to your email successfully")}r(Object(i["b"])());s.next=13;break;case 9:s.prev=9;s.t0=s["catch"](1);o["NotificationManager"].error(s.t0.response.data.result);r(Object(i["b"])());case 13:case"end":return s.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=u(regeneratorRuntime.mark(function e(d){var u;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;a&&d(Object(i["c"])());!a&&d(Object(i["d"])());p.next=5;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=group&item_per_page=20&page=").concat(t,"&start_date=").concat(r,"&end_date=").concat(s));case 5:u=p.sent;if(u.data.status==="error"){o["NotificationManager"].error(u.data.msg)}else{d({type:l["Wb"],payload:u.data.data})}d(Object(i["a"])());d(Object(i["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);d(Object(i["b"])());d(Object(i["a"])());o["NotificationManager"].error(p.t0.response.data.result);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var E=function e(t){return function(){var e=u(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;a(Object(i["c"])());s.next=4;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=schedule&auth_id=").concat(t));case 4:r=s.sent;if(r.data.status==="error"){o["NotificationManager"].error(r.data.msg)}else{a({type:l["Yb"],payload:r.data.data.length>0?r.data.data[0]:{}})}a(Object(i["a"])());s.next=13;break;case 9:s.prev=9;s.t0=s["catch"](0);a(Object(i["a"])());o["NotificationManager"].error(s.t0.response.data.result);case 13:case"end":return s.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=u(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;s.next=3;return n.a.get("".concat(c["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=count&start_date=").concat(t,"&end_date=").concat(a));case 3:i=s.sent;if(i.data.status==="error"){o["NotificationManager"].error(i.data.msg)}else{r({type:l["Xb"],payload:i.data.data.total?i.data.data.total:0})}s.next=10;break;case 7:s.prev=7;s.t0=s["catch"](0);o["NotificationManager"].error(s.t0.response.data.result);case 10:case"end":return s.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"getFdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(m,"getFdtDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(g,"getFdtCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(v,"exportFdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(h,"exportSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(b,"getSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(E,"getScheduleDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(y,"getScheduleCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);