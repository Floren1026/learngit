<script setup lang="ts">
import JianceMap from './Jiance-map.vue';
import ItemWrap from '@/components/item-wrap';
import JianceCity from './Jiance-city.vue';
import { ref } from 'vue';
import emitter from '../../utils/bus'
import cesiumNavi from './cesiumNavi.vue'
let layer = ref('矢量地图')
function changeLayer() {
    emitter.emit("changeLayer", layer)
}
</script>

<template>
    <div class="index-box">
        <div class="content-left">
            <ItemWrap class="contetn_left">
                <JianceMap ref="jiancemap"></JianceMap>
            </ItemWrap>
        </div>
        <div class="content-right">
            <ItemWrap class="content_right content-right-top" title="查询">
                <JianceCity></JianceCity>
            </ItemWrap>
            <ItemWrap class="content_right content-right-bottom" title="数据详情">

            </ItemWrap>
        </div>
        <div class="content-center">
            <ItemWrap title="图层切换">
                <div class="content-left-top">
                    <span slot="label">
                        <span style="color: #f8f8f8; font-size: 18px;">图层：&nbsp;</span>
                    </span>
                    <el-select @change="changeLayer" v-model="layer">
                        <el-option value="vec" label="矢量地图"></el-option>
                        <el-option value="img" label="影像地图"></el-option>
                        <el-option value="ter" label="栅格地图"></el-option>
                    </el-select>
                </div>
            </ItemWrap>
            <ItemWrap title="导航">
                <div class="content-left-center">
                    <cesiumNavi></cesiumNavi>
                </div>
            </ItemWrap>
        </div>
    </div>
</template>
<style>
.index-box {
    padding-top: 20px;
    width: 100%;
    min-height: calc(100% - 64px);
}

.content-left {
    width: 100%;
    height: 100%;
}

.content-right {
    float: left;
    width: 30%;
    top: 150px;
    left: 0px;
    position: absolute;
}

.content-right-top {
    padding-top: 20px;
    height: 350px;
}

.content-right-bottom {
    height: 350px;
}

.content-center {
    float: right;
    width: 30%;
    top: 150px;
    right: 10px;
    position: absolute;
}

.content-left-top {
    padding-top: 10px;
    padding-left: 150px;
}
</style>