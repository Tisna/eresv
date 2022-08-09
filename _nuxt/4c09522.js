(window.webpackJsonp=window.webpackJsonp||[]).push([[29,21],{604:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(82),l=o(90),c=o.n(l),d=o(107),m=o(124),f=o(55),h=o(583),v=o(281),y=o(574),_=o(131),x=o(280),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"pl-0 pr-0"},[o("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VContainer:h.a,VDialog:v.a,VDivider:y.a,VIcon:_.a,VSpacer:x.a})},918:function(t,e,o){"use strict";o.r(e);o(56),o(11);var n={name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}},itemCustomer:{type:Array,default:function(){return[]}},itemInvoiceType:{type:Array,default:function(){return[]}}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,selectedItem:[],documentType:[],itemSubType:[],itemCategory:[],itemBank:[],itemTax:[],items:[],menu:"",statusProcessing:"insert",currentFile:void 0,header:["id","Description","Currency","Amount"],columns:[{data:"id"},{data:"description",width:120,height:50},{data:"currency",width:40},{data:"amount",width:50,height:26,wordWrap:!1,type:"numeric",numericFormat:{pattern:"0,0.00"}}]}},mounted:function(){this.instance()},methods:{instance:function(){window.formInvoice=this},newData:function(t,e){var o=this;this.$refs.dialogForm.openDialog(),this.documentType=t,this.statusProcessing="insert",this.form=Object.assign({},e),setTimeout((function(){o.$refs.tableInvoice.setDataToDetails([{amount:null}],o.columns,o.header,o.form)}),500),this.buttonKey++},changeDocumentType:function(){var t=this;this.$axios.get("/api/document/sub-type/"+this.form.type).then((function(e){t.itemSubType=e.data.data}))},changeContact:function(){this.form.address=this.form.customer.Address,this.form.customer=this.form.customer.CardName},changeIdentify:function(){"NPWP"===this.form.identity_type?(this.form.identity_number="033109851014000",this.form.identity_name="PT INDONESIA MOROWALI INDUSTRIAL PARK"):(this.form.identity_number="-",this.form.identity_name="-")},selectFile:function(t){this.currentFile=t},editItem:function(t,e){var o=this;this.documentType=e,this.form=Object.assign({},t),setTimeout((function(){o.$refs.tableInvoice.setDataToDetails(o.form.line_items,o.columns,o.header,o.form)}),500),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.changeDocumentType(),this.buttonKey++},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this,e={},o=this.statusProcessing;t.$refs.tableInvoice.getAddData().forEach((function(o,n){t.$refs.tableInvoice.checkIfEmptyRow(n)||(e[n]=o)})),this.form.line_items=e;var data=this.form;"insert"===o?this.store("post",this.url,data):"update"===o&&this.store("put",this.url+"/"+this.form.id,data)},store:function(t,e,data){var o=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.submitLoad=!1,o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.buttonKey++,o.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))},sendingParams:function(t,e,o){o.append("source_id",this.form.temp_id),o.append("type","peruri")},handleError:function(t,e,o){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){o.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.temp_id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}},r=o(82),l=o(90),c=o.n(l),d=o(107),m=o(384),f=o(865),h=o(583),v=o(600),y=o(262),_=o(258),x=o(386),C=o(187),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",{staticClass:"pt-0"},[o("v-container",{attrs:{fluid:""}},[o("v-col",{staticClass:"pa-1",attrs:{cols:"12",lg:"6"}},[o("v-combobox",{attrs:{items:t.itemInvoiceType,label:"Invoice Type",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"10"}},[o("v-combobox",{attrs:{items:t.itemCustomer,"item-text":"CardName","item-value":"CardName",label:"Customer",outlined:"","persistent-hint":"",dense:"","return-object":"","hide-details":"auto"},on:{change:t.changeContact},model:{value:t.form.customer,callback:function(e){t.$set(t.form,"customer",e)},expression:"form.customer"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"10"}},[o("v-text-field",{attrs:{label:"Address",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"6"}},[o("v-text-field",{attrs:{label:"Invoice No",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.document_number,callback:function(e){t.$set(t.form,"document_number",e)},expression:"form.document_number"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"6"}},[o("v-text-field",{attrs:{label:"Date",outlined:"",dense:"",type:"date","hide-details":"auto"},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"6"}},[o("v-text-field",{attrs:{label:"Due Date",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.due_date,callback:function(e){t.$set(t.form,"due_date",e)},expression:"form.due_date"}})],1),t._v(" "),o("v-row",{attrs:{dense:""}},[o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("LazyTableSimple",{ref:"tableInvoice"}),t._v(" "),o("v-btn",{staticClass:"white--text mt-1",attrs:{small:"",color:"green darken-1",elevation:"0"},on:{click:function(e){return t.$refs.tableInvoice.addLine()}}},[t._v("\n                Add Line\n              ")])],1)],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"6"}},[o("v-text-field",{attrs:{label:"Sub Total",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sub_total,callback:function(e){t.$set(t.form,"sub_total",e)},expression:"form.sub_total"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"6"}},[o("v-text-field",{attrs:{label:"VAT",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.vat,callback:function(e){t.$set(t.form,"vat",e)},expression:"form.vat"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"6"}},[o("v-text-field",{attrs:{label:"Total",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 pt-2",attrs:{cols:"12",lg:"10"}},[o("v-text-field",{attrs:{label:"Remark",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),o("v-overlay",{attrs:{value:t.submitLoad}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogForm:o(604).default}),c()(component,{VBtn:d.a,VCol:m.a,VCombobox:f.a,VContainer:h.a,VForm:v.a,VOverlay:y.a,VProgressCircular:_.a,VRow:x.a,VTextField:C.a})}}]);