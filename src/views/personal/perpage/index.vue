<template>
<div>
  <div class="perpage">
    <div class="box-card">
      <div class="image">
        <img height="98" width="98" :src="userInfo.icon" alt="">
      </div>
      <span style="color: #303133;font-size: 20px;">{{userInfo.nickname}}</span>

      <div class="dec">
        <div><span class="el-icon-collection-tag"></span><span>交互专家</span></div>
        <div><span class="el-icon-s-custom"></span><span>不凡学院－某某某事业群－某某平台部－某某技术部－UED</span></div>
        <div><span class="el-icon-location-outline"></span><span>河南省 郑州市 金水区 绿地新都会</span></div>
      </div>

      <div class="tag">
        <div style="font-size: 16px;margin-bottom:6px">标签</div>
        <div>
          <el-tag v-for="item in tag" :key="item.id" size="small"  @close="handleClose(item)" closable>{{item.value}}</el-tag>
          <el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button size="small" v-else class="button-new-tag"  style="fontSize:12px;" @click="showInput">+</el-button>
        </div>
      </div>

    <div class="last">
      <div><img height="25" width="25" style="border-radius:50%;vertical-align: middle;" src="https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120152029983801.jpg" alt=""><span>不凡UI设计组</span></div>
      <div><img height="25" width="25" style="border-radius:50%;vertical-align: middle;" src="https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120152042345120151821.jpg" alt=""><span>不凡UI设计组</span></div>
      <div><img height="25" width="25" style="border-radius:50%;vertical-align: middle;" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" alt=""><span>不凡UI设计组</span></div>
      <div><img height="25" width="25" style="border-radius:50%;vertical-align: middle;" src="https://cn.vuejs.org/images/logo.png" alt=""><span>不凡UI设计组</span></div>
      <div><img height="25" width="25" style="border-radius:50%;vertical-align: middle;" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" alt=""><span>不凡UI设计组</span></div>
      <div><img height="25" width="25" style="border-radius:50%;vertical-align: middle;" src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" alt=""><span>不凡UI设计组</span></div>
    </div>

    </div>
      <div class="card">
         <el-tabs v-model="activeName" @tab-click="handleClick" style=" margin: 20px 10px 20px 20px;">
          <el-tab-pane label="文章" name="0">
           <div class="content">
              <div class="article" v-for="item in title" :key="item.id">
                <div class="name" >{{item.title}}</div>
                <div class="tagcon">
                  <div class="taga" v-for="val in item.tagname" :key="val.id">
                  <el-tag size="small">{{val.name}}</el-tag>
                </div>
                </div>
                <p class="p">{{item.dec}}</p>
                <div class="aut"><span>{{item.name}}</span><span>{{item.time}}</span></div>
                <div class="tobar">
                  <div><span style="margin-right:5px;" class="el-icon-magic-stick"></span><span>123</span></div>
                  <div class="line"></div>
                  <div><span style="margin-right:5px;"   class="el-icon-position"></span><span>123</span></div>
                  <div class="line"></div>
                  <div><span style="margin-right:5px;"  class="el-icon-postcard"></span><span>123</span></div>
                </div>
            </div>
           </div>
          </el-tab-pane>
          <el-tab-pane label="项目" name="1">

              <div class="project">
                <div class="images" v-for="item in project" :key="item.id">
                  <img height="auto" width="100%" :src="item.img" alt="">
                  <div class="names">{{item.title}}</div>
                  <p>{{item.dec}}</p>
                  <div class="footer"><span>{{item.time}}</span><img :src="item.icon" alt=""></div>
                </div>
                 <div class="images"></div>
                 <div class="images"></div>
              </div>

             

          </el-tab-pane>
         </el-tabs>
    </div>
  </div>
   
</div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      activeName:0,
      inputVisible: false,
      inputValue: '',
      userInfo:'',
      project:[
        {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }, {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }, {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }
        , {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }
        , {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }
        , {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }
        , {
          id:uuidv4(),
          img:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120163137052iXjVmWVHbCJAyqvDxdtx.png',
          title:'不凡学院',
          dec:'那是一种内在的东西， 他们到达不了，也无法触及的',
          time:'一天前',
          icon:'https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201120165417366ZiESqWwCXBRQoaPONSJe.png'
        }
      ],
      title:[
        {
          id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        },
         {id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        },
         {id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        },
         {id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        },
         {id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        },
         {id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        },
         {id:uuidv4(),
          title:'Vue',
          tagname:[
            {id:uuidv4(),name:'Element'},
            {id:uuidv4(),name:'饿了么'},
            {id:uuidv4(),name:'设计语言'}
          ],
          dec:'段落示意：element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。element，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          name:'周树人',
          time:'2020-11-20 10:33',
          qi:125,
          zan:13445,
          liao:222
        }
      ],
      tag:[
        {
          id:uuidv4(),
          value:'男神'
        },
         {
          id:uuidv4(),
          value:'学霸'
        },
         {
          id:uuidv4(),
          value:'秦帅哥'
        },
         {
          id:uuidv4(),
          value:'月薪2万起'
        },
         {
          id:uuidv4(),
          value:'高颜值'
        }
      ]
    }
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  },
  methods: {
    handleClick(tab, event){
      console.log(tab)
    },
    handleClose(tag) {
      console.log(tag)
        this.tag.splice(this.tag.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          var obj = {
             id:uuidv4(),
             value:inputValue
          }
          this.tag.push(obj);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
  },
}
</script>
<style lang="scss">
  .el-button--small{
    padding: 4px 15px;
  }
.button-new-tag{
  height: 27px !important;
  line-height: 27px !important;
}
.el-tag {
  padding: 0px 5px;
}
</style>
<style lang="scss" scoped>
.tagcon {
  display: flex;
}
.p {
  font-size: 14px;
      margin-bottom: 10px;
    color: rgba(0,0,0,.85);
}
.content {
box-sizing: border-box;
    padding: 20px;
    width: 100%;
}
.name {
  margin-bottom: 10px;
    color: rgba(0,0,0,.85);
    font-size: 16px;
}
.aut {
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
    margin-top: 15px;
    color: rgba(0,0,0,.45);
    width: 100%;
}

.line {
  margin: 0px 10px;
  height: 18px;
  width: 2px;
  color: rgba(0,0,0,.45);
}

.tobar {
  display: flex;
  div span {
        font-size: 14px;
    color: rgba(0,0,0,.45);
  }
}
.article {
    width: 100%;
    border-bottom: 1px dashed grey;
    padding-bottom: 10px;
    margin-bottom: 15px;

}
 .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
.perpage {
  margin: 30px;
  display: flex;
  background-color: #ffffff;
}

.box-card {
  border: 1px solid rgb(235, 234, 234);
  width: 35%;
  margin: 20px 10px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.image{
  margin-top: 20px;
  height: 100px;
  width: 100px;
  border: 1px solid rgb(226, 224, 224);
  box-sizing: border-box;
  border-radius: 50%;
}

.dec {
  width: 90%;
  div span{
    margin-top: 10px;
    font-size: 13px;
  }
}

.last {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    width: 48%;
    margin: 10px 0;
  }
}

.tag {
  width: 90%;
  padding-bottom: 20px;
  padding-top: 30px;
  border-bottom: 1px dashed rgba(0,0,0,.06);
}

.card{
  border: 1px solid rgb(235, 234, 234);
  width: 65%;
   margin: 10px;
   margin-left: 0;
}
.project {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.images {
  width: 24%;
  p {
    margin: 4px;
    font-size: 12px;
  }
}

.names {
  margin-left: 5px;
  color: #303133;
}

.footer {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  span {
        font-size: 12px;
    color: gray;
    margin-left: 5px;
  }
  img {
    height: 20px;
    width: 20px;
    
  }
}

</style>