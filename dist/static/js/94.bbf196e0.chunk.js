(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{1314:function(r,e,t){"use strict";t.r(e);(function(r){var a=t(0);var n=t.n(a);var o=t(32);var i=t(63);var s=t(291);var u=t(166);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(r)})();function d(r,e){return p(r)||v(r,e)||c(r,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(r,e){if(!r)return;if(typeof r==="string")return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor)t=r.constructor.name;if(t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,e)}function f(r,e){if(e==null||e>r.length)e=r.length;for(var t=0,a=new Array(e);t<e;t++){a[t]=r[t]}return a}function v(r,e){var t=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(t==null)return;var a=[];var n=true;var o=false;var i,s;try{for(t=t.call(r);!(n=(i=t.next()).done);n=true){a.push(i.value);if(e&&a.length===e)break}}catch(r){o=true;s=r}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(o)throw s}}return a}function p(r){if(Array.isArray(r))return r}var b=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(r){return r};var m=t(229);var g=function r(e){var t=e.history,o=e.getDrivers,i=e.drivers,l=e.match,c=e.getDriversCount;var f=m.parse(t.location.search,{ignoreQueryPrefix:true}).page;var v=Object(a["useState"])(function(){return f===undefined?1:parseInt(f,10)}),p=d(v,2),b=p[0],g=p[1];Object(a["useEffect"])(function(){if(f===undefined||i.length<1){o("",b,true);c()}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(u["a"],{title:"Drivers",match:l}),n.a.createElement(s["c"],{status:"",header:"All Drivers",match:l}))};b(g,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function h(r){return{getDrivers:function e(t,a,n){return r(Object(i["f"])(t,a,n))},getDriversCount:function e(t){return r(Object(i["g"])(t))}}}var y=function r(e){return{drivers:e.driver.drivers,driversCount:e.driver.driversCount}};var w=Object(o["b"])(y,h)(g);e["default"]=w;(function(){var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!r){return}r.register(g,"Drivers","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/drivers.js");r.register(h,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/drivers.js");r.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/drivers.js");r.register(w,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/drivers.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(r)})()}).call(this,t(6)(r))}}]);