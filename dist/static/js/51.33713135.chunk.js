(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{1380:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var i=a(166);var o=a(34);var l=a(1448);var c=a(1459);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var s=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var u=function e(t){var a=t.match,o=t.getTrips,l=t.getTripCount;Object(r["useEffect"])(function(){o(1,"waiting",true);l("waiting")},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(i["a"],{title:"Trips",match:a}),n.a.createElement(c["a"],{status:"waiting",header:"Waiting Trips"}))};s(u,"useEffect{}");function d(e){return{getTrips:function t(a,r,n){return e(Object(l["x"])(a,r,n))},getTripCount:function t(a){return e(Object(l["r"])(a))}}}var m=function e(t){return{trips:t.trips.trips,tripCount:t.trips.tripCount,isLoading:t.loading.loading}};var p=Object(o["b"])(m,d)(u);t["default"]=p;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(u,"TripsWaiting","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsWaiting.js");e.register(d,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsWaiting.js");e.register(m,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsWaiting.js");e.register(p,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/tripsWaiting.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1459:function(e,t,a){"use strict";(function(e){var r=a(0);var n=a.n(r);var i=a(223);var o=a(225);var l=a(18);var c=a(224);var s=a(116);var u=a(115);var d=a(1468);var m=a(102);var p=a(66);var f=a(34);var v=a(1448);var b=a(20);var g=a(104);var h=a.n(g);var E=a(103);var y=a(118);var _=a(6);var j=a(67);var w=a(40);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function T(e,t,a,r,n,i,o){try{var l=e[i](o);var c=l.value}catch(e){a(e);return}if(l.done){t(c)}else{Promise.resolve(c).then(r,n)}}function x(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){T(i,r,n,o,l,"next",e)}function l(e){T(i,r,n,o,l,"throw",e)}o(undefined)})}}function P(e,t){return N(e)||O(e,t)||A(e,t)||C()}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(!e)return;if(typeof e==="string")return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(e,t)}function k(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function O(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var i=false;var o,l;try{for(a=a.call(e);!(n=(o=a.next()).done);n=true){r.push(o.value);if(t&&r.length===t)break}}catch(e){i=true;l=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(i)throw l}}return r}function N(e){if(Array.isArray(e))return e}var H=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var L=a(229);var S=function e(t){var a=t.trips,f=t.getTrips,v=t.isLoading,g=t.tripCount,T=t.status,C=t.header,A=t.searchTrips,k=t.getTripCount,O=t.getCancelledTrips,N=t.getCancelledTripCount,H=t.getTripExport;var S=Object(_["g"])();var G=L.parse(S.location.search,{ignoreQueryPrefix:true}).page;var M=Object(r["useState"])(function(){return G===undefined?1:parseInt(G,10)}),D=P(M,2),F=D[0],X=D[1];var R=Object(r["useState"])(20),I=P(R,1),W=I[0];var Q=Object(r["useState"])(""),V=P(Q,2),q=V[0],z=V[1];var J=Object(r["useState"])(""),B=P(J,2),U=B[0],$=B[1];var K=Object(r["useRef"])(null);var Y=function(){var e=x(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:S.push("".concat(S.location.pathname,"?page=").concat(t));a.next=3;return X(t);case 3:if(!(T==="driver_not_found")){a.next=8;break}a.next=6;return O(t,true);case 6:a.next=10;break;case 8:a.next=10;return f(t,T);case 10:window.scrollTo(0,0);case 11:case"end":return a.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();var Z=function e(){T==="driver_not_found"?O(pageNumber,true):f(1,T)};var ee=function e(){S.push("".concat(S.location.pathname,"?page=",1));f(1,T,false,q,U);k(T,q,U)};var te=function e(t){A(t,T)};var ae=function e(){T==="driver_not_found"?N():k(T)};var re=function e(){K.current.open()};var ne=function e(){K.current.close();H(T,"","",q,U)};console.log(a);return n.a.createElement("div",null,n.a.createElement(p["a"],{heading:C,fullBlock:true,style:{minHeight:"70vh"}},T!=="driver_not_found"&&n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement(y["a"],{getPreviousData:Z,getSearchedData:te,setCurrentPage:X,getCount:ae,placeHolder:"Trip Reference"})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:q,min:"2018-01-01",max:Object(w["x"])(),onChange:function e(t){return z(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:U,min:"2018-01-01",max:Object(w["x"])(),onChange:function e(t){return $(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:ee},"Apply Filter")),T!=="driver_not_found"&&n.a.createElement("div",{className:"float-right"},!v&&a.length>0&&n.a.createElement(u["a"],{onClick:function e(){return re()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!v&&a.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(i["a"],null,n.a.createElement(c["a"],null,n.a.createElement(s["a"],{hover:true},T==="driver_not_found"&&n.a.createElement(l["a"],null,"Start Address"),T!=="driver_not_found"&&n.a.createElement(l["a"],null,"Trip Reference"),n.a.createElement(l["a"],null,"Date / Time"),T!=="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l["a"],null,"Class"),n.a.createElement(l["a"],null,"Type"),T==="on_ride"&&n.a.createElement(l["a"],null,"Vehicle Plate Number"),n.a.createElement(l["a"],null,"Status")),T==="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l["a"],null,"Driver not found"),n.a.createElement(l["a"],null,"Driver ignored")),T!=="driver_not_found"&&n.a.createElement(l["a"],null,"Action"))),n.a.createElement(o["a"],null,n.a.createElement(r["Fragment"],null,a.length>0&&a.map(function(e){var t,a,r;return n.a.createElement(s["a"],{hover:true,key:e.trip_id},T==="driver_not_found"&&n.a.createElement(l["a"],null,n.a.createElement(d["a"],null,n.a.createElement(d["a"],{body:true},n.a.createElement("h5",{className:"m-0 pt-15"},e===null||e===void 0?void 0:e.start_address)))),T!=="driver_not_found"&&n.a.createElement(l["a"],null,n.a.createElement(d["a"],null,n.a.createElement(d["a"],{body:true},n.a.createElement("h5",{className:"m-0 pt-15"},e.trip_ref)))),n.a.createElement(l["a"],null,T==="driver_not_found"?Object(w["a"])(e===null||e===void 0?void 0:e.updatedAt):Object(w["a"])(e===null||e===void 0?void 0:e.createdAt)),T!=="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l["a"],null,e.ride_class),n.a.createElement(l["a"],null,e.ride_type),T==="on_ride"&&n.a.createElement(l["a"],null,e===null||e===void 0?void 0:(t=e.driver_data)===null||t===void 0?void 0:t.car_number_plate),n.a.createElement(l["a"],null,n.a.createElement(m["a"],{color:e.ride_status==="completed"?"success":e.ride_status==="cancel"?"danger":e.ride_status==="waiting"?"warning":"secondary"},e.ride_status==="on_trip"?"current":e.ride_status==="on_pickup"?"enroute":(e===null||e===void 0?void 0:e.ride_status)==="cancel"?"cancelled":e.ride_status))),T==="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l["a"],null,e===null||e===void 0?void 0:(a=e.total_request)===null||a===void 0?void 0:a.driver_not_found),n.a.createElement(l["a"],null,e===null||e===void 0?void 0:(r=e.total_request)===null||r===void 0?void 0:r.driver_ignore)),T!=="driver_not_found"&&n.a.createElement(l["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},n.a.createElement(b["b"],{to:{pathname:"/admin/trips/".concat(e.trip_id),state:{trip_status:T}}},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(h.a,{activePage:F,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:W,totalItemsCount:g,onChange:Y}))),a.length===0&&!v&&n.a.createElement(E["a"],null)),n.a.createElement(j["a"],{ref:K,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:ne}))};H(S,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseState{[postsPerPage](20)}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{exportRef}',function(){return[_["g"]]});function G(e){return{getTrips:function t(a,r,n,i,o){return e(Object(v["x"])(a,r,n,i,o))},getTripCount:function t(a,r,n){return e(Object(v["r"])(a,r,n))},getTripExport:function t(a,r,n,i,o){return e(Object(v["w"])(a,r,n,i,o))},searchTrips:function t(a,r){return e(Object(v["y"])(a,r))},getCancelledTrips:function t(a,r){return e(Object(v["b"])(a,r))},getCancelledTripCount:function t(){return e(Object(v["a"])())}}}var M=function e(t){return{trips:t.trips.trips,tripCount:t.trips.tripCount,isLoading:t.loading.loading}};var D=Object(f["b"])(M,G)(S);t["a"]=D;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(S,"TripsTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js");e.register(G,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js");e.register(M,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js");e.register(D,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/trips/component/tripsTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1468:function(e,t,a){"use strict";var r=a(2);var n=a(21);var i=a(0);var o=a.n(i);var l=a(1);var c=a.n(l);var s=a(28);var u=a.n(s);var d=a(9);var m={body:c.a.bool,bottom:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,heading:c.a.bool,left:c.a.bool,list:c.a.bool,middle:c.a.bool,object:c.a.bool,right:c.a.bool,tag:d["o"],top:c.a.bool};var p=function e(t){var a=t.body,i=t.bottom,l=t.className,c=t.cssModule,s=t.heading,m=t.left,p=t.list,f=t.middle,v=t.object,b=t.right,g=t.tag,h=t.top,E=Object(n["a"])(t,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);var y;if(s){y="h4"}else if(E.href){y="a"}else if(E.src||v){y="img"}else if(p){y="ul"}else{y="div"}var _=g||y;var j=Object(d["k"])(u()(l,{"media-body":a,"media-heading":s,"media-left":m,"media-right":b,"media-top":h,"media-bottom":i,"media-middle":f,"media-object":v,"media-list":p,media:!a&&!s&&!m&&!b&&!h&&!i&&!f&&!v&&!p}),c);return o.a.createElement(_,Object(r["a"])({},E,{className:j}))};p.propTypes=m;t["a"]=p}}]);