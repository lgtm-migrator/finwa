(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9,11,14],{439:function(e,t,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("fdd4ed82",content,!0,{sourceMap:!1})},440:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));n(19),n(74),n(25);var r=n(603);function o(){return Object(r.a)()}function c(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=n<10?"0".concat(n):n.toString();return"".concat(t,"-").concat(r)}},443:function(e,t,n){var content=n(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("8d571616",content,!0,{sourceMap:!1})},580:function(e,t,n){"use strict";n(439)},581:function(e,t,n){var r=n(21)(!1);r.push([e.i,"div[data-v-2575bc72]{width:clamp(0,99%,24rem)}",""]),e.exports=r},583:function(e,t,n){"use strict";n.r(t);var r=n(600),o=n(44),c=r.b.reactiveProp,l=Object(o.a)({extends:r.a,mixins:[c],mounted:function(){this.renderChart(this.chartData,{responsive:!0})}}),j=(n(580),n(34)),component=Object(j.a)(l,undefined,undefined,!1,null,"2575bc72",null);t.default=component.exports},584:function(e,t,n){"use strict";n(443)},585:function(e,t,n){var r=n(21)(!1);r.push([e.i,".expense-chart>div[data-v-16afd87e]{margin:auto}",""]),e.exports=r},587:function(e,t,n){"use strict";n.r(t);var r=n(75),o=n(44),c=n(440),l=n(104),j=Object(o.a)({data:function(){return{value:"0",categoryId:l.b.id}},computed:Object(r.c)(["categories"]),methods:{createExpense:function(){return{id:Object(c.b)(),categoryId:this.categoryId,value:parseInt(this.value)}}}}),d=n(34),m=n(39),v=n.n(m),f=n(601),h=n(218),x=n(125),y=n(37),_=n(596),k=n(670),w=n(433),O=n(664),component=Object(d.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-text-field",{attrs:{type:"number",label:e.$t("misc.costs")},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),n("v-select",{attrs:{items:e.categories,"item-value":"id",label:e.$tc("domain.category.title",1),dense:""},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(e.$t(n.name))+"\n    ")]}},{key:"item",fn:function(t){var r=t.item,o=t.attrs,c=t.on;return[n("v-list-item",e._g(e._b({},"v-list-item",o,!1),c),[n("v-list-item-content",[n("v-list-item-title",[n("v-row",{attrs:{"no-gutters":"",align:"center"}},[n("span",[e._v(e._s(e.$t(r.name)))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-badge",{attrs:{inline:"",color:r.color}})],1)],1)],1)],1)]}}]),model:{value:e.categoryId,callback:function(t){e.categoryId=t},expression:"categoryId"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",disabled:e.value<1},on:{click:function(t){e.$emit("confirm",e.createExpense())}}},[e._v(e._s(e.$t("actions.create")))])],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBadge:f.a,VBtn:h.a,VListItem:x.a,VListItemContent:y.a,VListItemTitle:y.b,VRow:_.a,VSelect:k.a,VSpacer:w.a,VTextField:O.a})},588:function(e,t,n){"use strict";n.r(t);n(49),n(26);var r=n(44),o=n(217),c=Object(r.a)({props:{expenses:{type:Array,required:!0}},computed:{expenseChartData:function(){var e=this,t=this.$store.state.categories,n=this.expenses,r=Object(o.c)(Object(o.b)(n,t));return{labels:t.map((function(t){return e.$t(t.name)})),datasets:[{label:this.$tc("domain.category.title",t.length),backgroundColor:t.map((function(e){return e.color})),data:r.map((function(element){return element.value}))}]}}}}),l=(n(584),n(34)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"expense-chart"},[n("pie-chart",{attrs:{"chart-data":e.expenseChartData}})],1)}),[],!1,null,"16afd87e",null);t.default=component.exports;installComponents(component,{PieChart:n(583).default})},589:function(e,t,n){"use strict";n.r(t);var r=n(44),o=n(217),c=Object(r.a)({props:{expenses:{type:Array,required:!0}},computed:{mappedExpenses:function(){var e=this.$store.state.categories;return Object(o.a)(this.expenses,e)}}}),l=n(34),j=n(39),d=n.n(j),m=n(218),v=n(163),f=n(193),h=n(125),x=n(194),y=n(37),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("v-list",[n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0===e.mappedExpenses.length,expression:"mappedExpenses.length === 0"}]},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.$t("misc.empty-list")))])],1)],1),e._v(" "),e._l(e.mappedExpenses,(function(element){return n("v-list-item",{key:element.expense.id},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.$t(element.category.name))+", "+e._s(element.expense.value))])],1),e._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{color:"red","x-small":"",fab:"",depressed:""},on:{click:function(t){return e.$emit("delete-expense",element.expense)}}},[n("v-icon",{domProps:{textContent:e._s("mdi-delete")}})],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VIcon:v.a,VList:f.a,VListItem:h.a,VListItemAction:x.a,VListItemContent:y.a,VListItemTitle:y.b})},597:function(e,t,n){var map={"./af":445,"./af.js":445,"./ar":446,"./ar-dz":447,"./ar-dz.js":447,"./ar-kw":448,"./ar-kw.js":448,"./ar-ly":449,"./ar-ly.js":449,"./ar-ma":450,"./ar-ma.js":450,"./ar-sa":451,"./ar-sa.js":451,"./ar-tn":452,"./ar-tn.js":452,"./ar.js":446,"./az":453,"./az.js":453,"./be":454,"./be.js":454,"./bg":455,"./bg.js":455,"./bm":456,"./bm.js":456,"./bn":457,"./bn-bd":458,"./bn-bd.js":458,"./bn.js":457,"./bo":459,"./bo.js":459,"./br":460,"./br.js":460,"./bs":461,"./bs.js":461,"./ca":462,"./ca.js":462,"./cs":463,"./cs.js":463,"./cv":464,"./cv.js":464,"./cy":465,"./cy.js":465,"./da":466,"./da.js":466,"./de":467,"./de-at":468,"./de-at.js":468,"./de-ch":469,"./de-ch.js":469,"./de.js":467,"./dv":470,"./dv.js":470,"./el":471,"./el.js":471,"./en-au":472,"./en-au.js":472,"./en-ca":473,"./en-ca.js":473,"./en-gb":474,"./en-gb.js":474,"./en-ie":475,"./en-ie.js":475,"./en-il":476,"./en-il.js":476,"./en-in":477,"./en-in.js":477,"./en-nz":478,"./en-nz.js":478,"./en-sg":479,"./en-sg.js":479,"./eo":480,"./eo.js":480,"./es":481,"./es-do":482,"./es-do.js":482,"./es-mx":483,"./es-mx.js":483,"./es-us":484,"./es-us.js":484,"./es.js":481,"./et":485,"./et.js":485,"./eu":486,"./eu.js":486,"./fa":487,"./fa.js":487,"./fi":488,"./fi.js":488,"./fil":489,"./fil.js":489,"./fo":490,"./fo.js":490,"./fr":491,"./fr-ca":492,"./fr-ca.js":492,"./fr-ch":493,"./fr-ch.js":493,"./fr.js":491,"./fy":494,"./fy.js":494,"./ga":495,"./ga.js":495,"./gd":496,"./gd.js":496,"./gl":497,"./gl.js":497,"./gom-deva":498,"./gom-deva.js":498,"./gom-latn":499,"./gom-latn.js":499,"./gu":500,"./gu.js":500,"./he":501,"./he.js":501,"./hi":502,"./hi.js":502,"./hr":503,"./hr.js":503,"./hu":504,"./hu.js":504,"./hy-am":505,"./hy-am.js":505,"./id":506,"./id.js":506,"./is":507,"./is.js":507,"./it":508,"./it-ch":509,"./it-ch.js":509,"./it.js":508,"./ja":510,"./ja.js":510,"./jv":511,"./jv.js":511,"./ka":512,"./ka.js":512,"./kk":513,"./kk.js":513,"./km":514,"./km.js":514,"./kn":515,"./kn.js":515,"./ko":516,"./ko.js":516,"./ku":517,"./ku.js":517,"./ky":518,"./ky.js":518,"./lb":519,"./lb.js":519,"./lo":520,"./lo.js":520,"./lt":521,"./lt.js":521,"./lv":522,"./lv.js":522,"./me":523,"./me.js":523,"./mi":524,"./mi.js":524,"./mk":525,"./mk.js":525,"./ml":526,"./ml.js":526,"./mn":527,"./mn.js":527,"./mr":528,"./mr.js":528,"./ms":529,"./ms-my":530,"./ms-my.js":530,"./ms.js":529,"./mt":531,"./mt.js":531,"./my":532,"./my.js":532,"./nb":533,"./nb.js":533,"./ne":534,"./ne.js":534,"./nl":535,"./nl-be":536,"./nl-be.js":536,"./nl.js":535,"./nn":537,"./nn.js":537,"./oc-lnc":538,"./oc-lnc.js":538,"./pa-in":539,"./pa-in.js":539,"./pl":540,"./pl.js":540,"./pt":541,"./pt-br":542,"./pt-br.js":542,"./pt.js":541,"./ro":543,"./ro.js":543,"./ru":544,"./ru.js":544,"./sd":545,"./sd.js":545,"./se":546,"./se.js":546,"./si":547,"./si.js":547,"./sk":548,"./sk.js":548,"./sl":549,"./sl.js":549,"./sq":550,"./sq.js":550,"./sr":551,"./sr-cyrl":552,"./sr-cyrl.js":552,"./sr.js":551,"./ss":553,"./ss.js":553,"./sv":554,"./sv.js":554,"./sw":555,"./sw.js":555,"./ta":556,"./ta.js":556,"./te":557,"./te.js":557,"./tet":558,"./tet.js":558,"./tg":559,"./tg.js":559,"./th":560,"./th.js":560,"./tk":561,"./tk.js":561,"./tl-ph":562,"./tl-ph.js":562,"./tlh":563,"./tlh.js":563,"./tr":564,"./tr.js":564,"./tzl":565,"./tzl.js":565,"./tzm":566,"./tzm-latn":567,"./tzm-latn.js":567,"./tzm.js":566,"./ug-cn":568,"./ug-cn.js":568,"./uk":569,"./uk.js":569,"./ur":570,"./ur.js":570,"./uz":571,"./uz-latn":572,"./uz-latn.js":572,"./uz.js":571,"./vi":573,"./vi.js":573,"./x-pseudo":574,"./x-pseudo.js":574,"./yo":575,"./yo.js":575,"./zh-cn":576,"./zh-cn.js":576,"./zh-hk":577,"./zh-hk.js":577,"./zh-mo":578,"./zh-mo.js":578,"./zh-tw":579,"./zh-tw.js":579};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=597},602:function(e,t,n){"use strict";n.r(t);var r=n(44),o=n(75),c=Object(r.a)({props:{monthId:{type:String,required:!0}},computed:{month:function(){var e=this.$store.getters.monthById(this.monthId);if(void 0!==e)return e;var t={id:this.monthId,expenses:[]};return this.$store.commit("addMonth",t),t}},methods:Object(o.b)(["addExpenseToMonth","removeExpenseFromMonth"])}),l=n(34),j=n(39),d=n.n(j),m=n(582),v=n(444),f=n(420),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(e._s(e.$d(new Date(e.month.id),"no-day")))]),e._v(" "),n("v-card-text",[n("expense-form",{on:{confirm:function(t){return e.addExpenseToMonth({month:e.month,expense:t})}}})],1),e._v(" "),n("v-divider",{staticClass:"my-4"}),e._v(" "),n("expense-chart",{attrs:{expenses:e.month.expenses}}),e._v(" "),n("v-divider",{staticClass:"my-4"}),e._v(" "),n("expense-list",{attrs:{expenses:e.month.expenses},on:{"delete-expense":function(t){return e.removeExpenseFromMonth({month:e.month,expense:t})}}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{ExpenseForm:n(587).default,ExpenseChart:n(588).default,ExpenseList:n(589).default}),d()(component,{VCard:m.a,VCardText:v.a,VCardTitle:v.b,VDivider:f.a})},672:function(e,t,n){"use strict";n.r(t);var r=n(44),o=n(131),c=n(440),l=Object(r.a)({data:function(){return{currentMonth:Object(c.a)()}},head:function(){return{title:this.$t(o.a.home.title)}}}),j=n(34),d=n(39),m=n.n(d),v=n(606),f=n(596),component=Object(j.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("month-overview",{attrs:{"month-id":e.currentMonth}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{MonthOverview:n(602).default}),m()(component,{VCol:v.a,VRow:f.a})}}]);