(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[107],{1317:function(r,e,t){"use strict";t.r(e);(function(r){var a=t(0);var n=t.n(a);var i=t(166);var o=t(32);var u=t(1454);var s=t(1499);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(r)})();function d(r,e){return p(r)||g(r,e)||c(r,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(r,e){if(!r)return;if(typeof r==="string")return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor)t=r.constructor.name;if(t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,e)}function f(r,e){if(e==null||e>r.length)e=r.length;for(var t=0,a=new Array(e);t<e;t++){a[t]=r[t]}return a}function g(r,e){var t=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(t==null)return;var a=[];var n=true;var i=false;var o,u;try{for(t=t.call(r);!(n=(o=t.next()).done);n=true){a.push(o.value);if(e&&a.length===e)break}}catch(r){i=true;u=r}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(i)throw u}}return a}function p(r){if(Array.isArray(r))return r}var v=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(r){return r};var b=t(229);var m=function r(e){var t=e.history,o=e.match,u=e.getRatings,l=e.getRatingsCount,c=e.ratings;var f=b.parse(t.location.search,{ignoreQueryPrefix:true}).page;var g=Object(a["useState"])(function(){return f===undefined?1:parseInt(f,10)}),p=d(g,2),v=p[0],m=p[1];Object(a["useEffect"])(function(){if(f===undefined||c.length<1){u(v,"driver",true);l("driver")}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(i["a"],{title:"Ratings",match:o}),n.a.createElement(s["a"],{user_type:"driver",header:"Driver Ratings"}))};v(m,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function h(r){return{getRatings:function e(t,a,n){return r(Object(u["b"])(t,a,n))},getRatingsCount:function e(t){return r(Object(u["c"])(t))}}}var y=function r(e){return{ratings:e.rating.ratings,ratingCount:e.rating.ratingCount,loading:e.loading.loading}};var w=Object(o["b"])(y,h)(m);e["default"]=w;(function(){var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!r){return}r.register(m,"DriverRatings","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/driver-ratings.js");r.register(h,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/driver-ratings.js");r.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/driver-ratings.js");r.register(w,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/driver-ratings.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(r)})()}).call(this,t(6)(r))}}]);