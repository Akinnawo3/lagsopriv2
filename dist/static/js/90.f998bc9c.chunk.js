(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{1350:function(e,a,t){"use strict";t.r(a);(function(e){var r=t(0);var n=t.n(r);var l=t(166);var o=t(1562);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();var i=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var c=function e(a){var t=a.match;return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(l["a"],{title:"Performance",match:t}),n.a.createElement(o["a"],null))};var s=c;a["default"]=s;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(c,"VehiclesPerformance","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehiclesPerformance.js");e.register(s,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/vehiclesPerformance.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1562:function(e,a,t){"use strict";(function(e){var r=t(0);var n=t.n(r);var l=t(223);var o=t(225);var i=t(18);var c=t(224);var s=t(116);var u=t(115);var m=t(67);var d=t(34);var f=t(104);var v=t.n(f);var h=t(103);var p=t(118);var g=t(6);var b=t(64);var E=t(40);var y=t(48);var P=t(8);var w=t.n(P);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function j(e,a,t,r,n,l,o){try{var i=e[l](o);var c=i.value}catch(e){t(e);return}if(i.done){a(c)}else{Promise.resolve(c).then(r,n)}}function x(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var l=e.apply(a,t);function o(e){j(l,r,n,o,i,"next",e)}function i(e){j(l,r,n,o,i,"throw",e)}o(undefined)})}}function S(e,a){return C(e)||O(e,a)||k(e,a)||N()}function N(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e,a){if(!e)return;if(typeof e==="string")return A(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,a)}function A(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,r=new Array(a);t<a;t++){r[t]=e[t]}return r}function O(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var r=[];var n=true;var l=false;var o,i;try{for(t=t.call(e);!(n=(o=t.next()).done);n=true){r.push(o.value);if(a&&r.length===a)break}}catch(e){l=true;i=e}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(l)throw i}}return r}function C(e){if(Array.isArray(e))return e}var H=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var L=t(229);var G=function e(a){var t=a.getVehiclesPerformance,d=a.getVehiclesPerformanceCount,f=a.vehiclesPerformance,p=a.vehiclesPerformanceCount,y=a.loading,P=a.loadingStatus,j=a.getVehiclePerformanceExport;var N=Object(g["g"])();var k=L.parse(N.location.search,{ignoreQueryPrefix:true}).page;var A=Object(r["useState"])(function(){return k===undefined?1:parseInt(k,10)}),O=S(A,2),C=O[0],H=O[1];var G=Object(r["useState"])(100),V=S(G,1),T=V[0];var D=Object(r["useState"])(Object(E["x"])()),M=S(D,2),I=M[0],F=M[1];var _=Object(r["useState"])(Object(E["x"])()),X=S(_,2),R=X[0],Q=X[1];var z=Object(r["useState"])(""),B=S(z,2),J=B[0],U=B[1];var $=Object(r["useState"])(""),q=S($,2),K=q[0],W=q[1];var Y=Object(r["useRef"])(null);Object(r["useEffect"])(function(){t(C,true,I,R,J,K);d(I,R,J,K)},[]);var Z=function(){var e=x(regeneratorRuntime.mark(function e(a){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:N.push("".concat(N.location.pathname,"?page=").concat(a));H(a);t(a,false,I,R,J,K);d(I,R,J,K);window.scrollTo(0,0);case 5:case"end":return r.stop()}}},e)}));return function a(t){return e.apply(this,arguments)}}();var ee=function e(){Y.current.close();j(I,R,K)};var ae=function e(){N.push("".concat(N.location.pathname,"?page=",1));t(C,false,I,R,J,K);d(I,R,J,K)};var te=w()(R);var re=w()(I);w.a.duration(re.diff(te)).asDays();var ne=w.a.duration(te.diff(re)).asDays()+1;console.log(p);var le=function e(){Y.current.open()};return n.a.createElement("div",null,n.a.createElement(m["a"],{heading:"Vehicles Performance",fullBlock:true,style:{minHeight:"70vh"}},n.a.createElement("div",{className:"ml-3"},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:I,min:"2018-01-01",max:Object(E["x"])(),onChange:function e(a){return F(a.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:R,min:"2018-01-01",max:Object(E["x"])(),onChange:function e(a){return Q(a.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"Vehicle Plate No."),n.a.createElement("input",{type:"text",id:"vehicleId",name:"vehicle id",placeholder:"Plate No.",value:J,onChange:function e(a){return U(a.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"Order"),n.a.createElement("select",{type:"select",id:"vehicleId",name:"vehicle id",className:"p-1",placeholder:"Plate No.",value:K,onChange:function e(a){return W(a.target.value)},style:{width:120}},n.a.createElement("option",{hidden:true},"--order--"),n.a.createElement("option",{value:"1"},"Ascending"),n.a.createElement("option",{value:"-1"},"Descending"))),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:ae},"Apply Filter"))),n.a.createElement("div",{className:"float-right"},!y&&f.length>0&&n.a.createElement(u["a"],{onClick:function e(){return le()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!y&&f.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(l["a"],null,n.a.createElement(c["a"],null,n.a.createElement(s["a"],{hover:true},n.a.createElement(i["a"],null,"S/N"),n.a.createElement(i["a"],null,"Vehicle Plate No."),n.a.createElement(i["a"],null,"Driver First Name"),n.a.createElement(i["a"],null,"Driver Last Name"),n.a.createElement(i["a"],null,"Gross Value (₦)"),n.a.createElement(i["a"],null,"Position Balance (₦)"),n.a.createElement(i["a"],null,"Gross Earning (%)"))),n.a.createElement(o["a"],null,n.a.createElement(r["Fragment"],null,f.length>0&&f.map(function(e,a){return n.a.createElement(s["a"],{hover:true,key:e.vehicle_id},n.a.createElement(i["a"],null,a+1),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:e.car_number_plate),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:e.first_name),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:e.last_name),n.a.createElement(i["a"],null,"₦".concat(e===null||e===void 0?void 0:e.gross_balance.toLocaleString())),n.a.createElement(i["a"],null,"₦".concat(e===null||e===void 0?void 0:e.position_balance.toLocaleString())),n.a.createElement(i["a"],null,parseFloat(((e===null||e===void 0?void 0:e.gross_balance)/(32e3*ne)*100).toString()).toFixed(2)))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(v.a,{activePage:C,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:T,totalItemsCount:p,onChange:Z}))),f.length===0&&!y&&n.a.createElement(h["a"],null)),n.a.createElement(b["a"],{ref:Y,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:ee}))};H(G,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseState{[postsPerPage](100)}\nuseState{[startDate, setStartDate](getTodayDate())}\nuseState{[endDate, setEndDate](getTodayDate())}\nuseState{[vehicleId, setVehicleId]("")}\nuseState{[order, setOrder]("")}\nuseRef{exportRef}\nuseEffect{}',function(){return[g["g"]]});function V(e){return{getVehiclesPerformance:function a(t,r,n,l,o,i){return e(Object(y["n"])(t,r,n,l,o,i))},getVehiclesPerformanceCount:function a(t,r,n,l){return e(Object(y["o"])(t,r,n,l))},getVehiclePerformanceExport:function a(t,r,n){return e(Object(y["h"])(t,r,n))}}}var T=function e(a){return{vehiclesPerformance:a.vehicle.vehiclesPerformance,vehiclesPerformanceCount:a.vehicle.vehiclesPerformanceCount,loading:a.loading.loading,loadingStatus:a.loading.loadingStatus}};var D=Object(d["b"])(T,V)(G);a["a"]=D;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(G,"VehiclesPerformanceTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js");e.register(V,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js");e.register(T,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js");e.register(D,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/components/vehiclesPerformanceTable.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))}}]);