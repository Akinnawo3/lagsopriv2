(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{1310:function(e,a,t){"use strict";t.r(a);(function(e){var r=t(0);var n=t.n(r);var o=t(223);var l=t(225);var i=t(18);var u=t(224);var c=t(116);var s=t(166);var d=t(67);var f=t(62);var v=t(32);var m=t(29);var b=t(23);var p=t(43);var g=t(104);var h=t.n(g);var y=t(52);var A=t(51);var O=t(54);var k=t(130);var j=t(64);var E=t(34);var w=t(370);var x=t(1569);var I=t(1506);var N=t(103);var L=t(203);var P=t.n(L);var S=t(118);var M=t(63);var C=t(1570);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function G(e,a,t,r,n,o,l){try{var i=e[o](l);var u=i.value}catch(e){t(e);return}if(i.done){a(u)}else{Promise.resolve(u).then(r,n)}}function H(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var o=e.apply(a,t);function l(e){G(o,r,n,l,i,"next",e)}function i(e){G(o,r,n,l,i,"throw",e)}l(undefined)})}}function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(a){r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})}t.push.apply(t,r)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};if(a%2){_(Object(t),true).forEach(function(a){R(e,a,t[a])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}else{_(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}}return e}function R(e,a,t){if(a in e){Object.defineProperty(e,a,{value:t,enumerable:true,configurable:true,writable:true})}else{e[a]=t}return e}function X(e,a){return z(e)||q(e,a)||B(e,a)||U()}function U(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e,a){if(!e)return;if(typeof e==="string")return T(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,a)}function T(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,r=new Array(a);t<a;t++){r[t]=e[t]}return r}function q(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var r=[];var n=true;var o=false;var l,i;try{for(t=t.call(e);!(n=(l=t.next()).done);n=true){r.push(l.value);if(a&&r.length===a)break}}catch(e){o=true;i=e}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(o)throw i}}return r}function z(e){if(Array.isArray(e))return e}var W=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var K=function e(a){var t=a.match,g=a.getAreas,E=a.areas,w=a.createArea,I=a.updateArea,P=a.loading,G=a.deleteArea,_=a.getAreaCount,U=a.areaCount,B=a.searchArea;var T=Object(r["useState"])(false),q=X(T,2),z=q[0],W=q[1];var K=Object(r["useState"])(false),Y=X(K,2),F=Y[0],V=Y[1];var J=Object(r["useState"])(null),$=X(J,2),Q=$[0],Z=$[1];var ee=Object(r["useState"])(null),ae=X(ee,2),te=ae[0],re=ae[1];var ne=Object(r["useState"])({lga:"",areaName:"",lon:"",lat:"",oldArea:""}),oe=X(ne,2),le=oe[0],ie=oe[1];var ue=Object(r["useRef"])(null);var ce=Object(r["useState"])(1),se=X(ce,2),de=se[0],fe=se[1];var ve=Object(r["useState"])([]),me=X(ve,2),be=me[0],pe=me[1];var ge=Object(r["useState"])(false),he=X(ge,2),ye=he[0],Ae=he[1];Object(r["useEffect"])(function(){g(1,true);_()},[]);var Oe=function e(a){fe(a);g(a);window.scrollTo(0,0)};var ke=function e(a){return ie(D(D({},le),{},R({},a.target.name,a.target.value)))};var je=le.lga,Ee=le.areaName,we=le.lat,xe=le.lon,Ie=le.oldArea;var Ne=function e(a){a.preventDefault();W(true)};var Le=function e(a){a.preventDefault();Ae(true)};var Pe=function e(){Ae(false)};var Se=function e(a){E.map(function(e){if(e.area_id===a){var t,r,n,o;ie({lga:e===null||e===void 0?void 0:e.lga,areaName:e===null||e===void 0?void 0:e.area_name,lon:e!==null&&e!==void 0&&(t=e.location)!==null&&t!==void 0&&t.coordinates?e===null||e===void 0?void 0:(r=e.location)===null||r===void 0?void 0:r.coordinates[0]:"",lat:e!==null&&e!==void 0&&(n=e.location)!==null&&n!==void 0&&n.coordinates?e===null||e===void 0?void 0:(o=e.location)===null||o===void 0?void 0:o.coordinates[1]:"",oldArea:e.area_name});Z(e.area_id)}});W(true);V(true)};var Me=function e(){ie({lga:"",areaName:"",lat:"",lon:""});Z(null);W(false);V(false)};var Ce=function e(a){ue.current.open();re(a)};var Ge=function(){var e=H(regeneratorRuntime.mark(function e(a){return regeneratorRuntime.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:a.preventDefault();Me();if(F){t.next=7;break}t.next=5;return w(Ee,je,we.toString(),xe.toString());case 5:t.next=9;break;case 7:t.next=9;return I(Q,Ee,je,we.toString(),xe.toString(),Ie);case 9:case"end":return t.stop()}}},e)}));return function a(t){return e.apply(this,arguments)}}();Object(r["useEffect"])(function(){if(E){var e=E.map(function(e){return{areaName:e===null||e===void 0?void 0:e.area_name,lga:e===null||e===void 0?void 0:e.lga}});pe(e)}},[E]);var He=[{area_name:"Lekki Phase 1",lga:"oti-osa",lon:3.374413,lat:6.518576},{area_name:"Lekki Phase 5",lga:"oti-osa",lon:3.372213,lat:6.218576},{area_name:"Lekki Phase 3",lga:"oti-osa",lon:3.37432,lat:6.518576},{area_name:"Lekki Phase 4",lga:"oti-osa",lon:3.372213,lat:6.218576}];var _e=function e(){g(de)};var De=function e(a){B(a)};var Re=function e(){_()};return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(s["a"],{title:"Areas",match:t}),!P&&n.a.createElement(d["a"],{heading:"Areas",fullBlock:true,item:E,currentPage:de,totalCount:U},n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("div",{className:"search-wrapper"},n.a.createElement(S["a"],{getPreviousData:_e,getSearchedData:De,setCurrentPage:fe,getCount:Re,placeHolder:"Area name"}))),n.a.createElement("div",{className:"float-right"},n.a.createElement(L["CSVLink"],{data:He,filename:"sampleAreas.csv",className:"btn-sm btn-outline-default mr-10 bg-success text-white",target:"_blank"},n.a.createElement("i",{className:"zmdi zmdi-download mr-2"}),"Sample excel to upload"),n.a.createElement("a",{href:"#",onClick:function e(a){return Le(a)},color:"primary",className:"btn-sm btn-outline-default mr-10 bg-danger text-white"},n.a.createElement("i",{className:"zmdi zmdi-upload mr-2"}),"Upload"),n.a.createElement("a",{href:"#",onClick:function e(a){return Object(M["b"])("create_setup",function(){return Ne(a)})},color:"primary",className:"caret btn-sm mr-10"},n.a.createElement("button",{className:"ml-2 btn btn-outline-primary btn-sm rounded"},"Add New"))),E.length>0&&n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(o["a"],null,n.a.createElement(u["a"],null,n.a.createElement(c["a"],{hover:true},n.a.createElement(i["a"],null,"Area Name"),n.a.createElement(i["a"],null,"LGA"),n.a.createElement(i["a"],null,"Coordinate "),n.a.createElement(i["a"],null,"Actions"))),n.a.createElement(l["a"],null,n.a.createElement(r["Fragment"],null,E.map(function(e,a){var t,r,o;return n.a.createElement(c["a"],{hover:true,key:a},n.a.createElement(i["a"],null,e.area_name),n.a.createElement(i["a"],null,e.lga),n.a.createElement(i["a"],null,(e===null||e===void 0?void 0:(t=e.location)===null||t===void 0?void 0:t.coordinates)&&"Lon:".concat(e===null||e===void 0?void 0:(r=e.location)===null||r===void 0?void 0:r.coordinates[0]," - Lat:").concat(e===null||e===void 0?void 0:(o=e.location)===null||o===void 0?void 0:o.coordinates[1])),n.a.createElement(i["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn",onClick:function a(t){return Se(e.area_id)}},n.a.createElement("i",{className:"ti-pencil"})),n.a.createElement("button",{type:"button",className:"rct-link-btn ml-lg-3 text-danger",onClick:function a(){return Ce(e.area_id)}},n.a.createElement("i",{className:"ti-trash"}))))}))))),E.length<1&&n.a.createElement(N["a"],null),!P&&E.length>0&&n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(h.a,{activePage:de,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:U,onChange:Oe}))),"//"," "),n.a.createElement(y["a"],{isOpen:z,toggle:function e(){return Me()},size:"sm"},n.a.createElement(A["a"],{toggle:function e(){return Me()}},F?"Update Area":"Create New Area"),n.a.createElement(f["a"],{onSubmit:Ge},n.a.createElement(O["a"],null,n.a.createElement(v["a"],null,n.a.createElement(m["a"],null,"Area Name"),n.a.createElement(b["a"],{type:"text",name:"areaName",value:Ee,onChange:ke,required:true})),n.a.createElement(v["a"],null,n.a.createElement(m["a"],null,"LGA"),n.a.createElement(b["a"],{type:"select",name:"lga",value:je,onChange:ke,required:true},n.a.createElement("option",{value:"",hidden:true},"--Select LGA --"),C["a"].map(function(e){return n.a.createElement("option",{value:e.value.toLowerCase()},e.label)}))),n.a.createElement("div",{className:"d-flex "},n.a.createElement(v["a"],{className:"mr-2"},n.a.createElement(m["a"],null,"LON"),n.a.createElement(b["a"],{type:"number",name:"lon",step:"any",value:xe,onChange:ke,required:true})),n.a.createElement(v["a"],{className:"ml-2"},n.a.createElement(m["a"],null,"LAT"),n.a.createElement(b["a"],{type:"number",min:-90,max:90,step:"any",name:"lat",value:we,onChange:ke,required:true})))),n.a.createElement(k["a"],null,n.a.createElement(p["a"],{type:"submit",variant:"contained",className:"text-white btn-info mr-2"},"Add"),n.a.createElement(p["a"],{variant:"contained",className:"btn btn-outline-danger",onClick:function e(){return Me()}},"Cancel")))),n.a.createElement(y["a"],{isOpen:ye,toggle:function e(){return Pe()}},n.a.createElement(A["a"],{toggle:function e(){return Pe()}},"Upload Area"),n.a.createElement(O["a"],null,n.a.createElement(x["a"],{oncloseModal:Pe}))),n.a.createElement(j["a"],{ref:ue,title:"Are You Sure You Want To Delete?",message:"This will delete area permanently.",onConfirm:function e(){G(te,E);ue.current.close()}}))};W(K,'useState{[addNewAreaModal, setAddNewAreaModal](false)}\nuseState{[editArea, setEditArea](false)}\nuseState{[updateId, setUpdateId](null)}\nuseState{[deleteId, setDeleteId](null)}\nuseState{[formData, setFormData]({lga: "", areaName: "", lon: "", lat: "", oldArea: ""})}\nuseRef{inputEl}\nuseState{[currentPage, setCurrentPage](1)}\nuseState{[excelExport, setExcelExport]([])}\nuseState{[addNewAreaModal1, setAddNewAreaModal1](false)}\nuseEffect{}\nuseEffect{}');function Y(e){return{getAreas:function a(t,r){return e(Object(I["c"])(t,r))},getAreaCount:function a(){return e(Object(I["d"])())},createArea:function a(t,r,n,o){return e(Object(I["a"])(t,r,n,o))},searchArea:function a(t){return e(Object(I["e"])(t))},updateArea:function a(t,r,n,o,l,i){return e(Object(I["f"])(t,r,n,o,l,i))},deleteArea:function a(t,r){return e(Object(I["b"])(t,r))}}}var F=function e(a){return{areas:a.areas.areas,areaCount:a.areas.areaCount,loading:a.loading.loading}};var V=Object(E["b"])(F,Y)(K);a["default"]=V;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(K,"Areas","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/areas.js");e.register(Y,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/areas.js");e.register(F,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/areas.js");e.register(V,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/areas.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1506:function(e,a,t){"use strict";(function(e){t.d(a,"a",function(){return v});t.d(a,"c",function(){return m});t.d(a,"d",function(){return b});t.d(a,"e",function(){return p});t.d(a,"f",function(){return g});t.d(a,"b",function(){return h});var r=t(15);var n=t.n(r);var o=t(4);var l=t(3);var i=t(5);var u=t.n(i);var c=t(16);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function s(e,a,t,r,n,o,l){try{var i=e[o](l);var u=i.value}catch(e){t(e);return}if(i.done){a(u)}else{Promise.resolve(u).then(r,n)}}function d(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var o=e.apply(a,t);function l(e){s(o,r,n,l,i,"next",e)}function i(e){s(o,r,n,l,i,"throw",e)}l(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function e(a,t,r,l){return function(){var e=d(regeneratorRuntime.mark(function e(u){var s,d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:s={area_name:a,lga:t,lat:r,lon:l};f.prev=1;u(Object(o["d"])());f.next=5;return n.a.post("".concat(c["a"].area,"/v1.1/areas"),s);case 5:d=f.sent;if(!(d.data.status==="error")){f.next=10;break}i["NotificationManager"].error(d.data.msg);f.next=14;break;case 10:f.next=12;return i["NotificationManager"].success("Area Created Successfully!");case 12:f.next=14;return u(m());case 14:u(Object(o["b"])());f.next=21;break;case 17:f.prev=17;f.t0=f["catch"](1);u(Object(o["b"])());i["NotificationManager"].error(f.t0.response.data.result);case 21:case"end":return f.stop()}}},e,null,[[1,17]])}));return function(a){return e.apply(this,arguments)}}()};var m=function e(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var t=arguments.length>1?arguments[1]:undefined;return function(){var e=d(regeneratorRuntime.mark(function e(r){var u;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;s.t0=t;if(!s.t0){s.next=5;break}s.next=5;return r(Object(o["c"])());case 5:!t&&r(Object(o["d"])());s.next=8;return n.a.get("".concat(c["a"].area,"/v1.1/areas?page=").concat(a,"&item_per_page=20"));case 8:u=s.sent;if(u.data.status==="error"){i["NotificationManager"].error(u.data.msg)}else{r({type:l["g"],payload:u.data.data})}r(Object(o["a"])());r(Object(o["b"])());s.next=19;break;case 14:s.prev=14;s.t1=s["catch"](0);r(Object(o["a"])());r(Object(o["b"])());i["NotificationManager"].error(s.t1.response.data.error);case 19:case"end":return s.stop()}}},e,null,[[0,14]])}));return function(a){return e.apply(this,arguments)}}()};var b=function e(){return function(){var e=d(regeneratorRuntime.mark(function e(a){var t,r,o;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;u.next=3;return n.a.get("".concat(c["a"].area,"/v1.1/areas?component=count"));case 3:t=u.sent;if(t.data.status==="error"){i["NotificationManager"].error(t.data.msg)}else{a({type:l["h"],payload:(r=t.data)===null||r===void 0?void 0:(o=r.data)===null||o===void 0?void 0:o.total})}u.next=9;break;case 7:u.prev=7;u.t0=u["catch"](0);case 9:case"end":return u.stop()}}},e,null,[[0,7]])}));return function(a){return e.apply(this,arguments)}}()};var p=function e(a){return function(){var e=d(regeneratorRuntime.mark(function e(t){var r,u;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;t(Object(o["d"])());s.next=4;return n.a.get("".concat(c["a"].area,"/v1.1/areas?q=").concat(a));case 4:r=s.sent;if(!(r.data.status==="error")){s.next=9;break}i["NotificationManager"].error(r.data.msg);s.next=14;break;case 9:s.next=11;return n.a.get("".concat(c["a"].area,"/v1.1/areas?q=").concat(a,"&component=count"));case 11:u=s.sent;t({type:l["g"],payload:r.data.data});t({type:l["h"],payload:u.data.data.total?u.data.data.total:0});case 14:t(Object(o["b"])());s.next=20;break;case 17:s.prev=17;s.t0=s["catch"](0);t(Object(o["b"])());case 20:case"end":return s.stop()}}},e,null,[[0,17]])}));return function(a){return e.apply(this,arguments)}}()};var g=function e(a,t,r,l,u,s){return function(){var e=d(regeneratorRuntime.mark(function e(d){var f,v;return regeneratorRuntime.wrap(function e(b){while(1){switch(b.prev=b.next){case 0:f={area_name:t,lga:r,lat:l,lon:u,old_area:s};b.prev=1;d(Object(o["d"])());b.next=5;return n.a.put("".concat(c["a"].area,"/v1.1/areas/").concat(a),f);case 5:v=b.sent;if(!(v.data.status==="error")){b.next=10;break}i["NotificationManager"].error(v.data.msg);b.next=14;break;case 10:b.next=12;return i["NotificationManager"].success("Area Updated Successfully!");case 12:b.next=14;return d(m());case 14:d(Object(o["b"])());b.next=21;break;case 17:b.prev=17;b.t0=b["catch"](1);d(Object(o["b"])());i["NotificationManager"].error(b.t0.response.data.message);case 21:case"end":return b.stop()}}},e,null,[[1,17]])}));return function(a){return e.apply(this,arguments)}}()};var h=function e(a,t){return function(){var e=d(regeneratorRuntime.mark(function e(r){var u,s;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;r(Object(o["d"])());d.next=4;return n.a.delete("".concat(c["a"].area,"/v1.1/areas/").concat(a));case 4:u=d.sent;if(!(u.data.status==="error")){d.next=9;break}i["NotificationManager"].error(u.data.msg);d.next=14;break;case 9:d.next=11;return i["NotificationManager"].success("Area deleted Successfully!");case 11:s=t.filter(function(e){return e.area_id!==a});r({type:l["g"],payload:s});r(b());case 14:r(Object(o["b"])());d.next=21;break;case 17:d.prev=17;d.t0=d["catch"](0);r(Object(o["b"])());i["NotificationManager"].error(d.t0.response.data.message);case 21:case"end":return d.stop()}}},e,null,[[0,17]])}));return function(a){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"createArea","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/areaAction.js");e.register(m,"getAreas","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/areaAction.js");e.register(b,"getAreasCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/areaAction.js");e.register(p,"searchAreas","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/areaAction.js");e.register(g,"updateArea","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/areaAction.js");e.register(h,"deleteArea","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/areaAction.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1569:function(e,a,t){"use strict";(function(e){var r=t(0);var n=t.n(r);var o=t(143);var l=t(15);var i=t.n(l);var u=t(34);var c=t(5);var s=t.n(c);var d=t(1506);var f=t(16);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function v(e,a,t,r,n,o,l){try{var i=e[o](l);var u=i.value}catch(e){t(e);return}if(i.done){a(u)}else{Promise.resolve(u).then(r,n)}}function m(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var o=e.apply(a,t);function l(e){v(o,r,n,l,i,"next",e)}function i(e){v(o,r,n,l,i,"throw",e)}l(undefined)})}}function b(e,a){return A(e)||y(e,a)||g(e,a)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,a){if(!e)return;if(typeof e==="string")return h(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,a)}function h(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,r=new Array(a);t<a;t++){r[t]=e[t]}return r}function y(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var r=[];var n=true;var o=false;var l,i;try{for(t=t.call(e);!(n=(l=t.next()).done);n=true){r.push(l.value);if(a&&r.length===a)break}}catch(e){o=true;i=e}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(o)throw i}}return r}function A(e){if(Array.isArray(e))return e}var O=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var k=function e(a){var t=a.getAreas,l=a.oncloseModal,u=a.getAreaCount;var s=Object(r["useState"])(undefined),d=b(s,2),v=d[0],p=d[1];var g=Object(r["useState"])({}),h=b(g,2),y=h[0],A=h[1];var O=Object(r["useState"])(false),k=b(O,2),j=k[0],E=k[1];var w=function e(a){var t=a.target.files[0];Object(o["c"])(t).then(function(e){return p(e)}).catch(function(e){return console.error(e)})};var x=function(){var e=m(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:a=Object(o["b"])(y);r.prev=1;E(true);r.next=5;return Promise.all(a.map(function(e){return i.a.post("".concat(f["a"].area,"/v1.1/areas"),e)}));case 5:E(false);r.next=8;return l();case 8:r.next=10;return t(1,true);case 10:r.next=12;return u();case 12:c["NotificationManager"].success("Uploaded Successfully");r.next=19;break;case 15:r.prev=15;r.t0=r["catch"](1);E(false);c["NotificationManager"].error(r.t0.message);case 19:case"end":return r.stop()}}},e,null,[[1,15]])}));return function a(){return e.apply(this,arguments)}}();return n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},n.a.createElement("input",{type:"file",accept:".xlsx, .csv",onChange:w})),n.a.createElement("div",{className:"d-none"},n.a.createElement(o["a"],{initialData:v,onSheetUpdate:function e(a){return A(a)},activeSheetClassName:"active-sheet",reactExcelClassName:"react-excel"})),n.a.createElement("div",{className:"py-4"},v&&n.a.createElement("button",{disabled:j,className:"btn btn-primary float-right",onClick:x},!j?"Upload":"Loading...")))};O(k,"useState{[initialData, setInitialData](undefined)}\nuseState{[currentSheet, setCurrentSheet]({})}\nuseState{[loading, setLoading](false)}");function j(e){return{getAreas:function a(t,r){return e(Object(d["c"])(t,r))},getAreaCount:function a(){return e(Object(d["d"])())}}}var E=Object(u["b"])(null,j)(k);a["a"]=E;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(k,"Upload","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/components/upload.js");e.register(j,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/components/upload.js");e.register(E,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/components/upload.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1570:function(e,a,t){"use strict";(function(e){t.d(a,"a",function(){return n});(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();var r=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var n=[{label:"Agbado/Oke-Odo",value:"Agbado/Oke-Odo"},{label:"Agboyi/Ketu",value:"Agboyi/Ketu"},{label:"Agege",value:"Agege"},{label:"Ajeromi Ifelodun",value:"Ajeromi Ifelodun"},{label:"Alimosho",value:"Alimosho"},{label:"Amuwo Odofin",value:"Amuwo Odofin"},{label:"Apapa",value:"Apapa"},{label:"Apapa Iganmu",value:"Apapa Iganmu"},{label:"Ayobo-Ipaja",value:"Ayobo-Ipaja"},{label:"Badagry",value:"Badagry"},{label:"Badagry West",value:"Badagry West"},{label:"Bariga",value:"Bariga"},{label:"Coker/Aguda",value:"Coker/Aguda"},{label:"Egbe/Idimu",value:"Egbe/Idimu"},{label:"Ejigbo",value:"Ejigbo"},{label:"Epe",value:"Epe"},{label:"Eredo",value:"Eredo"},{label:"Eti-Osa",value:"Eti-Osa"},{label:"Eti-Osa East",value:"Eti-Osa East"},{label:"Iba",value:"Iba"},{label:"Ibeju/Lekki",value:"Ibeju/Lekki"},{label:"Ifako/Ijaiye",value:"Ifako/Ijaiye"},{label:"Ifelodun",value:"Ifelodun"},{label:"Igando/Ikotun",value:"Igando/Ikotun"},{label:"Igbogbo/Bayeku",value:"Igbogbo/Bayeku"},{label:"Ijede",value:"Ijede"},{label:"Ikeja",value:"Ikeja"},{label:"Ikorodu",value:"Ikorodu"},{label:"Ikorodu-North",value:"Ikorodu-North"},{label:"Ikorodu West",value:"Ikorodu West"},{label:"Ikosi Ejinrin",value:"Ikosi Ejinrin"},{label:"Ikosi/Isheri",value:"Ikosi/Isheri"},{label:"Ikoyi Obalende",value:"Ikoyi Obalende"},{label:"Imota",value:"Imota"},{label:"Iru-Victoria Island",value:"Iru-Victoria Island"},{label:"Isolo",value:"Isolo"},{label:"Itire/Ikate",value:"Itire/Ikate"},{label:"Kosofe",value:"Kosofe"},{label:"Lagos Island",value:"Lagos Island"},{label:"Lagos Island East",value:"Lagos Island East"},{label:"Lagos Mainland",value:"Lagos Mainland"},{label:"Lekki",value:"Lekki"},{label:"Mosan/Okunnola",value:"Mosan/Okunnola"},{label:"Mushin",value:"Mushin"},{label:"Odi-Olowo/Ojuwoye",value:"Odi-Olowo/Ojuwoye"},{label:"Ojo",value:"Ojo"},{label:"Ojodu",value:"Ojodu"},{label:"Ojokoro",value:"Ojokoro"},{label:"Olorunda",value:"Olorunda"},{label:"Onigbongbo",value:"Onigbongbo"},{label:"Oriade",value:"Oriade"},{label:"Orile/Agege",value:"Orile/Agege"},{label:"Oshodi-Isolo",value:"Oshodi-Isolo"},{label:"Oto/Awori",value:"Oto/Awori"},{label:"Shomolu",value:"Shomolu"},{label:"Surulere",value:"Surulere"},{label:"Yaba",value:"Yaba"}];(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(n,"lgaList","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/area/lgaList.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))}}]);