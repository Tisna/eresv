(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1126:function(e,t,o){"use strict";o.r(t);var l=o(111),n=o(128),c=o(53),r=o(1057),d=o(302),h=o(301),m=(o(33),o(241),{name:"LastResv",props:{form:{type:Object,default:function(){return{active:!0}}}},data:function(){return{dialog:!1,loading:!1,singleSelect:!1,selected:[],itemGroupSearch:[],selectedItems:[],itemSearch:["Req Name","Req Date","Req Qty","Req Note"],search:"",searchType:"",row:"",itemGroups:null,itemCode:null,itemName:null,whsCode:null,reqDate:null,totalData:0,options:{},allData:[],headers:[{text:"Request Date",value:"ReqDate"},{text:"Resv No",value:"DocNum"},{text:"Requester",value:"U_UserName"},{text:"Qty",value:"ReqQty"},{text:"Note",value:"ReqNotes"}]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){},methods:{openDialog:function(e,t,o,l,n){this.dialog=!0,this.row=e,this.itemCode=t,this.itemName=n,this.reqDate=o,this.whsCode=l,this.search="",this.searchType="",this.selected=[],this.getDataFromApi()},closeDialog:function(){this.dialog=!1},selectItems:function(){this.$emit("selectItems",{row:this.row,selected:this.selected}),this.closeDialog()},changeSelect:function(e){this.selectedItems=e,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var t=this;t.form.CompanyName&&this.$axios.get("/api/list-latest-req",{params:{options:t.options,form:t.form,searchType:t.searchType,selectedItems:t.selectedItems,itemGroups:t.itemGroups,itemCode:t.itemCode,whsCode:t.whsCode,reqDate:t.reqDate,search:t.search}}).then((function(t){e.loading=!1,e.allData=t.data.rows,e.totalData=t.data.total})).catch((function(t){e.loading=!1}))}}}),f=o(61),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t(d.a,{attrs:{persistent:"","max-width":"800px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(n.a,[t(c.d,[t("span",{staticStyle:{"font-size":"12px"}},[e._v("Last Resv : "+e._s(e.itemCode)+" - "+e._s(e.itemName))]),e._v(" "),t(h.a)],1),e._v(" "),t(c.c,[t(r.a,{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,dense:"",headers:e.headers,loading:e.loading,items:e.allData,options:e.options,"single-select":e.singleSelect,"server-items-length":e.totalData,"item-key":"LineEntry","show-select":""},on:{"update:options":function(t){e.options=t}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),t(c.a,[t(h.a),e._v(" "),t(l.a,{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);