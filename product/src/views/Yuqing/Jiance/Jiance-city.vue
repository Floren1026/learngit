<script setup lang="ts">
import { registerUpdateLifecycle } from 'echarts/core';
import province from '/src/assets/json/city.json'
import { ref } from 'vue';
import emitter from '../../utils/bus'
import axios from 'axios';

const ruleForm = ref({
    province: "", //省份
    city: "",  //市
    area: "",   //区
});
var city = ref([]);
var area = ref([]);

//调用兄弟更改摄像机
function changeCamera() {
    let geoInfo = { xcoor: 116.405285, ycoor: 39.904989, geojson: "", level: 8000000 };
    //todo  
    let address = "中华人民共和国";
    let code = "100000";
    for (let item of province) {
        if (item.code == ruleForm.value.province) {
            address += item.name;
            code = item.code;
            geoInfo.level = 3000000;
            for (let c of item.children) {
                if (c.code == ruleForm.value.city) {

                    if (c.name != "市辖区") {
                        address += c.name;
                        code = c.code;
                    }
                    geoInfo.level = 1000000;
                    for (let a of c.children) {
                        if (a.code == ruleForm.value.area) {
                            code = a.code;
                            address += a.name;
                            geoInfo.level = 300000;
                        }
                    }
                }
            }
        }
    }
    geoInfo.geojson = "https://geo.datav.aliyun.com/areas_v3/bound/" + code.padEnd(6, "0") + ".json";
    const res = axios({
        url: 'https://restapi.amap.com/v3/geocode/geo',
        params: {
            key: 'e9262d3d68f64fa612124b374d32985c',
            address: address
        }
    }).then(e => {
        console.log(e.data)
        var coor = e.data.geocodes[0].location.split(',');
        var xcoor = parseFloat(coor[0]);
        var ycoor = parseFloat(coor[1]);
        geoInfo.xcoor = xcoor;
        geoInfo.ycoor = ycoor;
        emitter.emit("changeCamera", geoInfo);
    })


}

//级联修改市
function changeProvince() {
    ruleForm.value.city = "";
    city.value = [];
    area.value = [];
    ruleForm.value.area = "";
    for (let item of province) {
        if (item.code == ruleForm.value.province) {
            city.value = item.children;
        }
    }
}
function changeCity() {
    console.log(ruleForm.value.city)
    area.value = [];
    ruleForm.value.area = "";
    for (let item of city.value) {
        if (item.code == ruleForm.value.city) {

            area.value = item.children
        }
    }

}
</script>

<template>
    <div class="select" style="padding-left: 50px;">
        <el-form :model="ruleForm" label-width="100px">
            <el-form-item prop="province">
                <span slot="label">
                    <span style="color: #f8f8f8; font-size: 18px;">省份：&nbsp;</span>
                </span>
                <el-select clearable v-model="ruleForm.province" @change="changeProvince()">
                    <el-option label="全国" value="1"></el-option>
                    <el-option v-for="item in province" :key="item.code" :label="item.name" :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="city">
                <span slot="label">
                    <span style="color: #f8f8f8; font-size: 18px;">城市：&nbsp;</span>
                </span>
                <el-select v-model="ruleForm.city" @change="changeCity()" :disabled="city.length == 0" clearable>
                    <el-option v-for="item in city" :key="item.code" :label="item.name" :value="item.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="area">
                <span slot="label">
                    <span style="color: #f8f8f8; font-size: 18px;">地区：&nbsp;</span>
                </span>
                <el-select v-model="ruleForm.area" :disabled="area.length == 0" clearable>
                    <el-option v-for="item in area" :key="item.code" :label="item.name" :value="item.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="changeCamera" style="margin-left: 110px;" type="primary">跳转</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<style>
.province {
    background-color: rgba(red, green, blue, alpha);
}

.tags {
    background-color: rgba(red, green, blue, alpha);
}
</style>