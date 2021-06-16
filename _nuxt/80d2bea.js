(window.webpackJsonp=window.webpackJsonp||[]).push([[12,11],{453:function(t,e,r){"use strict";function n(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}))},619:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(19),r(70),r(25),r(8),r(7),r(10),r(13),r(9),r(14),r(52)),c=r(453);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(o.a)({props:{initialCategoryData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){return{categoryId:void 0,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),isBuiltin:!1,name:"",nameRules:Object(c.b)(this.$i18n),valid:!1}},watch:{initialCategoryData:{immediate:!0,handler:function(){this.loadInitialCategoryData()}}},methods:{emitCategory:function(){var t={name:this.name,isBuiltin:this.isBuiltin,color:this.color};void 0!==this.categoryId&&(t=d(d({},t),{},{id:this.categoryId})),this.$emit("submit",t),this.resetForm()},loadInitialCategoryData:function(){var t=this.initialCategoryData;void 0!==t&&(this.categoryId=t.id,this.color=t.color,this.isBuiltin=t.isBuiltin,this.name=this.$i18n.t(t.name))},resetForm:function(){this.categoryId=void 0,this.color="#".concat(Math.floor(16777215*Math.random()).toString(16)),this.isBuiltin=!1,this.name="",this.$refs.form.resetValidation(),this.loadInitialCategoryData()}}}),f=r(37),v=r(41),h=r.n(v),y=r(228),O=r(455),_=r(450),x=r(711),C=r(645),$=r(444),j=r(707),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.$tc("category.title",1)))]),t._v(" "),r("v-card-text",[r("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-color-picker",{attrs:{"dot-size":"24","hide-inputs":"",elevation:"2"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitCategory()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:y.a,VCard:O.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VColorPicker:x.a,VForm:C.a,VSpacer:$.a,VTextField:j.a})},647:function(t,e,r){"use strict";r.r(e);var n=r(52),o=Object(n.a)({props:{category:{type:Object,required:!0}},methods:{updateCategory:function(t,dialog){dialog.value=!1,this.$store.commit("categories/add",t)}}}),c=r(37),l=r(41),d=r.n(l),m=r(228),f=r(621),v=r(167),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"332"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",icon:"",small:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-pencil")}})],1)]}},{key:"default",fn:function(dialog){return[r("category-form",{ref:"form",attrs:{"initial-category-data":t.category,"submit-label":t.$t("actions.update")},on:{submit:function(e){return t.updateCategory(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{CategoryForm:r(619).default}),d()(component,{VBtn:m.a,VDialog:f.a,VIcon:v.a})},655:function(t,e,r){"use strict";r.r(e);var n=r(52),o=r(78),c=r(101),l=Object(n.a)({data:function(){var t=this;return{footerProps:{itemsPerPageAllText:this.$i18n.t("misc.table.all"),itemsPerPageText:this.$i18n.t("misc.table.items-per-page")},headerProps:{sortByText:this.$i18n.t("misc.table.sort-by")},headers:[{text:this.$i18n.t("misc.color"),value:"color",sortable:!1,filterable:!1},{text:this.$i18n.t("misc.name"),value:"name",sort:function(a,b){return Object(c.b)(a,b,(function(e){return t.$i18n.t(e)}))}},{text:this.$i18n.t("misc.actions"),value:"actions",sortable:!1,filterable:!1}],search:""}},computed:Object(o.c)("categories",["categories"]),methods:Object(o.b)(["removeCategory"])}),d=r(37),m=r(41),f=r.n(m),v=r(642),h=r(228),y=r(455),O=r(450),_=r(646),x=r(167),C=r(444),$=r(707),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-card-title",[t._v("\n    "+t._s(t.$tc("category.title",2))+"\n    "),r("v-spacer"),t._v(" "),r("v-text-field",{staticClass:"mt-0 pt-0",attrs:{"append-icon":"mdi-magnify",label:t.$t("actions.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("client-only",[r("v-data-table",{attrs:{headers:t.headers,items:t.categories,"items-per-page":15,search:t.search,"footer-props":t.footerProps,"header-props":t.headerProps,"no-data-text":t.$t("misc.no-data"),"no-results-text":t.$t("misc.no-results")},scopedSlots:t._u([{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.$t(r.name))+"\n      ")]}},{key:"item.color",fn:function(t){var e=t.item;return[r("v-badge",{staticClass:"mr-2",attrs:{inline:"",color:e.color}})]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("edit-category-dialog",{attrs:{category:n}}),t._v(" "),r("v-btn",{attrs:{disabled:n.isBuiltin,small:"",icon:"",color:"error"},on:{click:function(e){return t.removeCategory(n)}}},[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-delete")}})],1)]}},{key:"footer.page-text",fn:function(e){var r=e.pageStart,n=e.pageStop,o=e.itemsLength;return[t._v("\n        "+t._s(t.$t("misc.table.page-text",[r,n,o]))+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{EditCategoryDialog:r(647).default}),f()(component,{VBadge:v.a,VBtn:h.a,VCard:y.a,VCardTitle:O.d,VDataTable:_.a,VIcon:x.a,VSpacer:C.a,VTextField:$.a})}}]);