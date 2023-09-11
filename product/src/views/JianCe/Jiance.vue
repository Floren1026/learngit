<template>
    <div class="data">
        <div class="Title1">
            <ItemWrap class="contetn_center-bottom" title="数据总览">
            </ItemWrap>
        </div>
        <Data1 />
        <div class="tol">
            <div class="media">
                <media />
            </div>
            <div class="emotion1">
                <emotion />
                <div class="event">
                    <Event />
                </div>
            </div>
            <div class="weibo">
                <weibo />
            </div>
        </div>
    </div>
</template>

<script setup>
import Data1 from "./Data.vue";
import media from './media.vue'
import emotion from './emotion.vue'
import Event from './Event.vue'
import weibo from './weibo.vue'
</script>

<style>
.data {
    height: 100px;
    width: 100%;
}

.Title1 {
    margin: 50px 0px 0;
    font-size: 30px;
}

.tol {
    display: flex;
    width: 100%;
}

.media {
    position: relative;
    left: 30px;
    top: 20px;
    width: 550px;
    height: 650px;
}

.emotion1 {
    position: relative;
    left: 115px;
    top: 30px;
    width: 550px;
    height: 350px;
}

.event {
    position: relative;
    top: 15px;
    width: 555px;
    height: 280px;
}

.weibo{
    position: relative;
    top:30px;
    left: 200px;
    width: 570px;
}
</style>