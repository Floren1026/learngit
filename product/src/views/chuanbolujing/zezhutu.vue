<template>
    <div class="echart" id="mychart" :style="myChartStyle"></div>
  </template>
  
  <script>
  import * as echarts from "echarts";
  
  export default {
    data() {
      return {
        xData: ["第一层", "第二层", "第三层", "第四层"], //横坐标
     
        myChartStyle: { float: "right", width: "900px", height: "700px" } //图表样式
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
                data:['转发总数','转发占比'],
                selectedMode: true,
                bottom: 0	,
                textStyle: {
                 fontSize: 20,
                 color: "white",
                padding: [0, 0, 0, 0], // 修改文字和图标距离
                },
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
              show:true,
              color: "#A0B2D3",
              fontSize: 24,
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
                       show: true,
                       interval: 'auto',
                       formatter: '{value} %',
                       fontSize: 20,
                        },
                       max: 100,  //最大值
                        min: 0,  //最小值
                       },

               ],
               series: [
                   {
                 
                       name: '转发总数',
                       type: 'bar',
                       barWidth: '50%',
                       data: [827, 171, 61, 2],
                       itemStyle: {
          					color:'rgba(132, 136, 211, 1)',
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

                       name: '转发占比',
                       type: 'line',
                       lineWidth: '50%',
                       yAxisIndex: 1,//索引从0开始
                       data: [77.95,16.12,5.75,0.18],
                       itemStyle: {
                       	color:'rgba(91, 245, 204, 1)',
                           normal: {
                            lineStyle:{
                                width:6, //折线宽度

                              //折线颜色渐变
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(45,105,249,1)'
                                }, 
                                {
                                    offset: 1,
                                    color:'rgba(91, 245, 204, 1)'
                                }])
                            },
                       
                       

								label: {
									show: true, //开启显示
									position: 'bottom', 
                                    formatter: '{c}%',//在上方显示
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
  
  