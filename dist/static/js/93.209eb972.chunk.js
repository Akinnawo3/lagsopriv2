(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93],{1343:function(e,r,t){"use strict";t.r(r);(function(e){var a=t(0);var n=t.n(a);var o=t(32);var i=t(63);var s=t(291);var u=t(166);(function(){var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;r&&r(e)})();function c(e,r){return v(e)||p(e,r)||l(e,r)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,r){if(!e)return;if(typeof e==="string")return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}function f(e,r){if(r==null||r>e.length)r=e.length;for(var t=0,a=new Array(r);t<r;t++){a[t]=e[t]}return a}function p(e,r){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var a=[];var n=true;var o=false;var i,s;try{for(t=t.call(e);!(n=(i=t.next()).done);n=true){a.push(i.value);if(r&&a.length===r)break}}catch(e){o=true;s=e}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(o)throw s}}return a}function v(e){if(Array.isArray(e))return e}var b=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var m=t(229);var g=function e(r){var t=r.history,o=r.getDrivers,i=r.drivers,d=r.match,l=r.getDriversCount;var f=m.parse(t.location.search,{ignoreQueryPrefix:true}).page;var p=Object(a["useState"])(function(){return f===undefined?1:parseInt(f,10)}),v=c(p,2),b=v[0],g=v[1];Object(a["useEffect"])(function(){if(f===undefined||i.length<1){o(1,b,true);l(1)}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(u["a"],{title:"Accepted Drivers",match:d}),n.a.createElement(s["c"],{status:1,header:"Accepted Drivers"}))};b(g,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function h(e){return{getDrivers:function r(t,a,n){return e(Object(i["f"])(t,a,n))},getDriversCount:function r(t){return e(Object(i["g"])(t))}}}var y=function e(r){return{drivers:r.driver.drivers,driversCount:r.driver.driversCount}};var A=Object(o["b"])(y,h)(g);r["default"]=A;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(g,"AcceptedDrivers","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/acceptedDrivers.js");e.register(h,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/acceptedDrivers.js");e.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/acceptedDrivers.js");e.register(A,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/drivers/acceptedDrivers.js")})();(function(){var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;r&&r(e)})()}).call(this,t(6)(e))}}]);