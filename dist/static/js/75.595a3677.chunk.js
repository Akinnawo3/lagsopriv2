(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{1409:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var l=a(166);var o=a(32);var i=a(1468);var u=a(1453);var c=a(80);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function s(e,t){return f(e)||v(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(!e)return;if(typeof e==="string")return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}function p(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function v(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var l=false;var o,i;try{for(a=a.call(e);!(n=(o=a.next()).done);n=true){r.push(o.value);if(t&&r.length===t)break}}catch(e){l=true;i=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(l)throw i}}return r}function f(e){if(Array.isArray(e))return e}var g=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var y=a(229);var b=function e(t){var a=t.history,o=t.match,u=t.getPartners,c=t.getPartnersCount,d=t.partners;var m=y.parse(a.location.search,{ignoreQueryPrefix:true}).page;var p=Object(r["useState"])(function(){return m===undefined?1:parseInt(m,10)}),v=s(p,2),f=v[0],g=v[1];Object(r["useEffect"])(function(){if(m===undefined||d.length<1){u(f,true,"","",4);c("","",4)}},[]);return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(l["a"],{title:"Partners",match:o}),n.a.createElement(i["a"],{status:4,header:"Approved Partners"}))};g(b,"useState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}\nuseEffect{}");function h(e){return{getPartners:function t(a,r,n,l,o){return e(Object(u["i"])(a,r,n,l,o))},getPartnersCount:function t(a,r,n){return e(Object(u["j"])(a,r,n))}}}var E=function e(t){return{partners:t.partners.partners,partnersCount:t.partners.partnersCount,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var _=Object(o["b"])(E,h)(b);t["default"]=_;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(b,"PartnersApproved","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/partnersApproved.js");e.register(h,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/partnersApproved.js");e.register(E,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/partnersApproved.js");e.register(_,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/partnersApproved.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1468:function(e,t,a){"use strict";(function(e){var r=a(0);var n=a.n(r);var l=a(223);var o=a(225);var i=a(18);var u=a(224);var c=a(116);var s=a(66);var d=a(32);var m=a(115);var p=a(104);var v=a.n(p);var f=a(102);var g=a(56);var y=a(55);var b=a(65);var h=a(58);var E=a(36);var _=a(34);var P=a(27);var j=a(147);var O=a(103);var w=a(20);var C=a(118);var A=a(7);var S=a(1453);var x=a(198);var N=a(370);var k=a(40);var D=a(80);var H=a(67);var I=a(5);var L=a.n(I);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(t){r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}a.push.apply(a,r)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};if(t%2){M(Object(a),true).forEach(function(t){T(e,t,a[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(a))}else{M(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}}return e}function T(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}function q(e,t){return Q(e)||X(e,t)||z(e,t)||F()}function F(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function z(e,t){if(!e)return;if(typeof e==="string")return R(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(e,t)}function R(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function X(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var l=false;var o,i;try{for(a=a.call(e);!(n=(o=a.next()).done);n=true){r.push(o.value);if(t&&r.length===t)break}}catch(e){l=true;i=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(l)throw i}}return r}function Q(e){if(Array.isArray(e))return e}var U=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var B=a(229);var V=function e(t){var a=t.loading,d=t.header,p=t.partners,S=t.partnersCount,D=t.getPartners,L=t.getUserExport,M=t.getPartnersCount,F=t.searchPartners,z=t.createPartners,R=t.status,X=R===void 0?"":R,Q=t.deleteUser;var U=Object(A["g"])();var V=B.parse(U.location.search,{ignoreQueryPrefix:true}).page;var J=Object(r["useState"])(function(){return V===undefined?1:parseInt(V,10)}),$=q(J,2),Y=$[0],K=$[1];var W=Object(r["useState"])(""),Z=q(W,2),ee=Z[0],te=Z[1];var ae=Object(r["useState"])(""),re=q(ae,2),ne=re[0],le=re[1];var oe=Object(r["useState"])(""),ie=q(oe,2),ue=ie[0],ce=ie[1];var se=Object(r["useRef"])(null);var de=Object(r["useRef"])(null);var me=Object(r["useState"])(false),pe=q(me,2),ve=pe[0],fe=pe[1];var ge=Object(r["useState"])(""),ye=q(ge,2),be=ye[0],he=ye[1];var Ee=Object(r["useState"])({last_name:"",first_name:"",phone_number:"",email:"",account_type:"individual",user_type:"partner",account_class:"B",nin:"",vehicle_interested:{unit:"",amount:"140000",has_driver:"0"},partner_driver_payment:{type:"",driver_payment:""}}),_e=q(Ee,2),Pe=_e[0],je=_e[1];var Oe=Pe.last_name,we=Pe.first_name,Ce=Pe.account_type,Ae=Pe.email,Se=Pe.password,xe=Pe.phone_number,Ne=Pe.user_type,ke=Pe.account_class,De=Pe.nin,He=Pe.vehicle_interested,Ie=Pe.partner_driver_payment;var Le={first_name:Ce==="individual"?we:be,last_name:Ce==="individual"?Oe:be,account_type:Ce,email:Ae,phone_number:xe,user_type:Ne,account_class:ke,nin:De,vehicle_interested:He,partner_driver_payment:Ie};var Me=function e(t){return je(G(G({},Pe),{},T({},t.target.name,t.target.value)))};var Ge=function e(t){U.push("".concat(U.location.pathname,"?page=").concat(t));K(t);D(t,false,"","",X);window.scrollTo(0,0)};var Te=function e(){se.current.open()};var qe=function e(){se.current.close();L("partner","","",ee,ne,X)};var Fe=function e(){D(1,false,ee,ne,X);M(ee,ne,X)};var ze=function e(){fe(false);je({last_name:"",first_name:"",phone_number:"",email:"",password:"",account_type:"individual",user_type:"partner",account_class:"B",nin:"",vehicle_interested:{unit:"",amount:"140000",has_driver:"0"},partner_driver_payment:{type:"",driver_payment:""}});he("")};return n.a.createElement("div",null,n.a.createElement(s["a"],{heading:d,fullBlock:true,item:p,currentPage:Y,totalCount:S},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement(C["a"],{setCurrentPage:K,getSearchedData:F,getPreviousData:D,getCount:M}),n.a.createElement(x["a"],{mini:"true",className:"search-icon-btn"},n.a.createElement("i",{className:"zmdi zmdi-search"})),n.a.createElement(N["a"],null)),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block mb-2 ml-3"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:ee,min:"2018-01-01",max:Object(k["x"])(),onChange:function e(t){te(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:ne,min:"2018-01-01",max:Object(k["x"])(),onChange:function e(t){le(t.target.value)}})),n.a.createElement(m["a"],{onClick:function e(){return Fe()},style:{height:"30px"},className:"align-items-center justify-content-center",color:"success"},"Apply filter"),n.a.createElement("div",{className:"float-right"},n.a.createElement("a",{href:"#",onClick:function e(){return fe(true)},color:"primary",className:"caret btn-sm mr-10"},"Create Partner ",n.a.createElement("i",{className:"zmdi zmdi-plus"})),p.length>0&&n.a.createElement(m["a"],{onClick:function e(){return Te()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"}," ",n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),p.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(l["a"],null,n.a.createElement(u["a"],null,n.a.createElement(c["a"],{hover:true},n.a.createElement(i["a"],null,"Name"),n.a.createElement(i["a"],null,"Email"),n.a.createElement(i["a"],null,"Phone No"),n.a.createElement(i["a"],null,"Date / Time of Registration"),n.a.createElement(i["a"],null,"Account Type"),n.a.createElement(i["a"],null,"Status"),n.a.createElement(i["a"],null,"Action"))),n.a.createElement(o["a"],null,n.a.createElement(r["Fragment"],null,p.map(function(e,t){var a,r,l,o,u,s,d;return n.a.createElement(c["a"],{hover:true,key:t},n.a.createElement(i["a"],null,(e===null||e===void 0?void 0:(a=e.partner_data)===null||a===void 0?void 0:a.account_type)==="individual"?"".concat(e.first_name," ").concat(e.last_name):e.first_name),n.a.createElement(i["a"],null,e.email),n.a.createElement(i["a"],null,e.phone_number),n.a.createElement(i["a"],null,Object(k["a"])(e===null||e===void 0?void 0:(r=e.partner_data)===null||r===void 0?void 0:r.createdAt)),n.a.createElement(i["a"],null,e===null||e===void 0?void 0:(l=e.partner_data)===null||l===void 0?void 0:l.account_type),n.a.createElement(i["a"],null,n.a.createElement(f["a"],{color:(e===null||e===void 0?void 0:(o=e.partner_data)===null||o===void 0?void 0:o.partner_status)===4?"success":(e===null||e===void 0?void 0:(u=e.partner_data)===null||u===void 0?void 0:u.partner_status)===2?"primary":"warning"},(e===null||e===void 0?void 0:(s=e.partner_data)===null||s===void 0?void 0:s.partner_status)===4?"Approved":(e===null||e===void 0?void 0:(d=e.partner_data)===null||d===void 0?void 0:d.partner_status)===2?"Verified":"Pending")),n.a.createElement(i["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary ml-2",title:"view details"},n.a.createElement(w["b"],{to:"/admin/partners/".concat(e.auth_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(v.a,{activePage:Y,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:S,onChange:Ge}))),!a&&p.length<1&&n.a.createElement(O["a"],null)),n.a.createElement(g["a"],{isOpen:ve,toggle:function e(){return fe(!ve)}},n.a.createElement(y["a"],{toggle:function e(){return fe(!ve)}},"Create Partner"),n.a.createElement(b["a"],{onSubmit:function e(t){t.preventDefault();if((He===null||He===void 0?void 0:He.has_driver)==="1"){if(parseInt(He.amount)<14e4){return I["NotificationManager"].error("Equity payment amount must be 140000 or above")}}z(Le,ze)}},n.a.createElement(h["a"],null,n.a.createElement(E["a"],null,n.a.createElement(_["a"],null,"Register as an"),n.a.createElement(P["a"],{type:"select",value:Ce,onChange:Me,name:"account_type",required:true},n.a.createElement("option",{value:"individual"},"Individual"),n.a.createElement("option",{value:"organization"},"Organisation"))),Ce==="organization"&&n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"firstName"},"Organisation Name"),n.a.createElement(P["a"],{type:"text",value:be,onChange:function e(t){return he(t.target.value)},required:true})),Ce==="individual"&&n.a.createElement(n.a.Fragment,null,n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"firstName"},"First Name"),n.a.createElement(P["a"],{type:"text",value:we,name:"first_name",onChange:Me,required:true})),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"phoneNumber"},"Last Name"),n.a.createElement(P["a"],{type:"text",value:Oe,name:"last_name",onChange:Me,required:true}))),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"text"},"Email"),n.a.createElement(P["a"],{type:"email",value:Ae,name:"email",onChange:Me,required:true})),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"text"},"Phone Number"),n.a.createElement(P["a"],{type:"number",value:xe,name:"phone_number",onChange:Me,required:true})),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"text"},"NIN"),n.a.createElement(P["a"],{type:"number",value:De,name:"nin",onChange:Me,required:true})),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"text"}," No of Vehicles Interested"),n.a.createElement(P["a"],{type:"number",value:He===null||He===void 0?void 0:He.unit,onChange:function e(t){return je(G(G({},Pe),{},{vehicle_interested:G(G({},He),{},{unit:t.target.value})}))},required:true})),n.a.createElement(E["a"],null,n.a.createElement(_["a"],null,"Do you have a driver for this vehicle?"),n.a.createElement(P["a"],{type:"select",value:He===null||He===void 0?void 0:He.has_driver,onChange:function e(t){return je(G(G({},Pe),{},{vehicle_interested:G(G({},He),{},{has_driver:t.target.value,amount:t.target.value==="0"?"140000":""})}))},required:true},n.a.createElement("option",{value:"0"},"No"),n.a.createElement("option",{value:"1"},"Yes"))),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"text"},"Equity payment amount"),n.a.createElement(P["a"],{readOnly:(He===null||He===void 0?void 0:He.has_driver)==="0",type:"number",value:He===null||He===void 0?void 0:He.amount,onChange:function e(t){return je(G(G({},Pe),{},{vehicle_interested:G(G({},He),{},{amount:t.target.value})}))},required:true})),n.a.createElement(E["a"],null,n.a.createElement(_["a"],null,"Driver's payment type"),n.a.createElement(P["a"],{type:"select",value:Ie===null||Ie===void 0?void 0:Ie.type,onChange:function e(t){return je(G(G({},Pe),{},{partner_driver_payment:G(G({},Ie),{},{type:t.target.value})}))},required:true},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"fixed"},"Fixed"),n.a.createElement("option",{value:"percent"},"Percent"))),n.a.createElement(E["a"],null,n.a.createElement(_["a"],{for:"text"},"Driver's payment ",(Ie===null||Ie===void 0?void 0:Ie.type)==="percent"?"percentage":"amount"),n.a.createElement(P["a"],{type:"number",value:Ie===null||Ie===void 0?void 0:Ie.driver_payment,onChange:function e(t){return je(G(G({},Pe),{},{partner_driver_payment:G(G({},Ie),{},{driver_payment:t.target.value})}))},required:true}))),n.a.createElement(j["a"],null,n.a.createElement(m["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))),n.a.createElement(H["a"],{ref:se,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:qe}))};U(V,'useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n      return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n   })}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseState{[deleteId, setDeleteId]("")}\nuseRef{exportRef}\nuseRef{deleteRef}\nuseState{[isModalOpen, setIsModalOpen](false)}\nuseState{[org_name, setOrg_name]("")}\nuseState{[formData, setFormData]({\n      last_name: "",\n      first_name: "",\n      phone_number: "",\n      email: "",\n      account_type: "individual",\n      user_type: "partner",\n      account_class: "B",\n      nin: "",\n      vehicle_interested: {\n         unit: "",\n         amount: "140000",\n         has_driver: "0",\n      },\n      partner_driver_payment: {\n         type: "",\n         driver_payment: "",\n      },\n   })}',function(){return[A["g"]]});function J(e){return{getPartners:function t(a,r,n,l,o){return e(Object(S["i"])(a,r,n,l,o))},getPartnersCount:function t(a,r,n){return e(Object(S["j"])(a,r,n))},getUserExport:function t(a,r,n,l,o){return e(Object(D["i"])(a,r,n,l,o))},searchPartners:function t(a){return e(Object(S["l"])(a))},createPartners:function t(a,r){return e(Object(S["c"])(a,r))},deleteUser:function t(a,r,n){return e(Object(D["c"])(a,r,n))}}}var $=function e(t){return{partners:t.partners.partners,partnersCount:t.partners.partnersCount,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var Y=Object(d["b"])($,J)(V);t["a"]=Y;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(V,"PartnerTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/components/partnerTable.js");e.register(J,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/components/partnerTable.js");e.register($,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/components/partnerTable.js");e.register(Y,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/partners/components/partnerTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))}}]);