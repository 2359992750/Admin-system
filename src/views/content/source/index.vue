<template>
<div>
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-upload
    ref="upload"
  class="upload-demo"
  action="/lejuAdmin/material/uploadFileOssSave"
    :headers="Token"
    :on-success="success"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传素材</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </div>
 
  <div class="iamgeList">
    <el-card style="width:19%;margin-top:30px;" v-for="item in imageList" :key="item.id">
     <div slot="header" class="clearfix">
    <span>创建时间:{{item.createTime}}</span>
  </div>
      <img width="80%"  :src="item.ossUrl" class="image">
       <el-button type="danger" @click="del(item.id)" style="padding: 6px 30px;">删除</el-button>
    </el-card>
    <div style="width:19%;margin-top:30px;"></div>
    <div style="width:19%;margin-top:30px;"></div>
    <div style="width:19%;margin-top:30px;"></div>
  </div>
</el-card>
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="start"
      :page-sizes="limits"
      :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</div>
</template>
<script>
import {getToken} from '@/utils/myAuth'
import Apisource from '@/api/content/source'
export default {
  data() {
    return {
      fileList:[],
 //token
        Token:{
          token:''
        },
        start:1,
        limits:[5, 10, 15, 20],
        limit:5,
        total:null,
        imageList:[]
    }
  },
  created() {
     this.Token.token = getToken()
      this.getiamgeList()
  },
  methods:{
    getiamgeList(){
      Apisource.findMaterialByPage(this.start,this.limit).then(res=> {
        this.total = res.data.total
        this.imageList = res.data.rows
      })
    },
    success(rep){
      this.$refs.upload.clearFiles()
    },
    handleSizeChange(val){
      this.limit = val
      this.getiamgeList()
    },
    handleCurrentChange(val) {
      this.start = val
      this.getiamgeList()
    },
    del(id){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Apisource.delMaterial(id).then(res=> {
        if(res.success){
          this.$message.success('删除成功')
          // 删除最后一页数据后重置start
          let totalPage = Math.ceil((this.total-1)/(this.limit))
          let currentPage = this.start>totalPage?totalPage:this.start
          this.start = currentPage<1?1:currentPage
          this.getiamgeList()
        }else {
          this.$message.error('删除失败')
        }
      })
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     
    }
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  margin: 30px;
}

.iamgeList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
}

</style>