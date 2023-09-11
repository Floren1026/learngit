<template>
    <div id="contain">
        <div id="cesiumContainer"></div>
        <el-button class="navibutton" @click="search">导航</el-button>
        <el-input class="input1" v-model="data.input1" placeholder="请输入起点地点名称" />
        <el-input class="input2" v-model="data.input2" placeholder="请输入终点地点名称" />
        <el-button class="clearButton" @click="clear">清除</el-button>
    </div>
</template>

<script setup>
import { Viewer } from "cesium";
import * as Cesium from 'cesium'
import axios from 'axios'
import $ from 'jquery'
import { ref, onMounted, reactive } from 'vue'

import weather from './weather.vue'

var viewer = ref('');
const cesiumKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NTAyMmQyNC00Zjk4LTQ3NDgtYWNkOC05NDIxYzRlMjU0NmYiLCJpZCI6MTYxODc3LCJpYXQiOjE2OTI2OTQ5MDZ9.xRUK4rODoruE9OQfeAUHwo5GuoQSU1qozRlPNgSM8Fc';
const aMapKey = '85c52f9b2c72a6ebcd4465b51938f62d';
const baiduKey = 'XsoGA195TDddC30RWMTYAnZGpbOU1GAV';

const data = reactive({
    input1: '',
    input2: '',
});

function createMap() {
    Cesium.Ion.defaultAccessToken = cesiumKey;
    viewer = new Cesium.Viewer('cesiumContainer', {
        timeline: false,
        fullscreenButton: false,
        animation: false,
        infoBox: false,
        imageryProvider: new Cesium.UrlTemplateImageryProvider({ url: " http://webrd02.is.autonavi.com/appmaptile? lang=zh_cn&size = 1&scale = 1&style = 8&x = {x} &y = {y} &z ={z} ", })
    });

    //隐藏bottomContainer
    viewer.bottomContainer.style.display = "none";
    var imageList = viewer.baseLayerPicker.viewModel.imageryProviderViewModels;
    //使用第4个（索引为3,内容为ESRI世界影像）imageryProvider作为默认的地形数据提供者
    //以免使用默认的BING服务，有时刷不出图像的情况
    viewer.baseLayerPicker.viewModel.selectedImagery = imageList[3];

    //加入中文注记,增加一个图层:天地图全球影像中文注记服务
    var imageLabelCn = new Cesium.ImageryLayer(new Cesium.WebMapTileServiceImageryProvider({
        url: 'http://t0.tianditu.com/cia_w/wmts?tk=2258f821a55d740ddc54c3781993d1a0',
        layer: 'cia',
        style: 'default',
        format: 'tiles',
        tileMatrixSetID: 'w',
        maximumLevel: 18
    }));
    viewer.scene.imageryLayers.add(imageLabelCn);
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(110, 30, 15000000.0), // 设置位置
        orientation: {
            heading: Cesium.Math.toRadians(0.0), // 方向
            pitch: Cesium.Math.toRadians(-90.0),// 倾斜角度
            roll: 0
        }
    });
};

//高德api获取地理编码及地点经纬度
async function getAddress(loc) {
    const response = await axios.get(`https://restapi.amap.com/v3/geocode/geo?address=${loc}&key=${aMapKey}`)
    return response.data.geocodes[0].location
};
async function getRoad(loc, loc2) {
    const response = await axios.get(`https://restapi.amap.com/v3/direction/driving?origin=${loc}&destination=${loc2}&key=${aMapKey}`)
    return response
};

//绘制路线
function createpolyline(positons, viewer, color = "#00BFFF") {
    const polyline = viewer.entities.add({
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(positons),
            clampToGround: true,
            width: 6,
            material: Cesium.Color.fromCssColorString(color),
            clampToGround: true
        }
    });
    viewer.flyTo(polyline)
    return polyline;
};
// 这种方法会有跨域问题，而axios目前不支持jsonp，所以使用jquery
async function getRoadPosiotn() {
    const response = await axios.get(`https://api.map.baidu.com/direction/v2/driving?origin=40.01116,116.339303&destination=39.936404,116.452562&ak=j4TyKLTOZydlhEqmXrjnNpOzCzbaXmqG`)
    const resArr = []
    if (response.status == 0) {
        const res = response.result.steps.map((item) => {
            const stringArr = item.path.split(';')
            resArr.push(...stringArr)
        })
        console.log(resArr)
    }
    return response
};

//百度api进行路径规划
function getJsonpPosition(start, end) {
    $.ajax(
        {
            url: `https://api.map.baidu.com/direction/v2/driving?origin=${start}&destination=${end}&ak=${baiduKey}`,//GET请求
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            success: (response) => {
                console.log(response);
                let resArr = []
                if (response.status == 0) {
                    const res = response.result.routes[0].steps.map((item) => {
                        const stringArr = item.path.split(';')
                        stringArr.map((x) => {
                            let numArr = x.split(',')
                            resArr.push(...numArr)
                        })
                    })
                    resArr = resArr.map((item) => {
                        return Number(item)
                    })
                    console.log(resArr)
                    createpolyline(resArr, viewer)
                }
            }
        }
    )
};
async function search() {
    console.log(data.input1, data.input2,)
    if (data.input1 == '' || data.input2 == '') {
        alert('输入框不能为空！')
        return
    }
    const data1 = await getAddress(data.input1)
    const data2 = await getAddress(data.input2)
    const data_1 = data1.split(',')
    const data_2 = data2.split(',')
    data_1.reverse()
    const data_string1 = data_1.join(',')
    data_2.reverse()
    const data_string2 = data_2.join(',')
    console.log(data_string1, data_string2,)
    getJsonpPosition(data_string1, data_string2)
};
async function clear() {
    viewer.entities.removeAll();
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(110, 30, 15000000.0),
    });
    data.input1 = '';
    data.input2 = '';
};

onMounted(()=>{
    createMap();
});
</script>

<style>
#cesiumContainer {
    width: 100%;
    height: 1000px;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

#contain {
    position: relative;
    top: 20px
}

.input1 {
    position: absolute;
    top: 100px;
    left: 10px;
    width: 150px;
    height: 40px;
}

.input2 {
    position: absolute;
    top: 100px;
    left: 180px;
    width: 150px;
    height: 40px;
}

.navibutton {
    position: absolute;
    top: 100px;
    left: 370px;
    width: 50px;
    height: 40px;
}

.clearButton {
    position: absolute;
    top: 100px;
    left: 450px;
    width: 50px;
    height: 40px;
}
</style>