(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{1351:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var i=r(166);var o=r(34);var c=r(50);var l=r(138);var u=r(296);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function s(e,t){return p(e)||h(e,t)||f(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(!e)return;if(typeof e==="string")return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}function v(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function h(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var i=false;var o,c;try{for(r=r.call(e);!(n=(o=r.next()).done);n=true){a.push(o.value);if(t&&a.length===t)break}}catch(e){i=true;c=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(i)throw c}}return a}function p(e){if(Array.isArray(e))return e}var g=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var b=r(229);var m=function e(t){var r=t.history,o=t.match,c=t.getVehicles,l=t.getVehiclesCount,d=t.vehicles,f=t.getOems;var v=b.parse(r.location.search,{ignoreQueryPrefix:true}).page;var h=Object(a["useState"])(function(){return v===undefined?1:parseInt(v,10)}),p=s(h,2),g=p[0],m=p[1];Object(a["useEffect"])(function(){if(v===undefined||d.length<1){c(g,1,true);l(1);f(1,true)}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(i["a"],{title:"Active",match:o}),n.a.createElement(u["a"],{assign:"1",header:"Active Vehicles"}))};g(m,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function y(e){return{getVehicles:function t(r,a,n){return e(Object(c["h"])(r,a,n))},getVehiclesCount:function t(r){return e(Object(c["i"])(r))},getOems:function t(r,a){return e(Object(l["d"])(r,a))},getOemCount:function t(){return e(Object(l["c"])())}}}var A=function e(t){return{vehicles:t.vehicle.vehicles,vehiclesCount:t.vehicle.vehiclesCount,drivers:t.driver.drivers,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var w=Object(o["b"])(A,y)(m);t["default"]=w;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(m,"ActiveVehicles","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/activeVehicles.js");e.register(y,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/activeVehicles.js");e.register(A,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/activeVehicles.js");e.register(w,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/vehicles/activeVehicles.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))}}]);