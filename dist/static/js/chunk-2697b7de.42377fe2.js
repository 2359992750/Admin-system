(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2697b7de"],{"0b95":function(t,e,i){},"1b3b":function(t,e,i){"use strict";i("b4fb");var n=i("0c6d");function a(t,e,i){return Object(n["a"])({url:"/lejuAdmin/productArticle/findArticles/".concat(t,"/").concat(e),method:"POST",data:i})}function r(t){return Object(n["a"])({url:"/lejuAdmin/productArticle/del/".concat(t),method:"DELETE"})}function l(t){return Object(n["a"])({url:"/lejuAdmin/productArticle/updateArticle",method:"POST",data:t})}function s(t){return Object(n["a"])({url:"/lejuAdmin/productArticle/addArticle",method:"POST",data:t})}function o(t){return Object(n["a"])({url:"/lejuAdmin/productArticle/changeShowStatus",method:"POST",data:t})}function c(t){return Object(n["a"])({url:"/lejuAdmin/productArticle/productArticle/".concat(t),method:"GET"})}e["a"]={getArticleList:a,delArticle:r,updateArticle:l,addArticle:s,changeShowStatus:o,productArticle:c}},"1b62":function(t,e,i){"use strict";e["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,20,30,40],total:0}}}}},"2f61":function(t,e,i){"use strict";i("0b95")},"71ae":function(t,e,i){},b143:function(t,e,i){"use strict";i("71ae")},ec4b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-main"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("条件查询")])]),i("el-form",{ref:"formInline",staticClass:"demo-form-inline",staticStyle:{"margin-left":"100px"},attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{attrs:{label:"作者"}},[i("el-input",{attrs:{size:"small",placeholder:"作者"},model:{value:t.formInline.author,callback:function(e){t.$set(t.formInline,"author",e)},expression:"formInline.author"}})],1),i("el-form-item",{staticStyle:{margin:"0 100px"},attrs:{label:"标题"}},[i("el-input",{attrs:{size:"small",placeholder:"标题"},model:{value:t.formInline.title,callback:function(e){t.$set(t.formInline,"title",e)},expression:"formInline.title"}})],1),i("el-form-item",{attrs:{label:"编辑类型"}},[i("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.formInline.editorType,callback:function(e){t.$set(t.formInline,"editorType",e)},expression:"formInline.editorType "}},[i("el-option",{attrs:{label:"富文本",value:"0"}}),i("el-option",{attrs:{label:"markdown",value:"1"}})],1)],1),i("div",{staticStyle:{width:"85%","text-align":"right"}},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onReset("formInline")}}},[t._v("重置")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onSubmit}},[t._v("搜索")])],1)],1)],1),i("el-card",{staticClass:"card",attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-button",{attrs:{type:"primary"},on:{click:t.addarticle}},[t._v("新增")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.articleList,border:""}},[i("el-table-column",{attrs:{label:"#",type:"index",width:"50",fixed:"left",align:"center"}}),i("el-table-column",{attrs:{prop:"title",label:"文章标题",align:"center",width:"200"}}),i("el-table-column",{attrs:{label:"展示图片",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{staticClass:"list_img",attrs:{src:t.row.coverImg,alt:""}})]}}])}),i("el-table-column",{attrs:{prop:"createTime",label:"添加时间",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"author",label:"文章作者",align:"center",width:"200"}}),i("el-table-column",{attrs:{label:"文章是否展示",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-switch",{attrs:{"inactive-value":0,"active-value":1},on:{change:function(i){return t.changestatus(e)}},model:{value:e.row.isShow,callback:function(i){t.$set(e.row,"isShow",i)},expression:"scope.row.isShow"}})]}}])}),i("el-table-column",{attrs:{prop:"editorType",label:"内容",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",plain:""}},[t._v(t._s(0==e.row.editorType?"富文本框":"markdown"))])]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticClass:"edit",attrs:{icon:"iconfont icon-eyes",type:"text",size:"mini"},on:{click:function(i){return t.edit(e.row)}}},[t._v("编辑")]),i("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"mini"},on:{click:function(i){return t.del(e.row)}}},[t._v("删除")])]}}])})],1),i("el-pagination",{attrs:{"current-page":t.page.currentPage,"page-sizes":t.page.pageSizes,"page-size":t.page.size,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},a=[],r=i("1b3b"),l=i("1b62"),s={name:"Aticle",mixins:[l["a"]],data:function(){return{listLoading:!1,articleList:[],formInline:{author:"",title:"",editorType:""}}},created:function(){this.getList()},mounted:function(){},methods:{getList:function(){var t=this;this.listLoading=!0,r["a"].getArticleList(this.page.currentPage,this.page.size,{}).then((function(e){e.success?(t.articleList=e.data.rows,t.page.total=e.data.total):t.$message.error("请求失败"),t.listLoading=!1}))},edit:function(t){this.$router.push({path:"/content/addarticle",query:{id:t.id}})},addarticle:function(){this.$router.push({name:"Addarticle"})},onSubmit:function(){var t=this;this.page.currentPage=1,r["a"].getArticleList(this.page.currentPage,this.page.size,this.formInline).then((function(e){t.articleList=e.data.rows}))},changestatus:function(t){var e=this;r["a"].changeShowStatus({isShow:t.row.isShow,id:t.row.id}).then((function(t){t.success?e.$message.success("更新状态成功"):e.$message.error("更新状态失败")}))},onReset:function(t){this.$refs[t].resetFields()},del:function(t){var e=this;this.$confirm("此操作将永久删除该文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r["a"].delArticle(t.id).then((function(t){t.success&&(e.getList(),e.$message({type:"success",message:"删除成功!"}))}))}))},handleSizeChange:function(t){this.page.size=t,this.page.currentPage=1,this.getList()},handleCurrentChange:function(t){this.page.currentPage=t,this.getList()}}},o=s,c=(i("2f61"),i("b143"),i("5d22")),u=Object(c["a"])(o,n,a,!1,null,"523273be",null);e["default"]=u.exports}}]);