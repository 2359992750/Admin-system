<template>
  <div>
    <!-- 订单退单柱状图 -->
    <div class="barEchartsBox" ref="barEchartsBox"></div>
    <div class="bottom">
      <!-- 全国订单人数分布图 -->
    <div class="map" ref="map"></div>
    <!-- 购买终端 -->
    <div class="terminal" ref="terminal"></div>
    </div>
  </div>
</template>

<script>
//引入echarts
import echarts from 'echarts'
//引入中国地图
import china from 'echarts/map/json/china.json'
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.initOrder()
    this.initMap()
    this.initPie()
  },
  methods:{
    // order
    initOrder(){
      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 100; i++) {
        xAxisData.push('day' + i);
        data1.push(Math.floor(Math.random() * 11));
        data2.push(Math.floor(Math.random() * 11));
      }
        var option = {
        // 标题的参数
        title: {
          text: '订单退单柱状图',
          // 标题字体样式
          textStyle: {
            color: '#9AA8D4',
            fontSize: 22,
            fontWeight: 'normal'
          }
        },
        // 两个按钮的样式
        legend: {
          // 对应 series里的 name
          data: ['订单', '退单'],
          // 距离底部
          bottom: 10,
          // 字体样式
          textStyle: {
            color: '#A8AAB3', // 坐标值得具体的颜色
            fontSize: 12
          }
        },
        // toolbox: {
        //     // y: 'bottom',
        //     // 右上角工具栏
        //     feature: {
        //         magicType: {
        //             type: ['stack', 'tiled']
        //         },
        //         dataView: {},
        //         saveAsImage: {
        //             pixelRatio: 2
        //         }
        //     }
        // },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          // 网格是否显示
          splitLine: {
            show: false
          },
          // x线的样式
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#A8AAB3', // 左边线的颜色
              width: '1' // 坐标线的宽度
            }
          },
          axisLabel: {
            // 坐标轴字体样式
            textStyle: {
              color: '#A8AAB3', // 坐标值得具体的颜色
              fontSize: 12
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          // y线的样式
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#A8AAB3', // 左边线的颜色
              width: '1' // 坐标线的宽度
            }
          },
          axisLabel: {
            // 坐标轴字体样式
            textStyle: {
              color: '#A8AAB3', // 坐标值得具体的颜色
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: '订单',
            type: 'bar',
            data: data1,
            itemStyle: {
              normal: {
                // 渐变柱状图
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#7D05E2' }, // 柱图渐变色
                  { offset: 0.5, color: '#B600FF' }, // 柱图渐变色
                  { offset: 1, color: '#BC04E2' } // 柱图渐变色
                ])
              }
            }
          },
          {
            name: '退单',
            type: 'bar',
            data: data2,
            itemStyle: {
              normal: {
                // 渐变柱状图
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#24CBFF' }, // 柱图高亮渐变色
                  { offset: 0.5, color: '#24A3FF' }, // 柱图高亮渐变色
                  { offset: 1, color: '#2492FF' } // 柱图高亮渐变色
                ])
              }
            }
          }
        ],
        // 柱子弹出来的动画样式
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
          return idx * 5
        }
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.barEchartsBox)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    // 全国订单人数分布图
    initMap(){
      //注册地图
      echarts.registerMap('china',china);
      var outname = ["南海诸岛", '北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];
      var outvalue = [0, 524, 13, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 4, 31, 104, 36, 1052, 33, 347, 9, 157, 22, 4, 18, 5, 2398, 410, 484, 404, 22, 3, 5, 225];
      var outdata = [];

      var max = 6000,
          min = 10;
      var maxSize4Pin = 20,
          minSize4Pin = 10;

      for (var i = 0; i < outname.length; i++) {
          outdata.push({
              name: outname[i],
              value: outvalue[i]
          })
      }

      var geoCoordMap = {};
      /*获取地图数据*/
      var mapFeatures = echarts.getMap('china').geoJson.features;
      //  console.log(mapFeatures)
      mapFeatures.forEach(function(v) {
          // console.info(v)
          // 地区名称
          var name = v.properties.name;
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp;

      });
      var convertData = function(outdata) {
          var res = [];
          for (var i = 0; i < outdata.length; i++) {
              var geoCoord = geoCoordMap[outdata[i].name];
              if (geoCoord) {
                  res.push({
                      name: outdata[i].name,
                      value: geoCoord.concat(outdata[i].value),
                  });
              }
          }
          return res;
      };
     var option = {
       title: {
          text: '全国订单人数分布图',
          // 标题字体样式
          textStyle: {
            color: '#9AA8D4',
            fontSize: 22,
            fontWeight: 'normal'
          }
        },
    // backgroundColor: '#0F1C3C',背景图
    tooltip: {
        show: true,
        formatter: function(params) {
            if (params.value.length > 1) {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] + '人&nbsp;&nbsp;';
            } else {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '人&nbsp;&nbsp;';
            }
        },

    },

    geo: {
        map: 'china',
        show: true,
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        layoutSize: "100%",
        itemStyle: {
            normal: {
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00F6FF'
                }, {
                    offset: 1,
                    color: '#53D9FF'
                }], false),
                borderWidth: 3,
                shadowColor: 'rgba(10,76,139,1)',
                shadowOffsetY: 0,
                shadowBlur: 60
            }
        }
    },
    series: [{
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        //zoom:1.1,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#073684' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#061E3D' // 100% 处的颜色
                    }],
                },
                borderColor: '#215495',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: {

                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#073684' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#061E3D' // 100% 处的颜色
                    }],
                },
            }
        },
        data: outdata,
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
            brushType: 'stroke'
        },
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(5,80,151,0.2)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(5,80,151,0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,108,255,0.7)'
                    }],
                    global: false // 缺省为 false
                },
            }

        },
        //去掉标签
        // label: {
        //     normal: {
        //         show: true,
        //         color: '#fff',
        //         fontWeight: 'bold',
        //         position: 'inside',
        //         formatter: function(para) {
        //             return '{cnNum|' + para.data.value[2] + '}'
        //         },
        //         rich: {
        //             cnNum: {
        //                 fontSize: 13,
        //                 color: '#D4EEFF',
        //             }
        //         }
        //     },
        // },
        symbol: 'circle',
        symbolSize: function(val) {
            if (val[2] === 0) {
                return 0;
            }
            var a = (maxSize4Pin - minSize4Pin) / (max - min);
            var b = maxSize4Pin - a * max;
            return a * val[2] + b * 1.2;
        },
        data: convertData(outdata),
        zlevel: 1,
          }]
        };
        // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.map)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    //购买终端饼状图
    initPie(){
     var option = {
     title: {
          text: '购买终端',
          // 标题字体样式
          textStyle: {
            color: '#9AA8D4',
            fontSize: 22,
            fontWeight: 'normal'
          }
        },
    tooltip: {
        trigger: 'item',
        formatter: `{b}数量 : {c}个 ;占比({d}%)`
    },
    //去掉顶部右边的功能
    // toolbox: {
    //     show: true,
    //     feature: {
    //         mark: {show: true},
    //         dataView: {show: true, readOnly: false},
    //         magicType: {
    //             show: true,
    //             type: ['pie', 'funnel']
    //         },
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [45, 100],
            center: ['65%', '50%'],
            roseType: 'area',
            data: [
                {value: 10, name: 'Android',itemStyle:{color:'#BD00FF'}},
                {value: 5, name: 'ios',itemStyle:{color:'#24ABFF'}},
                {value: 15, name: 'PC Web',itemStyle:{color:'#BD00FF'}},
                {value: 30, name: 'Wap Web',itemStyle:{color:'#831E8B'}},
            ]
          }
        ]
      };
       // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.terminal)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

    }
  }
}
</script>

<style lang="scss" scoped>
.barEchartsBox {
    width: 95%;
    margin: 0 auto;
    height: 360px;
}
  .title {
    span {
      font-family: Microsoft Yahei,Arial,sans-serif;
      font-size: 22px;
      color: #9aa8d4;
      font-weight: 400;
    }
  }
  .bottom {
    width: 95%;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
  }
  .map,.terminal {
    width: 434px;
    height: 360px;
    user-select: none;
    padding: 0px;
    margin: 0px;
    border-width: 0px;
  }
</style>