(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab3487b0"],{"2e28":function(t,e,n){"use strict";n("8c9b")},"39a0":function(t,e,n){"use strict";n.r(e),n.d(e,"export_table_to_excel",(function(){return i})),n.d(e,"export_json_to_excel",(function(){return c}));n("fe59"),n("b722"),n("3e54"),n("e18c"),n("8256b"),n("ab6e"),n("927c"),n("3c51"),n("db0a"),n("1cc1"),n("ab0f"),n("fc6e"),n("f30b"),n("cfd1"),n("d104"),n("f74a"),n("3598"),n("b497"),n("2909"),n("a7ef"),n("b523"),n("e671"),n("4140"),n("83db"),n("829d"),n("939f"),n("1bb1"),n("c3ba");function a(t){for(var e=[],n=t.querySelectorAll("tr"),a=[],s=0;s<n.length;++s){for(var o=[],r=n[s],l=r.querySelectorAll("td"),i=0;i<l.length;++i){var c=l[i],u=c.getAttribute("colspan"),d=c.getAttribute("rowspan"),f=c.innerText;if(""!==f&&f==+f&&(f=+f),a.forEach((function(t){if(s>=t.s.r&&s<=t.e.r&&o.length>=t.s.c&&o.length<=t.e.c)for(var e=0;e<=t.e.c-t.s.c;++e)o.push(null)})),(d||u)&&(d=d||1,u=u||1,a.push({s:{r:s,c:o.length},e:{r:s+d-1,c:o.length+u-1}})),o.push(""!==f?f:null),u)for(var p=0;p<u-1;++p)o.push(null)}e.push(o)}return[e,a]}function s(t,e){e&&(t+=1462);var n=Date.parse(t);return(n-new Date(Date.UTC(1899,11,30)))/864e5}function o(t,e){for(var n={},a={s:{c:1e7,r:1e7},e:{c:0,r:0}},o=0;o!=t.length;++o)for(var r=0;r!=t[o].length;++r){a.s.r>o&&(a.s.r=o),a.s.c>r&&(a.s.c=r),a.e.r<o&&(a.e.r=o),a.e.c<r&&(a.e.c=r);var l={v:t[o][r]};if(null!=l.v){var i=XLSX.utils.encode_cell({c:r,r:o});"number"===typeof l.v?l.t="n":"boolean"===typeof l.v?l.t="b":l.v instanceof Date?(l.t="n",l.z=XLSX.SSF._table[14],l.v=s(l.v)):l.t="s",n[i]=l}}return a.s.c<1e7&&(n["!ref"]=XLSX.utils.encode_range(a)),n}function r(){if(!(this instanceof r))return new r;this.SheetNames=[],this.Sheets={}}function l(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),a=0;a!=t.length;++a)n[a]=255&t.charCodeAt(a);return e}function i(t){var e=document.getElementById(t);console.log("a");var n=a(e),s=n[1],i=n[0],c="SheetJS";console.log(i);var u=new r,d=o(i);d["!merges"]=s,u.SheetNames.push(c),u.Sheets[c]=d;var f=XLSX.write(u,{bookType:"xlsx",bookSST:!1,type:"binary"});saveAs(new Blob([l(f)],{type:"application/octet-stream"}),"test.xlsx")}function c(t,e,n){var a=e;a.unshift(t);var s="SheetJS",i=new r,c=o(a);i.SheetNames.push(s),i.Sheets[s]=c;var u=XLSX.write(i,{bookType:"xlsx",bookSST:!1,type:"binary"}),d=n||"列表";saveAs(new Blob([l(u)],{type:"application/octet-stream"}),d+".xlsx")}n("c0f3"),n("df1a"),n("56a6")},6472:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("collapse"),n("el-collapse",{staticClass:"collapse"},[n("el-collapse-item",{attrs:{title:"条件查询"}},[n("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[n("el-input",{attrs:{size:"small",placeholder:"商品名称/模糊查询"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"商品货号",prop:"productSn"}},[n("el-input",{attrs:{size:"small",placeholder:"商品货号"},model:{value:t.formInline.productSn,callback:function(e){t.$set(t.formInline,"productSn",e)},expression:"formInline.productSn"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"品牌",prop:"brandId"}},[n("el-select",{attrs:{size:"small",placeholder:"品牌"},model:{value:t.formInline.brandId,callback:function(e){t.$set(t.formInline,"brandId",e)},expression:"formInline.brandId"}},t._l(t.brandList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"上架状态",prop:"publishStatus"}},[n("el-select",{attrs:{size:"small",placeholder:"上架状态"},model:{value:t.formInline.publishStatus,callback:function(e){t.$set(t.formInline,"publishStatus",e)},expression:"formInline.publishStatus"}},[n("el-option",{attrs:{label:"下架",value:"0"}}),n("el-option",{attrs:{label:"上架",value:"1"}})],1)],1)],1)],1),n("el-row",{staticClass:"second"},[n("el-col",{attrs:{span:17}},[n("el-form-item",{attrs:{label:"审核状态"}},[n("el-select",{attrs:{size:"small",placeholder:"审核状态"},model:{value:t.formInline.verifyStatus,callback:function(e){t.$set(t.formInline,"verifyStatus",e)},expression:"formInline.verifyStatus"}},[n("el-option",{attrs:{label:"未审核",value:"0"}}),n("el-option",{attrs:{label:"已审核",value:"1"}})],1)],1)],1),n("el-col",{attrs:{span:7}},[n("el-form-item",[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.resetForm("formInline")}}},[t._v("重置")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onSubmit}},[t._v("搜索")])],1)],1)],1)],1)],1)],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"small"},on:{click:t.addgoods}},[t._v("新增")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.exportExcel}},[t._v("导出商品列表为excel文件")])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.shopList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60",type:"index"}}),n("el-table-column",{attrs:{align:"center",prop:"pic",label:"商品图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{height:"100",width:"100",src:t.row.pic,alt:""}})]}}])}),n("el-table-column",{attrs:{align:"center",label:"商品名称",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"name",staticStyle:{"font-size":"14px",color:"#606266"}},[t._v(t._s(e.row.name))]),n("div",{staticClass:"brand",staticStyle:{"font-size":"14px",color:"#606266"}},[t._v("品牌:"+t._s(e.row.brandName))]),n("div",{staticClass:"dec",staticStyle:{"font-size":"14px",color:"#606266"}},[t._v(t._s(e.row.description))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"originalPrice"},[t._v("原价:"+t._s(e.row.originalPrice))]),n("div",{staticClass:"price"},[t._v("原价:"+t._s(e.row.price))])]}}])}),n("el-table-column",{attrs:{align:"center",prop:"productCategoryName",label:"商品类别"}}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"标签"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"inactive-text":"最新:"},on:{change:function(n){return t.changeNew(e.row)}},model:{value:e.row.newStatus,callback:function(n){t.$set(e.row,"newStatus",n)},expression:"scope.row.newStatus"}}),n("el-switch",{attrs:{"inactive-text":"推荐:"},on:{change:function(n){return t.changeRec(e.row)}},model:{value:e.row.recommendStatus,callback:function(n){t.$set(e.row,"recommendStatus",n)},expression:"scope.row.recommendStatus"}})]}}])}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"标签2"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"inactive-text":"发布:"},on:{change:function(n){return t.changePub(e.row)}},model:{value:e.row.publishStatus,callback:function(n){t.$set(e.row,"publishStatus",n)},expression:"scope.row.publishStatus"}}),n("el-switch",{attrs:{"inactive-text":"审核:"},on:{change:function(n){return t.changeVer(e.row)}},model:{value:e.row.verifyStatus,callback:function(n){t.$set(e.row,"verifyStatus",n)},expression:"scope.row.verifyStatus "}})]}}])}),n("el-table-column",{attrs:{align:"center",label:"sku"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.openDialog(e.row.id)}}},[t._v("编辑sku")])]}}])}),n("el-table-column",{attrs:{align:"center",prop:"weight",label:"重量"}}),n("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序"}}),n("el-table-column",{attrs:{align:"center",fixed:"right",width:"120",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"text"},on:{click:function(n){return t.edit(e.row)}}},[t._v("编辑")]),n("el-button",{staticStyle:{color:"red"},attrs:{size:"small",type:"text"},on:{click:function(n){return t.del(e.row)}}},[t._v("删除")])]}}])})],1),n("el-pagination",{attrs:{"current-page":t.start,"page-sizes":t.limits,"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-click":t.handleSizeclick,"current-click":t.handleCurrentclick}})],1),n("goodsDialog",{ref:"Gd"})],1)},s=[],o=(n("fe59"),n("2eeb"),n("08ba"),n("df1a"),n("39a0"),n("d084")),r={data:function(){return{formInline:{brandId:"",name:"",productSn:"",publishStatus:"",verifyStatus:""},brandList:[],start:1,limit:10,limits:[10,15,20,25],shopList:[],total:null}},created:function(){this.getAllbrand(),this.getShopList()},methods:{exportExcel:function(){var t=this;Promise.resolve().then(function(){var e=n("39a0"),a=e.export_json_to_excel,s=["商品名称","商品价格","商品类别","重量","排序"],o=["brandName","price","productCategoryName","weight","sort"],r=t.shopList,l=t.formatJson(o,r);a(s,l,"表格excel")}.bind(null,n)).catch(n.oe)},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},openDialog:function(t){localStorage.setItem("shopId",t),this.$refs.Gd.getshopDeteil()},addgoods:function(){this.$router.push("/goods/addGoods")},del:function(t){var e=this;o["a"].del(t.id).then((function(t){t.success&&(e.$message.success("删除成功"),e.getShopList())}))},edit:function(t){this.$router.push({path:"/goods/addGoods",query:{id:t.id}})},changeNew:function(t){var e=this;o["a"].switchNewStatus({productId:t.id,status:!0===t.newStatus?1:0}).then((function(t){t.success&&(console.log(t),e.$message.success("改变最新状态成功"),e.getShopList())}))},changeRec:function(t){var e=this;o["a"].switchRecommandStatus({productId:t.id,status:1==t.recommendStatus?1:0}).then((function(t){console.log(t),t.success&&(e.$message.success("改变推荐状态成功"),e.getShopList())}))},changePub:function(t){var e=this;o["a"].switchPublishStatus({productId:t.id,status:1==t.publishStatus?1:0}).then((function(t){console.log(t),t.success&&(e.$message.success("改变发布状态成功"),e.getShopList())}))},changeVer:function(t){var e=this;o["a"].switchVerifyStatus({productId:t.id,status:1==t.verifyStatus?1:0}).then((function(t){console.log(t),t.success&&(e.$message.success("改变审核状态成功"),e.getShopList())}))},getShopList:function(){var t=this;o["a"].productsByPage(this.start,this.limit,this.formInline).then((function(e){e.data.rows.forEach((function(t){t.newStatus=1===t.newStatus,t.publishStatus=1===t.publishStatus,t.recommendStatus=1===t.recommendStatus,t.verifyStatus=1===t.verifyStatus})),t.shopList=e.data.rows,t.total=e.data.total}))},handleSizeclick:function(t){this.limit=t,this.getShopList()},handleCurrentclick:function(t){this.start=t,this.getShopList()},getAllbrand:function(){var t=this;o["a"].findAllBrand().then((function(e){t.brandList=e.data.items}))},onSubmit:function(){var t=this;this.start=1;var e={};for(var n in this.formInline)this.formInline[n]&&(e[n]=this.formInline[n]);o["a"].productsByPage(this.start,this.limit,e).then((function(e){t.shopList=e.data.rows}))},resetForm:function(t){this.$refs[t].resetFields()}}},l=r,i=(n("2e28"),n("5d22")),c=Object(i["a"])(l,a,s,!1,null,"9ddcac5c",null);e["default"]=c.exports},"8c9b":function(t,e,n){},df1a:function(t,e,n){n("9302"),n("77ad"),n("053b"),n("e18c"),n("e35a"),n("1c2e"),n("f4e3"),n("0d7a"),
/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
function(t){"use strict";if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return void new Blob}catch(n){}var e=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},a=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},s=n.prototype,o=a.prototype,r=t.FileReaderSync,l=function(t){this.code=this[this.name=t]},i="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),c=i.length,u=t.URL||t.webkitURL||t,d=u.createObjectURL,f=u.revokeObjectURL,p=u,h=t.btoa,b=t.atob,m=t.ArrayBuffer,g=t.Uint8Array;a.fake=o.fake=!0;while(c--)l.prototype[i[c]]=c+1;return u.createObjectURL||(p=t.URL={}),p.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof a?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):h?e+";base64,"+h(t.data):e+","+encodeURIComponent(t.data)):d?d.call(u,t):void 0},p.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(u,t)},s.append=function(t){var n=this.data;if(g&&(t instanceof m||t instanceof g)){for(var s="",o=new g(t),i=0,c=o.length;i<c;i++)s+=String.fromCharCode(o[i]);n.push(s)}else if("Blob"===e(t)||"File"===e(t)){if(!r)throw new l("NOT_READABLE_ERR");var u=new r;n.push(u.readAsBinaryString(t))}else t instanceof a?"base64"===t.encoding&&b?n.push(b(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!==typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},s.getBlob=function(t){return arguments.length||(t=null),new a(this.data.join(""),t,"raw")},s.toString=function(){return"[object BlobBuilder]"},o.slice=function(t,e,n){var s=arguments.length;return s<3&&(n=null),new a(this.data.slice(t,s>1?e:this.data.length),n,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=this.data.length=0},n}(t);t.Blob=function(t,n){var a=n&&n.type||"",s=new e;if(t)for(var o=0,r=t.length;o<r;o++)s.append(t[o]);return s.getBlob(a)}}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||this.content||this)}}]);