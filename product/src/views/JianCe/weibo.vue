<template>
    <dv-border-box12>
        <span class="resou">新闻热搜</span>
        <!-- <el-select v-model="selectEmotionOption" class="m-2" placeholder="Select" size="small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select> -->

        <div class="alarm-infoList">
            <el-table :data="dataNews.data1" style="width: 100%" class="alarm-table"
                :header-cell-style="{ background: 'rgb(20 50 85)', color: '#ffffff', fontSize: '18px', textAlign: 'center' }"
                :row-style="{ background: 'rgba(20,48,70)', color: '#a5d2fd', fontSize: '18px' }">
                <el-table-column prop="title" label="标题" width="220" style="" />
                <el-table-column prop="resource" label="发布媒体" width="100" />
                <el-table-column prop="KeyWords" label="关键词" width="150" />
                <el-table-column prop="position" label="地点" />
            </el-table>
        </div>
    </dv-border-box12>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, reactive } from 'vue'
import { BorderBox12 as DvBorderBox12 } from '@kjgl77/datav-vue3'

// let selectEmotionOption = ref("3")
// const options = [
//     {
//         value: '0',
//         label: '积极',
//     },
//     {
//         value: '1',
//         label: '中性',
//     },
//     {
//         value: '2',
//         label: '消极',
//     },
//     {
//         value: '3',
//         label: '全部',
//     },
// ]

const dataNews = reactive({
    data1: []
});
const dataWeibo = ref();


let scrollHeight = 0
let currentScrollTop = 0
let maxScrollTop = 0
let timeInter = null
let timeInter2 = null
const tableNode = ref(null)
onMounted(() => {
    setTimeout(() => {
        updateList()
    }, 1000)
})

function updateList() {
    // 数据大于5条才会滑动
    if (dataNews.data1 && dataNews.data1.length > 5) {
        // 获取滑动区域DOM 最新版本的element-plus节点有变化, 此版本为1.2.0-beta.3
        tableNode.value = document.querySelector('.alarm-table').querySelector('.el-scrollbar__wrap')
        // 设置每次滑动几行
        scrollHeight = tableNode.value.querySelectorAll('tr')[0].offsetHeight * 7
        // 设置每次滑动的PX和滑动区域的高度
        tableNode.value.style.height = `${scrollHeight}px`
        // 获取最大滑动空间
        maxScrollTop = tableNode.value.firstElementChild.offsetHeight - scrollHeight
        // 开始
        restTimeInter()
    }
}

function restTimeInter() {
    // 清除所有定时器
    clearAllInterval()
    // 设置定时器
    timeInter = setInterval(setMultiLine, 4000)
}
function clearAllInterval() {
    clearInterval(timeInter)
    clearInterval(timeInter2)
}
function setScrollTop() {
    tableNode.value.scrollTop++
    if (tableNode.value.scrollTop >= currentScrollTop) { // 达到下次应该滑动的位置
        clearInterval(timeInter2)
    }
    if (tableNode.value.scrollTop > maxScrollTop) { // 滑到底了
        tableNode.value.scrollTop = maxScrollTop
        clearInterval(timeInter2)
    }
}
function setMultiLine() {
    // 下次应该滑到哪
    currentScrollTop = (tableNode.value.scrollTop || 0) + scrollHeight + currentScrollTop % scrollHeight
    if (tableNode.value.scrollTop >= maxScrollTop) { // 滑完了 重置
        currentScrollTop = 0
        tableNode.value.scrollTop = 0
        restTimeInter()
    } else {
        // 清除上一个定时器
        clearInterval(timeInter2)
        // 开始滑
        timeInter2 = setInterval(setScrollTop, 5)
    }
}

onMounted(() => {
    axios.get('http://localhost:8011/news').then(response => {
        console.log('新闻', response);
        dataNews.data1 = response.data;
    })
    axios.get('http://localhost:8011/news/weibo').then(response => {
        console.log('微博热搜', response.data);
        dataWeibo.value = response.data
    })
    console.log('启动正常');
});
</script>

<style>
.resou {
    position: relative;
    top: 15px;
    left: 220px;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 6px;
    background: linear-gradient(92deg,
            #0072ff 0%,
            #00eaff 48.8525390625%,
            #01aaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
}

.alarm-table {
    height: 560px;
    position: relative;
    top: 5px;
    border-radius: 10px;
}

.alarm-infoList {
    padding: 15px;
    box-sizing: border-box;

    :deep(.el-table) {
        background-color: transparent;
        color: #fff;

        th {
            background-color: transparent;
        }

        tr {
            color: #fff;
            background-color: transparent;

            &.el-table__row--striped {
                td.el-table__cell {
                    background-color: transparent;
                }
            }

            &:hover {
                td.el-table__cell {
                    background-color: transparent;
                }
            }
        }
    }
}
</style>