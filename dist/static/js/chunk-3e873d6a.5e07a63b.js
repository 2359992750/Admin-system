(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e873d6a"],{"064f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"card"},[r("el-steps",{attrs:{active:e.orderInfo.status+1,"align-center":""}},[r("el-step",{attrs:{title:"待付款",description:e.orderInfo.createTime}}),r("el-step",{attrs:{title:"代发货",description:e.orderInfo.paymentTime}}),r("el-step",{attrs:{title:"已发货",description:e.orderInfo.deliveryTime}}),r("el-step",{attrs:{title:"已完成",description:e.orderInfo.receiveTime}}),r("el-step",{attrs:{title:"已关闭",description:e.orderInfo.finishTime}})],1),r("div",{staticClass:"line"}),r("div",{staticClass:"Info"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("订单信息: ")]),0==e.orderInfo.status?r("div",{staticClass:"dfk"},[e._v("待付款")]):e._e(),1==e.orderInfo.status?r("div",{staticClass:"dfh"},[e._v("待发货")]):e._e(),2==e.orderInfo.status?r("div",{staticClass:"yfh"},[e._v("已发货")]):e._e(),3==e.orderInfo.status?r("div",{staticClass:"ywc"},[e._v("已完成")]):e._e(),4==e.orderInfo.status?r("div",{staticClass:"ygb"},[e._v("已关闭")]):e._e()]),r("div",{staticClass:"second"},[r("div",{staticClass:"orderitem"},[e._v("订单金额: "),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderInfo.payAmount))])]),r("div",{staticClass:"orderitem"},[e._v("订单编号: "+e._s(e.orderInfo.orderSn))]),r("div",{staticClass:"orderitem"},[e._v("用户账号: "+e._s(e.orderInfo.memberUsername))]),r("div",{staticClass:"orderitem"},[e._v("备注: "+e._s(e.orderInfo.totalAmount))]),r("div",{staticClass:"orderitem"},[e._v("下单时间: "+e._s(e.orderInfo.createTime))]),r("div",{staticClass:"orderitem"},[e._v("付款时间: "+e._s(e.orderInfo.paymentTime))]),r("div",{staticClass:"orderitem"},[e._v("发货时间: "+e._s(e.orderInfo.deliveryTime))]),r("div",{staticClass:"orderitem"},[e._v("收货时间: "+e._s(e.orderInfo.receiveTime))])])]),r("div",{staticClass:"line"}),r("div",{staticClass:"Info"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("收货人信息: ")])]),r("div",{staticClass:"second"},[r("div",{staticClass:"orderitem"},[e._v("收货人: "+e._s(e.orderInfo.receiverName))]),r("div",{staticClass:"orderitem"},[e._v("用户姓名: "+e._s(e.orderInfo.memberUsername))]),r("div",{staticClass:"orderitem"},[e._v("手机号码: "+e._s(e.orderInfo.memberUsername))]),r("div",{staticClass:"orderitem"},[e._v("邮政编码: "+e._s(e.orderInfo.totalAmount))]),r("div",{staticClass:"orderitem"},[e._v("城市: "+e._s(e.orderInfo.receiverProvince+e.orderInfo.receiverCity))]),r("div",{staticClass:"orderitem"},[e._v("详细地址: "+e._s(e.orderInfo.receiverDetailAddress))]),r("div",{staticClass:"orderitem"}),r("div",{staticClass:"orderitem"})])]),r("div",{staticClass:"line"}),r("div",{staticClass:"Info"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("商品信息: ")])]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderItems,border:""}},[r("el-table-column",{attrs:{align:"center",prop:"productName",label:"商品名称",width:"180"}}),r("el-table-column",{attrs:{align:"center",prop:"name",label:"商品图片",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{height:"100",width:"100",src:e.row.productPic,alt:""}})]}}])}),r("el-table-column",{attrs:{align:"center",prop:"isReturn",label:"是否退货"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[e._v(e._s(0==t.row.isReturn?"否":"是"))])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"productBrand",label:"品牌"}}),r("el-table-column",{attrs:{align:"center",prop:"realAmount",label:"价格"}}),r("el-table-column",{attrs:{align:"center",prop:"productQuantity",label:"商品数量"}}),r("el-table-column",{attrs:{align:"center",prop:"totalPrice",label:"小计"}})],1),r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("费用信息: ")])]),r("div",{staticClass:"second"},[r("div",{staticClass:"orderitem"},[e._v("运费金额: "),r("span",{staticStyle:{color:"red"}},[e._v("0")])]),r("div",{staticClass:"orderitem"},[e._v("订单总金额: "),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderInfo.totalAmount))])]),r("div",{staticClass:"orderitem"},[e._v("实际金额: "),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.orderInfo.totalAmount))])]),r("div",{staticClass:"orderitem"},[e._v("促销优化金额: "),r("span",{staticStyle:{color:"red"}},[e._v("0")])])])],1),r("div",{staticClass:"line"}),1==e.orderInfo.status?r("el-form",{ref:"wuliu",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.kuadi,rules:e.rules}},[r("el-form-item",{attrs:{label:"物流公司",prop:"deliveryCompany"}},[r("el-select",{attrs:{placeholder:"选择物流公司"},model:{value:e.kuadi.deliveryCompany,callback:function(t){e.$set(e.kuadi,"deliveryCompany",t)},expression:"kuadi.deliveryCompany"}},[r("el-option",{attrs:{label:"顺丰快递",value:"顺丰快递"}}),r("el-option",{attrs:{label:"韵达快递",value:"韵达快递"}}),r("el-option",{attrs:{label:"中国邮政",value:"中国邮政"}}),r("el-option",{attrs:{label:"申通快递",value:"申通快递"}}),r("el-option",{attrs:{label:"中通快递",value:"中通快递"}})],1)],1),r("el-form-item",{attrs:{label:"物流单号",prop:"deliverySn"}},[r("el-input",{attrs:{placeholder:"物流单号"},model:{value:e.kuadi.deliverySn,callback:function(t){e.$set(e.kuadi,"deliverySn",t)},expression:"kuadi.deliverySn"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.comfirmSend}},[e._v("确认发货")])],1)],1):e._e(),2==e.orderInfo.status||3==e.orderInfo.status||4==e.orderInfo.status?r("div",{staticClass:"Info"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("物流信息: ")]),r("div",{staticStyle:{"font-size":"16px","font-weight":"700",color:"gray"}},[e._v(e._s(e.orderInfo.deliveryCompany)+"["+e._s(e.orderInfo.deliverySn)+"]")])]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.Traces,border:""}},[r("el-table-column",{attrs:{prop:"AcceptTime",label:"时间",width:"180"}}),r("el-table-column",{attrs:{prop:"AcceptStation",label:"状态"}}),r("el-table-column",{attrs:{prop:"Remark",label:"备注"}})],1)],1):e._e(),r("div",{staticClass:"line"}),2==e.orderInfo.status&&e.flag?r("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.comfirmreserve}},[e._v("强制确认收货")])],1):e._e(),3==e.orderInfo.status?r("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.closeOrder}},[e._v("关闭订单")])],1):e._e()],1)],1)},s=[],i=(r("fe59"),r("08ba"),r("3a10")),o=r("ab48"),d={data:function(){return{flag:!1,orderId:null,orderInfo:{},orderItems:[],Traces:[],kuadi:{deliverySn:"",deliveryCompany:""},rules:{deliveryCompany:[{required:!0,message:"请选择物流公司",trigger:"blur"}],deliverySn:[{required:!0,message:"请输入物流单号",trigger:"blur"}]}}},created:function(){this.Traces=o.Traces,console.log(this.$route.query.id),this.orderId=this.$route.query.id,this.getOrder()},methods:{comfirmreserve:function(){var e=this;i["a"].receiveProductsForce(this.orderId).then((function(t){t.success&&e.getOrder()}))},getOrder:function(){var e=this;i["a"].orderDetail(this.orderId).then((function(t){if(console.log(t),t.success){e.orderInfo=t.data.orderDetail.orderBase,e.orderItems=t.data.orderDetail.orderItems;var r=0;e.orderItems.forEach((function(e){1==e.isReturn&&r++})),r==e.orderItems.length&&(e.flag=!0),console.log(e.flag)}}))},closeOrder:function(){var e=this;i["a"].finishOrder(this.orderId).then((function(t){t.success?(e.$message.success("关闭订单成功"),e.getOrder()):e.$message.error(t.message)}))},comfirmSend:function(){var e=this;console.log(this.orderId),i["a"].sendDone({orderId:this.orderId,deliverySn:this.kuadi.deliverySn,deliveryCompany:this.kuadi.deliveryCompany}).then((function(t){t.success&&e.getOrder()}))}}},n=d,l=(r("4bf9"),r("5d22")),c=Object(l["a"])(n,a,s,!1,null,"33175ee9",null);t["default"]=c.exports},"3a10":function(e,t,r){"use strict";r("b4fb");var a=r("0c6d");function s(e,t,r){return Object(a["a"])({url:"/lejuAdmin/order/findOrdersByPage/".concat(e,"/").concat(t),method:"POST",data:r})}function i(e){return Object(a["a"])({url:"/lejuAdmin/order/finishOrder/".concat(e),method:"POST"})}function o(e){return Object(a["a"])({url:"/lejuAdmin/order/orderDetail/".concat(e),method:"GET"})}function d(e){return Object(a["a"])({url:"/lejuAdmin/order/receiveProductsForce/".concat(e),method:"POST"})}function n(e){return Object(a["a"])({url:"/lejuAdmin/order/sendDone",method:"POST",data:e})}function l(e,t){return Object(a["a"])({url:"/lejuAdmin/orderReturn/agreeApply/".concat(e),method:"POST",data:t})}function c(e,t){return Object(a["a"])({url:"/lejuAdmin/orderReturn/rejectApply/".concat(e),method:"POST",data:t})}function u(e,t,r){return Object(a["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(e,"/").concat(t),method:"POST",data:r})}function m(e,t){return Object(a["a"])({url:"/lejuAdmin/orderReturn/receiveProduct/".concat(e),method:"POST",data:t})}function v(e){return Object(a["a"])({url:"/lejuAdmin/orderReturn/".concat(e),method:"GET"})}function p(){return Object(a["a"])({url:"/lejuAdmin/companyAddress/addressList",method:"GET"})}function f(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/save",method:"POST",data:e})}function y(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/setReceiveOne",method:"POST",data:e})}function _(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/setSendOne",method:"POST",data:e})}function b(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/update",method:"POST",data:e})}function h(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/".concat(e),method:"DELETE"})}function C(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/".concat(e),method:"GET"})}t["a"]={findOrdersByPage:s,finishOrder:i,orderDetail:o,receiveProductsForce:d,sendDone:n,agreeApply:l,findReturnApply:u,sendDoreceiveProductne:m,orderReturn:v,addressList:p,saveadress:f,setReceiveOne:y,setSendOne:_,update:b,decompanyAddress:h,companyAddress:C,rejectApply:c}},"4bf9":function(e,t,r){"use strict";r("d598")},ab48:function(e){e.exports=JSON.parse('{"EBusinessID":"1109259","OrderCode":"","ShipperCode":"EMS","LogisticCode":"5042260908504","Success":true,"Reason":"","State":"2","CallBack":"0","Traces":[{"AcceptTime":"2015-03-06 21:16:58","AcceptStation":"深圳市横岗速递营销部已收件","Remark":"揽投员姓名：钟定基;联系电话：13883838888"},{"AcceptTime":"2015-03-07 14:25:00","AcceptStation":"离开深圳市 发往广州市","Remark":""},{"AcceptTime":"2015-03-08 00:17:00","AcceptStation":"到达广东速递物流公司广航中心处理中心（经转）","Remark":""},{"AcceptTime":"2015-03-08 01:15:00","AcceptStation":"离开广州市 发往北京市（经转）","Remark":""},{"AcceptTime":"2015-03-09 09:01:00","AcceptStation":"到达北京黄村转运站处理中心（经转）","Remark":""},{"AcceptTime":"2015-03-09 18:39:00","AcceptStation":"离开北京市 发往呼和浩特市（经转）","Remark":""},{"AcceptTime":"2015-03-10 18:06:00","AcceptStation":"到达  呼和浩特市 处理中心","Remark":""},{"AcceptTime":"2015-03-11 09:53:48","AcceptStation":"呼和浩特市邮政速递物流分公司金川揽投部安排投递","Remark":"投递员姓名：安长虹;联系电话：18047140142"}]}')},d598:function(e,t,r){}}]);