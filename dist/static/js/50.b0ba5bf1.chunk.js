(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{1379:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var o=r(166);var l=r(32);var i=r(1446);var s=r(1457);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var c=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var u=function e(t){var r=t.match,l=t.getTrips,i=t.getTripCount;Object(a["useEffect"])(function(){l(1,"on_ride",true);i("on_ride")},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(o["a"],{title:"Trips",match:r}),n.a.createElement(s["a"],{status:"on_ride",header:"Current Trips"}))};c(u,"useEffect{}");function d(e){return{getTrips:function t(r,a,n){return e(Object(i["v"])(r,a,n))},getTripCount:function t(r){return e(Object(i["p"])(r))}}}var m=function e(t){return{trips:t.trips.trips,tripCount:t.trips.tripCount,isLoading:t.loading.loading}};var p=Object(l["b"])(m,d)(u);t["default"]=p;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(u,"TripsCurrent","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\tripsCurrent.js");e.register(d,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\tripsCurrent.js");e.register(m,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\tripsCurrent.js");e.register(p,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\tripsCurrent.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))},1457:function(e,t,r){"use strict";(function(e){var a=r(0);var n=r.n(a);var o=r(223);var l=r(225);var i=r(18);var s=r(224);var c=r(117);var u=r(116);var d=r(1466);var m=r(103);var p=r(66);var f=r(32);var v=r(1446);var b=r(21);var g=r(105);var h=r.n(g);var E=r(104);var y=r(119);var _=r(7);var C=r(67);var j=r(40);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function T(e,t,r,a,n,o,l){try{var i=e[o](l);var s=i.value}catch(e){r(e);return}if(i.done){t(s)}else{Promise.resolve(s).then(a,n)}}function w(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function l(e){T(o,a,n,l,i,"next",e)}function i(e){T(o,a,n,l,i,"throw",e)}l(undefined)})}}function k(e,t){return D(e)||H(e,t)||x(e,t)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function x(e,t){if(!e)return;if(typeof e==="string")return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}function N(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function H(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var l,i;try{for(r=r.call(e);!(n=(l=r.next()).done);n=true){a.push(l.value);if(t&&a.length===t)break}}catch(e){o=true;i=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw i}}return a}function D(e){if(Array.isArray(e))return e}var L=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var S=r(229);var P=function e(t){var r=t.trips,f=t.getTrips,v=t.isLoading,g=t.tripCount,T=t.status,O=t.header,x=t.searchTrips,N=t.getTripCount,H=t.getCancelledTrips,D=t.getCancelledTripCount,L=t.getTripExport;var P=Object(_["g"])();var G=S.parse(P.location.search,{ignoreQueryPrefix:true}).page;var I=Object(a["useState"])(function(){return G===undefined?1:parseInt(G,10)}),A=k(I,2),V=A[0],F=A[1];var U=Object(a["useState"])(20),M=k(U,1),R=M[0];var Q=Object(a["useState"])(""),q=k(Q,2),z=q[0],J=q[1];var B=Object(a["useState"])(""),$=k(B,2),K=$[0],W=$[1];var X=Object(a["useRef"])(null);var Y=function(){var e=w(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:P.push("".concat(P.location.pathname,"?page=").concat(t));r.next=3;return F(t);case 3:if(!(T==="driver_not_found")){r.next=8;break}r.next=6;return H(t,true);case 6:r.next=10;break;case 8:r.next=10;return f(t,T);case 10:window.scrollTo(0,0);case 11:case"end":return r.stop()}}},e)}));return function t(r){return e.apply(this,arguments)}}();var Z=function e(){T==="driver_not_found"?H(pageNumber,true):f(1,T)};var ee=function e(){P.push("".concat(P.location.pathname,"?page=",1));f(1,T,false,z,K);N(T,z,K)};var te=function e(t){x(t,T)};var re=function e(){T==="driver_not_found"?D():N(T)};var ae=function e(){X.current.open()};var ne=function e(){X.current.close();L(T,"","",z,K)};console.log(T);return n.a.createElement("div",null,n.a.createElement(p["a"],{heading:O,fullBlock:true,style:{minHeight:"70vh"}},T!=="driver_not_found"&&n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement(y["a"],{getPreviousData:Z,getSearchedData:te,setCurrentPage:F,getCount:re,placeHolder:"Trip Reference"})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:z,min:"2018-01-01",max:Object(j["x"])(),onChange:function e(t){return J(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"wallet-start",defaultValue:K,min:"2018-01-01",max:Object(j["x"])(),onChange:function e(t){return W(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-5 mb-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:ee},"Apply Filter")),T!=="driver_not_found"&&n.a.createElement("div",{className:"float-right"},!v&&r.length>0&&n.a.createElement(u["a"],{onClick:function e(){return ae()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!v&&r.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(o["a"],null,n.a.createElement(s["a"],null,n.a.createElement(c["a"],{hover:true},T==="driver_not_found"&&n.a.createElement(i["a"],null,"Start Address"),T!=="driver_not_found"&&n.a.createElement(i["a"],null,"Trip Reference"),n.a.createElement(i["a"],null,"Date / Time"),T!=="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,"Class"),n.a.createElement(i["a"],null,"Type"),T==="on_ride"&&n.a.createElement(i["a"],null,"Vehicle Plate Number"),n.a.createElement(i["a"],null,"Status")),T==="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,"Driver not found"),n.a.createElement(i["a"],null,"Driver ignored")),T!=="driver_not_found"&&n.a.createElement(i["a"],null,"Action"))),n.a.createElement(l["a"],null,n.a.createElement(a["Fragment"],null,r.length>0&&r.map(function(e){var t,r,a;return n.a.createElement(c["a"],{hover:true,key:e.trip_id},T==="driver_not_found"&&n.a.createElement(i["a"],null,n.a.createElement(d["a"],null,n.a.createElement(d["a"],{body:true},n.a.createElement("h5",{className:"m-0 pt-15"},e===null||e===void 0?void 0:e.start_address)))),T!=="driver_not_found"&&n.a.createElement(i["a"],null,n.a.createElement(d["a"],null,n.a.createElement(d["a"],{body:true},n.a.createElement("h5",{className:"m-0 pt-15"},e.trip_ref)))),n.a.createElement(i["a"],null,Object(j["a"])(e.createdAt)),T!=="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,e.ride_class),n.a.createElement(i["a"],null,e.ride_type),T==="on_ride"&&n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(t=e.driver_data)===null||t===void 0?void 0:t.car_number_plate),n.a.createElement(i["a"],null,n.a.createElement(m["a"],{color:e.ride_status==="completed"?"success":e.ride_status==="cancel"?"danger":e.ride_status==="waiting"?"warning":"secondary"},e.ride_status==="on_trip"?"current":e.ride_status==="on_pickup"?"enroute":(e===null||e===void 0?void 0:e.ride_status)==="cancel"?"cancelled":e.ride_status))),T==="driver_not_found"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(r=e.total_request)===null||r===void 0?void 0:r.driver_not_found),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(a=e.total_request)===null||a===void 0?void 0:a.driver_ignore)),T!=="driver_not_found"&&n.a.createElement(i["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},n.a.createElement(b["b"],{to:{pathname:"/admin/trips/".concat(e.trip_id),state:{trip_status:T}}},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(h.a,{activePage:V,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:R,totalItemsCount:g,onChange:Y}))),r.length===0&&!v&&n.a.createElement(E["a"],null)),n.a.createElement(C["a"],{ref:X,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:ne}))};L(P,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\r\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\r\n  })}\nuseState{[postsPerPage](20)}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{exportRef}',function(){return[_["g"]]});function G(e){return{getTrips:function t(r,a,n,o,l){return e(Object(v["v"])(r,a,n,o,l))},getTripCount:function t(r,a,n){return e(Object(v["p"])(r,a,n))},getTripExport:function t(r,a,n,o,l){return e(Object(v["u"])(r,a,n,o,l))},searchTrips:function t(r,a){return e(Object(v["w"])(r,a))},getCancelledTrips:function t(r,a){return e(Object(v["b"])(r,a))},getCancelledTripCount:function t(){return e(Object(v["a"])())}}}var I=function e(t){return{trips:t.trips.trips,tripCount:t.trips.tripCount,isLoading:t.loading.loading}};var A=Object(f["b"])(I,G)(P);t["a"]=A;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(P,"TripsTable","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\component\\tripsTable.js");e.register(G,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\component\\tripsTable.js");e.register(I,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\component\\tripsTable.js");e.register(A,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\trips\\component\\tripsTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))},1466:function(e,t,r){"use strict";var a=r(2);var n=r(20);var o=r(0);var l=r.n(o);var i=r(1);var s=r.n(i);var c=r(29);var u=r.n(c);var d=r(9);var m={body:s.a.bool,bottom:s.a.bool,children:s.a.node,className:s.a.string,cssModule:s.a.object,heading:s.a.bool,left:s.a.bool,list:s.a.bool,middle:s.a.bool,object:s.a.bool,right:s.a.bool,tag:d["o"],top:s.a.bool};var p=function e(t){var r=t.body,o=t.bottom,i=t.className,s=t.cssModule,c=t.heading,m=t.left,p=t.list,f=t.middle,v=t.object,b=t.right,g=t.tag,h=t.top,E=Object(n["a"])(t,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);var y;if(c){y="h4"}else if(E.href){y="a"}else if(E.src||v){y="img"}else if(p){y="ul"}else{y="div"}var _=g||y;var C=Object(d["k"])(u()(i,{"media-body":r,"media-heading":c,"media-left":m,"media-right":b,"media-top":h,"media-bottom":o,"media-middle":f,"media-object":v,"media-list":p,media:!r&&!c&&!m&&!b&&!h&&!o&&!f&&!v&&!p}),s);return l.a.createElement(_,Object(a["a"])({},E,{className:C}))};p.propTypes=m;t["a"]=p}}]);