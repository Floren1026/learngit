<template>
    <div class="cjfx">
        <div class="cengji">
            <p>层级分析</p>
        </div>
        <div class="cjdiv ">
            <span class="cjname">第一层：</span><span class="cjvalue">77.9%</span>
            <span class="guanjianyonghu">关键用户:</span>
            <a style="float:left;" href="https://weibo.com/2803301701/NbozJycDH" target="_blank"><span
                    class="guanjianyonghuvalue">人民日报</span></a>

        </div>
        <div class="cjdiv ">
            <span class="cjname">第二层：</span><span class="cjvalue">16.1%</span>
            <span class="guanjianyonghu">关键用户:</span>
            <a style="float:left;" href="https://weibo.com/2996849790/Nbo4oaD7y" target="_blank"><span
                    class="guanjianyonghuvalue">阿啦雷呀</span></a>
        </div>
        <div class="cjdiv ">
            <span class="cjname">第三层：</span><span class="cjvalue">5.7%</span>
            <span class="guanjianyonghu">关键用户:</span>
            <a style="float:left;" href="https://weibo.com/1548674942/NbF7eALTl" target="_blank"><span
                    class="guanjianyonghuvalue1">袁启聪</span></a>
        </div>
        <div class="cjdiv ">
            <span class="cjname">第四层：</span><span class="cjvalue">0.2%</span>
            <span class="guanjianyonghu">关键用户:</span>
            <a style="float:left;" href="https://weibo.com/2952524513/NbF7PtHlX" target="_blank"><span
                    class="guanjianyonghuvalue2">好想叹早茶又唔想起咁早</span></a>
        </div>
        <chart />
    </div>

    <div class="title1">
        <p>转发关系网络</p>
    </div>

    <canvs class="chuanboguanxitu">
        <iframe src="/public/chuanboguanxi.html" style="width:900px; height: 100%"></iframe>
    </canvs>
</template>

<script setup  lang="ts">

import chart from "./zezhutu.vue"

</script>

<style>
.cengji {
    margin: 0;
    border: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    font-size: 25px;
    color: #31abe3;
    background-size: 100%;

    text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff;

    height: 40px;
    padding: 5px 15px;
    line-height: 40px;
}

.title1 {
    margin: 0px;
    border: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    font-size: 25px;
    color: #31abe3;
    text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff;
    height: 40px;
    width: 900px;
    padding: 5px 15px;
    line-height: 40px;
}

.cjdiv {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    width: 100%;
    height: 60px;
    line-height: 45px;
    border-bottom: 1px solid rgba(50, 50, 50, 0.8);
    color: #fff;
    float: right;
    left: 100px;
}

.cjname {
    color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    width: 150px;
    text-align: center;
    float: left;
    margin-top: 3px;
    font-size: 22px;
}

.guanjianyonghu {
    color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    width: 200px;
    text-align: right;
    float: left;
    margin-top: 3px;
    font-size: 22px;

}

.guanjianyonghu2 {
    color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    width: 200px;
    text-align: right;
    float: left;
    margin-top: 3px;
    font-size: 22px;

}

.guanjianyonghuvalue {
    margin: 0;
    padding: 0;
    border: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    color: #00e5ff;
    font-weight: bold;
    text-align: center;
    width: 200px;
    float: left;
    margin-top: 3px;
    font-size: 24px;
}

.guanjianyonghuvalue1 {
    margin: 0;
    padding: 0;
    border: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    color: #00e5ff;
    font-weight: bold;
    text-align: center;
    width: 180px;
    float: left;
    margin-top: 3px;
    font-size: 24px;
}

.guanjianyonghuvalue2 {
    margin: 0;
    padding: 0;
    border: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    color: #00e5ff;
    font-weight: bold;
    text-align: center;
    width: 370px;
    float: left;
    margin-top: 3px;
    font-size: 24px;
}

.cjvalue {
    margin: 0;
    padding: 0;
    border: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    color: #00e5ff;
    font-weight: bold;
    text-align: right;
    float: left;
    margin-top: 3px;
    font-size: 24px;
    width: 100px;
}

.cjfx {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Microsoft Yahei';
    width: 900px;
    height: 100%;
    float: right;
}

.highcharts-container {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    position: relative;
    overflow: hidden;
    width: 500px;
    height: 700px;
    text-align: left;
    line-height: normal;
    z-index: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
    font-size: 12px;
}</style>