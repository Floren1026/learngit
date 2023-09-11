<template>
  <div id="myChart" :style="{ width: '500px', height: '300px', }"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.myChart() //函数调用
  },
  methods: {
    myChart() {
      let columnar = this.$echarts.init(document.getElementById('myChart'));
      columnar.setOption({
        tooltip: {
          formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: false },
            saveAsImage: { show: false }
          }
        },
        series: [
          {
            name: '当前事件热度值:',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '60%',

            axisLabel: {
              show: false,
              backgroundColor: "auto",
              borderRadius: 2,
              color: "#eee",
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: "#222"
            },

            axisLine: {
              lineStyle: {
                width: 20,
                color: [[0.1, 'green'], [0.2, 'yellow'], [0.3, 'orange'], [0.4, '#db555e'], [0.5, '#ba3779'], [1.1, '#881326']]
              }
            },
            axisTick: {
              show: false,
              length: 15,
              lineStyle: {
                color: 'auto'
              }
            },
            //刻度分割线样式
            splitLine: {
              show: false,
              length: 20,
              lineStyle: {
                color: 'white'
              }
            },
            //刻度数字样式

            detail: {
              //说明数字大小
              formatter: function (value) {
                return value;
              },
              offsetCenter: ['0%', '80%'],
              fontWeight: 'bolder',
              borderRadius: 3,
              backgroundColor: '#0085FF',
              fontSize: 28,
              width: 100,
              color: 'white',
              padding: [5, 15, 2, 15]
            },
            title: { color: 'white' },
            data: [{ value: 80, name: "当前事件热度" }]
          },
        ]
      })
    }
  }
};
</script>