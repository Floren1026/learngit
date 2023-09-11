<script setup lang="ts">
import * as Cesium from 'cesium'
import { onMounted, reactive } from 'vue';
import emitter from '@/utils/bus';
import axios from 'axios';
import * as turf from '@turf/turf';
import img from '../../assets/img/left_top_hong.png';


var viewer = null;
var bound = null;
const token = 'bf16256977f32aa7093146fdab25b9db';
//矢量
const vec = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token,
    layer: 'vec',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'GoogleMapsCompatible',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    credit: new Cesium.Credit('天地图矢量'),
    maximumLevel: 18
})
const vec_cva = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token,
    layer: 'vec',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'GoogleMapsCompatible',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    credit: new Cesium.Credit('天地图矢量注记'),
    maximumLevel: 18
})
//影像
const imgmap = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token,
    layer: 'vec',
    style: 'default',
    format: "image/jpeg",
    tileMatrixSetID: 'GoogleMapsCompatible',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    credit: new Cesium.Credit('天地图影像'),
    maximumLevel: 18
})
const img_cia = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token,
    layer: 'vec',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'GoogleMapsCompatible',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    credit: new Cesium.Credit('天地图影像注记'),
    maximumLevel: 18
})
//地形
const ter = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token,
    layer: 'vec',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'GoogleMapsCompatible',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    credit: new Cesium.Credit('天地图地形'),
    maximumLevel: 18
})
const ter_cta = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/cta_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token,
    layer: 'vec',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'GoogleMapsCompatible',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    credit: new Cesium.Credit('天地图地形注记'),
    maximumLevel: 18
})


function init() {
    viewer = new Cesium.Viewer('cesiumContainer', {
        skyBox: false,
        geocoder: false,
        infoBox: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        selectionIndicator: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
        orderIndependentTranslucency: false,
        navigationInstructionsInitiallyVisible: false,
        contextOptions: {
            webgl: {
                alpha: true,
            }
        },
    });
    // viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
    //     url: 'https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
    //     tilingScheme: new Cesium.WebMercatorTilingScheme(),
    //     maximumLevel: 12
    // }))
    viewer.imageryLayers.addImageryProvider(vec);


    viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
    viewer.cesiumWidget.creditContainer.style.display = "none";
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(116.405285, 39.904989, 8000000),
        orientation: {
            // 水平偏角，默认正北 0
            heading: 0,
            // 俯视角，默认-90，垂直向下
            pitch: Cesium.Math.toRadians(-90 || -Cesium.Math.PI_OVER_FOUR),
            // 旋转角
            roll: Cesium.Math.toRadians(360 || 0)
        },
        duration: 3 //过渡时间
    })
    infoBoxInit();
    // cesiumGather.cesiumViewer = viewer;

    // var igsWFSurl = 'http://127.0.0.1:6163/igs/rest/ogc/doc/newspoint/WFSServer?REQUEST=GetFeature&service=wfs&version=1.0.0&typename=newspoint:t0&filter=&featureID=&bbox=&maxfeatures=&srsname=&outputFormat=geojson'
    // axios({ url: igsWFSurl }).then(data => {
    //     var newspoint = Cesium.GeoJsonDataSource.load(data.data, {
    //         stroke: Cesium.Color.fromCssColorString("#00fcff"),
    //         fill: Cesium.Color.fromCssColorString("#ffffff").withAlpha(0.0),
    //         strokeWidth: 50000.0,
    //     });
    //     newspoint.then(ds => {
    //         viewer.dataSources.add(ds);
    //     })
    // })
}
var viewModel = null;
function infoBoxInit() {
    var container = document.createElement('div');
    container.className = 'cesium-viewer-infoBoxContainer';
    viewer.container.appendChild(container);
    var infoBox = new Cesium.InfoBox(container);
    viewModel = infoBox.viewModel;//只要设置这个viewModel，就能控制气泡的显隐
    viewModel.closeClicked.addEventListener(function () {//点击气泡右上角的关闭按钮
        viewModel.showInfo = false;//关闭气泡
    });
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (movement) {
        let pick = viewer.scene.pick(movement.position);

        console.log(movement.position);
        if (pick == undefined) {
            console.log("空白处左键")
        } else {
            console.log("实体处左键")
            console.log(pick)
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);//鼠标左键点击
}
function setView(pick) {//展示气泡
    console.log(pick);
    //pick是被点击的对象。pick.id不是一个数值，而是一个json对象，它会自动将被点击对象的属性包含在内。我们可以将关键性信息存放在这里。
    let name = pick.id.name;
    if (name == 'node') {
        showNode();
    } else if (name == 'fnode') {

    }
    viewModel.showInfo = true;//显示气泡
}

function showNode() {//装配气泡
    let n = null;
    let TIPSTYLE = `<style>
		.tfhidden{visibility:hidden;}
		t{width:120px;text-align:right;font-weight:bold;margin-left:3px;margin-right:7px;color:#ccc;}	
		table,th,td{font-size:12px!important}
		th{color:#ccc;}
		</style>`;
    if (n) {
        viewModel.titleText = n.cname + "(" + n.code + ")";//气泡标题
        let nd = n.nd;
        let wc = nd.windCircle;
        let desc = TIPSTYLE + getTplNode(nd, wc);//气泡具体内容,见下面
        viewModel.description = desc;
    }

    function getTplNode(nd, wc) {
        return `
		<div><t>中心位置:</t>${nd.y}N/${nd.x}E</div>
		<div><t>最大风速:</t>${nd.maxWindSpeed}米/秒</div>
		<div><t>中心气压:</t>${nd.centerPower}百帕</div>
		<div><t>移动方向:</t>${nd.direction}</div>
		<div><t>移动速度:</t>${nd.speed}公里/小时</div>
		<div><t>类<span class='tfhidden'>类型</span>型:</t>${nd.type.name}</div>
		<div><table><thead><tr><th>风圈半径</th><th>东北</th><th>东南</th><th>西南</th><th>西北</th><th style='width:25px;'></th></tr></thead>
		<tr><td>7级</td><td>${wc.c7.EN || ''}</td><td>${wc.c7.ES || ''}</td><td>${wc.c7.WS || ''}</td><td>${wc.c7.WN || ''}</td><td>KM</td></tr>
		<tr><td>10级</td><td>${wc.c10.EN || ''}</td><td>${wc.c10.ES || ''}</td><td>${wc.c10.WS || ''}</td><td>${wc.c10.WN || ''}</td><td>KM</td></tr>
		<tr><td>12级</td><td>${wc.c12.EN || ''}</td><td>${wc.c12.ES || ''}</td><td>${wc.c12.WS || ''}</td><td>${wc.c12.WN || ''}</td><td>KM</td></tr>
		</table></div>`;
    }
}
//某对象，鼠标点击它出气泡
function getNode(nd, index, tfId) {
    var point = Cesium.Cartesian3.fromDegrees(nd.x, nd.y);
    return viewer.entities.add({//以下属性，都会在pick.id里出现
        id: 'n-' + tfId + '-' + index,
        name: 'node',
        position: point,
        point: {
            pixelSize: 10,
        }
    });
}


function changeCamera(geoInfo) {
    viewer.dataSources.removeAll();
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(geoInfo.xcoor, geoInfo.ycoor, geoInfo.level),
        orientation: {
            // 水平偏角，默认正北 0
            heading: 0,
            // 俯视角，默认-90，垂直向下
            pitch: Cesium.Math.toRadians(-90 || -Cesium.Math.PI_OVER_FOUR),
            // 旋转角
            roll: Cesium.Math.toRadians(360 || 0)
        },
        duration: 3 //过渡时间
    })
    bound = Cesium.GeoJsonDataSource.load(geoInfo.geojson, {
        stroke: Cesium.Color.fromCssColorString("#00fcff"),
        fill: Cesium.Color.fromCssColorString("#ffffff").withAlpha(0.0),
        strokeWidth: 50000.0,
    });
    bound.then(dataSource => {
        viewer.dataSources.add(dataSource);
        console.log(dataSource);
        var entities = dataSource.entities.values;
        for (let i = 0; i < entities.length; i++) {
            let entity = entities[i];
            //   let polyPositions = entity.polygon.hierarchy.getValue(
            //     Cesium.JulianDate.now()
            //   ).positions;
            //   console.log(polyPositions)
            //单独设置线条样式
            var positions = entity.polygon.hierarchy._value.positions;
            entity.polyline = {
                positions: positions,
                width: 2,
                material: Cesium.Color.fromBytes(96, 200, 250)
            };
        }
    })
    const res = axios({
        url: geoInfo.geojson,
    }).then(temp => {
        let tempPolygon = temp.data.features[0].geometry.coordinates;

        query(tempPolygon);
    })


};

function query(name) {
    var queryParam = new CesiumZondy.Query.MapDocQuery();

    //查询图层的URL路径
    //queryParam.gdbp = encodeURI("gdbp://MapGisLocal/北京市/ds/行政区/sfcls/北京市");
    queryParam.docName = "newspoint_temp";
    // queryParam.geometryType = "polygon";
    // queryParam.geometry = name;
    //服务器的ip
    queryParam.structs = '{"IncludeAttribute":true,"IncludeGeometry":true,"IncludeWebGraphic":false}';
    queryParam.ip = "127.0.0.1"
    queryParam.port = 6163;
    let GeompointArray = new Array();
    queryParam.beginQuery(function (result) {
        if (result != null) {
            console.log(result);
            // GeompointArray = result.SFEleArray;
            queryParam.geometryType = "point";
            result.SFEleArray.forEach((item, index) => {
                let tempcor: [number, number] = [item.bound.xmin, item.bound.ymin];
                if (turf.booleanPointInPolygon(turf.point(tempcor), turf.multiPolygon(name))) {
                    GeompointArray.push({ lng: item.bound.xmin, lat: item.bound.ymin, label: item.AttValue[1] })
                }
            })
            renderCesiumPoint(viewer, GeompointArray);
            // for (var pointlength = 0; pointlength < result.SFEleArray[0].fGeom.RegGeom[0].Rings[0].Arcs[0].Dots.length; pointlength++) {
            //     var PntCartesian3 = Cesium.Cartesian3.fromDegrees(result.SFEleArray[0].fGeom.RegGeom[0].Rings[0].Arcs[0].Dots[pointlength].x, result.SFEleArray[0].fGeom.RegGeom[0].Rings[0].Arcs[0].Dots[pointlength].y, 10);
            //     GeompointArray.push(PntCartesian3);
            // }                       
        }
    }, function quryError(err) {
        alert(err);
    });



}




const cesiumGather = reactive({
    popVisible: false,
    overlayChartObj: {},
    cesiumViewer: null,
    popClickVisble: false,
});

// const mapCesiumData = () => {
//     let queryData = [
//         [
//             { lng: 104.023442, lat: 23.44311, label: "标点AA1" },
//             { lng: 134.023442, lat: 27.44331, label: "标点AA2" },
//             { lng: 105.023442, lat: 32.44311, label: "标点AA3" },
//             { lng: 104.023442, lat: 23.44231, label: "标点AA4" },
//             { lng: 105.023442, lat: 13.44311, label: "标点AA5" },
//             { lng: 114.023442, lat: 33.44331, label: "标点AA6" },
//             { lng: 124.023442, lat: 43.42311, label: "标点AA7" },
//             { lng: 134.023442, lat: 33.42331, label: "标点AA8" },
//             { lng: 144.023442, lat: 53.14311, label: "标点AA9" },
//             { lng: 101.023442, lat: 23.44341, label: "标点AA10" },
//         ],
//     ];
//     queryData.forEach((item, index) => {
//         // setTimeout(() => {
//         renderCesiumPoint(cesiumGather.cesiumViewer, item);
//         // }, 20000 * index);
//     });
// };

// 加载点位
const renderCesiumPoint = (cesiumViewer, projectList) => {
    viewer.popVisible = false;
    cesiumGather.overlayChartObj = {};
    viewer.entities.removeAll();
    for (let i = 0; i < projectList.length; i++) {
        const pro = projectList[i];
        console.log(Cesium.Cartesian2.fromCartesian3(Cesium.Cartesian3.fromDegrees(pro.lng, pro.lat)))
        cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(pro.lng, pro.lat),
            name: pro.label,
            property: pro, //自己加的相关属性，弹窗里需要用到
            billboard: {
                //图标
                image: img,
                scale: 1, //图标比例
                width: 36,
                height: 36,
                // 垂直方向
                verticalOrigin: Cesium.VerticalOrigin.BASELINE,
                //水平方向
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            },
            label: {
                // 文字标签
                text: pro.label,
                scale: 1,
                font: "16px monospace",
                fillColor: Cesium.Color.WHITE,
                showBackground: true, //设置背景颜色
                pixelOffset: new Cesium.Cartesian2(0, -44), //设置左右、上下移动
                // 垂直方向
                verticalOrigin: Cesium.VerticalOrigin.BASELINE,
                //水平方向
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            }
        });
    }
};


function changeLayer(layerName) {
    viewer.imageryLayers.removeAll();
    switch (layerName.value) {
        case 'vec': {
            viewer.imageryLayers.addImageryProvider(vec);
            break;
        }
        case 'img': {
            viewer.imageryLayers.addImageryProvider(imgmap);
            break;
        }
        case 'ter': {
            viewer.imageryLayers.addImageryProvider(ter);
            break;
        }
    }
}
var pathpolyline = null;
function createpolyline(positons, color = "#ff0") {
    viewer.entities.remove(pathpolyline);
    pathpolyline = viewer.entities.add({
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(positons),
            clampToGround: true,
            width: 6,
            material: Cesium.Color.fromCssColorString(color),
        }
    });
    viewer.flyTo(pathpolyline)
    return pathpolyline;
}

onMounted(() => {
    init();
    emitter.on("changeCamera", e => {
        changeCamera(e);
        // searchPointList(e);
    })
    emitter.on("changeLayer", e => {
        changeLayer(e);
    })
    emitter.on("createpolyline", e => {
        createpolyline(e);
    })

    // mapCesiumData();

})
</script>

<template>
    <div id="cesiumContainer"></div>
</template>
<style>
#cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>