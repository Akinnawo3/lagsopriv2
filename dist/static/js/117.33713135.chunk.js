(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[117],{1354:function(e,t,a){"use strict";a.r(t);(function(e){var l=a(0);var n=a.n(l);var r=a(34);var i=a(369);var s=a(1559);var c=a.n(s);var o=a(166);var u=a(20);var d=a(50);var m=a(102);var v=a(52);var f=a(51);var p=a(54);var g=a(62);var E=a(23);var b=a(43);var h=a(40);var N=a(57);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function y(e,t){return j(e)||x(e,t)||A(e,t)||S()}function S(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(!e)return;if(typeof e==="string")return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(e,t)}function k(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,l=new Array(t);a<t;a++){l[a]=e[a]}return l}function x(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var l=[];var n=true;var r=false;var i,s;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){l.push(i.value);if(t&&l.length===t)break}}catch(e){r=true;s=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(r)throw s}}return l}function j(e){if(Array.isArray(e))return e}var w=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var O=function e(t){var a=t.getVehicle,r=t.match,s=t.loading,c=t.vehicleDetails,d=t.assignVehicleFeedback,N=t.loadingStatus,S=t.getAdmins,A=t.admins,k=t.updateVehicleFeedbackStatus;var x=Object(l["useState"])(false),j=y(x,2),w=j[0],O=j[1];var _=Object(l["useState"])(false),D=y(_,2),P=D[0],F=D[1];var M=Object(l["useState"])(""),V=y(M,2),C=V[0],H=V[1];var G=Object(l["useState"])(0),I=y(G,2),L=I[0],R=I[1];var U=Object(l["useRef"])(null);Object(l["useEffect"])(function(){a(r.params.id,true);S(1,false)},[r.params.id]);var X=function e(){U.current.open()};var z=function e(t){H(t.target.value)};var T=function e(t){R(t.target.value)};var q=function e(){O(false);d(r.params.id,C)};var J=function e(){F(false);k(r.params.id,L)};return n.a.createElement("div",{className:"mb-5",style:{minHeight:"90vh"}},n.a.createElement(i["a"],null,n.a.createElement("title",null,"Vehicle details"),n.a.createElement("meta",{name:"description",content:"Vehicle Details"})),n.a.createElement(o["a"],{title:"Vehicle feedback details",match:r}),!s&&n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content px-4"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Comment Id")),c===null||c===void 0?void 0:c.comment_id),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Date")),Object(h["a"])(c===null||c===void 0?void 0:c.createdAt)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Comment")),c===null||c===void 0?void 0:c.comment),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Driver Name")),n.a.createElement(u["b"],{to:"/admin/drivers/".concat(c===null||c===void 0?void 0:c.driver_auth_id)},c===null||c===void 0?void 0:c.driver_first_name,"  ",c===null||c===void 0?void 0:c.driver_last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Plate No")),n.a.createElement(u["b"],{to:"/admin/vehicles/".concat(c===null||c===void 0?void 0:c.vehicle_id)},c===null||c===void 0?void 0:c.plate_number)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Assigned")),n.a.createElement(m["a"],{color:c!==null&&c!==void 0&&c.assigned?"success":"danger"},c!==null&&c!==void 0&&c.assigned?"Yes":"No")),(c===null||c===void 0?void 0:c.assigned)&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Assignee Name")),c===null||c===void 0?void 0:c.admin_first_name," ",c===null||c===void 0?void 0:c.admin_last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Status")),n.a.createElement(m["a"],{color:(c===null||c===void 0?void 0:c.status)===1?"success":"warning"},(c===null||c===void 0?void 0:c.status)===1?"Resolved":"Pending")),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement(b["a"],{disabled:N,onClick:function e(){return O(true)},className:"bg-primary mt-3 text-white"},"Assign to Admin"),n.a.createElement(b["a"],{disabled:N,onClick:function e(){return F(true)},className:"bg-success mt-3 text-white ml-3"},"Update status")))))))),n.a.createElement(v["a"],{size:"sm",isOpen:w,toggle:function e(){return O(!w)}},n.a.createElement(f["a"],{toggle:function e(){return O(!w)}},"Assign"),n.a.createElement(p["a"],null,n.a.createElement(g["a"],null,n.a.createElement("div",{className:"px-3"},n.a.createElement(E["a"],{type:"select",onChange:z,required:true},n.a.createElement("option",{value:""},"--Select Admin --"),A===null||A===void 0?void 0:A.map(function(e,t){return n.a.createElement("option",{key:t,value:e.auth_id},e.first_name," ",e.last_name)}))),n.a.createElement("div",{className:"mt-2 text-right"},n.a.createElement("button",{onClick:function e(){return q()},type:"button",className:" btn rounded btn-primary mt-2"},"Assign"))))),n.a.createElement(v["a"],{size:"sm",isOpen:P,toggle:function e(){return F(!P)}},n.a.createElement(f["a"],{toggle:function e(){return F(!P)}},"Update Status"),n.a.createElement(p["a"],null,n.a.createElement(g["a"],null,n.a.createElement("div",{className:"px-3"},n.a.createElement(E["a"],{type:"select",onChange:T,required:true},n.a.createElement("option",{value:""},"--Select Status --"),n.a.createElement("option",{value:1},"Resolved"),n.a.createElement("option",{value:0},"Pending"))),n.a.createElement("div",{className:"mt-2 text-right"},n.a.createElement("button",{onClick:function e(){return J()},type:"button",className:" btn rounded btn-primary mt-2"},"Update"))))))};w(O,"useState{[assignModal, setAssignModal](false)}\nuseState{[statusModal, setStatusModal](false)}\nuseState{[adminId, setAdminId]('')}\nuseState{[statusId, setStatusId](0)}\nuseRef{inputEl}\nuseEffect{}");function _(e){return{getVehicle:function t(a,l){return e(Object(d["f"])(a,l))},assignVehicleFeedback:function t(a,l){return e(Object(d["a"])(a,l))},updateVehicleFeedbackStatus:function t(a,l){return e(Object(d["t"])(a,l))},getAdmins:function t(a,l){return e(Object(N["f"])(a,l))}}}var D=function e(t){return{vehicleDetails:t.vehicle.vehicleFeedbackDetails,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus,driverDetails:t.driver.driver,admins:t.admins.admins}};var P=Object(r["b"])(D,_)(O);t["default"]=P;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(O,"VehicleFeedbackDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehicleFeedbackDetails.js");e.register(_,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehicleFeedbackDetails.js");e.register(D,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehicleFeedbackDetails.js");e.register(P,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehicleFeedbackDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);