<template>
    <dv-border-box1>
        <div class="pictorialBar" ref="chart"></div>
    </dv-border-box1>
</template>
  
<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import { BorderBox1 as DvBorderBox1 } from '@kjgl77/datav-vue3';
import * as echarts from 'echarts';
import axios from 'axios'

let chart = ref();

const wenyuNum = ref();
const jiaoyuNum = ref();
const tianqiNum = ref();
const waijiaoNum = ref();
const jinrongNum = ref();
const minshengNum = ref();

const dataNum = reactive({
    data: [minshengNum, wenyuNum, jiaoyuNum, tianqiNum, waijiaoNum, jinrongNum],
    name: ['民生', '文娱', '教育', '天气', '外交', '金融']
})

onMounted(() => {
    axios.get('http://localhost:8011/news/wenyu').then(res => {
        wenyuNum.value = res.data.length;
    })
    axios.get('http://localhost:8011/news/jiaoyu').then(res => {
        jiaoyuNum.value = res.data.length;
    })
    axios.get('http://localhost:8011/news/tianqi').then(res => {
        tianqiNum.value = res.data.length;
    })
    axios.get('http://localhost:8011/news/waijiao').then(res => {
        waijiaoNum.value = res.data.length;
    })
    axios.get('http://localhost:8011/news/jinrong').then(res => {
        jinrongNum.value = res.data.length;
    })
    axios.get('http://localhost:8011/news/minsheng').then(res => {
        minshengNum.value = res.data.length;
    })


    const myChart = echarts.init(chart.value);

    const option = {
        grid: {
            left: '12%',
            top: '18%',
            bottom: '15%',
            right: '5%'
        },
        xAxis: {
            data: [],
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 129, 109,.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#9ff',
                    fontSize: 18
                }
            }
        },
        yAxis: [{
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 0.5,
                    type: 'dashed'
                }
            }
        }
        ],
        series: [{
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 15,
                color: '#08DFFE',
                fontWeight: 'bolder',
                fontSize: 15,
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#9A11FF'
                        },
                        {
                            offset: 1,
                            color: '#08DFFE'
                        }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: []
        }]
    }
    // 监听dataNum的变化
    watch(dataNum, (newValue, oldValue) => {
        // 在这里执行你希望在dataNum数据准备好后执行的操作
        console.log('dataNum changed:', newValue);

        // 提取dataNum中的数据
        const classes = dataNum.data.map(refItem => refItem.value);
        const emotionNames = dataNum.name;

        const formattedData = classes.map((value, index) => {
            return {
                // name: emotionNames[index],
                value: value
            };
        });
        // 将数据设置到echarts配置项中
        option.series[0].data = formattedData;
        option.xAxis.data = emotionNames; // 如果需要设置x轴数据的话

        // console.log(formattedData.value, formattedData.name)

        myChart.setOption(option);
    });
})
</script>

<style>
.pictorialBar {
    width: 100%;
    height: 100%;
    top: 20px;
}
</style>