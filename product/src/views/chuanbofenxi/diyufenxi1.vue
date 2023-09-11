<template>
  <div class="echart" id="mychart1" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: ["安徽",
        "北京",
        "重庆",
        "福建",
        "甘肃",
        "广东",
        "广西",
        "贵州",
        "海南",
        "河北",
        "河南",
        "黑龙江",
        "湖北",
        "湖南",
        "吉林",
        "江苏",
        "江西",
        "辽宁",
        "内蒙古",
        "宁夏",
        "山东",
        "山西",
        "陕西",
        "上海",
        "四川",
        "天津",
        "新疆",
        "云南",
        "浙江",
        "中国澳门",
        "中国台湾",
        "中国香港"
      ], //横坐标
      myChartStyle: { width: "750px", height: "300px" } //图表样式
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
          data: ['评论数', '转发数'],
          selectedMode: true,
          x: 'center',      //可设定图例在左、右、居中
          y: 'bottom',     //可设定图例在上、下、居中
          padding: [0, 150, 0, 0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
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
        splitLine: {      //去除网格线
          show: false,
          lineStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          data: this.xData,
          axisLabel: {
            // 轴文字
            show: true,
            color: "white",
            fontSize: 17,
            margin: 5,
            formatter: function (value) {
              return value.split("").join("\n");

            }
          },
          axisLine: {
            // 轴线
            show: true,
            color: '#268C8C',
          },

        },
        yAxis: { // y轴
          splitLine: { // 网格线
            show: false,
            lineStyle: {
              color: '#5767a0',
              width: 1
            }
          }
        },

        yAxis: [
          {
            type: 'value',
            name: '',
            splitLine: { // 网格线
              show: true,
              lineStyle: {
                color: '#5767a0',
                width: 1
              }
            },
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
              show: false,
              interval: 'auto',

              fontSize: 20,
            },
          },
        ],
        series: [
          {
            name: '评论数',
            type: 'bar',
            barWidth: '20%',
            barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
            barCategoryGap: '100%',
            data: [62, 122, 52, 48, 20, 249, 34, 12, 9, 71, 63, 109, 56, 43, 41, 127, 34, 96, 28, 6, 111, 31, 56, 75, 86, 35, 10, 32, 119, 1, 3, 4],
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
                  show: false, //开启显示
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
            name: '转发数',
            type: 'bar',
            barWidth: '20%',    //柱子的宽度
            data: [5, 100, , 40, 20, 10, 280, 10, 3, 6, 2, 2, 100, 70, 40, 10, 100, 20, 110, , 200, 1, 180, 20, 30, 60, 80, 10, 5, 40, 130, 2, 6, 6],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{    //颜色渐变
                  offset: 0,
                  color: ' rgba(91, 245, 204, 1)',
                }, {
                  offset: 1,
                  color: ' #9479d5'
                }]),
                barBorderRadius: 12,
                label: {
                  show: false, //开启显示
                  position: 'top', //在上方显示
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

