(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86cea5a0"],{"022f":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"limitad"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.dialogVisible=!t.dialogVisible}}},[t._v("新增")])],1),i("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.limitAd}},[i("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),i("el-table-column",{attrs:{align:"center",property:"pic",label:"商品图片",width:"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{attrs:{width:"100",height:"100",src:t.row.pic,alt:""}})]}}])}),i("el-table-column",{attrs:{align:"center",property:"promotionStartTime",label:"活动时间",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",[t._v("开始时间:"+t._s(e.row.promotionStartTime))]),i("div",[t._v("结束时间:"+t._s(e.row.promotionEndTime))])]}}])}),i("el-table-column",{attrs:{align:"center",property:"publishStatus",label:"是否过期"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",[t._v(t._s(t._f("btime")(e.row.promotionEndTime)))])]}}])}),i("el-table-column",{attrs:{align:"center",property:"name",width:"280",label:"商品名称"}}),i("el-table-column",{attrs:{align:"center",property:"brandName",label:"品牌名称"}}),i("el-table-column",{attrs:{align:"center",property:"price",label:"商品价格"}}),i("el-table-column",{attrs:{align:"center",property:"productCategoryName",label:"商品类别"}}),i("el-table-column",{attrs:{align:"center",property:"createTime",label:"创建时间"}}),i("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"mini"},on:{click:function(i){return t.del(e.row)}}},[t._v("删除")])]}}])})],1)],1),i("el-dialog",{attrs:{title:"热情详情",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.Close}},[i("el-card",[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("条件查询")])]),i("el-form",{ref:"formad",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formad}},[i("el-form-item",[i("el-input",{attrs:{size:"small",placeholder:"商品名称/模糊查询"},model:{value:t.formad.name,callback:function(e){t.$set(t.formad,"name",e)},expression:"formad.name"}})],1),i("el-form-item",[i("el-input",{attrs:{size:"small",placeholder:"商品货号"},model:{value:t.formad.productSn,callback:function(e){t.$set(t.formad,"productSn",e)},expression:"formad.productSn "}})],1),i("el-form-item",[i("el-select",{attrs:{size:"small",placeholder:"品牌"},model:{value:t.formad.brandId,callback:function(e){t.$set(t.formad,"brandId",e)},expression:"formad.brandId"}},t._l(t.brandlist,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),i("el-form-item",[i("el-select",{attrs:{size:"small",placeholder:"上架状态"},model:{value:t.formad.publishStatus,callback:function(e){t.$set(t.formad,"publishStatus",e)},expression:"formad.publishStatus "}},[i("el-option",{attrs:{label:"上架",value:"1"}}),i("el-option",{attrs:{label:"未上架",value:"0"}})],1)],1),i("el-form-item",[i("el-select",{attrs:{size:"small",placeholder:"审核状态"},model:{value:t.formad.verifyStatus,callback:function(e){t.$set(t.formad,"verifyStatus",e)},expression:"formad.verifyStatus "}},[i("el-option",{attrs:{label:"审核",value:"1"}}),i("el-option",{attrs:{label:"未审核",value:"0"}})],1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.onReset("formad")}}},[t._v("重置")]),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1),i("el-card",{staticClass:"editadd"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("商品列表")])]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.shoplist,border:""}},[i("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),i("el-table-column",{attrs:{align:"center",property:"date",label:"选择",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-radio",{on:{change:function(i){return t.editshop(e.row.id)}},model:{value:e.row.ischeck,callback:function(i){t.$set(e.row,"ischeck",i)},expression:"scope.row.ischeck"}})]}}])}),i("el-table-column",{attrs:{align:"center",property:"pic",label:"商品图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{attrs:{height:"50",width:"50",src:t.row.pic,alt:""}})]}}])}),i("el-table-column",{attrs:{align:"center",property:"name",label:"商品名称"}}),i("el-table-column",{attrs:{align:"center",property:"address",label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",[t._v("原价:"+t._s(e.row.originalPrice))]),i("div",[t._v("现价:"+t._s(e.row.price))])]}}])}),i("el-table-column",{attrs:{align:"center",property:"productCategoryName",label:"商品类别"}}),i("el-table-column",{attrs:{align:"center",property:"weight",label:"重量"}})],1),i("el-pagination",{attrs:{"current-page":t.start,"page-sizes":t.limits,"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1),i("el-dialog",{attrs:{title:"编辑限时活动",visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.closed}},[i("div",{staticClass:"times"},[i("div",[t._v("商品原价:"+t._s(t.editShop.originalPrice))]),i("div",{staticClass:"name",staticStyle:{width:"150px"}},[t._v("商品名称:"+t._s(t.editShop.name))])]),i("div",{staticClass:"times"},[i("div",[t._v("促销价格 "),i("el-input-number",{staticStyle:{width:"150px"},attrs:{size:"small",label:"促销价格"},model:{value:t.promotionPrice,callback:function(e){t.promotionPrice=e},expression:"promotionPrice"}})],1),i("div",[t._v("排序 "),i("el-input-number",{staticStyle:{width:"150px"},attrs:{size:"small",label:"排序"},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1)]),i("div",{staticClass:"times"},[i("div",[t._v("开始时间 "),i("el-date-picker",{staticStyle:{width:"150px"},attrs:{size:"small",type:"datetime",placeholder:"选择日期时间"},model:{value:t.promotionStartTime,callback:function(e){t.promotionStartTime=e},expression:"promotionStartTime"}})],1),i("div",[t._v(" 结束时间 "),i("el-date-picker",{staticStyle:{width:"150px"},attrs:{size:"small",type:"datetime",placeholder:"选择日期时间"},model:{value:t.promotionEndTime,callback:function(e){t.promotionEndTime=e},expression:"promotionEndTime"}})],1)]),i("div",{staticClass:"times"},[i("div",[t._v(" 活动限购数量 "),i("el-input",{staticStyle:{width:"150px"},attrs:{size:"small"},model:{value:t.promotionPerLimit,callback:function(e){t.promotionPerLimit=e},expression:"promotionPerLimit"}})],1),i("div",[i("div",[t._v("商品图片")]),i("img",{attrs:{height:"100",width:"100",src:t.editShop.pic,alt:""}})])]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClose1}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.comfirm}},[t._v("确 定")])],1)])],1)},a=[],l=(i("fe59"),i("e35a"),i("5e9f"),i("08ba"),i("a9af"),i("b4fb"),i("0c6d"));function n(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/addRecommend",method:"POST",data:t})}function r(){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/findAllRecommends",method:"GET"})}function s(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/delRecommend/".concat(t),method:"DELETE"})}function c(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/updateRecommend",method:"POST",data:t})}function d(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/".concat(t),method:"GET"})}function m(t,e,i){return Object(l["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"POST",data:i})}function u(){return Object(l["a"])({url:"/lejuAdmin/brand/findAllBrand",method:"GET"})}function p(t){return Object(l["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(t),method:"GET"})}var f={addRecommend:n,findAllRecommends:r,delRecommend:s,updateRecommend:c,homeRecommend:d,productsByPage:m,findAllBrand:u,productSkusDetail:p},h={data:function(){return{limitAd:[],dialogVisible:!1,dialogFormVisible:!1,formad:{brandId:"",id:"",name:"",productCategoryId:"",productSn:"",publishStatus:"",verifyStatus:""},form:{name:"",region:""},brandlist:[],shoplist:[],start:1,limit:10,limits:[10,15,20,25],total:"",editShop:"",promotionPrice:"",sort:"",promotionStartTime:"",promotionEndTime:"",promotionPerLimit:""}},created:function(){this.getaddList(),this.getBrand(),this.getShoplist()},filters:{btime:function(t){var e=new Date(t).getTime()-(new Date).getTime();return e>=0?"活动正在举行":"活动已过期"}},methods:{rTime:function(t){var e=new Date(t).toJSON();return new Date(new Date(e)+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")},handleClose1:function(){console.log(1),this.dialogFormVisible=!1,this.getShoplist()},closed:function(){this.dialogFormVisible=!1,this.getShoplist()},Close:function(){this.dialogVisible=!1},comfirm:function(){var t=this;f.addRecommend({productId:this.editShop.id,promotionPrice:this.promotionPrice,sort:this.sort,promotionStartTime:this.rTime(this.promotionStartTime),promotionEndTime:this.rTime(this.promotionEndTime),promotionPerLimit:this.promotionPerLimit}).then((function(e){e.success&&(t.$message.success("限时活动编辑成功"),t.dialogVisible=!1,t.dialogFormVisible=!1,t.sort="",t.promotionStartTime="",t.promotionEndTime="",t.promotionPerLimit="",t.getShoplist(),t.getaddList())}))},editshop:function(t){var e=this;this.dialogFormVisible=!0,f.productSkusDetail(t).then((function(t){console.log(t),e.editShop=t.data.product}))},handleSizeChange:function(t){this.limit=t,this.getShoplist()},handleCurrentChange:function(t){this.start=t,this.getShoplist()},getBrand:function(){var t=this;f.findAllBrand().then((function(e){t.brandlist=e.data.items}))},getaddList:function(){var t=this;f.findAllRecommends().then((function(e){t.limitAd=e.data.items}))},getShoplist:function(){var t=this;f.productsByPage(this.start,this.limit).then((function(e){e.data.rows.forEach((function(t){t.ischeck=!1})),t.total=e.data.total,t.shoplist=e.data.rows}))},del:function(t){var e=this;console.log(t),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){f.delRecommend(t.recommendId).then((function(t){t.success&&(e.$message({type:"success",message:"删除成功!"}),e.getaddList())}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},addAd:function(){this.$router.push("")},handleClose:function(){},onSubmit:function(){var t=this;this.start=1,f.productsByPage(this.start,this.limit,this.formad).then((function(e){e.data.rows.forEach((function(t){t.ischeck=!1})),t.shoplist=e.data.rows,console.log(e)}))},onReset:function(t){this.$refs[t].resetFields()}}},b=h,g=(i("899f"),i("b9e3"),i("5d22")),v=Object(g["a"])(b,o,a,!1,null,"48b7021b",null);e["default"]=v.exports},"565c":function(t,e,i){},"899f":function(t,e,i){"use strict";i("565c")},a9af:function(t,e,i){"use strict";var o=i("1c8b");o({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},b9e3:function(t,e,i){"use strict";i("f729")},f729:function(t,e,i){}}]);