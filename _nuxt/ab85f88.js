(window.webpackJsonp=window.webpackJsonp||[]).push([[14,59,62],{589:function(t,e,o){"use strict";o(278);var r=o(279);e.a=Object(r.a)("layout")},590:function(t,e,o){"use strict";o(278);var r=o(279);e.a=Object(r.a)("flex")},591:function(t,e,o){"use strict";var r=o(3),l=(o(44),o(63),o(280),o(11),o(12),o(54),o(97),o(13),o(10),o(16),o(17),o(5)),n=o(108),c=o(130);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(n.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},641:function(t,e,o){"use strict";o.r(e);o(42),o(227),o(27),o(38),o(49),o(380),o(54);var r={name:"ItemMasterData",props:{form:{type:Object,default:function(){return{active:!0}}}},data:function(){return{dialog:!1,loadingExport:!1,loading:!1,singleSelect:!1,selected:[],itemGroupSearch:[],selectedItems:[],itemSearch:["Category","DocNum","Item Code","Item Name","Whs"],search:"",searchType:"",row:"",itemGroups:null,totalData:0,options:{},allData:[],headers:[{text:"Category",value:"U_ItemType"},{text:"Item Code",value:"ItemCode"},{text:"Item Name",value:"ItemName"},{text:"UoM",value:"InvntryUom"},{text:"OnHand",value:"OnHand"},{text:"Available",value:"Available"},{text:"InvntItem",value:"InvntItem"},{text:"SubGroupName",value:"SubGroupName"}]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi()},methods:{openDialog:function(t){this.dialog=!0,this.row=t,this.search="",this.searchType="",this.selected=[],void 0!==this.options.page&&(this.options.page=1),this.getDataFromApi()},closeDialog:function(){this.dialog=!1},selectItems:function(){this.$emit("selectItems",{row:this.row,selected:this.selected}),this.closeDialog()},changeSelect:function(t){this.selectedItems=t,this.getDataFromApi()},exportToExcel:function(){var t=this;this.loadingExport=!0;var e=this;this.$axios.get("/api/item-master-data-export",{params:{options:e.options,form:e.form,searchType:e.searchType,selectedItems:e.selectedItems,itemGroups:e.itemGroups,search:e.search},responseType:"arraybuffer"}).then((function(o){t.loadingExport=!1;var r=new Blob([o.data],{type:"application/vnd.ms-excel"}),l=window.URL.createObjectURL(r),link=document.createElement("a");link.href=window.URL.createObjectURL(r),link.download="Item Master Data "+e.itemGroups+".xlsx",document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(l)}),100)})).catch((function(e){t.loadingExport=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/item-master-data",{params:{options:e.options,form:e.form,searchType:e.searchType,selectedItems:e.selectedItems,itemGroups:e.itemGroups,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.rows,t.totalData=e.data.total,t.itemGroupSearch=e.data.item_groups})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},l=o(88),n=o(107),c=o.n(n),d=o(105),v=o(123),m=o(87),f=o(834),h=o(277),_=o(590),x=o(591),y=o(128),D=o(589),C=o(604),k=o(276),w=o(186),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"100%",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-subtitle-2"},[t._v("Item Master Data")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-form",{staticClass:"d-flex",attrs:{"d-flex":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDataFromApi.apply(null,arguments)}}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-2",attrs:{sm3:"",xs3:""}},[o("v-select",{staticClass:"mt-1",attrs:{items:t.itemGroupSearch,label:"Item Groups","item-value":"U_ItmsGrpCod","item-text":"ItmsGrpNam",solo:"",dense:"","hide-details":"auto"},on:{change:t.changeSelect},model:{value:t.itemGroups,callback:function(e){t.itemGroups=e},expression:"itemGroups"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{sm2:"",xs2:""}},[o("v-select",{staticClass:"mt-1",attrs:{items:t.itemSearch,label:"Type",solo:"",dense:"","hide-details":"auto"},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",staticStyle:{"margin-top":"4px"},attrs:{sm3:"",xs3:""}},[o("v-text-field",{attrs:{label:"Search",solo:"",dense:"","hide-details":"auto"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{sm2:"",xs2:""}},[o("v-btn",{attrs:{color:"green darken-1",small:"",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-magnify\n              ")]),t._v("\n              Search\n            ")],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{sm2:"",xs2:""}},[o("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.loadingExport},on:{click:function(e){return t.exportToExcel()}}},[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-microsoft-excel\n              ")]),t._v("\n              Export Excel\n            ")],1)],1)],1)],1)],1),t._v(" "),o("v-card-text",[o("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,loading:t.loading,items:t.allData,options:t.options,"single-select":t.singleSelect,"server-items-length":t.totalData,"items-per-page":10,"footer-props":{"items-per-page-options":[10,20,50,100,-1]},"item-key":"Keys","show-select":""},on:{"update:options":function(e){t.options=e}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")]),t._v(" "),o("v-btn",{attrs:{color:"green darken-1",small:"",dark:""},on:{click:function(e){return t.selectItems()}}},[o("v-icon",{attrs:{left:""}},[t._v("\n          mdi-arrow-down\n        ")]),t._v("\n        Select\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDataTable:f.a,VDialog:h.a,VFlex:_.a,VForm:x.a,VIcon:y.a,VLayout:D.a,VSelect:C.a,VSpacer:k.a,VTextField:w.a})},642:function(t,e,o){"use strict";o.r(e);o(36);var r={name:"ViewResvDetails",data:function(){return{dialog:!1,buttonKey:1,buttonKey2:2,buttonKey3:3,count_attachment:0,menu1:"",menu:"",date:null,urlDelete:null,dialogLoading:!1,dialogConfirm:!1,submitLoad:!1,submitLoad2:!1,submitLoad3:!1,loading:!1,loadingPrint:!1,message:!1,success:!1,itemDivision:[],itemUserNIK:[],itemCompany:[],itemWhTo:[],itemUserWhs:[],userDivision:[],breadcrumb:[],itemReqType:["Normal","For Restock SubWH"],ItemType:["Ready Stock","Non Ready Stock","Asset","Service"],isDisable:!1,isApprovalDisable:!1,isDataSet:!1,Division:{},U_NIK:{},form:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:this.$auth.user.username,RequesterName:this.$auth.user.name,Division:this.$auth.user.department,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:"Normal",ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null,UrgentReason:null,ItemType:null,ItemTypeCheck:null,Is_Urgent:"No"}}},methods:{openDialog:function(t){this.form.CompanyName&&this.form.WhsCode?this.$refs.itemsMaster.openDialog(t):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},openResvDetails:function(t){var e=this;this.dialog=!0,this.$axios.get("/api/reservation/document/"+t).then((function(t){e.getData(t.data.data.U_DocEntry,"update")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))},openDialogLastResv:function(data){this.form.CompanyName&&this.form.WhsCode&&this.form.DocDate?this.$refs.lastResv.openDialog(data.row,data.itemCode,data.reqDate,data.whsCode,data.itemName):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},refreshData:function(){this.getData()},openAttachmentDetails:function(t){this.$refs.attachment.openAttachment(t.lineEntry,"reservation",t.row)},closeDialog:function(){this.$refs.itemsMaster.closeDialog()},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e||this.$route.query.id,l=o||this.$route.query.status,n=void 0!==this.$route.query.entry?this.$route.query.entry:0;this.isApprovalDisable="add"===this.$route.query.status,"update"===l?(this.dialogLoading=!0,this.$axios.get("/api/reservation/master/".concat(r),{params:{entry:n}}).then((function(e){t.count_attachment=e.data.count_attachment,void 0!==e.data.header&&(t.form=Object.assign({},e.data.header),t.Division=Object.assign({},e.data.division),t.U_NIK=Object.assign({},e.data.user_nik),"-"!==t.form.ApprovalStatus&&"N"!==t.form.ApprovalStatus&&(t.isDisable=!0,t.isApprovalDisable=!0),parseInt(e.data.header.CreatedBy)!==parseInt(t.$auth.user.username)&&(t.isDisable=!0,t.isApprovalDisable=!0),"Reject"===e.data.header.AppStatus&&(t.isDisable=!0,t.isApprovalDisable=!0)),void 0!==e.data.rows&&t.$refs.childDetails.setDataToDetails(e.data.rows),t.dialogLoading=!1,t.$refs.snackbar.display(6e3,"Data loaded...")})).catch((function(e){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))):this.$axios.get("/api/reservation/fetch-docnum").then((function(e){t.form.DocNum=e.data.DocNum,t.form.Token=e.data.token,t.$refs.childDetails.updateTableSettings()}))}}},l=o(88),n=o(107),c=o.n(n),d=o(105),v=o(123),m=o(87),f=o(376),h=o(373),_=o(833),x=o(277),y=o(564),D=o(590),C=o(591),k=o(128),w=o(589),R=o(565),N=o(375),$=o(276),I=o(186),V=o(70),S=o(558),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-subtitle-2"},[t._v("Reservation Details")])]),t._v(" "),o("v-card-text",[o("v-layout",[o("v-flex",{attrs:{xs12:"",sm12:""}},[o("v-card",[o("v-toolbar",{staticClass:"toolbar-content",staticStyle:{height:"32px"},attrs:{flat:"",color:"grey lighten-2",dense:""}},[o("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),o("v-spacer",{staticClass:"hidden-xs-only"}),t._v(" "),o("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.refreshData}},[o("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-2",attrs:{md7:"",sm12:""}},[o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Company")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.CompanyName,callback:function(e){t.$set(t.form,"CompanyName",e)},expression:"form.CompanyName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Warehouse")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhsCode,callback:function(e){t.$set(t.form,"WhsCode",e)},expression:"form.WhsCode"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("GIR NO")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_GIRNo,callback:function(e){t.$set(t.form,"SAP_GIRNo",e)},expression:"form.SAP_GIRNo"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("PR No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_PRNo,callback:function(e){t.$set(t.form,"SAP_PRNo",e)},expression:"form.SAP_PRNo"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("PO NO")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.PONum,callback:function(e){t.$set(t.form,"PONum",e)},expression:"form.PONum"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("GRPO No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.GRPONum,callback:function(e){t.$set(t.form,"GRPONum",e)},expression:"form.GRPONum"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("GI NO")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_GINo,callback:function(e){t.$set(t.form,"SAP_GINo",e)},expression:"form.SAP_GINo"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Transfer No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_TrfNo,callback:function(e){t.$set(t.form,"SAP_TrfNo",e)},expression:"form.SAP_TrfNo"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Requester")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequesterName,callback:function(e){t.$set(t.form,"RequesterName",e)},expression:"form.RequesterName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Division")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",placeholder:"Division",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Division,callback:function(e){t.$set(t.form,"Division",e)},expression:"form.Division"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Request Type")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequestType,callback:function(e){t.$set(t.form,"RequestType",e)},expression:"form.RequestType"}})],1),t._v(" "),"For Restock SubWH"===t.form.RequestType?o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Wh Transfer To")])]):t._e(),t._v(" "),"For Restock SubWH"===t.form.RequestType?o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhTo,callback:function(e){t.$set(t.form,"WhTo",e)},expression:"form.WhTo"}})],1):t._e(),t._v(" "),o("v-col",{staticClass:"pt-2",attrs:{cols:"2"}},[o("label",[t._v("Is Urgent?")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-checkbox",{attrs:{value:"Yes",dense:"",readonly:""},model:{value:t.form.Is_Urgent,callback:function(e){t.$set(t.form,"Is_Urgent",e)},expression:"form.Is_Urgent"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Notes")])]),t._v(" "),o("v-col",{attrs:{cols:"8"}},[o("v-text-field",{attrs:{placeholder:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Memo,callback:function(e){t.$set(t.form,"Memo",e)},expression:"form.Memo"}})],1)],1),t._v(" "),"Yes"===t.form.Is_Urgent?o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Urgent Reason")])]),t._v(" "),o("v-col",{attrs:{cols:"10"}},[o("v-text-field",{attrs:{placeholder:"Urgent Reason",solo:"",dense:"","hide-details":"auto",readonly:""},model:{value:t.form.UrgentReason,callback:function(e){t.$set(t.form,"UrgentReason",e)},expression:"form.UrgentReason"}})],1)],1):t._e()],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{md5:"",sm12:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Item Type")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.ItemType,callback:function(e){t.$set(t.form,"ItemType",e)},expression:"form.ItemType"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("No")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{readonly:"",placeholder:"NO",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocNum,callback:function(e){t.$set(t.form,"DocNum",e)},expression:"form.DocNum"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Request Date")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"4"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px",readonly:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Request Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}},"v-text-field",l,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}})],1)],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("label",[t._v("Required Date")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px",readonly:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Required Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}},"v-text-field",l,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}})],1)],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"3"}},[o("label",[t._v("Approval Status")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"3"}},[o("span",[t._v(": "+t._s(t.form.AppStatus))])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("label",[t._v("Approval Details")])]),t._v(" "),o("v-col",{staticClass:"pr-2",attrs:{cols:"2"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[o("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.approvalStages.openApprovalStages(t.form)}}},[t._v("\n                                  mdi-format-line-weight\n                                ")])],1)]}}])},[t._v(" "),o("span",[t._v("Approval Details")])])],1)],1)],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}})],1),t._v(" "),o("div",{staticClass:"scroll-container"},[o("LazyResvReservationDetails",{ref:"childDetails",attrs:{form:t.form,"is-data-set":t.isDataSet},on:{openDialog:t.openDialog,getData:t.getData,openDialogLastResv:t.openDialogLastResv,openAttachmentDetails:t.openAttachmentDetails,closeDialog:t.closeDialog}})],1)],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("\n                Submit for approval?\n              ")]),t._v(" "),o("v-card-text",[t._v("\n                Are you sure you want to submit for approval?\n              ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("\n                  No\n                ")]),t._v(" "),o("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad3},on:{click:function(e){return t.save("all",!0)}}},[t._v("\n                  Yes, Submit\n                ")])],1)],1)],1)],1),t._v(" "),o("LazyResvApprovalDetails",{ref:"approvalStages"}),t._v(" "),o("LazySnackbar",{ref:"snackbar"}),t._v(" "),o("LazyResvItemMasterData",{ref:"itemsMaster",attrs:{form:t.form}}),t._v(" "),o("LazyResvLastResv",{ref:"lastResv",attrs:{form:t.form}}),t._v(" "),t.dialogLoading?o("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),o("LazyAttachment",{ref:"attachment"})],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCheckbox:f.a,VCol:h.a,VDatePicker:_.a,VDialog:x.a,VDivider:y.a,VFlex:D.a,VForm:C.a,VIcon:k.a,VLayout:w.a,VMenu:R.a,VRow:N.a,VSpacer:$.a,VTextField:I.a,VToolbar:V.a,VTooltip:S.a})},672:function(t,e,o){"use strict";o.r(e);o(36);var r={name:"Reservation",data:function(){return{items:{},message:"",success:"",loading:!1,form:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:null,Division:null,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:null,ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null}}},mounted:function(){this.homeData()},methods:{homeData:function(){var t=this;this.$axios.get("/api/home-data").then((function(e){t.items=e.data.rows}))},checkRoleContains:function(t){for(var e=this.$auth.user.roles,o="",i=0;i<this.$auth.user.roles.length;i++)o=e[i].name===t;return o},newReservation:function(){var t=this;this.$axios.get("/api/reservation/max-doc-resv").then((function(e){t.$router.push({path:"/reservation/form",query:{id:e.data.max_num.DocEntry,status:"add"}})}))},downloadManual:function(){this.$axios.get("/api/download-manual").then((function(t){window.open(t.data.url,"_blank")}))}}},l=o(88),n=o(107),c=o.n(n),d=o(105),v=o(123),m=o(87),f=o(373),h=o(573),_=o(564),x=o(590),y=o(128),D=o(589),C=o(258),k=o(172),w=o(50),R=o(375),N=o(186),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{attrs:{xs12:"",md12:""}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"3"}},[o("v-card",{staticClass:"mx-auto"},[o("v-list-item",[o("v-list-item-content",{staticClass:"pa-0"},[o("v-list-item-title",{staticClass:"font-weight-medium"},[t._v("\n                  Reservation Request\n                ")])],1)],1),t._v(" "),o("v-list",{staticClass:"transparent",attrs:{dense:""}},[o("v-list-item",[o("v-list-item-title",[t._v("\n                  Create\n                ")]),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.newReservation()}}},[t._v("\n                    mdi-arrow-right-bold\n                  ")])],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-title",[t._v("\n                  Display Item\n                ")]),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.itemsMaster.openDialog({})}}},[t._v("\n                    mdi-arrow-right-bold\n                  ")])],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-title",[t._v("\n                  Report\n                ")]),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$router.push({path:"report/list"})}}},[t._v("\n                    mdi-arrow-right-bold\n                  ")])],1)],1),t._v(" "),t._l(t.items,(function(e){return o("v-list-item",{key:e.text},[o("v-list-item-title",[t._v(t._s(e.text))]),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[t._v("\n                  "+t._s(e.value)+"\n                ")])],1)}))],2),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{small:"",color:"deep-green accent-4"},on:{click:function(e){return t.$router.push({path:"reservation/request"})}}},[t._v("\n                View All\n              ")])],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"3"}},[o("v-card",{staticClass:"mx-auto"},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"font-weight-medium"},[t._v("\n                  Request Item Code\n                ")])],1)],1),t._v(" "),o("v-list",{staticClass:"transparent",attrs:{dense:""}},[o("v-list-item",[o("v-list-item-title",[t._v("\n                  Create\n                ")]),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$router.push({path:"reservation/requestitem"})}}},[t._v("\n                    mdi-arrow-right-bold\n                  ")])],1)],1)],1)],1),t._v(" "),t.checkRoleContains("Finance")?o("v-card",{staticClass:"mx-auto mt-2"},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"font-weight-medium"},[t._v("\n                  Finance Check\n                ")])],1)],1),t._v(" "),o("v-list",{staticClass:"transparent",attrs:{dense:""}},[o("v-list-item",[o("v-list-item-title",[o("label",[t._v("Reservation Number")]),t._v(" "),o("v-text-field",{attrs:{placeholder:"DocNum",solo:"",dense:"",label:"DocNum","hide-details":"auto"},model:{value:t.form.DocNum,callback:function(e){t.$set(t.form,"DocNum",e)},expression:"form.DocNum"}})],1),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.reservationDetails.openResvDetails(t.form.DocNum)}}},[t._v("\n                    mdi-arrow-right-bold\n                  ")])],1)],1)],1)],1):t._e()],1),t._v(" "),o("v-col",{staticClass:"mt-0",attrs:{cols:"12",md:"3"}},[o("v-btn",{attrs:{small:"",color:"green accent-4",darked:""},on:{click:function(e){return t.downloadManual()}}},[t._v("\n            Download E-Reservasi Manual Book\n          ")])],1)],1),t._v(" "),o("ResvItemMasterData",{ref:"itemsMaster",attrs:{form:t.form}}),t._v(" "),o("ResvViewResvDetails",{ref:"reservationDetails"})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ResvItemMasterData:o(641).default,ResvViewResvDetails:o(642).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCol:f.a,VContainer:h.a,VDivider:_.a,VFlex:x.a,VIcon:y.a,VLayout:D.a,VList:C.a,VListItem:k.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VRow:R.a,VTextField:N.a})}}]);