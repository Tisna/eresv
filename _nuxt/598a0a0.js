(window.webpackJsonp=window.webpackJsonp||[]).push([[28,27],{634:function(t,e,n){var content=n(672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("064907f9",content,!0,{sourceMap:!1})},671:function(t,e,n){"use strict";n(634)},672:function(t,e,n){var o=n(19)(!1);o.push([t.i,".pdf-container[data-v-43d981a5]{height:70vh}.button[data-v-43d981a5]{background-color:#4caf50;border:none;color:#fff;padding:8px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:12px}.hidden[data-v-43d981a5]{display:none!important}.button1[data-v-43d981a5]{background-color:#4caf50}.button2[data-v-43d981a5]{background-color:#008cba}.button3[data-v-43d981a5]{background-color:#c3a00b}",""]),t.exports=o},683:function(t,e,n){"use strict";n.r(e);n(27),n(37),n(44),n(82),n(56),n(187),n(31),n(12);var o=n(700),d=n.n(o),r={name:"PSPDFKit",data:function(){return{pdfFile:"",PSPDFKitInstance:null,display1:"",display2:"",display3:"",item:[]}},watch:{pdfFile:function(t){t&&this.loadPSPDFKit()}},methods:{setSource:function(t,e){var n=this;this.item=e,this.pdfFile=t,this.display1="",this.display2="",this.display3="",this.loadPSPDFKit(e).then((function(t){n.$emit("loaded",t)}))},getCoordinate:function(){var t=this,e=this.PSPDFKitInstance;Promise.all(Array.from({length:e.totalPageCount}).map((function(t,n){return e.getAnnotations(n)}))).then((function(e){var n=e.map((function(t){return t.toJS()})).flat();t.$emit("coordinate",n)}))},getDataCoordinate:function(){var t=this.PSPDFKitInstance;Promise.all(Array.from({length:t.totalPageCount}).map((function(e,n){return t.getAnnotations(n)}))).then((function(t){return t.map((function(t){return t.toJS()})).flat()}))},loadPSPDFKit:function(t){var e=this,n="".concat(window.location.protocol,"//").concat(window.location.host,"/js/");d.a.unload(".pdf-container");var o=[],r=this.item;return"Y"===r.digisign_coordinate&&"Y"===r.meterai_coordinate?o=[{v:1,bbox:[parseFloat(r.digisign_left),parseFloat(r.digisign_top),parseFloat(r.digisign_width),parseFloat(r.digisign_height)],id:"combine",name:"combine",pageIndex:r.sign_page-1,stampType:"Custom",color:"#C3A00B",title:"METERAI AND SIGN",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:("Y"===r.digisign_coordinate&&(o="Y"===r.meterai_coordinate?[{v:1,bbox:[parseFloat(r.meterai_left),parseFloat(r.meterai_top),parseFloat(r.meterai_width),parseFloat(r.meterai_height)],id:"sign",name:"sign",pageIndex:r.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"},{v:1,bbox:[parseFloat(r.digisign_left),parseFloat(r.digisign_top),parseFloat(r.digisign_width),parseFloat(r.digisign_height)],id:"sign",name:"sign",pageIndex:r.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:[{v:1,bbox:[parseFloat(r.digisign_left),parseFloat(r.digisign_top),parseFloat(r.digisign_width),parseFloat(r.digisign_height)],id:"sign",name:"sign",pageIndex:r.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]),"Y"===r.meterai_coordinate&&(o="Y"===r.digisign_coordinate?[{v:1,bbox:[parseFloat(r.meterai_left),parseFloat(r.meterai_top),parseFloat(r.meterai_width),parseFloat(r.meterai_height)],id:"sign",name:"sign",pageIndex:r.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"},{v:1,bbox:[parseFloat(r.digisign_left),parseFloat(r.digisign_top),parseFloat(r.digisign_width),parseFloat(r.digisign_height)],id:"sign",name:"sign",pageIndex:r.sign_page-1,stampType:"Custom",color:"#00334F",title:"SIGN HERE",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}]:[{v:1,bbox:[parseFloat(r.meterai_left),parseFloat(r.meterai_top),parseFloat(r.meterai_width),parseFloat(r.meterai_height)],id:"sign",name:"sign",pageIndex:r.materai_page-1,stampType:"Custom",color:"#32CD32",title:"METERAI",opacity:1,pdfObjectId:300,creatorName:"John Doe",createdAt:"2020-05-23T18:25:43.511Z",updatedAt:"2020-06-23T18:28:05.100Z",rotation:0,type:"pspdfkit/stamp"}])),d.a.load({document:e.pdfFile,container:".pdf-container",baseUrl:n,instantJSON:{annotations:o,format:"https://pspdfkit.com/instant-json/v1"}}).then((function(t){e.PSPDFKitInstance=t;var n=t.toolbarItems;t.setToolbarItems(n.filter((function(t){return"pager"===t.type}))),document.getElementById("createAnnotationMaterai").onclick=function(n){var o=new d.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Custom",id:"materai",title:"METERAI",color:new d.a.Color({r:50,g:205,b:50}),boundingBox:new d.a.Geometry.Rect({left:50,top:50,width:70,height:70})});t.create(o),e.display3="hidden"},document.getElementById("createAnnotationSign").onclick=function(n){var o=new d.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Custom",id:"sign",title:"SIGN HERE",color:new d.a.Color({r:0,g:51,b:79}),boundingBox:new d.a.Geometry.Rect({left:120,top:50,width:105,height:70})});t.create(o),e.display3="hidden"},document.getElementById("createAnnotationCombine").onclick=function(n){var o=new d.a.Annotations.StampAnnotation({pageIndex:t.viewState.currentPageIndex,stampType:"Approved",id:"combine",title:"METERAI AND SIGN",color:new d.a.Color({r:195,g:160,b:11}),boundingBox:new d.a.Geometry.Rect({left:200,top:50,width:175,height:70})});t.create(o),e.display1="hidden",e.display2="hidden"},t.addEventListener("annotations.delete",(function(t){e.display1="",e.display2="",e.display3=""}))}))}}},l=(n(671),n(81)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"customToolbar"}},[n("button",{class:"button button1 "+t.display1,attrs:{id:"createAnnotationMaterai"}},[t._v("\n      METERAI\n    ")]),t._v(" "),n("button",{class:"button button2 "+t.display2,attrs:{id:"createAnnotationSign"}},[t._v("\n      SIGN\n    ")]),t._v(" "),n("button",{class:"button button3 "+t.display3,attrs:{id:"createAnnotationCombine"}},[t._v("\n      METERAI AND SIGN\n    ")])]),t._v(" "),n("div",{staticClass:"pdf-container"})])}),[],!1,null,"43d981a5",null);e.default=component.exports},717:function(t,e,n){var content=n(790);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5d476d5e",content,!0,{sourceMap:!1})},789:function(t,e,n){"use strict";n(717)},790:function(t,e,n){var o=n(19)(!1);o.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;color:#2c3e50}body{margin:0}input[type=file]{display:none}.custom-file-upload{border:1px solid #ccc;border-radius:4px;display:inline-block;padding:6px 12px;cursor:pointer;background:#4a8fed;color:#fff;font:inherit;font-size:16px;font-weight:700}",""]),t.exports=o},901:function(t,e,n){"use strict";n.r(e);n(91),n(27),n(37),n(44),n(285);var o={name:"App",data:function(){return{pdfFile:this.pdfFile||"/document.pdf"}},methods:{handleLoaded:function(t){console.log("PSPDFKit has loaded: ",t)},openDocument:function(t){this.pdfFile&&this.pdfFile.startsWith("blob:")&&window.URL.revokeObjectURL(this.pdfFile),this.pdfFile=window.URL.createObjectURL(t.target.files[0])}}},d=(n(789),n(81)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[t._v(" Open PDF ")]),t._v(" "),n("input",{staticClass:"btn",attrs:{id:"file-upload",type:"file"},on:{change:t.openDocument}}),t._v(" "),n("DocumentPSPDFKitContainer",{attrs:{"pdf-file":t.pdfFile},on:{loaded:t.handleLoaded}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocumentPSPDFKitContainer:n(683).default})}}]);