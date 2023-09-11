<template>
    <cesiumNavi/>
    <div class="weather"> 
        <weather/>
    </div>
    <div class="echarts1">
        <!-- <echarts1/> -->
    </div>
</template>

<script setup>
import cesiumNavi from './cesiumNavi.vue'
import weather from './weather.vue'

// import echarts1 from '/src/echarts/echarts.vue'
</script>

<style>
.weather{
    position:absolute;
    top:300px;
    background-color:transparent
}
.echarts1{
    position: absolute;
    top:300px;
    right:100px;
    background-color:azure;
}
</style>