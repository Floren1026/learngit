<template>
    <div class="news">
        <div class="card-title">
            <div class="titleSource" style="display: inline;">腾讯新闻热点</div>
        </div>
        <div id>
            <ul>
                <li v-for="ns in newsList.newsData" :key="ns.tid">
                    <!-- <a href="https://baidu.com" target="_blank"> -->
                    <router-link active-class="active" :to="{
                        path: 'newsdetail2',
                        query: {
                            id: ns.tid
                        }
                    }" target="_blank">

                        <div class="newsBox">
                            <div class="content-title" target="_blank">
                                <div class="topicTitle" :title="ns.title">
                                    <span class="content-logo" style="background: url('/src/assets/img/tengxun.png');"></span>
                                    <span class="newstitle">{{ ns.title }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="over-tips">
                            <span class="newsSource">来源：{{ ns.source }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="newAtt" style="color: rgb(249, 114, 114); ">{{ ns.characterLabel }}</span>
                        </div>
                    </router-link>
                    <!-- </a> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import './hotNews.css'
import axios from 'axios'
import { reactive, toRefs, watch, onMounted } from 'vue'

const newsList = reactive({
    newsData: []
})

const props = defineProps({
    selectEmotionOption: String
})

onMounted(() => {
    // 在组件挂载时,手动触发一次效果
    fetchData(props.selectEmotionOption)
})

watch(() => props.selectEmotionOption, (newValue) => {
    fetchData(newValue)
})
const fetchData = (value) => {
    if (value === "3") {
        axios.get('http://localhost:8011/News/TengXun')
            .then(response => {
                newsList.newsData = response.data
                // console.log(newsList.newsData)
            })
            .catch(error => {
                console.log('请求失败', error.message)
            })
    } else {
        // console.log('请求的新闻情感类型不是全部') 
        axios.get('http://localhost:8088/News/TengXunByEmotion', { params: { numLabel: value } })
            .then(response => {
                newsList.newsData = response.data
                // console.log(newsList.newsData)
            })
            .catch(error => {
                console.log('请求失败', error.message)
            })
    }
};
</script>

<style>
.news::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
}
</style>