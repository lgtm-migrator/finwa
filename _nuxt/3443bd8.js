(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{565:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4c4e6e63",content,!0,{sourceMap:!1})},569:function(t,e,n){"use strict";n(565)},570:function(t,e,n){var r=n(22)(!1);r.push([t.i,".expense-form[data-v-68f9df68]{align-items:center}",""]),t.exports=r},571:function(t,e,n){var content=n(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("7f62fb04",content,!0,{sourceMap:!1})},572:function(t,e,n){var r=n(22)(!1);r.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=r},579:function(t,e,n){"use strict";n.r(e);n(11),n(7),n(12),n(15),n(10),n(16);var r,o=n(1),c=n(91),l=n(48),d=new Uint8Array(16);function f(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(d)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var h=function(t){return"string"==typeof t&&v.test(t)},m=[],y=0;y<256;++y)m.push((y+256).toString(16).substr(1));var O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase();if(!h(n))throw TypeError("Stringified UUID is invalid");return n};var j=function(t,e,n){var r=(t=t||{}).random||(t.rng||f)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return O(r)};var _=n(188);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(l.a)({data:function(){return{value:"0",categoryId:_.b.id}},computed:x({},Object(c.c)(["categories"])),methods:x(x({},Object(c.b)(["addExpense"])),{},{createExpense:function(){return{id:j(),categoryId:this.categoryId,value:parseInt(this.value)}}})}),P=(n(569),n(32)),C=n(33),$=n.n(C),B=n(98),E=(n(37),n(571),n(159)),k=n(35),V=n(44),D=n(75),I=n(0).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),R=n(127),L=n(14),X=n(2);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var T=Object(L.a)(k.a,Object(R.b)(["left","bottom"]),V.a,D.a,I).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(X.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(X.n)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(E.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(X.n)(this)],r=this.$attrs,o=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(B.a)(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},n)}}),Y=n(271),z=n(121),U=n(27),A=n(588),G=n(620),J=n(422),N=n(616),component=Object(P.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{attrs:{type:"number",label:t.$t("misc.costs")},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("v-select",{attrs:{items:t.categories,"item-value":"id",label:t.$tc("domain.category.title",1),dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.$t(n.name))+"\n    ")]}},{key:"item",fn:function(e){var r=e.item,o=e.attrs,c=e.on;return[n("v-list-item",t._g(t._b({},"v-list-item",o,!1),c),[n("v-list-item-content",[n("v-list-item-title",[n("v-row",{attrs:{"no-gutters":"",align:"center"}},[n("span",[t._v(t._s(t.$t(r.name)))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-badge",{staticStyle:{height:"20px"},attrs:{inline:"",color:r.color}})],1)],1)],1)],1)]}}]),model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}}),t._v(" "),n("v-btn",{attrs:{color:"primary",disabled:t.value<1},on:{click:function(e){t.addExpense(t.createExpense())}}},[t._v(t._s(t.$t("actions.create-expense")))])],1)}),[],!1,null,"68f9df68",null);e.default=component.exports;$()(component,{VBadge:T,VBtn:Y.a,VListItem:z.a,VListItemContent:U.a,VListItemTitle:U.b,VRow:A.a,VSelect:G.a,VSpacer:J.a,VTextField:N.a})},588:function(t,e,n){"use strict";n(7),n(12),n(15),n(16);var r=n(1),o=(n(47),n(55),n(30),n(11),n(31),n(60),n(198),n(20),n(38),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(43),n(10),n(274),n(0)),c=n(90),l=n(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var y=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),j=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},x=m("alignContent",(function(){return{type:String,default:null,validator:w}})),S={align:Object.keys(O),justify:Object.keys(_),alignContent:Object.keys(x)},P={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:j}},_),{},{alignContent:{type:String,default:null,validator:w}},x),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=$.get(l);return f||function(){var t,e;for(e in f=[],S)S[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})}}]);