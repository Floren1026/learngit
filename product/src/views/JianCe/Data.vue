<script setup lang="ts">import axios from 'axios'
import { reactive, ref, onMounted } from "vue";
import CountUp from "@/components/count-up";


const posNum = ref();
const negNum = ref();
const tolNum = ref();

onMounted(() => {
  //获取积极新闻
  axios.get('http://localhost:8011/news/positive').then(res => {
    posNum.value = res.data.length;
    console.log(res)
  })
  //获取总体
  axios.get('http://localhost:8011/news').then(res => {
    tolNum.value = res.data.length;
    console.log(res.data.length)
  })
  //获取消极
  axios.get('http://localhost:8011/news/negtive').then(res => {
    negNum.value = res.data.length;
    console.log(res.data.length)
  })
})

const duration = ref(2);
const state = reactive({
  alarmNum: 5,
  positiveNum: posNum,
  negativeNum: negNum,
  totalNum: tolNum,
});
</script>

<template>
  <ul class="user_Overview flex">
    <li class="user_Overview-item" style="color: #00fdfa">
      <div class="user_Overview_nums allnum">
        <CountUp :endVal="state.totalNum" :duration="duration" />
      </div>
      <p>全部信息</p>
    </li>
    <li class="user_Overview-item" style="color: #07f7a8">
      <div class="user_Overview_nums online">
        <CountUp :endVal="state.negativeNum" :duration="duration" />
      </div>
      <p>消极信息</p>
    </li>
    <li class="user_Overview-item" style="color: #e3b337">
      <div class="user_Overview_nums offline">
        <CountUp :endVal="state.positiveNum" :duration="duration" />
      </div>
      <p>积极&中性信息</p>
    </li>
    <li class="user_Overview-item" style="color: #f5023d">
      <div class="user_Overview_nums laramnum">
        <CountUp :endVal="state.alarmNum" :duration="duration" />
      </div>
      <p>预警消息</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.left-top {
  width: 100%;
  height: 100%;
}

.user_Overview {
  li {
    flex: 1;
    display: flex;

    p {
      text-align: center;
      font-size: 22px;
      position: relative;
      top: 95px;
      left: -90px
    }

    .user_Overview_nums {
      width: 120px;
      height: 120px;
      text-align: center;
      line-height: 100px;
      font-size: 22px;
      margin: 50px auto 30px;
      // background-size: cover;
      background-position: center center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
      }

      &.bgdonghua::before {
        animation: rotating 14s linear infinite;
      }
    }

    .allnum {
      &::before {
        background-image: url("@/assets/img/left_top_lan.png");
      }
    }

    .online {
      &::before {
        background-image: url("@/assets/img/left_top_lv.png");
      }
    }

    .offline {
      &::before {
        background-image: url("@/assets/img/left_top_huang.png");
      }
    }

    .laramnum {
      &::before {
        background-image: url("@/assets/img/left_top_hong.png");
      }
    }
  }
}
</style>
