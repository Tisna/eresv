(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{282:function(t,e,o){"use strict";var r=o(209);e.a=r.a},426:function(t,e,o){"use strict";o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return v}));var r=o(444),n=o(1),l=Object(n.j)("v-card__actions"),c=Object(n.j)("v-card__subtitle"),d=Object(n.j)("v-card__text"),v=Object(n.j)("v-card__title");r.a},444:function(t,e,o){"use strict";o(9),o(5),o(7),o(14),o(8),o(15);var r=o(2),n=(o(25),o(206),o(450),o(213)),l=o(486),c=o(82),d=o(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=f({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),o=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(o,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},450:function(t,e,o){var content=o(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("e23b7040",content,!0,{sourceMap:!1})},453:function(t,e,o){var r=o(12)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},455:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(544);r({target:"Map",proto:!0,real:!0,forced:n},{deleteAll:function(){return l.apply(this,arguments)}})},456:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(85),d=o(473),v=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{every:function(t){var map=l(this),e=d(map),o=c(t,arguments.length>1?arguments[1]:void 0,3);return!v(e,(function(t,e,r){if(!o(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},457:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(54),c=o(22),d=o(81),v=o(85),f=o(155),m=o(473),h=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{filter:function(t){var map=c(this),e=m(map),o=v(t,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,l("Map"))),n=d(r.set);return h(e,(function(t,e){o(e,t,map)&&n.call(r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},458:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(85),d=o(473),v=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{find:function(t){var map=l(this),e=d(map),o=c(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,r){if(o(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},459:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(85),d=o(473),v=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{findKey:function(t){var map=l(this),e=d(map),o=c(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,r){if(o(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},460:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(473),d=o(549),v=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{includes:function(t){return v(c(l(this)),(function(e,o,r){if(d(o,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},461:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(473),d=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{keyOf:function(t){return d(c(l(this)),(function(e,o,r){if(o===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},462:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(54),c=o(22),d=o(81),v=o(85),f=o(155),m=o(473),h=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{mapKeys:function(t){var map=c(this),e=m(map),o=v(t,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,l("Map"))),n=d(r.set);return h(e,(function(t,e){n.call(r,o(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},463:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(54),c=o(22),d=o(81),v=o(85),f=o(155),m=o(473),h=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{mapValues:function(t){var map=c(this),e=m(map),o=v(t,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,l("Map"))),n=d(r.set);return h(e,(function(t,e){n.call(r,t,o(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},464:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(81),d=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{merge:function(t){for(var map=l(this),e=c(map.set),o=arguments.length,i=0;i<o;)d(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},465:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(81),d=o(473),v=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{reduce:function(t){var map=l(this),e=d(map),o=arguments.length<2,r=o?void 0:arguments[1];if(c(t),v(e,(function(e,n){o?(o=!1,r=n):r=t(r,n,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o)throw TypeError("Reduce of empty map with no initial value");return r}})},466:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(85),d=o(473),v=o(283);r({target:"Map",proto:!0,real:!0,forced:n},{some:function(t){var map=l(this),e=d(map),o=c(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,r){if(o(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},467:function(t,e,o){"use strict";var r=o(4),n=o(62),l=o(22),c=o(81);r({target:"Map",proto:!0,real:!0,forced:n},{update:function(t,e){var map=l(this),o=arguments.length;c(e);var r=map.has(t);if(!r&&o<3)throw TypeError("Updating absent value");var n=r?map.get(t):c(o>2?arguments[2]:void 0)(t,map);return map.set(t,e(n,t,map)),map}})},473:function(t,e){t.exports=function(t){return Map.prototype.entries.call(t)}},530:function(t,e,o){"use strict";var r=o(0),n=o(1);e.a=r.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.k}}})},544:function(t,e,o){"use strict";var r=o(22),n=o(81);t.exports=function(){for(var t,e=r(this),o=n(e.delete),l=!0,c=0,d=arguments.length;c<d;c++)t=o.call(e,arguments[c]),l=l&&t;return!!l}},549:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},555:function(t,e,o){"use strict";o.r(e);o(28);var r={name:"ViewResvDetails",data:function(){return{dialog:!1,buttonKey:1,buttonKey2:2,buttonKey3:3,count_attachment:0,menu1:"",menu:"",date:null,urlDelete:null,dialogLoading:!1,dialogConfirm:!1,submitLoad:!1,submitLoad2:!1,submitLoad3:!1,loading:!1,loadingPrint:!1,message:!1,success:!1,itemDivision:[],itemUserNIK:[],itemCompany:[],itemWhTo:[],itemUserWhs:[],userDivision:[],breadcrumb:[],itemReqType:["Normal","For Restock SubWH"],ItemType:["Ready Stock","Non Ready Stock","Asset","Service"],isDisable:!1,isApprovalDisable:!1,isDataSet:!1,Division:{},U_NIK:{},form:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:this.$auth.user.username,RequesterName:this.$auth.user.name,Division:this.$auth.user.department,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:"Normal",ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null,UrgentReason:null,ItemType:null,ItemTypeCheck:null,Is_Urgent:"No"}}},methods:{openDialog:function(t){this.form.CompanyName&&this.form.WhsCode?this.$refs.itemsMaster.openDialog(t):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},openResvDetails:function(t){var e=this;this.dialog=!0,this.$axios.get("/api/reservation/document/"+t).then((function(t){e.getData(t.data.data.U_DocEntry,"update")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))},openDialogLastResv:function(data){this.form.CompanyName&&this.form.WhsCode&&this.form.DocDate?this.$refs.lastResv.openDialog(data.row,data.itemCode,data.reqDate,data.whsCode,data.itemName):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},refreshData:function(){this.getData()},openAttachmentDetails:function(t){this.$refs.attachment.openAttachment(t.lineEntry,"reservation",t.row)},closeDialog:function(){this.$refs.itemsMaster.closeDialog()},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e||this.$route.query.id,n=o||this.$route.query.status,l=void 0!==this.$route.query.entry?this.$route.query.entry:0;this.isApprovalDisable="add"===this.$route.query.status,"update"===n?(this.dialogLoading=!0,this.$axios.get("/api/reservation/master/".concat(r),{params:{entry:l}}).then((function(e){t.count_attachment=e.data.count_attachment,void 0!==e.data.header&&(t.form=Object.assign({},e.data.header),t.Division=Object.assign({},e.data.division),t.U_NIK=Object.assign({},e.data.user_nik),"-"!==t.form.ApprovalStatus&&"N"!==t.form.ApprovalStatus&&(t.isDisable=!0,t.isApprovalDisable=!0),parseInt(e.data.header.CreatedBy)!==parseInt(t.$auth.user.username)&&(t.isDisable=!0,t.isApprovalDisable=!0),"Reject"===e.data.header.AppStatus&&(t.isDisable=!0,t.isApprovalDisable=!0)),void 0!==e.data.rows&&t.$refs.childDetails.setDataToDetails(e.data.rows),t.dialogLoading=!1,t.$refs.snackbar.display(6e3,"Data loaded...")})).catch((function(e){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))):this.$axios.get("/api/reservation/fetch-docnum").then((function(e){t.form.DocNum=e.data.DocNum,t.form.Token=e.data.token,t.$refs.childDetails.updateTableSettings()}))}}},n=o(52),l=o(71),c=o.n(l),d=o(209),v=o(444),f=o(426),m=o(579),h=o(502),_=o(536),x=o(479),y=o(414),D=o(474),R=o(481),k=o(181),T=o(487),S=o(651),N=o(503),C=o(424),w=o(506),I=o(45),A=o(490),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-subtitle-2"},[t._v("Reservation Details")])]),t._v(" "),o("v-card-text",[o("v-layout",[o("v-flex",{attrs:{xs12:"",sm12:""}},[o("v-card",[o("v-toolbar",{staticClass:"toolbar-content",staticStyle:{height:"32px"},attrs:{flat:"",color:"grey lighten-2",dense:""}},[o("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),o("v-spacer",{staticClass:"hidden-xs-only"}),t._v(" "),o("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.refreshData}},[o("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-2",attrs:{md7:"",sm12:""}},[o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Company")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.CompanyName,callback:function(e){t.$set(t.form,"CompanyName",e)},expression:"form.CompanyName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Warehouse")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhsCode,callback:function(e){t.$set(t.form,"WhsCode",e)},expression:"form.WhsCode"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("GIR NO")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_GIRNo,callback:function(e){t.$set(t.form,"SAP_GIRNo",e)},expression:"form.SAP_GIRNo"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("PR No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_PRNo,callback:function(e){t.$set(t.form,"SAP_PRNo",e)},expression:"form.SAP_PRNo"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("PO NO")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.PONum,callback:function(e){t.$set(t.form,"PONum",e)},expression:"form.PONum"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("GRPO No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.GRPONum,callback:function(e){t.$set(t.form,"GRPONum",e)},expression:"form.GRPONum"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("GI NO")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_GINo,callback:function(e){t.$set(t.form,"SAP_GINo",e)},expression:"form.SAP_GINo"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Transfer No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_TrfNo,callback:function(e){t.$set(t.form,"SAP_TrfNo",e)},expression:"form.SAP_TrfNo"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Requester")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequesterName,callback:function(e){t.$set(t.form,"RequesterName",e)},expression:"form.RequesterName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Division")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",placeholder:"Division",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Division,callback:function(e){t.$set(t.form,"Division",e)},expression:"form.Division"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Request Type")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequestType,callback:function(e){t.$set(t.form,"RequestType",e)},expression:"form.RequestType"}})],1),t._v(" "),"For Restock SubWH"===t.form.RequestType?o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Wh Transfer To")])]):t._e(),t._v(" "),"For Restock SubWH"===t.form.RequestType?o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhTo,callback:function(e){t.$set(t.form,"WhTo",e)},expression:"form.WhTo"}})],1):t._e(),t._v(" "),o("v-col",{staticClass:"pt-2",attrs:{cols:"2"}},[o("label",[t._v("Is Urgent?")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-checkbox",{attrs:{value:"Yes",dense:"",readonly:""},model:{value:t.form.Is_Urgent,callback:function(e){t.$set(t.form,"Is_Urgent",e)},expression:"form.Is_Urgent"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Notes")])]),t._v(" "),o("v-col",{attrs:{cols:"8"}},[o("v-text-field",{attrs:{placeholder:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Memo,callback:function(e){t.$set(t.form,"Memo",e)},expression:"form.Memo"}})],1)],1),t._v(" "),"Yes"===t.form.Is_Urgent?o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Urgent Reason")])]),t._v(" "),o("v-col",{attrs:{cols:"10"}},[o("v-text-field",{attrs:{placeholder:"Urgent Reason",solo:"",dense:"","hide-details":"auto",readonly:""},model:{value:t.form.UrgentReason,callback:function(e){t.$set(t.form,"UrgentReason",e)},expression:"form.UrgentReason"}})],1)],1):t._e()],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{md5:"",sm12:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Item Type")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.ItemType,callback:function(e){t.$set(t.form,"ItemType",e)},expression:"form.ItemType"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",placeholder:"NO",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocNum,callback:function(e){t.$set(t.form,"DocNum",e)},expression:"form.DocNum"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Request Date")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px",readonly:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Request Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}},"v-text-field",n,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}})],1)],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Required Date")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px",readonly:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Required Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}},"v-text-field",n,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}})],1)],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"3"}},[o("label",[t._v("Approval Status")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"3"}},[o("span",[t._v(": "+t._s(t.form.AppStatus))])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("label",[t._v("Approval Details")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"2"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[o("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.approvalStages.openApprovalStages(t.form)}}},[t._v("\n                                  mdi-format-line-weight\n                                ")])],1)]}}])},[t._v(" "),o("span",[t._v("Approval Details")])])],1)],1)],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}})],1),t._v(" "),o("div",{staticClass:"scroll-container"},[o("LazyResvReservationDetails",{ref:"childDetails",attrs:{form:t.form,"is-data-set":t.isDataSet},on:{openDialog:t.openDialog,getData:t.getData,openDialogLastResv:t.openDialogLastResv,openAttachmentDetails:t.openAttachmentDetails,closeDialog:t.closeDialog}})],1)],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("\n                Submit for approval?\n              ")]),t._v(" "),o("v-card-text",[t._v("\n                Are you sure you want to submit for approval?\n              ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("\n                  No\n                ")]),t._v(" "),o("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad3},on:{click:function(e){return t.save("all",!0)}}},[t._v("\n                  Yes, Submit\n                ")])],1)],1)],1)],1),t._v(" "),o("LazyResvApprovalDetails",{ref:"approvalStages"}),t._v(" "),o("LazySnackbar",{ref:"snackbar"}),t._v(" "),o("LazyResvItemMasterData",{ref:"itemsMaster",attrs:{form:t.form}}),t._v(" "),o("LazyResvLastResv",{ref:"lastResv",attrs:{form:t.form}}),t._v(" "),t.dialogLoading?o("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),o("LazyAttachment",{ref:"attachment"})],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCheckbox:m.a,VCol:h.a,VDatePicker:_.a,VDialog:x.a,VDivider:y.a,VFlex:D.a,VForm:R.a,VIcon:k.a,VLayout:T.a,VMenu:S.a,VRow:N.a,VSpacer:C.a,VTextField:w.a,VToolbar:I.a,VTooltip:A.a})}}]);