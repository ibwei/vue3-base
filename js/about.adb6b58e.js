(window.webpackJsonp=window.webpackJsonp||[]).push([["about"],{f820:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={ref:"root",class:"about"};n("b0c0"),n("ac1f"),n("1276");var c=Object(a.defineComponent)({setup:function(){Object(a.onMounted)((function(){console.log("mounted")}));var e={name:"init"},t=Object(a.reactive)({name:"1111"}),n=Object(a.ref)(0);return{root:Object(a.ref)(null),c:n,state:e,changeState:function(){e.name="hahahah",t.name="chageddddd",console.log(e)},state1:t}},data:function(){return{b:{pageName:"About",author:"kk"}}},conputed:{fullName:function(){return this.b.pageName+this.b.author}},watch:{fullName:function(e){console.log(e)}},methods:{caculatePageName:function(){this.b.pageName.split(",")}}});c.render=function(e,t){return Object(a.openBlock)(),Object(a.createBlock)("div",o,"about.page",512)};t.default=c}}]);