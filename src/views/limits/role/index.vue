<template>
<div>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
      <el-button size="small" @click="newAdd" type="primary">新增</el-button>
  </div>

      <el-table
    :data="roleData"
    border
    style="width: 100%">
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleCode"
      label="角色编码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="remark"
      label="备注">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="添加时间">
    </el-table-column>
    <el-table-column label="操作" align="center" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button
            class="edit"
            type="success"
              size="mini"
              @click="editrole(scope.row.id)"
            >编辑</el-button>
            <el-button
              size="mini"
              @click="del(scope.row.id)"
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



  <!-- 新增角色 -->
  <el-dialog title="编辑角色" :visible.sync="dialogFormVisible" width="20%">
  <el-form  :v-loading="loading" ref="formName" :model="addroleForm" label-width="80px" >
      <el-form-item
    label="角色名称"
    prop="roleName"
    :rules="[
      { required: true, message: '角色名称不能为空'}
    ]"
  >
    <el-input v-model="addroleForm.roleName" ></el-input>
  </el-form-item>
   <el-form-item
    label="角色编码"
    prop="roleCode">
    <el-input v-model="addroleForm.roleCode" ></el-input>
  </el-form-item>
  <el-form-item label="角色描述">
      <el-input
  type="textarea"
  :rows="2"
  v-model="addroleForm.remark">
</el-input>
  </el-form-item>
  <el-form-item label="选择菜单">
    <div>
       <el-checkbox v-model="expandcheck" @change="unFoldAll">展开/关闭</el-checkbox>
        <el-checkbox v-model="allchecked" @change="handleCheckAllChange">全选/取消权限</el-checkbox>
    </div>
    <el-tree
    @check="checkstasus"
  :default-expand-all="expandcheck"
  :data="treeData"
  show-checkbox
  node-key="id"
  ref="treeData"
  :props="defaultProps">
</el-tree>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
    <el-button size="small" v-if="!roleId" type="primary" @click="addUser">确 定</el-button>
    <el-button size="small" v-else type="primary" @click="editUser">确 定</el-button>
  </div>
</el-dialog>



</div>
</template>
<script>
import Apilimits from '@/api/limits/index'
export default {
  data() {
    return {
      loading:false,
      roleId:'',
      addroleForm:{
        roleName:'',
        roleCode:'',
        remark:'',
        permissionIds:[]
      },
      dialogFormVisible:false,
      roleData:[],
      start:1,
      limit:10,
      total:null,
      limits:[10, 20, 30],
      treeData:[],
      defaultProps:{
        children: 'children',
        label: 'title'
      },
      expandcheck:false,
      allchecked:false,
      alllimit:[]
    }
  },
  watch:{
    dialogFormVisible(){
      if(this.dialogFormVisible){
        this.$nextTick(()=>{
          this.$refs.formName.resetFields()
          this.$refs.treeData.setCheckedKeys([]) 
          this.allchecked = false
        })
      }
    }
  },
  methods: {
    //目前树形结构选中的对象
    checkstasus(item,status){
      console.log(status)
      this.addroleForm.permissionIds = status.checkedKeys
    },
    // 全部展开/关闭
    unFoldAll(val) {
      this.expandcheck = val
       this.tree(this.treeData)
       
    },
    //递归树的原始数据
    tree(arr){
    if(this.expandcheck){
      for (let i = 0;i<arr.length;i++) {
        if(arr[i].children){
         this.$refs.treeData.store.nodesMap[arr[i].id].expanded = true
         this.tree(arr[i].children)
        }else {
         this.$refs.treeData.store.nodesMap[arr[i].id].expanded = true
        }
      }
    }else{
      for (let i = 0;i<arr.length;i++) {
        if(arr[i].children){
          this.$refs.treeData.store.nodesMap[arr[i].id].expanded = false
          this.tree(arr[i].children)
        }else {
          this.$refs.treeData.store.nodesMap[arr[i].id].expanded = false
        }
      }
    }
    },
    //遍历全部选中的节点id
    treeCheck(arr){
      for (let i = 0 ;i<arr.length ;i++) {
        if(arr[i].children){
          this.addroleForm.permissionIds.push(arr[i].id)
          this.treeCheck(arr[i].children)
        }else {
           this.addroleForm.permissionIds.push(arr[i].id)
        }
      }
    },
    //获取父级菜单
     allLimits(arr){
      for (let i = 0 ;i<arr.length ;i++) {
       this.alllimit.push(arr[i])
      }
    },
    //全部选中
      handleCheckAllChange(val) {
        this.allchecked = val
    if (this.allchecked) {
        this.$refs.treeData.setCheckedNodes(this.treeData);
        this.treeCheck(this.treeData)
    } else {
        this.$refs.treeData.setCheckedKeys([]);
        this.addroleForm.permissionIds = []
    }
    },
    //获取所有菜单权限
    getAllmenu(){
        Apilimits.findAllPermissions().then(res=>{
        this.treeData = res.data.menus
        this.allLimits(res.data.menus)
      })
    },
    handleSizeChange(val){
      this.limit = val
      this.getAllrole()
    },
    handleCurrentChange(val){
      this.start = val
      this.getAllrole()
    },
    //新增
      newAdd(){
        this.dialogFormVisible = true
      },
    //角色列表获取
    getAllrole(){
      Apilimits.findRolesByPage(this.start,this.limit).then(res=>{
        this.roleData = res.data.rows
        this.total = res.data.total
      })
    },
    //角色编辑
    editrole(id){
      this.loading = true
      this.roleId = id
      this.dialogFormVisible = true
      Apilimits.role(id).then(res=>{
        if(res.success){
          console.log(res)
          //默认选中的树的数据
          let that = this
          if((res.data.role.permissionIds) instanceof Object){

            var flag = 0
            this.alllimit.forEach(item=>{
              if(res.data.role.permissionIds.includes(item.id)){
                flag++
              }
            })
            if(flag==this.alllimit.length){
              this.allchecked = true
            }
            this.$nextTick(()=>{
               res.data.role.permissionIds.forEach(value => {
               that.$refs.treeData.setChecked(value, true, false);
              });
            })
          }else{
            res.data.role.permissionIds = []
          }
          this.addroleForm = res.data.role
          this.loading = false
        }
      })
    },
    //角色删除
    del(id){
      Apilimits.removeRole(id).then(res=>{
        if(res.success){
          this.$message.success('角色删除成功')
          this.getAllrole()
        }
      })
    },
    //确定增加角色
    addUser(){
      console.log('增加角色')
      Apilimits.saveRolePermissions(this.addroleForm).then(res=>{
        if(res.success){
          this.$message.success('新增角色成功')
          this.dialogFormVisible = false
          this.getAllrole()
        }
      })
    },
    //确定修改角色
    editUser(){
      console.log(this.addroleForm)
      Apilimits.updateRolePermissions(this.addroleForm).then(res=>{
        console.log(res)
        if(res.success){
          this.$message.success('修改成功')
          this.dialogFormVisible = false
          this.getAllrole()
        }
      })
    }
  },
  created(){
    this.getAllrole()
    this.getAllmenu()
  },
}
</script>
<style lang="scss" scoped>
.box-card{
  margin: 30px;
}
</style>