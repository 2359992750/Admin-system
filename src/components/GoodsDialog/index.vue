<template>
<div>
  <el-dialog width="50%" title="sku列表" :visible.sync="dialogTableVisible" v-if="dialogTableVisible"  @close = "closed">
    <el-row style="float:right">
      <el-button type="primary" @click="newAdd">新增</el-button>
    </el-row>
  <el-table  :data="pmsSkuStockList" brand style="width: 100%">
    <el-table-column  fixed="left" label="#" type="index"></el-table-column>
    <el-table-column
      prop=""
      label="图片"
      width="100">
      <template slot-scope="scope">
      <el-upload
      ref="upload"
      class="avatar-uploader"
      action="/lejuAdmin/material/uploadFileOss"
      :headers="Token"
      :show-file-list="false"
      @click.native="upload(scope)"
      :on-success="handleAvatarSuccess">
  <img height="100" width="100" v-if="scope.row.pic" :src="scope.row.pic" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

      </template>
    </el-table-column>
    <el-table-column  prop="color" label="颜色" >
      <template slot-scope="scope">
        <el-input size="small" v-model="scope.row.color" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="size" label="大小">
      <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.size" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="stock" label="库存">
      <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.stock" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="lowStock" label="预警库存">
       <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.lowStock" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="lockStock" label="锁定库存">
       <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.lockStock" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="skuCode" label="sku编码">
       <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.skuCode" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="price" label="价格">
       <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.price" ></el-input>
      </template>
    </el-table-column>
    <el-table-column  prop="sale" label="销量">
       <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.sale"  ></el-input>
      </template>
    </el-table-column>
    <el-table-column  fixed="right" width="120" label="操作">
      <template slot-scope="scope">
        <el-button style="color:red;fontSize:12px" @click="del(scope.row.id)" type="text">删除</el-button>
        <el-button v-if="!scope.row.newshow" type="text" style="fontSize:12px" @click ="update(scope.row)">修改编辑</el-button>
        <el-button v-if ="scope.row.newshow" type="text" style="fontSize:12px" @click ="addSku(scope.row)">保存</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div slot="footer" class="dialog-footer">
    <el-button @click="canceltbn">取 消</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import ApiGoods from '@/api/goods/index'
import {getToken} from '@/utils/myAuth'
export default {
    data() {
      return {
        Token:{
          token:''
        },
        dialogTableVisible:false,
        pmsSkuStockList:[],
        shopId:'',
        product:[]
      }
    },
    methods: {
      //保存新增数据
      addSku(val){
              
              const obj =[
                {
                  key:'颜色',
                  value:val.color
                },
                {
                  key:'容量',
                  value:val.size
                }
              ]
              val.spData = JSON.stringify(obj)
              delete val.color
              delete val.size
              delete val.newshow
          
        ApiGoods.addProductSkus(val).then(res=>{
          if(res.success){
            this.$message.success('新增sku成功')
            this.getshopDeteil()
          }
        })
      },
      //获得sku数据
      getskulilst(){
          ApiGoods.getSkusByProductId(localStorage.getItem('shopId')).then(res=>{
              this.pmsSkuStockList  = res.data.items
            })
      },
      //新增sku数据
      newAdd(){
        this.shopId = localStorage.getItem('shopId')
        const skuList = {
          color: '',
          lockStock: 0,
          lowStock: 0,
          pic: '',
          price: 0,
          productId: this.shopId,
          sale: 0,
          size: '',
          skuCode: 0,
          spData: '',
          stock: '',
          newshow:true
        }
        this.pmsSkuStockList.push(skuList)
      },
      del(id){
        ApiGoods.delSku(id).then(res=>{
         if(res.success){
           this.$message.success('删除成功')
           this.getshopDeteil()
         }
        })
      },
      //更新库存
      update(item){
        ApiGoods.updateSkuInfo(item).then(res=>{
          if(res.success){
            this.$$message.success('更新成功')
            this.getshopDeteil()
          }
        })
      },
      //获取商品明细
      getshopDeteil(){
        this.Token.token = getToken()
        this.dialogTableVisible = true
        this.shopId = localStorage.getItem('shopId')
        ApiGoods.productSkusDetail(this.shopId).then(res=>{
          res.data.skus.forEach(item=>{
            var skudata = JSON.parse(item.spData)
          skudata.reduce((pre,next)=>{
            item.color = pre.value
            item.size = next.value
          })
        })
          this.pmsSkuStockList = res.data.skus
          this.product = res.data.product
        })
      },
      canceltbn(){
        this.dialogTableVisible = false
        localStorage.removeItem('shopId')
        
      },
      closed(){
         this.dialogTableVisible = false
        localStorage.removeItem('shopId')
      },
       handleAvatarSuccess(res){
      this.pmsSkuStockList.forEach(item=>{
        if(item.id===this.itemId){
          item.pic = res.data.fileUrl
        }
      })
      console.log(this.pmsSkuStockList)
    
    },
    upload(item){
      this.itemId = item.row.id
    }
    },
}
</script>
<style lang="scss" scoped>

</style>