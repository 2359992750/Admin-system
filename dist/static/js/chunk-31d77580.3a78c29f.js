(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31d77580"],{"0b08":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("注册用户列表")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"180"}}),a("el-table-column",{attrs:{prop:"icon",label:"头像",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{"border-radius":"50%"},attrs:{width:"80",height:"80",src:t.row.icon,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称"}}),a("el-table-column",{attrs:{prop:"realname",label:"真实姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),a("el-table-column",{attrs:{prop:"phone",label:"电话"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"birthday",label:"生日"}}),a("el-table-column",{attrs:{prop:"createTime",label:"注册时间"}})],1),a("el-pagination",{attrs:{"current-page":t.start,"page-sizes":t.limits,"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],r=(a("b4fb"),a("0c6d"));function i(t,e){return Object(r["a"])({url:"/lejuAdmin/member/findMembersByPage/".concat(t,"/").concat(e),method:"GET"})}var s={findMembersByPage:i},o={data:function(){return{tableData:[],start:1,limit:10,limits:[10,20,30],total:null}},created:function(){this.getuser()},methods:{getuser:function(){var t=this;s.findMembersByPage(this.start,this.limit).then((function(e){t.tableData=e.data.rows,t.total=e.data.total}))},handleSizeChange:function(t){this.limit=t,this.getuser()},handleCurrentChange:function(t){this.start=t,this.getuser()}}},c=o,u=(a("c3ca"),a("5d22")),b=Object(u["a"])(c,l,n,!1,null,"7b007a0c",null);e["default"]=b.exports},6522:function(t,e,a){},c3ca:function(t,e,a){"use strict";a("6522")}}]);