(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{1342:function(r,e,t){"use strict";t.r(e);(function(r){var a=t(0);var n=t.n(a);var i=t(34);var o=t(64);var s=t(292);var u=t(166);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(r)})();function c(r,e){return p(r)||v(r,e)||l(r,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(r,e){if(!r)return;if(typeof r==="string")return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor)t=r.constructor.name;if(t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,e)}function f(r,e){if(e==null||e>r.length)e=r.length;for(var t=0,a=new Array(e);t<e;t++){a[t]=r[t]}return a}function v(r,e){var t=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(t==null)return;var a=[];var n=true;var i=false;var o,s;try{for(t=t.call(r);!(n=(o=t.next()).done);n=true){a.push(o.value);if(e&&a.length===e)break}}catch(r){i=true;s=r}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(i)throw s}}return a}function p(r){if(Array.isArray(r))return r}var b=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(r){return r};var m=t(229);var g=function r(e){var t=e.history,i=e.getDrivers,o=e.drivers,d=e.match,l=e.getDriversCount;var f=m.parse(t.location.search,{ignoreQueryPrefix:true}).page;var v=Object(a["useState"])(function(){return f===undefined?1:parseInt(f,10)}),p=c(v,2),b=p[0],g=p[1];Object(a["useEffect"])(function(){if(f===undefined||o.length<1){i(5,b,true);l(5)}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(u["a"],{title:"Inactive Drivers",match:d}),n.a.createElement(s["c"],{status:5,header:"Inactive Drivers"}))};b(g,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function h(r){return{getDrivers:function e(t,a,n){return r(Object(o["f"])(t,a,n))},getDriversCount:function e(t){return r(Object(o["g"])(t))}}}var y=function r(e){return{drivers:e.driver.drivers,driversCount:e.driver.driversCount}};var w=Object(i["b"])(y,h)(g);e["default"]=w;(function(){var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!r){return}r.register(g,"InactiveDrivers","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/inactiveDrivers.js");r.register(h,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/inactiveDrivers.js");r.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/inactiveDrivers.js");r.register(w,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/inactiveDrivers.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(r)})()}).call(this,t(7)(r))}}]);