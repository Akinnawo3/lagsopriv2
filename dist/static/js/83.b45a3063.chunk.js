(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{1332:function(e,t,a){"use strict";a.r(t);(function(e){var n=a(0);var r=a.n(n);var l=a(166);var o=a(34);var i=a(1447);var u=a(1468);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function c(e,t){return p(e)||f(e,t)||m(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(!e)return;if(typeof e==="string")return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}function d(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,n=new Array(t);a<t;a++){n[a]=e[a]}return n}function f(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var n=[];var r=true;var l=false;var o,i;try{for(a=a.call(e);!(r=(o=a.next()).done);r=true){n.push(o.value);if(t&&n.length===t)break}}catch(e){l=true;i=e}finally{try{if(!r&&a["return"]!=null)a["return"]()}finally{if(l)throw i}}return n}function p(e){if(Array.isArray(e))return e}var v=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var y=a(229);var g=function e(t){var a=t.history,o=t.match,i=t.getPayments,s=t.getPaymentsCount,m=t.payments,d=t.paymentsCount;var f=y.parse(a.location.search,{ignoreQueryPrefix:true}).page;var p=Object(n["useState"])(function(){return f===undefined?1:parseInt(f,10)}),v=c(p,2),g=v[0],b=v[1];Object(n["useEffect"])(function(){if(f===undefined||m.length<1){i(g,2,"",true);s(2)}},[]);return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(l["a"],{title:"Trip Payments",match:o}),r.a.createElement(u["a"],{status:2,header:"Unsuccessful Payments"}))};v(g,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function b(e){return{getPayments:function t(a,n,r,l){return e(Object(i["q"])(a,n,r,l))},getPaymentsCount:function t(a,n){return e(Object(i["r"])(a,n))}}}var h=function e(t){return{payments:t.payments.payments,paymentsCount:t.payments.paymentsCount,isLoading:t.loading.loading,sosUserDetails:t.sos.sosUserDetails}};var E=Object(o["b"])(h,b)(g);t["default"]=E;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(g,"UnsuccessfulPayments","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/unsuccessfulPayments.js");e.register(b,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/unsuccessfulPayments.js");e.register(h,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/unsuccessfulPayments.js");e.register(E,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/unsuccessfulPayments.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1468:function(e,t,a){"use strict";(function(e){var n=a(0);var r=a.n(n);var l=a(223);var o=a(225);var i=a(18);var u=a(224);var c=a(116);var s=a(67);var m=a(34);var d=a(104);var f=a.n(d);var p=a(103);var v=a(40);var y=a(115);var g=a(102);var b=a(1447);var h=a(20);var E=a(6);var P=a(64);var j=a(118);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function A(e,t){return S(e)||O(e,t)||C(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e,t){if(!e)return;if(typeof e==="string")return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(e,t)}function x(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,n=new Array(t);a<t;a++){n[a]=e[a]}return n}function O(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var n=[];var r=true;var l=false;var o,i;try{for(a=a.call(e);!(r=(o=a.next()).done);r=true){n.push(o.value);if(t&&n.length===t)break}}catch(e){l=true;i=e}finally{try{if(!r&&a["return"]!=null)a["return"]()}finally{if(l)throw i}}return n}function S(e){if(Array.isArray(e))return e}var k=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var H=a(229);var L=function e(t){var a=t.payments,m=t.status,d=t.paymentsCount,b=t.auth_id,w=t.getPayments,C=t.header,x=t.loading,O=t.getPaymentsExport,S=t.getPaymentsCount,k=t.searchPayment;var L=Object(E["g"])();var T=H.parse(L.location.search,{ignoreQueryPrefix:true}).page;var _=Object(n["useState"])(function(){return T===undefined?1:parseInt(T,10)}),G=A(_,2),M=G[0],N=G[1];var D=Object(n["useRef"])(null);var I=Object(n["useState"])(""),F=A(I,2),X=F[0],Q=F[1];var U=Object(n["useState"])(""),R=A(U,2),q=R[0],z=R[1];var J=function e(t){L.push("".concat(L.location.pathname,"?page=").concat(t));N(t);w(t,m,b);window.scrollTo(0,0)};var V=function e(){D.current.open()};var $=function e(){D.current.close();O(m,"","",X,q)};var B=function e(){w(M,m,b)};var K=function e(){S(m,b)};var W=function e(t){k(t,m)};var Y=function e(){L.push("".concat(L.location.pathname,"?page=",1));w(1,m,b,false,"rider_id",X,q);S(m,b,"rider_id",X,q)};return r.a.createElement("div",null,r.a.createElement(s["a"],{heading:C,fullBlock:true,style:{minHeight:"70vh"},item:a,currentPage:M,totalCount:d},r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},r.a.createElement(j["a"],{getPreviousData:B,getSearchedData:W,setCurrentPage:N,getCount:K,placeHolder:"email, phone, trip reference"})),r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},r.a.createElement("small",{className:"fw-bold mr-2"},"From"),r.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:X,min:"2018-01-01",max:Object(v["x"])(),onChange:function e(t){return Q(t.target.value)}})),r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},r.a.createElement("small",{className:"fw-bold mr-2"},"To"),r.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:q,min:"2018-01-01",max:Object(v["x"])(),onChange:function e(t){return z(t.target.value)}})),r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},r.a.createElement("button",{className:"btn btn-primary",onClick:Y},"Apply Filter")),r.a.createElement("div",{className:"float-right"},!x&&a.length>0&&r.a.createElement(y["a"],{onClick:function e(){return V()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",r.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!x&&(a===null||a===void 0?void 0:a.length)>0&&r.a.createElement("div",null,r.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},r.a.createElement(l["a"],null,r.a.createElement(u["a"],null,r.a.createElement(c["a"],{hover:true},r.a.createElement(i["a"],null,"Trip Reference"),r.a.createElement(i["a"],null,"Amount"),r.a.createElement(i["a"],null,"Actual Amount"),r.a.createElement(i["a"],null,"Promo"),r.a.createElement(i["a"],null,"Rider Name"),r.a.createElement(i["a"],null,"Date / Time"),r.a.createElement(i["a"],null,"Charge Date"),r.a.createElement(i["a"],null,"Charge Method"),r.a.createElement(i["a"],null,"Payment Method"),r.a.createElement(i["a"],null,"Status"),r.a.createElement(i["a"],null,"Action"))),r.a.createElement(o["a"],null,r.a.createElement(n["Fragment"],null,a.map(function(e,t){var a,n,l,o;return r.a.createElement(c["a"],{hover:true,key:t},r.a.createElement(i["a"],null,e.trip_ref),r.a.createElement(i["a"],null,"₦",e===null||e===void 0?void 0:(a=e.amount)===null||a===void 0?void 0:a.toLocaleString()),r.a.createElement(i["a"],null,"₦",(n=e.actual_amount)===null||n===void 0?void 0:n.toLocaleString()),r.a.createElement(i["a"],null,e===null||e===void 0?void 0:(l=e.fare_param)===null||l===void 0?void 0:l.promo_discount," (",e===null||e===void 0?void 0:(o=e.fare_param)===null||o===void 0?void 0:o.promo_value,")"),r.a.createElement(i["a"],null,"".concat(e!==null&&e!==void 0&&e.first_name?e===null||e===void 0?void 0:e.first_name:""," ").concat(e!==null&&e!==void 0&&e.last_name?e===null||e===void 0?void 0:e.last_name:"")),r.a.createElement(i["a"],null,Object(v["a"])(e.createdAt)),r.a.createElement(i["a"],null,Object(v["a"])(e===null||e===void 0?void 0:e.charge_at)),r.a.createElement(i["a"],null,e.charge_method),r.a.createElement(i["a"],null,e.payment_method),r.a.createElement(i["a"],null,r.a.createElement(g["a"],{color:Object(v["t"])(e.status)},Object(v["p"])(e.status))),r.a.createElement(i["a"],null,r.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},r.a.createElement(h["b"],{to:"/admin/payments/".concat(e.payment_id)},r.a.createElement("i",{className:"ti-eye"})))))}))))),r.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},r.a.createElement(f.a,{activePage:M,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:d,onChange:J}))),!x&&(a===null||a===void 0?void 0:a.length)<1&&r.a.createElement(p["a"],null)),r.a.createElement(P["a"],{ref:D,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:$}))};k(L,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseRef{exportRef}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}',function(){return[E["g"]]});function T(e){return{getPayments:function t(a,n,r,l,o,i,u){return e(Object(b["q"])(a,n,r,l,o,i,u))},getPaymentsExport:function t(a,n,r,l,o){return e(Object(b["s"])(a,n,r,l,o))},getPaymentsCount:function t(a,n,r,l,o){return e(Object(b["r"])(a,n,r,l,o))},searchPayment:function t(a,n){return e(Object(b["D"])(a,n))}}}var _=function e(t){return{loading:t.loading.loading,payments:t.payments.payments,paymentsCount:t.payments.paymentsCount}};var G=Object(m["b"])(_,T)(L);t["a"]=G;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(L,"PaymentTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/component/paymentTable.js");e.register(T,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/component/paymentTable.js");e.register(_,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/component/paymentTable.js");e.register(G,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/payments/component/paymentTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);