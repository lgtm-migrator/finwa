(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8,21],{449:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return j}));n(19),n(70);function r(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}var o="N/A";function c(t){var e;return null!==(e=t.value)&&void 0!==e?e:o}function l(t,data){var e;return void 0===t[0].datasetIndex||void 0===data.datasets?o:null!==(e=data.datasets[t[0].datasetIndex].label)&&void 0!==e?e:o}function f(t){var e;return null!==(e=t.value)&&void 0!==e?e:o}function d(t,data){var e,n;return void 0===t[0].index||void 0===data.labels?o:null!==(n=null===(e=data.labels[t[0].index])||void 0===e?void 0:e.toString())&&void 0!==n?n:o}function j(t,data){var e,n;if(void 0===t.index||void 0===data.datasets)return o;var r=data.datasets[0];return void 0===r.data?o:null!==(n=null===(e=r.data[t.index])||void 0===e?void 0:e.toString())&&void 0!==n?n:o}},588:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return h}));n(8),n(7),n(15),n(9),n(16);var r=n(2),o=(n(47),n(10),n(25),n(592),n(593),n(110)),c=n(69);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){return t.map((function(t){var n;return{expense:t,category:null!==(n=e[t.categoryId])&&void 0!==n?n:o.a.uncategorized}}))}function j(t,e){return e.map((function(e){return{category:e,expenses:t.filter((function(t){return t.categoryId===e.id}))}}))}function v(t){return t.map((function(t){return f(f({},t),{},{value:Object(c.a)(t.expenses.map((function(t){return t.value})))})}))}function h(t,e,n){var r=t.map((function(t){return v(j(Object(c.b)(t.expenses),e))})),o=e.map((function(t){var e;return{label:n.t(t.name),borderColor:t.color,backgroundColor:"".concat(t.color,"10"),data:null===(e=r.flatMap((function(e){return e.filter((function(e){return e.category.id===t.id}))})))||void 0===e?void 0:e.map((function(t){return t.value}))}}));return{labels:t.map((function(t){return n.d(new Date(t.id),"month")})),datasets:o}}},592:function(t,e,n){"use strict";var r=n(4),o=n(283),c=n(66),l=n(56),f=n(29),d=n(130);r({target:"Array",proto:!0},{flatMap:function(t){var e,n=c(this),r=l(n.length);return f(t),(e=d(n,0)).length=o(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},593:function(t,e,n){n(109)("flatMap")},596:function(t,e,n){"use strict";n(7),n(10),n(15),n(16);var r=n(2),o=(n(33),n(48),n(24),n(8),n(31),n(58),n(205),n(19),n(34),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(38),n(9),n(282),n(0)),c=n(91),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=["sm","md","lg","xl"],v=["start","end","center"];function h(t,e){return j.reduce((function(n,r){return n[t+Object(l.z)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},m=h("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:O}})),k=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},C=h("alignContent",(function(){return{type:String,default:null,validator:k}})),x={align:Object.keys(m),justify:Object.keys(w),alignContent:Object.keys(C)},S={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var z=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},m),{},{justify:{type:String,default:null,validator:O}},w),{},{alignContent:{type:String,default:null,validator:k}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=z.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=P(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),z.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},599:function(t,e,n){"use strict";n.r(e);n(32);var r=n(589),o=n(52),c=n(449),l=Object(o.a)({extends:r.c,mixins:[r.d.reactiveProp],props:{cutoutPercentage:{type:Number,default:50}},computed:{chartOptions:function(){var t=Object(c.b)(this.$vuetify).fontColor;return{responsive:!0,cutoutPercentage:this.cutoutPercentage,legend:{labels:{fontColor:t}},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{title:c.f,label:c.e}}}}},watch:{chartOptions:function(t){this.render(t)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(t){this.renderChart(this.chartData,t)}}}),f=n(37),component=Object(f.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},600:function(t,e,n){"use strict";n.r(e);var r=n(589),o=n(52),c=n(449),l=Object(o.a)({extends:r.a,mixins:[r.d.reactiveProp],computed:{chartOptions:function(){var t=Object(c.b)(this.$vuetify),e=t.fontColor,n=t.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:e}}],yAxes:[{gridLines:{display:!0,color:n,zeroLineColor:n},ticks:{beginAtZero:!0,fontColor:e}}]},legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{label:c.a}}}}},watch:{chartOptions:function(t){this.render(t)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(t){this.renderChart(this.chartData,t)}}}),f=n(37),component=Object(f.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},601:function(t,e,n){var map={"./af":451,"./af.js":451,"./ar":452,"./ar-dz":453,"./ar-dz.js":453,"./ar-kw":454,"./ar-kw.js":454,"./ar-ly":455,"./ar-ly.js":455,"./ar-ma":456,"./ar-ma.js":456,"./ar-sa":457,"./ar-sa.js":457,"./ar-tn":458,"./ar-tn.js":458,"./ar.js":452,"./az":459,"./az.js":459,"./be":460,"./be.js":460,"./bg":461,"./bg.js":461,"./bm":462,"./bm.js":462,"./bn":463,"./bn-bd":464,"./bn-bd.js":464,"./bn.js":463,"./bo":465,"./bo.js":465,"./br":466,"./br.js":466,"./bs":467,"./bs.js":467,"./ca":468,"./ca.js":468,"./cs":469,"./cs.js":469,"./cv":470,"./cv.js":470,"./cy":471,"./cy.js":471,"./da":472,"./da.js":472,"./de":473,"./de-at":474,"./de-at.js":474,"./de-ch":475,"./de-ch.js":475,"./de.js":473,"./dv":476,"./dv.js":476,"./el":477,"./el.js":477,"./en-au":478,"./en-au.js":478,"./en-ca":479,"./en-ca.js":479,"./en-gb":480,"./en-gb.js":480,"./en-ie":481,"./en-ie.js":481,"./en-il":482,"./en-il.js":482,"./en-in":483,"./en-in.js":483,"./en-nz":484,"./en-nz.js":484,"./en-sg":485,"./en-sg.js":485,"./eo":486,"./eo.js":486,"./es":487,"./es-do":488,"./es-do.js":488,"./es-mx":489,"./es-mx.js":489,"./es-us":490,"./es-us.js":490,"./es.js":487,"./et":491,"./et.js":491,"./eu":492,"./eu.js":492,"./fa":493,"./fa.js":493,"./fi":494,"./fi.js":494,"./fil":495,"./fil.js":495,"./fo":496,"./fo.js":496,"./fr":497,"./fr-ca":498,"./fr-ca.js":498,"./fr-ch":499,"./fr-ch.js":499,"./fr.js":497,"./fy":500,"./fy.js":500,"./ga":501,"./ga.js":501,"./gd":502,"./gd.js":502,"./gl":503,"./gl.js":503,"./gom-deva":504,"./gom-deva.js":504,"./gom-latn":505,"./gom-latn.js":505,"./gu":506,"./gu.js":506,"./he":507,"./he.js":507,"./hi":508,"./hi.js":508,"./hr":509,"./hr.js":509,"./hu":510,"./hu.js":510,"./hy-am":511,"./hy-am.js":511,"./id":512,"./id.js":512,"./is":513,"./is.js":513,"./it":514,"./it-ch":515,"./it-ch.js":515,"./it.js":514,"./ja":516,"./ja.js":516,"./jv":517,"./jv.js":517,"./ka":518,"./ka.js":518,"./kk":519,"./kk.js":519,"./km":520,"./km.js":520,"./kn":521,"./kn.js":521,"./ko":522,"./ko.js":522,"./ku":523,"./ku.js":523,"./ky":524,"./ky.js":524,"./lb":525,"./lb.js":525,"./lo":526,"./lo.js":526,"./lt":527,"./lt.js":527,"./lv":528,"./lv.js":528,"./me":529,"./me.js":529,"./mi":530,"./mi.js":530,"./mk":531,"./mk.js":531,"./ml":532,"./ml.js":532,"./mn":533,"./mn.js":533,"./mr":534,"./mr.js":534,"./ms":535,"./ms-my":536,"./ms-my.js":536,"./ms.js":535,"./mt":537,"./mt.js":537,"./my":538,"./my.js":538,"./nb":539,"./nb.js":539,"./ne":540,"./ne.js":540,"./nl":541,"./nl-be":542,"./nl-be.js":542,"./nl.js":541,"./nn":543,"./nn.js":543,"./oc-lnc":544,"./oc-lnc.js":544,"./pa-in":545,"./pa-in.js":545,"./pl":546,"./pl.js":546,"./pt":547,"./pt-br":548,"./pt-br.js":548,"./pt.js":547,"./ro":549,"./ro.js":549,"./ru":550,"./ru.js":550,"./sd":551,"./sd.js":551,"./se":552,"./se.js":552,"./si":553,"./si.js":553,"./sk":554,"./sk.js":554,"./sl":555,"./sl.js":555,"./sq":556,"./sq.js":556,"./sr":557,"./sr-cyrl":558,"./sr-cyrl.js":558,"./sr.js":557,"./ss":559,"./ss.js":559,"./sv":560,"./sv.js":560,"./sw":561,"./sw.js":561,"./ta":562,"./ta.js":562,"./te":563,"./te.js":563,"./tet":564,"./tet.js":564,"./tg":565,"./tg.js":565,"./th":566,"./th.js":566,"./tk":567,"./tk.js":567,"./tl-ph":568,"./tl-ph.js":568,"./tlh":569,"./tlh.js":569,"./tr":570,"./tr.js":570,"./tzl":571,"./tzl.js":571,"./tzm":572,"./tzm-latn":573,"./tzm-latn.js":573,"./tzm.js":572,"./ug-cn":574,"./ug-cn.js":574,"./uk":575,"./uk.js":575,"./ur":576,"./ur.js":576,"./uz":577,"./uz-latn":578,"./uz-latn.js":578,"./uz.js":577,"./vi":579,"./vi.js":579,"./x-pseudo":580,"./x-pseudo.js":580,"./yo":581,"./yo.js":581,"./zh-cn":582,"./zh-cn.js":582,"./zh-hk":583,"./zh-hk.js":583,"./zh-mo":584,"./zh-mo.js":584,"./zh-tw":585,"./zh-tw.js":585};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=601},604:function(t,e,n){"use strict";n.r(e);n(47),n(25);var r=n(52),o=n(588),c=Object(r.a)({props:{expenses:{type:Array,required:!0}},computed:{expenseChartData:function(){var t=this,e=this.$store.getters["categories/categories"],n=this.expenses,r=Object(o.d)(Object(o.c)(n,e));return{labels:e.map((function(e){return t.$t(e.name)})),datasets:[{label:this.$tc("category.title",e.length),backgroundColor:e.map((function(t){return t.color})),data:r.map((function(element){return element.value}))}]}},barChartStyles:function(){return{margin:"auto",position:"relative",width:"99%",height:"24rem"}},pieChartStyles:function(){return{margin:"auto",position:"relative",width:"min(99%, 24rem)"}}}}),l=n(37),f=n(42),d=n.n(f),j=n(611),v=n(596),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{sm:"6",md:"6",lg:"4","align-self":"center"}},[n("pie-chart",{attrs:{"chart-data":t.expenseChartData,styles:t.pieChartStyles}})],1),t._v(" "),n("v-col",{attrs:{sm:"6",md:"6",lg:"8","align-self":"center"}},[n("bar-chart",{attrs:{"chart-data":t.expenseChartData,styles:t.barChartStyles}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{PieChart:n(599).default,BarChart:n(600).default}),d()(component,{VCol:j.a,VRow:v.a})},611:function(t,e,n){"use strict";n(7),n(10),n(15),n(16);var r=n(2),o=(n(32),n(8),n(31),n(58),n(205),n(19),n(34),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(38),n(33),n(9),n(71),n(282),n(0)),c=n(91),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=["sm","md","lg","xl"],v=j.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=j.reduce((function(t,e){return t["offset"+Object(l.z)(e)]={type:[String,Number],default:null},t}),{}),y=j.reduce((function(t,e){return t["order"+Object(l.z)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(y)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],o=O(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})}}]);