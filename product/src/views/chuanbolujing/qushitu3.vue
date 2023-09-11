<template>
  <div class="echart" id="mychart1" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: ["1-500",
"5000-1000",
"1000-3000",
"3000-10000",
"1万-2万",
"2万-10万",
"10万-100万",
"100万以上"
], //横坐标
   
      myChartStyle: {  width: "100%", height: "350px" } //图表样式
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      // 基本柱状图
      const option = {
          legend: {
              data:['粉丝数','关注数'],
              selectedMode: true,
              bottom: 0	,
              textStyle: {
               fontSize: 20,
               color: "white",
              padding: [0, 0, 0, 0], // 修改文字和图标距离
              },
          },
          dataZoom: {
            type: 'inside'
        },
          tooltip: {
        trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
        axisPointer: {// 坐标轴指示器，坐标轴触发有效
          type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
              },
              splitLine:{      //去除网格线
			show:false,
			lineStyle: {
			    color:"#fff"
			}
		},    
        xAxis: {
          data: this.xData,
          axisLabel: {
            // 轴文字
            show:true,
            color: "#A0B2D3",
            fontSize: 15,
            margin: 20,
          },
          axisLine: {
            // 轴线
            show: true,
            color:'#268C8C',
          },

        },
        yAxis: [
                 {
                     type: 'value',
                    name:'',
                     axisLabel: { //y轴设置为%
                     show: true,
                     interval: 'auto',
                      fontSize: 20,
                      },
                 },
                 {
                     type: 'value',
                     name:'',
//	                        axisLabel: {
//	                            formatter: '{value} °C'
//	                        },
                     axisLabel: { //y轴设置为%
                     show: false,
                     interval: 'auto',
                    
                     fontSize: 20,
                      },
                   
                     },

             ],
             series: [
                 {
               
                     name: '粉丝数',
                     type: 'bar',
                     barWidth: '25%',    //柱子的宽度
                              data: [786,33,53,22,8,26,22,5],
                     itemStyle: {
                      
                            normal: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{    //颜色渐变
                    offset: 0,
                    color: ' #0ebeff'
                }, {
                    offset: 1,
                    color: ' #9479d5'
                }]),
                barBorderRadius: 12,
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: 'white',
                  fontSize: 16
                }
              }
            }
                }
                 },

                 { 

                     name: '关注数',
                     type: 'line',
                        color:' rgba(91, 245, 204, 1)',
                     yAxisIndex: 1,//索引从0开始
                     data: [722,168,61,38,9
                    ],
                     itemStyle: {
                       
                       
                         normal: {
                  label: {
                  show: true, //开启显示
                  position: 'left', 
                             
                    textStyle: { //数值样式
                  color: 'rgba(91, 245, 204, 1)',
                                      
                  fontSize: 16
                }
              }
            }

                     }
                 }
             ]

      };
      const myChart = echarts.init(document.getElementById("mychart1"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

