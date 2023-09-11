<template>
    <div id="contain">
        <el-input class="input1" v-model="input1" size="large" style="width: 200px;margin-left: 90px;" placeholder="请输入起点地点名称"/>
        <el-input class="input2" v-model="input2" size="large" style="width: 200px; margin-left: 12px;" placeholder="请输入终点地点名称"/><br/>
        <el-button class="navibutton" style="margin-left: 230px;" @click="search">导航</el-button>
        <el-button class="clearButton" @click="clear">清除</el-button>
    </div>
</template>

<script>
import { Viewer } from "cesium";
import * as Cesium from 'cesium'
import axios from 'axios'
import $ from 'jquery'
import emitter from '../../utils/bus'

var viewer;
const aMapKey = '85c52f9b2c72a6ebcd4465b51938f62d';
const baiduKey = 'XsoGA195TDddC30RWMTYAnZGpbOU1GAV';

export default {
    data() {
        return {
            input1: '',
            input2: '',
        }
    },
    methods: {
        //高德api获取地理编码及地点经纬度
        async getAddress(loc) {
            const response = await axios.get(`https://restapi.amap.com/v3/geocode/geo?address=${loc}&key=${aMapKey}`)
            return response.data.geocodes[0].location
        },
        async getRoad(loc, loc2) {
            const response = await axios.get(`https://restapi.amap.com/v3/direction/driving?origin=${loc}&destination=${loc2}&key=${aMapKey}`)
            return response
        },
        
        //绘制路线
        createpolyline(positons, viewer, color = "#ff0") {
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
        },
        // 这种方法会有跨域问题，而axios目前不支持jsonp，所以使用jquery
        async getRoadPosiotn() {
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
        },

        //百度api进行路径规划
        getJsonpPosition(start, end) {
            $.ajax(
                {
                    url: `https://api.map.baidu.com/direction/v2/driving?origin=${start}&destination=${end}&ak=${baiduKey}`,//GET请求
                    type: "get",
                    dataType: "jsonp",
                    async: false,
                    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                    success: (response) => {
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
                            // this.createpolyline(resArr, viewer)
                            console.log(resArr);
                            emitter.emit("createpolyline", resArr)
                        }
                    }
                }
            )
        },
        async search() {
            if (this.input1 == '' || this.input2 == '') {
                alert('输入框不能为空！')
                return
            }
            const data = await this.getAddress(this.input1)
            const data2 = await this.getAddress(this.input2)
            const data_1 = data.split(',')
            const data_2 = data2.split(',')
            data_1.reverse()
            const data_string1 = data_1.join(',')
            data_2.reverse()
            const data_string2 = data_2.join(',')
            this.getJsonpPosition(data_string1, data_string2)
        },
        async clear() {
            viewer.entities.removeAll();
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(110, 30, 15000000.0),
            })
        }
    },
    mounted() {

    },
}
</script>

<style>

#contain {
    position: relative;
    top: 5px
}

</style>