(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{1341:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var o=r(223);var i=r(225);var c=r(18);var s=r(224);var u=r(116);var l=r(166);var p=r(67);var d=r(23);var f=r(62);var m=r(32);var v=r(29);var g=r(43);var b=r(104);var y=r.n(b);var h=r(52);var k=r(51);var E=r(54);var w=r(130);var j=r(64);var x=r(34);var O=r(171);var T=r(197);var P=r(370);var S=r(203);var N=r.n(S);var A=r(778);var M=r(1554);var B=undefined;(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function _(e,t,r,a,n,o,i){try{var c=e[o](i);var s=c.value}catch(e){r(e);return}if(c.done){t(s)}else{Promise.resolve(s).then(a,n)}}function C(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function i(e){_(o,a,n,i,c,"next",e)}function c(e){_(o,a,n,i,c,"throw",e)}i(undefined)})}}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);if(t){a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,a)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){D(Object(r),true).forEach(function(t){H(e,t,r[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{D(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}}return e}function H(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function G(e,t){return U(e)||I(e,t)||X(e,t)||R()}function R(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function X(e,t){if(!e)return;if(typeof e==="string")return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}function F(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function I(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var i,c;try{for(r=r.call(e);!(n=(i=r.next()).done);n=true){a.push(i.value);if(t&&a.length===t)break}}catch(e){o=true;c=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw c}}return a}function U(e){if(Array.isArray(e))return e}var z=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var q=function e(t){var r=t.match,b=t.getBookingTypes,x=t.bookingTypes,N=t.createBookingType,M=t.updateBookingType,_=t.loading,D=t.deleteBookingType,R=t.loadingStatus;var X=Object(a["useState"])(false),F=G(X,2),I=F[0],U=F[1];var z=Object(a["useState"])(false),q=G(z,2),J=q[0],V=q[1];var Y=Object(a["useState"])(null),W=G(Y,2),$=W[0],K=W[1];var Q=Object(a["useState"])(null),Z=G(Q,2),ee=Z[0],te=Z[1];var re=Object(a["useState"])({trip_name:"",trip_description:""}),ae=G(re,2),ne=ae[0],oe=ae[1];var ie=Object(a["useState"])(""),ce=G(ie,2),se=ce[0],ue=ce[1];var le=Object(a["useRef"])(null);var pe=Object(a["useState"])([]),de=G(pe,2),fe=de[0],me=de[1];var ve=Object(a["useState"])(1),ge=G(ve,2),be=ge[0],ye=ge[1];var he=Object(a["useState"])(10),ke=G(he,1),Ee=ke[0];var we=be*Ee;var je=we-Ee;var xe=fe.slice(je,we);var Oe=Object(a["useState"])([]),Te=G(Oe,2),Pe=Te[0],Se=Te[1];Object(a["useEffect"])(function(){b()},[]);var Ne=function e(t){ye(t);window.scrollTo(0,0)};var Ae=function e(t){return oe(L(L({},ne),{},H({},t.target.name,t.target.value)))};var Me=ne.trip_name,Be=ne.trip_description;var _e=function e(t){t.preventDefault();U(true)};var Ce=function e(t){x.map(function(e){if(e.id===t){oe({trip_name:e.trip_name,trip_description:e.trip_description});K(e.id)}});U(true);V(true)};var De=function e(){oe({trip_name:"",trip_description:""});K(null);U(false);V(false)};var Le=function e(t){le.current.open();te(t)};var He=function(){var e=C(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:t.preventDefault();De();if(J){r.next=7;break}r.next=5;return N(Me,Be);case 5:r.next=9;break;case 7:r.next=9;return M($,Me,Be);case 9:case"end":return r.stop()}}},e)}));return function t(r){return e.apply(this,arguments)}}();var Ge=function e(t){t.preventDefault();ue(t.target.value)};Object(a["useEffect"])(function(){if(se&&x){ye(1);var e=x.filter(function(e){return e.trip_name.toLowerCase().includes(se.toLowerCase())});me(e)}else if(se===""){me(x.sort(function(e,t){return parseFloat(t.id)-parseFloat(e.id)}))}},[se]);Object(a["useEffect"])(function(){if(x){me(x.sort(function(e,t){return parseFloat(t.id)-parseFloat(e.id)}));var e=x.map(function(e){return{Name:e["trip_name"],Description:e["trip_description"]}});Se(e)}},[x]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(l["a"],{title:"BookingTypes",match:r}),R&&n.a.createElement(A["a"],null),_&&n.a.createElement(O["a"],null),!_&&n.a.createElement(p["a"],{heading:"BookingTypes",fullBlock:true,item:xe,currentPage:be,totalCount:Ee},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("div",{className:"search-wrapper"},n.a.createElement(d["a"],{type:"search",className:"search-input-lg",name:"searchData",value:se,onChange:Ge,placeholder:"Search.."})),n.a.createElement(T["a"],{mini:"true",className:"search-icon-btn"},n.a.createElement("i",{className:"zmdi zmdi-search"})),n.a.createElement(P["a"],{onClose:function e(){return B.setState({isMobileSearchFormVisible:false})}})),n.a.createElement("div",{className:"float-right"},n.a.createElement(S["CSVLink"],{data:Pe,filename:"bookingTypes.csv",className:"btn-sm btn-outline-default mr-10 bg-primary text-white",target:"_blank"},n.a.createElement("i",{className:"zmdi zmdi-download mr-2"}),"Export to Excel"),n.a.createElement("a",{href:"#",onClick:function e(t){return _e(t)},color:"primary",className:"caret btn-sm mr-10"},"Create New BookingType ",n.a.createElement("i",{className:"zmdi zmdi-plus"}))),n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(o["a"],null,n.a.createElement(s["a"],null,n.a.createElement(u["a"],{hover:true},n.a.createElement(c["a"],null,"Name"),n.a.createElement(c["a"],null,"Description"),n.a.createElement(c["a"],null,"Actions"))),n.a.createElement(i["a"],null,n.a.createElement(a["Fragment"],null,fe&&xe.map(function(e,t){return n.a.createElement(u["a"],{hover:true,key:t},n.a.createElement(c["a"],null,e.trip_name),n.a.createElement(c["a"],null,e.trip_description),n.a.createElement(c["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn",onClick:function t(r){return Ce(e.id)}},n.a.createElement("i",{className:"ti-pencil"})),n.a.createElement("button",{type:"button",className:"rct-link-btn ml-lg-3 text-danger",onClick:function t(){return Le(e.id)}},n.a.createElement("i",{className:"ti-close"}))))})))),fe.length<1&&n.a.createElement("div",{className:"d-flex align-items-center justify-content-center w-100 p-5"},"No Booking Type Found")),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},fe.length>0&&n.a.createElement(y.a,{activePage:be,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:Ee,totalItemsCount:fe.length,onChange:Ne}))),n.a.createElement(h["a"],{isOpen:I,toggle:function e(){return De()}},n.a.createElement(k["a"],{toggle:function e(){return De()}},J?"Update Booking Type":"Create New Booking Type"),n.a.createElement(f["a"],{onSubmit:He},n.a.createElement(E["a"],null,n.a.createElement(m["a"],null,n.a.createElement(v["a"],{for:"firstName"},"Name"),n.a.createElement(d["a"],{type:"text",name:"trip_name",value:Me,onChange:Ae,required:true})),n.a.createElement(m["a"],null,n.a.createElement(v["a"],{for:"lastName"},"Description"),n.a.createElement(d["a"],{type:"textarea",name:"trip_description",value:Be,onChange:Ae,required:true}))),n.a.createElement(w["a"],null,n.a.createElement(g["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))),n.a.createElement(j["a"],{ref:le,title:"Are You Sure You Want To Delete?",message:"This will delete user permanently.",onConfirm:function e(){D(ee);le.current.close()}}))};z(q,'useState{[addNewUserModal, setAddNewUserModal](false)}\nuseState{[editUser, setEditUser](false)}\nuseState{[updateId, setUpdateId](null)}\nuseState{[deleteId, setDeleteId](null)}\nuseState{[formData, setFormData]({trip_name: "", trip_description: ""})}\nuseState{[searchData, setSearchData]("")}\nuseRef{inputEl}\nuseState{[posts, setPosts]([])}\nuseState{[currentPage, setCurrentPage](1)}\nuseState{[postsPerPage](10)}\nuseState{[excelExport, setExcelExport]([])}\nuseEffect{}\nuseEffect{}\nuseEffect{}');function J(e){return{getBookingTypes:function t(){return e(Object(M["c"])())},createBookingType:function t(r,a){return e(Object(M["a"])(r,a))},updateBookingType:function t(r,a,n){return e(Object(M["d"])(r,a,n))},deleteBookingType:function t(r){return e(Object(M["b"])(r))}}}var V=function e(t){return{bookingTypes:t.bookingTypes.bookingTypes,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var Y=Object(x["b"])(V,J)(q);t["default"]=Y;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(q,"BookingTypes","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/booking-types/booking-types.js");e.register(J,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/booking-types/booking-types.js");e.register(V,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/booking-types/booking-types.js");e.register(Y,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/booking-types/booking-types.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1554:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return f});r.d(t,"c",function(){return m});r.d(t,"d",function(){return g});r.d(t,"b",function(){return b});var a=r(15);var n=r.n(a);var o=r(4);var i=r(3);var c=r(5);var s=r.n(c);var u=r(16);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,o,i){try{var c=e[o](i);var s=c.value}catch(e){r(e);return}if(c.done){t(s)}else{Promise.resolve(s).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function i(e){l(o,a,n,i,c,"next",e)}function c(e){l(o,a,n,i,c,"throw",e)}i(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var i;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:i={trip_name:t,trip_description:r};s.prev=1;s.next=4;return a(Object(o["c"])());case 4:s.next=6;return n.a.post("".concat(u["a"].bookingTypes,"/api/tripTypes/"),i);case 6:s.next=8;return c["NotificationManager"].success("BookingType Created Successfully!");case 8:s.next=10;return a(v());case 10:a(Object(o["a"])());s.next=17;break;case 13:s.prev=13;s.t0=s["catch"](1);a(Object(o["a"])());c["NotificationManager"].error(s.t0.response.data.result);case 17:case"end":return s.stop()}}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;a.next=3;return t(Object(o["c"])());case 3:a.next=5;return n.a.get("".concat(u["a"].bookingTypes,"/api/tripTypes/"));case 5:r=a.sent;t({type:i["i"],payload:r.data});t(Object(o["a"])());a.next=14;break;case 10:a.prev=10;a.t0=a["catch"](0);t(Object(o["a"])());c["NotificationManager"].error(a.t0.response.data.message);case 14:case"end":return a.stop()}}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;a.next=3;return n.a.get("".concat(u["a"].bookingTypes,"/api/tripTypes/"));case 3:r=a.sent;t({type:i["i"],payload:r.data});a.next=10;break;case 7:a.prev=7;a.t0=a["catch"](0);c["NotificationManager"].error(a.t0.response.data.message);case 10:case"end":return a.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,r,a){return function(){var e=p(regeneratorRuntime.mark(function e(i){var s;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:s={trip_name:r,trip_description:a};l.prev=1;l.next=4;return i(Object(o["d"])());case 4:l.next=6;return n.a.put("".concat(u["a"].bookingTypes,"/api/tripTypes/").concat(t,"/"),s);case 6:l.next=8;return c["NotificationManager"].success("BookingType Updated Successfully!");case 8:l.next=10;return i(Object(o["b"])());case 10:l.next=12;return i(v());case 12:l.next=18;break;case 14:l.prev=14;l.t0=l["catch"](1);i(Object(o["b"])());c["NotificationManager"].error(l.t0.response.data.result);case 18:case"end":return l.stop()}}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;r(Object(o["d"])());a.next=4;return n.a.delete("".concat(u["a"].bookingTypes,"/api/tripTypes/").concat(t,"/"));case 4:a.next=6;return c["NotificationManager"].success("BookingType Deleted Successfully!");case 6:a.next=8;return r(Object(o["b"])());case 8:a.next=10;return r(v());case 10:a.next=17;break;case 12:a.prev=12;a.t0=a["catch"](0);a.next=16;return r(Object(o["b"])());case 16:c["NotificationManager"].error(a.t0.response.data.result);case 17:case"end":return a.stop()}}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createBookingType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/bookingTypesAction.js");e.register(m,"getBookingTypes","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/bookingTypesAction.js");e.register(v,"getBookingTypes2","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/bookingTypesAction.js");e.register(g,"updateBookingType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/bookingTypesAction.js");e.register(b,"deleteBookingType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/bookingTypesAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))}}]);