(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02b197e2"],{"3e69":function(e,t,i){"use strict";i("b4fb");var s=i("0c6d");function a(e,t,i){return Object(s["a"])({url:"/admin/sysAuth/user/findUsersByPage/".concat(e,"/").concat(t),data:i,method:"POST"})}function l(e){return Object(s["a"])({url:"/admin/sysAuth/user/removeUser/".concat(e),method:"DELETE"})}function r(e){return Object(s["a"])({url:"/admin/sysAuth/user/saveUserRoles",method:"POST",data:e})}function o(e){return Object(s["a"])({url:"/admin/sysAuth/user/updateUserRoles",method:"PUT",data:e})}function n(e){return Object(s["a"])({url:"/admin/sysAuth/user/".concat(e),method:"GET"})}function c(){return Object(s["a"])({url:"/admin/sysAuth/role/findAllRoles",method:"GET"})}function m(e,t){return Object(s["a"])({url:"/admin/sysAuth/role/findRolesByPage/".concat(e,"/").concat(t),method:"GET"})}function u(e){return Object(s["a"])({url:"/admin/sysAuth/role/removeRole/".concat(e),method:"DELETE"})}function d(e){return Object(s["a"])({url:"/admin/sysAuth/role/saveRolePermissions",method:"POST",data:e})}function p(e){return Object(s["a"])({url:"/admin/sysAuth/role/updateRolePermissions",method:"PUT",data:e})}function h(e){return Object(s["a"])({url:"/admin/sysAuth/role/".concat(e),method:"GET"})}function f(){return Object(s["a"])({url:"/admin/sysAuth/permission/findAllPermissions",method:"GET"})}function b(){return Object(s["a"])({url:"/admin/sysAuth/permission/remove/".concat(id),method:"POST"})}function v(e){return Object(s["a"])({url:"/admin/sysAuth/permission/save",method:"POST",data:e})}function y(e){return Object(s["a"])({url:"/admin/sysAuth/permission/saveInitMenus",method:"POST",data:e})}t["a"]={findUsersByPage:a,removeUser:l,saveUserRoles:r,updateUserRoles:o,user:n,findAllRoles:c,findRolesByPage:m,removeRole:u,saveRolePermissions:d,updateRolePermissions:p,role:h,findAllPermissions:f,remove:b,save:v,saveInitMenus:y}},"4e81":function(e,t,i){"use strict";i("df89")},7506:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"article-main"},[i("el-card",{staticClass:"card",attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-button",{attrs:{size:"small",type:"warning"},on:{click:e.initMenu}},[e._v("初始化菜单")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addMenu}},[e._v("新增菜单")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableData,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[e._v(" > "),i("el-table-column",{attrs:{prop:"title",label:"菜单名称",align:"left",width:"200"}}),i("el-table-column",{attrs:{label:"图标",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("div",{class:e.row.icon})]}}])}),i("el-table-column",{attrs:{prop:"level",label:"等级",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"permissionValue",label:"权限标识",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"path",label:"路由",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"component",label:"组件路径",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"status",label:"是否可用",align:"center",width:"200"}}),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center",width:"200"}})],1)],1),i("el-dialog",{attrs:{title:"初始化菜单",visible:e.init,width:"30%"},on:{"update:visible":function(t){e.init=t}}},[i("el-alert",{staticStyle:{"margin-bottom":"30px"},attrs:{title:"请谨慎操作! 初始化菜单会覆盖之前记录!",type:"warning"}}),i("el-tree",{attrs:{data:e.tableData,props:e.defaultProps}}),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.init=!1}}},[e._v("取 消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.comfirmInit}},[e._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"编辑菜单",visible:e.dialogFormVisible,width:"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"菜单类型"}},[i("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[i("el-radio",{attrs:{label:0}},[e._v("顶级目录")]),i("el-radio",{attrs:{label:1}},[e._v("菜单")]),i("el-radio",{attrs:{label:2}},[e._v("按钮")])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.radio,expression:"radio===0"}]},[i("el-form-item",{attrs:{label:"路由名称"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由name,唯一"},model:{value:e.Permission.name,callback:function(t){e.$set(e.Permission,"name",t)},expression:"Permission.name"}})],1),i("el-form-item",{attrs:{label:"路径"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由path,忽略父节点路径"},model:{value:e.Permission.path,callback:function(t){e.$set(e.Permission,"path",t)},expression:"Permission.path"}})],1),i("el-form-item",{attrs:{label:"组件路径"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由组件路径,比如@/views/foo/foo.vue"},model:{value:e.Permission.component,callback:function(t){e.$set(e.Permission,"component",t)},expression:"Permission.component"}})],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"排序"}},[i("el-input-number",{attrs:{min:0},model:{value:e.Permission.sort,callback:function(t){e.$set(e.Permission,"sort",t)},expression:"Permission.sort"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"重定向"}},[i("el-input",{attrs:{size:"small",placeholder:"redirect属性"},model:{value:e.Permission.redirect,callback:function(t){e.$set(e.Permission,"redirect",t)},expression:"Permission.redirect"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否显示"}},[i("el-select",{attrs:{placeholder:""},model:{value:e.Permission.hidden,callback:function(t){e.$set(e.Permission,"hidden",t)},expression:"Permission.hidden"}},[i("el-option",{attrs:{label:"是",value:"1"}}),i("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否展开"}},[i("el-select",{attrs:{placeholder:""},model:{value:e.Permission.alwaysShow,callback:function(t){e.$set(e.Permission,"alwaysShow",t)},expression:"Permission.alwaysShow"}},[i("el-option",{attrs:{label:"是",value:"1"}}),i("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1)],1),i("el-form-item",{attrs:{label:"meta属性"}},e._l(e.Meta,(function(t){return i("el-row",{key:t.id,staticStyle:{display:"flex"},attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{size:"small",placeholder:"比如:title"},model:{value:t.key,callback:function(i){e.$set(t,"key",i)},expression:"item.key"}})],1),i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{size:"small"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}})],1),i("el-button",{staticClass:"el-icon-plus",attrs:{type:"text"},on:{click:function(i){return e.addmeta(t.id)}}}),i("el-button",{staticClass:"el-icon-minus",attrs:{type:"text"},on:{click:function(i){return e.delmeta(t.id)}}})],1)})),1)],1),1===e.radio?i("div",[i("el-form",{attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"上级菜单"}},[i("el-cascader",{attrs:{options:e.tableData,props:{checkStrictly:!0,children:"children",label:"title",value:"id"},clearable:""},on:{change:e.cascValue}})],1),i("el-form-item",{attrs:{label:"路由名称"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由name,唯一"},model:{value:e.Permission.name,callback:function(t){e.$set(e.Permission,"name",t)},expression:"Permission.name"}})],1),i("el-form-item",{attrs:{label:"路径"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由path,忽略父节点路径"},model:{value:e.Permission.path,callback:function(t){e.$set(e.Permission,"path",t)},expression:"Permission.path"}})],1),i("el-form-item",{attrs:{label:"组件路径"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由组件路径,比如@/views/foo/foo.vue"},model:{value:e.Permission.component,callback:function(t){e.$set(e.Permission,"component",t)},expression:"Permission.component"}})],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"排序"}},[i("el-input-number",{attrs:{min:0},model:{value:e.Permission.sort,callback:function(t){e.$set(e.Permission,"sort",t)},expression:"Permission.sort"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"重定向"}},[i("el-input",{attrs:{size:"small",placeholder:"redirect属性"},model:{value:e.Permission.redirect,callback:function(t){e.$set(e.Permission,"redirect",t)},expression:"Permission.redirect"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否显示"}},[i("el-select",{attrs:{placeholder:""},model:{value:e.Permission.hidden,callback:function(t){e.$set(e.Permission,"hidden",t)},expression:"Permission.hidden"}},[i("el-option",{attrs:{label:"是",value:"1"}}),i("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否展开"}},[i("el-select",{attrs:{placeholder:""},model:{value:e.Permission.alwaysShow,callback:function(t){e.$set(e.Permission,"alwaysShow",t)},expression:"Permission.alwaysShow"}},[i("el-option",{attrs:{label:"是",value:"1"}}),i("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1)],1)],1)],1):e._e(),2===e.radio?i("div",[i("el-form",{attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"上级菜单"}},[i("el-cascader",{attrs:{options:e.tableData,props:{checkStrictly:!0,children:"children",label:"title",value:"id"},clearable:""},on:{change:e.cascValue}})],1),i("el-form-item",{attrs:{label:"按钮名称"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"前端路由name,唯一"},model:{value:e.Permission.name,callback:function(t){e.$set(e.Permission,"name",t)},expression:"Permission.name"}})],1),i("el-form-item",{attrs:{label:"排序"}},[i("el-input-number",{staticStyle:{width:"200px"},attrs:{min:0},model:{value:e.Permission.sort,callback:function(t){e.$set(e.Permission,"sort",t)},expression:"Permission.sort"}})],1),i("el-form-item",{attrs:{label:"权限识别"}},[i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.Permission.permissionValue,callback:function(t){e.$set(e.Permission,"permissionValue",t)},expression:"Permission.permissionValue"}})],1)],1)],1):e._e()],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.comfirm}},[e._v("确 定")])],1)],1)],1)},a=[],l=(i("fe59"),i("ea69"),i("08ba"),i("3e69")),r=i("896e"),o={data:function(){return{Permission:{name:"",path:"",sort:"",meta:{},component:"",permissionValue:"",type:1,hidden:"",alwaysShow:"",pid:""},Meta:[{id:Object(r["a"])(),key:"title",value:"未命名"}],defaultProps:{children:"children",label:"title"},dialogFormVisible:!1,init:!1,radio:0,listLoading:!1,tableData:[]}},created:function(){this.getList()},methods:{cascValue:function(e){this.Permission.pid=e[e.length-1]},delmeta:function(){this.Meta.splice(this.Meta.length-1,1)},addmeta:function(e){var t={id:Object(r["a"])(),key:"",value:""};this.Meta.push(t)},initMenu:function(){this.init=!0},addMenu:function(){this.dialogFormVisible=!0},comfirmInit:function(){var e=this;l["a"].saveInitMenus(this.tableData).then((function(t){t.success&&(e.$message.success("初始化成功"),e.getList(),e.init=!1)}))},getList:function(){var e=this;l["a"].findAllPermissions().then((function(t){e.tableData=t.data.menus}))},comfirm:function(){var e=this;this.Meta.forEach((function(t){e.Permission.meta[t.key]=t.value})),this.Permission.meta=JSON.stringify(this.Permission.meta),this.Permission.type=2===this.radio?2:1,this.Permission.hidden=1==this.Permission.hidden,this.Permission.alwaysShow=1==this.Permission.alwaysShow,l["a"].save(this.Permission).then((function(t){t.success&&(e.$message.success("新增菜单成功"),e.dialogFormVisible=!1,e.getList())}))}}},n=o,c=(i("d284"),i("4e81"),i("5d22")),m=Object(c["a"])(n,s,a,!1,null,"69e3f75c",null);t["default"]=m.exports},"896e":function(e,t,i){"use strict";var s,a=new Uint8Array(16);function l(){if(!s&&(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(a)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function o(e){return"string"===typeof e&&r.test(e)}for(var n=o,c=[],m=0;m<256;++m)c.push((m+256).toString(16).substr(1));function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!n(i))throw TypeError("Stringified UUID is invalid");return i}var d=u;function p(e,t,i){e=e||{};var s=e.random||(e.rng||l)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){i=i||0;for(var a=0;a<16;++a)t[i+a]=s[a];return t}return d(s)}t["a"]=p},bdf2:function(e,t,i){},d284:function(e,t,i){"use strict";i("bdf2")},df89:function(e,t,i){},ea69:function(e,t,i){"use strict";var s=i("1c8b"),a=i("e1d6"),l=i("3da3"),r=i("d88d"),o=i("3553"),n=i("1ca1"),c=i("1bbd"),m=i("1ea7"),u=i("ff9c"),d=m("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,f=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!p},{splice:function(e,t){var i,s,m,u,d,p,y=o(this),P=r(y.length),w=a(e,P),g=arguments.length;if(0===g?i=s=0:1===g?(i=0,s=P-w):(i=g-2,s=f(h(l(t),0),P-w)),P+i-s>b)throw TypeError(v);for(m=n(y,s),u=0;u<s;u++)d=w+u,d in y&&c(m,u,y[d]);if(m.length=s,i<s){for(u=w;u<P-s;u++)d=u+s,p=u+i,d in y?y[p]=y[d]:delete y[p];for(u=P;u>P-s+i;u--)delete y[u-1]}else if(i>s)for(u=P-s;u>w;u--)d=u+s-1,p=u+i-1,d in y?y[p]=y[d]:delete y[p];for(u=0;u<i;u++)y[u+w]=arguments[u+2];return y.length=P-s+i,m}})}}]);