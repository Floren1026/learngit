<template>
    <dv-border-box-13>
        <span class="fs-xl">媒体活跃度分析</span>
        <dv-scroll-board class="dv-scr-board" :config="config" />
    </dv-border-box-13>
</template>
  
<script setup>
import { reactive, ref } from 'vue'

const config = ref({
    header: ['媒体来源', '发布平台', '活跃度'],

    data: [
        ['新浪新闻', '新浪网', '<span style="color:#fb7293">↑75%</span>'],
        ['微信公众号', '腾讯网', '<span  style="color:#67e0e3">↓33%</span>'],
        ['网易新闻', '澎湃新闻', '<span  style="color:#fb7293">↑90%</span>'],
        ['南方财富网', '腾讯网', '<span  style="color:#fb7293">↑94%</span>'],
        ['澎湃新闻', '澎湃新闻', '<span  style="color:#fb7293">↑95%</span>'],
        ['潇湘晨报', '澎湃新闻', '<span  style="color:#67e0e3">↓63%</span>'],
        ['财联社', '人民网', '<span  style="color:#fb7293">↑84%</span>'],
        ['时代财经', '人民网', '<span  style="color:#67e0e3">↓46%</span>'],
        ['新华社', '人民网', '<span  style="color:#67e0e3">↓13%</span>'],
        ['人民日报', '人民网', '<span  style="color:#fb7293">↑76%</span>'],
    ],
    rowNum: 8, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    // index: true,
    columnWidth: [120],
    align: ['center']
}
);
</script>
  
<style lang="scss" scoped>
$box-height: 500px;
$box-width: 500px;

.fs-xl {
    position: relative;
    top: 15px;
    left: 165px;
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

.dv-scr-board {
    // position: relative;
    padding: 20px;
    height: 570px;
}
</style>
  