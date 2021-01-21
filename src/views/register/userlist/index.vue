<template>
<div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>注册用户列表</span>
  </div>

      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    type="index"
    label="序号"
    ></el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="icon"
      label="头像"
      width="180">
      <template slot-scope="scope">
        <img width="80" height="80" style="border-radius: 50%;" :src="scope.row.icon" alt="">
      </template>
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称">
    </el-table-column>
     <el-table-column
      prop="realname"
      label="真实姓名">
    </el-table-column>
     <el-table-column
      prop="sex"
      label="性别">
    </el-table-column>
     <el-table-column
      prop="phone"
      label="电话">
    </el-table-column>
     <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
     <el-table-column
      prop="birthday"
      label="生日">
    </el-table-column>
     <el-table-column
      prop="createTime"
      label="注册时间">
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
import Apiregister from '@/api/register/index'
export default {
  data() {
    return {
      tableData:[],
      start:1,
      limit:10,
      limits:[10,20,30],
      total:null
    }
  },
  created() {
    this.getuser()
  },
  methods: {
    getuser(){
      Apiregister.findMembersByPage(this.start,this.limit).then(res=>{
        this.tableData = res.data.rows
        this.total = res.data.total
      })
    },
    handleSizeChange(val){
      this.limit = val
      this.getuser()
    },
    handleCurrentChange(val){
      this.start = val
      this.getuser()
    }
  },
}
</script>
<style lang="scss" scoped>
  .box-card{
    margin: 30px;
  }
</style>