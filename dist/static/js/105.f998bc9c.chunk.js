(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{1355:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var l=a(223);var s=a(225);var o=a(18);var i=a(224);var c=a(116);var u=a(166);var m=a(67);var d=a(34);var f=a(376);var p=a(203);var g=a.n(p);var v=a(197);var b=a(370);var h=a(104);var E=a.n(h);var y=a(20);var P=a(40);var j=a(103);var w=a(118);var x=a(80);var C=a(64);var A=a(115);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function N(e,t){return L(e)||H(e,t)||S(e,t)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,t){if(!e)return;if(typeof e==="string")return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}function O(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function H(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var l=false;var s,o;try{for(a=a.call(e);!(n=(s=a.next()).done);n=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){l=true;o=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(l)throw o}}return r}function L(e){if(Array.isArray(e))return e}var D=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var G=a(229);var F=function e(t){var a=t.history,d=t.match,f=t.getPassengers,p=t.passengers,g=t.loading,h=t.passengerCount,x=t.getPassengerCount,k=t.searchPassenger,S=t.getUserExport;var O=G.parse(a.location.search,{ignoreQueryPrefix:true}).page;var H=Object(r["useState"])(function(){return O===undefined?1:parseInt(O,10)}),L=N(H,2),D=L[0],F=L[1];var M=Object(r["useState"])(""),T=N(M,2),I=T[0],R=T[1];var z=Object(r["useState"])(""),X=N(z,2),_=X[0],Q=X[1];var U=Object(r["useRef"])(null);Object(r["useEffect"])(function(){if(O===undefined||p.length<1){f(D,true);x()}},[]);var J=function e(t){a.push("".concat(a.location.pathname,"?page=").concat(t));F(t);f(t);window.scrollTo(0,0)};var V=function e(){U.current.open()};var B=function e(){U.current.close();S("rider","","",I,_)};var $=function e(){f(1,false,I,_);x(I,_)};return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(u["a"],{title:"Riders",match:d}),n.a.createElement(m["a"],{heading:"All Passengers",fullBlock:true,item:p,currentPage:D,totalCount:h},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement(w["a"],{setCurrentPage:F,getSearchedData:k,getPreviousData:f,getCount:x}),n.a.createElement(v["a"],{mini:"true",className:"search-icon-btn"},n.a.createElement("i",{className:"zmdi zmdi-search"})),n.a.createElement(b["a"],null)),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block mb-2 ml-3"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:I,min:"2018-01-01",max:Object(P["x"])(),onChange:function e(t){R(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:_,min:"2018-01-01",max:Object(P["x"])(),onChange:function e(t){Q(t.target.value)}})),n.a.createElement(A["a"],{onClick:function e(){return $()},style:{height:"30px"},className:"align-items-center justify-content-center",color:"success"},"Apply filter"),n.a.createElement("div",{className:"float-right"},!g&&p.length>0&&n.a.createElement(A["a"],{onClick:function e(){return V()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!g&&p.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(l["a"],null,n.a.createElement(i["a"],null,n.a.createElement(c["a"],{hover:true},n.a.createElement(o["a"],null,"First Name"),n.a.createElement(o["a"],null,"Last Name"),n.a.createElement(o["a"],null,"Phone No"),n.a.createElement(o["a"],null,"Date / Time of Registration"),n.a.createElement(o["a"],null,"Action"))),n.a.createElement(s["a"],null,n.a.createElement(r["Fragment"],null,p.map(function(e,t){return n.a.createElement(c["a"],{hover:true,key:t},n.a.createElement(o["a"],null,e.first_name),n.a.createElement(o["a"],null,e.last_name),n.a.createElement(o["a"],null,e.phone_number),n.a.createElement(o["a"],null,Object(P["a"])(e.createdAt)),n.a.createElement(o["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},n.a.createElement(y["b"],{to:"/admin/passengers/".concat(e.auth_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(E.a,{activePage:D,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:h,onChange:J}))),!g&&p.length<1&&n.a.createElement(j["a"],null)),n.a.createElement(C["a"],{ref:U,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:B}))};D(F,'useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{exportRef}\nuseEffect{}');function M(e){return{getPassengers:function t(a,r,n,l){return e(Object(f["c"])(a,r,n,l))},getPassengerCount:function t(a,r){return e(Object(f["b"])(a,r))},searchPassenger:function t(a){return e(Object(f["d"])(a))},getUserExport:function t(a,r,n,l,s){return e(Object(x["i"])(a,r,n,l,s))}}}var T=function e(t){return{passengers:t.passenger.passengers,passengerCount:t.passenger.passengerCount,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var I=Object(d["b"])(T,M)(F);t["default"]=I;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(F,"Passengers","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/passengers/passengers.js");e.register(M,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/passengers/passengers.js");e.register(T,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/passengers/passengers.js");e.register(I,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/passengers/passengers.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);