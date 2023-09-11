<template>
    <div class="vue-seamless-scroll">
      <VueSeamlessScroll :data="listData" class="warp" :class-option="classOption">
        <div class="row" v-for="item in listData" :key="item.id">
          <div>{{ item.title }}</div>
          <div>{{ item.date }}</div>
        </div>
      </VueSeamlessScroll>
    </div>
  </template>
  <script>
  import VueSeamlessScroll from "vue-seamless-scroll";
  export default {
    components: { VueSeamlessScroll },
    props: {
      listData: {
        type: Array,
        default: () => []
      },
      classOption: {
        type: Object,
        default: () => {}
      }
    }
  };
  </script>
  <style scoped>
  .vue-seamless-scroll {
    width: 100%;
    height: 100%;
    padding: 12px 5px;
    box-sizing: border-box;
  }
  .warp {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  </style>