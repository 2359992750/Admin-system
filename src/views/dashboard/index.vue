<template>
  <div class="dashboard" ref="dashboard">
    <!-- 全屏按钮 -->
    <svg-icon @click="screenfull" icon-class="screenfull"  class-name='screenfull' />
    <!-- 中间标题 -->
   <div class="header">
      <span>不凡数据大屏</span>
   </div>
    <!-- 头部栏右边的时间 -->
    <div class="time">{{time}}</div>
    <!-- 主要数据分为三个模块 -->
    <div class="content">
      <div class="left">
        <Shelldata/>
      </div>
      <div class="center">
        <OrderBarChart/>
      </div>
      <div class="right">
        <StatiSticsData/>
      </div>
    </div>
    <!-- 底部3D动画 -->
    <div class="footer">
      <BgAnimate/>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
//引入底部3D波浪粒子图
import BgAnimate from './component/BgAnimate'
//电商数据图
import Shelldata from './component/shelldata'
//订单柱状图
import OrderBarChart from './component/orderBarChart'
//统计数据
import StatiSticsData from './component/statiDticsData'
export default {
  data(){
    return{
      time:''
    }
  },
  name: 'Dashboard',
  computed: {},
  created() {},
  mounted() {
    this.changeTime()
  },
  methods:{
    //大屏开关键
    screenfull(){
      if (screenfull.isEnabled) {
	       screenfull.toggle(this.$refs.dashboard);
       }
    },
    //头部右边时间状态
    changeTime(){
      setInterval(()=> {
        const time = new Date()
        const year = time.getFullYear()
        const month = time.getMonth()+1
        const day = time.getDate()
        const hour = time.getHours()
        const minutes = time.getMinutes()
        const second = time.getSeconds()
        this.time = year+'-'+this.formatTime(month)+'-'+this.formatTime(day)+' '+this.formatTime(hour)+':'+this.formatTime(minutes)+':'+this.formatTime(second)
      },1000)
    },
    //格式化时间
    formatTime(timeType){
      return timeType>9?timeType:'0'+timeType
    }
  },
  components:{
    BgAnimate,
    Shelldata,
    OrderBarChart,
    StatiSticsData
  }
}
</script>

<style lang="scss" >
 .app-main {
   height: calc(100vh - 50px);
 .dashboard {
   height: 100%;
   background-color: #0A1631 !important;
    }
 } 

//  全屏按钮
.screenfull {
  font-size: 1.5625rem;
  color: #9aa8d4;
  margin: 10px 0 0 10px;
  position: fixed;
}

.header {
  margin: 0 auto;
  background: url(http://shen_hao222.gitee.io/test_page/static/img/titleBG.a4cdf1b6.png);
  background-size: 100% 100%;
  background-position: 50%;
  width: 70%;
  height: 122px;
  text-align: center;
  line-height: 100px;
  font-size: 36px;

  span {
    font-family: Microsoft Yahei,Arial,sans-serif;
    font-size: 36px;
    color: #fff;
    text-shadow: #fff 0 0 15px;
    font-weight: 700;
  }
}

.time {
  position: absolute;
  right: 30px;
  top: 20px;
  margin-right: 20px;
  font-family: Microsoft Yahei,Arial,sans-serif;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.footer {
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
}
.content {
  display: flex;
  justify-content: space-between;
  .left {
    width: 25%;
    box-sizing: border-box;
    padding: 10px 0 0 10px;
    position: relative;
    overflow: hidden;
    top: -20px;
  }
  .center {
    width: 50%;
    box-sizing: border-box;
    padding: 10px 0 0 10px;
    position: relative;
    overflow: hidden;
    top: -20px;
  }
  .right {
    width: 25%;
    box-sizing: border-box;
    padding: 10px 0 0 10px;
    position: relative;
    overflow: hidden;
    top: -20px;
  }
}
</style>
