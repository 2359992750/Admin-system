<template>
<div>
  <el-card class="card">
    <!-- 订单进度条 -->
    <el-steps :active="orderInfo.status+1" align-center>
  <el-step title="待付款" :description="orderInfo.createTime"></el-step>
  <el-step title="代发货" :description="orderInfo.paymentTime"></el-step>
  <el-step title="已发货" :description="orderInfo.deliveryTime"></el-step>
  <el-step title="已完成" :description="orderInfo.receiveTime"></el-step>
  <el-step title="已关闭" :description="orderInfo.finishTime"></el-step>
</el-steps>
  <div class="line"></div>
  <!-- 订单信息 -->
  <div class="Info">
    <div class="header"><div class="title">订单信息: </div>
      <div class="dfk" v-if="orderInfo.status==0">待付款</div>
      <div class="dfh" v-if="orderInfo.status==1">待发货</div>
      <div class="yfh" v-if="orderInfo.status==2">已发货</div>
      <div class="ywc" v-if="orderInfo.status==3">已完成</div>
      <div class="ygb" v-if="orderInfo.status==4">已关闭</div>
    </div>
    <div class="second">
      <div class="orderitem">订单金额: <span style="color:red">{{orderInfo.payAmount}}</span></div>
      <div class="orderitem">订单编号: {{orderInfo.orderSn}}</div>
      <div class="orderitem">用户账号: {{orderInfo.memberUsername}}</div>
      <div class="orderitem">备注: {{orderInfo.totalAmount}}</div>
      <div class="orderitem">下单时间: {{orderInfo.createTime}}</div>
      <div class="orderitem">付款时间: {{orderInfo.paymentTime}}</div>
      <div class="orderitem">发货时间: {{orderInfo.deliveryTime}}</div>
      <div class="orderitem">收货时间: {{orderInfo.receiveTime}}</div>
    </div>
  </div>
  <div class="line"></div>
  <!-- 收货人信息 -->
  <div class="Info">
         <div class="header"><div class="title">收货人信息: </div>
    </div>
    <div class="second">
      <div class="orderitem">收货人: {{orderInfo.receiverName}}</div>
      <div class="orderitem">用户姓名: {{orderInfo.memberUsername}}</div>
      <div class="orderitem">手机号码: {{orderInfo.memberUsername}}</div>
      <div class="orderitem">邮政编码: {{orderInfo.totalAmount}}</div>
      <div class="orderitem">城市: {{orderInfo.receiverProvince+orderInfo.receiverCity}}</div>
      <div class="orderitem">详细地址: {{orderInfo.receiverDetailAddress}}</div>
      <div class="orderitem"></div>
      <div class="orderitem"></div>
    </div>
  </div>
  <div class="line"></div>
  <!-- 商品信息 -->
  <div class="Info">
     <div class="header"><div class="title">商品信息: </div></div>
      <el-table
    :data="orderItems"
    border
    style="width: 100%">
    <el-table-column
    align="center"
      prop="productName"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
     align="center"
      prop="name"
      label="商品图片"
      width="180">
      <template slot-scope="scope">
        <img height="100" width="100" :src="scope.row.productPic" alt="">
      </template>
    </el-table-column>
    <el-table-column
     align="center"
      prop="isReturn"
      label="是否退货">
      <template slot-scope="scope">
        <div>{{scope.row.isReturn==0?'否':'是'}}</div>
      </template>
    </el-table-column>
     <el-table-column
      align="center"
      prop="productBrand"
      label="品牌">
    </el-table-column>
     <el-table-column
      align="center"
      prop="realAmount"
      label="价格">
    </el-table-column>
     <el-table-column
      align="center"
      prop="productQuantity"
      label="商品数量">
    </el-table-column>
     <el-table-column
      align="center"
      prop="totalPrice"
      label="小计">
    </el-table-column>
  </el-table>
     <div class="header"><div class="title">费用信息: </div></div>
     <div class="second">
      <div class="orderitem">运费金额: <span style="color:red">0</span></div>
      <div class="orderitem">订单总金额: <span style="color:red">{{orderInfo.totalAmount}}</span></div>
      <div class="orderitem">实际金额: <span style="color:red">{{orderInfo.totalAmount}}</span></div>
      <div class="orderitem">促销优化金额: <span style="color:red">0</span></div>
    </div>
  </div>
   <div class="line"></div>
   <!-- 发货物流 -->
   <el-form :inline="true" :model="kuadi" ref="wuliu" :rules="rules" class="demo-form-inline"  v-if="orderInfo.status==1">
  <el-form-item label="物流公司" prop="deliveryCompany">
    <el-select v-model="kuadi.deliveryCompany" placeholder="选择物流公司">
      <el-option label="顺丰快递" value="顺丰快递"></el-option>
      <el-option label="韵达快递" value="韵达快递"></el-option>
      <el-option label="中国邮政" value="中国邮政"></el-option>
      <el-option label="申通快递" value="申通快递"></el-option>
      <el-option label="中通快递" value="中通快递"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="物流单号" prop="deliverySn">
    <el-input v-model="kuadi.deliverySn" placeholder="物流单号"></el-input>
  </el-form-item>
  <el-form-item>
     <el-button  @click="comfirmSend" size="small" type="primary">确认发货</el-button>
  </el-form-item>
</el-form>
   <!-- 物流信息 -->
   <div class="Info" v-if="orderInfo.status==2||orderInfo.status==3||orderInfo.status==4">
     <div class="header"><div class="title">物流信息: </div><div style="font-size: 16px;font-weight: 700;color: gray;">{{orderInfo.deliveryCompany}}[{{orderInfo.deliverySn}}]</div></div>
      <el-table
    :data="Traces"
    border
    style="width: 100%">
    <el-table-column
      prop="AcceptTime"
      label="时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="AcceptStation"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="Remark"
      label="备注">
    </el-table-column>
  </el-table>
   </div>
   <div class="line"></div>
   <!-- 强制确认收货-->
   <div style="width:100%;display:flex;justify-content: center;" v-if="orderInfo.status==2&&flag" >
         <el-button  @click="comfirmreserve" size="small" type="primary">强制确认收货</el-button>
      </div>
<!-- 关闭订单 -->
      <div style="width:100%;display:flex;justify-content: center;" v-if="orderInfo.status==3">
         <el-button  @click="closeOrder" size="small" type="primary">关闭订单</el-button>
      </div>

  </el-card>
</div>
</template>
<script>
import ApiOrder from '@/api/order/index'
import dliver from './kdExpress'
export default {
  data() {
    return {
      flag:false,
      orderId:null,
     orderInfo:{},
     orderItems:[],
     Traces:[],
     kuadi:{
       deliverySn:'',
       deliveryCompany:''
     },
     rules:{
       deliveryCompany:[
         { required: true, message: '请选择物流公司', trigger: 'blur' }
       ],
       deliverySn:[
         { required: true, message: '请输入物流单号', trigger: 'blur' }
       ]
     }
    }
  },
  created() {
    this.Traces = dliver.Traces
    console.log(this.$route.query.id)
    this.orderId =this.$route.query.id
    this.getOrder()
  },
  methods:{
    //强制确认收货
    comfirmreserve(){
      ApiOrder.receiveProductsForce(this.orderId).then(res=>{
        if(res.success){
          this.getOrder()
        }
      })
    },
    //获取订单明细
    getOrder(){
        ApiOrder.orderDetail(this.orderId).then(res=> {
              console.log(res)
              if(res.success){
                this.orderInfo = res.data.orderDetail.orderBase
                this.orderItems = res.data.orderDetail.orderItems
                  var count = 0
                this.orderItems.forEach(item=>{
                  if(item.isReturn==1){
                    count++
                  }
                })
              if(count==this.orderItems.length){this.flag = true}
                console.log(this.flag)
              }
        })
    },
    //订单完成,关闭订单
    closeOrder(){
      ApiOrder.finishOrder(this.orderId).then(res=> {
        if(res.success){
          this.$message.success('关闭订单成功')
          this.getOrder()
        }else {
          this.$message.error(res.message)
        }
      })
    },
    //订单已付款,确认发货
    comfirmSend(){
       console.log(this.orderId)
      ApiOrder.sendDone({
        orderId:this.orderId,
        deliverySn:this.kuadi.deliverySn,
        deliveryCompany:this.kuadi.deliveryCompany
      }).then(res=> {
          if(res.success){
            this.getOrder()
          }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  margin: 30px;
  padding: 20px 0;
}

.line {
  height: 1px;
    width: 100%;
    margin: 24px 0;
    background-color: #dcdfe6;
}

.header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.title {
 color: rgba(0,0,0,.85);
 font-weight: 700;
font-size: 16px;
margin-right: 5px;
}

.dfk {
  background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
      height: 24px;
    padding: 0 8px;
    line-height: 24px;
    border-radius: 5px;
    font-size: 12px;
}
.dfh {
  background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
      height: 24px;
     padding: 0 8px;
    line-height: 24px;
    border-radius: 5px;
    font-size: 12px;
}
.yfh {
  color: #409eff;
      background-color: #ecf5ff;
    border-color: #d9ecff;
      height: 24px;
     padding: 0 8px;
    line-height: 24px;
    border-radius: 5px;
    font-size: 12px;
}
.ywc {
  border-color: #409eff;
      background-color: #409eff;
    color: #fff;
      height: 24px;
    padding: 0 8px;
    line-height: 24px;
    font-size: 12px;
    border-radius: 5px;
}

.ygb{
    background-color: #909399;
    border-color: #909399;
    color: #fff;
      height: 24px;
    padding: 0 8px;
    line-height: 24px;
    border-radius: 5px;
    font-size: 12px;
}

.wx{
      background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
      height: 24px;
    padding: 0 8px;
    line-height: 24px;
    border-radius: 5px;
    font-size: 12px;
}

.second {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}


.orderitem {
  width:24%;
  line-height: 40px;
    font-size: 14px;
}
</style>