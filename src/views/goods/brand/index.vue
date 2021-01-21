<template>
  <div class="article-main">
    <el-card shadow="never" class="card">
      <div slot="header">
        <el-button size="small" type="primary" @click="addarticle">新增</el-button>
      </div>
      <!--  table -->
      <el-table
        v-loading="listLoading"
        :data="articleList"
        border
        style="width: 100%"
      >
        <el-table-column label="序号" type="index" width="50" fixed="left" align="center" />
        <el-table-column prop="name" label="品牌名称" align="center" width="200" />
          <!-- 展示状态 -->
        <el-table-column label="展示状态" align="center" width="200">
          <template slot-scope="scope">
            <el-switch
              inactive-text="是否展示"
              v-model="scope.row.showStatus"
              :inactive-value="0"
              :active-value="1"
              @change = sendStatus(scope)
            />
          </template>
        </el-table-column>
          <el-table-column
          prop="name"
          label="logo"
          align="center"
          width="200"
        >
        <template slot-scope="scope">
          <img height="100" width="100" :src="scope.row.logo" alt="">
        </template>
          </el-table-column>
        <el-table-column
          prop="phone"
          label="专区大图"
          align="center"
          width="200"
        >
         <template slot-scope="scope">
          <img height="100" width="100" :src="scope.row.bigPic" alt="">
        </template>
        </el-table-column>
        <el-table-column
          prop="brandStory"
          label="品牌故事"
          align="center"
          width="200"
        >
         </el-table-column>
          <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
          width="200"
        >
         </el-table-column>
         <el-table-column
          prop="sort"
          label="排序"
          align="center"
          width="200"
        >
         </el-table-column>
         <el-table-column
          prop="productCommentCount"
          label="产品评论数"
          align="center"
          width="200"
        >
         </el-table-column>
         <el-table-column
          prop="productCount"
          label="产品数量"
          align="center"
          width="200"
        >
         </el-table-column>
         <el-table-column
          prop="factoryStatus "
          label="是否品牌制造商"
          align="center"
          width="200"
        >
        <template slot-scope="scope">
          <div>{{scope.row.factoryStatus==1?'是':'否'}}</div>
        </template>
         </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button
            class="edit"
              icon="iconfont icon-eyes"
              type="text"
              size="mini"
              @click="edit(scope.row)"
            >编辑</el-button>
            <el-button
            style="color:red"
              type="text"
              size="mini"
              @click="del(scope.row)"
            >删除</el-button>
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


  <!-- 点击编辑和新增的dialog -->
      <el-dialog title="品牌详情" :visible.sync="dialogFormVisible" width="30%">
  <el-form :model="adressfrom" :rules="rules" :label-position="labelPosition" label-width="80px">
    <el-form-item label="品牌名称" prop="name">
      <el-input size="small" style="width:300px;" placeholder="品牌名称" v-model="adressfrom.name"></el-input>
    </el-form-item>
    <el-form-item label="首字母" >
      <el-input size="small" placeholder="首字母"  style="width:300px;" v-model="adressfrom.firstLetter"></el-input>
    </el-form-item>
    <el-form-item label="排序" >
      <el-input size="small" placeholder="排序" style="width:300px;" v-model="adressfrom.sort"></el-input>
    </el-form-item>
    <el-form-item label="产品数量" >
      <el-input size="small" placeholder="产品数量"  style="width:300px;" v-model="adressfrom.productCount"></el-input>
    </el-form-item>
    <el-form-item>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-switch
          size="small"
            v-model="adressfrom.showStatus"
            inactive-text="是否展示">
         </el-switch>
        </el-col>
        <el-col :span="10">
          <el-switch
          size="small"
          v-model="adressfrom.factoryStatus"
          inactive-text="是否为品牌制造商">
       </el-switch>
         </el-col>
      </el-row>
    </el-form-item>

     <el-form-item>
      <el-row :gutter="20">
        <el-col :span="10">
         <el-upload
  class="uploadpic"
  ref="uploadpic"
  drag
  action="/lejuAdmin/material/uploadFileOss"
  :on-success="uploadbigPic"
  :headers="Token">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">上传专区大图</div>
</el-upload>
        </el-col>
        <el-col :span="10">
         <el-upload
  class="uploadlogo"
  ref="uploadlogo"
  drag
  action="/lejuAdmin/material/uploadFileOss"
  :on-success="uploadlogo"
  :headers="Token">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">上传Logo</div>
</el-upload>
         </el-col>
      </el-row>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button v-if="!flag" type="primary" @click="adressAdd">确 定</el-button>
    <el-button v-if="flag" type="primary" @click="updateAd">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import goodsApi from '@/api/goods/index'
import {getToken} from '@/utils/myAuth'
export default {
  name: 'Aticle',
  data() {
    return {
      //token
      Token:{token:null},
      labelPosition:'right',
      listLoading: false, // brand列表加载动画
      articleList: [] ,// brand数据数组,
      dialogFormVisible:false,
      adressfrom:{
          name:'',
          firstLetter:'',
          sort:'',
          productCount:'',
          showStatus:false,
          factoryStatus:false,
          bigPic:'',
          logo:''
      },
      //判斷是新增还是编辑
      flag:false,
      rules:{
        name:[
            { required: true, message: '请输入品牌名称', trigger: 'blur' }
        ]
      },
      //分页数据
      start:1,
      limit:10,
      total:null,
      limits:[10, 15, 20, 25]
    }
  },
  created() {
    this.Token.token = getToken()
    this.getList()
  },
  methods: {
    //上传专区大图的回调
    uploadbigPic(res){
      this.$refs.uploadpic.clearFiles()
      this.adressfrom.bigPic = res.data.fileUrl
    },
    //上传logo的回调
    uploadlogo(res){
      this.$refs.uploadlogo.clearFiles()
      this.adressfrom.logo = res.data.fileUrl
    },
    // 获取品牌列表
    getList() {
      this.listLoading = true
      goodsApi.findBrandByPage(this.start,this.limit).then((res) => {
        if (res.success) {
          this.articleList = res.data.rows
          this.total = res.data.total
        } else {
          this.$message.error('请求失败')
        }
        this.listLoading = false
      })
    },
    // brand编辑时打开dialog
    edit(item) {
      this.flag = true
      this.dialogFormVisible = true
      this.adressfrom = Object.assign({},item)
      this.adressfrom.showStatus = this.adressfrom.showStatus==1?true:false
      this.adressfrom.factoryStatus = this.adressfrom.factoryStatus==1?true:false
    },
    //brand新增时打开dialog
    addarticle(){
     this.dialogFormVisible = true
    },
    //展示状态转变
    changestatus(){
       this.adressfrom.showStatus = this.adressfrom.showStatus==true?1:0
       this.adressfrom.factoryStatus = this.adressfrom.factoryStatus==true?1:0
    },
    //新增brand
    adressAdd(){
      this.listLoading = true
     this.changestatus()
      goodsApi.addBrand(this.adressfrom).then(res=> {
        if(res.success) {
          this.$message.success('新增Brand成功')
          this.dialogFormVisible = false
          this.listLoading = false
          this.getList()
        }
      })
    },
    //更新brand
    updateAd(){
       this.listLoading = true
     this.changestatus()
      goodsApi.updateBrand(this.adressfrom).then(res=> {
        if(res.success) {
          this.$message.success('更新Brand成功')
          this.dialogFormVisible = false
          this.listLoading = false
          this.getList()
        }
      })
    },
    //展示状态
    sendStatus(scope) {
      this.listLoading = true
     goodsApi.switchShowStatus({
       id: scope.row.id,
      status: scope.row.showStatus
     }).then(res=> {
       if(res.success){
         this.$message.success('展示状态更新成功')
         this.listLoading = false
          this.getList()
       }else{
         this.$message.error('展示状态更新失败')
       }
     })
    },
    // 删除
    del(row) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        goodsApi.delBrand(row.id).then((res) => {
          if (res.success) {
            // 删除成功以后再刷新 table
            this.getList()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }
        })
      })
    }, 
    handleSizeChange(val) {
      this.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.start = val
      this.getList()
    }
  }
}
</script>
<style lang="scss">
.el-upload-dragger{
  height: 150px;
  width: 150px;
}
  .iconfont{
    font-size: 12px;
    margin-right: 5px;
  }

  .el-dialog {
    margin-top: 0 !important;
    top: 50%;
    transform: translateY(-50%);
  }
</style>

<style scoped lang="scss">
@import '@/styles/myScss';
.article-main {
  .list_img {
    width: 100px;
    height: 100px;
  }
}

.box-card {
  margin: 30px;
}

.card {
margin: 0 29px;
}


</style>
