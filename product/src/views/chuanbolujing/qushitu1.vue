<template>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>
  
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: [
        "2023/7/24 22:00",
        "2023/7/24 23:00",
        "2023/7/25 0:00",
        "2023/7/25 1:00",
        "2023/7/25 2:00",
        "2023/7/25 3:00",
        "2023/7/25 4:00",
        "2023/7/25 5:00",
        "2023/7/25 6:00",
        "2023/7/25 7:00",
        "2023/7/25 8:00",
        "2023/7/25 9:00",
        "2023/7/25 10:00",
        "2023/7/25 11:00",
        "2023/7/25 12:00",
        "2023/7/25 13:00",
        "2023/7/25 14:00",
        "2023/7/25 15:00",
        "2023/7/25 16:00",
        "2023/7/25 17:00",
        "2023/7/25 18:00",
        "2023/7/25 19:00",
        "2023/7/25 20:00",
        "2023/7/25 21:00",
        "2023/7/25 22:00",
        "2023/7/25 23:00",
        "2023/7/26 0:00",
        "2023/7/26 1:00",
        "2023/7/26 2:00",
        "2023/7/26 3:00",
        "2023/7/26 4:00",
        "2023/7/26 5:00",
        "2023/7/26 6:00",
        "2023/7/26 7:00",
        "2023/7/26 8:00",
        "2023/7/26 9:00",
        "2023/7/26 10:00",
        "2023/7/26 11:00",
        "2023/7/26 12:00",
        "2023/7/26 13:00",
        "2023/7/26 14:00",
        "2023/7/26 15:00",
        "2023/7/26 16:00",
        "2023/7/26 17:00",
        "2023/7/26 18:00",
        "2023/7/26 19:00",
        "2023/7/26 20:00",
        "2023/7/26 21:00",
        "2023/7/26 22:00",
        "2023/7/27 0:00",
        "2023/7/27 1:00",
        "2023/7/27 3:00",
        "2023/7/27 5:00",
        "2023/7/27 7:00",
        "2023/7/27 8:00",
        "2023/7/27 9:00",
        "2023/7/27 10:00",
        "2023/7/27 11:00",
        "2023/7/27 12:00",
        "2023/7/27 13:00",
        "2023/7/27 14:00",
        "2023/7/27 15:00",
        "2023/7/27 16:00",
        "2023/7/27 18:00",
        "2023/7/27 19:00",
        "2023/7/27 21:00",
        "2023/7/27 22:00",
        "2023/7/28 1:00",
        "2023/7/28 8:00",
        "2023/7/28 9:00",
        "2023/7/28 10:00",
        "2023/7/28 20:00",
        "2023/7/28 22:00",
        "2023/7/28 23:00",
        "2023/7/29 6:00",
        "2023/7/29 8:00",
        "2023/7/29 12:00",
        "2023/7/29 13:00",
        "2023/7/29 15:00"

      ], //横坐标

      myChartStyle: { float: "", width: "100%", height: "500px" } //图表样式
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
          data: ['转发数', '评论数'],
          selectedMode: true,
          top: 20,
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

        xAxis: {
          data: this.xData,
          axisLabel: {
            // 轴文字
            show: true,
            color: "#A0B2D3",
            fontSize: 20,
            margin: 30,


          },
          axisLine: {
            // 轴线
            show: true,
            color: '#268C8C',
          },

        },
        yAxis: [
          {
            type: 'value',
            name: '',
            axisLabel: { //y轴设置为%
              show: true,
              interval: 'auto',
              fontSize: 20,
            },


          },
          {
            type: 'value',
            name: '',
            //	                        axisLabel: {
            //	                            formatter: '{value} °C'
            //	                        },
            axisLabel: { //y轴设置为%
              show: true,
              interval: 'auto',
              fontSize: 20,
            },
          },



        ],
        series: [
          {

            name: '转发数',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              24, 126, 75, 66, 67, 72, 37, 52, 36, 25, 32, 33, 26, 27, 34, 21,
              11, 3, 4, 3, 2, 6, 5, 6, 14, 12, 17, 12, 7, 5, 2, 1, 14, 25, 21, 8, 13, 6, 4,
              4, 2, 1, 1, 1, 4, 7, 3, 5, 4, 3, 2, 1, 2, 1, 2, 2, 1,
              1, 1, 3, 1, 2, 1, 1, 1, 1, 2, 1, 1
            ],
            itemStyle: {
              color: 'rgba(132, 136, 211, 1)',
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: 'white',
                    fontSize: 15
                  }
                }
              }
            }
          },
          {

            name: '评论数',
            type: 'line',
            symbolSize: 7,
            yAxisIndex: 1,//索引从0开始
            data: [45, 92,
              15, 8, 4, 38, 0, 87, 144, 186, 209, 145, 98, 83, 60, 55, 45, 62, 40, 30, 38, 27, 28, 28, 38, 15,
              16, 7, 6, 6, 3, 2, 4, 13, 23, 20, 15, 11, 6, 3, 1, 2, 7, 11, 8, 4, 7, 3, 6,
              4, 0, 2, 1, 1, 3, 3, 2, 2, 2, 2, 2, 0, 3, 1, 1, 2, 2,
              0, 1, 2, 1, 2,
            ],
            itemStyle: {
              color: 'rgba(91, 245, 204, 1)',
              normal: {
                label: {
                  color: "yellow",
                  show: false, //开启显示
                  position: 'bottom',

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
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
  
  