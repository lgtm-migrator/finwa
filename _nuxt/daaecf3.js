(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{441:function(t,e,o){var content=o(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("5276b867",content,!0,{sourceMap:!1})},442:function(t,e,o){var n=o(21)(!1);n.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=n},601:function(t,e,o){"use strict";o(9),o(7),o(10),o(15),o(8),o(16);var n=o(91),r=o(2),d=(o(31),o(441),o(163)),l=o(46),c=o(27),h=o(59),v=o(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=o(100),m=o(11),_=o(0);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a=Object(m.a)(l.a,Object(f.b)(["left","bottom"]),c.a,h.a,v).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.o)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(d.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],o=[Object(_.o)(this)],r=this.$attrs,d=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(n.a)(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?o.unshift(e):o.push(e),t("span",{staticClass:"v-badge",attrs:d,class:this.classes},o)}})},613:function(t,e,o){"use strict";o.r(e);var n=o(44),r=o(75),d=Object(n.a)({computed:Object(r.c)(["categories"]),methods:Object(r.b)(["removeCategory"])}),l=o(34),c=o(39),h=o.n(c),v=o(601),f=o(218),m=o(163),_=o(193),O=o(125),x=o(194),w=o(37),y=o(109),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("v-list",[o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0===t.categories.length,expression:"categories.length === 0"}]},[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("misc.empty-list")))])],1)],1),t._v(" "),t._l(t.categories,(function(e){return o("v-list-item",{key:e.id},[o("v-list-item-icon",[o("v-badge",{attrs:{inline:"",color:e.color}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t(e.name)))])],1),t._v(" "),e.isBuiltin?t._e():o("v-list-item-action",[o("v-btn",{attrs:{color:"red","x-small":"",fab:"",depressed:""},on:{click:function(o){return t.removeCategory(e)}}},[o("v-icon",{domProps:{textContent:t._s("mdi-delete")}})],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBadge:v.a,VBtn:f.a,VIcon:m.a,VList:_.a,VListItem:O.a,VListItemAction:x.a,VListItemContent:w.a,VListItemIcon:y.a,VListItemTitle:w.b})}}]);