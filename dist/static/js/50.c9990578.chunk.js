(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{1377:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var o=a(166);var l=a(34);var i=a(1448);var c=a(1461);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var s=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var u=function e(t){var a=t.match,l=t.getTrips,i=t.getTripCount;Object(r["useEffect"])(function(){l(1,"completed",true);i("completed")},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(o["a"],{title:"Trips",match:a}),n.a.createElement(c["a"],{status:"completed",header:"Completed Trips"}))};s(u,"useEffect{}");function d(e){return{getTrips:function t(a,r,n){return e(Object(i["x"])(a,r,n))},getTripCount:function t(a){return e(Object(i["r"])(a))}}}var m=function e(t){return{trips:t.trips.trips,tripCount:t.trips.tripCount,isLoading:t.loading.loading}};var p=Object(l["b"])(m,d)(u);t["default"]=p;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(u,"TripsCompleted","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsCompleted.js");e.register(d,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsCompleted.js");e.register(m,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsCompleted.js");e.register(p,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsCompleted.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1461:function(e,t,a){"use strict";(function(e){var r=a(0);var n=a.n(r);var o=a(223);var l=a(225);var i=a(18);var c=a(224);var s=a(116);var u=a(115);var d=a(1465);var m=a(102);var p=a(66);var f=a(34);var v=a(1448);var b=a(20);var g=a(104);var h=a.n(g);var E=a(103);var y=a(118);var _=a(6);var j=a(67);var T=a(40);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function w(e,t,a,r,n,o,l){try{var i=e[o](l);var c=i.value}catch(e){a(e);return}if(i.done){t(c)}else{Promise.resolve(c).then(r,n)}}function C(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function l(e){w(o,r,n,l,i,"next",e)}function i(e){w(o,r,n,l,i,"throw",e)}l(undefined)})}}function x(e,t){return N(e)||O(e,t)||A(e,t)||P()}function P(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(!e)return;if(typeof e==="string")return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(e,t)}function k(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function O(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var l,i;try{for(a=a.call(e);!(n=(l=a.next()).done);n=true){r.push(l.value);if(t&&r.length===t)break}}catch(e){o=true;i=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw i}}return r}function N(e){if(Array.isArray(e))return e}var H=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var L=a(229);var S=function e(t){var a=t.trips,f=t.getTrips,v=t.isLoading,g=t.tripCount,w=t.status,P=t.header,A=t.searchTrips,k=t.getTripCount,O=t.getCancelledTrips,N=t.getCancelledTripCount,H=t.getTripExport;var S=Object(_["g"])();var G=L.parse(S.location.search,{ignoreQueryPrefix:true}).page;var M=Object(r["useState"])(function(){return G===undefined?1:parseInt(G,10)}),D=x(M,2),F=D[0],X=D[1];var R=Object(r["useState"])(20),I=x(R,1),Q=I[0];var V=Object(r["useState"])(""),q=x(V,2),z=q[0],J=q[1];var B=Object(r["useState"])(""),U=x(B,2),$=U[0],K=U[1];var W=Object(r["useRef"])(null);var Y=function(){var e=C(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:S.push("".concat(S.location.pathname,"?page=").concat(t));a.next=3;return X(t);case 3:if(!(w==="driver_not_found")){a.next=8;break}a.next=6;return O(t,true);case 6:a.next=10;break;case 8:a.next=10;return f(t,w);case 10:window.scrollTo(0,0);case 11:case"end":return a.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();var Z=function e(){w==="driver_not_found"?O(pageNumber,true):f(1,w)};var ee=function e(){S.push("".concat(S.location.pathname,"?page=",1));f(1,w,false,z,$);k(w,z,$)};var te=function e(t){A(t,w)};var ae=function e(){w==="driver_not_found"?N():k(w)};var re=function e(){W.current.open()};var ne=function e(){W.current.close();H(w,"","",z,$)};return n.a.createElement("div",null,n.a.createElement(p["a"],{heading:P,fullBlock:true,style:{minHeight:"70vh"}},w!=="driver_not_found"&&n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement(y["a"],{getPreviousData:Z,getSearchedData:te,setCurrentPage:X,getCount:ae,placeHolder:"Trip Reference"})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:z,min:"2018-01-01",max:Object(T["x"])(),onChange:function e(t){return J(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:$,min:"2018-01-01",max:Object(T["x"])(),onChange:function e(t){return K(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:ee},"Apply Filter")),w!=="driver_not_found"&&n.a.createElement("div",{className:"float-right"},!v&&a.length>0&&n.a.createElement(u["a"],{onClick:function e(){return re()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!v&&a.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(o["a"],null,n.a.createElement(c["a"],null,n.a.createElement(s["a"],{hover:true},w==="driver_not_found"&&n.a.createElement(i["a"],null,"Start Address"),w!=="driver_not_found"&&n.a.createElement(i["a"],null,"Trip Reference"),n.a.createElement(i["a"],null,"Date / Time"),w!=="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,"Class"),n.a.createElement(i["a"],null,"Type"),w==="on_ride"&&n.a.createElement(i["a"],null,"Vehicle Plate Number"),n.a.createElement(i["a"],null,"Status")),w==="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,"Driver not found"),n.a.createElement(i["a"],null,"Driver ignored")),w!=="driver_not_found"&&n.a.createElement(i["a"],null,"Action"))),n.a.createElement(l["a"],null,n.a.createElement(r["Fragment"],null,a.length>0&&a.map(function(e){var t,a,r;return n.a.createElement(s["a"],{hover:true,key:e.trip_id},w==="driver_not_found"&&n.a.createElement(i["a"],null,n.a.createElement(d["a"],null,n.a.createElement(d["a"],{body:true},n.a.createElement("h5",{className:"m-0 pt-15"},e===null||e===void 0?void 0:e.start_address)))),w!=="driver_not_found"&&n.a.createElement(i["a"],null,n.a.createElement(d["a"],null,n.a.createElement(d["a"],{body:true},n.a.createElement("h5",{className:"m-0 pt-15"},e.trip_ref)))),n.a.createElement(i["a"],null,w==="driver_not_found"?Object(T["a"])(e===null||e===void 0?void 0:e.updatedAt):Object(T["a"])(e===null||e===void 0?void 0:e.createdAt)),w!=="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,e.ride_class),n.a.createElement(i["a"],null,e.ride_type),w==="on_ride"&&n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(t=e.driver_data)===null||t===void 0?void 0:t.car_number_plate),n.a.createElement(i["a"],null,n.a.createElement(m["a"],{color:e.ride_status==="completed"?"success":e.ride_status==="cancel"?"danger":e.ride_status==="waiting"?"warning":"secondary"},e.ride_status==="on_trip"?"current":e.ride_status==="on_pickup"?"enroute":(e===null||e===void 0?void 0:e.ride_status)==="cancel"?"cancelled":e.ride_status))),w==="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(a=e.total_request)===null||a===void 0?void 0:a.driver_not_found),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(r=e.total_request)===null||r===void 0?void 0:r.driver_ignore)),w!=="driver_not_found"&&n.a.createElement(i["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},n.a.createElement(b["b"],{to:{pathname:"/admin/trips/".concat(e.trip_id),state:{trip_status:w}}},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(h.a,{activePage:F,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:Q,totalItemsCount:g,onChange:Y}))),a.length===0&&!v&&n.a.createElement(E["a"],null)),n.a.createElement(j["a"],{ref:W,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:ne}))};H(S,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n      return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n   })}\nuseState{[postsPerPage](20)}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{exportRef}',function(){return[_["g"]]});function G(e){return{getTrips:function t(a,r,n,o,l){return e(Object(v["x"])(a,r,n,o,l))},getTripCount:function t(a,r,n){return e(Object(v["r"])(a,r,n))},getTripExport:function t(a,r,n,o,l){return e(Object(v["w"])(a,r,n,o,l))},searchTrips:function t(a,r){return e(Object(v["y"])(a,r))},getCancelledTrips:function t(a,r){return e(Object(v["b"])(a,r))},getCancelledTripCount:function t(){return e(Object(v["a"])())}}}var M=function e(t){return{trips:t.trips.trips,tripCount:t.trips.tripCount,isLoading:t.loading.loading}};var D=Object(f["b"])(M,G)(S);t["a"]=D;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(S,"TripsTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js");e.register(G,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js");e.register(M,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js");e.register(D,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1465:function(e,t,a){"use strict";var r=a(2);var n=a(21);var o=a(0);var l=a.n(o);var i=a(1);var c=a.n(i);var s=a(28);var u=a.n(s);var d=a(9);var m={body:c.a.bool,bottom:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,heading:c.a.bool,left:c.a.bool,list:c.a.bool,middle:c.a.bool,object:c.a.bool,right:c.a.bool,tag:d["o"],top:c.a.bool};var p=function e(t){var a=t.body,o=t.bottom,i=t.className,c=t.cssModule,s=t.heading,m=t.left,p=t.list,f=t.middle,v=t.object,b=t.right,g=t.tag,h=t.top,E=Object(n["a"])(t,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);var y;if(s){y="h4"}else if(E.href){y="a"}else if(E.src||v){y="img"}else if(p){y="ul"}else{y="div"}var _=g||y;var j=Object(d["k"])(u()(i,{"media-body":a,"media-heading":s,"media-left":m,"media-right":b,"media-top":h,"media-bottom":o,"media-middle":f,"media-object":v,"media-list":p,media:!a&&!s&&!m&&!b&&!h&&!o&&!f&&!v&&!p}),c);return l.a.createElement(_,Object(r["a"])({},E,{className:j}))};p.propTypes=m;t["a"]=p}}]);