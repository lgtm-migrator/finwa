(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{583:function(t,e,r){"use strict";r.r(e);r(11),r(7),r(12),r(15),r(10),r(16);var n=r(2),c=r(53),o=r(73),l=["compact","default","fill"];function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(c.a)({data:function(){return{layoutOptions:l}},computed:f({},Object(o.c)(["layout"])),methods:f({},Object(o.b)(["setLayout"]))}),v=r(41),j=r(44),d=r.n(j),w=r(269),P=r(425),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn-toggle",{attrs:{value:t.layout,borderless:"",dense:"",mandatory:""}},t._l(t.layoutOptions,(function(e){return r("v-btn",{key:e,on:{click:function(r){return t.setLayout(e)}}},[t._v(t._s(t.$t("layout."+e)))])})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:w.a,VBtnToggle:P.a})},625:function(t,e,r){"use strict";r.r(e);r(11),r(7),r(12),r(15),r(10),r(16);var n=r(2),c=r(53),o=r(73);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O=Object(c.a)({methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["resetData"]))}),f=r(41),y=r(44),v=r.n(y),j=r(269),d=r(581),w=r(575),P=r(616),component=Object(f.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",[r("v-card",[r("v-card-title",[t._v(t._s(t.$t("layout.title")))]),t._v(" "),r("v-card-actions",[r("layout-selection")],1)],1),t._v(" "),r("v-card",[r("v-card-title",[t._v(t._s(t.$t("settings.advanced")))]),t._v(" "),r("v-card-actions",[r("v-btn",{on:{click:function(e){return t.resetData()}}},[t._v(t._s(t.$t("actions.reset-data")))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{LayoutSelection:r(583).default}),v()(component,{VBtn:j.a,VCard:d.a,VCardActions:w.a,VCardTitle:w.b,VCol:P.a})}}]);