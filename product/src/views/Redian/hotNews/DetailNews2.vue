<template>
    <div class="content_wrap">
        <div class="mainBody">
            <div class="leftcolumn">
                <div class="card" style="border: 1px solid  #57595f;">
                    <div class="card-body">
                        <h4 class="card-title">{{ newsList.newsData[0].title }}</h4>
                        <div class="detail-tips">
                            <span id="source">
                                来源：{{ newsList.newsData[0].source }}
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="author">
                                作者：{{ newsList.newsData[0].author }}
                                <!-- guanjianci:{{newsList.newsData[0].keywords  }} -->
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="publish_time">
                                发布时间：2023-8-4 11:23
                            </span>
                            <span id="yuanwen" style="position: absolute; left: 800px;">
                                <a href="#" style="color: #37a2d8;">查看原文</a>
                            </span>
                            <!-- <span id="export">
                                <a href="#">查看原文</a>
                            </span> -->
                        </div>
                    </div>
                </div>

                <div class="context-body">
                    <div class="context">
                        <p v-for="s in newsList.newsData" :key="s.id">{{ s.content }}</p>
                        <!-- <p>{newsList.newsData[0].content}</p> -->
                    </div>
                </div>
            </div>

            <div class="rightColumn">
                <div class="emotion" style="border: 1px solid  #57595f;">
                    <div class="emotion-title">
                        <div style="font-size: 20px; padding-left: 10px; padding-top:5px; background: linear-gradient(92deg,
                        #0072ff 0%,
                        #00eaff 48.8525390625%,
                        #01aaff 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;">情感分析图</div>
                    </div>

                    <div id="emotionPic" style="padding-top: 10px; width: 280px; height: 240px;  margin: 0 auto;">
                        <!-- <img src="../../assets/img/emotion.jpg" alt="" style="width: 70%; height: 60%;  padding-left: 90px; padding-bottom: 10px;"> -->
                        <div id="sentenceEmotion" style="width: 100%; height: 100%; margin: 0 auto;"></div>
                    </div>
                </div>

                <div class="keywords" style="margin-top: 20px; border: 1px solid  #57595f;">
                    <div class="kw1" style="font-size: 20px;">
                        <div style="padding-left: 10px; padding-top:5px; background: linear-gradient(92deg,
                        #0072ff 0%,
                        #00eaff 48.8525390625%,
                        #01aaff 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;">关键词</div>
                    </div>
                    <div class="kw2" style="padding-top: 10px; padding-left: 10px; padding-bottom: 10px;">
                        <!-- <a href="#" v-for="kw in newsList.newsData" :key="kw.index" 
                            style="padding-left: 20px; color: #00deeb;">{{kw.keywords}}</a> -->
                        <!-- <a href="#" style="padding-left: 20px; color: #00deeb;">文化自信</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">长江文化</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">传承</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">弘扬</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">旅游</a> -->
                        <a href="#" style="padding-left: 20px; color: #00deeb;">{{ newsList.newsData[0].keywords }}</a>
                    </div>
                </div>

                <div class="tuijian" style="margin-top: 20px; border: 1px solid  #57595f;">
                    <div class="tuijian-title" style="font-size: 20px; padding-left: 10px; padding-top:5px; 
                    background: linear-gradient(92deg,
                    #2280f5 0%,
                    #00eaff 48.8525390625%,
                    #01aaff 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">相关推荐</div>
                    <!-- <div class="tuijian-context" style="padding-top: 10px; padding-left: 30px;">
                        <ul style="list-style-type: none; padding-bottom: 10px;">
                            <li><a href="#" style="color: #00deeb">{{ recommendNewsList.recommendData }}</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐2</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐3</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐4</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐5</a></li>
                            
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useRoute } from 'vue-router'
import { reactive, toRefs, ref, onMounted, getCurrentInstance } from 'vue'
import axios from 'axios'

const route = useRoute()
const id = route.query.id

console.log(id)


const newsList = reactive({
    newsData: []
})

const recommendNewsList = reactive({
    recommendData: []
})

//获相关推荐新闻
onMounted(() => {
    axios.get('http://localhost:8088/News/TengXunRecommendNews',
        { params: { id: id } }
    ).then(
        response => {
            recommendNewsList.recommendData = response.data
            console.log(recommendNewsList.recommendData)
            // const { newsData } = toRefs(newsList);
        },
        error => {
            console.log('根据id查询腾讯数据请求失败', error.message)
        }
    )
})


axios.get('http://localhost:8011/News/TengXunById',
    { params: { id: id } }
).then(
    response => {
        newsList.newsData = response.data
        // console.log(newsList.newsData)
        // const { newsData } = toRefs(newsList);
    },
    error => {
        console.log('根据id查询腾讯数据请求失败', error.message)
    }
)

// let internalInstance = getCurrentInstance();
// let echarts = internalInstance.appContext.config.globalProperties.$echarts;
// let positive_num=ref()
// let neutral_num=ref()
// let negative_num=ref()

onMounted(() => {
    const { newsData } = toRefs(newsList);
    const positive_num = newsList.newsData.map(item => item.positive);
    const neutral_num = newsList.newsData.map(item => item.neutral);
    const negative_num = newsList.newsData.map(item => item.negative);
    // console.log(positive_num[0])
    // console.log(neutral_num)
    // console.log(negative_num)


    const numData = reactive([
        { name: '积极', value: positive_num[0] },
        { name: '中性', value: neutral_num[0] },
        { name: '消极', value: negative_num[0] }
    ])

    console.log(numData)

    let internalInstance = getCurrentInstance();
    let echarts = internalInstance.appContext.config.globalProperties.$echarts;

    let dom = document.getElementById("sentenceEmotion")
    let mychart = echarts.init(dom)

    mychart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{d}%'
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            // left:'0%',
            // top:'5%',
            textStyle: {
                color: '#fff',
                fontSize: 10
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '70%',
                itemStyle: {
                    borderRadius: 2,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',
                    // textStyle : {                   
                    //             align : 'center',
                    //             baseline : 'middle',
                    //             fontFamily : '微软雅黑',
                    //             fontSize : 13,
                    //             fontWeight : 'bolder'
                    //         }
                },
                data: numData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })

});



    // export default {
    //     name:'DetailNews',
    // }
</script>
  
<style scoped lang="scss">
.mainBody {
    width: 100%;
    height: 980px;
    padding: 16px 16px 16px 16px;
    box-sizing: border-box;
    background-image: url("./src/assets/img/pageBg.png");
    background-size: cover;
    background-position: center center;
    color: #d2d4d8;
}

.leftcolumn {
    float: left;
    width: 65%;
    margin-bottom: 5px;
    /* margin-left: 10px; */
    margin-right: 10px;
    /* background-color: #0072ff ; */
    text-align: left;
    /* 外边框 */
    /* border-style: solid;
            border-color: antiquewhite;
            border-width: 2px; */
}

.rightColumn {
    /* 都是向左浮动可以在一行 */
    float: right;
    width: 30%;
    margin-left: 30px;
    /* 外边框 */
    /* border-style: solid;
            border-color: antiquewhite;
            border-width: 2px; */
}

.card {
    color: #d2d4d8;
    padding-bottom: 5px;
}

.card-title {
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    background: linear-gradient(92deg,
            #0072ff 0%,
            #00eaff 48.8525390625%,
            #01aaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.detail-tips {
    font-size: 8px;
    color: #919295;
    padding-left: 20px;
}

.context-body {
    margin-top: 20px;
    width: 100%;
    height: 80%;
    border: 1px solid #57595f;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

p {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    //   padding: 10px;
    text-indent: 2em;
    color: #37a2d8;

}
</style>