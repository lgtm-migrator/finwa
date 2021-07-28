(window.webpackJsonp=window.webpackJsonp||[]).push([[39,31],{481:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(483);function o(object){return Object(r.a)(object)}function c(object){return Object(r.b)(object)}},483:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(27);function r(object){return void 0!==object&&void 0!==object.name&&void 0!==object.value}function o(object){return r(object)&&void 0!==object&&void 0!==object.monthId}function c(object){return r(object)&&void 0!==object.startingMonthId&&void 0!==object.frequency}},507:function(t,e,n){"use strict";function r(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}n.d(e,"a",(function(){return r}))},508:function(t,e,n){"use strict";n.d(e,"a",(function(){return C})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return y}));var r=n(51),o=n(11),c=(n(10),n(46),n(27),n(24),n(303),n(304),n(119)),l=n.n(c),d=n(481),f=n(33),m=n(145),h="origin";function v(t){return"".concat(t,"10")}function C(t,e,n){var data=Object(m.c)(Object(m.b)(t,e)).filter((function(t){return t.value>0}));return{labels:data.map((function(t){return n.t(t.category.name)})),datasets:[{label:n.tc("category.title",e.length),backgroundColor:data.map((function(element){return element.category.color})),borderColor:l.a.shades.transparent,data:data.map((function(element){return element.value})),maxBarThickness:150}]}}function j(t,e){var n=t.reduce((function(t,e){var n=Object(o.a)(t,2),c=n[0],l=n[1];return Object(d.a)(e)?[[].concat(Object(r.a)(c),[e]),l]:Object(d.b)(e)?[c,[].concat(Object(r.a)(l),[e])]:[c,l]}),[[],[]]),c=Object(o.a)(n,2),m=c[0],h=c[1],data=[{label:e.tc("income.one-time",m.length),backGroundColor:l.a.green.base,borderColor:l.a.shades.transparent,value:Object(f.b)(m,(function(t){return t.value}))},{label:e.tc("income.recurring",h.length),backGroundColor:l.a.blue.base,borderColor:l.a.shades.transparent,value:Object(f.b)(h,(function(t){return t.value}))}].filter((function(t){return t.value>0}));return{labels:data.map((function(element){return element.label})),datasets:[{label:e.tc("income.title",2),backgroundColor:data.map((function(element){return element.backGroundColor})),borderColor:data.map((function(element){return element.borderColor})),data:data.map((function(element){return element.value}))}]}}function O(t,e,n,o){var c=t.map((function(t){return Object(m.c)(Object(m.b)([].concat(Object(r.a)(Object(f.c)(t.expenses)),Object(r.a)(Object(m.a)(t.id,n))),e))})),l=e.map((function(t){var e;return{label:o.t(t.name),borderColor:t.color,backgroundColor:v(t.color),data:null===(e=c.flatMap((function(e){return e.filter((function(e){return e.category.id===t.id}))})))||void 0===e?void 0:e.map((function(t){return t.value})),fill:h,tension:0}})).filter((function(t){return t.data.some((function(t){return t>0}))}));return{labels:t.map((function(t){return o.d(new Date(t.id),"month")})),datasets:l}}function k(t,e,n){var r=t.map((function(t){return Object(f.b)(Object(f.c)(t.incomes),(function(t){return t.value}))})),o=t.map((function(t){return Object(f.b)(Object(m.a)(t.id,e),(function(t){return t.value}))})),c={label:n.tc("income.one-time",2),backgroundColor:v(l.a.green.base),borderColor:l.a.green.base,data:r,fill:h,tension:0},d={label:n.tc("income.recurring",2),backgroundColor:v(l.a.blue.base),borderColor:l.a.blue.base,data:o,fill:h,tension:0};return{labels:t.map((function(t){return n.d(new Date(t.id),"month")})),datasets:[c,d]}}function y(t,e,n,o){var c=t.map((function(t){return Object(f.b)([].concat(Object(r.a)(Object(f.c)(t.expenses)),Object(r.a)(Object(m.a)(t.id,e))),(function(t){return t.value}))})),d=t.map((function(t){return Object(f.b)([].concat(Object(r.a)(Object(f.c)(t.incomes)),Object(r.a)(Object(m.a)(t.id,n))),(function(t){return t.value}))})),C=c.map((function(t,e){return d[e]-t})),j={label:o.tc("expense.title",2),backgroundColor:v(l.a.red.base),borderColor:l.a.red.base,data:c,fill:h,tension:0},O={label:o.tc("income.title",1),backgroundColor:v(l.a.blue.base),borderColor:l.a.blue.base,data:d,fill:h,tension:0},k={label:o.tc("misc.profit",1),backgroundColor:v(l.a.green.base),borderColor:l.a.green.base,data:C,fill:h,tension:0};return{labels:t.map((function(t){return o.d(new Date(t.id),"month")})),datasets:[j,O,k]}}},570:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(525),c=n(507),l=Object(r.a)({components:{LineChart:o.LineChart},props:{chartData:{type:Object,required:!0}},computed:{options:function(){var t=Object(c.a)(this.$vuetify),e=t.fontColor,n=t.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{display:!1,borderColor:"rgb(0, 0, 0, 0)"},ticks:{color:e}},y:{grace:"10%",grid:{borderColor:n,color:n},ticks:{color:e}}},plugins:{legend:{labels:{color:e}},tooltip:{displayColors:!1,enabled:!0,mode:"x"}}}}}}),d=n(26),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("line-chart",{staticClass:"responsive-graph",attrs:{"chart-data":t.chartData,options:t.options,width:100}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LineChart:n(570).default})},740:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(508),c=Object(r.a)({props:{height:{type:String,default:"20rem"}},computed:{monthlyIncomesChartData:function(){var t=this.$store.getters,e=t["months/sorted"](12),n=t["recurringIncomes/recurringIncomes"];return Object(o.d)(e,n,this.$i18n)}}}),l=n(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("line-chart",{style:"height: "+t.height+";",attrs:{"chart-data":t.monthlyIncomesChartData}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LineChart:n(570).default})}}]);