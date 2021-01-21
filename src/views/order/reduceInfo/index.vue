<template>
<div>
  <el-card class="card">
  <!-- 订单信息 -->
  <div class="Info">
    <div class="header"><div class="title">订单信息: </div>
      <div class="dgk" v-if="orderData.status==0">待处理</div>
      <div class="dfh" v-if="orderData.status==1">退货中</div>
      <div class="yfh" v-if="orderData.status==2">已完成</div>
      <div class="ywc" v-if="orderData.status==3">已拒绝</div>
    </div>
    <div class="second">
      <div class="orderitem">订单: {{orderData.orderSn}} <span style="margin-left:10px;color:#66b1ff" @click="seeorderData">查看订单详情</span></div>
      <div class="orderitem">退单人姓名: {{orderData.returnName}}</div>
      <div class="orderitem">退单理由: {{orderData.reason}}</div>
      <div class="orderitem">退单描述: {{orderData.description}}</div>
      <div class="orderitem">退单时间: {{orderData.createTime}}</div>
      <div class="orderitem"><div>退单图片:</div> <img height="100" width="100" :src="orderData.productPic" alt=""></div>
      <div class="orderitem"></div>
      <div class="orderitem"></div>
    </div>
  </div>
  <div class="line"></div>
  <!-- 商品信息 -->
  <div class="Info">
     <div class="header"><div class="title">退货商品: </div></div>
      <el-table
    :data="shopList"
    border
    style="width: 100%">
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
      prop="productName"
      label="商品描述"
      width="180">
    </el-table-column>
    <el-table-column
     align="center"
      prop="productPrice"
      label="商品价格">
    </el-table-column>
     <el-table-column
      align="center"
      prop="productAttr"
      label="商品属性">
    </el-table-column>
     <el-table-column
      align="center"
      prop="productCount"
      label="商品数量">
    </el-table-column>
     <el-table-column
      align="center"
      prop="productRealPrice"
      label="总计">
    </el-table-column>
  </el-table>
   <div class="line"></div>
   <div class="Info">
      <div class="header"><div class="title">用户信息: </div></div>

    <div class="second">
      <div class="orderitem">联系人: {{orderData.returnName}}</div>
      <div class="orderitem">联系电话: {{orderData.returnPhone}}</div>
      <div class="orderitem"></div>
      <div class="orderitem"></div>
    </div>

   </div>
   <div class="line"></div>

 <div v-if="orderData.status==0">
    <div class="header"><div class="title">费用信息: </div></div>
     <div class="second">
      <div class="orderitem">退回金额: <span style="color:red">{{orderData.productRealPrice}}</span></div>
      <div class="orderitem">运费金额: <span style="color:red">0</span></div>
      <div class="orderitem"></div>
      <div class="orderitem"></div>
</div>
      <el-form label-width="100px" class="demo-dynamic" :inline="true">
        <el-form-item label="退款金额">
           <el-input-number size="small" v-model="returnAmount" @change="handleChange" :min="0"  label="退款金额"></el-input-number>
        </el-form-item>
  <el-form-item
    prop="handleMan"
    label="处理人"
    :rules="{
      handleMan:[
      { required: true, message: '请输入处理人姓名', trigger: 'blur' }
      ]
    }"
  >
    <el-input size="small" v-model="handleMan"></el-input>
  </el-form-item>
  <el-form-item
    label="处理人备注"
    prop="handleNote"
    :rules="{
      handleNote:[
      { required: true, message: '请输入处理人备注', trigger: 'blur' }
      ]
    }"
  >
    <el-input size="small" v-model="handleNote"></el-input>
  </el-form-item>
   <el-form-item style="width:100%;display:flex;justify-content:center;">
    <el-button size="small" type="primary" @click="agree">同意退款</el-button>
    <el-button size="small" @click="rejuce">拒绝退款</el-button>
  </el-form-item>
</el-form>
 </div>
  </div>
 <!-- 费用信息 -->
 <div class="Info" v-if="orderData.status==1||orderData.status==2||orderData.status==3">
     <div class="header"><div class="title">费用信息: </div></div>
     <div class="second">
       <div class="orderitem">退单金额: <span style="color:red">{{orderData.returnAmount}}</span></div>
       <div class="orderitem">运费金额: <span style="color:red">0</span></div>
        <div class="orderitem"></div>
         <div class="orderitem"></div>
     </div>
 </div>
  <div class="line"></div>
  <div class="Info" v-if="orderData.status==2||orderData.status==3">
    <div class="header"><div class="title">收货信息: </div></div>
      <div class="second">
        <div class="orderitem">退单收货人: {{orderData.handleMan}}</div>
        <div class="orderitem">退单收货备注:
: {{orderData.handleNote}}</div>
        <div class="orderitem">退单收货时间:: {{orderData.handleTime}}</div>
        <div class="orderitem"></div>
     </div>
  </div>
 <!-- 处理结果 -->
 <div class="Info" v-if="orderData.status==1">
     <div class="header"><div class="title">处理结果: </div></div>
      <div class="second">
        <div class="orderitem">处理人: {{orderData.handleMan}}</div>
        <div class="orderitem">处理备注: {{orderData.handleNote}}</div>
        <div class="orderitem">处理时间: {{orderData.handleTime}}</div>
        <div class="orderitem"></div>
     </div>
   <el-form label-width="100px" class="demo-dynamic" :inline="true" label-position="left">
  <el-form-item
    prop="reserve"
    label="收货人"
    :rules="{
      reserve:[
      { required: true, message: '请输入收货人姓名', trigger: 'blur' }]}">
    <el-input size="small" v-model="reserve"></el-input>
  </el-form-item>
  <el-form-item
    label="收货人备注"
    prop="reservenote"
    :rules="{
      reservenote:[
      { handleNote: true, message: '请输入收货人备注', trigger: 'blur' }
      ]
    }"
  >
    <el-input size="small" v-model="reservenote"></el-input>
  </el-form-item>
   <el-form-item style="width:100%;display:flex;justify-content:center;">
    <el-button size="small" type="primary" @click="comformReserve">确认收货</el-button>
  </el-form-item>
</el-form>
 </div>
  </el-card>
</div>
</template>
<script>
import ApiOrder from '@/api/order/index'
export default {
  data() {
    return {
      orderId:null,
     orderData:{},
     shopList:[],
     reserve:'',
     reservenote:'',
     //退回金额
    returnAmount:null,
    //处理人
    handleMan:null,
    //处理人备注
    handleNote:null
    }
  },
  created() {
    this.orderId = this.$route.query.id
    this.getOrder()
  },
  methods:{
    //查看订单详情
    seeorderData(){
      console.log(this.orderData)
      this.$router.push({path:'/order/orderInfo',query:{
      id:this.orderData.orderId
      }})
    },
    //获取退单明细
    getOrder(){
        ApiOrder.orderReturn(this.orderId).then(res=> {
              console.log(res)
              var obj = {
                productPic:res.data.orderReturnApply.productPic,
                productName:res.data.orderReturnApply.productName,
                productPrice:res.data.orderReturnApply.productPrice,
                productAttr:res.data.orderReturnApply.productAttr,
                productCount:res.data.orderReturnApply.productCount,
                productRealPrice:res.data.orderReturnApply.productRealPrice
              }
              this.shopList.push(obj)
              console.log(this.shopList)
              this.orderData = res.data.orderReturnApply
        })
    },
    handleChange(){

    },
    //同意退款
    agree(){
      ApiOrder.agreeApply(this.orderId,{
        returnAmount:this.returnAmount,
        handleMan:this.handleMan,
        handleNote:this.handleNote,
        id:this.orderId
      }).then(res=>{
        console.log(res)
        if(res.success){
           this.getOrder()
        }
      })
    },
    //拒绝退款
    rejuce(){
      ApiOrder.rejectApply(this.orderId,{
        handleMan:this.handleMan,
        handleNote:this.handleNote,
        id:this.orderId
      }).then(res=>{
        if(res.success){
           this.getOrder()
        }
        console.log(res)
      })
    },
    //确认收货
    comformReserve(){
      ApiOrder.sendDoreceiveProductne(this.orderId,{
        reserve:this.reserve,
        id:this.orderId,
        reservenote:this.reservenote
      }).then(res=>{
        this.$message.success(res.message)
        this.getOrder()
      })
    }
  }
}
</script>
<style lang="scss">
  .el-form-item__label {
    font-size: 14px;
    font-weight: 400;
  }
</style>
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



.second {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}


.orderitem {
  width:24%;
  line-height: 40px;
    font-size: 14px;
}

.dgk {
  background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
   font-size: 12px;
   height: 22px;
   border-radius: 5px;
   line-height: 22px;
   text-align: center;
  width: 50px;
}
.dfh {
  background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
    font-size: 12px;
   height: 22px;
   border-radius: 5px;
   line-height: 22px;
   text-align: center;
  width: 50px;
}
.yfh {
  color: #409eff;
      background-color: #ecf5ff;
    border-color: #d9ecff;
     font-size: 12px;
   height: 22px;
   border-radius: 5px;
   line-height: 22px;
   text-align: center;
  width: 50px;
}
.ywc {
  border-color: #409eff;
      background-color: #409eff;
    color: #fff;
    font-size: 12px;
   height: 22px;
   border-radius: 5px;
   line-height: 22px;
   text-align: center;
  width: 50px;
}
</style>