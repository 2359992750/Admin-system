(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb72e18"],{2017:function(e,t,n){"use strict";n("70ad")},"3afe":function(e,t,n){},"4fef":function(e,t,n){"use strict";n("3afe")},"70ad":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("乐居后台登录")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")])],1)],1)},o=[],r=(n("61f7"),n("2f4d")),a=n("0c6d");function i(e){return Object(a["a"])({url:"/lejuAdmin/index/login",method:"POST",data:e})}function l(){return Object(a["a"])({url:"/lejuAdmin/dashboard/baseData",method:"GET"})}var d={login:i,getDashboardData:l},c={name:"Login",data:function(){var e=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"123456"},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,d.login(e.loginForm).then((function(t){t.success?(Object(r["d"])(t.data.token),Object(r["e"])(t.data.userInfo),e.$router.push({path:"/"})):console.error("登录失败,密码或者账号错误"),e.loading=!1}))}))}}},u=c,p=(n("2017"),n("4fef"),n("5d22")),m=Object(p["a"])(u,s,o,!1,null,"176b4694",null);t["default"]=m.exports}}]);