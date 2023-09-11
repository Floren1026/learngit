<template>
    <div class="container" id="con1">
        <div class="nav">
            <div class="time">{{ dataWeather.localTime }}</div>
            <div class="city" @click="changeCity">切换城市</div>
        </div>

        <div class="city-info">
            <p class="city">{{ dataWeather.mapData.city }}</p>
            <p class="weather1">{{ dataWeather.mapData.weather }}</p>
            <h2 class="temp">
                <em>{{ dataWeather.mapData.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力: {{ dataWeather.mapData.windPower }}</span> |
                <span>风向: {{ dataWeather.mapData.windDirection }}</span> |
                <span>空气湿度: {{ dataWeather.mapData.humidity }} %</span>
            </div>
        </div>

        <div class="future" v-if="dataWeather.futureMapData.length > 0">
            <div class="group">
                明天:
                <span class="tm">白天: {{ dataWeather.futureMapData[1].dayTemp }}℃
                    {{ dataWeather.futureMapData[1].dayWeather }}
                    {{ dataWeather.futureMapData[1].dayWindDir }}
                    {{ dataWeather.futureMapData[1].dayWindPower }}
                </span>
                <span class="tm">夜间: {{ dataWeather.futureMapData[1].nightTemp }}℃
                    {{ dataWeather.futureMapData[1].nightWeather }}
                    {{ dataWeather.futureMapData[1].nightWindDir }}
                    {{ dataWeather.futureMapData[1].nightWindPower }}
                </span>
            </div>
            <div class="group">
                后天:
                <span class="tm">白天: {{ dataWeather.futureMapData[2].dayTemp }}℃
                    {{ dataWeather.futureMapData[2].dayWeather }}
                    {{ dataWeather.futureMapData[2].dayWindDir }}
                    {{ dataWeather.futureMapData[2].dayWindPower }}
                </span>
                <span class="tm">夜间: {{ dataWeather.futureMapData[2].nightTemp }}℃
                    {{ dataWeather.futureMapData[2].nightWeather }}
                    {{ dataWeather.futureMapData[2].nightWindDir }}
                    {{ dataWeather.futureMapData[2].nightWindPower }}
                </span>
            </div>
        </div>

        <div class="echart-container" ref="echartContainer"></div>

        <van-popup v-model:show="dataWeather.showChange"  :style="{ height: '30%' }">
            <van-area title="选择城市" :area-list="dataWeather.areaList1" visible-item-count="4" @cancel="dataWeather.showChange = false" columns-num="2"
                @confirm="selectCity" />
        </van-popup>
    </div>
</template>
  
<script setup>
import * as echarts from "echarts";
import { areaList } from "@vant/area-data";
import { reactive, onMounted, nextTick, ref } from 'vue'

let echartContainer = ref();

const dataWeather = reactive({
    localTime: "",
    mapData: {},
    futureMapData: [],
    seriesData: [],
    seriesNightData: [],
    areaList1: areaList,
    showChange: false,
});

onMounted(() => {
    setInterval(() => {
        dataWeather.localTime = getLocalTime();
    }, 1000);

    initMap();
})
//获取当前本地时间
function getLocalTime() {
    return new Date().toLocaleTimeString();
};
function initMap() {
    //AMap.plugin 高德api加载插件，加载成功执行回调函数
    AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
            if (status === "complete" && result.info === "OK") {
                console.log(result.city);
                getWeatherData(result.city);
            }
        });
    });
};
function getWeatherData(cityName) {
    AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
            console.log(err, data);
            dataWeather.mapData = data;
        });

        //执行实时天气信息查询
        weather.getForecast(cityName, function (err, data) {
            dataWeather.futureMapData = data.forecasts;
            console.log(dataWeather.futureMapData);

            // 每天的温度
            dataWeather.seriesData = [];
            dataWeather.seriesNightData = [];
            data.forecasts.forEach((item) => {
                dataWeather.seriesData.push(item.dayTemp);
                dataWeather.seriesNightData.push(item.nightTemp);
            });

            nextTick(() => {
                initEchart();
            });
        });
    });
};
function initEchart() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(echartContainer.value);

    // 绘制图表
    let option = {
        title: {
            text: "温度走势",
            textStyle:{
                color:'#fff',
            }
        },
        tooltip: {},
        xAxis: {
            data: ["今天", "明天", "后天", "三天后"],
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                },
            },
        },
        yAxis: {
            min: "-10",
            max: "50",
            interval: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff",
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: ["red", "green", "yellow"],
                },
            },
        },
        series: [
            {
                name: "白天温度",
                type: "line",
                data: dataWeather.seriesData,
            },
            {
                name: "夜间温度",
                type: "line",
                data: dataWeather.seriesNightData,
                lineStyle: {
                    color: "red",
                },
            },
        ],
    };
    myChart.setOption(option);
};
function changeCity() {
    dataWeather.showChange = true;
};
function selectCity(e) {
    console.log(e.selectedOptions[1].text)
    getWeatherData(e.selectedOptions[1].text);
    dataWeather.showChange = false;
};
</script>
  
<style lang="less" scoped>
.container {
    position: relative;
    height: 600px;
    width: 480px;
    left: 15px;
    background: #0b3444;
    opacity: 0.6;
    color: #fff;
    font-size: 16px;
}

.nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.city-info {
    text-align: center;
    color: #fff;

    .temp {
        font-size: 26px;

        em {
            font-size: 34px;
            font-style: normal;
        }
    }
}

.future {
    margin-top: 30px;
    padding: 0 10px;

    .group {
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.6);
        color: rgba(16, 16, 16, 1);
        font-size: 13px;
        margin-bottom: 10px;
        padding: 0 10px;

        .tm {
            color: #fff;
        }

        .tm:last-child {
            margin-left: 8px;
        }
    }
}

.echart-container {
    width: 100%;
    height: 340px;
}
</style>
  