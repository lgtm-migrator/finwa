(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{453:function(t,e,r){"use strict";function n(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}))},619:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(19),r(70),r(25),r(8),r(7),r(10),r(13),r(9),r(14),r(52)),c=r(453);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(o.a)({props:{initialCategoryData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){return{categoryId:void 0,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),isBuiltin:!1,name:"",nameRules:Object(c.b)(this.$i18n),valid:!1}},watch:{initialCategoryData:{immediate:!0,handler:function(){this.loadInitialCategoryData()}}},methods:{emitCategory:function(){var t={name:this.name,isBuiltin:this.isBuiltin,color:this.color};void 0!==this.categoryId&&(t=d(d({},t),{},{id:this.categoryId})),this.$emit("submit",t),this.resetForm()},loadInitialCategoryData:function(){var t=this.initialCategoryData;void 0!==t&&(this.categoryId=t.id,this.color=t.color,this.isBuiltin=t.isBuiltin,this.name=this.$t(t.name))},resetForm:function(){this.categoryId=void 0,this.color="#".concat(Math.floor(16777215*Math.random()).toString(16)),this.isBuiltin=!1,this.name="",this.$refs.form.resetValidation(),this.loadInitialCategoryData()}}}),v=r(37),h=r(41),m=r.n(h),y=r(228),O=r(455),j=r(450),C=r(711),w=r(645),I=r(444),x=r(707),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.$tc("category.title",1)))]),t._v(" "),r("v-card-text",[r("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-color-picker",{attrs:{"dot-size":"24","hide-inputs":"",elevation:"2"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitCategory()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:y.a,VCard:O.a,VCardActions:j.a,VCardText:j.c,VCardTitle:j.d,VColorPicker:C.a,VForm:w.a,VSpacer:I.a,VTextField:x.a})}}]);