(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{1396:function(e,a,t){"use strict";t.r(a);(function(e){var r=t(0);var n=t.n(r);var l=t(166);var c=t(66);var o=t(52);var s=t(51);var i=t(62);var u=t(54);var m=t(32);var d=t(29);var v=t(23);var f=t(130);var b=t(115);var E=t(1460);var p=t(1461);var g=t(1466);var h=t(34);var y=t(63);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function S(e,a){return O(e)||w(e,a)||x(e,a)||N()}function N(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function x(e,a){if(!e)return;if(typeof e==="string")return j(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,a)}function j(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,r=new Array(a);t<a;t++){r[t]=e[t]}return r}function w(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var r=[];var n=true;var l=false;var c,o;try{for(t=t.call(e);!(n=(c=t.next()).done);n=true){r.push(c.value);if(a&&r.length===a)break}}catch(e){l=true;o=e}finally{try{if(!n&&t["return"]!=null)t["return"]()}finally{if(l)throw o}}return r}function O(e){if(Array.isArray(e))return e}var C=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var D=function e(a){var t=a.match,g=a.getRevenueSplitData,h=a.revenueSplitData,N=a.updateRevenueSplitData;Object(r["useEffect"])(function(){g(true)},[]);var x=Object(r["useState"])(false),j=S(x,2),w=j[0],O=j[1];var C=Object(r["useState"])(false),D=S(C,2),_=D[0],A=D[1];var M=Object(r["useState"])(""),P=S(M,2),T=P[0],k=P[1];var G=Object(r["useState"])(""),q=S(G,2),L=q[0],R=q[1];var H=Object(r["useState"])(""),z=S(H,2),I=z[0],X=z[1];var U=Object(r["useState"])(""),J=S(U,2),B=J[0],$=J[1];var F=Object(r["useState"])(""),K=S(F,2),Q=K[0],V=K[1];var W=Object(r["useState"])(""),Y=S(W,2),Z=Y[0],ee=Y[1];var ae=Object(r["useState"])(""),te=S(ae,2),re=te[0],ne=te[1];var le=Object(r["useState"])(""),ce=S(le,2),oe=ce[0],se=ce[1];var ie=function e(a){a.preventDefault();A(false);var t={commercial_debt_service:re,social_debt_service:oe,daily_tax:T,refleeting:L,tech_co:I,asset_co:B,comms:Q,maintenance:Z};N(t)};var ue=function e(){A(true);ne(h.commercial_debt_service);se(h.social_debt_service);ee(h.maintenance);k(h.daily_tax);R(h.refleeting);X(h.tech_co);$(h.asset_co);V(h.comms)};return n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(l["a"],{title:"Revenue Split",match:t}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col-xs-12 col-md-8"},n.a.createElement(c["a"],{heading:"Revenue Split",style:{minHeight:"70vh"}},n.a.createElement("div",{className:"px-2"},n.a.createElement("div",{className:"row mt-4 ml-2"},n.a.createElement("div",{className:"cl col-sm-12 col-md-6"},n.a.createElement("ol",null,n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Debt Service")),n.a.createElement("ol",{type:"a"},n.a.createElement("li",{className:"ml-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Commercial Driver"),n.a.createElement("strong",null," ₦".concat(h===null||h===void 0?void 0:h.commercial_debt_service)))),n.a.createElement("li",{className:"ml-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Social Driver"),n.a.createElement("strong",null," ₦".concat(h===null||h===void 0?void 0:h.social_debt_service)))))),n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Dail LASG Tax"),n.a.createElement("strong",null," ₦".concat(h===null||h===void 0?void 0:h.daily_tax)))),n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Tec co"),n.a.createElement("strong",null,h===null||h===void 0?void 0:h.tech_co))),n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Re-fleeting"),n.a.createElement("strong",null,h===null||h===void 0?void 0:h.refleeting))),n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Asset co"),n.a.createElement("strong",null,h===null||h===void 0?void 0:h.asset_co))),n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Communication"),n.a.createElement("strong",null,h===null||h===void 0?void 0:h.comms))),n.a.createElement("li",{className:"mb-3"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,"Maintenance and Insurance"),n.a.createElement("strong",null,h===null||h===void 0?void 0:h.maintenance)))))),n.a.createElement("div",{classsName:"d-flex"},n.a.createElement("button",{className:"btn btn-info mr-3",onClick:function e(){return Object(y["b"])("create_setup",ue)}},"Edit"))))),n.a.createElement(o["a"],{isOpen:w,toggle:function e(){return O(false)},size:"sm"},n.a.createElement(s["a"],{toggle:function e(){return O(false)}},"Add Parameter"),n.a.createElement(i["a"],{onSubmit:function e(){return null}},n.a.createElement(u["a"],null,n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Name"),n.a.createElement(v["a"],{type:"text",name:"name",required:true})),n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Percentage"),n.a.createElement(v["a"],{type:"text",name:"number",required:true}))),n.a.createElement(f["a"],null,n.a.createElement(b["a"],{type:"submit",variant:"contained",className:"text-white btn-info mr-2"},"Add Parameter"),n.a.createElement(b["a"],{variant:"contained",className:"btn btn-outline-danger",onClick:function e(){return O(false)}},"Cancel")))),n.a.createElement(o["a"],{isOpen:_,toggle:function e(){return A(false)},size:"md",scrollable:true},n.a.createElement(s["a"],{toggle:function e(){return A(false)}},"Update fee"),n.a.createElement(i["a"],{onSubmit:ie},n.a.createElement(u["a"],null,n.a.createElement(E["a"],null,n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Commercial Driver"),n.a.createElement(v["a"],{type:"number",name:"name",value:re,onChange:function e(a){return ne(a.target.value)},required:true}))),n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Social Driver"),n.a.createElement(v["a"],{type:"text",name:"number",value:oe,onChange:function e(a){return se(a.target.value)},required:true})))),n.a.createElement(E["a"],null,n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Daily LASG Tax"),n.a.createElement(v["a"],{type:"text",name:"number",value:T,onChange:function e(a){return k(a.target.value)},required:true}))),n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Tech co"),n.a.createElement(v["a"],{type:"text",name:"number",value:I,onChange:function e(a){return X(a.target.value)},required:true})))),n.a.createElement(E["a"],null,n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Re-fleeting"),n.a.createElement(v["a"],{type:"text",name:"number",value:L,onChange:function e(a){return R(a.target.value)},required:true}))),n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Asset co"),n.a.createElement(v["a"],{type:"text",name:"number",value:B,onChange:function e(a){return $(a.target.value)},required:true})))),n.a.createElement(E["a"],null,n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Communication"),n.a.createElement(v["a"],{type:"text",name:"number",value:Q,onChange:function e(a){return V(a.target.value)},required:true}))),n.a.createElement(p["a"],{sm:"12",md:"6"},n.a.createElement(m["a"],null,n.a.createElement(d["a"],{for:"lastName"},"Maintenance and Insurance"),n.a.createElement(v["a"],{type:"text",name:"number",value:Z,onChange:function e(a){return ee(a.target.value)},required:true}))))),n.a.createElement(f["a"],null,n.a.createElement(b["a"],{type:"submit",variant:"contained",className:"text-white  btn-info mr-2"},"Save Update"),n.a.createElement(b["a"],{variant:"contained",className:"btn btn-outline-danger",onClick:function e(){return A(false)}},"Cancel"))))))};C(D,'useEffect{}\nuseState{[parameterModalOpen, setParameterModalOpen](false)}\nuseState{[breakDownModalOpen, setBreakDownModalOpen](false)}\nuseState{[dailyTax, setDailyTax]("")}\nuseState{[refleeting, setRefleeting]("")}\nuseState{[techCo, setTechCo]("")}\nuseState{[assetCo, setAssetCo]("")}\nuseState{[comms, setComms]("")}\nuseState{[maintenance, setMaintenance]("")}\nuseState{[commercialDebtService, setCommercialDebtService]("")}\nuseState{[socialDebtService, setSocialDebtService]("")}');function _(e){return{getRevenueSplitData:function a(t){return e(Object(g["f"])(t))},updateRevenueSplitData:function a(t){return e(Object(g["h"])(t))}}}var A=function e(a){return{revenueSplitData:a.revenueSplit.revenueSplitData}};var M=Object(h["b"])(A,_)(D);a["default"]=M;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(D,"RevenueSplit","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/revenueSplit.js");e.register(_,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/revenueSplit.js");e.register(A,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/revenueSplit.js");e.register(M,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/revenueSplit.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1460:function(e,a,t){"use strict";var r=t(2);var n=t(21);var l=t(0);var c=t.n(l);var o=t(1);var s=t.n(o);var i=t(28);var u=t.n(i);var m=t(9);var d=["xs","sm","md","lg","xl"];var v=s.a.oneOfType([s.a.number,s.a.string]);var f={tag:m["o"],noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:v,sm:v,md:v,lg:v,xl:v};var b={tag:"div",widths:d};var E=function e(a){var t=a.className,l=a.cssModule,o=a.noGutters,s=a.tag,i=a.form,d=a.widths,v=Object(n["a"])(a,["className","cssModule","noGutters","tag","form","widths"]);var f=[];d.forEach(function(e,t){var r=a[e];delete v[e];if(!r){return}var n=!t;f.push(n?"row-cols-"+r:"row-cols-"+e+"-"+r)});var b=Object(m["k"])(u()(t,o?"no-gutters":null,i?"form-row":"row",f),l);return c.a.createElement(s,Object(r["a"])({},v,{className:b}))};E.propTypes=f;E.defaultProps=b;a["a"]=E},1461:function(e,a,t){"use strict";var r=t(2);var n=t(21);var l=t(0);var c=t.n(l);var o=t(1);var s=t.n(o);var i=t(28);var u=t.n(i);var m=t(9);var d=["xs","sm","md","lg","xl"];var v=s.a.oneOfType([s.a.number,s.a.string]);var f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:v,offset:v})]);var b={tag:m["o"],xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array};var E={tag:"div",widths:d};var p=function e(a,t,r){if(r===true||r===""){return a?"col":"col-"+t}else if(r==="auto"){return a?"col-auto":"col-"+t+"-auto"}return a?"col-"+r:"col-"+t+"-"+r};var g=function e(a){var t=a.className,l=a.cssModule,o=a.widths,s=a.tag,i=Object(n["a"])(a,["className","cssModule","widths","tag"]);var d=[];o.forEach(function(e,t){var r=a[e];delete i[e];if(!r&&r!==""){return}var n=!t;if(Object(m["i"])(r)){var c;var o=n?"-":"-"+e+"-";var s=p(n,e,r.size);d.push(Object(m["k"])(u()((c={},c[s]=r.size||r.size==="",c["order"+o+r.order]=r.order||r.order===0,c["offset"+o+r.offset]=r.offset||r.offset===0,c)),l))}else{var v=p(n,e,r);d.push(v)}});if(!d.length){d.push("col")}var v=Object(m["k"])(u()(t,d),l);return c.a.createElement(s,Object(r["a"])({},i,{className:v}))};g.propTypes=b;g.defaultProps=E;a["a"]=g}}]);