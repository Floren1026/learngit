<template>
  <dv-border-box8 :dur="5">
    <span class="tit">情感占比</span>
    <div class="table" ref="chart"></div>
  </dv-border-box8>
</template>

<script setup>
import { BorderBox8 as DvBorderBox8 } from '@kjgl77/datav-vue3';
import { onMounted, ref, reactive, watch } from 'vue';
import * as echarts from 'echarts';
import axios from 'axios'

const posNum = ref();
const negNum = ref();
const tolNum = ref();

const dataNum = reactive({
  data: [posNum, negNum, tolNum],
  name: ['积极', '消极', '中性']
})

let chart = ref();

onMounted(() => {
  // console.log(posNum)
  console.log(dataNum.data[0])
  axios.get('http://localhost:8011/news/positive').then(res => {
    posNum.value = res.data.length;
    console.log(dataNum.data[0])
  })
  //获取总体
  axios.get('http://localhost:8011/news').then(res => {
    tolNum.value = res.data.length;
    // console.log(res.data.length)
  })
  //获取消极
  axios.get('http://localhost:8011/news/negtive').then(res => {
    negNum.value = res.data.length;
    // console.log(res.data.length)
  })

  const myChart = echarts.init(chart.value);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        fontSize: 15,
        color: 'white'
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '75%',
        data: [
          // { value: 1048, name: '积极' },
          // { value: 735, name: '中性' },
          // { value: 580, name: '消极' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          fontSize: 18,
          color: 'white'
        }
      }
    ]
  };

  // 监听dataNum的变化
  watch(dataNum, (newValue, oldValue) => {
    // 在这里执行你希望在dataNum数据准备好后执行的操作
    console.log('dataNum changed:', newValue);

    // 提取dataNum中的数据
    const emotions = dataNum.data.map(refItem => refItem.value);
    const emotionNames = dataNum.name;

    const formattedData = emotions.map((value, index) => {
      return {
        name: emotionNames[index],
        value: value
      };
    });
    // 将数据设置到echarts配置项中
    option.series[0].data = formattedData;
    // option.xAxis.data = emotionNames; // 如果需要设置x轴数据的话

    console.log(formattedData.value, formattedData.name)

    myChart.setOption(option);
  });
});
</script>

<style>
.table {
  width: 100%;
  height: 100%;
  padding: 30px;
}

.tit {
  position: relative;
  left: 215px;
  top: 15px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 6px;
  background: linear-gradient(92deg,
      #0072ff 0%,
      #00eaff 48.8525390625%,
      #01aaff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>