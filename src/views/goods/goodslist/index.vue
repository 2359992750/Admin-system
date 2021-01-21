<template>
<div>
    <collapse></collapse>

<el-collapse class="collapse">
      <el-collapse-item title="条件查询">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="formInline">

 <el-row >

   <el-col :span="6">
  <el-form-item label="商品名称" prop="name">
    <el-input size="small" v-model="formInline.name" placeholder="商品名称/模糊查询"></el-input>
  </el-form-item>
   </el-col>

    <el-col :span="6">
  <el-form-item label="商品货号" prop="productSn">
    <el-input size="small" v-model="formInline.productSn" placeholder="商品货号"></el-input>
  </el-form-item>
  </el-col>

   <el-col :span="6">
  <el-form-item label="品牌" prop="brandId">
    <el-select size="small"  v-model="formInline.brandId" placeholder="品牌">
      <el-option v-for="item in brandList" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
  </el-form-item>
   </el-col>

    <el-col :span="6">
  <el-form-item label="上架状态" prop="publishStatus">
    <el-select size="small"  v-model="formInline.publishStatus" placeholder="上架状态">
      <el-option label="下架" value="0"></el-option>
      <el-option label="上架" value="1"></el-option>
    </el-select>
  </el-form-item>
   </el-col>
 </el-row>


 <el-row class="second">
   <el-col :span="17">
     <el-form-item label="审核状态">
    <el-select size="small"  v-model="formInline.verifyStatus" placeholder="审核状态">
      <el-option label="未审核" value="0"></el-option>
      <el-option label="已审核" value="1"></el-option>
    </el-select>
  </el-form-item>
   </el-col>

   <el-col :span="7">
     <el-form-item>
    <el-button size="small" @click="resetForm('formInline')">重置</el-button>
    <el-button size="small" type="primary" @click="onSubmit">搜索</el-button>
  </el-form-item>
   </el-col>
 </el-row>
</el-form>
  </el-collapse-item>
</el-collapse>

<!-- 商品表格 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-button @click="addgoods"  type="primary" size="small" style="float: left;" >新增</el-button>
    <el-button type="primary" size="small" @click="exportExcel" >导出商品列表为excel文件</el-button>
  </div>
     <el-table
    :data="shopList"
    border
    style="width: 100%">
    <el-table-column
    align="center"
    label="序号"
    width="60"
    type="index"
    ></el-table-column>
    <el-table-column
    align="center"
      prop="pic"
      label="商品图片"
      width="120">
      <template slot-scope="scope">
        <img height="100" width="100" :src="scope.row.pic" alt="">
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="商品名称"
      width="400">
      <template slot-scope="scope">
        <div class="name" style="font-size: 14px;color: #606266;">{{scope.row.name}}</div>
        <div class="brand" style="font-size: 14px;color: #606266;">品牌:{{scope.row.brandName}}</div>
        <div class="dec" style="font-size: 14px;color: #606266;">{{scope.row.description}}</div>
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="商品价格">
      <template slot-scope="scope">
        <div class="originalPrice">原价:{{scope.row.originalPrice}}</div>
        <div class="price">原价:{{scope.row.price}}</div>
      </template>
    </el-table-column>
     <el-table-column
     align="center"
      prop="productCategoryName"
      label="商品类别">
    </el-table-column>
     <el-table-column
     align="center"
      prop="address"
      label="标签">
        <template slot-scope="scope">    
        <el-switch
  v-model="scope.row.newStatus"
  @change="changeNew(scope.row)"
  inactive-text="最新:">
</el-switch>
<el-switch
@change="changeRec(scope.row)"
  v-model="scope.row.recommendStatus"
  inactive-text="推荐:">
</el-switch>
      </template>
    </el-table-column>
     <el-table-column
     align="center"
      prop="address"
      label="标签2">
      <template slot-scope="scope">    
        <el-switch
  v-model="scope.row.publishStatus"
  @change="changePub(scope.row)"
  inactive-text="发布:">
</el-switch>
<el-switch
  v-model="scope.row.verifyStatus "
  @change="changeVer(scope.row)"
  inactive-text="审核:">
</el-switch>
      </template>
    </el-table-column>
     <el-table-column
     align="center"
      label="sku">
        <template slot-scope="scope">    
          <el-button type="text" @click="openDialog(scope.row.id)">编辑sku</el-button>
      </template>
    </el-table-column>
     <el-table-column
     align="center"
      prop="weight"
      label="重量">
    </el-table-column>
     <el-table-column
     align="center"
      prop="sort"
      label="排序">
    </el-table-column>
     <el-table-column
     align="center"
      fixed="right"
      width="120"
      label="操作">
      <template slot-scope="scope">
        <el-button size="small" @click="edit(scope.row)" type="text">编辑</el-button>
        <el-button size="small" @click="del(scope.row)" style="color:red" type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
      @size-click="handleSizeclick"
      @current-click="handleCurrentclick"
      :current-page="start"
      :page-sizes="limits"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</el-card>
    <goodsDialog ref="Gd"></goodsDialog>
</div>
</template>
<script>
//excel插件
import Blob from "@/excel/Blob"
import Export2Excel from "@/excel/Export2Excel"
import Apigoods from '@/api/goods/index'
export default {
    data() {
      return {
         formInline:{
          brandId:'',
          name:'',
          productSn:'' ,
          publishStatus:'',
          verifyStatus:''   
        },
        brandList:[],
        start:1,
        limit:10,
        limits:[10, 15, 20, 25],
        // 商品表格数据
        shopList:[],
        total:null,
      }
    },
    created() {
        this.getAllbrand()
        this.getShopList()
    },
    methods:{
      //导出excel
    exportExcel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/excel/Export2Excel");

        const tHeader = ["商品名称","商品价格","商品类别","重量","排序"];// 上面设置Excel的表格第一行的标题
      
        const filterVal = ["brandName","price","productCategoryName","weight","sort"]; // 上面的index、nickName、name是tableData里对象的属性
        
        const list = this.shopList;              //把data里的tableData存到list

        const data = this.formatJson(filterVal, list);
        
        export_json_to_excel(tHeader, data, "表格excel");   //标题，数据，文件名
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
      //打开sku编辑框
      openDialog(id){
        localStorage.setItem('shopId',id)
        this.$refs.Gd.getshopDeteil()
      },
      //新增商品
      addgoods(){
        this.$router.push('/goods/addGoods')
      },
      //删除
      del(item) {
        Apigoods.del(item.id).then(res=>{
          if(res.success){
            this.$message.success('删除成功')
            this.getShopList()
          }
        })
      },
      //编辑
      edit(item){
        this.$router.push({path:'/goods/addGoods',query:{
          id:item.id
        }})
      },
      //改变最新状态
      changeNew(item){
        Apigoods.switchNewStatus({
          productId:item.id,
          status:item.newStatus===true?1:0
        }).then(res=>{
          if(res.success) {
            console.log(res)
            this.$message.success('改变最新状态成功')
            this.getShopList()
          }
        })
      },
      //改变推荐状态
      changeRec(item){
          Apigoods.switchRecommandStatus({
          productId:item.id,
          status:item.recommendStatus==true?1:0
        }).then(res=>{
          console.log(res)
          if(res.success) {
            this.$message.success('改变推荐状态成功')
            this.getShopList()
          }
        })
      },
      //改变发布状态
      changePub(item){
          Apigoods.switchPublishStatus({
          productId:item.id,
          status:item.publishStatus==true?1:0
        }).then(res=>{
          console.log(res)
          if(res.success) {
            this.$message.success('改变发布状态成功')
            this.getShopList()
          }
        })
      },
      //改变审核状态
      changeVer(item){
          Apigoods.switchVerifyStatus({
          productId:item.id,
          status:item.verifyStatus==true?1:0
        }).then(res=>{
          console.log(res)
          if(res.success) {
            this.$message.success('改变审核状态成功')
            this.getShopList()
          }
        })
      },
      //获取商品数据
      getShopList(){
        Apigoods.productsByPage(this.start,this.limit,this.formInline).then(res=> {
          res.data.rows.forEach(item=>{
            item.newStatus = item.newStatus===1?true:false
            item.publishStatus = item.publishStatus===1?true:false
            item.recommendStatus = item.recommendStatus===1?true:false
            item.verifyStatus = item.verifyStatus===1?true:false
          })
          this.shopList = res.data.rows
          this.total = res.data.total
        })
      },
      handleSizeclick(val){
        this.limit = val
        this.getShopList()
      },
      handleCurrentclick(val){
        this.start = val
        this.getShopList()
      },
      //获取品牌列表
      getAllbrand(){
        Apigoods.findAllBrand().then(res=> {
          this.brandList = res.data.items
        })
      },
      //提交查询
      onSubmit(){
        this.start=1
        var data={}
        for(var key in  this.formInline){
          if( this.formInline[key]){
            data[key] = this.formInline[key]
          }
        }
        Apigoods.productsByPage(this.start,this.limit,data).then(res=>{
          this.shopList = res.data.rows
        })
      },
      //重置提交
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
}
</script>
<style lang="scss">
.collapse {
  margin: 30px;
}
.el-row {
  margin-left: 20px !important;
}

.second {
  margin-left: 29px !important;
}
</style>

<style lang="scss" scoped>


</style>

