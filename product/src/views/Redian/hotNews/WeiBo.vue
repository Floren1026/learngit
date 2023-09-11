<template>
    <div class="news">
        <div class="card-title">
            <div class="titleSource" style="display: inline;">微博热点</div>
        </div>
        <div>
            <ul>
                <li v-for="ns in newsList.newsData" :key="ns.id">
                    <router-link active-class="active" :to="{
                        path: 'newsdetail2',
                        query: {
                            id: ns.tid
                        }
                    }" target="_blank">

                        <div class="newsBox">
                            <div class="content-title">
                                <div class="topicTitle" :title="ns.title">
                                    <span class="content-logo"
                                        style="background: url('/src/assets/img/weibo.png');"></span>
                                    <span class="newstitle">{{ ns.title }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="over-tips">
                            <span class="newsSource">来源：{{ ns.source }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="newAtt" style="color: rgb(249, 114, 114); ">{{ ns.attribute }}</span>
                        </div>
                        <!-- </a> -->
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import './hotNews.css'
import axios from 'axios'
import { reactive } from 'vue'

const newsList = reactive({
    newsData: []
})

axios.get('http://localhost:8011/News/WeiBo1')
    .then(response => {
        newsList.newsData = response.data
    })
    .catch(error => {
        console.log('请求失败', error.message)
    })
</script>