<template>
  <div class="article-main">
  
    <el-card shadow="never" class="card">
      <div slot="header">
        <el-button size="small" type="warning" @click="initMenu">初始化菜单</el-button>
        <el-button size="small" type="primary" @click="addMenu">新增菜单</el-button>
      </div>
      <!-- 资源管理 table -->
      <el-table
        v-loading="listLoading"
        :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      >
        <el-table-column prop="title" label="菜单名称" align="left" width="200" />
      
        <el-table-column label="图标" align="center" width="200">
          <template slot-scope="scope">
            <div :class="scope.row.icon"></div>
          </template>
        </el-table-column>
          <el-table-column
          prop="level"
          label="等级"
          align="center"
          width="200"
        />
           <el-table-column
          prop="sort"
          label="排序"
          align="center"
          width="200"
        />
        <el-table-column
          prop="permissionValue"
          label="权限标识"
          align="center"
          width="200"
        />
        <el-table-column
          prop="path"
          label="路由"
          align="center"
          width="200"
        >
         </el-table-column>
        <el-table-column
          prop="component"
          label="组件路径"
          align="center"
          width="200"
        >
         </el-table-column>
        <el-table-column
          prop="status"
          label="是否可用"
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
      </el-table>
    </el-card>

    <!-- 初始化菜单 -->
    <el-dialog title="初始化菜单" :visible.sync="init" width="30%">
       <el-alert
       style="margin-bottom:30px"
    title="请谨慎操作! 初始化菜单会覆盖之前记录!"
    type="warning">
  </el-alert>
  <el-tree :data="tableData" :props="defaultProps" ></el-tree>
  <div slot="footer" class="dialog-footer">
    <el-button size="small" @click="init = false">取 消</el-button>
    <el-button size="small" type="primary" @click="comfirmInit">确 定</el-button>
  </div>
</el-dialog>


    <!-- 新增编辑用户 -->
    <el-dialog title="编辑菜单" :visible.sync="dialogFormVisible" width="50%">
     <el-form label-width="100px">
       <el-form-item label="菜单类型">
          <el-radio-group v-model="radio">
            <el-radio :label="0">顶级目录</el-radio>
            <el-radio :label="1">菜单</el-radio>
            <el-radio :label="2">按钮</el-radio>
          </el-radio-group>
       </el-form-item>
       <div v-show="radio===0">
         <el-form-item label="路由名称">
           <el-input v-model="Permission.name" style="width:200px" size="small" placeholder="前端路由name,唯一"></el-input>
         </el-form-item>
         <el-form-item label="路径">
           <el-input v-model="Permission.path" style="width:200px" size="small" placeholder="前端路由path,忽略父节点路径"></el-input>
         </el-form-item>
         <el-form-item label="组件路径">
           <el-input v-model="Permission.component" style="width:200px" size="small" placeholder="前端路由组件路径,比如@/views/foo/foo.vue"></el-input>
         </el-form-item>
        
           <el-row>
             <el-col :span="12">
               <el-form-item label="排序">
                 <el-input-number v-model="Permission.sort" :min="0"  ></el-input-number>
               </el-form-item>
             </el-col>
             <el-col :span="12">
                <el-form-item label="重定向">
                  <el-input v-model="Permission.redirect" size="small" placeholder="redirect属性"></el-input>
                </el-form-item>
             </el-col>
           </el-row>

          <el-row>
             <el-col :span="12">
               <el-form-item label="是否显示">
                   <el-select v-model="Permission.hidden" placeholder="">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
                         </el-form-item>
                       </el-col>
                       <el-col :span="12">
                          <el-form-item label="是否展开">
                             <el-select v-model="Permission.alwaysShow" placeholder="">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
                          </el-form-item>
             </el-col>
           </el-row>

               <el-form-item label="meta属性">
          <el-row :gutter="20" v-for="item in Meta" :key="item.id" style="display:flex">
               <el-col :span="8"> <el-input v-model="item.key"  size="small" placeholder="比如:title"></el-input></el-col>
                <el-col :span="8"> <el-input v-model="item.value"  size="small" ></el-input></el-col>
               <el-button type="text" @click="addmeta(item.id)" class="el-icon-plus"></el-button>
               <el-button type="text" @click="delmeta(item.id)"  class="el-icon-minus"></el-button>
           </el-row>
          </el-form-item>
       </div>

      <div v-if="radio===1">
        <el-form label-width="100px">
          <el-form-item label="上级菜单">
           <el-cascader
           @change="cascValue"
    :options="tableData"
    :props="{ checkStrictly: true ,children:'children',label:'title' ,value:'id'}"
    clearable></el-cascader>
          </el-form-item>

          <el-form-item label="路由名称">
           <el-input v-model="Permission.name" style="width:200px" size="small" placeholder="前端路由name,唯一"></el-input>
         </el-form-item>
         <el-form-item label="路径">
           <el-input v-model="Permission.path" style="width:200px" size="small" placeholder="前端路由path,忽略父节点路径"></el-input>
         </el-form-item>
         <el-form-item label="组件路径">
           <el-input v-model="Permission.component" style="width:200px" size="small" placeholder="前端路由组件路径,比如@/views/foo/foo.vue"></el-input>
         </el-form-item>
        
        
           <el-row>
             <el-col :span="12">
               <el-form-item label="排序">
                 <el-input-number v-model="Permission.sort" :min="0"  ></el-input-number>
               </el-form-item>
             </el-col>
             <el-col :span="12">
                <el-form-item label="重定向">
                  <el-input v-model="Permission.redirect" size="small" placeholder="redirect属性"></el-input>
                </el-form-item>
             </el-col>
           </el-row>

          <el-row>
             <el-col :span="12">
               <el-form-item label="是否显示">
                   <el-select v-model="Permission.hidden" placeholder="">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
                         </el-form-item>
                       </el-col>
                       <el-col :span="12">
                          <el-form-item label="是否展开">
                             <el-select v-model="Permission.alwaysShow" placeholder="">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
                          </el-form-item>
             </el-col>
           </el-row>
        </el-form>
      </div>


        <div v-if="radio===2">
          <el-form label-width="100px">
            <el-form-item label="上级菜单">
              <el-cascader
           @change="cascValue"
    :options="tableData"
    :props="{ checkStrictly: true ,children:'children',label:'title' ,value:'id'}"
    clearable></el-cascader>
          </el-form-item>
            <el-form-item label="按钮名称">
           <el-input v-model="Permission.name" style="width:200px" size="small" placeholder="前端路由name,唯一"></el-input>
         </el-form-item>
            <el-form-item label="排序">
                 <el-input-number v-model="Permission.sort" style="width:200px"  :min="0"  ></el-input-number>
               </el-form-item>

                <el-form-item label="权限识别">
                <el-input
                style="width:400px"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="Permission.permissionValue">
                </el-input>
               </el-form-item>
          </el-form>
          
        </div>


     </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="comfirm">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>

import Apilimits from '@/api/limits/index'
import { v4 as uuidv4 } from 'uuid';
export default {
  
  data() {
    return {
      Permission:{
          name:'',
          path:'',
          sort:'',
          meta:{},
          component:'',
          permissionValue:'',
          type:1,
          hidden:'',
          alwaysShow:'',
          pid:''
      },
      Meta:[
        {
          id:uuidv4(),
          key:'title',
          value:'未命名'
        }
      ],
      defaultProps: {
          children: 'children',
          label: 'title'
        },
      dialogFormVisible:false,
      init:false,
      radio:0,
      listLoading: false, // 文章列表加载动画
      tableData: [] ,// 数据数组,
    }
  },
  created() {
    this.getList()
  },
  methods: {
    cascValue(value){
        this.Permission.pid = value[value.length-1]
    },
    delmeta(){
      this.Meta.splice(this.Meta.length-1,1)
    },
    addmeta(id){
      var obj = {
         id:uuidv4(),
         key:'',
         value:''
      }
      this.Meta.push(obj)
    },
    //初始化菜单
    initMenu(){
      this.init = true
    },
    //添加菜单
    addMenu(){
      this.dialogFormVisible = true
    },
    //初始化菜单
    comfirmInit(){
      Apilimits.saveInitMenus(this.tableData).then(res=>{
          if(res.success){
          this.$message.success('初始化成功')
          this.getList()
          this.init = false
        }
      })
    },
    //获得菜单数据
    getList(){
      Apilimits.findAllPermissions().then(res=>{
        this.tableData =res.data.menus
      })
    },
    //提交
    comfirm(){
      this.Meta.forEach(item=>{
        this.Permission.meta[item.key] = item.value
      })
      this.Permission.meta = JSON.stringify(this.Permission.meta)
      this.Permission.type = this.radio===2?2:1
      this.Permission.hidden = this.Permission.hidden==1?true:false
      this.Permission.alwaysShow = this.Permission.alwaysShow==1?true:false
    Apilimits.save(this.Permission).then(res=>{
      if(res.success){
        this.$message.success('新增菜单成功')
        this.dialogFormVisible = false
        this.getList()
      }
    })
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

.card {
  margin: 30px;
}



</style>
