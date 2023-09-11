<template>
  <!-- 注意，这里必须设置宽高，并且宽高不能都设置为100%，否则显示的是空白 -->
  <div id="china_map" style="width: 100%; height: 450px;"></div>
</template>;

<script>
  import * as echarts from "echarts";
  import china from "./china.json"; 

  echarts.registerMap("china", china);
  export default {
      data() {
          return {
              MapDataList: [
                  {
                      name: "安徽",
                      value: 62,
                      perf1: "3.4%",
                      zhuanfa:"5",
                      perf2: "0.3%",
                  },
                  {
                      name: "北京",
                      value: 122,
                      perf1: "6.6%",
                      zhuanfa:"100",
                      perf2: "5.9%",
                  }, {
                      name: "重庆",
                      value: 52,
                      perf1: "2.8%",
                      zhuanfa:"40",
                      perf2: "2.4%",
                  }, {
                      name: "福建",
                      value: 48,
                      perf1: "2.6%",
                      zhuanfa:"20",
                      perf2: "1.2%",
                  }, {
                      name: "甘肃",
                      value: 20,
                      perf1: "1.1%",
                      zhuanfa:"10",
                      perf2: "0.6%",
                  }, {
                      name: "广东",
                      value: 249,
                      perf1: "13.5%",
                      zhuanfa:"280",
                      perf2: "16.6%",
                  }, {
                      name: "广西",
                      value: 34,
                      perf1: "1.8%",
                      zhuanfa:"10",
                      perf2: "0.6%",
                  }, {
                      name: "贵州",
                      value: 12,
                      perf1: "0.7%",
                      zhuanfa:"3",
                      perf2: "0.2%",
                  }, {
                      name: "海南",
                      value: 9,
                      perf1: "0.5%",
                      zhuanfa:"6",
                      perf2: "0.4%",
                  }, {
                      name: "河北",
                      value: 71,
                      perf1: "3.8%",
                      zhuanfa:"2",
                      perf2: "0.1%",
                  }, {
                      name: "河南",
                      value: 63,
                      perf1: "3.4%",
                      zhuanfa:"2",
                      perf2: "0.1%",
                  }, {
                      name: "黑龙江",
                      value: 109,
                      perf1: "5.9%",
                      zhuanfa:"100",
                      perf2: "5.9%",
                  }, {
                      name: "湖北",
                      value: 56,
                      perf1: "3.0%",
                      zhuanfa:"70",
                      perf2: "4.1%",
                  }, {
                      name: "湖南",
                      value: 43,
                      perf1: "2.3%",
                      zhuanfa:"40",
                      perf2: "2.4%",
                  }, {
                      name: "吉林",
                      value: 41,
                      perf1: "2.2%",
                      zhuanfa:"10",
                      perf2: "0.6%",
                  }, {
                      name: "江苏",
                      value: 127,
                      perf1: "6.9%",
                      zhuanfa:"100",
                      perf2: "5.9%",
                  }, {
                      name: "江西",
                      value: 34,
                      perf1: "1.8%",
                      zhuanfa:"20",
                      perf2: "1.2%",
                  }, {
                      name: "辽宁",
                      value: 96,
                      perf1: "5.2%",
                      zhuanfa:"110",
                      perf2: "6.5%",
                  }, {
                      name: "内蒙古",
                      value: 28,
                      perf1: "1.5%",
                      zhuanfa:"200",
                      perf2: "11.8%",
                  }, 
                  {
                      name: "宁夏",
                      value: 6,
                      perf1: "0.3%",
                      zhuanfa:"1",
                      perf2: "0.1%",
                  }, 
                  {
                      name: "山东",
                      value: 111,
                      perf1: "6%",
                      zhuanfa:"180",
                      perf2: "0.7%",
                  },
                  {
                      name: "山西",
                      value: 31,
                      perf1: "1.7%",
                      zhuanfa:"20",
                      perf2: "1.2%",
                  }, {
                      name: "陕西",
                      value: 56,
                      perf1: "3.0%",
                      zhuanfa:"30",
                      perf2: "1.8%",
                  }, 
                  {
                      name: "上海",
                      value: 75,
                      perf1: "4.1%",
                      zhuanfa:"60",
                      perf2: "3.6%",
                  }, 
                  {
                      name: "四川",
                      value: 86,
                      perf1: "4.7%",
                      zhuanfa:"80",
                      perf2: "4.7%",
                  }, {
                      name: "天津",
                      value: 35,
                      perf1: "1.9%",
                      zhuanfa:"10",
                      perf2: "0.6%",
                  }, {
                      name: "新疆",
                      value: 10,
                      perf1: "0.5%",
                      zhuanfa:"5",
                      perf2: "0.3%",
                  }, {
                      name: "云南",
                      value: 32,
                      perf1: "1.7%",
                      zhuanfa:"40",
                      perf2: "2.4%",
                  }, 
                  {
                      name: "浙江",
                      value: 119,
                      perf1: "6.4%",
                      zhuanfa:"130",
                      perf2: "7.7%",
                  }, 
                  {
                      name: "台湾",
                      value: 3,
                      perf1: "0.2%",
                      zhuanfa:"6",
                      perf2: "0.4%",
                  },
                  {
                      name: "澳门",
                      value: 1,
                      perf1: "0.1%",
                      zhuanfa:"2",
                      perf2: "0.1%",
                  }, {
                      name: "香港",
                      value: 4,
                      perf1: "0.2%",
                      zhuanfa:"6",
                      perf2: "0.4%",
                  },{
                      name: "青海",
                      value: 0,
                      perf1: "0%",
                      zhuanfa:"0",
                      perf2: "0%",
                  }, {
                      name: "西藏",
                      value: 0,
                      perf1: "0%",
                      zhuanfa:"0",
                      perf2: "0%",
                  }
              ]
          };  
      },
      mounted() {
          this.setMapData();
          this.$nextTick(() => {
              // if (this.chinachart == null) {
                  this.setMapData();
              // }
          });
      },
      methods: {
          // 地图
          setMapData() {
              // 初始化echarts实例 #D8E9FD
              this.chinachart = echarts.init(document.getElementById("china_map"));
              // 进行相关配置
              this.chartOption = {
                  tooltip: { // 鼠标移到图里面的浮动提示框
                      // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
                      formatter(params, ticket, callback) {
                          // params.data 就是series配置项中的data数据遍历
                          let localValue, perf1, zhuanfa,perf2,downloadSpeep, usability, point;
                          if (params.data) {
                              localValue = params.data.value;
                              perf1 = params.data.perf1;
                              zhuanfa = params.data.zhuanfa;
                              perf2 = params.data.perf2;
                              downloadSpeep = params.data.downloadSpeep;
                              usability = params.data.usability;
                              point = params.data.point;
                          } else {// 为了防止没有定义数据的时候报错写的
                              localValue = 0;
                              perf1 = 0;
                              zhuanfa = 0;
                              perf2 = 0;
                          }
                          let htmlStr = `<div style='font-size:18px;'> ${params.name}</div>
                              <p style='text-align:left;margin-top:-4px;'><br/>评论数：${localValue}<br/>评论占比：${perf1}<br/>转发数：${zhuanfa}<br/>转发占比：${perf2}<br/></p>`;
                          return htmlStr;
                      },
                      backgroundColor: "rgba(0,0,0,0)", // 提示框浮层的背景颜色
                    padding: 100, // 提示框浮层内边距，单位px

                    
                      textStyle: { color: "#41feff" }, //提示标签字体颜色
                      padding: [5, 10, 0, 10],  // 设置上下的内边距为 5,0，左右的内边距为 10
                  },
                  visualMap: {  
                      show: true,
                      bottom: 20,
                      left: 200,
                      // left: 50, top: '30%', right: 0, bottom: 0,  //定位的左上角以及右下角分别所对应的经纬度
                      text: ["300", "0"],
                      calculable:true,                        //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
                       realtime:true, 
                       textStyle: {
                       color: '#ffffff'
                    },
                      min: 0,
                      itemHeight: 200,  
                                
          //图形的高度，即长条的高度。
                      color: [
                          '#ee6666',//红色
                          '#fc8452',//橙色
                          '#fac858',//黄色
                          '#9a60b4',//紫色
                          '#ea7ccc',//淡紫
                          '#3ba272',//绿色
                          '#91cc75',//浅绿
                          '#5470c6',//蓝色
                          '#73c0de',//淡蓝
                      ]
                  },    
                  geo: {  // 地理坐标系组件用于地图的绘制// geo配置详解： https://echarts.baidu.com/option.html#geo
                      map: "china", // 表示中国地图
                      roam: true, // 是否开启鼠标缩放和平移漫游
                      zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
                      label: {
                          show: true
                      },
                      emphasis: {  // 地图区域的多边形 图形样式。
                          borderColor: "#ffffff",//未选中的状态
                          areaColor: "#D8E9FD", //背景颜色
                          label: {
                              show: true, //显示名称
                          },
                          itemStyle: {  //选中的状态// 高亮状态下的多边形和标签样式
                              shadowBlur: 20,
                              shadowColor: "rgba(0, 0, 0, 0.5)",
                              borderColor: "#fff",
                              areaColor: "#DA3A3A",
                          },
                      },
                  },
                  series: [
                      {
                          name: "", // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
                          type: "map",
                          geoIndex: 0,
                          label: {
                              show: true,
                          },
                          // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
                          data: this.MapDataList,
                      },
                  ],
              };
              // 使用刚指定的配置项和数据显示地图数据
              this.chinachart.setOption(this.chartOption);
          },
      }
  }
</script>