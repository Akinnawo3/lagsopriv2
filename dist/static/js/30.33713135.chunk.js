(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{1401:function(e,a,t){"use strict";t.r(a);(function(e){var n=t(0);var r=t.n(n);var o=t(32);var l=t(29);var i=t(23);var c=t(34);var s=t(64);var d=t(166);var u=t(367);var v=t(15);var m=t.n(v);var f=t(17);var p=t(1588);var g=t(80);var h=t(1448);var b=t(1664);var y=t(1665);var E=t(5);var w=t.n(E);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function j(e,a,t,n,r,o,l){try{var i=e[o](l);var c=i.value}catch(e){t(e);return}if(i.done){a(c)}else{Promise.resolve(c).then(n,r)}}function L(e){return function(){var a=this,t=arguments;return new Promise(function(n,r){var o=e.apply(a,t);function l(e){j(o,n,r,l,i,"next",e)}function i(e){j(o,n,r,l,i,"throw",e)}l(undefined)})}}function S(e,a){return M(e)||N(e,a)||O(e,a)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,a){if(!e)return;if(typeof e==="string")return A(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,a)}function A(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,n=new Array(a);t<a;t++){n[t]=e[t]}return n}function N(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var n=[];var r=true;var o=false;var l,i;try{for(t=t.call(e);!(r=(l=t.next()).done);r=true){n.push(l.value);if(a&&n.length===a)break}}catch(e){o=true;i=e}finally{try{if(!r&&t["return"]!=null)t["return"]()}finally{if(o)throw i}}return n}function M(e){if(Array.isArray(e))return e}var C=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var D=function e(a){var t=a.match,c=a.userLocation,s=a.getUsersLocation,v=a.getDriversLocation,g=a.driversLocation,h=a.getTripCountMovingUsers,w=a.getTripCountWaitingUsers,j=a.tripCountWaitingUsers,x=a.tripCountMovingUsers,O=a.getTripCountMovingDrivers,A=a.getTripCountWaitingDrivers,N=a.tripCountWaitingDrivers,M=a.tripCountMovingDrivers,C=a.searchUserLocation,D=a.searchDriverLocation;var _=Object(n["useState"])({lat:6.4478954861952404,lng:3.4742776645841493}),G=S(_,2),P=G[0],k=G[1];var H=Object(n["useState"])({lat:6.4478954861952404,lng:3.4742776645841493}),T=S(H,2),U=T[0],B=T[1];var X=Object(n["useState"])("driver"),I=S(X,2),W=I[0],R=I[1];var q=Object(n["useState"])(""),z=S(q,2),F=z[0],J=z[1];var Y=Object(n["useState"])([]),Z=S(Y,2),$=Z[0],Q=Z[1];var K=Object(n["useState"])(false),V=S(K,2),ee=V[0],ae=V[1];var te=Object(n["useState"])(false),ne=S(te,2),re=ne[0],oe=ne[1];var le=Object(n["useState"])(false),ie=S(le,2),ce=ie[0],se=ie[1];var de=function e(){return se(true)};var ue=function e(){return se(false)};Object(n["useEffect"])(function(){s(U.lng,U.lat);v(P.lng,P.lat);h();w();O();A()},[]);var ve={panControl:false,mapTypeControl:false};var me=function e(a){a.preventDefault();J(a.target.value)};Object(n["useEffect"])(function(){if(ce&&F.length>2){var e=setTimeout(function(){fe()},2e3);return function(){return clearTimeout(e)}}else{oe(false)}},[F]);var fe=function(){var e=L(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;ae(true);t.next=4;return m.a.get("".concat(f["a"].user,"/v1.1/admin/users?q=").concat(F,"&user_type=").concat(W));case 4:a=t.sent;Q(a.data.data);oe(true);ae(false);t.next=12;break;case 10:t.prev=10;t.t0=t["catch"](0);case 12:case"end":return t.stop()}}},e,null,[[0,10]])}));return function a(){return e.apply(this,arguments)}}();var pe=function e(a){var t,n,r,o;J("".concat(a.first_name," ").concat(a.last_name));console.log(a===null||a===void 0?void 0:(t=a.location)===null||t===void 0?void 0:t.coordinates);if(a!==null&&a!==void 0&&(n=a.location)!==null&&n!==void 0&&n.coordinates&&(a===null||a===void 0?void 0:(r=a.location)===null||r===void 0?void 0:r.coordinates[0])!==0&&(a===null||a===void 0?void 0:(o=a.location)===null||o===void 0?void 0:o.coordinates[1])!==0){if(W==="rider"){var l,i;C(a);B({lat:a===null||a===void 0?void 0:(l=a.location)===null||l===void 0?void 0:l.coordinates[1],lng:a===null||a===void 0?void 0:(i=a.location)===null||i===void 0?void 0:i.coordinates[0]})}else{var c,s;D(a);k({lat:a===null||a===void 0?void 0:(c=a.location)===null||c===void 0?void 0:c.coordinates[1],lng:a===null||a===void 0?void 0:(s=a.location)===null||s===void 0?void 0:s.coordinates[0]})}}else{E["NotificationManager"].error("user coordinate is invalid")}oe(false)};return r.a.createElement("div",null,r.a.createElement(d["a"],{title:"Map",match:t}),r.a.createElement(o["a"],null,r.a.createElement(l["a"],{htmlFor:"browser"},"Search User on Map"),r.a.createElement("div",{className:"d-flex w-50"},r.a.createElement(i["a"],{type:"select",required:true,style:{width:"120px"},value:W,onChange:function e(a){return R(a.target.value)}},r.a.createElement("option",{value:"driver"},"Driver"),r.a.createElement("option",{value:"rider"},"Rider")),r.a.createElement(i["a"],{onFocus:de,onBlur:ue,type:"search",className:"search-input-lg",name:"searchData",value:F,onChange:me,placeholder:"Search.. name, email, phone number",autoComplete:"off",required:true,style:{width:"50%",marginLeft:"-30px"}})),ee&&r.a.createElement("div",{className:"page-loader d-flex justify-content-center mb-30 mt-30"},r.a.createElement(u["a"],{size:24})),!ee&&($===null||$===void 0?void 0:$.length)>0&&re&&r.a.createElement("div",{className:"pr-4 w-100"},r.a.createElement("div",{className:"bg-white",style:{border:"1px solid #EBEDF2",maxHeight:"200px",overflow:"auto",zIndex:1,width:"102%"}},($===null||$===void 0?void 0:$.length)>0&&$.map(function(e,a){return r.a.createElement("option",{onClick:function a(){return pe(e)},key:e.auth_id,className:"p-2 custom-dropdown",style:{width:"100%",cursor:"pointer"}},e.first_name," ",e.last_name)})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 w-xs-half-block"},r.a.createElement(p["a"],{getUsersLocation:v,userLocation:g,waiting:N,moving:M,title:"Drivers Map",center:P,setCenter:k})),r.a.createElement("div",{className:"col-sm-12 col-md-6 w-xs-half-block"},r.a.createElement(p["a"],{getUsersLocation:s,userLocation:c,waiting:j,moving:x,title:"Riders Map",center:U,setCenter:B}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-8 w-xs-half-block",style:{maxHeight:450,overflowY:"scroll"}},r.a.createElement(b["a"],null)),r.a.createElement("div",{className:"col-sm-12 col-md-4 w-xs-half-block",style:{maxHeight:450,overflowY:"scroll"}},r.a.createElement(y["a"],null))))};C(D,'useState{[center, setCenter]({lat: 6.4478954861952404, lng: 3.4742776645841493})}\nuseState{[center2, setCenter2]({lat: 6.4478954861952404, lng: 3.4742776645841493})}\nuseState{[type, setType]("driver")}\nuseState{[searchData, setSearchData]("")}\nuseState{[searchedUser, setSearchedUser]([])}\nuseState{[loading, setLoading](false)}\nuseState{[isShow, setIsShow](false)}\nuseState{[focused, setFocused](false)}\nuseEffect{}\nuseEffect{}');function _(e){return{getUsersLocation:function a(t,n){return e(Object(g["k"])(t,n))},searchUserLocation:function a(t){return e(Object(g["m"])(t))},searchDriverLocation:function a(t){return e(Object(g["l"])(t))},getDriversLocation:function a(t,n){return e(Object(s["h"])(t,n))},getTripCountMovingUsers:function a(){return e(Object(h["t"])())},getTripCountWaitingUsers:function a(){return e(Object(h["v"])())},getTripCountMovingDrivers:function a(){return e(Object(h["s"])())},getTripCountWaitingDrivers:function a(){return e(Object(h["u"])())},getDriverLocation:function a(t,n){return e(Object(s["e"])(t,n))}}}var G=function e(a){return{userLocation:a.users.userLocation,driverLocation:a.driver.driverLocation,driversLocation:a.driver.driversLocation,tripCountMovingUsers:a.trips.tripCountMovingUsers,tripCountWaitingUsers:a.trips.tripCountWaitingUsers,tripCountMovingDrivers:a.trips.tripCountMovingDrivers,tripCountWaitingDrivers:a.trips.tripCountWaitingDrivers}};var P=Object(c["b"])(G,_)(D);a["default"]=P;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(D,"GoogleMapComponent","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/google-map.js");e.register(_,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/google-map.js");e.register(G,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/google-map.js");e.register(P,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/google-map.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1588:function(e,a,t){"use strict";(function(e){var n=t(0);var r=t.n(n);var o=t(1589);var l=t(1592);var i=t.n(l);var c=t(66);var s=t(40);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var u=Object(o["a"])(Object(o["c"])({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),Object(o["b"])(function(){var e={map:undefined};return{onMapMounted:function a(){return function(a){e.map=a}},onZoomChanged:function a(){return function(){console.log(e.map.getZoom());console.log(e.map.getCenter())}},onBoundsChanged:function a(){return function(){return e.map.getCenter().toJSON()}}}}),l["withScriptjs"],l["withGoogleMap"])(function(e){return r.a.createElement(l["GoogleMap"],{defaultZoom:16,center:e.center,onBoundsChanged:function a(){var t=e.onBoundsChanged();e.getUsersNewLocations(t)},ref:e.onMapMounted},e.userLocation.length>0&&e.userLocation.map(function(e,a){var t,n;var o="Name: ".concat(e.first_name,"  ").concat(e.last_name,"\nPhone: ").concat(e.phone_number);var i=(e===null||e===void 0?void 0:e.vehicle_data)&&(e===null||e===void 0?void 0:e.vehicle_data.length)>0&&"Name: ".concat(e.first_name,"  ").concat(e.last_name,"\nPhone: ").concat(e.phone_number,"\nPlate No: ").concat(e===null||e===void 0?void 0:e.vehicle_data[0].car_number_plate,"\nSerial No: ").concat(e===null||e===void 0?void 0:e.vehicle_data[0].car_number);return r.a.createElement(l["Marker"],{key:a,position:{lat:e.coordinates?e.coordinates[1]:(t=e.home_coordinate)===null||t===void 0?void 0:t.latitude,lng:e.coordinates?e.coordinates[0]:(n=e.home_coordinate)===null||n===void 0?void 0:n.longitude},title:"".concat(e!==null&&e!==void 0&&e.vehicle_data&&(e===null||e===void 0?void 0:e.vehicle_data.length)>0?i:o)})}))});var v=function e(a){var t=a.userLocation,n=a.getUsersLocation,o=a.waiting,l=a.moving,i=a.title,d=a.center,v=a.setCenter;var m=function e(a){var t=Object(s["z"])({latitude:a===null||a===void 0?void 0:a.lat,longitude:a===null||a===void 0?void 0:a.lng},{latitude:d===null||d===void 0?void 0:d.lat,longitude:d===null||d===void 0?void 0:d.lng});if(t>=3.5){v(a);n(a===null||a===void 0?void 0:a.lng,a===null||a===void 0?void 0:a.lat)}};return r.a.createElement("div",{className:"map-wrapper"},r.a.createElement(c["a"],{heading:i},r.a.createElement(u,{userLocation:t,getUsersNewLocations:m,center:d}),r.a.createElement("div",null,"Waiting ",i==="Drivers Map"?"Driver":"Rider",": ",o),r.a.createElement("div",null,"Moving ",i==="Drivers Map"?"Driver":"Rider",": ",l)))};var m=v;a["a"]=m;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(u,"MyMapComponent","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/components/Maps/GoogleMapComponent1.js");e.register(v,"GoogleMapComponent1","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/components/Maps/GoogleMapComponent1.js");e.register(m,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/components/Maps/GoogleMapComponent1.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1664:function(e,a,t){"use strict";(function(e){var n=t(0);var r=t.n(n);var o=t(66);var l=t(372);var i=t(34);var c=t(80);var s=t(40);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function d(e,a){return p(e)||f(e,a)||v(e,a)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,a){if(!e)return;if(typeof e==="string")return m(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,a)}function m(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,n=new Array(a);t<a;t++){n[t]=e[t]}return n}function f(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var n=[];var r=true;var o=false;var l,i;try{for(t=t.call(e);!(r=(l=t.next()).done);r=true){n.push(l.value);if(a&&n.length===a)break}}catch(e){o=true;i=e}finally{try{if(!r&&t["return"]!=null)t["return"]()}finally{if(o)throw i}}return n}function p(e){if(Array.isArray(e))return e}var g=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var h=function e(a){var t=a.loading,i=a.getDownloadsByDate,c=a.downloadsByDate;var u=Object(n["useState"])(Object(s["j"])()),v=d(u,2),m=v[0],f=v[1];var p=Object(n["useState"])(Object(s["l"])()),g=d(p,2),h=g[0],b=g[1];var y=Object(n["useState"])("monthly"),E=d(y,2),w=E[0],j=E[1];Object(n["useEffect"])(function(){i(true,m,h,w)},[]);console.log(c);var L={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Monthly Downloads",data:c,fill:false,tension:0,borderColor:"#006AB5"}]};return r.a.createElement(o["a"],{heading:"Downloads"},r.a.createElement("div",null,r.a.createElement(l["c"],{data:L})))};g(h,'useState{[startDate, setStartDate](getFirstDayOfTheYear())}\nuseState{[endDate, setEndDate](getLastDayOfTheYear())}\nuseState{[dateType, setDateType]("monthly")}\nuseEffect{}');var b=function e(a){return{getDownloadsByDate:function e(t,n,r,o){return a(Object(c["g"])(t,n,r,o))}}};var y=function e(a){return{downloadsByDate:a.users.downloadsByDate,loading:a.loading.loading}};var E=Object(i["b"])(y,b)(h);a["a"]=E;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(h,"DownloadsChart","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsChart.js");e.register(b,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsChart.js");e.register(y,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsChart.js");e.register(E,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsChart.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1665:function(e,a,t){"use strict";(function(e){var n=t(0);var r=t.n(n);var o=t(66);var l=t(34);var i=t(103);var c=t(80);var s=t(1666);var d=t(1667);var u=t.n(d);var v=t(40);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function m(e,a){return b(e)||h(e,a)||p(e,a)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,a){if(!e)return;if(typeof e==="string")return g(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,a)}function g(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,n=new Array(a);t<a;t++){n[t]=e[t]}return n}function h(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var n=[];var r=true;var o=false;var l,i;try{for(t=t.call(e);!(r=(l=t.next()).done);r=true){n.push(l.value);if(a&&n.length===a)break}}catch(e){o=true;i=e}finally{try{if(!r&&t["return"]!=null)t["return"]()}finally{if(o)throw i}}return n}function b(e){if(Array.isArray(e))return e}var y=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var E=function e(a){var t=a.getDownloadsByArea,l=a.downloadsByArea,c=a.loading;var s=Object(n["useState"])("downloads"),d=m(s,2),u=d[0],f=d[1];var p=Object(n["useState"])(""),g=m(p,2),h=g[0],b=g[1];Object(n["useEffect"])(function(){t(true)},[]);var y=[{area:"Area",number:0},{area:"Area",number:0},{area:"Area",number:0},{area:"Area",number:0},{area:"Area",number:0}];var E=function e(a){h===a?b(""):b(a)};return r.a.createElement(o["a"],{heading:"Statistics per area"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{id:"filter-dropdown",name:"fiter-dropdown",onChange:function e(a){return f(a.target.value)},className:"p-1 px-4"},r.a.createElement("option",{value:"downloads"},"Downloads"),r.a.createElement("option",{value:"requests"},"Requests"),r.a.createElement("option",{value:"today_schedules"},"Schedules"))),u==="downloads"&&r.a.createElement("div",null,!c&&l.length>0&&r.a.createElement("div",{className:"accordion ",id:"accordionExample"},r.a.createElement("div",{className:"card bg-secondary"},r.a.createElement("div",{className:"card-header",id:"headingOne"},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("div",{className:" d-flex justify-content-between text-white fw-bold "},r.a.createElement("small",null,"LGA"),r.a.createElement("small",null,"DOWNLOADS"))))),l.map(function(e){var a;return r.a.createElement("div",{className:"card",key:e._id},r.a.createElement("div",{className:"card-header",id:"headingOne",onClick:function a(){return E(e===null||e===void 0?void 0:e._id)}},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("div",{className:" d-flex justify-content-between"},r.a.createElement("small",null,Object(v["c"])(e===null||e===void 0?void 0:e.lga)),r.a.createElement("small",null,e===null||e===void 0?void 0:(a=e.riders_home_area_count)===null||a===void 0?void 0:a.toLocaleString())))),r.a.createElement("div",{id:"collapseOne",className:"collapse ".concat(h===e._id&&"show"),"aria-labelledby":"headingOne","data-parent":"#accordionExample"},r.a.createElement("div",{className:"card-body ",style:{padding:"2px 5px"}},r.a.createElement("ul",{className:"list-inline"},e.areas.map(function(e,a){var t;return r.a.createElement("li",{className:"text-right border-bottom m-0 ",style:{padding:"2px 5px",fontSize:13}},r.a.createElement("div",{className:"pull-left "},Object(v["c"])(e===null||e===void 0?void 0:e.area_name)),r.a.createElement("div",null," ",e===null||e===void 0?void 0:(t=e.riders_home_area_count)===null||t===void 0?void 0:t.toLocaleString()))})))))})),l.length<1&&r.a.createElement(i["a"],null)),u==="requests"&&r.a.createElement("div",null,!c&&l.length>0&&r.a.createElement("div",{className:"accordion ",id:"accordionExample"},r.a.createElement("div",{className:"card bg-secondary"},r.a.createElement("div",{className:"card-header",id:"headingOne"},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("div",{className:" d-flex justify-content-between text-white fw-bold "},r.a.createElement("small",null,"LGA"),r.a.createElement("small",null,"RIDE REQUESTS"))))),l.map(function(e){var a;return r.a.createElement("div",{className:"card",key:e._id},r.a.createElement("div",{className:"card-header",id:"headingOne",onClick:function a(){return E(e===null||e===void 0?void 0:e._id)}},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("div",{className:" d-flex justify-content-between"},r.a.createElement("small",null,Object(v["c"])(e===null||e===void 0?void 0:e.lga)),r.a.createElement("small",null,e===null||e===void 0?void 0:(a=e.ride_request)===null||a===void 0?void 0:a.toLocaleString())))),r.a.createElement("div",{id:"collapseOne",className:"collapse ".concat(h===e._id&&"show"),"aria-labelledby":"headingOne","data-parent":"#accordionExample"},r.a.createElement("div",{className:"card-body ",style:{padding:"2px 5px"}},r.a.createElement("ul",{className:"list-inline"},e.areas.map(function(e,a){var t;return r.a.createElement("li",{className:"text-right border-bottom m-0 ",style:{padding:"2px 5px",fontSize:13}},r.a.createElement("div",{className:"pull-left "},Object(v["c"])(e===null||e===void 0?void 0:e.area_name)),r.a.createElement("div",null," ",e===null||e===void 0?void 0:(t=e.ride_request)===null||t===void 0?void 0:t.toLocaleString()))})))))})),l.length<1&&r.a.createElement(i["a"],null)),u==="today_schedules"&&r.a.createElement("div",null,!c&&l.length>0&&r.a.createElement("div",{className:"accordion ",id:"accordionExample"},r.a.createElement("div",{className:"card bg-secondary"},r.a.createElement("div",{className:"card-header",id:"headingOne"},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("div",{className:" d-flex justify-content-between text-white fw-bold "},r.a.createElement("small",null,"LGA"),r.a.createElement("small",null,"TODAY'S SCHEDULES"))))),l.map(function(e){var a;return r.a.createElement("div",{className:"card",key:e._id},r.a.createElement("div",{className:"card-header",id:"headingOne",onClick:function a(){return E(e===null||e===void 0?void 0:e._id)}},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("div",{className:" d-flex justify-content-between"},r.a.createElement("small",null,Object(v["c"])(e===null||e===void 0?void 0:e.lga)),r.a.createElement("small",null,e===null||e===void 0?void 0:(a=e.today_schedule)===null||a===void 0?void 0:a.toLocaleString())))),r.a.createElement("div",{id:"collapseOne",className:"collapse ".concat(h===e._id&&"show"),"aria-labelledby":"headingOne","data-parent":"#accordionExample"},r.a.createElement("div",{className:"card-body ",style:{padding:"2px 5px"}},r.a.createElement("ul",{className:"list-inline"},e.areas.map(function(e,a){var t;return r.a.createElement("li",{className:"text-right border-bottom m-0 ",style:{padding:"2px 5px",fontSize:13}},r.a.createElement("div",{className:"pull-left "},Object(v["c"])(e===null||e===void 0?void 0:e.area_name)),r.a.createElement("div",null," ",e===null||e===void 0?void 0:(t=e.today_schedule)===null||t===void 0?void 0:t.toLocaleString()))})))))})),l.length<1&&r.a.createElement(i["a"],null)))};y(E,'useState{[infoType, setInfoType]("downloads")}\nuseState{[expandedLga, setExpandedLga]("")}\nuseEffect{}');var w=function e(a){return{getDownloadsByArea:function e(t){return a(Object(c["f"])(t))}}};var j=function e(a){return{downloadsByArea:a.users.downloadsByArea,loading:a.loading.loading}};var L=Object(l["b"])(j,w)(E);a["a"]=L;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(E,"DownloadsTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsTable.js");e.register(w,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsTable.js");e.register(j,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsTable.js");e.register(L,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/maps/component/downloadsTable.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))}}]);