(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1103:function(t,e,n){"use strict";n.r(e);var r=n(638),o=n(137),l=n(279),d=n(280),c=n(186),f=n(25),m=n(160),y=n(651),_={name:"NavDrawer",props:{isFixed:{type:Boolean,default:!0},isTemporary:{type:Boolean,default:!0},isAbsolute:{type:Boolean,default:!1},isPermanent:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}}},data:function(){return{clipped:!1,fixed:!1,drawer:!1}},methods:{changeDrawer:function(data){this.drawer=data}}},w=n(61),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e(y.a,{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:t.isFixed,temporary:t.isTemporary,absolute:t.isAbsolute,permanent:t.isPermanent},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("NuxtLink",{attrs:{to:{name:"index"}}},[e("img",{staticClass:"mt-1 ml-15",attrs:{src:n(141),height:"36",alt:"E-KB"}})]),t._v(" "),e(r.a),t._v(" "),e(l.a,{attrs:{dense:"",nav:""}},t._l(t.items,(function(n){return e(d.a,{key:n.text,attrs:{"prepend-icon":n.icon_alt},scopedSlots:t._u([{key:"activator",fn:function(){return[e(f.a,[e(f.c,{domProps:{textContent:t._s(n.title)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(n.children,(function(n,i){return e(c.a,{key:i,attrs:{link:"",to:n.to}},[e(f.c,{domProps:{textContent:t._s(n.title)}}),t._v(" "),n.icon?e(m.a,[e(o.a,{domProps:{textContent:t._s(n.icon)}})],1):t._e()],1)}))],2)})),1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);