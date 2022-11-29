(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{1338:function(e,a,t){"use strict";t.r(a);(function(e){var n=t(0);var l=t.n(n);var r=t(32);var i=t(166);var o=t(1464);var c=t(1545);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();var u=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var d=function e(a){var t=a.match,n=a.getChartRevenueData,r=a.revenueChartData;return l.a.createElement("div",null,l.a.createElement(i["a"],{title:"Finance",match:t}),l.a.createElement(c["a"],null))};function s(e){return{getChartRevenueData:function a(t,n,l){return e(Object(o["b"])(t,n,l))}}}var m=function e(a){return{loadingStatus:a.loading.loadingStatus,revenueChartData:a.revenueSplit.chartRevenueData}};var v=Object(r["b"])(m,s)(d);a["default"]=v;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(d,"revenues","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js");e.register(s,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js");e.register(m,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js");e.register(v,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(6)(e))},1545:function(e,a,t){"use strict";(function(e){var n=t(0);var l=t.n(n);var r=t(32);var i=t(223);var o=t(225);var c=t(18);var u=t(224);var d=t(116);var s=t(66);var m=t(40);var v=t(1445);var f=t(115);var p=t(67);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function b(e,a){return x(e)||y(e,a)||E(e,a)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(e,a){if(!e)return;if(typeof e==="string")return h(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,a)}function h(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,n=new Array(a);t<a;t++){n[t]=e[t]}return n}function y(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var n=[];var l=true;var r=false;var i,o;try{for(t=t.call(e);!(l=(i=t.next()).done);l=true){n.push(i.value);if(a&&n.length===a)break}}catch(e){r=true;o=e}finally{try{if(!l&&t["return"]!=null)t["return"]()}finally{if(r)throw o}}return n}function x(e){if(Array.isArray(e))return e}var S=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var w=function e(a){var t=a.getFinanceTrip,r=a.getFinanceService,v=a.getFinanceWallet,g=a.financeTrip,E=a.financeWallet,h=a.financeService,y=a.loading,x=a.sendFinanceTripExport;var S=Object(n["useState"])("daily"),w=b(S,2),j=w[0],A=w[1];var N=Object(n["useState"])(""),P=b(N,2),T=P[0],L=P[1];var k=Object(n["useState"])(""),H=b(k,2),D=H[0],F=H[1];var G=Object(n["useRef"])(null);Object(n["useEffect"])(function(){t("trip",j);r("service",j);v("wallet",j)},[]);var O=function e(){G.current.open()};var M=function e(){G.current.close();x("trip",j,T,D)};var C=function e(a){A(a.target.value)};var I=function e(){t("trip",j,T,D);r("service",j,T,D);v("wallet",j,T,D)};var X=[{value:"daily",label:"Daily"},{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly"}];console.log(g);return l.a.createElement("div",null,l.a.createElement(s["a"],{heading:"Finance Table",fullBlock:true,style:{minHeight:"70vh"}},l.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},l.a.createElement("select",{name:"fiter-dropdown",onChange:C,className:"p-1 px-4"},X.map(function(e,a){return l.a.createElement("option",{value:e.value,key:a},e.label)}))),l.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},l.a.createElement("small",{className:"fw-bold mr-2"},"From"),l.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:T,min:"2018-01-01",max:Object(m["x"])(),onChange:function e(a){L(a.target.value)}})),l.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},l.a.createElement("small",{className:"fw-bold mr-2"},"To"),l.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:D,min:"2018-01-01",max:Object(m["x"])(),onChange:function e(a){F(a.target.value)}})),l.a.createElement(f["a"],{onClick:function e(){return I()},style:{height:"30px"},className:"align-items-center justify-content-center",color:"success"},"Apply filter"),l.a.createElement("div",{className:"row mt-3 p-2"},l.a.createElement("div",{className:"col-sm-4 align-items-start d-flex flex-column"},l.a.createElement("div",{className:"font-weight-bold mb-2"},"Trip Payment"),l.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh",border:"1px solid lightgrey"}},l.a.createElement(i["a"],null,l.a.createElement(u["a"],null,l.a.createElement(d["a"],{hover:true},l.a.createElement(c["a"],null,"Date"),l.a.createElement(c["a"],null,"Successful"),l.a.createElement(c["a"],null,"Failed"))),g.length>0&&g.map(function(e,a){var t,r;var i=e.data[e.data.findIndex(function(e){return e.status===1})];var u=e.data[e.data.findIndex(function(e){return e.status===2})];return l.a.createElement(o["a"],{key:a},l.a.createElement(n["Fragment"],null,l.a.createElement(d["a"],{hover:true},l.a.createElement(c["a"],null,e.group_date),l.a.createElement(c["a"],null,i&&l.a.createElement("div",null,"₦",i===null||i===void 0?void 0:(t=i.balance)===null||t===void 0?void 0:t.toLocaleString()," (",i===null||i===void 0?void 0:i.total,")")),l.a.createElement(c["a"],null,u&&l.a.createElement("div",null,"₦",u===null||u===void 0?void 0:(r=u.balance)===null||r===void 0?void 0:r.toLocaleString()," (",u===null||u===void 0?void 0:u.total,")")))))})),g.length===0&&!y&&l.a.createElement("div",{className:"text-center mt-3"},"No Data"))),l.a.createElement("div",{className:"col-sm-4 align-items-start d-flex flex-column"},l.a.createElement("div",{className:"font-weight-bold  mb-2"},"Service Payment"),l.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh",border:"1px solid lightgrey"}},l.a.createElement(i["a"],null,l.a.createElement(u["a"],null,l.a.createElement(d["a"],{hover:true},l.a.createElement(c["a"],null,"Date"),l.a.createElement(c["a"],null,"Successful"),l.a.createElement(c["a"],null,"Failed"))),h.length>0&&h.map(function(e,a){var t,r;var i=e.data[e.data.findIndex(function(e){return e.status===1})];var u=e.data[e.data.findIndex(function(e){return e.status===2})];return l.a.createElement(o["a"],{key:a},l.a.createElement(n["Fragment"],null,l.a.createElement(d["a"],{hover:true},l.a.createElement(c["a"],null,e===null||e===void 0?void 0:e.group_date),l.a.createElement(c["a"],null,i&&l.a.createElement("div",null,"₦",i===null||i===void 0?void 0:(t=i.balance)===null||t===void 0?void 0:t.toLocaleString()," (",i===null||i===void 0?void 0:i.total,")")),l.a.createElement(c["a"],null,u&&l.a.createElement("div",null,"₦",u===null||u===void 0?void 0:(r=u.balance)===null||r===void 0?void 0:r.toLocaleString()," (",u===null||u===void 0?void 0:u.total,")")))))})),h.length===0&&!y&&l.a.createElement("div",{className:"text-center mt-3"},"No Data"))),l.a.createElement("div",{className:"col-sm-4 align-items-start d-flex flex-column"},l.a.createElement("div",{className:"font-weight-bold  mb-2"},"Wallet Payment"),l.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh",border:"1px solid lightgrey"}},l.a.createElement(i["a"],null,l.a.createElement(u["a"],null,l.a.createElement(d["a"],{hover:true},l.a.createElement(c["a"],null,"Date"),l.a.createElement(c["a"],null,"Successful"),l.a.createElement(c["a"],null,"Failed"))),E.length>0&&E.map(function(e,a){var t,r;var i=e.data[e.data.findIndex(function(e){return e.status===1})];var u=e.data[e.data.findIndex(function(e){return e.status===2})];return l.a.createElement(o["a"],{key:a},l.a.createElement(n["Fragment"],null,l.a.createElement(d["a"],{hover:true},l.a.createElement(c["a"],null,e===null||e===void 0?void 0:e.group_date),l.a.createElement(c["a"],null,i&&l.a.createElement("div",null,"₦",i===null||i===void 0?void 0:(t=i.balance)===null||t===void 0?void 0:t.toLocaleString()," (",i===null||i===void 0?void 0:i.total,")")),l.a.createElement(c["a"],null,u&&l.a.createElement("div",null,"₦",u===null||u===void 0?void 0:(r=u.balance)===null||r===void 0?void 0:r.toLocaleString()," (",u===null||u===void 0?void 0:u.total,")")))))})),E.length===0&&!y&&l.a.createElement("div",{className:"text-center mt-3"},"No Data"))))),l.a.createElement(p["a"],{ref:G,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:M}))};S(w,'useState{[dateType, setDateType]("daily")}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{inputEl}\nuseEffect{}');function j(e){return{getFinanceTrip:function a(t,n,l,r){return e(Object(v["m"])(t,n,l,r))},getFinanceService:function a(t,n,l,r){return e(Object(v["l"])(t,n,l,r))},sendFinanceTripExport:function a(t,n,l,r){return e(Object(v["E"])(t,n,l,r))},getFinanceWallet:function a(t,n,l,r){return e(Object(v["n"])(t,n,l,r))}}}var A=function e(a){return{loading:a.loading.loading,loadingStatus:a.loading.loadingStatus,financeWallet:a.payments.financeWallet,financeService:a.payments.financeService,financeTrip:a.payments.financeTrip}};var N=Object(r["b"])(A,j)(w);a["a"]=N;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(w,"FinanceTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js");e.register(j,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js");e.register(A,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js");e.register(N,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(6)(e))}}]);