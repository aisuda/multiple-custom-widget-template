/*!
 * multiple-cutom-widget-template v1.0.1
 * author: fex
 * build tool: AKFun
 * build time: Wed Dec 29 2021 17:46:03 GMT+0800 (China Standard Time)
 * build tool info: https://github.com/wibetter/akfun
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.amisWidget=t():e.amisWidget=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}({0:function(e,t){e.exports=require("amis-widget")},12:function(e,t,n){"use strict";n.r(t),n.d(t,"InfoCardPlugin",(function(){return o}));var r=n(0),o=function(){this.rendererName="vue-info-card",this.$schema="/schemas/UnkownSchema.json",this.name="vue-info-card",this.description="信息展示卡片",this.tags=["展示","自定义"],this.icon="fa fa-file-code-o",this.scaffold={type:"vue-info-card",label:"vue-info-card",name:"vue-info-card"},this.previewSchema={type:"vue-info-card",label:"vue-info-card"},this.panelTitle="配置",this.panelControls=[{type:"textarea",name:"title",label:"卡片title",value:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"},{type:"text",name:"backgroundImage",label:"展示图片",value:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"},{type:"input-number",name:"img_count",label:"图片数量",value:3},{type:"input-number",name:"comment_count",label:"评论数",value:2021}]};Object(r.registerAmisEditorPlugin)(o,{rendererName:"vue-info-card",name:"vue-info-card",order:99,disabledRendererPlugin:!1}),t.default=o}})}));