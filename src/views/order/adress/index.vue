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
        <el-table-column label="#" type="index" width="50" fixed="left" align="center" />
        <el-table-column prop="addressName" label="地址名称" align="center" width="200" />
          <!-- 默认发货地址 -->
        <el-table-column label="默认发货地址" align="center" width="200">
          <template slot-scope="scope">
            <el-switch
              inactive-text="默认发货地址"
              v-model="scope.row.sendStatus"
              :inactive-value="0"
              :active-value="1"
              @change = sendStatus(scope)
            />
          </template>
        </el-table-column>
          <el-table-column
          prop="name"
          label="收货人姓名"
          align="center"
          width="200"
        />
        <el-table-column
          prop="phone"
          label="收货人电话"
          align="center"
          width="200"
        />
        <el-table-column
          prop="editorType"
          label="收货人地址"
          align="center"
          width="200"
        >
        <template slot-scope="scope">
          <div>{{scope.row.province+' '+scope.row.city+' '+scope.row.region}}</div>
          <div>{{scope.row.detailAddress}}</div>
        </template>
         </el-table-column>
            <!-- 默认收货地址 -->
        <el-table-column label="默认收货地址" align="center" width="200">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.receiveStatus"
              :inactive-value="0"
              :active-value="1"
              inactive-text="默认收货地址"
              @change = receiveStatus(scope)
            />
          </template>
        </el-table-column>
          <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
          width="200"
        >
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


  <!-- 点击编辑和新增的dialog -->
      <el-dialog title="地址详情" :visible.sync="dialogFormVisible" width="30%">
  <el-form :model="adressfrom" ref="adressfrom" :rules="rules" :label-position="labelPosition" label-width="100px">
    <el-form-item label="发货地址" prop="addressName">
      <el-input size="small" style="width:300px;" placeholder="发货地址" v-model="adressfrom.addressName"></el-input>
    </el-form-item>
    <el-form-item label="收货人姓名" prop="name" >
      <el-input size="small" placeholder="发货人姓名"  style="width:300px;" v-model="adressfrom.name"></el-input>
    </el-form-item>
    <el-form-item label="收货人手机号" prop="phone" >
      <el-input size="small" placeholder="发货人手机号" style="width:300px;" v-model="adressfrom.phone"></el-input>
    </el-form-item>
    <el-form-item label="邮政编码" prop="postCode" >
      <el-input size="small" placeholder="邮政编码"  style="width:300px;" v-model="adressfrom.postCode"></el-input>
    </el-form-item>
    <el-form-item label="收货地址" prop="selectedOptions" >
        <el-cascader size="small"
        style="width:300px;"
    v-model="selectedOptions"
    :options="options"
    @change="handleChange"></el-cascader>
    </el-form-item>
    <el-form-item label="详情地址"  prop="detailAddress">
      <el-input  style="width:300px;" placeholder="详情地址" size="small" v-model="adressfrom.detailAddress"></el-input>
    </el-form-item>
    <el-form-item >
      <el-row :gutter="20">
        <el-col :span="10">
          <el-switch
          size="small"
            v-model="adressfrom.receiveStatus"
            inactive-text="是否默认收货地址">
         </el-switch>
        </el-col>
        <el-col :span="10">
          <el-switch
          size="small"
          v-model="adressfrom.sendStatus"
          inactive-text="是否默认发货地址">
       </el-switch>
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
import adressApi from '@/api/order/index'
import { regionData, CodeToText,TextToCode } from "element-china-area-data";
export default {
  name: 'Aticle',
  data() {
    return {
      labelPosition:'right',
      listLoading: false, // 地址列表加载动画
      articleList: [] ,// 地址数据数组,
      dialogFormVisible:false,
      adressfrom:{
          addressName:'',
          name:'',
          phone:'',
          postCode:'',
          detailAddress:'',
          sendStatus:false,
          receiveStatus:false,
          province:'',
          city:'',
          region:'',
          cityCode:''
      },
      //判斷是新增还是编辑
      flag:false,
      rules:{
        addressName:[
            { required: true, message: '请输入处理人姓名', trigger: 'blur' }
        ]
      },
      options: regionData,
      selectedOptions: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取地址列表
    getList() {
      this.listLoading = true
      adressApi.addressList().then((res) => {
        if (res.success) {
          this.articleList = res.data.items
          console.log(this.articleList)
        } else {
          this.$message.error('请求失败')
        }
        this.listLoading = false
      })
    },
    // 地址编辑
    edit(item) {
      this.dialogFormVisible = true
      this.flag = true
      adressApi.companyAddress(item.id).then(res=>{
        res.data.address.sendStatus = res.data.address.sendStatus==1?true:false
        res.data.address.receiveStatus = res.data.address.receiveStatus==1?true:false
        this.adressfrom = res.data.address
      })
    },
    //地址新增
    addarticle(){
     this.dialogFormVisible = true
    },
    //发货收货状态转变
    changestatus(){
       this.adressfrom.sendStatus = this.adressfrom.sendStatus==true?1:0
      this.adressfrom.receiveStatus = this.adressfrom.receiveStatus==true?1:0
    },
    //保存新地址
    adressAdd(){
      this.listLoading = true
     this.changestatus()
      adressApi.saveadress(this.adressfrom).then(res=> {
        if(res.success) {
          this.$message.success('新增地址成功')
          this.dialogFormVisible = false
          this.listLoading = false
          this.selectedOptions = []
          this.getList()
          this.$refs.adressfrom.resetFields()
          this.adressfrom.sendStatus = false
          this.adressfrom.receiveStatus = false
        }
      })
    },
    //更新地址
    updateAd(){
       this.listLoading = true
     this.changestatus()
      adressApi.update(this.adressfrom).then(res=> {
        if(res.success) {
          this.$message.success('更新地址成功')
          this.dialogFormVisible = false
          this.listLoading = false
          this.getList()
        }
      })
    },
    //更新发货地址
    sendStatus(scope) {
      this.listLoading = true
     adressApi.setSendOne({
      isShow:scope.row.isShow,
      id:scope.row.id
     }).then(res=> {
       if(res.success){
         this.$message.success('发货地址更新状态成功')
         this.listLoading = false
         this.getList()
       }else{
         this.$message.error('发货地址更新状态失败')
       }
     })
    },
    //更新收货地址
    receiveStatus(scope){
      this.listLoading = true
      adressApi.setReceiveOne({
      isShow:scope.row.isShow,
      id:scope.row.id
     }).then(res=> {
       if(res.success){
          this.listLoading = false
          this.getList()
         this.$message.success('收货地址更新状态成功')
       }else{
         this.$message.error('收货地址更新状态失败')
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
        adressApi.decompanyAddress(row.id).then((res) => {
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
    //地址级联选择器的值
   handleChange() {
     this.adressfrom.province = CodeToText[this.selectedOptions[0]]
     this.adressfrom.city = CodeToText[this.selectedOptions[1]]
     this.adressfrom.region = CodeToText[this.selectedOptions[2]]
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]]+' ';
      }
      this.adressfrom.cityCode = this.getCityCode(loc.trim())
    },
    //将城市换算成代码
    getCityCode(cityText) {
  var codeArray = [];
  if (cityText != "") {
    var cityArray = cityText.trim().split(" ");

    if (cityArray.length == 1) {
      codeArray.push(TextToCode[cityArray[0]].code);
    } else if (cityArray.length == 2) {
      codeArray.push(TextToCode[cityArray[0]].code);
      codeArray.push(TextToCode[cityArray[0]][cityArray[1]].code);
    } else if (cityArray.length == 3) {
      codeArray.push(TextToCode[cityArray[0]].code);
      codeArray.push(TextToCode[cityArray[0]][cityArray[1]].code);
      codeArray.push(
        TextToCode[cityArray[0]][cityArray[1]][cityArray[2]].code
      );
    }
  }
  return codeArray.join(',');
}

  }
}
</script>
<style lang="scss">
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
