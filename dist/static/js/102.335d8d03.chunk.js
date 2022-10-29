(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[102],{1334:function(e,t,a){"use strict";a.r(t);(function(e){var l=a(0);var n=a.n(l);var i=a(369);var r=a(166);var s=a(32);var o=a(1445);var c=a(40);var d=a(102);var m=a(20);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var u=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function e(t){var a,s,o,u,v,p,g,f;var E=t.match,h=t.payment,y=t.getPaymentDetails;Object(l["useEffect"])(function(){if(E.params.id){y(E.params.id)}},[E.params.id]);return n.a.createElement("div",{className:"mb-5",style:{minHeight:"90vh"}},n.a.createElement(i["a"],null,n.a.createElement("title",null,"Payment Service Details"),n.a.createElement("meta",{name:"description",content:"Payment Service Details"})),n.a.createElement(r["a"],{title:"Payment Service details",match:E}),n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem",minHeight:"90vh"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Payment Id")),h===null||h===void 0?void 0:h.payment_id),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Amount")),"₦",h===null||h===void 0?void 0:(a=h.amount)===null||a===void 0?void 0:a.toLocaleString()),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Method")),h===null||h===void 0?void 0:h.payment_method),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Payment Type")),h===null||h===void 0?void 0:h.payment_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User Name")),(h===null||h===void 0?void 0:(s=h.user_data)===null||s===void 0?void 0:s.length)>0?n.a.createElement(m["b"],{to:(h===null||h===void 0?void 0:h.user_data[0].user_type)==="driver"?"/admin/drivers/".concat(h===null||h===void 0?void 0:h.auth_id):"/admin/passengers/".concat(h===null||h===void 0?void 0:h.auth_id)},h===null||h===void 0?void 0:(o=h.user_data[0])===null||o===void 0?void 0:o.first_name," ",h===null||h===void 0?void 0:(u=h.user_data[0])===null||u===void 0?void 0:u.last_name):""),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User Type")),(h===null||h===void 0?void 0:(v=h.user_data)===null||v===void 0?void 0:v.length)>0?h===null||h===void 0?void 0:h.user_data[0].user_type:""),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User Phone")),(h===null||h===void 0?void 0:(p=h.user_data)===null||p===void 0?void 0:p.length)>0?h===null||h===void 0?void 0:h.user_data[0].phone_number:""),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"User Email")),(h===null||h===void 0?void 0:(g=h.user_data)===null||g===void 0?void 0:g.length)>0?h===null||h===void 0?void 0:(f=h.user_data[0])===null||f===void 0?void 0:f.email:""),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Description")),h===null||h===void 0?void 0:h.description),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Date")),Object(c["a"])(h===null||h===void 0?void 0:h.createdAt)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Status")),n.a.createElement(d["a"],{color:Object(c["u"])(h===null||h===void 0?void 0:h.status)},Object(c["q"])(h===null||h===void 0?void 0:h.status)))))))))};u(v,"useEffect{}");function p(e){return{getPaymentDetails:function t(a){return e(Object(o["p"])(a))}}}var g=function e(t){return{payment:t.payments.paymentServiceDetails,sosUserDetails:t.sos.sosUserDetails}};var f=Object(s["b"])(g,p)(v);t["default"]=f;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"PaymentServiceDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments-service/paymentServiceDetails.js");e.register(p,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments-service/paymentServiceDetails.js");e.register(g,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments-service/paymentServiceDetails.js");e.register(f,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments-service/paymentServiceDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))}}]);