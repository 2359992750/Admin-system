<template>
<div>
  <div class="card">
       <el-tabs style="padding: 20px;"  v-model="activeName" :tab-position="tabPosition" >
    <el-tab-pane label="安全设置" name="0">
      <div class="con">
        <div class="title">
          安全设置
        </div>

        <div class="content">
          <div class="left">
            <div>账号密码</div>
            <div>当前密码强度: 强</div>
          </div>
          <div class="right">
            <a href="javaScript:;">
              修改
            </a>
          </div>
        </div>


          <div class="content">
          <div class="left">
            <div>密保手机</div>
            <div>已绑定手机：138****8293
</div>
          </div>
          <div class="right">
            <a href="javaScript:;">
              修改
            </a>
          </div>
        </div>



          <div class="content">
          <div class="left">
            <div>密保问题</div>
            <div>未设置密保问题，密保问题可有效保护账户安全
</div>
          </div>
          <div class="right">
            <a href="javaScript:;">
              修改
            </a>
          </div>
        </div>


          <div class="content">
          <div class="left">
            <div>备用邮箱</div>
            <div>已绑定邮箱：ant***sign.com
</div>
          </div>
          <div class="right">
            <a href="javaScript:;">
              修改
            </a>
          </div>
        </div>


         <div class="content">
          <div class="left">
            <div>MFA 设备</div>
            <div>未绑定 MFA 设备，绑定后，可以进行二次确认

</div>
          </div>
          <div class="right">
            <a href="javaScript:;">
              修改
            </a>
          </div>
        </div>

      </div>

    </el-tab-pane>
    <el-tab-pane label="新消息通知" name="1">
      <div class="con">
          <div class="title">
            新消息通知
          </div>
           <div class="content">
          <div class="left">
            <div>账户密码</div>
            <div>其他用户的消息将以站内信的形式通知

</div>
          </div>
          <div class="right">
           <el-switch
  v-model="value1">
</el-switch>
          </div>
        </div>

        <div class="content">
          <div class="left">
            <div>系统消息</div>
            <div>系统消息将以站内信的形式通知
</div>
          </div>
          <div class="right">
           <el-switch
  v-model="value1">
</el-switch>
          </div>
        </div>


                <div class="content">
          <div class="left">
            <div>待办任务</div>
            <div>待办任务将以站内信的形式通知
</div>
          </div>
          <div class="right">
           <el-switch
  v-model="value1">
</el-switch>
          </div>
        </div>
      </div>
      
    </el-tab-pane>
  </el-tabs>

  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition:'left',
      activeName:0,
      value1:true
    }
  },
}
</script>
<style lang="scss" scoped>
  .card {
    margin: 30px;
    background-color: #ffffff;
  }
  .con {
    margin-top: 10px;
    margin-left: 10px;
  }
  .title {
    font-size: 22px;
    margin-bottom: 20px;
    color: #303133;
  }

  .content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 80px;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    .left {
      div:nth-of-type(1){
            color: rgba(0,0,0,.85);
    font-size: 14px;
    margin-bottom: 10px;
      }
        div:nth-of-type(2){
                color: rgba(0,0,0,.45);
    font-size: 14px;
      }
    }

    .right a {
      color: rgb(64, 158, 255);
      cursor: pointer;
      text-decoration: none;
    }
  }
</style>