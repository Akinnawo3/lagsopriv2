(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{1360:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var i=a(369);var o=a(166);var s=a(1464);var c=a(34);var l=a(40);var u=a(20);var d=a(102);var m=a(52);var p=a(51);var v=a(62);var f=a(54);var g=a(32);var b=a(29);var h=a(23);var x=a(130);var E=a(115);var y=a(64);var N=a(8);var O=a.n(N);var w=a(63);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function j(e,t,a,r,n,i,o){try{var s=e[i](o);var c=s.value}catch(e){a(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(r,n)}}function k(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){j(i,r,n,o,s,"next",e)}function s(e){j(i,r,n,o,s,"throw",e)}o(undefined)})}}function A(e,t){return R(e)||P(e,t)||_(e,t)||S()}function S(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){if(!e)return;if(typeof e==="string")return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return M(e,t)}function M(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function P(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var i=false;var o,s;try{for(a=a.call(e);!(n=(o=a.next()).done);n=true){r.push(o.value);if(t&&r.length===t)break}}catch(e){i=true;s=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(i)throw s}}return r}function R(e){if(Array.isArray(e))return e}var D=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var L=function e(t){var a,s,c,N,j,S,_,M,P,R,D,L,H,G,X,C,T;var U=t.match,I=t.loading,q=t.sosDetails,J=t.getSOSDetails,V=t.sosUserDetails,z=t.changeSOStatus,B=t.assignSOSToAdmin;var $=Object(r["useRef"])(null);var F=Object(r["useState"])(false),K=A(F,2),Q=K[0],W=K[1];var Y=Object(r["useState"])(""),Z=A(Y,2),ee=Z[0],te=Z[1];var ae=Object(r["useState"])(""),re=A(ae,2),ne=re[0],ie=re[1];var oe=Object(r["useState"])(""),se=A(oe,2),ce=se[0],le=se[1];Object(r["useEffect"])(function(){if(U.params.id){J(U.params.id,true)}},[U.params.id]);var ue=function e(){z(q.sos_id,1);$.current.close()};var de=function e(t){t.preventDefault();W(false);B(ee);te("")};k(regeneratorRuntime.mark(function e(){var t,a;var r;return regeneratorRuntime.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return Object(l["f"])(q===null||q===void 0?void 0:(t=q.trip_data)===null||t===void 0?void 0:t.start_lat,q===null||q===void 0?void 0:(a=q.trip_data)===null||a===void 0?void 0:a.start_lon);case 2:r=n.sent;ie(r);case 4:case"end":return n.stop()}}},e)}))();k(regeneratorRuntime.mark(function e(){var t,a;var r;return regeneratorRuntime.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return Object(l["f"])(q===null||q===void 0?void 0:(t=q.trip_data)===null||t===void 0?void 0:t.end_lat,q===null||q===void 0?void 0:(a=q.trip_data)===null||a===void 0?void 0:a.end_lon);case 2:r=n.sent;le(r);case 4:case"end":return n.stop()}}},e)}))();console.log(q);return n.a.createElement("div",{style:{minHeight:"90vh"}},n.a.createElement(i["a"],null,n.a.createElement("title",null,"Emmergency"),n.a.createElement("meta",{name:"description",content:"Driver Profile"})),n.a.createElement(o["a"],{title:"Emergency details",match:U}),!I&&n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Name")),n.a.createElement(u["b"],{to:(q===null||q===void 0?void 0:(a=q.user_data)===null||a===void 0?void 0:a.user_type)==="driver"?"/admin/drivers/".concat(q.auth_id):"/admin/passengers/".concat(q===null||q===void 0?void 0:q.auth_id)},q===null||q===void 0?void 0:(s=q.user_data)===null||s===void 0?void 0:s.first_name," ",q===null||q===void 0?void 0:(c=q.user_data)===null||c===void 0?void 0:c.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User Type")),q===null||q===void 0?void 0:(N=q.user_data)===null||N===void 0?void 0:N.user_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Class of Ride")),q===null||q===void 0?void 0:(j=q.trip_data)===null||j===void 0?void 0:j.ride_class),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Booking type")),q===null||q===void 0?void 0:(S=q.trip_data)===null||S===void 0?void 0:S.ride_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Name of Rider")),(q===null||q===void 0?void 0:(_=q.user_data)===null||_===void 0?void 0:_.user_type)==="rider"&&(q===null||q===void 0?void 0:(M=q.user_data)===null||M===void 0?void 0:M.first_name)+" "+(q===null||q===void 0?void 0:(P=q.user_data)===null||P===void 0?void 0:P.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Pickup Location")),ne===""?"loading...":ne),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Dropoff Location")),ce===""?"loading...":ce),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Driver Name ")),(q===null||q===void 0?void 0:(R=q.user_data)===null||R===void 0?void 0:R.user_type)==="driver"&&(q===null||q===void 0?void 0:(D=q.user_data)===null||D===void 0?void 0:D.first_name)+" "+(q===null||q===void 0?void 0:(L=q.user_data)===null||L===void 0?void 0:L.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Vehicle Details")),"".concat(q===null||q===void 0?void 0:(H=q.vehicle_data)===null||H===void 0?void 0:H.car_color," /  ").concat(q===null||q===void 0?void 0:(G=q.vehicle_data)===null||G===void 0?void 0:G.car_make," / ").concat(q===null||q===void 0?void 0:(X=q.vehicle_data)===null||X===void 0?void 0:X.car_model,"  ").concat(q===null||q===void 0?void 0:(C=q.vehicle_data)===null||C===void 0?void 0:C.car_desc,"   / Number Plate:  ").concat(q===null||q===void 0?void 0:(T=q.vehicle_data)===null||T===void 0?void 0:T.car_number_plate)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Clip of Incident")),q===null||q===void 0?void 0:q.clip),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Channel of Report")),(q===null||q===void 0?void 0:q.channel)==="mobile_app"?"Mobile App":"Vehicle"),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Trip Id")),n.a.createElement(u["b"],{to:"/admin/trips/".concat(q===null||q===void 0?void 0:q.trip_id)},q.trip_id)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Address")),q===null||q===void 0?void 0:q.address),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Latitude")),q===null||q===void 0?void 0:q.latitude),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Longitude")),q===null||q===void 0?void 0:q.longitude),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Date/Time")),O()(q===null||q===void 0?void 0:q.createdAt).format("LLLL")),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Status")),n.a.createElement(d["a"],{color:q.status===0?"danger":"success"},q.status===0?"Unresolved":"Resolved")),q.status===0&&n.a.createElement("div",{className:"mt-3"},n.a.createElement("button",{className:"btn btn-info mr-4",onClick:function e(){return Object(w["b"])("update_emergency_status",function(){return W(true)})}},"Assign to an Admin"),n.a.createElement("button",{className:"btn btn-warning",onClick:function e(){return Object(w["b"])("update_emergency_status",function(){return $.current.open()})}},"Mark as resolved")))))),n.a.createElement(y["a"],{ref:$,title:"Are you sure you want to mark this SOS as resolved?",message:"Request will be marked as resolved",onConfirm:ue})),n.a.createElement(m["a"],{isOpen:Q,toggle:function e(){return W(!Q)}},n.a.createElement(p["a"],{toggle:function e(){return W(!Q)}},"Assign to an Admin"),n.a.createElement(v["a"],{onSubmit:de},n.a.createElement(f["a"],null,n.a.createElement(g["a"],null,n.a.createElement(b["a"],{for:"Email"},"Enter Admin Email"),n.a.createElement(h["a"],{type:"email",name:"Email",value:ee,onChange:function e(t){return te(t.target.value)},required:true}))),n.a.createElement(x["a"],null,n.a.createElement(E["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))))};D(L,'useRef{inputEl}\nuseState{[isOpen, setIsOpen](false)}\nuseState{[adminEmail, setAdminEmail]("")}\nuseState{[pickupAddress, setPickupAddress]("")}\nuseState{[dropOffAddress, setDropOffAddress]("")}\nuseEffect{}');function H(e){return{getSOSDetails:function t(a,r){return e(Object(s["g"])(a,r))},changeSOStatus:function t(a,r){return e(Object(s["b"])(a,r))},assignSOSToAdmin:function t(a){return e(Object(s["a"])(a))}}}var G=function e(t){return{sosDetails:t.sos.sosDetails,sosUserDetails:t.sos.sosUserDetails,loading:t.loading.loading}};var X=Object(c["b"])(G,H)(L);t["default"]=X;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(L,"EmergencyDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/emergency/emergencyDetails.js");e.register(H,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/emergency/emergencyDetails.js");e.register(G,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/emergency/emergencyDetails.js");e.register(X,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/emergency/emergencyDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1464:function(e,t,a){"use strict";(function(e){a.d(t,"e",function(){return p});a.d(t,"g",function(){return v});a.d(t,"j",function(){return f});a.d(t,"i",function(){return g});a.d(t,"f",function(){return b});a.d(t,"b",function(){return h});a.d(t,"a",function(){return x});a.d(t,"h",function(){return E});a.d(t,"d",function(){return y});a.d(t,"c",function(){return N});var r=a(15);var n=a.n(r);var i=a(3);var o=a(4);var s=a(5);var c=a.n(s);var l=a(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t,a,r,n,i,o){try{var s=e[i](o);var c=s.value}catch(e){a(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(r,n)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){u(i,r,n,o,s,"next",e)}function s(e){u(i,r,n,o,s,"throw",e)}o(undefined)})}}var m=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(r){var c;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;a&&r(Object(o["c"])());!a&&r(Object(o["d"])());u.next=5;return n.a.get("".concat(l["a"].sos,"/v1.1/sos/?page=").concat(t,"&item_per_page=20"));case 5:c=u.sent;if(c.data.status==="error"){s["NotificationManager"].error(c.data.msg)}else{r({type:i["ec"],payload:c.data.data})}r(Object(o["a"])());r(Object(o["b"])());u.next=16;break;case 11:u.prev=11;u.t0=u["catch"](0);r(Object(o["a"])());r(Object(o["b"])());s["NotificationManager"].error(u.t0.response.data.message);case 16:case"end":return u.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(r){var c,u,d,m;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;a&&r(Object(o["c"])());!a&&r(Object(o["d"])());p.next=5;return n.a.get("".concat(l["a"].sos,"/v1.1/sos/?sos_id=").concat(t));case 5:c=p.sent;if(!(c.data.status==="error")){p.next=10;break}s["NotificationManager"].error(c.data.msg);p.next=16;break;case 10:if(!(c!==null&&c!==void 0&&(u=c.data)!==null&&u!==void 0&&(d=u.data)!==null&&d!==void 0&&d.user_id)){p.next=15;break}p.next=13;return n.a.get("".concat(l["a"].user,"/v1.1/admin/users/").concat(c.data.data.user_id));case 13:m=p.sent;r({type:i["ic"],payload:m.data.data});case 15:r({type:i["gc"],payload:c.data.data});case 16:r(Object(o["a"])());r(Object(o["b"])());p.next=25;break;case 20:p.prev=20;p.t0=p["catch"](0);r(Object(o["a"])());r(Object(o["b"])());s["NotificationManager"].error(p.t0.response.data.message);case 25:case"end":return p.stop()}}},e,null,[[0,20]])}));return function(t){return e.apply(this,arguments)}}()};var f=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;a(Object(o["d"])());i.next=4;return n.a.post("".concat(l["a"].sos,"/v1.1/admin/recipient-contact"),{phone_number:t});case 4:r=i.sent;if(!(r.data.status==="error")){i.next=9;break}s["NotificationManager"].error(r.data.msg);i.next=13;break;case 9:i.next=11;return a(E());case 11:i.next=13;return s["NotificationManager"].success("Number Added Successfully!");case 13:a(Object(o["b"])());i.next=21;break;case 16:i.prev=16;i.t0=i["catch"](0);a(Object(o["b"])());s["NotificationManager"].error(i.t0.response.data.message);console.log(i.t0.response.data);case 21:case"end":return i.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;a(Object(o["d"])());i.next=4;return n.a.post("".concat(l["a"].sos,"/v1.1/admin/recipient-contact"),{email:t});case 4:r=i.sent;if(!(r.data.status==="error")){i.next=9;break}s["NotificationManager"].error(r.data.msg);i.next=13;break;case 9:i.next=11;return a(E());case 11:i.next=13;return s["NotificationManager"].success("Email Added Successfully!");case 13:a(Object(o["b"])());i.next=21;break;case 16:i.prev=16;i.t0=i["catch"](0);a(Object(o["b"])());s["NotificationManager"].error(i.t0.response.data.message);console.log(i.t0.response.data);case 21:case"end":return i.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(){return function(){var e=d(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return n.a.get("".concat(l["a"].sos,"/v1.1/sos/?component=count"));case 3:a=r.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{t({type:i["fc"],payload:a.data.data.total})}r.next=9;break;case 7:r.prev=7;r.t0=r["catch"](0);case 9:case"end":return r.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;r(Object(o["d"])());c.next=4;return n.a.put("".concat(l["a"].sos,"/v1.1/sos/status"),{sos_id:t,status:a});case 4:i=c.sent;if(!(i.data.status==="error")){c.next=9;break}s["NotificationManager"].error(i.data.msg);c.next=13;break;case 9:c.next=11;return r(v(t));case 11:c.next=13;return s["NotificationManager"].success("SOS Status Updated Successfully!");case 13:r(Object(o["b"])());c.next=21;break;case 16:c.prev=16;c.t0=c["catch"](0);r(Object(o["b"])());s["NotificationManager"].error(c.t0.response.data.message);console.log(c.t0.response.data);case 21:case"end":return c.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};var x=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;a(Object(o["d"])());i.next=4;return n.a.put("".concat(l["a"].sos,"/v1.1/sos/assign"),{email:t});case 4:r=i.sent;if(!(r.data.status==="error")){i.next=9;break}s["NotificationManager"].error(r.data.msg);i.next=11;break;case 9:i.next=11;return s["NotificationManager"].success("SOS Assigned Successfully!");case 11:a(Object(o["b"])());i.next=19;break;case 14:i.prev=14;i.t0=i["catch"](0);a(Object(o["b"])());s["NotificationManager"].error(i.t0.response.data.message);console.log(i.t0.response.data);case 19:case"end":return i.stop()}}},e,null,[[0,14]])}));return function(t){return e.apply(this,arguments)}}()};var E=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;t&&a(Object(o["c"])());!t&&a(Object(o["d"])());c.next=5;return n.a.get("".concat(l["a"].sos,"/v1.1/admin/recipient-contact"));case 5:r=c.sent;if(r.data.status==="error"){s["NotificationManager"].error(r.data.msg)}else{a({type:i["hc"],payload:r.data.data})}a(Object(o["a"])());a(Object(o["b"])());c.next=16;break;case 11:c.prev=11;c.t0=c["catch"](0);a(Object(o["b"])());a(Object(o["a"])());s["NotificationManager"].error(c.t0.response.data.message);case 16:case"end":return c.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:console.log(t);i.prev=1;a(Object(o["d"])());i.next=5;return n.a.delete("".concat(l["a"].sos,"/v1.1/admin/recipient-contact/").concat(t));case 5:r=i.sent;if(!(r.data.status==="error")){i.next=10;break}s["NotificationManager"].error(r.data.msg);i.next=14;break;case 10:i.next=12;return a(E());case 12:i.next=14;return s["NotificationManager"].success("Number Deleted Successfully!");case 14:a(Object(o["b"])());i.next=21;break;case 17:i.prev=17;i.t0=i["catch"](1);a(Object(o["b"])());s["NotificationManager"].error(i.t0.response.data.message);case 21:case"end":return i.stop()}}},e,null,[[1,17]])}));return function(t){return e.apply(this,arguments)}}()};var N=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;a(Object(o["d"])());i.next=4;return n.a.delete("".concat(l["a"].sos,"/v1.1/admin/recipient-contact/").concat(t));case 4:r=i.sent;if(!(r.data.status==="error")){i.next=9;break}s["NotificationManager"].error(r.data.msg);i.next=13;break;case 9:i.next=11;return a(E());case 11:i.next=13;return s["NotificationManager"].success("Email Deleted Successfully!");case 13:a(Object(o["b"])());i.next=20;break;case 16:i.prev=16;i.t0=i["catch"](0);a(Object(o["b"])());s["NotificationManager"].error(i.t0.response.data.message);case 20:case"end":return i.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"getSOS","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(v,"getSOSDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(f,"setSOSNumber","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(g,"setSOSEmail","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(b,"getSOSCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(h,"changeSOStatus","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(x,"assignSOSToAdmin","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(E,"getSOSNumber","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(y,"deleteSOSNumber","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js");e.register(N,"deleteSOSEmail","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/emergencyAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);