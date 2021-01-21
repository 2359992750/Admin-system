<template>
<div class="limitad">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
   <el-button @click="dialogVisible=!dialogVisible" size="small" type="primary">新增</el-button>
  </div>
  
    <el-table
    border
    :data="limitAd"
    style="width: 100%">
    <el-table-column
    align="center"
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
    align="center"
      property="pic"
      label="商品图片"
      width="150">
      <template slot-scope="scope">
          <img width="100"  height="100" :src="scope.row.pic" alt="">
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      property="promotionStartTime"
      label="活动时间"
      width="280">
      <template slot-scope="scope">
        <div>开始时间:{{scope.row.promotionStartTime}}</div>
        <div>结束时间:{{scope.row.promotionEndTime}}</div>
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      property="publishStatus"
      label="是否过期">
      <template slot-scope="scope">
        <div>{{scope.row.promotionEndTime|btime()}}</div>
      </template>
    </el-table-column>
     <el-table-column
     align="center"
      property="name"
        width="280"
      label="商品名称">
    </el-table-column>
     <el-table-column
     align="center"
      property="brandName"
      label="品牌名称">
    </el-table-column>
     <el-table-column
     align="center"
      property="price"
      label="商品价格">
    </el-table-column>
     <el-table-column
     align="center"
      property="productCategoryName"
      label="商品类别">
    </el-table-column>
     <el-table-column
     align="center"
      property="createTime"
      label="创建时间">
    </el-table-column>
    <el-table-column label="操作" align="center" fixed="right" width="100">
      <template slot-scope="scope">
            <el-button
            style="color:red"
              type="text"
              size="mini"
              @click="del(scope.row)"
            >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-card>


<!-- 点击新增 -->
<el-dialog
  title="热情详情"
  :visible.sync="dialogVisible"
  width="80%"
  @close="Close">
  <el-card>
      <div slot="header" class="clearfix">
  <span>条件查询</span>
  </div>
  <el-form :inline="true" :model="formad" class="demo-form-inline" ref="formad">
  <el-form-item>
    <el-input size="small" v-model="formad.name" placeholder="商品名称/模糊查询"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input size="small" v-model="formad.productSn " placeholder="商品货号"></el-input>
  </el-form-item>
  <el-form-item>
    <el-select size="small" v-model="formad.brandId" placeholder="品牌">
      <el-option v-for="item in brandlist" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-select size="small" v-model="formad.publishStatus " placeholder="上架状态">
      <el-option label="上架" value="1"></el-option>
      <el-option label="未上架" value="0"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-select size="small" v-model="formad.verifyStatus " placeholder="审核状态">
      <el-option label="审核" value="1"></el-option>
      <el-option label="未审核" value="0"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
     <el-button type="primary" size="small" @click="onReset('formad')">重置</el-button>
    <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
  </el-card>

  <!-- 商品列表 -->

<el-card class="editadd">
   <div slot="header" class="clearfix">
  <span>商品列表</span>
  </div>

   <el-table
    :data="shoplist"
    border=""
    style="width: 100%">
    <el-table-column
    align="center"
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      align="center"
      property="date"
      label="选择"
      width="120">
      <template slot-scope="scope">
         <el-radio @change="editshop(scope.row.id)" v-model="scope.row.ischeck"></el-radio>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      property="pic"
      label="商品图片"
      width="120">
      <template slot-scope="scope">
        <img height="50" width="50" :src="scope.row.pic" alt="">
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      property="name"
      label="商品名称">
    </el-table-column>
     <el-table-column
       align="center"
      property="address"
      label="商品价格">
      <template slot-scope="scope">
        <div>原价:{{scope.row.originalPrice}}</div>
        <div>现价:{{scope.row.price}}</div>
      </template>
    </el-table-column>
     <el-table-column
       align="center"
      property="productCategoryName"
      label="商品类别">
    </el-table-column>
     <el-table-column
       align="center"
      property="weight"
      label="重量">
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




  <span slot="footer" class="dialog-footer" >
    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
  </span>
</el-dialog>



<el-dialog title="编辑限时活动" :visible.sync="dialogFormVisible" width="30%" @close="closed">
 <div class="times">
    <div>商品原价:{{editShop.originalPrice}}</div>
    <div class="name" style="width:150px;">商品名称:{{editShop.name}}</div>
 </div>
  <div class="times">
      <div>促销价格
         <el-input-number  style="width:150px" size="small" v-model="promotionPrice" label="促销价格"></el-input-number>
      </div>
      <div>排序
         <el-input-number  style="width:150px" size="small" v-model="sort"   label="排序"></el-input-number>
      </div>
  </div>
  <div class="times">
    <div>开始时间
        <el-date-picker
        size="small"
         style="width:150px"
      v-model="promotionStartTime"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </div>
    <div>
      结束时间
        <el-date-picker
        size="small"
         style="width:150px"
      v-model="promotionEndTime"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </div>
  </div>
  <div class="times">
    <div>
      活动限购数量 <el-input style="width:150px" size="small" v-model="promotionPerLimit"></el-input>
    </div>
    <div>
     <div>商品图片</div>
      <img height="100" width="100" :src="editShop.pic" alt="">
    </div>
  </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="handleClose1">取 消</el-button>
    <el-button type="primary" @click="comfirm">确 定</el-button>
  </div>
</el-dialog>


</div>
</template>
<script>
import Apilimitadd from '@/api/market/limitAd'
export default {
  data() {
    return {
      limitAd:[],
      dialogVisible:false,
      dialogFormVisible:false,
      formad:{
          brandId:'',
          id:'',
          name:'',
          productCategoryId:'',
          productSn:'',
          publishStatus:'',
          verifyStatus:''
      },
      form:{
          name:'',
          region:'',

      },
      //品牌列表
      brandlist:[],
      //商品列表
      shoplist:[],
      start:1,
      limit:10,
      limits:[10, 15, 20, 25],
      total:"",
      //编辑商品
      editShop:"",
      //促销
      promotionPrice:'',
      //排序
      sort:'',
      //开始时间
      promotionStartTime:'',
      //结束时间
      promotionEndTime:'',
      //限购数量
      promotionPerLimit:'',



    }
  },
  created(){
    this.getaddList()
    this.getBrand()
    this.getShoplist()
  },
   // 时间比较过滤
    filters:{
      btime(endtime){
        let flag = new Date(endtime).getTime()-new Date().getTime()
       if(flag>=0) return '活动正在举行'
       else {return '活动已过期'}
      }
    },
  methods:{
    //转换日期格式
     rTime(date) {
    var json_date = new Date(date).toJSON();
    return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
    },
    //关闭弹出框
    handleClose1(){
      console.log(1)
      this.dialogFormVisible = false
      this.getShoplist()
    },
    closed(){
       this.dialogFormVisible = false
       this.getShoplist()
    },
    Close(){
      this.dialogVisible = false
      },
    //编辑提交
    comfirm(){
      Apilimitadd.addRecommend({
        productId:this.editShop.id,
        promotionPrice:this.promotionPrice,
        sort:this.sort,
        promotionStartTime:this.rTime(this.promotionStartTime),
        promotionEndTime:this.rTime(this.promotionEndTime),
        promotionPerLimit:this.promotionPerLimit
      }).then(res=> {
        if(res.success){
          this.$message.success('限时活动编辑成功')
          this.dialogVisible = false
          this.dialogFormVisible = false
          this.sort = ''
          this.promotionStartTime = ''
          this.promotionEndTime = ''
          this.promotionPerLimit = ''
          this.getShoplist()
          this.getaddList()
        }
      })
    },
    editshop(id){
      this.dialogFormVisible = true
      Apilimitadd.productSkusDetail(id).then(res=> {
        console.log(res)
        this.editShop = res.data.product
      })
    },
    handleSizeChange(val){
      this.limit = val
      this.getShoplist()
    },
    handleCurrentChange(val){
      this.start = val
      this.getShoplist()
    },
    //获取品牌列表
    getBrand(){
      Apilimitadd.findAllBrand().then(res=> {
        this.brandlist = res.data.items
      })
    },
    //获取活动列表
    getaddList(){
      Apilimitadd.findAllRecommends().then(res=> {
        this.limitAd = res.data.items
      })
    },
    //获取商品列表
    getShoplist(){
      Apilimitadd.productsByPage(this.start,this.limit).then(res=>{
          res.data.rows.forEach(element => {
            element.ischeck = false
          });
          this.total = res.data.total
          this.shoplist = res.data.rows
      })
    },
    //刪除列表
    del(id){
      console.log(id)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           Apilimitadd.delRecommend(id.recommendId).then(res=> {
             if(res.success){
               this.$message({
                 type: 'success',
                 message: '删除成功!'
               });
              this.getaddList()
             }
      })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     
    },
    //新增廣告
    addAd(){
        this.$router.push('')
    },
    handleClose(){

    },
    //搜索
    onSubmit(){
      this.start = 1
      Apilimitadd.productsByPage(this.start,this.limit,this.formad).then(res=> {
       res.data.rows.forEach(element => {
            element.ischeck = false
          });
        this.shoplist=res.data.rows
        console.log(res)
      })
    },
    //重置
    onReset(formad){
       this.$refs[formad].resetFields();
    }
  }
}
</script>
<style lang="scss">
.limitad .el-dialog{
  margin-top: 0 !important;
  top: 50%;
  transform: translateY(-50%);
}
  .limitad .editadd{
    height: 550px;
    overflow-y: scroll;
  
  }
</style>
<style lang="scss" scoped>
.box-card {
  margin: 30px;
}

.times {
  display: flex;
  justify-content: space-between;
  margin: 15px ;
}

.name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>