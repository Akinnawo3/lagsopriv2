(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{1358:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var s=a(369);var i=a(166);var o=a(1463);var c=a(32);var l=a(40);var u=a(21);var d=a(103);var m=a(57);var v=a(56);var p=a(65);var f=a(58);var g=a(36);var b=a(34);var h=a(27);var E=a(147);var y=a(116);var j=a(67);var x=a(8);var N=a.n(x);var O=a(62);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function k(e,t,a,r,n,s,i){try{var o=e[s](i);var c=o.value}catch(e){a(e);return}if(o.done){t(c)}else{Promise.resolve(c).then(r,n)}}function S(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var s=e.apply(t,a);function i(e){k(s,r,n,i,o,"next",e)}function o(e){k(s,r,n,i,o,"throw",e)}i(undefined)})}}function _(e,t){return M(e)||A(e,t)||D(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e,t){if(!e)return;if(typeof e==="string")return C(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(e,t)}function C(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function A(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var s=false;var i,o;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){s=true;o=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(s)throw o}}return r}function M(e){if(Array.isArray(e))return e}var R=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var L=function e(t){var a,o,c,x,k,w,D,C,A,M,R,L,U,I,H,G,V;var P=t.match,T=t.loading,q=t.sosDetails,J=t.getSOSDetails,z=t.sosUserDetails,B=t.changeSOStatus,$=t.assignSOSToAdmin;var F=Object(r["useRef"])(null);var K=Object(r["useState"])(false),Q=_(K,2),W=Q[0],X=Q[1];var Y=Object(r["useState"])(""),Z=_(Y,2),ee=Z[0],te=Z[1];var ae=Object(r["useState"])(""),re=_(ae,2),ne=re[0],se=re[1];var ie=Object(r["useState"])(""),oe=_(ie,2),ce=oe[0],le=oe[1];Object(r["useEffect"])(function(){if(P.params.id){J(P.params.id,true)}},[P.params.id]);var ue=function e(){B(q.sos_id,1);F.current.close()};var de=function e(t){t.preventDefault();X(false);$(ee);te("")};S(regeneratorRuntime.mark(function e(){var t,a;var r;return regeneratorRuntime.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return Object(l["f"])(q===null||q===void 0?void 0:(t=q.trip_data)===null||t===void 0?void 0:t.start_lat,q===null||q===void 0?void 0:(a=q.trip_data)===null||a===void 0?void 0:a.start_lon);case 2:r=n.sent;se(r);case 4:case"end":return n.stop()}}},e)}))();S(regeneratorRuntime.mark(function e(){var t,a;var r;return regeneratorRuntime.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return Object(l["f"])(q===null||q===void 0?void 0:(t=q.trip_data)===null||t===void 0?void 0:t.end_lat,q===null||q===void 0?void 0:(a=q.trip_data)===null||a===void 0?void 0:a.end_lon);case 2:r=n.sent;le(r);case 4:case"end":return n.stop()}}},e)}))();console.log(q);return n.a.createElement("div",{style:{minHeight:"90vh"}},n.a.createElement(s["a"],null,n.a.createElement("title",null,"Emmergency"),n.a.createElement("meta",{name:"description",content:"Driver Profile"})),n.a.createElement(i["a"],{title:"Emergency details",match:P}),!T&&n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Name")),n.a.createElement(u["b"],{to:(q===null||q===void 0?void 0:(a=q.user_data)===null||a===void 0?void 0:a.user_type)==="driver"?"/admin/drivers/".concat(q.auth_id):"/admin/passengers/".concat(q===null||q===void 0?void 0:q.auth_id)},q===null||q===void 0?void 0:(o=q.user_data)===null||o===void 0?void 0:o.first_name," ",q===null||q===void 0?void 0:(c=q.user_data)===null||c===void 0?void 0:c.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User Type")),q===null||q===void 0?void 0:(x=q.user_data)===null||x===void 0?void 0:x.user_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Class of Ride")),q===null||q===void 0?void 0:(k=q.trip_data)===null||k===void 0?void 0:k.ride_class),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Booking type")),q===null||q===void 0?void 0:(w=q.trip_data)===null||w===void 0?void 0:w.ride_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Name of Rider")),(q===null||q===void 0?void 0:(D=q.user_data)===null||D===void 0?void 0:D.user_type)==="rider"&&(q===null||q===void 0?void 0:(C=q.user_data)===null||C===void 0?void 0:C.first_name)+" "+(q===null||q===void 0?void 0:(A=q.user_data)===null||A===void 0?void 0:A.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Pickup Location")),ne===""?"loading...":ne),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Dropoff Location")),ce===""?"loading...":ce),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Driver Name ")),(q===null||q===void 0?void 0:(M=q.user_data)===null||M===void 0?void 0:M.user_type)==="driver"&&(q===null||q===void 0?void 0:(R=q.user_data)===null||R===void 0?void 0:R.first_name)+" "+(q===null||q===void 0?void 0:(L=q.user_data)===null||L===void 0?void 0:L.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Vehicle Details")),"".concat(q===null||q===void 0?void 0:(U=q.vehicle_data)===null||U===void 0?void 0:U.car_color," /  ").concat(q===null||q===void 0?void 0:(I=q.vehicle_data)===null||I===void 0?void 0:I.car_make," / ").concat(q===null||q===void 0?void 0:(H=q.vehicle_data)===null||H===void 0?void 0:H.car_model,"  ").concat(q===null||q===void 0?void 0:(G=q.vehicle_data)===null||G===void 0?void 0:G.car_desc,"   / Number Plate:  ").concat(q===null||q===void 0?void 0:(V=q.vehicle_data)===null||V===void 0?void 0:V.car_number_plate)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Clip of Incident")),q===null||q===void 0?void 0:q.clip),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Channel of Report")),(q===null||q===void 0?void 0:q.channel)==="mobile_app"?"Mobile App":"Vehicle"),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Trip Id")),n.a.createElement(u["b"],{to:"/admin/trips/".concat(q===null||q===void 0?void 0:q.trip_id)},q.trip_id)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Address")),q===null||q===void 0?void 0:q.address),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Latitude")),q===null||q===void 0?void 0:q.latitude),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Longitude")),q===null||q===void 0?void 0:q.longitude),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Date/Time")),N()(q===null||q===void 0?void 0:q.createdAt).format("LLLL")),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Status")),n.a.createElement(d["a"],{color:q.status===0?"danger":"success"},q.status===0?"Unresolved":"Resolved")),q.status===0&&n.a.createElement("div",{className:"mt-3"},n.a.createElement("button",{className:"btn btn-info mr-4",onClick:function e(){return Object(O["b"])("update_emergency_status",function(){return X(true)})}},"Assign to an Admin"),n.a.createElement("button",{className:"btn btn-warning",onClick:function e(){return Object(O["b"])("update_emergency_status",function(){return F.current.open()})}},"Mark as resolved")))))),n.a.createElement(j["a"],{ref:F,title:"Are you sure you want to mark this SOS as resolved?",message:"Request will be marked as resolved",onConfirm:ue})),n.a.createElement(m["a"],{isOpen:W,toggle:function e(){return X(!W)}},n.a.createElement(v["a"],{toggle:function e(){return X(!W)}},"Assign to an Admin"),n.a.createElement(p["a"],{onSubmit:de},n.a.createElement(f["a"],null,n.a.createElement(g["a"],null,n.a.createElement(b["a"],{for:"Email"},"Enter Admin Email"),n.a.createElement(h["a"],{type:"email",name:"Email",value:ee,onChange:function e(t){return te(t.target.value)},required:true}))),n.a.createElement(E["a"],null,n.a.createElement(y["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))))};R(L,'useRef{inputEl}\nuseState{[isOpen, setIsOpen](false)}\nuseState{[adminEmail, setAdminEmail]("")}\nuseState{[pickupAddress, setPickupAddress]("")}\nuseState{[dropOffAddress, setDropOffAddress]("")}\nuseEffect{}');function U(e){return{getSOSDetails:function t(a,r){return e(Object(o["g"])(a,r))},changeSOStatus:function t(a,r){return e(Object(o["b"])(a,r))},assignSOSToAdmin:function t(a){return e(Object(o["a"])(a))}}}var I=function e(t){return{sosDetails:t.sos.sosDetails,sosUserDetails:t.sos.sosUserDetails,loading:t.loading.loading}};var H=Object(c["b"])(I,U)(L);t["default"]=H;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(L,"EmergencyDetails","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\emergency\\emergencyDetails.js");e.register(U,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\emergency\\emergencyDetails.js");e.register(I,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\emergency\\emergencyDetails.js");e.register(H,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\emergency\\emergencyDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1463:function(e,t,a){"use strict";(function(e){a.d(t,"e",function(){return v});a.d(t,"g",function(){return p});a.d(t,"j",function(){return f});a.d(t,"i",function(){return g});a.d(t,"f",function(){return b});a.d(t,"b",function(){return h});a.d(t,"a",function(){return E});a.d(t,"h",function(){return y});a.d(t,"d",function(){return j});a.d(t,"c",function(){return x});var r=a(15);var n=a.n(r);var s=a(3);var i=a(4);var o=a(5);var c=a.n(o);var l=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t,a,r,n,s,i){try{var o=e[s](i);var c=o.value}catch(e){a(e);return}if(o.done){t(c)}else{Promise.resolve(c).then(r,n)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var s=e.apply(t,a);function i(e){u(s,r,n,i,o,"next",e)}function o(e){u(s,r,n,i,o,"throw",e)}i(undefined)})}}var m=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(r){var c;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;a&&r(Object(i["c"])());!a&&r(Object(i["d"])());u.next=5;return n.a.get("".concat(l["a"].sos,"/v1.1/sos/?page=").concat(t,"&item_per_page=20"));case 5:c=u.sent;if(c.data.status==="error"){o["NotificationManager"].error(c.data.msg)}else{r({type:s["cc"],payload:c.data.data})}r(Object(i["a"])());r(Object(i["b"])());u.next=16;break;case 11:u.prev=11;u.t0=u["catch"](0);r(Object(i["a"])());r(Object(i["b"])());o["NotificationManager"].error(u.t0.response.data.message);case 16:case"end":return u.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var p=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(r){var c,u,d,m;return regeneratorRuntime.wrap(function e(v){while(1){switch(v.prev=v.next){case 0:v.prev=0;a&&r(Object(i["c"])());!a&&r(Object(i["d"])());v.next=5;return n.a.get("".concat(l["a"].sos,"/v1.1/sos/?sos_id=").concat(t));case 5:c=v.sent;if(!(c.data.status==="error")){v.next=10;break}o["NotificationManager"].error(c.data.msg);v.next=16;break;case 10:if(!(c!==null&&c!==void 0&&(u=c.data)!==null&&u!==void 0&&(d=u.data)!==null&&d!==void 0&&d.user_id)){v.next=15;break}v.next=13;return n.a.get("".concat(l["a"].user,"/v1.1/admin/users/").concat(c.data.data.user_id));case 13:m=v.sent;r({type:s["gc"],payload:m.data.data});case 15:r({type:s["ec"],payload:c.data.data});case 16:r(Object(i["a"])());r(Object(i["b"])());v.next=25;break;case 20:v.prev=20;v.t0=v["catch"](0);r(Object(i["a"])());r(Object(i["b"])());o["NotificationManager"].error(v.t0.response.data.message);case 25:case"end":return v.stop()}}},e,null,[[0,20]])}));return function(t){return e.apply(this,arguments)}}()};var f=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;a(Object(i["d"])());s.next=4;return n.a.post("".concat(l["a"].sos,"/v1.1/admin/recipient-contact"),{phone_number:t});case 4:r=s.sent;if(!(r.data.status==="error")){s.next=9;break}o["NotificationManager"].error(r.data.msg);s.next=13;break;case 9:s.next=11;return a(y());case 11:s.next=13;return o["NotificationManager"].success("Number Added Successfully!");case 13:a(Object(i["b"])());s.next=21;break;case 16:s.prev=16;s.t0=s["catch"](0);a(Object(i["b"])());o["NotificationManager"].error(s.t0.response.data.message);console.log(s.t0.response.data);case 21:case"end":return s.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;a(Object(i["d"])());s.next=4;return n.a.post("".concat(l["a"].sos,"/v1.1/admin/recipient-contact"),{email:t});case 4:r=s.sent;if(!(r.data.status==="error")){s.next=9;break}o["NotificationManager"].error(r.data.msg);s.next=13;break;case 9:s.next=11;return a(y());case 11:s.next=13;return o["NotificationManager"].success("Email Added Successfully!");case 13:a(Object(i["b"])());s.next=21;break;case 16:s.prev=16;s.t0=s["catch"](0);a(Object(i["b"])());o["NotificationManager"].error(s.t0.response.data.message);console.log(s.t0.response.data);case 21:case"end":return s.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(){return function(){var e=d(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return n.a.get("".concat(l["a"].sos,"/v1.1/sos/?component=count"));case 3:a=r.sent;if(a.data.status==="error"){o["NotificationManager"].error(a.data.msg)}else{t({type:s["dc"],payload:a.data.data})}r.next=9;break;case 7:r.prev=7;r.t0=r["catch"](0);case 9:case"end":return r.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,a){return function(){var e=d(regeneratorRuntime.mark(function e(r){var s;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;r(Object(i["d"])());c.next=4;return n.a.put("".concat(l["a"].sos,"/v1.1/sos/status"),{sos_id:t,status:a});case 4:s=c.sent;if(!(s.data.status==="error")){c.next=9;break}o["NotificationManager"].error(s.data.msg);c.next=13;break;case 9:c.next=11;return r(p(t));case 11:c.next=13;return o["NotificationManager"].success("SOS Status Updated Successfully!");case 13:r(Object(i["b"])());c.next=21;break;case 16:c.prev=16;c.t0=c["catch"](0);r(Object(i["b"])());o["NotificationManager"].error(c.t0.response.data.message);console.log(c.t0.response.data);case 21:case"end":return c.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};var E=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;a(Object(i["d"])());s.next=4;return n.a.put("".concat(l["a"].sos,"/v1.1/sos/assign"),{email:t});case 4:r=s.sent;if(!(r.data.status==="error")){s.next=9;break}o["NotificationManager"].error(r.data.msg);s.next=11;break;case 9:s.next=11;return o["NotificationManager"].success("SOS Assigned Successfully!");case 11:a(Object(i["b"])());s.next=19;break;case 14:s.prev=14;s.t0=s["catch"](0);a(Object(i["b"])());o["NotificationManager"].error(s.t0.response.data.message);console.log(s.t0.response.data);case 19:case"end":return s.stop()}}},e,null,[[0,14]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;t&&a(Object(i["c"])());!t&&a(Object(i["d"])());c.next=5;return n.a.get("".concat(l["a"].sos,"/v1.1/admin/recipient-contact"));case 5:r=c.sent;if(r.data.status==="error"){o["NotificationManager"].error(r.data.msg)}else{a({type:s["fc"],payload:r.data.data})}a(Object(i["a"])());a(Object(i["b"])());c.next=16;break;case 11:c.prev=11;c.t0=c["catch"](0);a(Object(i["b"])());a(Object(i["a"])());o["NotificationManager"].error(c.t0.response.data.message);case 16:case"end":return c.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var j=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:console.log(t);s.prev=1;a(Object(i["d"])());s.next=5;return n.a.delete("".concat(l["a"].sos,"/v1.1/admin/recipient-contact/").concat(t));case 5:r=s.sent;if(!(r.data.status==="error")){s.next=10;break}o["NotificationManager"].error(r.data.msg);s.next=14;break;case 10:s.next=12;return a(y());case 12:s.next=14;return o["NotificationManager"].success("Number Deleted Successfully!");case 14:a(Object(i["b"])());s.next=21;break;case 17:s.prev=17;s.t0=s["catch"](1);a(Object(i["b"])());o["NotificationManager"].error(s.t0.response.data.message);case 21:case"end":return s.stop()}}},e,null,[[1,17]])}));return function(t){return e.apply(this,arguments)}}()};var x=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;a(Object(i["d"])());s.next=4;return n.a.delete("".concat(l["a"].sos,"/v1.1/admin/recipient-contact/").concat(t));case 4:r=s.sent;if(!(r.data.status==="error")){s.next=9;break}o["NotificationManager"].error(r.data.msg);s.next=13;break;case 9:s.next=11;return a(y());case 11:s.next=13;return o["NotificationManager"].success("Email Deleted Successfully!");case 13:a(Object(i["b"])());s.next=20;break;case 16:s.prev=16;s.t0=s["catch"](0);a(Object(i["b"])());o["NotificationManager"].error(s.t0.response.data.message);case 20:case"end":return s.stop()}}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"getSOS","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(p,"getSOSDetails","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(f,"setSOSNumber","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(g,"setSOSEmail","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(b,"getSOSCount","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(h,"changeSOStatus","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(E,"assignSOSToAdmin","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(y,"getSOSNumber","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(j,"deleteSOSNumber","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js");e.register(x,"deleteSOSEmail","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\emergencyAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))}}]);