(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1105:function(t,e,n){"use strict";n.r(e);n(13),n(6),n(12),n(54);var o=n(688),r=n(820),l=(n(692),r.a.helper.debounce((function(t,e){var n=window.details.$refs.details.hotInstance.getPlugin("filters");n.removeConditions(t+1),n.addCondition(t+1,"contains",[e.target.value]),n.filter()}),400)),c=function(t){var div=document.createElement("div"),input=document.createElement("input");return div.className="filterHeader",function(input,t){input.addEventListener("keydown",(function(e){l(t,e)}))}(input,t),div.appendChild(input),div},d=function(t,e){-1===e.row&&"INPUT"===t.target.nodeName&&(t.stopImmediatePropagation(),this.deselectCell())},f={name:"TableSimple",components:{HotTable:o.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation"},detailsRoot:"detailsRoot",colHeaders:[],formData:null}},created:function(){this.setInstance()},methods:{setInstance:function(){window.details=this},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1)},updateTableSettings:function(header,t){this.$refs.details.hotInstance.updateSettings({colHeaders:header,columns:t,currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,height:"70vh",autoColumnSize:{syncLimit:300},viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0]},beforeOnCellMouseDown:d,afterGetColHeader:function(col,t){if("number"!=typeof col)return col;col>=0&&t.childElementCount<2&&t.appendChild(c(col));var e=t.parentNode,n=e.parentNode;n.childNodes.length,Array.prototype.indexOf.call(n.childNodes,e)},contextMenu:{callback:function(t,e){var n=window.details;"remove_row"===t&&(n.isInvDetailChanges=!0,n.isInvChanges=!0)}},beforeRemoveRow:function(t,e,n,source){var o=window.details,r=prompt("Are your sure want to delete this rows?"),l=[];return""===r&&(n.forEach((function(t,e){var n=o.$refs.details.hotInstance.getDataAtCell(t,0);n&&l.push(n)})),l.length>0&&o.$emit("removeData",{id:l}),!0)}})},setDataToDetails:function(data,t,e,n){this.formData=n,this.updateTableSettings(e,t);var o=this;setTimeout((function(){o.$refs.details.hotInstance.loadData(data)}),300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)}}},h=n(61),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("hot-table",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports},660:function(t,e,n){"use strict";var o=n(7),r=n(676).start;o({target:"String",proto:!0,forced:n(677)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},676:function(t,e,n){var o=n(22),r=n(140),l=n(45),c=n(307),d=n(76),f=o(c),h=o("".slice),m=Math.ceil,w=function(t){return function(e,n,o){var c,w,v=l(d(e)),C=r(n),R=v.length,I=void 0===o?" ":l(o);return C<=R||""==I?v:((w=f(I,m((c=C-R)/I.length))).length>c&&(w=h(w,0,c)),t?v+w:w+v)}};t.exports={start:w(!1),end:w(!0)}},677:function(t,e,n){var o=n(116);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)}}]);