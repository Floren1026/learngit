<script setup lang="ts">
import { reactive } from "vue";
import dayjs from 'dayjs';
import type { DateDataType } from "./index.d"
import { useSettingStore } from "@/stores/index"

const dateData = reactive<DateDataType>({
  dateDay: "",
  dateYear: "",
  dateWeek: "",
  timing: null,
});

const { setSettingShow } = useSettingStore()
const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
const timeFn = () => {
  dateData.timing = setInterval(() => {
    dateData.dateDay = dayjs().format("YYYY-MM-DD hh : mm : ss");
    dateData.dateWeek = weekday[dayjs().day()];
  }, 1000);
};
timeFn()
</script>

<template>
  <div class="d-flex jc-center title_wrap">
    <div class="zuojuxing"></div>
    <div class="youjuxing"></div>
    <div class="guang"></div>

    <div class="d-flex jc-center">
      <div class="title">
        <span class="title-text"><router-link to="/">热点舆情可视化分析平台</router-link></span>
      </div>
    </div>
    <div class="leftmenus">
      <div class="menu"><router-link to="redian">今日热点</router-link></div>
      <div class="menu"><router-link to="jiance">监测分析</router-link></div>
    </div>
    <div class="rightmenus">
      <div class="menu"><router-link to="yuqing">舆情分析</router-link></div>
      <div class="menu"><router-link to="chuanbo">传播分析</router-link></div>
    </div>
    <div class="timers">
      {{ dateData.dateYear }} {{ dateData.dateWeek }} {{ dateData.dateDay }}

      <div class="setting_icon" @click="setSettingShow(true)">
        <img src="@/assets/img/headers/setting.png" alt="设置">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title_wrap {
  height: 60px;
  background-image: url("../assets/img/top.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-bottom: 4px;

  .guang {
    position: absolute;
    bottom: -26px;
    background-image: url("../assets/img/guang.png");
    background-position: 80px center;
    width: 100%;
    height: 56px;
  }

  .zuojuxing,
  .youjuxing {
    position: absolute;
    top: -2px;
    width: 140px;
    height: 6px;
    background-image: url("../assets/img/headers/juxing1.png");
  }

  .zuojuxing {
    left: 11%;
  }

  .youjuxing {
    right: 11%;
    transform: rotate(180deg);
  }

  .timers {
    position: absolute;
    right: 0;
    top: 50px;
    font-size: 18px;
    display: flex;
    align-items: center;

    .setting_icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-left: 12px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.title {
  position: absolute;
  top: 8px;
  left: 710px;
  text-align: center;
  background-size: cover;
  color: transparent;
  height: 60px;
  line-height: 46px;

  .title-text {
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 6px;
    width: 100%;
    background: linear-gradient(92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.rightmenus,
.leftmenus {
  position: absolute;
  display: flex;
  top: 10px;
  width: 280px;
  font-size: 23px;
  font-weight: 1000;
  color: transparent;
  background-size: cover;
  justify-content: space-around;

  .menu {
    background: linear-gradient(92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.leftmenus {
  left: 150px;
}

.rightmenus {
  right: 150px
}</style>
