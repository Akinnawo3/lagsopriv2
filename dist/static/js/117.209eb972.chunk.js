(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[117],{1380:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var o=r(166);var l=r(32);var i=r(1470);var u=r(1449);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function s(e,t){return g(e)||p(e,t)||d(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(!e)return;if(typeof e==="string")return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}function f(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function p(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var l,i;try{for(r=r.call(e);!(n=(l=r.next()).done);n=true){a.push(l.value);if(t&&a.length===t)break}}catch(e){o=true;i=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw i}}return a}function g(e){if(Array.isArray(e))return e}var b=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var w=r(229);var v=function e(t){var r=t.history,l=t.match,u=t.wallets,c=t.getWallets,d=t.getWalletsCount,f=t.getFundingBalance;var p=w.parse(r.location.search,{ignoreQueryPrefix:true}).page;var g=Object(a["useState"])(function(){return p===undefined?1:parseInt(p,10)}),b=s(g,2),v=b[0],m=b[1];Object(a["useEffect"])(function(){if(p===undefined||u.length<1){c(v,"","",true,"");d("","",true,"");f("","","")}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(o["a"],{title:"Wallets",match:l}),n.a.createElement(i["a"],{status:"",heading:"All Transaction"}))};b(v,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function m(e){return{getWallets:function t(r,a,n,o,l){return e(Object(u["d"])(r,a,n,o,l))},getWalletsCount:function t(r,a,n,o){return e(Object(u["e"])(r,a,n,o))},getFundingBalance:function t(r,a,n){return e(Object(u["a"])(r,a,n))}}}var h=function e(t){return{wallets:t.wallets.wallets,walletsCount:t.wallets.walletsCount,isLoading:t.loading.isLoading}};var y=Object(l["b"])(h,m)(v);t["default"]=y;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"Wallets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/wallets.js");e.register(m,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/wallets.js");e.register(h,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/wallets.js");e.register(y,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/wallets.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))}}]);