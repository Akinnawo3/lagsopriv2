(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[107],{1318:function(r,e,t){"use strict";t.r(e);(function(r){var n=t(0);var a=t.n(n);var o=t(166);var i=t(32);var s=t(1454);var u=t(1498);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(r)})();function c(r,e){return p(r)||g(r,e)||d(r,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(r,e){if(!r)return;if(typeof r==="string")return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor)t=r.constructor.name;if(t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,e)}function f(r,e){if(e==null||e>r.length)e=r.length;for(var t=0,n=new Array(e);t<e;t++){n[t]=r[t]}return n}function g(r,e){var t=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(t==null)return;var n=[];var a=true;var o=false;var i,s;try{for(t=t.call(r);!(a=(i=t.next()).done);a=true){n.push(i.value);if(e&&n.length===e)break}}catch(r){o=true;s=r}finally{try{if(!a&&t["return"]!=null)t["return"]()}finally{if(o)throw s}}return n}function p(r){if(Array.isArray(r))return r}var v=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(r){return r};var b=t(229);var y=function r(e){var t=e.history,i=e.match,s=e.getRatings,l=e.getRatingsCount,d=e.ratings;var f=b.parse(t.location.search,{ignoreQueryPrefix:true}).page;var g=Object(n["useState"])(function(){return f===undefined?1:parseInt(f,10)}),p=c(g,2),v=p[0],y=p[1];Object(n["useEffect"])(function(){if(f===undefined||d.length<1){s(v,"rider",true);l("rider")}},[]);return a.a.createElement("div",{className:"table-wrapper"},a.a.createElement(o["a"],{title:"Ratings",match:i}),a.a.createElement(u["a"],{user_type:"rider",header:"Rider Ratings"}))};v(y,"useState{[currentPage, setCurrentPage](() => {\r\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\r\n  })}\nuseEffect{}");function m(r){return{getRatings:function e(t,n,a){return r(Object(s["b"])(t,n,a))},getRatingsCount:function e(t){return r(Object(s["c"])(t))}}}var h=function r(e){return{ratings:e.rating.ratings,ratingCount:e.rating.ratingCount,loading:e.loading.loading}};var j=Object(i["b"])(h,m)(y);e["default"]=j;(function(){var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!r){return}r.register(y,"UserRatings","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\ratings\\user-ratings.js");r.register(m,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\ratings\\user-ratings.js");r.register(h,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\ratings\\user-ratings.js");r.register(j,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\ratings\\user-ratings.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(r)})()}).call(this,t(6)(r))}}]);