(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{1331:function(e,t,a){"use strict";a.r(t);(function(e){var l=a(0);var n=a.n(l);var s=a(369);var r=a(166);var i=a(34);var o=a(1447);var m=a(40);var c=a(102);var d=a(20);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var u=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(t){var a;var i=t.match,o=t.payment,u=t.getPaymentDetails,p=t.sosUserDetails;Object(l["useEffect"])(function(){if(i.params.id){u(i.params.id)}},[i.params.id]);return n.a.createElement("div",{className:"mb-5",style:{minHeight:"90vh"}},n.a.createElement(s["a"],null,n.a.createElement("title",null,"Payment Details"),n.a.createElement("meta",{name:"description",content:"Payment Details"})),n.a.createElement(r["a"],{title:"Payment details",match:i}),n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem",minHeight:"90vh"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Payment Id")),o===null||o===void 0?void 0:o.payment_id),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Trip Reference")),o===null||o===void 0?void 0:o.trip_ref),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Amount")),"₦",o===null||o===void 0?void 0:(a=o.amount)===null||a===void 0?void 0:a.toLocaleString()),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Charge Method")),o===null||o===void 0?void 0:o.charge_method),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Payment Method")),o===null||o===void 0?void 0:o.payment_method),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Ride Class")),o===null||o===void 0?void 0:o.ride_class),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Rider")),n.a.createElement(d["b"],{to:"/admin/passengers/".concat(o===null||o===void 0?void 0:o.rider_id)},o===null||o===void 0?void 0:o.first_name," ",o===null||o===void 0?void 0:o.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Rider Phone")),p===null||p===void 0?void 0:p.phone_number),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Rider Email")),p===null||p===void 0?void 0:p.email),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Trip Id")),n.a.createElement(d["b"],{to:"/admin/trips/".concat(o===null||o===void 0?void 0:o.trip_id)},o===null||o===void 0?void 0:o.trip_id)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Trip Class")),o===null||o===void 0?void 0:o.trip_class),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Number of Trails")),o===null||o===void 0?void 0:o.trials),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Date")),Object(m["a"])(o===null||o===void 0?void 0:o.createdAt)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Status")),n.a.createElement(c["a"],{color:Object(m["t"])(o===null||o===void 0?void 0:o.status)},Object(m["p"])(o===null||o===void 0?void 0:o.status))),(o===null||o===void 0?void 0:o.status)===2&&n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Reason for failed paymnet")),o===null||o===void 0?void 0:o.failure_reason)))))))};u(p,"useEffect{}");function v(e){return{getPaymentDetails:function t(a){return e(Object(o["o"])(a))}}}var g=function e(t){return{payment:t.payments.payment,sosUserDetails:t.sos.sosUserDetails}};var E=Object(i["b"])(g,v)(p);t["default"]=E;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"PaymentDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/paymentDetails.js");e.register(v,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/paymentDetails.js");e.register(g,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/paymentDetails.js");e.register(E,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/paymentDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);