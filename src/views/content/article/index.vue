<template>
  <div class="article-main">
    <!-- 头部模糊查询 -->
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>条件查询</span>
  </div>
  <el-form ref="formInline" :inline="true" :model="formInline" class="demo-form-inline" style="margin-left:100px;">
  <el-form-item label="作者">
    <el-input size="small" v-model="formInline.author" placeholder="作者"></el-input>
  </el-form-item>
 <el-form-item label="标题" style="margin:0 100px;">
    <el-input size="small" v-model="formInline.title" placeholder="标题"></el-input>
  </el-form-item>
  <el-form-item label="编辑类型">
     <el-select v-model="formInline.editorType " placeholder="请选择活动区域">
      <el-option label="富文本" value="0"></el-option>
      <el-option label="markdown" value="1"></el-option>
    </el-select>
  </el-form-item>
  <div style="width:85%;text-align:right"> 
    <el-button size="small"  @click="onReset('formInline')">重置</el-button>
    <el-button size="small" type="primary" @click="onSubmit">搜索</el-button>
  </div>
</el-form>
</el-card>

    <el-card shadow="never" class="card">
      <div slot="header">
        <el-button type="primary" @click="addarticle">新增</el-button>
      </div>
      <!-- 文章列表 table -->
      <el-table
        v-loading="listLoading"
        :data="articleList"
        border
        style="width: 100%"
      >
        <el-table-column label="#" type="index" width="50" fixed="left" align="center" />
        <el-table-column prop="title" label="文章标题" align="center" width="200" />
        <!-- 显示文章图片 -->
        <el-table-column label="展示图片" align="center" width="200">
          <template slot-scope="scope">
            <img  class="list_img" :src="scope.row.coverImg" alt="">
          </template>
        </el-table-column>
          <el-table-column
          prop="createTime"
          label="添加时间"
          align="center"
          width="200"
        />
        <el-table-column
          prop="author"
          label="文章作者"
          align="center"
          width="200"
        />
        <!-- 是否展示 -->
        <el-table-column label="文章是否展示" align="center" width="200">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isShow"
              :inactive-value="0"
              :active-value="1"
              @change = changestatus(scope)
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="editorType"
          label="内容"
          align="center"
          width="200"
        >
        <template slot-scope="scope">
            <el-button type="primary" plain>{{scope.row.editorType==0?"富文本框":"markdown"}}</el-button>
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
        :current-page="page.currentPage"
        :page-sizes="page.pageSizes"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
import articleApi from '@/api/content/article'
// 引入mixin
import mixin from '@/mixins'
export default {
  name: 'Aticle',
  mixins: [mixin],
  data() {
    return {
      listLoading: false, // 文章列表加载动画
      articleList: [] ,// 文章数据数组,
      formInline:{
        author:'',
        title:'',
        editorType :''
      }
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    // 获取文章列表api
    getList() {
      this.listLoading = true
      articleApi.getArticleList(this.page.currentPage, this.page.size, {}).then((res) => {
        if (res.success) {
          this.articleList = res.data.rows
          // 声明多少条数据
          this.page.total = res.data.total
        } else {
          this.$message.error('请求失败')
        }
        this.listLoading = false
      })
    },
    // 编辑
    edit(row) {
      this.$router.push({path:'/content/addarticle',query:{
        id:row.id
      }})
    },
    //新增文章
    addarticle(){
      this.$router.push({name:'Addarticle'})
    },
    //文章搜索
    onSubmit(){
      this.page.currentPage = 1
      articleApi.getArticleList(
      this.page.currentPage,
      this.page.size,
      this.formInline
      ).then(res=> {
        this.articleList = res.data.rows
      })
    },
    //文章是否显示
    changestatus(scope) {
     articleApi.changeShowStatus({
      isShow:scope.row.isShow,
      id:scope.row.id
     }).then(res=> {
       if(res.success){
         this.$message.success('更新状态成功')
       }else{
         this.$message.error('更新状态失败')
       }
     })
    },
    //重置
    onReset(formName){
       this.$refs[formName].resetFields();
    },
    // 删除
    del(row) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        articleApi.delArticle(row.id).then((res) => {
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
    // size改变的时候触发的钩子函数
    handleSizeChange(val) {
      this.page.size = val
      this.page.currentPage = 1
      this.getList()
    },
    // 点击页数的时候触发的钩子函数
    handleCurrentChange(val) {
      this.page.currentPage = val
      this.getList()
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
