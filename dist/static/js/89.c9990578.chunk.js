(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[89],{1350:function(e,a,t){"use strict";t.r(a);(function(e){var r=t(0);var n=t.n(r);var l=t(166);var o=t(1560);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();var i=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var c=function e(a){var t=a.match;return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(l["a"],{title:"Performance",match:t}),n.a.createElement(o["a"],null))};var s=c;a["default"]=s;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(c,"VehiclesPerformance","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehiclesPerformance.js");e.register(s,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehiclesPerformance.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1560:function(e,a,t){"use strict";(function(e){var r=t(0);var n=t.n(r);var l=t(223);var o=t(225);var i=t(18);var c=t(224);var s=t(116);var u=t(66);var d=t(34);var m=t(104);var f=t.n(m);var v=t(103);var p=t(118);var h=t(6);var b=t(67);var g=t(40);var y=t(50);var P=t(8);var E=t.n(P);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function w(e,a,t,r,n,l,o){try{var i=e[l](o);var c=i.value}catch(e){t(e);return}if(i.done){a(c)}else{Promise.resolve(c).then(r,n)}}function j(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var l=e.apply(a,t);function o(e){w(l,r,n,o,i,"next",e)}function i(e){w(l,r,n,o,i,"throw",e)}o(undefined)})}}function S(e,a){return L(e)||H(e,a)||k(e,a)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e,a){if(!e)return;if(typeof e==="string")return A(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,a)}function A(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,r=new Array(a);t<a;t++){r[t]=e[t]}return r}function H(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var r=[];var n=true;var l=false;var o,i;try{for(t=t.call(e);!(n=(o=t.next()).done);n=true){r.push(o.value);if(a&&r.length===a)break}}catch(e){l=true;i=e}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(l)throw i}}return r}function L(e){if(Array.isArray(e))return e}var G=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var O=t(229);var C=function e(a){var t=a.getVehiclesPerformance,d=a.getVehiclesPerformanceCount,m=a.vehiclesPerformance,p=a.vehiclesPerformanceCount,b=a.loading,y=a.loadingStatus;var P=Object(h["g"])();var w=O.parse(P.location.search,{ignoreQueryPrefix:true}).page;var x=Object(r["useState"])(function(){return w===undefined?1:parseInt(w,10)}),k=S(x,2),A=k[0],H=k[1];var L=Object(r["useState"])(20),G=S(L,1),C=G[0];var N=Object(r["useState"])(Object(g["x"])()),V=S(N,2),T=V[0],D=V[1];var M=Object(r["useState"])(Object(g["x"])()),I=S(M,2),F=I[0],_=I[1];var X=Object(r["useState"])(""),R=S(X,2),Q=R[0],B=R[1];var J=Object(r["useRef"])(null);Object(r["useEffect"])(function(){t(A,true,T,F,Q);d(T,F,Q)},[]);var U=function(){var e=j(regeneratorRuntime.mark(function e(a){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:P.push("".concat(P.location.pathname,"?page=").concat(a));H(a);t(a,false,T,F,Q);d(T,F,Q);window.scrollTo(0,0);case 5:case"end":return r.stop()}}},e)}));return function a(t){return e.apply(this,arguments)}}();var $=function e(){P.push("".concat(P.location.pathname,"?page=",1));t(A,false,T,F,Q);d(T,F,Q)};var q=E()(F);var z=E()(T);E.a.duration(z.diff(q)).asDays();var K=E.a.duration(q.diff(z)).asDays()+1;console.log(K);return n.a.createElement("div",null,n.a.createElement(u["a"],{heading:"Vehicles Performance",fullBlock:true,style:{minHeight:"70vh"}},n.a.createElement("div",{className:"ml-3"},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:T,min:"2018-01-01",max:Object(g["x"])(),onChange:function e(a){return D(a.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:F,min:"2018-01-01",max:Object(g["x"])(),onChange:function e(a){return _(a.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"Vehicle Id"),n.a.createElement("input",{type:"text",id:"vehicleId",name:"vehicle id",value:Q,onChange:function e(a){return B(a.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:$},"Apply Filter"))),!b&&m.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(l["a"],null,n.a.createElement(c["a"],null,n.a.createElement(s["a"],{hover:true},n.a.createElement(i["a"],null,"Vehicle Plate No."),n.a.createElement(i["a"],null,"Driver First Name"),n.a.createElement(i["a"],null,"Driver Last Name"),n.a.createElement(i["a"],null,"Gross Value (₦)"),n.a.createElement(i["a"],null,"Position Balance (₦)"),n.a.createElement(i["a"],null,"Gross Earning (%)"))),n.a.createElement(o["a"],null,n.a.createElement(r["Fragment"],null,m.length>0&&m.map(function(e){return n.a.createElement(s["a"],{hover:true,key:e.vehicle_id},n.a.createElement(i["a"],null,e===null||e===void 0?void 0:e.car_number_plate),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:e.first_name),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:e.last_name),n.a.createElement(i["a"],null,"₦".concat(e===null||e===void 0?void 0:e.gross_balance.toLocaleString())),n.a.createElement(i["a"],null,"₦".concat(e===null||e===void 0?void 0:e.position_balance.toLocaleString())),n.a.createElement(i["a"],null,parseFloat(((e===null||e===void 0?void 0:e.gross_balance)/(32e3*K)*100).toString()).toFixed(2)))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(f.a,{activePage:A,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:C,totalItemsCount:p,onChange:U}))),m.length===0&&!b&&n.a.createElement(v["a"],null)))};G(C,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseState{[postsPerPage](20)}\nuseState{[startDate, setStartDate](getTodayDate())}\nuseState{[endDate, setEndDate](getTodayDate())}\nuseState{[vehicleId, setVehicleId]("")}\nuseRef{exportRef}\nuseEffect{}',function(){return[h["g"]]});function N(e){return{getVehiclesPerformance:function a(t,r,n,l,o){return e(Object(y["l"])(t,r,n,l,o))},getVehiclesPerformanceCount:function a(t,r,n){return e(Object(y["m"])(t,r,n))}}}var V=function e(a){return{vehiclesPerformance:a.vehicle.vehiclesPerformance,vehiclesPerformanceCount:a.vehicle.vehiclesPerformanceCount,loading:a.loading.loading,loadingStatus:a.loading.loadingStatus}};var T=Object(d["b"])(V,N)(C);a["a"]=T;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(C,"VehiclesPerformanceTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js");e.register(N,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js");e.register(V,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js");e.register(T,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))}}]);