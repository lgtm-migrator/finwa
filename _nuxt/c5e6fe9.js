(window.webpackJsonp=window.webpackJsonp||[]).push([[43,30],{470:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c}));var r=e(472);function o(object){return Object(r.a)(object)}function c(object){return Object(r.b)(object)}},472:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c}));e(27);function r(object){return void 0!==object&&void 0!==object.name&&void 0!==object.value}function o(object){return r(object)&&void 0!==object&&void 0!==object.monthId}function c(object){return r(object)&&void 0!==object.startingMonthId&&void 0!==object.frequency}},622:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return l})),e.d(n,"c",(function(){return d})),e.d(n,"f",(function(){return j})),e.d(n,"e",(function(){return f}));e(20),e(70);function r(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}var o="N/A";function c(t){var n;return null!==(n=t.value)&&void 0!==n?n:o}function l(t,data){var n;return void 0===t[0].datasetIndex||void 0===data.datasets?o:null!==(n=data.datasets[t[0].datasetIndex].label)&&void 0!==n?n:o}function d(t){var n;return null!==(n=t.value)&&void 0!==n?n:o}function j(t,data){var n,e;return void 0===t[0].index||void 0===data.labels?o:null!==(e=null===(n=data.labels[t[0].index])||void 0===n?void 0:n.toString())&&void 0!==e?e:o}function f(t,data){var n,e;if(void 0===t.index||void 0===data.datasets)return o;var r=data.datasets[0];return void 0===r.data?o:null!==(e=null===(n=r.data[t.index])||void 0===n?void 0:n.toString())&&void 0!==e?e:o}},623:function(t,n,e){"use strict";e.d(n,"a",(function(){return v})),e.d(n,"b",(function(){return h})),e.d(n,"c",(function(){return k})),e.d(n,"d",(function(){return O})),e.d(n,"e",(function(){return C}));var r=e(50),o=e(11),c=(e(10),e(46),e(27),e(26),e(295),e(296),e(116)),l=e.n(c),d=e(470),j=e(33),f=e(141);function m(t){return"".concat(t,"10")}function v(t,n,e){var data=Object(f.c)(Object(f.b)(t,n)).filter((function(t){return t.value>0}));return{labels:data.map((function(t){return e.t(t.category.name)})),datasets:[{label:e.tc("category.title",n.length),backgroundColor:data.map((function(element){return element.category.color})),borderColor:l.a.shades.transparent,data:data.map((function(element){return element.value}))}]}}function h(t,n){var e=t.reduce((function(t,n){var e=Object(o.a)(t,2),c=e[0],l=e[1];return Object(d.a)(n)?[[].concat(Object(r.a)(c),[n]),l]:Object(d.b)(n)?[c,[].concat(Object(r.a)(l),[n])]:[c,l]}),[[],[]]),c=Object(o.a)(e,2),f=c[0],m=c[1],data=[{label:n.tc("income.one-time",f.length),backGroundColor:l.a.green.base,borderColor:l.a.shades.transparent,value:Object(j.b)(f,(function(t){return t.value}))},{label:n.tc("income.recurring",m.length),backGroundColor:l.a.blue.base,borderColor:l.a.shades.transparent,value:Object(j.b)(m,(function(t){return t.value}))}].filter((function(t){return t.value>0}));return{labels:data.map((function(element){return element.label})),datasets:[{label:n.tc("income.title",2),backgroundColor:data.map((function(element){return element.backGroundColor})),borderColor:data.map((function(element){return element.borderColor})),data:data.map((function(element){return element.value}))}]}}function k(t,n,e,o){var c=t.map((function(t){return Object(f.c)(Object(f.b)([].concat(Object(r.a)(Object(j.c)(t.expenses)),Object(r.a)(Object(f.a)(t.id,e))),n))})),l=n.map((function(t){var n;return{label:o.t(t.name),borderColor:t.color,backgroundColor:"".concat(t.color,"10"),data:null===(n=c.flatMap((function(n){return n.filter((function(n){return n.category.id===t.id}))})))||void 0===n?void 0:n.map((function(t){return t.value}))}})).filter((function(t){return t.data.some((function(t){return t>0}))}));return{labels:t.map((function(t){return o.d(new Date(t.id),"month")})),datasets:l}}function O(t,n,e){var r=t.map((function(t){return Object(j.b)(Object(j.c)(t.incomes),(function(t){return t.value}))})),o=t.map((function(t){return Object(j.b)(Object(f.a)(t.id,n),(function(t){return t.value}))})),c={label:e.tc("income.one-time",2),backgroundColor:m(l.a.green.base),borderColor:l.a.green.base,data:r},d={label:e.tc("income.recurring",2),backgroundColor:m(l.a.blue.base),borderColor:l.a.blue.base,data:o};return{labels:t.map((function(t){return e.d(new Date(t.id),"month")})),datasets:[c,d]}}function C(t,n,e,o){var c=t.map((function(t){return Object(j.b)([].concat(Object(r.a)(Object(j.c)(t.expenses)),Object(r.a)(Object(f.a)(t.id,n))),(function(t){return t.value}))})),d=t.map((function(t){return Object(j.b)([].concat(Object(r.a)(Object(j.c)(t.incomes)),Object(r.a)(Object(f.a)(t.id,e))),(function(t){return t.value}))})),v=c.map((function(t,n){return d[n]-t})),h={label:o.tc("expense.title",2),backgroundColor:m(l.a.red.base),borderColor:l.a.red.base,data:c},k={label:o.tc("income.title",1),backgroundColor:m(l.a.blue.base),borderColor:l.a.blue.base,data:d},O={label:o.tc("misc.profit",1),backgroundColor:m(l.a.green.base),borderColor:l.a.green.base,data:v};return{labels:t.map((function(t){return o.d(new Date(t.id),"month")})),datasets:[h,k,O]}}},658:function(t,n,e){var map={"./af":484,"./af.js":484,"./ar":485,"./ar-dz":486,"./ar-dz.js":486,"./ar-kw":487,"./ar-kw.js":487,"./ar-ly":488,"./ar-ly.js":488,"./ar-ma":489,"./ar-ma.js":489,"./ar-sa":490,"./ar-sa.js":490,"./ar-tn":491,"./ar-tn.js":491,"./ar.js":485,"./az":492,"./az.js":492,"./be":493,"./be.js":493,"./bg":494,"./bg.js":494,"./bm":495,"./bm.js":495,"./bn":496,"./bn-bd":497,"./bn-bd.js":497,"./bn.js":496,"./bo":498,"./bo.js":498,"./br":499,"./br.js":499,"./bs":500,"./bs.js":500,"./ca":501,"./ca.js":501,"./cs":502,"./cs.js":502,"./cv":503,"./cv.js":503,"./cy":504,"./cy.js":504,"./da":505,"./da.js":505,"./de":506,"./de-at":507,"./de-at.js":507,"./de-ch":508,"./de-ch.js":508,"./de.js":506,"./dv":509,"./dv.js":509,"./el":510,"./el.js":510,"./en-au":511,"./en-au.js":511,"./en-ca":512,"./en-ca.js":512,"./en-gb":513,"./en-gb.js":513,"./en-ie":514,"./en-ie.js":514,"./en-il":515,"./en-il.js":515,"./en-in":516,"./en-in.js":516,"./en-nz":517,"./en-nz.js":517,"./en-sg":518,"./en-sg.js":518,"./eo":519,"./eo.js":519,"./es":520,"./es-do":521,"./es-do.js":521,"./es-mx":522,"./es-mx.js":522,"./es-us":523,"./es-us.js":523,"./es.js":520,"./et":524,"./et.js":524,"./eu":525,"./eu.js":525,"./fa":526,"./fa.js":526,"./fi":527,"./fi.js":527,"./fil":528,"./fil.js":528,"./fo":529,"./fo.js":529,"./fr":530,"./fr-ca":531,"./fr-ca.js":531,"./fr-ch":532,"./fr-ch.js":532,"./fr.js":530,"./fy":533,"./fy.js":533,"./ga":534,"./ga.js":534,"./gd":535,"./gd.js":535,"./gl":536,"./gl.js":536,"./gom-deva":537,"./gom-deva.js":537,"./gom-latn":538,"./gom-latn.js":538,"./gu":539,"./gu.js":539,"./he":540,"./he.js":540,"./hi":541,"./hi.js":541,"./hr":542,"./hr.js":542,"./hu":543,"./hu.js":543,"./hy-am":544,"./hy-am.js":544,"./id":545,"./id.js":545,"./is":546,"./is.js":546,"./it":547,"./it-ch":548,"./it-ch.js":548,"./it.js":547,"./ja":549,"./ja.js":549,"./jv":550,"./jv.js":550,"./ka":551,"./ka.js":551,"./kk":552,"./kk.js":552,"./km":553,"./km.js":553,"./kn":554,"./kn.js":554,"./ko":555,"./ko.js":555,"./ku":556,"./ku.js":556,"./ky":557,"./ky.js":557,"./lb":558,"./lb.js":558,"./lo":559,"./lo.js":559,"./lt":560,"./lt.js":560,"./lv":561,"./lv.js":561,"./me":562,"./me.js":562,"./mi":563,"./mi.js":563,"./mk":564,"./mk.js":564,"./ml":565,"./ml.js":565,"./mn":566,"./mn.js":566,"./mr":567,"./mr.js":567,"./ms":568,"./ms-my":569,"./ms-my.js":569,"./ms.js":568,"./mt":570,"./mt.js":570,"./my":571,"./my.js":571,"./nb":572,"./nb.js":572,"./ne":573,"./ne.js":573,"./nl":574,"./nl-be":575,"./nl-be.js":575,"./nl.js":574,"./nn":576,"./nn.js":576,"./oc-lnc":577,"./oc-lnc.js":577,"./pa-in":578,"./pa-in.js":578,"./pl":579,"./pl.js":579,"./pt":580,"./pt-br":581,"./pt-br.js":581,"./pt.js":580,"./ro":582,"./ro.js":582,"./ru":583,"./ru.js":583,"./sd":584,"./sd.js":584,"./se":585,"./se.js":585,"./si":586,"./si.js":586,"./sk":587,"./sk.js":587,"./sl":588,"./sl.js":588,"./sq":589,"./sq.js":589,"./sr":590,"./sr-cyrl":591,"./sr-cyrl.js":591,"./sr.js":590,"./ss":592,"./ss.js":592,"./sv":593,"./sv.js":593,"./sw":594,"./sw.js":594,"./ta":595,"./ta.js":595,"./te":596,"./te.js":596,"./tet":597,"./tet.js":597,"./tg":598,"./tg.js":598,"./th":599,"./th.js":599,"./tk":600,"./tk.js":600,"./tl-ph":601,"./tl-ph.js":601,"./tlh":602,"./tlh.js":602,"./tr":603,"./tr.js":603,"./tzl":604,"./tzl.js":604,"./tzm":605,"./tzm-latn":606,"./tzm-latn.js":606,"./tzm.js":605,"./ug-cn":607,"./ug-cn.js":607,"./uk":608,"./uk.js":608,"./ur":609,"./ur.js":609,"./uz":610,"./uz-latn":611,"./uz-latn.js":611,"./uz.js":610,"./vi":612,"./vi.js":612,"./x-pseudo":613,"./x-pseudo.js":613,"./yo":614,"./yo.js":614,"./zh-cn":615,"./zh-cn.js":615,"./zh-hk":616,"./zh-hk.js":616,"./zh-mo":617,"./zh-mo.js":617,"./zh-tw":618,"./zh-tw.js":618};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=658},681:function(t,n,e){"use strict";e.r(n);var r=e(631),o=e(37),c=e(622),l=Object(o.a)({extends:r.b,mixins:[r.d.reactiveProp],computed:{chartOptions:function(){var t=Object(c.b)(this.$vuetify),n=t.fontColor,e=t.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:n}}],yAxes:[{gridLines:{display:!0,color:e,zeroLineColor:e},ticks:{beginAtZero:!0,fontColor:n}}]},legend:{labels:{fontColor:n}},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{title:c.d,label:c.c}}}}},watch:{chartOptions:function(t){this.render(t)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(t){this.renderChart(this.chartData,t)}}}),d=e(25),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);n.default=component.exports},717:function(t,n,e){"use strict";e.r(n);var r=e(37),o=e(623),c=Object(r.a)({props:{height:{type:String,default:"20rem"}},computed:{profitChartData:function(){var t=this.$store.getters,n=t["months/sorted"](100),e=t["recurringExpenses/recurringExpenses"],r=t["recurringIncomes/recurringIncomes"];return Object(o.e)(n,e,r,this.$i18n)},lineChartStyles:function(){return{margin:"auto",position:"relative",width:"99%",height:this.height}}}}),l=e(25),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("line-chart",{attrs:{"chart-data":t.profitChartData,styles:t.lineChartStyles}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{LineChart:e(681).default})}}]);