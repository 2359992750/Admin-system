<template>
<div>
  <el-card>
    <!-- 商品状态进度条 -->
    <el-steps :space="700" :active="step" finish-status="success" align-center>
          <el-step title="商品基本信息"></el-step>
          <el-step title="添加库存信息"></el-step>
          <el-step title="添加移动端详情"></el-step>
   </el-steps>
  </el-card>


<!-- 商品基本信息区块 -->
  <el-card class="box-card" v-show="step===0">
  <div slot="header" class="clearfix">
    <span>基本信息</span>
  </div>

    <el-form :inline="true" :model="product" class="demo-form-inline"  :label-position="labelPosition" label-width="100px">
      <el-row>
        <el-col :span="8">
              <el-form-item label="商品名称" prop="name"   :rules="[{ required: true, message: '年龄不能为空'} ]">
              <el-input v-model="product.name" placeholder="商品名称"></el-input>
             </el-form-item>
        </el-col>
        <el-col  :span="8">
            <el-form-item label="商品编码">
             <el-input v-model="product.productSn" placeholder="商品编码"></el-input>
           </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="商品分类">
              <el-select v-model="product.productCategoryId" placeholder="商品分类">
              <el-option v-for="item in catlist" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
  </el-form-item>
        </el-col>
      </el-row>
      <el-row>
  <el-form-item label="商品品牌">
      <el-select v-model="product.brandId" placeholder="品牌">
      <el-option v-for="item in brandList" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
  </el-form-item>
      </el-row>
    <el-row>
   <el-form-item label="商品描述">
      <el-input v-model="product.description" placeholder="商品描述"></el-input>
  </el-form-item>
    </el-row>
   <div class="name">商品属性</div>

   <el-row>
     <el-col :span="8">
  <el-form-item label="商品原价">
    <el-input-number v-model="product.originalPrice" :min="0" :max="10" ></el-input-number>
    </el-form-item>
     </el-col>
     <el-col :span="8">
             <el-form-item label="促销类型">
        <el-select v-model="product.promotionType" placeholder="没有促销使用原价" disabled>
              <el-option label="没有促销使用原价" value="0"></el-option>
              <el-option label="使用促销价" value="1"></el-option>
              <el-option label="使用会员价" value="2"></el-option>
              <el-option label="使用阶梯价格" value="3"></el-option>
              <el-option label="使用满减价格" value="4"></el-option>
              <el-option label="限时购" value="5"></el-option>
              </el-select>
    </el-form-item>
     </el-col>
     <el-col :span="8">
        <el-form-item label="活动价格">
    <el-input-number  disabled v-model="product.promotionPrice" :min="0"  ></el-input-number>
    </el-form-item>
     </el-col>
   </el-row>

   <el-row>
     <el-col style="float:right" :span="8">
       <el-form-item label="重量(kg)">
         <el-input-number  v-model="product.weight" :min="0"  ></el-input-number>
       </el-form-item>
     </el-col>
   </el-row>

  <el-row>
     <el-col :span="8">
      <el-form-item label="审核状态">
         <el-switch
  v-model="product.verifyStatus">
</el-switch>
      </el-form-item>
     </el-col>
     <el-col :span="8">
       <el-form-item label="是否上架">
         <el-switch
  v-model="product.publishStatus">
</el-switch>
       </el-form-item>
     </el-col>
     <el-col :span="8"></el-col>
   </el-row>

  <el-row style="margin-top:30px">
    <el-form-item label="缩略图">
       <template>
          <el-upload
        v-model="product.pic"
  action="/lejuAdmin/material/uploadFileOss"
  list-type="text"
  :headers="Token"
  :on-success="uploadpic"
>
  <img height="100" width="100" v-if="product.pic" :src="product.pic" alt="">
  <i v-else class="el-icon-plus pic"></i>
</el-upload>
       </template>
    </el-form-item>
  </el-row>
  

  <div class="name">其他信息</div>
  <el-row>
    <el-col :span="8"><el-form-item label="推荐状态">
  <el-switch
  v-model="product.recommendStatus">
</el-switch>
      </el-form-item></el-col>
    <el-col :span="8"><el-form-item label="新品状态">
      <el-switch
  v-model="product.newStatus">
</el-switch>
      </el-form-item></el-col>
    <el-col :span="8"><el-form-item label="预告商品">
     <el-switch
  v-model="product.previewStatus">
</el-switch>
      </el-form-item></el-col>
  </el-row>

  <el-row>
    <el-col :span="8"><el-form-item label="搜索关键词">
       <el-input
         placeholder="关键词"
         v-model="product.keywords">
        </el-input>
      </el-form-item></el-col>
    <el-col :span="8"><el-form-item label="库存预警">
         <el-input-number  v-model="product.lowStock" :min="0"  ></el-input-number>
      </el-form-item></el-col>
    <el-col :span="8"><el-form-item label="商品排序">
         <el-input-number  v-model="product.sort" :min="0"  ></el-input-number>
      </el-form-item></el-col>
  </el-row>

  <el-row class="footer">
        <el-form-item label="产品服务">
                    <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="item in checkgrouplist" :key="item.id" :label="item.id">{{item.value}}</el-checkbox>
           
  </el-checkbox-group>
        </el-form-item>
  </el-row>
 <el-row class="footer">
         <el-button size="small" v-show="btnshow" @click="backstep">返回上一步</el-button>
         <el-button size="small" @click="gostep" type="primary">{{btntext}}</el-button>
    </el-row>
</el-form>
  </el-card>



<!-- 添加库存信息区块 -->
<el-card class="box-card" v-show="step===1">
  <div slot="header" class="clearfix">
    <span>商品sku信息</span>
  </div>

 <el-form :inline="true" :model="product" class="demo-form-inline"  :label-position="labelPosition" label-width="100px">
   <el-row>
     <el-col :span="8">
       <el-form-item label="标题">
         <el-input v-model="product.detailTitle" placeholder="标题"></el-input>
       </el-form-item>
     </el-col>
     <el-col :span="8">
       <el-form-item label="副标题">
        <el-input v-model="product.subTitle" placeholder="副标题"></el-input>
       </el-form-item>
     </el-col>
   </el-row>

    <el-row>
      <el-form-item label="画册图片">
       <template>
          <el-upload
          v-model="product.albumPics"
   action="/lejuAdmin/material/uploadFileOss"
  list-type="picture-card"
  :headers="Token"
  :on-success="handleDownload"
  :limit="5"
  > 
  <div style="display:flex">
  <div v-if="product.albumPics.length>0" style="display:flex">
  <img style="margin-left:5px" height="150" width="150" v-for="(item,index) in product.albumPics" :src="item" :key="index" alt="">
  </div>
  <i style="padding:65px" class="el-icon-plus"></i>
  </div>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb,文件不超过5个</div>
</el-upload>
       </template>
      </el-form-item>
    </el-row>

     <el-row>
     <el-col :span="16">
       <el-form-item label="sku设置">
         <!-- 点击添加商品的样式 -->
          <el-row >
 <el-checkbox-group v-model="checkColorList"  style="display:flex">
     <div v-for="(item ,index) in Colorlist" :key="index" ><el-checkbox :label="item"></el-checkbox><el-button style="color:red;margin-left:3px" size="small" type="text">删除</el-button></div>
 </el-checkbox-group>

          
          </el-row>
          <el-row>
            <el-checkbox-group v-model="checkSizeList" style="display:flex">
               <div v-for="(item ,index) in Sizelist" :key="index" ><el-checkbox :label="item"></el-checkbox><el-button  style="color:red;margin-left:3px" size="small" type="text">删除</el-button></div>
               </el-checkbox-group>
          </el-row>
          <!--  -->
         <el-input size="small" style="width:200px" v-model="color" placeholder="颜色描述:比如土豪金"></el-input>
          <el-button style="margin:0 20px"  size="small" @click="creatColor">创建颜色选项</el-button>
         <el-input size="small" style="width:200px" v-model="size"  placeholder="大小"></el-input>
          <el-button style="margin:0 20px" size="small" @click="createSize">创建大小选项</el-button>
       </el-form-item>
     </el-col>
     <el-col :span="4">
       <el-form-item >
        <el-button size="small" type="primary" @click="createSku">生成sku列表</el-button>
        <el-button size="small" type="primary" @click="newAddSku">新增sku</el-button>
       </el-form-item>
     </el-col>
   </el-row>

     <el-table
     v-if="pmsSkuStockList.length>0"
      :data="pmsSkuStockList"
    border
    style="width: 100%">
     <el-table-column
     fixed="left"
      type="index"
      label="#"
      width="50">
    </el-table-column>
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
    <el-table-column
      prop="color"
      label="颜色"
      width="180">
    </el-table-column>
      <el-table-column
      prop="size"
      label="大小"
      width="180">
    </el-table-column>
    <el-table-column
      prop="stock"
      label="库存"
       width="180">
      <template slot-scope="scope">
        <el-input size="small" v-model="scope.row.stock" placeholder="自定义库存"></el-input>
      </template>
    </el-table-column>
     <el-table-column
      prop="lowStock"
      label="预备库存"
       width="180">
      <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.lowStock" placeholder="预备库存"></el-input>
      </template>
    </el-table-column>
     <el-table-column
      prop="lockStock"
      label="锁定库存"
       width="180">
      <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.lockStock" placeholder="锁定库存"></el-input>
      </template>
    </el-table-column>
     <el-table-column
      prop="skuCode"
      label="sku编码"
       width="180">
      <template slot-scope="scope">
         <el-input size="small" v-model="scope.row.skuCode" ></el-input>
      </template>
    </el-table-column>
     <el-table-column
      prop="price"
      label="价格"
       width="180">
      <template slot-scope="scope">
        <el-input size="small" v-model="scope.row.skuCode"></el-input>
      </template>
    </el-table-column>
     <el-table-column
      prop="sale"
      label="销量"
       width="180">
      <template slot-scope="scope">
         <el-input size="small"  v-model="scope.row.sale"></el-input>
      </template>
    </el-table-column>
      <el-table-column
      fixed="right"
      label="删除"
       width="180">
      <template slot-scope="scope">
        <el-button @click="del(scope.row.id)" style="color:red" type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
 </el-form>
  
 <el-row class="footer">
         <el-button size="small" v-show="btnshow" @click="backstep">返回上一步</el-button>
         <el-button size="small" @click="gostep" type="primary">{{btntext}}</el-button>
    </el-row>
</el-card>



<!-- 添加移动端区块 -->
<el-card class="box-card" v-show="step===2">
  <div slot="header" class="clearfix">
    <span>详情描述</span>
  </div>
 
 <el-form :model="product" class="demo-form-inline"  :label-position="labelPosition" label-width="100px">
   <el-form-item label="商品详情">
    <TEditor ref="Ti" />
   </el-form-item> 
  <el-form-item label="备注">
      <el-input
  type="textarea"
  placeholder="备注"
  v-model="product.note"
  show-word-limit
>
</el-input>
  </el-form-item>
 </el-form>

 <el-row class="footer">
         <el-button size="small" v-show="btnshow" @click="backstep">返回上一步</el-button>
         <el-button size="small" v-if="!editid" @click="gostep" type="primary">{{btntext}}</el-button>
         <el-button size="small" v-if="editid" @click="goprevent" type="primary">{{btntext}}</el-button>
    </el-row>
</el-card>
   




</div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import Apigoods from '@/api/goods/index'
import {getToken} from '@/utils/myAuth'
import TEditor from '@/components/Tinymce'
import { formatTime } from '@/utils';
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      btnshow:false,
      Token:{
        token:'',
      },
      labelPosition:'right',
      step:0,
      brandList:[],
      catlist:[],
      fileList:[],
      product:{
          name:'',
          productSn:'',
          productCategoryId:'',
          productCategoryName:'',
          brandId:'',
          brandName:'',
          description:'',
          originalPrice:'',
          promotionType:'0',//促销类型
          promotionPrice:'',//促销活动价格
          weight:'',//商品重量
          verifyStatus:false,//审核状态
          publishStatus:false,//是否上架
          pic:'',//缩略图
          recommendStatus:false,
          newStatus:false,
          previewStatus:false,
          keywords:'',
          lowStock:'',//库存预警
          sort:'',
          detailTitle:'',
          subTitle:'',
          albumPics:[],
          spData:[],//商品销售属性
          skuCode:'',//sku编码
          detailHtml:'',
          note:'',
          stock:'',//库存
          lockStock:'',//锁定库存
          lowStock:'',//预警库存
          sale:'',//销量
          price:'',//价格
          serviceIds:''
      },
      color:'',
      size:'',
      //多选服务
      checkList:[],
       checkgrouplist:[
        {
          id:1,
          value:'无忧退货'
        },
         {
          id:2,
          value:'快速退款'
        }, {
          id:3,
          value:'免费包邮'
        },
      ],
      //商品颜色种类数组
      Colorlist:[],
      //商品大小数组
      Sizelist:[],
      //选中的颜色
      checkColorList:[],
      //选中的大小
      checkSizeList:[],
      //sku列表
       pmsSkuStockList: [],
       itemId:'',
       skuavlue:[],
       editid:''
    }
  },
  components: {
    TEditor, // 富文本框组件
  },
  created() {
    this.Token.token = getToken()
    this.findAllBrand()
    this.getAllcategory()
    //重新编辑操作
    this.editid = this.$route.query.id
    if(this.editid){
      this.getshopDetail()
    }
  
  },
  methods:{
    //编辑操作(获取编辑商品明细)
    getshopDetail(){
      Apigoods.productSkusDetail(this.editid).then(res=>{
        console.log(res)
        res.data.product.serviceIds = res.data.product.serviceIds.split()
       
        this.checkgrouplist.forEach(item=>{
          res.data.product.serviceIds.forEach(val=>{
            if(item.id==val){
              this.checkList.push(item.id)
            }
          })
        })
          res.data.product.previewStatus = res.data.product.previewStatus===1?true:false
          res.data.product.recommendStatus = res.data.product.recommendStatus===1?true:false
          res.data.product.publishStatus = res.data.product.publishStatus===1?true:false
          res.data.product.verifyStatus = res.data.product.verifyStatus===1?true:false
          res.data.product.newStatus = res.data.product.newStatus===1?true:false
        res.data.product.albumPics = res.data.product.albumPics.split(',')
        this.product = res.data.product
        res.data.skus.forEach(item=>{
          var skudata = JSON.parse(item.spData)
          skudata.reduce((pre,next)=>{
            item.color = pre.value
            item.size = next.value
          })
        })
          console.log(res.data)
        this.pmsSkuStockList = res.data.skus
          setTimeout(()=> {
      this.$refs.Ti.setContent(res.data.product.detailMobileHtml)
    },2000)
      })
    },
    //创建sku列表
    createSku(){
       this.$confirm('此操作将清空sku列表,并生成新的列表, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.stockgoods()
          this.product.spData = []
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    //新增sku
    newAddSku(){
      this.stockgoods()
    },
    //添加和新增操作
    stockgoods(){
         this.pmsSkuStockList = []
        if(this.checkColorList.length===0){
        this.$message.error('请选中颜色')
        return 0;
      }
      if(this.checkSizeList.length===0){
      
        this.checkColorList.forEach(item=> {
          var obj = [{        
            key: '颜色',
            value: item
          }]
          this.product.spData.push(obj)
        })
      }else {
        
      var list = [[...this.checkColorList], [...this.checkSizeList]]
        const skuItem = list.reduce((current, total) => {
        var skuList = []
        total.forEach((out) => {
          current.forEach((inner) => {
            if (typeof out === 'object') {
              skuList.push([...out, inner])
            } else {
              skuList.push([out, inner])
            }
          })
        })
        return skuList
      })
     
       skuItem.forEach(item=> {
         var arr = [
           {
               key: '颜色',
            value: item[1]
           },
           {
               key: '大小',
            value: item[0]
           }
         ]
         this.product.spData.push(arr)
        })
      }
        //新增sku列表
    this.skuavlue = this.product.spData
      this.product.spData.forEach(item=>{
        var sku = {
        lockStock: '',
        lowStock: '',
        pic: "",
        price: 0,
        productId: "",
        promotionPrice: 0,
        sale: 0,
        skuCode: 100000,
        color:item[0].value,
        size:item[1]?item[1].value:"",
        stock: '',
        id:uuidv4()
        } 
        this.pmsSkuStockList.push(sku)
      })
       
    },
    //删除sku中的一条数据
    del(id){
      this.pmsSkuStockList = this.pmsSkuStockList.filter(item=>item.id!==id)
    },
    //创建商品的颜色
    creatColor(){
      if(!this.color){
        this.$message.error('请填写颜色')
        return 0
      }
      this.Colorlist.push(this.color)
      this.color = ''
    },
    //创建商品的大小
    createSize(){
       if(!this.size){
        this.$message.error('请填写大小')
        return 0
      }
       this.Sizelist.push(this.size)
      this.size = ''
    },
    //获取所有品牌
    findAllBrand(){
      Apigoods.findAllBrand().then(res=> {
        this.brandList = res.data.items
      })
    },
    //获取分类
    getAllcategory(){
      Apigoods.getAllCategory().then(res=> {
        this.catlist = res.data.items[1].children
      })
    },
    //改变状态
    changestasus(){
       this.pmsSkuStockList.forEach(item=>{
             this.skuavlue.forEach(val=> {
               item.spData  = JSON.stringify(val)
               delete item.color
               delete item.size
               delete item.id
             })
           })
           this.product.albumPics = this.product.albumPics.join()
           this.product.detailMobileHtml  = this.$refs.Ti.getContent()
           this.brandList.forEach(item=>{
             if(item.id===this.product.brandId){
               this.product.brandName = item.name
             }
           })
           this.catlist.forEach(item=>{
             if(item.id===this.product.productCategoryId){
               this.product.productCategoryName = item.name
             }
           })
           this.product.serviceIds = this.checkList.join()
           this.product.previewStatus = this.product.previewStatus===true?1:0
           this.product.recommendStatus = this.product.recommendStatus===true?1:0
           this.product.publishStatus = this.product.publishStatus===true?1:0
           this.product.verifyStatus = this.product.verifyStatus===true?1:0
           this.product.newStatus = this.product.newStatus===true?1:0
    },
    //编辑后保存按钮
    goprevent(){
       if (this.step < 3){
            this.step++
         }
         if(this.step===3){
         this.changestasus()
           Apigoods.updateProductAndSkus({
             pmsSkuStockList:this.pmsSkuStockList,
             product:this.product
           }).then(res=> {
             if(res.success){
               this.$message.success('更新商品成功')
               this.$router.push('/goods/goodslist')
               this.skuavlue = null
             }
         })
       }
    },
    //点击下一步
    gostep(){
       if (this.step < 3){
            this.step++
         }
         if(this.step===3){
           this.changestasus()
           Apigoods.addProductAndSkus({
             pmsSkuStockList:this.pmsSkuStockList,
             product:this.product
           }).then(res=> {
             if(res.success){
               this.$message.success('新增商品成功')
               this.$router.push('/goods/goodslist')
               this.skuavlue = null
             }
         })
       }
    },
    //点击返回上一步
    backstep(){
      if(this.step>0){
        this.step--
      }
    },
    //
    handleAvatarSuccess(res){
      this.pmsSkuStockList.forEach(item=>{
        if(item.id===this.itemId){
          item.pic = res.data.fileUrl
        }
      })
      console.log(this.pmsSkuStockList)
    
    },
    upload(item){
      // console.log(item.row.id)
      this.itemId = item.row.id
    },
    uploadpic(res){
      this.product.pic = res.data.fileUrl
    },
      handleDownload(res) {
        this.product.albumPics.push(res.data.fileUrl)
      }
  },
    computed:{
      btntext(){
        var text = ''
        switch(this.step){
         case 0 :
            text='下一步,填写库存信息'
            this.btnshow = false
            break; 
         case 1 :
            text='下一步,填写库存信息'
            this.btnshow = true
            break; 
         default : 
           text='提交保存'
           this.btnshow = true
         }
        return text
      }
    }
}
</script>

<style lang="scss">
.pic{
  padding: 50px;
  font-size: 28px;
  color: #8c939d;
}
</style>

<style lang="scss" scoped>
.box-card {
  margin: 30px;
}

.name {
 font-size: 16px;
    padding: 10px 0 20px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 30px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>