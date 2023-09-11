<template>
    <div class="content_wrap">
        <div class="mainBody">
            <div class="leftcolumn">
                <div class="card" style="border: 1px solid  #57595f;">
                    <div class="card-body">
                        <h4 class="card-title">要把长江文化保护好传承好弘扬好</h4>
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
                        <p>延续历史文脉，坚定文化自信】习近平：长江造就了从巴山蜀水到江南水乡的千年文脉，是中华民族的代表性符号和中华文明的标志性象征，是涵养社会主义核心价值观的重要源泉。要把长江文化保护好、传承好、弘扬好，延续历史文脉，坚定文化自信。
                        </p>
                        <p>这段话出自2020年11月14日习近平总书记在全面推动长江经济带发展座谈会上发表的讲话。 12:00-13:00</p>
                        <p>长江发源于青藏高原，流经江汉平原、江南水乡，横贯东西，绵延万里，在中华大地上奔腾了千万年。生活在长江两岸的一代代中华儿女在辛勤劳作、商贸交流往来中，形成了各具地域特色又融为一体的流域文化，流传至今，影响深远。譬如，过大年打糍粑、端午节赛龙舟、中秋燃灯赏月等传统习俗，以及制茶、酿酒、刺绣、制瓷等传统工艺，在今天仍是沿江居民日常生活的重要组成部分。从三峡、三星堆到黄鹤楼、岳阳楼，再到滕王阁、苏州园林，长江沿线的名胜古迹星罗棋布，是我们了解历史、丰富生活的好去处。同时，各个历史时期文人墨客创作出的关于长江的诗词歌赋，如李白的《早发白帝城》、张若虚的《春江花月夜》、苏轼的《念奴娇·赤壁怀古》等千古名篇传唱至今，仍在滋养着我们的精神世界……
                        </p>

                        <p>目前，长江沿线省市共有全国重点文物保护单位1872处、省级文物保护单位7320处、国家历史文化名城52座、国家级非遗代表性项目852项、世界遗产20多项。它们承载着长江流域民众及中华民族的集体记忆、人文精神、价值理念、道德规范等，共同构成了博大精深的长江文化，是中华民族的代表性符号和中华文明的标志性象征，也是涵养社会主义核心价值观的重要源泉。
                        </p>
                        <p>把长江文化保护好、传承好、弘扬好，对我们今天延续历史文脉、坚定文化自信有重要意义。去年年初，长江国家文化公园建设正式启动，工程涉及的13个省市区以此为契机，积极采取多项措施，加大对长江文化的保护传承发展力度。从派出多支考古调查队开展文物资源调查工作，到增加人力财力整理和修复古籍等文物，从向公众免费开放考古博物馆，到举办各类生动趣味的文物展、文化展，从创作推出一系列与长江文化息息相关的文艺作品，到打造具有区域特色的长江文化节，各地在下大功夫保护好、传承好长江文化的同时，也借助本地独特的文化资源优势培育和发展文化旅游新项目，使长江文化资源成为当地高质量发展的新动能、新优势。
                        </p>
                        <p>近日，文化和旅游部、国家文物局、国家发展改革委联合印发《长江文化保护传承弘扬规划》，提出挖掘弘扬长江文化内涵、全面推进长江文物和文化遗产系统保护、推出长江题材优秀文艺作品、提升长江流域公共文化服务水平、推动长江流域文化产业和旅游业提档升级等多个任务。各地各有关部门要加强组织协调、完善实施机制，逐步推进重点任务、重点工程项目落地生根，推动长江文化更好惠及人民群众，使长江文化成为社会主义文化强国建设和长江经济带高质量发展的重要支撑。
                        </p>
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
                        <a href="#" style="padding-left: 20px; color: #00deeb;">文化自信、长江文化、传承、弘扬、旅游</a><br>
                        <!-- <a href="#" style="padding-left: 20px; color: #00deeb;">长江文化</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">传承</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">弘扬</a><br>
                        <a href="#" style="padding-left: 20px; color: #00deeb;">旅游</a> -->
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
                    <div class="tuijian-context" style="padding-top: 10px; padding-left: 30px;">
                        <ul style="list-style-type: none; padding-bottom: 10px;">
                            <li><a href="#" style="color: #00deeb">推荐1</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐2</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐3</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐4</a></li>
                            <li><a href="#" style="color: #00deeb;">推荐5</a></li>

                        </ul>
                    </div>
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


axios.post('http://localhost:8088/News/TengXunById',
    { id: id }
).then(
    response => {
        newsList.newsData = response.data
        console.log(newsList.newsData)
        const { newsData } = toRefs(newsList);
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
        { name: '积极', value: 3 },
        { name: '中性', value: neutral_num[0] },
        { name: '消极', value: 1 }
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