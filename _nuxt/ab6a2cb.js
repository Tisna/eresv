(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{667:function(t,e,n){"use strict";n(303);var r=n(304);e.a=Object(r.a)("layout")},669:function(t,e,n){"use strict";n(303);var r=n(304);e.a=Object(r.a)("flex")},672:function(t,e,n){"use strict";var r=n(3),o=(n(48),n(63),n(305),n(13),n(6),n(12),n(54),n(102),n(14),n(11),n(16),n(17),n(8)),l=n(114),d=n(139);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},705:function(t,e,n){"use strict";n.r(e);var r=n(111),o=n(128),l=n(53),d=n(1056),c=n(669),f=n(672),m=n(137),h=n(667),v=n(639),_=n(301),y=n(199),w=(n(84),n(6),n(44),n(660),n(54),n(12),{name:"FormIn",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:[],defaultForm:{},entries:this.employee,isLoading:!1,model:null,search:null,disabled:!0,leaveLists:[]}},computed:{items:function(){return this.entries.map((function(t){var e=t.Name;return Object.assign({},t,{name:e})}))}},watch:{search:function(t){this.getDataEmployee()}},methods:{changeSelect:function(){this.form.for_self&&(this.disabled=!1)},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/master/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.occupation=this.model.JobPosition,this.form.company=this.model.Company,this.form.address=this.model.AlamatKTP,this.form.department=this.model.Department,this.form.no_hp=this.model.MobilePhone},setForm:function(form,t,e,n){var r=this;if(this.httpMethod=t,this.disabled="patch"===t,this.form=Object.assign({},form),this.form.for_self=e,"post"===t){var o=new Date,dd=String(o.getDate()).padStart(2,"0"),l=String(o.getMonth()+1).padStart(2,"0"),d=o.getFullYear();o=d+"-"+l+"-"+dd,this.form.paper_date=o,this.$refs.childDetails.setDataToDetails([]),this.$refs.childDetails.setDataToHttpMethod(t)}else this.$refs.childDetails.setDataToDetails(n),this.$refs.childDetails.setDataToHttpMethod(t),this.display=!0,this.$emit("leaveList",this.form.id_card),setTimeout((function(){r.form=Object.assign({},form),r.form.for_self=e}),300)},close:function(){this.$emit("close")},save:function(){var t=this,e={},details=this.$refs.childDetails.getDetailSourceData();details.forEach((function(n,r){t.$refs.childDetails.checkEmptyRow(r)||(e[r]=n)})),this.$emit("save",{form:this.form,defaultForm:this.defaultForm,details:details})}}}),x=n(61),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e(o.a,[e(l.d,[e("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}}),t._v(" "),e(_.a),t._v(" "),e(r.a,{attrs:{icon:"",dark:"",color:"red"},on:{click:t.close}},[e(m.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(l.c,[e(f.a,[e(h.a,{attrs:{wrap:""}},[e(c.a,{staticClass:"d-flex",attrs:{md12:""}},[e(h.a,{attrs:{wrap:""}},[e("div",{staticClass:"scroll-container-mini"},[e("LazyPaperTableFormInVisitor",{ref:"childDetails"})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[e("div",{staticClass:"mt-2 mb-2"},[e(r.a,{staticClass:"white--text",attrs:{small:"",disabled:t.disabled,color:"green darken-1",elevation:"0"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[t._v("\n                  Add Line\n                ")])],1)]),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Keperluan Masuk Kawasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[e(v.a,{ref:"menu3",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"Periode Tinggal di Kawasan","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.period_stay,callback:function(e){t.$set(t.form,"period_stay",e)},expression:"form.period_stay"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),e(d.a,{attrs:{"no-title":"",readonly:t.disabled},on:{input:function(e){t.menu3=!1}},model:{value:t.form.period_stay,callback:function(e){t.$set(t.form,"period_stay",e)},expression:"form.period_stay"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[e(v.a,{ref:"menu1",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"Jadwal Masuk Kawasan","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(d.a,{attrs:{"no-title":"",readonly:t.disabled},on:{input:function(e){t.menu1=!1}},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Transportasi",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.transportation,callback:function(e){t.$set(t.form,"transportation",e)},expression:"form.transportation"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Jalur",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.route,callback:function(e){t.$set(t.form,"route",e)},expression:"form.route"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[e(v.a,{ref:"menu2",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(d.a,{attrs:{readonly:"","no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(l.a,[e(_.a),t._v(" "),e(r.a,{attrs:{color:"green darken-1",small:"",dark:"",disabled:t.disabled,loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);