<template>
    <div>
      <div id="main" style="width:500px ;height:400px;"></div>
    </div>
    </template>
    
    <script>
 
      import * as echarts from "echarts"
      export default {
        name: 'index',
        data() {
          return {}
        },
        mounted: function() {
          this.$nextTick(function() {
            this.getPie()
          })
        },
        methods: {
          getPie() {
            // 绘制图表
            var myChart = echarts.init(document.getElementById('main'))
            // 指定图表的配置项和数据
            var option = {
              //标题
              title: {
                text: '微博来源',
                x: 'center' ,     
                top: "0%",         //标题位置
                 textStyle: { //标题内容的样式
                  color: 'white',
                  fontStyle: 'normal',
                 
            
                   fontSize: 20 //主题文字字体大小，默认为18px
                 },
              },
              stillShowZeroSum: true,
              //鼠标划过时饼状图上显示的数据
              tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c} ({d}%)'
              },
              //图例
              legend: {//图例  标注各种颜色代表的模块
                 orient: 'vertical',//图例的显示方式  默认横向显示
                 right: 10,
                bottom:10,
               icon: "circle",
  
                 itemWidth: 10,//图例颜色块的宽度和高度
                 itemHeight: 20,
                textStyle: {//图例中文字的样式
                  color: 'white',
                  fontSize: 20
                },
                data: ['iPhone客户端','HUAWEI','微博weibo.com','荣耀','OPPO','vivo','Android客户端','小米','HarmonyOS','三星','其它'
]//图例上显示的饼图各模块上的名字
              },
              //饼图中各模块的颜色
              color: ['#00BFFF', '#B0E0E6', '#7B68EE', '#EE82EE','#00FFFF','#40E0D0', '#FF69B4', '#7FFFD4', '#8B008B','#B0E0E6','#40E0D0'],
              // 饼图数据
              series: {
                 name: '来源',
                type: 'pie',             //echarts图的类型   pie代表饼图
                radius : '60%',
            center: ['30%', '50%'],
          //整个饼图在整个父元素中的位置
                // data:''               //饼图数据
                data: [                  //每个模块的名字和值
                  { name: 'iPhone客户端', value: 35 },
                  { name: 'HUAWEI', value: 12},
                  { name: '微博weibo.com', value: 8 },
                  { name: '荣耀', value: 6},
                  { name: 'OPPO', value: 5 },
                  { name: 'vivo', value: 5 },
                  { name: 'Android客户端', value: 3 },
                  { name: '小米', value: 2 },
                  { name: 'HarmonyOS', value: 1 },
                  { name: '三星', value: 1 },
                  { name: '其它', value: 21 }
                  
                ],
                itemStyle: {
                  normal: {
                    label: {
                      show: false,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
                      position: 'inner',
                      fontSize: 24 //控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
                    },
                    labelLine: {
                      show: false//官网demo里外部标注上的小细线的显示隐藏    默认显示
                    }
                  }
                },
              }
    
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
          }
        }
    
      }
    
    </script>
    
    <style scoped>
    
    </style>
    
    