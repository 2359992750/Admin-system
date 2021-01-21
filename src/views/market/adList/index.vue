<template>
<div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-button size="small" type="primary" @click="dialogTableVisible = true">新增</el-button>
  </div>


     <el-table
        v-loading="listLoading"
        :data="adlist"
        border
        style="width: 100%"
      >
        <el-table-column label="序号" type="index" width="50" fixed="left" align="center" />
        <!-- 显示文章图片 -->
        <el-table-column label="广告图片" align="center" width="200">
          <template slot-scope="scope">
            <img height="100"  width="100" class="list_img" :src="scope.row.pic" alt="">
          </template>
        </el-table-column>
          <el-table-column
          prop="createTime"
          label="时间"
          align="center"
          width="250"
        >
        <template slot-scope="scope">
          <div>开始时间{{scope.row.startTime}}</div>
          <div>结束时间{{scope.row.endTime}}</div>
        </template>
          </el-table-column>
        <el-table-column
          prop="name"
          label="广告名称"
          align="center"
          width="200"
        />
        <!-- 是否展示 -->
        <el-table-column label="点击数" prop="clickCount" align="center" width="200"/>
        <el-table-column
          prop="orderCount"
          label="下单数"
          align="center"
          width="200"
        />
        <el-table-column
          prop="orderCount"
          label="轮播位置"
          align="center"
          width="200"
        >
        <template slot-scope="scope">
          <div>{{scope.row.type==0?'app首页轮播':'其他'}}</div>
        </template>
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接地址"
          align="center"
          width="200"
        />
        <el-table-column
          prop="note"
          label="备注"
          align="center"
          width="200"
        />
         <el-table-column
          prop="orderCount"
          label="上下线状态"
          align="center"
          width="200"
        >
        <template slot-scope="scope">
          <div>{{scope.row.status==1?'上线':'下线'}}</div>
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
</el-card>

<!-- 点击新增出现弹出框 -->
<el-dialog title="广告详情" :visible.sync="dialogTableVisible">
  <el-form ref="adInfo" :model="adInfo" :rules="rules" >
    <el-row :gutter="100">
      <el-col :span="11">
        <el-form-item label="广告名称" prop="name">
           <el-input size="small" style="width:200px" v-model="adInfo.name" placeholder="广告名称"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="备注">
            <el-input  size="small" style="width:200px" v-model="adInfo.note" placeholder="备注"></el-input>
        </el-form-item>
      </el-col>
    </el-row>


     <el-row :gutter="100">
      <el-col :span="11">
        <el-form-item label="排序">
           <el-input size="small" style="width:200px" v-model="adInfo.sort" placeholder="排序"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="产品数量">
            <el-input size="small" style="width:200px" v-model="adInfo.productCount" placeholder="产品数量"></el-input>
        </el-form-item>
      </el-col>
    </el-row>


     <el-row :gutter="100">
      <el-col :span="11">
        <el-form-item label="链接">
           <el-input size="small" style="width:200px" v-model="adInfo.url" placeholder="链接"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="首页轮播位置">
             <el-select  v-model="adInfo.type" placeholder="首页轮播位置">
      <el-option label="app首页轮播 " value="0"></el-option>
      <el-option label="其他" value="1"></el-option>
    </el-select>
        </el-form-item>
      </el-col>
    </el-row>


     <el-row :gutter="100">
      <el-col :span="11">
        <el-form-item label="开始时间" >
            <el-date-picker
      v-model="adInfo.startTime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="结束时间">
             <el-date-picker
      v-model="adInfo.endTime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>


       <el-row :gutter="100">
      <el-col :span="11">
        <el-form-item label="上下线状态" >
         <el-switch v-model="adInfo.status"/>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="图片">
           <el-upload
  class="upload"
  ref="upload"
  drag
  action="/lejuAdmin/material/uploadFileOss"
  :headers="Token"
  :on-success="success"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
        </el-form-item>
      </el-col>
    </el-row>


  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogTableVisible = false">取 消</el-button>
    <el-button v-if="!editAd" type="primary" @click="addAd('adInfo')">确 定</el-button>
    <el-button v-if="editAd" type="primary" @click="update('adInfo')">确定更新广告</el-button>
  </div>
</el-dialog>

</div>
</template>
<script>
import Apiadlist from '@/api/market/adList'
import {getToken}  from '@/utils/myAuth'
export default {
  data() {
    return {
      //要更新的广告信息
      editAd:null,
      listLoading:false,
      adlist:[],
      dialogTableVisible:false,
      adInfo:{
        name:'',
        note:'',
        sort:'',
        productCount:'',
        url:'',
        type:'',
        startTime:'',
        endTime:'',
        status:false,
        pic:''
      },
      Token:{
        token:''
      },
    rules:{
      name:[
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ]
    }
    }
  },
  created(){
    this.Token.token = getToken()
    this.getadList()
  },
  methods:{
    //转换日期格式
      rTime(date) {
    var json_date = new Date(date).toJSON();
    return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
},
    //新增广告
    addAd(adInfo){
     this.listLoading = true
       this.$refs[adInfo].validate((valid) => {
          if (valid) {
             this.adInfo.startTime = this.rTime( this.adInfo.startTime)
             this.adInfo.endTime = this.rTime( this.adInfo.endTime)
             this.adInfo.status=this.adInfo.status==true?1:0
            Apiadlist.addAds(this.adInfo).then(res=> {
           if(res.success){
             this.$message.success('新增广告成功')
             this.dialogTableVisible=false
             this.getadList()
              this.listLoading = false
           }
      })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    //更新广告
    update(adInfo){
         this.listLoading = true
       this.$refs[adInfo].validate((valid) => {
          if (valid) {
             this.adInfo.startTime = this.rTime( this.adInfo.startTime)
             this.adInfo.endTime = this.rTime( this.adInfo.endTime)
             this.adInfo.status=this.adInfo.status==true?1:0
            Apiadlist.updateAds(this.adInfo).then(res=> {
           if(res.success){
             this.$message.success('更新广告成功')
             this.dialogTableVisible=false
             this.getadList()
              this.listLoading = false
           }
      })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    //获取广告列表
    getadList(){
       this.listLoading = true
      Apiadlist.adlist().then(res=> {
         this.listLoading = false
        this.adlist = res.data.items
      })
    },
    //删除广告
    del(item){
       this.listLoading = true
      Apiadlist.delAds(item.id).then(res=> {
        if(res.success){
          this.$message.success('删除广告成功')
          this.getadList()
           this.listLoading = false
        }
      })
    },
    //编辑广告
    edit(item){
      this.editAd = item
      this.adInfo = this.editAd
      this.dialogTableVisible = true
    },
    //上传图片成功后
    success(res){
      this.adInfo.pic = res.data.fileUrl
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
<style lang="scss">
  .iconfont{
    font-size: 11px;
    margin-right: 5px;
  }
  .el-table {
    // height: calc(100vh - 220px);
    overflow-y: scroll;
  }
</style>
<style lang="scss" scoped>
.box-card {
  margin: 30px;
}
</style>