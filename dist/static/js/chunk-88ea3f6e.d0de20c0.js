(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88ea3f6e"],{"0d66":function(e,t,s){"use strict";s("5368")},"10a7":function(e,t,s){"use strict";s("518d")},"1b62":function(e,t,s){"use strict";t["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,20,30,40],total:0}}}}},"3e69":function(e,t,s){"use strict";s("b4fb");var a=s("0c6d");function i(e,t,s){return Object(a["a"])({url:"/admin/sysAuth/user/findUsersByPage/".concat(e,"/").concat(t),data:s,method:"POST"})}function r(e){return Object(a["a"])({url:"/admin/sysAuth/user/removeUser/".concat(e),method:"DELETE"})}function n(e){return Object(a["a"])({url:"/admin/sysAuth/user/saveUserRoles",method:"POST",data:e})}function o(e){return Object(a["a"])({url:"/admin/sysAuth/user/updateUserRoles",method:"PUT",data:e})}function l(e){return Object(a["a"])({url:"/admin/sysAuth/user/".concat(e),method:"GET"})}function c(){return Object(a["a"])({url:"/admin/sysAuth/role/findAllRoles",method:"GET"})}function u(e,t){return Object(a["a"])({url:"/admin/sysAuth/role/findRolesByPage/".concat(e,"/").concat(t),method:"GET"})}function d(e){return Object(a["a"])({url:"/admin/sysAuth/role/removeRole/".concat(e),method:"DELETE"})}function m(e){return Object(a["a"])({url:"/admin/sysAuth/role/saveRolePermissions",method:"POST",data:e})}function f(e){return Object(a["a"])({url:"/admin/sysAuth/role/updateRolePermissions",method:"PUT",data:e})}function h(e){return Object(a["a"])({url:"/admin/sysAuth/role/".concat(e),method:"GET"})}function p(){return Object(a["a"])({url:"/admin/sysAuth/permission/findAllPermissions",method:"GET"})}function g(){return Object(a["a"])({url:"/admin/sysAuth/permission/remove/".concat(id),method:"POST"})}function b(e){return Object(a["a"])({url:"/admin/sysAuth/permission/save",method:"POST",data:e})}function v(e){return Object(a["a"])({url:"/admin/sysAuth/permission/saveInitMenus",method:"POST",data:e})}t["a"]={findUsersByPage:i,removeUser:r,saveUserRoles:n,updateUserRoles:o,user:l,findAllRoles:c,findRolesByPage:u,removeRole:d,saveRolePermissions:m,updateRolePermissions:f,role:h,findAllPermissions:p,remove:g,save:b,saveInitMenus:v}},"518d":function(e,t,s){},5368:function(e,t,s){},b7d3:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"article-main"},[s("el-card",{staticClass:"box-card"},[s("el-form",{ref:"formInline",staticClass:"demo-form-inline",staticStyle:{"margin-left":"100px"},attrs:{inline:!0,model:e.formInline}},[s("el-form-item",{attrs:{label:"昵称"}},[s("el-input",{attrs:{size:"small",placeholder:"昵称模糊搜索"},model:{value:e.formInline.nickName,callback:function(t){e.$set(e.formInline,"nickName",t)},expression:"formInline.nickName"}})],1),s("el-form-item",{staticStyle:{margin:"0 100px"},attrs:{label:"用户名"}},[s("el-input",{attrs:{size:"small",placeholder:"用户名模糊搜索"},model:{value:e.formInline.username,callback:function(t){e.$set(e.formInline,"username",t)},expression:"formInline.username"}})],1),s("div",{staticStyle:{width:"85%","text-align":"right"}},[s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.onReset("formInline")}}},[e._v("重置")]),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onSubmit}},[e._v("搜索")])],1)],1)],1),s("el-card",{staticClass:"card",attrs:{shadow:"never"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("el-button",{attrs:{type:"primary"},on:{click:e.addarticle}},[e._v("新增")])],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.articleList,border:""}},[s("el-table-column",{attrs:{label:"#",type:"index",width:"50",fixed:"left",align:"center"}}),s("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center",width:"200"}}),s("el-table-column",{attrs:{prop:"nick_name",label:"昵称",align:"center",width:"200"}}),s("el-table-column",{attrs:{label:"头像",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("img",{staticClass:"list_img",attrs:{src:e.row.salt,alt:""}})]}}])}),s("el-table-column",{attrs:{prop:"roles",label:"角色",align:"center",width:"200"}}),s("el-table-column",{attrs:{prop:"create_time",label:"添加时间",align:"center",width:"200"}}),s("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{staticClass:"edit",attrs:{type:"success",size:"mini"},on:{click:function(s){return e.edit(t.row)}}},[e._v("编辑")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(s){return e.del(t.row)}}},[e._v("删除")])]}}])})],1),s("el-pagination",{attrs:{"current-page":e.page.currentPage,"page-sizes":e.page.pageSizes,"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),s("el-dialog",{attrs:{title:"编辑用户",visible:e.dialogFormVisible,width:"20%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{attrs:{model:e.editform,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username",rules:[{required:!0,message:"用户名不能为空"}]}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.editform.username,callback:function(t){e.$set(e.editform,"username",e._n(t))},expression:"editform.username"}})],1),s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName",rules:[{required:!0,message:"用户昵称不能为空"}]}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.editform.nickName,callback:function(t){e.$set(e.editform,"nickName",e._n(t))},expression:"editform.nickName"}})],1),e.userId?e._e():s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.editform.password,callback:function(t){e.$set(e.editform,"password",e._n(t))},expression:"editform.password"}})],1),s("el-form-item",{attrs:{label:"用户头像"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/lejuAdmin/material/uploadFileOss","show-file-list":!1,headers:e.Token,"on-success":e.handleAvatarSuccess}},[e.editform.salt?s("img",{staticClass:"avatar",attrs:{height:"50",width:"50",src:e.editform.salt}}):s("i",{staticClass:"el-icon-user"})])],1),s("el-form-item",{attrs:{label:"选择角色",prop:"roleIds",rules:[{required:!0,message:"必须选择角色"}]}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editform.roleIds,callback:function(t){e.$set(e.editform,"roleIds",t)},expression:"editform.roleIds"}},e._l(e.roleList,(function(e){return s("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e.userId?s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.editUser}},[e._v("确 定")]):s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1)],1)},i=[],r=(s("fe59"),s("08ba"),s("2f4d")),n=s("3e69"),o=s("1b62"),l={name:"Aticle",mixins:[o["a"]],data:function(){return{Token:{token:""},dialogFormVisible:!1,editform:{nickName:"",password:"",salt:"",roleIds:"",username:"",roles:""},listLoading:!1,articleList:[],formInline:{nickName:"",username:""},userId:"",roleList:[]}},created:function(){this.getList(),this.getAllRole(),this.Token.token=Object(r["b"])()},methods:{addUser:function(){var e=this;this.roleList.forEach((function(t){t.id===e.editform.roleIds&&(e.editform.roles=t.roleName)})),this.editform.roleIds=[this.editform.roleIds],n["a"].saveUserRoles(this.editform).then((function(t){t.success&&(e.$message.success("添加用户成功"),e.getList(),e.dialogFormVisible=!1)}))},editUser:function(){var e=this;n["a"].updateUserRoles(this.editform).then((function(t){t.success&&(e.$message.success("更新成功"),e.getList())}))},handleAvatarSuccess:function(e){this.editform.salt=e.data.fileUrl},getAllRole:function(){var e=this;n["a"].findAllRoles().then((function(t){e.roleList=t.data.items}))},getList:function(){var e=this;this.listLoading=!0,n["a"].findUsersByPage(this.page.currentPage,this.page.size,{}).then((function(t){t.success?(e.articleList=t.data.rows,e.page.total=t.data.total):e.$message.error("请求失败"),e.listLoading=!1}))},edit:function(e){var t=this;this.dialogFormVisible=!0,this.userId=e.id,n["a"].user(this.userId).then((function(e){t.roleList.forEach((function(t){t.id===e.data.user.roleIds[0]&&(e.data.user.roleIds=t.roleName)})),t.editform=e.data.user,console.log(t.editform)}))},addarticle:function(){this.dialogFormVisible=!0},onSubmit:function(){var e=this;this.page.currentPage=1,n["a"].findUsersByPage(this.page.currentPage,this.page.size,this.formInline).then((function(t){console.log(t),e.articleList=t.data.rows}))},onReset:function(e){this.$refs[e].resetFields()},del:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n["a"].removeUser(e.id).then((function(e){e.success&&(t.getList(),t.$message({type:"success",message:"删除成功!"}))}))}))},handleSizeChange:function(e){this.page.size=e,this.page.currentPage=1,this.getList()},handleCurrentChange:function(e){this.page.currentPage=e,this.getList()}}},c=l,u=(s("10a7"),s("0d66"),s("5d22")),d=Object(u["a"])(c,a,i,!1,null,"577d2a8a",null);t["default"]=d.exports}}]);