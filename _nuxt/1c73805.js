(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8],{589:function(t,e,n){"use strict";n.r(e);var r=n(57),o=["compact","default","fill"],l=Object(r.a)({data:function(){return{layoutOptions:o}},computed:{layout:{get:function(){return this.$store.state.layout},set:function(t){this.$store.commit("setLayout",t)}}}}),c=n(32),v=n(33),f=n.n(v),m=n(123),d=n(28),y=n(629),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",[n("v-list-item-content",[n("v-select",{attrs:{items:t.layoutOptions,label:t.$t("layout.title"),dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.$t("layout."+n))+"\n      ")]}},{key:"item",fn:function(e){var r=e.item,o=e.attrs,l=e.on;return[n("v-list-item",t._g(t._b({},"v-list-item",o,!1),l),[n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(t.$t("layout."+r))+"\n            ")])],1)],1)]}}]),model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VListItem:m.a,VListItemContent:d.a,VListItemTitle:d.b,VSelect:y.a})},631:function(t,e,n){"use strict";n.r(e);n(10),n(8),n(11),n(14),n(9),n(15);var r=n(1),o=n(57),l=n(92),c=n(149);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=Object(o.a)({head:function(){return{title:this.$t(c.a.settings.title)}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["resetData"]))}),m=n(32),d=n(33),y=n.n(d),O=n(299),_=n(206),h=n(123),j=n(28),w=n(208),$=n(421),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{width:"100%",elevation:"6",subheader:""}},[n("v-list-item-group",[n("v-subheader",[t._v(t._s(t.$t("settings.appearance")))]),t._v(" "),n("layout-selection"),t._v(" "),n("language-selection"),t._v(" "),n("theme-selection")],1),t._v(" "),n("v-list-item-group",[n("v-subheader",[t._v(t._s(t.$t("settings.advanced")))]),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-btn",{attrs:{color:"red"},on:{click:function(e){return t.resetData()}}},[t._v(t._s(t.$t("actions.reset-data")))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{LayoutSelection:n(589).default,LanguageSelection:n(304).default,ThemeSelection:n(305).default}),y()(component,{VBtn:O.a,VList:_.a,VListItem:h.a,VListItemContent:j.a,VListItemGroup:w.a,VSubheader:$.a})}}]);