(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{1326:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var o=a(223);var i=a(225);var c=a(18);var l=a(224);var s=a(116);var u=a(115);var d=a(166);var f=a(66);var p=a(1542);var m=a(1546);var v=a(20);var g=a(34);var h=a(1465);var b=a(104);var y=a.n(b);var A=a(103);var w=a(40);var S=a(67);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function x(e,t,a,r,n,o,i){try{var c=e[o](i);var l=c.value}catch(e){a(e);return}if(c.done){t(l)}else{Promise.resolve(l).then(r,n)}}function j(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){x(o,r,n,i,c,"next",e)}function c(e){x(o,r,n,i,c,"throw",e)}i(undefined)})}}function E(e,t){return H(e)||M(e,t)||P(e,t)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(e,t){if(!e)return;if(typeof e==="string")return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(e,t)}function k(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function M(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var i,c;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){o=true;c=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw c}}return r}function H(e){if(Array.isArray(e))return e}var C=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var G=a(229);var I=function e(t){var a=t.history,p=t.match,m=t.getFdt,g=t.fdt,h=t.loading,b=t.getFdtCount,x=t.fdtCount,O=t.exportFdt;var P=G.parse(a.location.search,{ignoreQueryPrefix:true}).page;var k=Object(r["useState"])(function(){return P===undefined?1:parseInt(P,10)}),M=E(k,2),H=M[0],C=M[1];var I=Object(r["useState"])(""),N=E(I,2),F=N[0],R=N[1];var X=Object(r["useState"])(""),L=E(X,2),D=L[0],B=L[1];var z=Object(r["useRef"])(null);Object(r["useEffect"])(function(){if(P===undefined||g.length<1){m(H,true);b()}},[]);var K=function(){var e=j(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:a.push("".concat(a.location.pathname,"?page=").concat(t));r.next=3;return C(t);case 3:r.next=5;return window.scrollTo(0,0);case 5:m(t);case 6:case"end":return r.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();var V=function e(){m(1,false,F,D);b(F,D)};var q=function e(){z.current.open()};var J=function e(){z.current.close();O(F,D)};return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(d["a"],{title:"FDTs",match:p}),n.a.createElement(f["a"],{heading:"Fdt",fullBlock:true,style:{minHeight:"70vh"}},n.a.createElement("div",{className:"ml-2"},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:F,min:"2018-01-01",max:Object(w["x"])(),onChange:function e(t){R(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:D,min:"2018-01-01",max:Object(w["x"])(),onChange:function e(t){B(t.target.value)}})),n.a.createElement(u["a"],{onClick:function e(){return V()},style:{height:"30px"},className:"align-items-center justify-content-center",color:"success"},"Apply filter"),n.a.createElement("div",{className:"float-right"},n.a.createElement(u["a"],{onClick:function e(){return q()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"}),"  Export to Excel"))),g.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},!h&&n.a.createElement(o["a"],null,n.a.createElement(l["a"],null,n.a.createElement(s["a"],{hover:true},n.a.createElement(c["a"],null,"First Name"),n.a.createElement(c["a"],null,"Last Name"),n.a.createElement(c["a"],null,"Action"))),n.a.createElement(i["a"],null,n.a.createElement(r["Fragment"],null,g.length>0&&g.map(function(e,t){var a,r;return n.a.createElement(s["a"],{hover:true,key:t},n.a.createElement(c["a"],null,(a=e.users)===null||a===void 0?void 0:a.first_name),n.a.createElement(c["a"],null,(r=e.users)===null||r===void 0?void 0:r.last_name),n.a.createElement(c["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary"},n.a.createElement(v["b"],{to:"/admin/fdt/".concat(e.auth_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(y.a,{activePage:H,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:x,onChange:K}))),(g===null||g===void 0?void 0:g.length)<1&&n.a.createElement(A["a"],null)),n.a.createElement(S["a"],{ref:z,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:J}))};C(I,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseState{[startDate, setStartDate]('')}\nuseState{[endDate, setEndDate]('')}\nuseRef{exportRef}\nuseEffect{}");function N(e){return{getFdt:function t(a,r,n,o){return e(Object(h["c"])(a,r,n,o))},getFdtCount:function t(a,r){return e(Object(h["d"])(a,r))},exportFdt:function t(a,r){return e(Object(h["a"])(a,r))}}}var F=function e(t){return{fdt:t.fdt.fdt,fdtCount:t.fdt.fdtCount,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var R=Object(g["b"])(F,N)(I);t["default"]=R;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(I,"Fdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/fdt.js");e.register(N,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/fdt.js");e.register(F,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/fdt.js");e.register(R,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/fdt.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1465:function(e,t,a){"use strict";(function(e){a.d(t,"c",function(){return p});a.d(t,"e",function(){return m});a.d(t,"d",function(){return v});a.d(t,"a",function(){return g});a.d(t,"b",function(){return h});a.d(t,"f",function(){return b});a.d(t,"h",function(){return y});a.d(t,"g",function(){return A});var r=a(15);var n=a.n(r);var o=a(3);var i=a(4);var c=a(5);var l=a.n(c);var s=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t,a,r,n,o,i){try{var c=e[o](i);var l=c.value}catch(e){a(e);return}if(c.done){t(l)}else{Promise.resolve(l).then(r,n)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){u(o,r,n,i,c,"next",e)}function c(e){u(o,r,n,i,c,"throw",e)}i(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var l=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=d(regeneratorRuntime.mark(function e(u){var d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:f.prev=0;a&&u(Object(i["c"])());!a&&u(Object(i["d"])());f.next=5;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group&item_per_page=20&page=").concat(t,"&start_date=").concat(r,"&end_date=").concat(l));case 5:d=f.sent;if(d.data.status==="error"){c["NotificationManager"].error(d.data.msg)}else{u({type:o["H"],payload:d.data.data})}u(Object(i["a"])());u(Object(i["b"])());f.next=16;break;case 11:f.prev=11;f.t0=f["catch"](0);u(Object(i["b"])());u(Object(i["a"])());c["NotificationManager"].error(f.t0.response.data.result);case 16:case"end":return f.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;a(Object(i["c"])());l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group&auth_id=").concat(t));case 4:r=l.sent;if(r.data.status==="error"){c["NotificationManager"].error(r.data.msg)}else{a({type:o["J"],payload:r.data.data.length>0?r.data.data[0]:{}})}a(Object(i["a"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](0);a(Object(i["a"])());c["NotificationManager"].error(l.t0.response.data.result);case 13:case"end":return l.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=group-count&start_date=").concat(t,"&end_date=").concat(a));case 3:i=l.sent;if(i.data.status==="error"){c["NotificationManager"].error(i.data.msg)}else{r({type:o["I"],payload:i.data.data.total?i.data.data.total:0})}l.next=10;break;case 7:l.prev=7;l.t0=l["catch"](0);c["NotificationManager"].error(l.t0.response.data.result);case 10:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:r(Object(i["d"])());l.prev=1;l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=fdt&component=export&start_date=").concat(t,"&end_date=").concat(a));case 4:o=l.sent;if(o.data.status==="error"){c["NotificationManager"].error(o.data.msg)}else{c["NotificationManager"].success("Excel file sent to your email successfully")}r(Object(i["b"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](1);c["NotificationManager"].error(l.t0.response.data.result);r(Object(i["b"])());case 13:case"end":return l.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:r(Object(i["d"])());l.prev=1;l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=export&start_date=").concat(t,"&end_date=").concat(a));case 4:o=l.sent;if(o.data.status==="error"){c["NotificationManager"].error(o.data.msg)}else{c["NotificationManager"].success("Excel file sent to your email successfully")}r(Object(i["b"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](1);c["NotificationManager"].error(l.t0.response.data.result);r(Object(i["b"])());case 13:case"end":return l.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var l=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";return function(){var e=d(regeneratorRuntime.mark(function e(u){var d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:f.prev=0;a&&u(Object(i["c"])());!a&&u(Object(i["d"])());f.next=5;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=group&item_per_page=20&page=").concat(t,"&start_date=").concat(r,"&end_date=").concat(l));case 5:d=f.sent;if(d.data.status==="error"){c["NotificationManager"].error(d.data.msg)}else{u({type:o["Ub"],payload:d.data.data})}u(Object(i["a"])());u(Object(i["b"])());f.next=16;break;case 11:f.prev=11;f.t0=f["catch"](0);u(Object(i["b"])());u(Object(i["a"])());c["NotificationManager"].error(f.t0.response.data.result);case 16:case"end":return f.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;a(Object(i["c"])());l.next=4;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&auth_id=").concat(t));case 4:r=l.sent;if(r.data.status==="error"){c["NotificationManager"].error(r.data.msg)}else{a({type:o["Wb"],payload:r.data.data.length>0?r.data.data[0]:{}})}a(Object(i["a"])());l.next=13;break;case 9:l.prev=9;l.t0=l["catch"](0);a(Object(i["a"])());c["NotificationManager"].error(l.t0.response.data.result);case 13:case"end":return l.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var A=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(){var e=d(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(s["a"].fdt,"/v1.1/fdts?ride_type=schedule&component=count&start_date=").concat(t,"&end_date=").concat(a));case 3:i=l.sent;if(i.data.status==="error"){c["NotificationManager"].error(i.data.msg)}else{r({type:o["Vb"],payload:i.data.data.total?i.data.data.total:0})}l.next=10;break;case 7:l.prev=7;l.t0=l["catch"](0);c["NotificationManager"].error(l.t0.response.data.result);case 10:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"getFdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(m,"getFdtDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(v,"getFdtCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(g,"exportFdt","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(h,"exportSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(b,"getSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(y,"getScheduleDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js");e.register(A,"getScheduleCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/fdtActions.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1542:function(e,t,a){"use strict";(function(e){var t=a(0);var r=a.n(t);var n=a(1539);var o=a(66);var i=a(5);var c=a.n(i);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t){return p(e)||f(e,t)||u(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(!e)return;if(typeof e==="string")return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}function d(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function f(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var i,c;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){o=true;c=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw c}}return r}function p(e){if(Array.isArray(e))return e}var m=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function e(c){var s=c.match;var u=Object(t["useState"])([6.459970538,3.301247232]),d=l(u,2),f=d[0],p=d[1];var m=Object(t["useState"])(""),v=l(m,2),g=v[0],h=v[1];var b=Object(t["useState"])(14),y=l(b,2),A=y[0],w=y[1];var S=Object(t["useState"])([]),x=l(S,2),j=x[0],E=x[1];var O=function e(t){var n=t.text,o=t.cord;return r.a.createElement("div",null,r.a.createElement("div",{className:"tooltipo"},r.a.createElement("img",{src:a(1545),className:"img-fluid rounded-circle",width:"46",height:"46"}),r.a.createElement("div",{className:"tooltiptexto"},r.a.createElement("div",null,"Driver name: ",o.name),r.a.createElement("div",null,"Plate No: ",o.plate_no))))};var P=[{lat:6.45878949,lng:3.278338958,name:"Tope Chi",plate_no:"ASCFR890"},{lat:6.459554831,lng:3.284814647,name:"Sunday Jim",plate_no:"ANMCFR894"},{lat:6.459970538,lng:3.301247232,name:"Jaye Mark",plate_no:"APMCFR838"},{lat:6.460063551,lng:3.312027333,name:"Tim Deo",plate_no:"AMKFR892"}];Object(t["useEffect"])(function(){var e=[];P.map(function(t){e.push({name:t.plate_no,value:t.plate_no})});E(e)},[]);var k={panControl:false,mapTypeControl:false};var M=function e(t){var a=t.x,r=t.y,n=t.lat,o=t.lng,i=t.event;return console.log(i)};var H=function e(t){h(t)};var C=function e(){if(g){P.map(function(e){if(e.plate_no.toLowerCase()===g.toLocaleLowerCase()){p([e.lat,e.lng])}})}else{i["NotificationManager"].error("Enter plate No")}};return r.a.createElement("div",{className:"map-wrapper"},r.a.createElement(o["a"],{heading:"Distribution"},r.a.createElement(n["a"],{bootstrapURLKeys:{key:"AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0"},yesIWantToUseGoogleMapApiInternals:true,center:f,zoom:A,style:{position:"relative",width:"100%",height:300},options:k,hoverDistance:40/2,onClick:M},P.map(function(e,t){return r.a.createElement(O,{lat:e.lat,lng:e.lng,key:t,text:e.plate_no,cord:e})}))))};m(v,"useState{[center, setCenter]([6.459970538, 3.301247232])}\nuseState{[search, setSearch]('')}\nuseState{[zoom, setZoom](14)}\nuseState{[options, setOptions]([])}\nuseEffect{}");var g=v;var h=g;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"GoogleMapComponentSchedule","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/components/Maps/GoogleMapComponentSchedule.js");e.register(g,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/components/Maps/GoogleMapComponentSchedule.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1545:function(e,t){e.exports="data:image/png;base64,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"},1546:function(e,t,a){"use strict";(function(e){var t=a(0);var r=a.n(t);var n=a(372);var o=a(171);var i=a(1465);var c=a(34);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var l=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var s=function e(t){var a=t.schedule;var i=a.filter(function(e){return e.fdtStatus==1}).length;var c=a.filter(function(e){return e.fdtStatus==0}).length;var l=a.filter(function(e){return e.fdtStatus==2}).length;console.log(i,"llllll");var s={labels:["Successful Schedule","Pending Schedule","Failed Scheduled"],datasets:[{data:[i,c,l],backgroundColor:[o["a"].color.success,o["a"].color.warning,o["a"].color.danger]}]};var u={legend:{display:false,labels:{fontColor:o["a"].legendFontColor}},cutoutPercentage:80};return r.a.createElement(n["b"],{data:s,options:u,height:100})};function u(e){return{getSchedule:function t(){return e(Object(i["f"])())}}}var d=function e(t){return{schedule:t.fdt.fdt,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var f=Object(c["b"])(d,u)(s);var p=f;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(s,"ComponentChart","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/component/chart.js");e.register(u,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/component/chart.js");e.register(d,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/component/chart.js");e.register(f,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/fdt/component/chart.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);