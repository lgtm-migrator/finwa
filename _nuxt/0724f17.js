(window.webpackJsonp=window.webpackJsonp||[]).push([[27,11,12],{453:function(t,e,r){"use strict";function n(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}))},619:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(19),r(70),r(25),r(8),r(7),r(10),r(13),r(9),r(14),r(52)),c=r(453);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.a)({props:{initialCategoryData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){return{categoryId:void 0,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),isBuiltin:!1,name:"",nameRules:Object(c.b)(this.$i18n),valid:!1}},watch:{initialCategoryData:{immediate:!0,handler:function(){this.loadInitialCategoryData()}}},methods:{emitCategory:function(){var t={name:this.name,isBuiltin:this.isBuiltin,color:this.color};void 0!==this.categoryId&&(t=f(f({},t),{},{id:this.categoryId})),this.$emit("submit",t),this.resetForm()},loadInitialCategoryData:function(){var t=this.initialCategoryData;void 0!==t&&(this.categoryId=t.id,this.color=t.color,this.isBuiltin=t.isBuiltin,this.name=this.$i18n.t(t.name))},resetForm:function(){this.categoryId=void 0,this.color="#".concat(Math.floor(16777215*Math.random()).toString(16)),this.isBuiltin=!1,this.name="",this.$refs.form.resetValidation(),this.loadInitialCategoryData()}}}),v=r(37),m=r(41),y=r.n(m),h=r(228),O=r(455),j=r(450),C=r(711),w=r(645),_=r(444),x=r(707),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.$tc("category.title",1)))]),t._v(" "),r("v-card-text",[r("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-color-picker",{attrs:{"dot-size":"24","hide-inputs":"",elevation:"2"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitCategory()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:h.a,VCard:O.a,VCardActions:j.a,VCardText:j.c,VCardTitle:j.d,VColorPicker:C.a,VForm:w.a,VSpacer:_.a,VTextField:x.a})},625:function(t,e,r){"use strict";r(7),r(10),r(13),r(14);var n=r(2),o=(r(33),r(48),r(24),r(8),r(31),r(60),r(207),r(19),r(34),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(38),r(9),r(283),r(0)),c=r(91),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return v.reduce((function(r,n){return r[t+Object(l.G)(n)]=e(),r}),{})}var h=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:h}})),j=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},C=y("justify",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},_=y("alignContent",(function(){return{type:String,default:null,validator:w}})),x={align:Object.keys(O),justify:Object.keys(C),alignContent:Object.keys(_)},P={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,r){var n=P[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},O),{},{justify:{type:String,default:null,validator:j}},C),{},{alignContent:{type:String,default:null,validator:w}},_),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var f in r)l+=String(r[f]);var d=$.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&d.push(o)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),$.set(l,d)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},641:function(t,e,r){"use strict";r(7),r(10),r(13),r(14);var n=r(2),o=(r(32),r(8),r(31),r(60),r(207),r(19),r(34),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(38),r(33),r(9),r(71),r(283),r(0)),c=r(91),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(h)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var C=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=C.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),C.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},647:function(t,e,r){"use strict";r.r(e);var n=r(52),o=Object(n.a)({props:{category:{type:Object,required:!0}},methods:{updateCategory:function(t,dialog){dialog.value=!1,this.$store.commit("categories/add",t)}}}),c=r(37),l=r(41),f=r.n(l),d=r(228),v=r(621),m=r(167),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"332"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",icon:"",small:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-pencil")}})],1)]}},{key:"default",fn:function(dialog){return[r("category-form",{ref:"form",attrs:{"initial-category-data":t.category,"submit-label":t.$t("actions.update")},on:{submit:function(e){return t.updateCategory(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{CategoryForm:r(619).default}),f()(component,{VBtn:d.a,VDialog:v.a,VIcon:m.a})},655:function(t,e,r){"use strict";r.r(e);var n=r(52),o=r(78),c=r(101),l=Object(n.a)({data:function(){var t=this;return{footerProps:{itemsPerPageAllText:this.$i18n.t("misc.table.all"),itemsPerPageText:this.$i18n.t("misc.table.items-per-page")},headerProps:{sortByText:this.$i18n.t("misc.table.sort-by")},headers:[{text:this.$i18n.t("misc.color"),value:"color",sortable:!1,filterable:!1},{text:this.$i18n.t("misc.name"),value:"name",sort:function(a,b){return Object(c.b)(a,b,(function(e){return t.$i18n.t(e)}))}},{text:this.$i18n.t("misc.actions"),value:"actions",sortable:!1,filterable:!1}],search:""}},computed:Object(o.c)("categories",["categories"]),methods:Object(o.b)(["removeCategory"])}),f=r(37),d=r(41),v=r.n(d),m=r(642),y=r(228),h=r(455),O=r(450),j=r(646),C=r(167),w=r(444),_=r(707),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n    "+t._s(t.$tc("category.title",2))+"\n    "),r("v-spacer"),t._v(" "),r("v-text-field",{staticClass:"mt-0 pt-0",attrs:{"append-icon":"mdi-magnify",label:t.$t("actions.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("client-only",[r("v-data-table",{attrs:{headers:t.headers,items:t.categories,"items-per-page":15,search:t.search,"footer-props":t.footerProps,"header-props":t.headerProps,"no-data-text":t.$t("misc.no-data"),"no-results-text":t.$t("misc.no-results")},scopedSlots:t._u([{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.$t(r.name))+"\n      ")]}},{key:"item.color",fn:function(t){var e=t.item;return[r("v-badge",{staticClass:"mr-2",attrs:{inline:"",color:e.color}})]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("edit-category-dialog",{attrs:{category:n}}),t._v(" "),r("v-btn",{attrs:{disabled:n.isBuiltin,small:"",icon:"",color:"error"},on:{click:function(e){return t.removeCategory(n)}}},[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-delete")}})],1)]}},{key:"footer.page-text",fn:function(e){var r=e.pageStart,n=e.pageStop,o=e.itemsLength;return[t._v("\n        "+t._s(t.$t("misc.table.page-text",[r,n,o]))+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{EditCategoryDialog:r(647).default}),v()(component,{VBadge:m.a,VBtn:y.a,VCard:h.a,VCardTitle:O.d,VDataTable:j.a,VIcon:C.a,VSpacer:w.a,VTextField:_.a})},656:function(t,e,r){"use strict";r.r(e);var n=r(52),o=Object(n.a)({methods:{createNewCategory:function(t,dialog){dialog.value=!1,this.$store.dispatch("categories/create",t)}}}),c=r(37),l=r(41),f=r.n(l),d=r(228),v=r(621),m=r(167),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"332"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",fab:"",fixed:"",bottom:"",right:""}},"v-btn",o,!1),n),[r("v-icon",{domProps:{textContent:t._s("mdi-plus")}})],1)]}},{key:"default",fn:function(dialog){return[r("category-form",{ref:"form",attrs:{"submit-label":t.$t("actions.create")},on:{submit:function(e){return t.createNewCategory(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{CategoryForm:r(619).default}),f()(component,{VBtn:d.a,VDialog:v.a,VIcon:m.a})},712:function(t,e,r){"use strict";r.r(e);var n=r(52),o=r(227),c=Object(n.a)({head:function(){return{title:this.$t(o.a.categories.title)}}}),l=r(37),f=r(41),d=r.n(f),v=r(641),m=r(625),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{dense:""}},[r("v-col",[r("category-list")],1),t._v(" "),r("create-category-dialog")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{CategoryList:r(655).default,CreateCategoryDialog:r(656).default}),d()(component,{VCol:v.a,VRow:m.a})}}]);