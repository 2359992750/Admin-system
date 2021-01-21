<template>
<div>
          <!-- 头部模糊查询 -->
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>条件查询</span>
  </div>
  <el-form ref="formInline" :inline="true" :model="formInline" class="demo-form-inline" style="margin-left:100px;">
  <el-form-item label="订单编号" prop="orderSn">
    <el-input size="small" v-model="formInline.orderSn" placeholder="请填写订单编号"></el-input>
  </el-form-item>
  <el-form-item label="退单状态" style="margin:0 100px;" prop="status">
     <el-select size="small" v-model="formInline.status" placeholder="订单状态">
      <el-option label="待处理" value="0"></el-option>
      <el-option label="退货中" value="1"></el-option>
      <el-option label="已完成" value="2"></el-option>
      <el-option label="已拒绝" value="3"></el-option>
    </el-select>
  </el-form-item>
  <div style="width:85%;text-align:right"> 
    <el-button size="small" type="primary" @click="onSubmit">搜索</el-button>
    <el-button size="small"  @click="onReset('formInline')">重置</el-button>
  </div>
</el-form>
</el-card>


<!-- 订单列表 -->
<el-card class="box-card">
 <el-table
    :data="orderData"
    border
    style="width: 100%">
     <el-table-column
       align="center"
      label="#"
       type="index">
    </el-table-column>
    <el-table-column
    align="center"
      prop="orderSn"
      label="订单编号"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="status"
      label="退单状态">
        <template slot-scope="scope">
          <div v-if="scope.row.status==0" class="status dfk">待处理</div>
          <div v-if="scope.row.status==1" class="status dfh">退货中</div>
          <div v-if="scope.row.status==2" class="status yfh">已完成</div>
          <div v-if="scope.row.status==3" class="status ywc">已拒绝</div>
      </template>
    </el-table-column>
     <el-table-column
       align="center"
      prop="description"
      label="描述"
      width="170">
    </el-table-column>
     <el-table-column
       align="center"
      prop="reason"
      label="退单原因">
    </el-table-column>
     <el-table-column
       align="center"
      prop="productName"
      label="商品名称">
    </el-table-column>
     <el-table-column
       align="center"
      prop="productAttr"
      label="商品属性">
    </el-table-column>
     <el-table-column
       align="center"
      prop="handleNote"
      label="商家备注">
    </el-table-column>
         <el-table-column
       align="center"
      prop="createTime"
      label="添加时间">
    </el-table-column>
      <el-table-column
      label="操作" align="center" fixed="right" width="200">
      <template slot-scope="scope">
        <el-button size="small" @click="orderInfo(scope.row)" icon="iconfont icon-eyes" type="primary">主要按钮</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="start"
      :page-sizes="limits"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</el-card>
</div>
</template>
<script>
import ApiOrder from '@/api/order/index'
export default {
data() {
  return {
    formInline:{
      orderSn :'',
      status:'',
    },
    orderData:[],
    start:1,
    limit:10,
    limits:[10, 15, 20, 25],
    total:null
  }
},
created() {
    this.getOrderlist()
},
methods:{
  handleSizeChange(val){
    this.limit = val
    this.getOrderlist()
  },
  handleCurrentChange(val){
    this.start = val
    this.getOrderlist()
  },

//获得退单数据
  getOrderlist(){
    ApiOrder.findReturnApply(this.start,this.limit).then(res=> {
      console.log(res)
      this.orderData = res.data.rows
      this.total = res.data.total
    })
  },
  //重置
  onReset(formInline){
     this.$refs[formInline].resetFields();
  },
  //提交搜索
  onSubmit(){
    this.start = 1
    ApiOrder.findReturnApply(this.start,this.limit,this.formInline).then(res=>{
      this.orderData = res.data.rows
    })
  },
  //跳转到退单详情
  orderInfo(item){
    this.$router.push({path:'/order/reduceInfo',query:{
      id:item.id}})
  }
}
}
</script>
<style lang="scss">
  .iconfont{
    font-size: 12px;
    margin-right: 5px;
  }
</style>
<style lang="scss" scoped>
.box-card {
  margin: 30px;
}
.icon {
  height: 35px;
  width: 60px;
  margin: 0 auto;
  line-height: 35px;
  background-color: #909399;
    border-color: #909399;
    color: #fff;
  border-radius: 5px;
}

.icon-weixin{
  background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
    font-size: 23px;
}

.icon-zhifubaozhanghu{
  background-color: #409eff;
   border-color: #409eff;
    color: #fff;
     font-size: 23px;
}
.status {
   height: 35px;
   border-radius: 5px;
   line-height: 35px;
  width: 60px;
  margin: 0 auto;
}
.type {
  font-size: 12px;
   height: 35px;
   border-radius: 5px;
   line-height: 35px;
  width: 60px;
  margin: 0 auto;
}
.dfk {
  background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
}
.dfh {
  background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
}
.yfh {
  color: #409eff;
      background-color: #ecf5ff;
    border-color: #d9ecff;
}
.ywc {
  border-color: #409eff;
      background-color: #409eff;
    color: #fff;
}

.ygb{
    background-color: #909399;
    border-color: #909399;
    color: #fff;
}

.wx{
      background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
}
.normal{
      background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
}

.second{
  background-color: #f0d76a;
    border-color: #f0d76a;
    color: #d49d36;
}

</style>