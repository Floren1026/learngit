<template>
    <div class="mainBody">
        <div class="selectAtt">
            <span class="selectTitle">新闻情感类型：</span>
            <!-- <select id="emotionType" v-model="selectEmotionOption">
                <option value="3">全部</option>
                <option value="0">积极</option>
                <option value="1">中性</option>
                <option value="2">消极</option>
            </select> -->

            <el-select v-model="selectEmotionOption" class="m-2" placeholder="Select" size="small">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="leftcolumn">
            <WeiBo />
            <TengXun :selectEmotionOption="selectEmotionOption" />
        </div>

        <div class="centerColumn">
            <SearchCloud />
            <ZhongXin />
        </div>

        <div class="rightColumn">
            <WangYi :selectEmotionOption="selectEmotionOption" />
            <XinLang />
        </div>
    </div>
</template>

<script setup lang="ts">
import WeiBo from "./hotNews/WeiBo.vue"
import TengXun from "./hotNews/TengXun.vue"
import WangYi from "./hotNews/WangYi.vue"
import XinLang from "./hotNews/XinLang.vue"
import ZhongXin from "./hotNews/ZhongXin.vue"
import SearchCloud from "./hotNews/SearchCloud.vue"
import { ref, watch } from "vue"

let selectEmotionOption = ref("3")
const options = [
    {
        value: '0',
        label: '积极',
    },
    {
        value: '1',
        label: '中性',
    },
    {
        value: '2',
        label: '消极',
    },
    {
        value: '3',
        label: '全部',
    },
]


console.log(selectEmotionOption.value)
</script> 


<style scoped lang="scss">
.mainBody {
    width: 100%;
    padding: 16px 16px 16px 16px;
    box-sizing: border-box;
    background-image: url("../assets/img/pageBg.png");
    background-size: cover;
    background-position: center center;
}

.selectTitle {
    color: #d2d4d8;
    font-weight: 600;
    font-size: 20px;
    padding-left: 20px;
    background: linear-gradient(92deg,
            #0072ff 0%,
            #00eaff 48.8525390625%,
            #01aaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#emotionType {
    background-color: #37a2d8;
    color: #d2d4d8;
    font-weight: 600;
    font-size: 18px;
    padding-left: 20px;
    background: linear-gradient(92deg,
            #0072ff 0%,
            #00eaff 48.8525390625%,
            #01aaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.leftcolumn {
    float: left;
    width: 25%;
    margin-bottom: 10px;
    margin-right: 10px;
    text-align: left;
}

.centerColumn {
    float: left;
    width: 45%;
    margin-bottom: 10px;
    margin-left: 20px;
}

.rightColumn {
    float: right;
    width: 25%;
    margin-bottom: 10px;
}
</style>