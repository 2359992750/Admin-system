<template>
  <div>
    <div class="title"><span>电商数据 </span><span> Shell Data</span></div>
    <div class="second">
      <div class="sale"><span>销售量</span><span>万元</span></div>
      <div class="num-content">
        <div class="num-div">1</div>
        <div class="num-div">2</div>
        <div class="num-div">0</div>
        <div class="num-div">1</div>
        <div class="num-div">0</div>
        <div class="num-div">2</div>
        <div class="num-div">8</div>
        <div class="dot">.</div>
        <div class="num-div">4</div>
      </div>
    </div>
    <!-- 完成百分比 -->
    <div class="left-data">
      <div class="left-title">完成百分比</div>
      <div class="pro-wrapper">
        <div class="pro-main">
          <div class="num" style="left:80%">80%</div>
          <div class="pro-bar">
            <div class="pro-inner" style="width:80%"></div>
          </div>
          <div class="triangle" style="left:80%"></div>
        </div>
      </div>
    </div>
    <!-- 热门搜索词 -->
    <div class="title"><span>热门搜索词 </span><span> Top Search</span></div>
    <div class="words-echarts" ref="hot"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import wordCloud from 'echarts-wordcloud'
export default {
  data(){
    return {
      datas : [
        {name: "雨伞", value: 30},
        {name: "晴天", value: 28},
        {name: "电话", value: 24},
        {name: "手机", value: 23},
        {name: "下雨", value: 22},
        {name: "暴雨", value: 21},
        {name: "多云", value: 20},
        {name: "雨衣", value: 29},
        {name: "屋檐", value: 28},
        {name: "大风", value: 27},
        {name: "台风", value: 26},
        {name: "下雪", value: 25},
        {name: "打雷", value: 24},
        {name: "小雨", value: 30},
        {name: "中雨", value: 18},
        {name: "大雨", value: 14},
        {name: "雷阵雨", value: 13},
        {name: "下雪", value: 12},
        {name: "小雪", value: 11},
        {name: "中雪", value: 10},
        {name: "大雪", value: 9},
        {name: "暴雪", value: 8},
        {name: "东风", value: 7},
        {name: "南风", value: 6},
        {name: "西北风", value: 5},
        {name: "北风", value: 4},
        {name: "闪电", value: 3}
     ]
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
    var option = {
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 30
        }
    },
    series: [{
        type: "wordCloud",
        // 网格大小，各项之间间距
        gridSize: 30,
        // 形状 circle 圆，cardioid  心， diamond 菱形，
        // triangle-forward 、triangle 三角，star五角星
        shape: 'circle',
        // 字体大小范围
        sizeRange: [20, 50],
        // 文字旋转角度范围
        rotationRange: [0, 90],
        // 旋转步值
        rotationStep: 90,
        // 自定义图形
        // maskImage: maskImage,
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        // 画布宽
        width: '90%',
        // 画布高
        height: '80%',
        // 是否渲染超出画布的文字
        drawOutOfBound: false,
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 200 + 55),
                        Math.round(Math.random() * 200 + 55),
                        Math.round(Math.random() * 200 + 55)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#2ac'
            }
        },
        data: this.datas
    }]
};
      var myChart = echarts.init(this.$refs.hot);
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    span:nth-of-type(1){
      font-family: Microsoft Yahei,Arial,sans-serif;
      font-size: 22px;
      color: #9aa8d4;
      font-weight: 400;
    }
    span:nth-of-type(2){
      font-family: Microsoft Yahei,Arial,sans-serif;
      font-size: 20px;
      color: #404d69;
      font-weight: 400;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
  }

  .second {
    margin: 20px 0;
    .num-content {
      display: flex;
      margin-top: 20px;
      .num-div {
        font-family: Microsoft Yahei;
        font-size: 55px;
        font-weight: 700;
        color: #fff;
        margin-left: 3px;
        margin-right: 3px;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        width: 10%;
        text-align: center;
        background-color: #0f396b;
      }
      .dot {}
        font-family: Microsoft Yahei;
        font-size: 55px;
        font-weight: 700;
        color: #fff;
        margin-left: 3px;
        margin-right: 3px;
    }
  }

  .sale {
    display: flex;
    justify-content: space-between;
    span:nth-of-type(1){
      font-family: Microsoft Yahei,Arial,sans-serif;
      font-size: 16px;
      color: #9aa8d4;
    }
    span:nth-of-type(2){
      font-family: Microsoft Yahei,Arial,sans-serif;
      font-size: 16px;
      color: #73aae5;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
  }

  .left-data {
    margin: 20px 0;
    .left-title {
      font-family: Microsoft Yahei,Arial,sans-serif;
      font-size: 16px;
      color: #9aa8d4;
    }
    .pro-wrapper {
      margin: 0 auto;
      position: relative;
      width: 85%;
      .pro-main {
        position: relative;
        margin: 20px auto;
        width: 100%;
        height: 50px;
        .num {
          font-family: Microsoft Yahei;
          position: absolute;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          width: 45px;
          text-align: center;
          margin-left: -30px;
          -webkit-transition: all .4s ease;
          transition: all .4s ease;
        }
        .pro-bar {
          position: absolute;
          top: 65%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 100%;
          height: 10px;
          border-radius: 5px;
          background-color: #283052;
          .pro-inner {
            transition: all .4s ease;
            border-radius: 5px;
            height: 10px;
            background: -webkit-gradient(linear,left top,right tcolor-stop(30%, #24cbff),to(#9000ff));
            background: linear-gradient(90deg,#24cbff 30%,#9000ff);
          }
        }
        .triangle {
           transition: all .4s ease;
           position: absolute;
           top: 40px;
           margin-left: -10px;
           width: 0;
           height: 0;
           border-top: 0 solid transparent;
           border-right: 10px solid transparent;
           border-left: 10px solid transparent;
           border-bottom: 10px solid #fff;
        }
      }
    }
  }
  .words-echarts {
    margin-top: 20px;
    position: relative;
    z-index: 9;
    width: 100%;
    height: 390px;
    background-color: #16223c;
  }
</style>