<template>
<div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>分类管理</span>
  </div>
  <div class="name">乐居分类:</div>

  <div class="box">
  <el-card class="card" v-for="item in imageUrl"
    :key="item.index">
  <div slot="header" class="clearfix">
    <span>{{item.name}}</span>
  </div>
  <el-upload
    class="avatar-uploader"
    action="/lejuAdmin/material/uploadFileOss"
    :headers="Token"
    :on-success="handleAvatarSuccess()">
    <img height="auto" width="100%" v-if="item.icon" :src="item.icon" class="avatar">
</el-upload>
</el-card>
  </div>

   <div class="name">全部分类:</div>
  
     <el-table
    :data="careList"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="name"
      label="菜单名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="icon"
      label="icon"
      sortable
      width="180">
      <template slot-scope="scope">
        <img height="50" width="50" :src="scope.row.icon" alt="">
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="分类名字">
    </el-table-column>
     <el-table-column
      prop="sort"
      label="排序">
    </el-table-column>
     <el-table-column
      prop="showStatus"
      label="显示状态">
      <template slot-scope="scope">
        <div>{{scope.row.showStatus==1?'显示':'不显示'}}</div>
      </template>
    </el-table-column>
     <el-table-column
      prop="navStatus"
      label="导航栏展示">
       <template slot-scope="scope">
        <div>{{scope.row.navStatus==1?'显示':'不显示'}}</div>
      </template>
    </el-table-column>
     <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
     <el-table-column
      prop="createTime"
      label="创建时间">
    </el-table-column>
  </el-table>



</el-card>
</div>
</template>
<script>
import {getToken} from '@/utils/myAuth'
import Apigoods from '@/api/goods/index';
export default {
  data() {
    return {
      imageUrl:[],
      Token:{
        token:{}
      },
      careList:[]
    }
  },
  created(){
    this.Token.token = getToken()
    this.getAllcate()
  },
  methods:{
    //图片上床成功后的回调
    handleAvatarSuccess(res){
     
    },
    //获取所有的分类数据
    getAllcate(){
      Apigoods.getAllCategory().then(res=> {
        res.data.items.forEach(item => {
         item.category.children = item.children
         this.careList.push(item.category)
        });
        this.imageUrl = res.data.items[1].children
        console.log(this.careList)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .box-card {
    margin: 30px;
  }
  .name {
    color: rgba(0,0,0,.85);
    font-weight: 700;
    font-size: 16px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .card {
    width: 24%;
    height: auto;
     text-align: center;
     .clearfix {
       text-align: left !important;
     }
  }
</style>