(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7,10,11,12,15,16],{439:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"f",(function(){return v})),r.d(e,"e",(function(){return f}));r(19),r(69);function n(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}var o="N/A";function c(t){var e;return null!==(e=t.value)&&void 0!==e?e:o}function l(t,data){var e;return void 0===t[0].datasetIndex||void 0===data.datasets?o:null!==(e=data.datasets[t[0].datasetIndex].label)&&void 0!==e?e:o}function d(t){var e;return null!==(e=t.value)&&void 0!==e?e:o}function v(t,data){var e,r;return void 0===t[0].index||void 0===data.labels?o:null!==(r=null===(e=data.labels[t[0].index])||void 0===e?void 0:e.toString())&&void 0!==r?r:o}function f(t,data){var e,r;if(void 0===t.index||void 0===data.datasets)return o;var n=data.datasets[0];return void 0===n.data?o:null!==(r=null===(e=n.data[t.index])||void 0===e?void 0:e.toString())&&void 0!==r?r:o}},575:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return v}));var n=r(579),o=r(0),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},577:function(t,e,r){var content=r(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("5276b867",content,!0,{sourceMap:!1})},578:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=n},579:function(t,e,r){"use strict";r(9),r(7),r(10),r(15),r(8),r(16);var n=r(2),o=(r(31),r(217),r(584),r(220)),c=r(595),l=r(98),d=r(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},580:function(t,e,r){"use strict";r.r(e);r(31);var n=r(576),o=r(44),c=r(439),l=Object(o.a)({extends:n.c,mixins:[n.d.reactiveProp],props:{cutoutPercentage:{type:Number,default:50}},computed:{chartOptions:function(){var t=Object(c.b)(this.$vuetify).fontColor;return{responsive:!0,cutoutPercentage:this.cutoutPercentage,legend:{labels:{fontColor:t}},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{title:c.f,label:c.e}}}}},watch:{chartOptions:function(t){this.render(t)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(t){this.renderChart(this.chartData,t)}}}),d=r(34),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},581:function(t,e,r){"use strict";r.r(e);var n=r(576),o=r(44),c=r(439),l=Object(o.a)({extends:n.a,mixins:[n.d.reactiveProp],computed:{chartOptions:function(){var t=Object(c.b)(this.$vuetify),e=t.fontColor,r=t.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:e}}],yAxes:[{gridLines:{display:!0,color:r,zeroLineColor:r},ticks:{beginAtZero:!0,fontColor:e}}]},legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{label:c.a}}}}},watch:{chartOptions:function(t){this.render(t)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(t){this.renderChart(this.chartData,t)}}}),d=r(34),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},582:function(t,e,r){var map={"./af":440,"./af.js":440,"./ar":441,"./ar-dz":442,"./ar-dz.js":442,"./ar-kw":443,"./ar-kw.js":443,"./ar-ly":444,"./ar-ly.js":444,"./ar-ma":445,"./ar-ma.js":445,"./ar-sa":446,"./ar-sa.js":446,"./ar-tn":447,"./ar-tn.js":447,"./ar.js":441,"./az":448,"./az.js":448,"./be":449,"./be.js":449,"./bg":450,"./bg.js":450,"./bm":451,"./bm.js":451,"./bn":452,"./bn-bd":453,"./bn-bd.js":453,"./bn.js":452,"./bo":454,"./bo.js":454,"./br":455,"./br.js":455,"./bs":456,"./bs.js":456,"./ca":457,"./ca.js":457,"./cs":458,"./cs.js":458,"./cv":459,"./cv.js":459,"./cy":460,"./cy.js":460,"./da":461,"./da.js":461,"./de":462,"./de-at":463,"./de-at.js":463,"./de-ch":464,"./de-ch.js":464,"./de.js":462,"./dv":465,"./dv.js":465,"./el":466,"./el.js":466,"./en-au":467,"./en-au.js":467,"./en-ca":468,"./en-ca.js":468,"./en-gb":469,"./en-gb.js":469,"./en-ie":470,"./en-ie.js":470,"./en-il":471,"./en-il.js":471,"./en-in":472,"./en-in.js":472,"./en-nz":473,"./en-nz.js":473,"./en-sg":474,"./en-sg.js":474,"./eo":475,"./eo.js":475,"./es":476,"./es-do":477,"./es-do.js":477,"./es-mx":478,"./es-mx.js":478,"./es-us":479,"./es-us.js":479,"./es.js":476,"./et":480,"./et.js":480,"./eu":481,"./eu.js":481,"./fa":482,"./fa.js":482,"./fi":483,"./fi.js":483,"./fil":484,"./fil.js":484,"./fo":485,"./fo.js":485,"./fr":486,"./fr-ca":487,"./fr-ca.js":487,"./fr-ch":488,"./fr-ch.js":488,"./fr.js":486,"./fy":489,"./fy.js":489,"./ga":490,"./ga.js":490,"./gd":491,"./gd.js":491,"./gl":492,"./gl.js":492,"./gom-deva":493,"./gom-deva.js":493,"./gom-latn":494,"./gom-latn.js":494,"./gu":495,"./gu.js":495,"./he":496,"./he.js":496,"./hi":497,"./hi.js":497,"./hr":498,"./hr.js":498,"./hu":499,"./hu.js":499,"./hy-am":500,"./hy-am.js":500,"./id":501,"./id.js":501,"./is":502,"./is.js":502,"./it":503,"./it-ch":504,"./it-ch.js":504,"./it.js":503,"./ja":505,"./ja.js":505,"./jv":506,"./jv.js":506,"./ka":507,"./ka.js":507,"./kk":508,"./kk.js":508,"./km":509,"./km.js":509,"./kn":510,"./kn.js":510,"./ko":511,"./ko.js":511,"./ku":512,"./ku.js":512,"./ky":513,"./ky.js":513,"./lb":514,"./lb.js":514,"./lo":515,"./lo.js":515,"./lt":516,"./lt.js":516,"./lv":517,"./lv.js":517,"./me":518,"./me.js":518,"./mi":519,"./mi.js":519,"./mk":520,"./mk.js":520,"./ml":521,"./ml.js":521,"./mn":522,"./mn.js":522,"./mr":523,"./mr.js":523,"./ms":524,"./ms-my":525,"./ms-my.js":525,"./ms.js":524,"./mt":526,"./mt.js":526,"./my":527,"./my.js":527,"./nb":528,"./nb.js":528,"./ne":529,"./ne.js":529,"./nl":530,"./nl-be":531,"./nl-be.js":531,"./nl.js":530,"./nn":532,"./nn.js":532,"./oc-lnc":533,"./oc-lnc.js":533,"./pa-in":534,"./pa-in.js":534,"./pl":535,"./pl.js":535,"./pt":536,"./pt-br":537,"./pt-br.js":537,"./pt.js":536,"./ro":538,"./ro.js":538,"./ru":539,"./ru.js":539,"./sd":540,"./sd.js":540,"./se":541,"./se.js":541,"./si":542,"./si.js":542,"./sk":543,"./sk.js":543,"./sl":544,"./sl.js":544,"./sq":545,"./sq.js":545,"./sr":546,"./sr-cyrl":547,"./sr-cyrl.js":547,"./sr.js":546,"./ss":548,"./ss.js":548,"./sv":549,"./sv.js":549,"./sw":550,"./sw.js":550,"./ta":551,"./ta.js":551,"./te":552,"./te.js":552,"./tet":553,"./tet.js":553,"./tg":554,"./tg.js":554,"./th":555,"./th.js":555,"./tk":556,"./tk.js":556,"./tl-ph":557,"./tl-ph.js":557,"./tlh":558,"./tlh.js":558,"./tr":559,"./tr.js":559,"./tzl":560,"./tzl.js":560,"./tzm":561,"./tzm-latn":562,"./tzm-latn.js":562,"./tzm.js":561,"./ug-cn":563,"./ug-cn.js":563,"./uk":564,"./uk.js":564,"./ur":565,"./ur.js":565,"./uz":566,"./uz-latn":567,"./uz-latn.js":567,"./uz.js":566,"./vi":568,"./vi.js":568,"./x-pseudo":569,"./x-pseudo.js":569,"./yo":570,"./yo.js":570,"./zh-cn":571,"./zh-cn.js":571,"./zh-hk":572,"./zh-hk.js":572,"./zh-mo":573,"./zh-mo.js":573,"./zh-tw":574,"./zh-tw.js":574};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=582},583:function(t,e,r){"use strict";r(7),r(10),r(15),r(16);var n=r(2),o=(r(38),r(50),r(24),r(9),r(32),r(63),r(202),r(19),r(35),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(45),r(8),r(279),r(1)),c=r(90),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(r,n){return r[t+Object(l.z)(n)]=e(),r}),{})}var j=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:j}})),y=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},w=m("alignContent",(function(){return{type:String,default:null,validator:O}})),k={align:Object.keys(x),justify:Object.keys(_),alignContent:Object.keys(w)},C={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,r){var n=C[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},x),{},{justify:{type:String,default:null,validator:y}},_),{},{alignContent:{type:String,default:null,validator:O}},w),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),P.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},584:function(t,e,r){var content=r(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("e23b7040",content,!0,{sourceMap:!1})},585:function(t,e,r){"use strict";r.r(e);var n=r(75),o=r(44),c=r(218),l=r(104),d=Object(o.a)({data:function(){return{value:"0",categoryId:l.b.id}},computed:Object(n.c)(["categories"]),methods:{createExpense:function(){return{id:Object(c.b)(),categoryId:this.categoryId,value:parseInt(this.value)}}}}),v=r(34),f=r(39),h=r.n(f),m=r(596),j=r(219),x=r(125),y=r(37),_=r(583),O=r(664),w=r(433),k=r(658),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-text-field",{attrs:{type:"number",label:t.$t("misc.costs")},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),r("v-select",{attrs:{items:t.categories,"item-value":"id",label:t.$tc("domain.category.title",1),dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.$t(r.name))+"\n    ")]}},{key:"item",fn:function(e){var n=e.item,o=e.attrs,c=e.on;return[r("v-list-item",t._g(t._b({},"v-list-item",o,!1),c),[r("v-list-item-content",[r("v-list-item-title",[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("span",[t._v(t._s(t.$t(n.name)))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-badge",{attrs:{inline:"",color:n.color}})],1)],1)],1)],1)]}}]),model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}}),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:t.value<1},on:{click:function(e){t.$emit("confirm",t.createExpense())}}},[t._v(t._s(t.$t("actions.create")))])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBadge:m.a,VBtn:j.a,VListItem:x.a,VListItemContent:y.a,VListItemTitle:y.b,VRow:_.a,VSelect:O.a,VSpacer:w.a,VTextField:k.a})},586:function(t,e,r){"use strict";r.r(e);r(49),r(25);var n=r(44),o=r(216),c=Object(n.a)({props:{expenses:{type:Array,required:!0}},computed:{expenseChartData:function(){var t=this,e=this.$store.state.categories,r=this.expenses,n=Object(o.d)(Object(o.c)(r,e));return{labels:e.map((function(e){return t.$t(e.name)})),datasets:[{label:this.$tc("domain.category.title",e.length),backgroundColor:e.map((function(t){return t.color})),data:n.map((function(element){return element.value}))}]}},barChartStyles:function(){return{margin:"auto",position:"relative",width:"min(99%, ".concat(12*this.$store.state.categories.length,"rem)"),height:"24rem"}},pieChartStyles:function(){return{margin:"auto",position:"relative",width:"min(99%, 24rem)"}}}}),l=r(34),d=r(39),v=r.n(d),f=r(593),h=r(583),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{sm:"6",md:"6",lg:"4","align-self":"center"}},[r("pie-chart",{attrs:{"chart-data":t.expenseChartData,styles:t.pieChartStyles}})],1),t._v(" "),r("v-col",{attrs:{sm:"6",md:"6",lg:"8","align-self":"center"}},[r("bar-chart",{attrs:{"chart-data":t.expenseChartData,styles:t.barChartStyles}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{PieChart:r(580).default,BarChart:r(581).default}),v()(component,{VCol:f.a,VRow:h.a})},587:function(t,e,r){"use strict";r.r(e);var n=r(44),o=r(216),c=Object(n.a)({props:{expenses:{type:Array,required:!0}},computed:{mappedExpenses:function(){var t=this.$store.state.categories;return Object(o.b)(this.expenses,t)}}}),l=r(34),d=r(39),v=r.n(d),f=r(219),h=r(163),m=r(193),j=r(125),x=r(194),y=r(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("v-list",[r("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0===t.mappedExpenses.length,expression:"mappedExpenses.length === 0"}]},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("misc.empty-list")))])],1)],1),t._v(" "),t._l(t.mappedExpenses,(function(element){return r("v-list-item",{key:element.expense.id},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t(element.category.name))+", "+t._s(element.expense.value))])],1),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{color:"red","x-small":"",fab:"",depressed:""},on:{click:function(e){return t.$emit("delete-expense",element.expense)}}},[r("v-icon",{domProps:{textContent:t._s("mdi-delete")}})],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VIcon:h.a,VList:m.a,VListItem:j.a,VListItemAction:x.a,VListItemContent:y.a,VListItemTitle:y.b})},593:function(t,e,r){"use strict";r(7),r(10),r(15),r(16);var n=r(2),o=(r(31),r(9),r(32),r(63),r(202),r(19),r(35),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(45),r(38),r(8),r(70),r(279),r(1)),c=r(90),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(l.z)(e)]={type:[String,Number],default:null},t}),{}),j=f.reduce((function(t,e){return t["order"+Object(l.z)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(j)};function y(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=_.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var n=r[t],o=y(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),_.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},594:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},596:function(t,e,r){"use strict";r(9),r(7),r(10),r(15),r(8),r(16);var n=r(91),o=r(2),c=(r(31),r(577),r(163)),l=r(46),d=r(27),v=r(59),f=r(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=r(100),m=r(11),j=r(0),x=["aria-atomic","aria-label","aria-live","role","title"];function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(m.a)(l.a,Object(h.b)(["left","bottom"]),d.a,v.a,f).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(j.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(j.o)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(c.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(j.o)(this)],o=this.$attrs,c=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(n.a)(o,x));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:c,class:this.classes},r)}})},597:function(t,e,r){"use strict";r.r(e);var n=r(44),o=r(75),c=Object(n.a)({props:{monthId:{type:String,required:!0}},computed:{month:function(){var t=this.$store.getters.monthById(this.monthId);if(void 0!==t)return t;var e={id:this.monthId,expenses:[]};return this.$store.commit("addMonth",e),e}},methods:Object(o.b)(["addExpenseToMonth","removeExpenseFromMonth"])}),l=r(34),d=r(39),v=r.n(d),f=r(579),h=r(575),m=r(419),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v(t._s(t.$d(new Date(t.month.id),"no-day")))]),t._v(" "),r("v-card-text",[r("expense-form",{on:{confirm:function(e){return t.addExpenseToMonth({month:t.month,expense:e})}}})],1),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("expense-chart",{attrs:{expenses:t.month.expenses}}),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("expense-list",{attrs:{expenses:t.month.expenses},on:{"delete-expense":function(e){return t.removeExpenseFromMonth({month:t.month,expense:e})}}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ExpenseForm:r(585).default,ExpenseChart:r(586).default,ExpenseList:r(587).default}),v()(component,{VCard:f.a,VCardText:h.a,VCardTitle:h.b,VDivider:m.a})},666:function(t,e,r){"use strict";r.r(e);var n=r(44),o=r(131),c=r(218),l=Object(n.a)({data:function(){return{currentMonth:Object(c.a)()}},head:function(){return{title:this.$t(o.a.home.title)}}}),d=r(34),v=r(39),f=r.n(v),h=r(593),m=r(583),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",[r("month-overview",{attrs:{"month-id":t.currentMonth}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{MonthOverview:r(597).default}),f()(component,{VCol:h.a,VRow:m.a})}}]);