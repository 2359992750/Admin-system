<template>
<div>
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>新增文章</span>
  </div>

      <!-- 表单内容 -->
   <el-form :model="article" :rules="rules" ref="article" label-width="100px" class="demo-article">
  <div class="form_one">
    <el-form-item label="作者" prop="author">
    <el-input size="small"  v-model="article.author " placeholder="作者姓名"></el-input>
  </el-form-item>
  <el-form-item label="标题" prop="title">
    <el-input size="small" v-model="article.title" placeholder="文章标题"></el-input>
      </el-form-item>
      <el-form-item>
          <el-switch
        style="color:#606266"
          v-model="article.isShow "
          inactive-text="是否显示">
        </el-switch>
      </el-form-item>

  </div>
  <el-form-item label="摘要">
    <el-input style="width:40%" type="textarea" v-model="article.summary " placeholder="摘要"></el-input>
  </el-form-item>
<!-- 点击上传图片 -->
<el-form-item label="封面图片">
<el-upload
  ref="upload"
  class="upload-demo"
  :headers="Token"
  action="/lejuAdmin/material/uploadFileOssSave"
  :on-success="success"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传素材</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  <img v-if="article.coverImg" height="100" width="100" :src="article.coverImg" alt="">
</el-form-item>
<el-form-item label="切换富文本类型">
     <el-radio-group v-model="article.editorType">
                <el-radio :label="0">富文本</el-radio>
                <el-radio :label="1">markdown</el-radio>
              </el-radio-group>
              <span
                style="margin-left: 120px; color: red"
              >!切换编辑类型的时候会丢失已输入文本内容</span>
            </el-col>
</el-form-item>
<!-- 根据editorType的值来展示编辑器的类型 -->
  <el-form-item>
       <div v-if="article.editorType === 0">
                <el-upload
                  ref="uploadTi"
                  class="upload-demo"
                  action="/lejuAdmin/material/uploadFileOssSave"
                  :headers="Token"
                   multiple
                  :on-success="addTiImg"
                >
                  <el-button
                    size="mini"
                    type="primary"
                  >插入富文本图片</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div> -->
                </el-upload>
                <TEditor ref="Ti" />
              </div>
      <div  v-if="article.editorType===1">
               <MdEditor ref="Md"/>
      </div>
  </el-form-item>

  <el-form-item style="width:100%;">
    <el-button v-if="!id" type="primary" @click="submitForm('article')">立即新增</el-button>
    <el-button v-if="id" type="primary" @click="submitForm('article')">立即修改</el-button>
  </el-form-item>
</el-form>
    </el-card>
</div>
</template>
<script>
import {getToken} from '@/utils/myAuth'
import Apiarticle  from '@/api/content/article'
import TEditor from '@/components/Tinymce/index'
import MdEditor from "@/components/MarkdownEditor"
import article from '@/api/content/article'
  export default {
    data() {
      return {
        //商品id
        id:null,
        //根据id获取的文章明细
        article: {
          author: '',
          title: '',
          isShow:false,
          summary: '',
          editorType:0,
          content1:'',
          coverImg:''
        },
        //上传成功后的图片预览
    
        //token
        Token:{
          token:''
        },
        //图片列表
        fileList:[],
        rules: {
          author: [
            { required: true, message: '请输入作者名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         
        }
      };
    },
    created() {
      this.Token.token = getToken()
       this.id = this.$route.query.id
      if(this.id) {
        this.getarticleInfo()
      }
    },
    methods: {
      //当编辑页面时,获取文章明细
      getarticleInfo(){
        Apiarticle.productArticle(this.id).then(res=> {
          if(res.data.productArticle.isShow===0){
            res.data.productArticle.isShow=false
          }else {
            res.data.productArticle.isShow=true
          }
            this.article = res.data.productArticle
         this.$nextTick(()=> {
            if(res.data.productArticle.editorType===0){
              this.$refs.Ti.setContent(res.data.productArticle.content1)
            }else {
              this.$refs.Md.setValue(res.data.productArticle.content1)
            }
         })
        })
      },
      submitForm(formName) {
        if(this.article.isShow){
          this.article.isShow = 1
        }else {
          this.article.isShow = 0
        }
        if(this.article.editorType==0){
          this.article.content1 = this.$refs.Ti.getContent()
        }else {
           this.article.content1 = this.$refs.Md.getValue()
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
          if(this.id){
            Apiarticle.updateArticle(this.article).then(res=> {
             if(res.success) {
               this.$message.success('修改成功')
                this.$router.push('/content/article')
              }
            })
          }else {
              Apiarticle.addArticle(this.article).then(res=> {
              if(res.success) {
                 this.$message.success('新增文章成功')
                this.$router.push('/content/article')
              }
            })
          }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //上传成功后移除图片
      success(response, file, fileList) {
        this.article.coverImg = response.data.material.ossUrl
        this.$refs.upload.clearFiles();
      },
      addTiImg(response){
          this.$refs.uploadTi.clearFiles();
          this.$refs.Ti.imageSuccessCBK(response.data.material.ossUrl)
      },
      //选中的编辑器类型
      changestatus(val) {
        console.log(val)
      }
    },
    components: {
    TEditor, // 富文本框组件
    MdEditor // md编辑器
  },
  }
</script>
<style lang="scss">
  .el-switch__label.is-active {
    color: #303133;
    font-weight: 600;
  }
  .el-switch__label{
    font-weight: 600;
  }
  .el-form-item__label {
    padding: 0;
  }
  .el-input__inner,.el-textarea__inner,.el-upload,.el-radio-group {
    margin-left: 12px;
  }

</style>
<style lang="scss" scoped>
.box-card {
  margin: 30px;
}


.form_one {
  display: flex;
}

.group {
 display: flex;
    align-items: center;
    height: 40px;
}

</style>