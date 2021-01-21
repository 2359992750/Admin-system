<template>
  <div class="article-main">
    <!-- 头部模糊查询 -->
    <el-card class="box-card">
  <el-form ref="formInline" :inline="true" :model="formInline" class="demo-form-inline" style="margin-left:100px;">
  <el-form-item label="昵称">
    <el-input size="small" v-model="formInline.nickName" placeholder="昵称模糊搜索"></el-input>
  </el-form-item>
 <el-form-item label="用户名" style="margin:0 100px;">
    <el-input size="small" v-model="formInline.username" placeholder="用户名模糊搜索"></el-input>
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
        <el-table-column prop="username" label="用户名" align="center" width="200" />
          <el-table-column
          prop="nick_name"
          label="昵称"
          align="center"
          width="200"
        />
        <!-- 显示文章图片 -->
        <el-table-column label="头像" align="center" width="200">
          <template slot-scope="scope">
            <img  class="list_img" :src="scope.row.salt" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="roles"
          label="角色"
          align="center"
          width="200"
        />
        <el-table-column
          prop="create_time"
          label="添加时间"
          align="center"
          width="200"
        >
         </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button
            class="edit"
            type="success"
              size="mini"
              @click="edit(scope.row)"
            >编辑</el-button>
            <el-button
              type="danger"
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


    <!-- 新增编辑用户 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible" width="20%">
  <el-form :model="editform" label-width="80px">
      <el-form-item
    label="用户名"
    prop="username"
    :rules="[
      { required: true, message: '用户名不能为空'}
    ]"
  >
    <el-input  v-model.number="editform.username" autocomplete="off"></el-input>
  </el-form-item>
   <el-form-item
    label="用户昵称"
    prop="nickName"
    :rules="[
      { required: true, message: '用户昵称不能为空'}
    ]"
  >
    <el-input  v-model.number="editform.nickName" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" v-if="!userId">
    <el-input   v-model.number="editform.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="用户头像">
    <el-upload
  class="avatar-uploader"
  action="/lejuAdmin/material/uploadFileOss"
  :show-file-list="false"
  :headers="Token"
  :on-success="handleAvatarSuccess">
  <img height="50" width="50" v-if="editform.salt" :src="editform.salt" class="avatar">
  <i v-else class="el-icon-user"></i>
</el-upload>
  </el-form-item>
   <el-form-item label="选择角色" prop="roleIds"  :rules="[
      { required: true, message: '必须选择角色'}
    ]">
    <el-select v-model="editform.roleIds" placeholder="请选择">
      <el-option v-for="item in roleList"  :key="item.id" :label="item.roleName" :value="item.id"></el-option>
    </el-select>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
    <el-button size="small" v-if="!userId" type="primary" @click="addUser">确 定</el-button>
    <el-button size="small" v-else type="primary" @click="editUser">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import {getToken} from '@/utils/myAuth'
import Apilimits from '@/api/limits/index'
// 引入mixin
import mixin from '@/mixins'
export default {
  name: 'Aticle',
  mixins: [mixin],
  data() {
    return {
      Token:{
        token:''
      },
      dialogFormVisible:false,
      editform:{
        nickName:'',
        password:'',
        salt:'',
        roleIds:'',
        username:'',
        roles:''
      },
      listLoading: false, // 文章列表加载动画
      articleList: [] ,// 文章数据数组,
      formInline:{
        nickName:'',
        username:'',
      },
      userId:'',
      roleList:[]
    }
  },
  created() {
    this.getList()
    this.getAllRole()
    this.Token.token = getToken()
  },
  methods: {
    //添加用户
    addUser(){
      this.roleList.forEach(item=>{
        if(item.id===this.editform.roleIds){
          this.editform.roles = item.roleName
        }
      })
        this.editform.roleIds = [this.editform.roleIds]
      Apilimits.saveUserRoles(this.editform).then(res=>{
        if(res.success){
          this.$message.success('添加用户成功')
          this.getList()
          this.dialogFormVisible = false
        }
      })
    },
    //编辑用户
    editUser(){
      Apilimits.updateUserRoles(this.editform).then(res=>{
        if(res.success){
          this.$message.success('更新成功')
          this.getList()
        }
      })
    },
    //头像上传后的回调函数
    handleAvatarSuccess(res){
      this.editform.salt = res.data.fileUrl
    },
    //获取所有角色列表
    getAllRole(){
      Apilimits.findAllRoles().then(res=>{
        this.roleList = res.data.items
      })
    },
    // 获取用户列表
    getList() {
      this.listLoading = true
      Apilimits.findUsersByPage(this.page.currentPage, this.page.size, {}).then((res) => {
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
     this.dialogFormVisible = true
     this.userId = row.id
     Apilimits.user(this.userId).then(res=>{
       this.roleList.forEach(item=> {
         if(item.id=== res.data.user.roleIds[0]){
            res.data.user.roleIds = item.roleName   
         }
       })
       
       this.editform = res.data.user
       console.log(this.editform)
     })
    },
    //新增用户
    addarticle(){
      this.dialogFormVisible = true
    },
    //用户搜索
    onSubmit(){
      this.page.currentPage = 1
      Apilimits.findUsersByPage(
      this.page.currentPage,
      this.page.size,
      this.formInline
      ).then(res=> {
        console.log(res)
        this.articleList = res.data.rows
      })
    },
    //重置
    onReset(formName){
       this.$refs[formName].resetFields();
    },
    // 删除
    del(row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        Apilimits.removeUser(row.id).then((res) => {
          if (res.success) {
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
.el-upload--text{
      box-sizing: border-box;
    text-align: center;
    color: #fff;
    background: #C0C4CC;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
}
.el-icon-user {
  font-size: 18px;
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
