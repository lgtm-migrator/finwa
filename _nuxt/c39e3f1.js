(window.webpackJsonp=window.webpackJsonp||[]).push([[40,28,33,34,35],{495:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var r=n(503),o=n(1),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),h=Object(o.j)("v-card__title");r.a},497:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(499);function o(object){return Object(r.a)(object)}function c(object){return Object(r.b)(object)}},498:function(t,e,n){"use strict";function r(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}))},499:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(30);function r(object){return void 0!==object&&void 0!==object.name&&void 0!==object.value}function o(object){return r(object)&&void 0!==object&&void 0!==object.monthId}function c(object){return r(object)&&void 0!==object.startingMonthId&&void 0!==object.frequency}},502:function(t,e,n){"use strict";n.r(e);var r=n(41),o=Object(r.a)({props:{value:{type:String,default:void 0},allowNoSelection:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},min:{type:String,default:"1900-01"},max:{type:String,default:"9999-12"},label:{type:String,default:void 0}},data:function(){return{monthPickerOpen:!1}},methods:{updateMonthId:function(t){this.$emit("input",t),this.monthPickerOpen=!1}}}),c=n(27),l=n(24),d=n.n(l),h=n(477),m=n(795),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{value:void 0!==t.value?t.$d(new Date(t.value),"no-day"):void 0,label:void 0!==t.label?t.label:t.$tc("month.title",1),disabled:t.disabled,"prepend-icon":"mdi-calendar",readonly:"",clearable:t.allowNoSelection},on:{"click:clear":function(e){return t.$emit("input",void 0)}}},"v-text-field",o,!1),r))]}}]),model:{value:t.monthPickerOpen,callback:function(e){t.monthPickerOpen=e},expression:"monthPickerOpen"}},[t._v(" "),n("month-picker",{attrs:{value:t.value,min:t.min,max:t.max},on:{input:t.updateMonthId}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{MonthPicker:n(505).default}),d()(component,{VMenu:h.a,VTextField:m.a})},503:function(t,e,n){"use strict";n(9),n(7),n(11),n(15),n(10),n(16);var r=n(2),o=(n(36),n(237),n(523),n(242)),c=n(507),l=n(106),d=n(13);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return m(m({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=m({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},505:function(t,e,n){"use strict";n.r(e);var r=n(41),o=Object(r.a)({props:{value:{type:String,default:void 0},fullWidth:{type:Boolean,default:!1},min:{type:String,default:"1900-01"},max:{type:String,default:"9999-12"}}}),c=n(27),l=n(24),d=n.n(l),h=n(797),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-date-picker",{attrs:{value:t.value,type:"month","full-width":t.fullWidth,color:"red","header-color":"primary",elevation:"2",min:t.min,max:t.max},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VDatePicker:h.a})},512:function(t,e,n){"use strict";n.r(e);n(9),n(7),n(11),n(15),n(10),n(16);var r=n(2),o=(n(30),n(23),n(74),n(41)),c=n(79),l=n(498),d=n(497);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(o.a)({props:{initialMonthId:{type:String,default:Object(c.a)()},initialIncomeData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){var t={frequencyRules:Object(l.a)(this.$i18n),nameRules:Object(l.b)(this.$i18n),valueRules:Object(l.c)(this.$i18n)};return m({endingMonthId:void 0,frequency:"1",incomeId:void 0,isRecurring:!1,monthId:this.initialMonthId,name:"",value:"10",valid:!1},t)},watch:{initialMonthId:function(t){this.monthId=t},initialIncomeData:{immediate:!0,handler:function(){this.loadInitialIncomeData()}},monthId:function(){this.normalizeEndingMonth()},endingMonthId:function(){this.normalizeEndingMonth()}},methods:{emitIncome:function(){var t={name:this.name,value:parseInt(this.value)};t=this.isRecurring?m(m({},t),{},{endingMonthId:this.endingMonthId,frequency:parseInt(this.frequency),startingMonthId:this.monthId}):m(m({},t),{},{monthId:this.monthId}),void 0!==this.incomeId&&(t=m(m({},t),{},{id:this.incomeId})),this.$emit("submit",t),this.resetForm()},loadInitialIncomeData:function(){var t=this.initialIncomeData;void 0!==t&&(this.incomeId=t.id,this.name=t.name,this.value=t.value.toString(),Object(d.a)(t)?(this.isRecurring=!1,this.monthId=t.monthId):Object(d.b)(t)&&(this.endingMonthId=t.endingMonthId,this.frequency=t.frequency.toString(),this.isRecurring=!0,this.monthId=t.startingMonthId))},resetForm:function(){this.incomeId=void 0,this.endingMonthId=void 0,this.frequency="1",this.isRecurring=!1,this.monthId=this.initialMonthId,this.name="",this.value="10",this.$refs.form.resetValidation(),this.loadInitialIncomeData()},normalizeEndingMonth:function(){void 0===this.endingMonthId||this.monthId<this.endingMonthId||(this.endingMonthId=this.monthId)}}}),v=n(27),y=n(24),_=n.n(y),O=n(259),I=n(503),x=n(495),j=n(739),k=n(622),$=n(489),w=n(795),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$tc("income.title",1)))]),t._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"name-input",attrs:{counter:20,label:t.$t("misc.name"),rules:t.nameRules,"prepend-icon":"mdi-pencil",required:"",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("misc.value"),rules:t.valueRules,"prepend-icon":"mdi-cash",required:"",type:"number"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("month-selection",{model:{value:t.monthId,callback:function(e){t.monthId=e},expression:"monthId"}}),t._v(" "),n("v-checkbox",{attrs:{label:t.$t("misc.recurring"),"hide-details":""},model:{value:t.isRecurring,callback:function(e){t.isRecurring=e},expression:"isRecurring"}}),t._v(" "),n("v-text-field",{attrs:{disabled:!t.isRecurring,hint:t.$tc("frequency.hint",t.isRecurring?+t.frequency:0),label:t.$t("frequency.title"),"persistent-hint":!0,rules:t.frequencyRules,"prepend-icon":"mdi-repeat",type:"number"},model:{value:t.frequency,callback:function(e){t.frequency=e},expression:"frequency"}}),t._v(" "),n("month-selection",{attrs:{"allow-no-selection":!0,disabled:!t.isRecurring,label:t.$t("misc.until"),min:t.monthId},model:{value:t.endingMonthId,callback:function(e){t.endingMonthId=e},expression:"endingMonthId"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{disabled:!t.valid,color:"primary",text:""},on:{click:function(e){return t.emitIncome()}}},[t._v("\n        "+t._s(t.submitLabel)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{MonthSelection:n(502).default}),_()(component,{VBtn:O.a,VCard:I.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCheckbox:j.a,VForm:k.a,VSpacer:$.a,VTextField:w.a})},520:function(t,e,n){"use strict";n.r(e);var r=n(41),o=Object(r.a)({props:{monthId:{type:String,required:!0}}}),c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.$d(new Date(t.monthId),"no-day")))])}),[],!1,null,null,null);e.default=component.exports},609:function(t,e,n){"use strict";n.r(e);var r=n(41),o=n(497),c=Object(r.a)({props:{income:{type:Object,required:!0}},methods:{updateIncome:function(t,dialog){dialog.value=!1;var e=this.income;Object(o.b)(t)?(Object(o.a)(e)&&this.$store.commit("months/removeIncome",e),this.$store.commit("recurringIncomes/add",t)):Object(o.a)(t)&&(Object(o.b)(e)?this.$store.commit("recurringIncomes/remove",e):Object(o.a)(e)&&e.monthId!==t.monthId&&this.$store.commit("months/removeIncome",e),this.$store.commit("months/addIncome",t))}}}),l=n(27),d=n(24),h=n.n(d),m=n(259),f=n(559),v=n(194),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",icon:"",small:"","aria-label":t.$t("actions.edit"),title:t.$t("actions.edit")}},"v-btn",o,!1),r),[n("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-pencil")}})],1)]}},{key:"default",fn:function(dialog){return[n("income-form",{ref:"form",attrs:{"initial-income-data":t.income,"submit-label":t.$t("actions.update")},on:{submit:function(e){return t.updateIncome(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;h()(component,{IncomeForm:n(512).default}),h()(component,{VBtn:m.a,VDialog:f.a,VIcon:v.a})},610:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("12a190a6",content,!0,{sourceMap:!1})},611:function(t,e,n){var r=n(28)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},612:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("2e2bc7da",content,!0,{sourceMap:!1})},613:function(t,e,n){var r=n(28)(!1);r.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},617:function(t,e,n){"use strict";n.r(e);var r=n(41),o=n(497),c=Object(r.a)({props:{incomes:{type:Array,required:!0},title:{type:String,default:void 0},includeOneTimeData:{type:Boolean,default:!1},includeRecurringData:{type:Boolean,default:!1}},data:function(){var t=[{text:this.$t("misc.name"),value:"name"},{text:this.$t("misc.value"),value:"value"}];return this.includeOneTimeData&&t.push({text:this.$tc("month.title",1),value:"monthId"}),this.includeRecurringData&&t.push({text:this.$t("frequency.title"),value:"frequency"},{text:this.$t("misc.since"),value:"startingMonthId"},{text:this.$t("misc.until"),value:"endingMonthId"}),t.push({text:this.$t("misc.actions"),value:"actions",sortable:!1,filterable:!1}),{footerProps:{itemsPerPageAllText:this.$t("misc.table.all"),itemsPerPageText:this.$t("misc.table.items-per-page")},headerProps:{sortByText:this.$t("misc.table.sort-by")},headers:t,search:""}},methods:{deleteIncome:function(t){Object(o.b)(t)?this.$store.commit("recurringIncomes/remove",t):Object(o.a)(t)&&this.$store.commit("months/removeIncome",t)}}}),l=n(27),d=n(24),h=n.n(d),m=n(259),f=n(503),v=n(495),y=n(726),_=n(194),O=n(489),I=n(795),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"pb-0 pb-sm-4"},[t._v("\n    "+t._s(t.title||t.$tc("income.title",2))+"\n    "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:t.$t("actions.search"),"append-icon":"mdi-magnify","hide-details":"","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("client-only",[n("v-data-table",{attrs:{"footer-props":t.footerProps,"header-props":t.headerProps,headers:t.headers,items:t.incomes,"items-per-page":15,"no-data-text":t.$t("misc.no-data"),"no-results-text":t.$t("misc.no-results"),search:t.search},scopedSlots:t._u([{key:"item.monthId",fn:function(e){var r=e.item;return[r.monthId?n("month-name",{attrs:{"month-id":r.monthId}}):t._e()]}},{key:"item.frequency",fn:function(e){var r=e.item;return[r.frequency?n("span",[t._v(t._s(t.$tc("frequency.description",r.frequency)))]):t._e()]}},{key:"item.startingMonthId",fn:function(e){var r=e.item;return[r.startingMonthId?n("month-name",{attrs:{"month-id":r.startingMonthId}}):t._e()]}},{key:"item.endingMonthId",fn:function(e){var r=e.item;return[r.endingMonthId?n("month-name",{attrs:{"month-id":r.endingMonthId}}):t._e()]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("edit-income-dialog",{attrs:{income:r}}),t._v(" "),n("v-btn",{attrs:{"aria-label":t.$t("actions.delete"),title:t.$t("actions.delete"),color:"error",icon:"",small:""},on:{click:function(e){return t.deleteIncome(r)}}},[n("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-delete")}})],1)]}},{key:"footer.page-text",fn:function(e){var n=e.pageStart,r=e.pageStop,o=e.itemsLength;return[t._v("\n        "+t._s(t.$t("misc.table.page-text",[n,r,o]))+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{MonthName:n(520).default,EditIncomeDialog:n(609).default}),h()(component,{VBtn:m.a,VCard:f.a,VCardTitle:v.d,VDataTable:y.a,VIcon:_.a,VSpacer:O.a,VTextField:I.a})},622:function(t,e,n){"use strict";var r=n(2),o=(n(42),n(55),n(151),n(11),n(10),n(63),n(86),n(9),n(7),n(15),n(16),n(13)),c=n(115),l=n(154);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},732:function(t,e,n){"use strict";n.r(e);var r=n(41),o=Object(r.a)({props:{oneTimeIncomes:{type:Array,required:!0}}}),c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("income-table",{attrs:{incomes:t.oneTimeIncomes,title:t.$tc("income.one-time",2),"include-one-time-data":""}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IncomeTable:n(617).default})},739:function(t,e,n){"use strict";n(9),n(7),n(11),n(15),n(10),n(16);var r=n(105),o=n(2),c=(n(23),n(74),n(610),n(612),n(90)),l=n(524),d=n(113),h=n(0).default.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(620),f=n(13);function v(t){t.preventDefault()}var y=Object(f.a)(l.a,h,m.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:v},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),_=["title"];function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=y.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return I(I({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",I(I({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);