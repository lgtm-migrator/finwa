(window.webpackJsonp=window.webpackJsonp||[]).push([[26,36,37],{457:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var r=n(464),o=n(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),h=Object(o.i)("v-card__title");r.a},459:function(t,e,n){"use strict";function r(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}))},460:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(461);function o(object){return Object(r.a)(object)}function c(object){return Object(r.b)(object)}},461:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(25);function r(object){return void 0!==object&&void 0!==object.name&&void 0!==object.value}function o(object){return r(object)&&void 0!==object&&void 0!==object.monthId}function c(object){return r(object)&&void 0!==object.startingMonthId&&void 0!==object.frequency}},463:function(t,e,n){"use strict";n.r(e);var r=n(53),o=Object(r.a)({props:{value:{type:String,default:void 0},allowNoSelection:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},min:{type:String,default:"1900-01"},max:{type:String,default:"9999-12"},label:{type:String,default:void 0}},data:function(){return{monthPickerOpen:!1}},methods:{updateMonthId:function(t){this.$emit("input",t),this.monthPickerOpen=!1}}}),c=n(38),l=n(43),d=n.n(l),h=n(439),f=n(737),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{value:void 0!==t.value?t.$d(new Date(t.value),"no-day"):void 0,label:void 0!==t.label?t.label:t.$tc("month.title",1),disabled:t.disabled,"prepend-icon":"mdi-calendar",readonly:"",clearable:t.allowNoSelection},on:{"click:clear":function(e){return t.$emit("input",void 0)}}},"v-text-field",o,!1),r))]}}]),model:{value:t.monthPickerOpen,callback:function(e){t.monthPickerOpen=e},expression:"monthPickerOpen"}},[t._v(" "),n("month-picker",{attrs:{value:t.value,min:t.min,max:t.max},on:{input:t.updateMonthId}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{MonthPicker:n(465).default}),d()(component,{VMenu:h.a,VTextField:f.a})},464:function(t,e,n){"use strict";n(8),n(6),n(10),n(12),n(9),n(13);var r=n(2),o=(n(33),n(209),n(611),n(214)),c=n(468),l=n(95),d=n(14);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},465:function(t,e,n){"use strict";n.r(e);var r=n(53),o=Object(r.a)({props:{value:{type:String,default:void 0},fullWidth:{type:Boolean,default:!1},min:{type:String,default:"1900-01"},max:{type:String,default:"9999-12"}}}),c=n(38),l=n(43),d=n.n(l),h=n(740),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-date-picker",{attrs:{value:t.value,type:"month","full-width":t.fullWidth,color:"red","header-color":"primary",elevation:"2",min:t.min,max:t.max},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VDatePicker:h.a})},471:function(t,e,n){"use strict";n.r(e);n(8),n(6),n(10),n(12),n(9),n(13);var r=n(2),o=(n(25),n(20),n(71),n(53)),c=n(131),l=n(459),d=n(460);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(o.a)({props:{initialMonthId:{type:String,default:Object(c.a)()},initialIncomeData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){var t={frequencyRules:Object(l.a)(this.$i18n),nameRules:Object(l.b)(this.$i18n),valueRules:Object(l.c)(this.$i18n)};return f({endingMonthId:void 0,frequency:"1",incomeId:void 0,isRecurring:!1,monthId:this.initialMonthId,name:"",value:"10",valid:!1},t)},watch:{initialMonthId:function(t){this.monthId=t},initialIncomeData:{immediate:!0,handler:function(){this.loadInitialIncomeData()}},monthId:function(){this.normalizeEndingMonth()},endingMonthId:function(){this.normalizeEndingMonth()}},methods:{emitIncome:function(){var t={name:this.name,value:parseInt(this.value)};t=this.isRecurring?f(f({},t),{},{endingMonthId:this.endingMonthId,frequency:parseInt(this.frequency),startingMonthId:this.monthId}):f(f({},t),{},{monthId:this.monthId}),void 0!==this.incomeId&&(t=f(f({},t),{},{id:this.incomeId})),this.$emit("submit",t),this.resetForm()},loadInitialIncomeData:function(){var t=this.initialIncomeData;void 0!==t&&(this.incomeId=t.id,this.name=t.name,this.value=t.value.toString(),Object(d.a)(t)?(this.isRecurring=!1,this.monthId=t.monthId):Object(d.b)(t)&&(this.endingMonthId=t.endingMonthId,this.frequency=t.frequency.toString(),this.isRecurring=!0,this.monthId=t.startingMonthId))},resetForm:function(){this.incomeId=void 0,this.endingMonthId=void 0,this.frequency="1",this.isRecurring=!1,this.monthId=this.initialMonthId,this.name="",this.value="10",this.$refs.form.resetValidation(),this.loadInitialIncomeData()},normalizeEndingMonth:function(){void 0===this.endingMonthId||this.monthId<this.endingMonthId||(this.endingMonthId=this.monthId)}}}),m=n(38),y=n(43),O=n.n(y),_=n(230),I=n(464),x=n(457),j=n(688),k=n(667),w=n(451),P=n(737),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$tc("income.title",1)))]),t._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,"prepend-icon":"mdi-pencil",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.valueRules,type:"number",label:t.$t("misc.value"),"prepend-icon":"mdi-cash",required:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("month-selection",{model:{value:t.monthId,callback:function(e){t.monthId=e},expression:"monthId"}}),t._v(" "),n("v-checkbox",{attrs:{label:t.$t("misc.recurring"),"hide-details":""},model:{value:t.isRecurring,callback:function(e){t.isRecurring=e},expression:"isRecurring"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.frequencyRules,disabled:!t.isRecurring,type:"number",label:t.$t("frequency.title"),hint:t.$tc("frequency.hint",t.isRecurring?+t.frequency:0),"persistent-hint":!0,"prepend-icon":"mdi-repeat"},model:{value:t.frequency,callback:function(e){t.frequency=e},expression:"frequency"}}),t._v(" "),n("month-selection",{attrs:{"allow-no-selection":!0,disabled:!t.isRecurring,min:t.monthId,label:t.$t("misc.until")},model:{value:t.endingMonthId,callback:function(e){t.endingMonthId=e},expression:"endingMonthId"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitIncome()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{MonthSelection:n(463).default}),O()(component,{VBtn:_.a,VCard:I.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCheckbox:j.a,VForm:k.a,VSpacer:w.a,VTextField:P.a})},658:function(t,e,n){var content=n(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("12a190a6",content,!0,{sourceMap:!1})},659:function(t,e,n){var r=n(22)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},660:function(t,e,n){var content=n(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2e2bc7da",content,!0,{sourceMap:!1})},661:function(t,e,n){var r=n(22)(!1);r.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},664:function(t,e,n){"use strict";var r=n(0),o=n(1);e.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},667:function(t,e,n){"use strict";var r=n(2),o=(n(34),n(49),n(134),n(10),n(9),n(59),n(78),n(8),n(6),n(12),n(13),n(14)),c=n(103),l=n(136);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},688:function(t,e,n){"use strict";n(8),n(6),n(10),n(12),n(9),n(13);var r=n(94),o=n(2),c=(n(20),n(71),n(658),n(660),n(85)),l=n(613),d=n(101),h=n(0).default.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),f=n(664),v=n(14);function m(t){t.preventDefault()}var y=Object(v.a)(l.a,h,f.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),O=["title"];function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=y.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return I(I({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,O));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",I(I({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);