(window.webpackJsonp=window.webpackJsonp||[]).push([[30,23],{1111:function(t,e,n){"use strict";n.r(e);var o=n(683),r=n(111),l=n(413),m=n(1055),c=n(647),d=n(1056),f=n(672),h=n(639),y=n(278),_=n(277),v=n(412),x=n(680),$=n(198),T=(n(54),{name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}},itemCustomer:{type:Array,default:function(){return[]}},approval:{type:Array,default:function(){return[]}},itemSignPayment:{type:Array,default:function(){return[]}},documentTypes:{type:String,default:""}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,selectedItem:[],documentType:[],itemSubType:[],itemCategory:[],itemBank:[],itemTax:[],items:[],menu:"",statusProcessing:"insert",currentFile:void 0,options:{url:"https://sbo2.imip.co.id:3001/backendcore/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,acceptedFiles:"application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")},parallelUploads:1,maxFilesize:1e3,autoProcessQueue:!1,autoQueue:!1,file:""}}},mounted:function(){},methods:{newData:function(t,e){this.$refs.dialogForm.openDialog(),this.documentType=t,this.statusProcessing="insert",this.form=Object.assign({},e),this.form.document_type=this.documentTypes,this.changeDocumentType(),this.buttonKey++},changeDocumentType:function(){var t=this;this.$axios.get("/api/document/sub-type/"+this.form.type).then((function(e){t.itemSubType=e.data.data}))},changeIdentify:function(){"NPWP"===this.form.identity_type?(this.form.identity_number="033109851014000",this.form.identity_name="PT INDONESIA MOROWALI INDUSTRIAL PARK"):(this.form.identity_number="-",this.form.identity_name="-")},selectFile:function(t){this.currentFile=t},editItem:function(t,e){this.documentType=e,this.form=Object.assign({},t),this.form.document_type=this.documentTypes,this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.changeDocumentType(),this.buttonKey++},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this,e=this.statusProcessing,data=this.form;if("insert"===e){var n=this;this.submitLoad=!0;for(var o=new FormData,i=0;i<this.$refs.file.files.length;i++){var r=this.$refs.file.files[i];o.append("files["+i+"]",r)}o.append("data",JSON.stringify(this.form)),this.$axios.post(this.url,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.$refs.dialogForm.closeDialog(),n.submitLoad=!1,t.$emit("getDataFromApi")})).catch((function(e){t.buttonKey++,t.$swal({type:"error",title:"Error",text:e.response.data.message}),n.submitLoad=!1}))}else"update"===e&&this.store("put",this.url+"/"+this.form.id,data)},store:function(t,e,data){var n=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.$refs.dialogForm.closeDialog(),n.$emit("getDataFromApi")})).catch((function(t){n.buttonKey++,n.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))},sendingParams:function(t,e,n){n.append("source_id",this.form.temp_id),n.append("type","peruri")},handleError:function(t,e,n){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var n=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){n.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),n.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.temp_id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}}),k=n(61),component=Object(k.a)(T,(function(){var t=this,e=t._self._c;return e("div",[e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"500px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e(f.a,{staticClass:"pt-0"},[e(c.a,{attrs:{fluid:""}},[e(v.a,{attrs:{dense:""}},[e(l.a,{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[e(x.a,{attrs:{items:["Y","N"],label:"Internal Sign",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.internal_document,callback:function(e){t.$set(t.form,"internal_document",e)},expression:"form.internal_document"}})],1),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[e(x.a,{attrs:{items:["PT IMIP","PT SMI"],label:"Company",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1):t._e(),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e(m.a,{attrs:{items:t.itemCustomer,"item-text":"CardName","item-value":"CardName",label:"Customer",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.customer_name,callback:function(e){t.$set(t.form,"customer_name",e)},expression:"form.customer_name"}})],1):t._e(),t._v(" "),"invoice"!==t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e(m.a,{attrs:{items:t.approval,"item-text":"approval.name","item-value":"id",label:"Approval",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.approval_id,callback:function(e){t.$set(t.form,"approval_id",e)},expression:"form.approval_id"}})],1):t._e(),t._v(" "),e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e(o.a,{attrs:{items:t.documentType,"item-text":"nama","item-value":"nama",label:"Document Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},on:{change:t.changeDocumentType},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e(o.a,{attrs:{items:t.itemSubType,"item-text":"name","item-value":"id",label:"Sub Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.document_sub_type_id,callback:function(e){t.$set(t.form,"document_sub_type_id",e)},expression:"form.document_sub_type_id"}})],1):t._e(),t._v(" "),"invoice"!==t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e(o.a,{attrs:{items:t.itemSignPayment,"item-text":"text","item-value":"value",label:"Sign Payment",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.sign_payment,callback:function(e){t.$set(t.form,"sign_payment",e)},expression:"form.sign_payment"}})],1):t._e(),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e(x.a,{attrs:{label:"Identify Type",items:["NPWP","NIK"],outlined:"",dense:"","hide-details":"auto"},on:{change:t.changeIdentify},model:{value:t.form.identity_type,callback:function(e){t.$set(t.form,"identity_type",e)},expression:"form.identity_type"}})],1):t._e(),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e($.a,{attrs:{label:"Identify Number",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.identity_number,callback:function(e){t.$set(t.form,"identity_number",e)},expression:"form.identity_number"}})],1):t._e(),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e($.a,{attrs:{label:"Identify Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.identity_name,callback:function(e){t.$set(t.form,"identity_name",e)},expression:"form.identity_name"}})],1):t._e(),t._v(" "),e(l.a,{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[e(h.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e($.a,t._g(t._b({attrs:{label:"Document Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(d.a,{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}})],1)],1),t._v(" "),e(l.a,{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[e($.a,{attrs:{label:"Location",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),t._v(" "),e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e($.a,{attrs:{label:"Remark",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),t._v(" "),e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e($.a,{attrs:{label:"Document Number",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.external_document_number,callback:function(e){t.$set(t.form,"external_document_number",e)},expression:"form.external_document_number"}})],1),t._v(" "),"invoice"===t.documentTypes?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e($.a,{attrs:{label:"Total",outlined:"",dense:"",type:"number","hide-details":"auto"},model:{value:t.form.total,callback:function(e){t.$set(t.form,"total",e)},expression:"form.total"}})],1):t._e(),t._v(" "),"insert"===t.statusProcessing?e(l.a,{staticClass:"mb-1",attrs:{cols:"12"}},[e("input",{ref:"file",staticClass:"form-control",staticStyle:{display:"block !important"},attrs:{type:"file",accept:"application/pdf",multiple:""},on:{change:t.selectFile}})]):t._e()],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e(r.a,{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),e(y.a,{attrs:{value:t.submitLoad}},[e(_.a,{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogForm:n(682).default})},682:function(t,e,n){"use strict";n.r(e);var o=n(111),r=n(128),l=n(53),m=n(647),c=n(302),d=n(638),f=n(137),h=n(301),y={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},_=n(61),component=Object(_.a)(y,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(l.d,[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e(h.a),t._v(" "),e(o.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e(f.a,[t._v("mdi-close-circle")])],1)],1),t._v(" "),e(d.a),t._v(" "),e(l.c,{staticClass:"pl-0 pr-0"},[e(m.a,{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),e(d.a),t._v(" "),e(l.a,[e(h.a),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);