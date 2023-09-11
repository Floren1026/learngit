<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";
import LeftTop from "./biaotishixian.vue";
import CenterMap from "./diyufenxi map.vue";

import CenterBottom from "./diyufenxi1.vue";
import RightBottom from "./diyufenxi2.vue";
import qushitu1 from "./qushitu1.vue"
</script>

<template>
  <div class="index-box">
    <div class="contetn_center">
      <ItemWrap class="contetn_center-top contetn_lr-item">
        <div class="rmrb" style="height: 100px; width: 240px;">
          <div class="yhweibo1">
            <a href="https://weibo.com/ttarticle/p/show?id=2309404927160795399114&luicode=20000061&lfid=4927160798151741&sudaref=m.weibo.cn&display=0&retcode=6102"
              target="_blank">
              <img src="/src/assets/img/renminribabo.jpg" class="rightulliimg">
            </a>
          </div>
          <div class="titlebiaoti">
            <span>违规堆置珍珠岩浸水增重引发体育馆坍塌</span>
          </div>

          <div class="merquee">
            <span
              class="merquee-txt">24日晚，齐齐哈尔市召开新闻发布会，介绍第三十四中学体育馆坍塌事故相关情况。在这起事故当中，共有11名师生失去了宝贵生命。与体育馆毗邻的教学综合楼施工过程中，施工单位违规将珍珠岩堆置体育馆屋顶。受降雨影响，珍珠岩浸水增重，导致屋顶荷载增大、引发坍塌。目前，公安机关已对教学综合楼施工单位相关责任人立案侦查，依法采取刑事强制措施。</span>
          </div>
          <LeftTop />
        </div>
      </ItemWrap>

      <ItemWrap class="contetn_center-center contetn_lr-item">
        <div class="titleBtn">
          <router-link to="qushitu">
            转发时间趋势
          </router-link>
        </div>
        <div style="height: 100px; ">
          <qushitu1 />
        </div>
      </ItemWrap>

      <ItemWrap class="contetn_center-bottom contetn_lr-item" style="padding: 150px 10px 16px 10px">
        <div class="titleT">
          <span class="yh">传播关键用户</span>
        </div>
        <div class="cbgjyh_left">
          <div class="yhweibo">
            <a href="https://weibo.com/2996849790/Nbo4oaD7y" target="_blank">
              <img src="/src/assets/img/touxiang.jpg" class="rightulliimg">
            </a>
            <div class="yhname"><a style="float:left;" href="https://weibo.com/2996849790/Nbo4oaD7y"
                target="_blank"><span>潘Cockroach</span></a>
              <div class="ico1"></div>
            </div>
            <div class="yhfs">粉丝数：<span>151</span></div>
          </div>
          <div>
            <p class="yhname">转发内容：</p>
            <p class="zftext" style="color:#00e5ff; width: 490px;"> 官员们都怕自己说错话，怕自己站出来就成了要承担责任的那个人，所以都在逃避，拖延时间逼迫家长们“冷静”。
            </p>
          </div>
          <div class="yhzfs">
            <div class="yhtime">转发时间</div>
            <div class="yhdate">2023-07-24 21:31</div>
          </div>
          <div class="yhzfs">
            <div class="yhtime">转发数</div>
            <div class="zfsvalue">121</div>
          </div>
        </div>
      </ItemWrap>
    </div>

    <div class="contetn_left">
      <div class="title2">
        <span>地域分布</span>
      </div>

      <CenterMap class="contetn_leftr_top" />

      <ItemWrap class="contetn_left-bottom">
        <CenterBottom />
      </ItemWrap>
    </div>

    <div class="contetn_right">
      <ItemWrap>
        <canvs class="cblj">
          <img src="img1/gexfloading.gif" class="gexfloading" style="display: none;">
          <div class="titleBtn">
            <router-link to="chuanbolujing">
              传播路径
            </router-link>
          </div>
          <iframe src="/public/chuanboguanxi.html" style="width:1000px; height: 550px"></iframe>

          <div class="cbtext">
            上图给出关键传播帐号的传播路径，灰色节点为根节点。传播第一层转发占比77.9%。最大深度为4
          </div>
        </canvs>
      </ItemWrap>

      <ItemWrap class="contetn_left-bottom contetn_lr-item">
        <div class="ztfx">
          <div class="titleT">
            <span>微博来源</span>
          </div>
          <RightBottom />
        </div>
      </ItemWrap>
    </div>

  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}

//左边 右边 结构一样
.contetn_center {
  width: 540px;
}

.contetn_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  right: 30px;
  width: 500px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.contetn_left {
  flex: 1;
  margin: 0 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  left: -10px;

  .contetn_left-bottom {
    height: 300px;
  }
}

.contetn_leftr_top {
  height: 300px;
}

.contetn_lr-item {
  height: 290px;
}

.wlz {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  width: 540px;
  height: 240px;

  float: left;
  margin-top: 17px;
}

.titleBtn {
  font-size: 22px;
  color: #5aafd6;
  text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 10px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff;
  height: 30px;
  padding: 5px 15px;
  line-height: 30px;
  width: 540px;
  text-align: center;
}

.titleT {
  font-size: 22px;
  color: #31abe3;
  height: 30px;
  padding: 5px 15px;
  line-height: 30px;
  width: 540px;
  text-align: center;
}

.yh {
  position: relative;
  top: -20px;
  left: -10px;
}

.titlebiaoti {
  font-size: 20px;
  color: #31abe3;
  height: 60px;
  padding: 15px 20px;
  line-height: 55px;
  width: 540px;
  text-align: left;
  position: relative;
  left: 20px;
}

.title2 {
  font-size: 22px;
  color: #31abe3;
  height: 30px;
  padding: 5px 15px;
  position: relative;
  left: 305px;
}

.title3 {
  margin: 0;
  border: 10px;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  font-size: 14px;
  color: #00e5ff;
  background-size: 100%;

  text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 10px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff;

  height: 30px;
  padding: 0px 15px;
  line-height: 30px;
}

.wlnum {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  color: #0d86f7;
  font-size: 2em;
  float: left;

  margin-left: 0px;
  width: 130px;
  height: 30px;
  text-align: center;
}

.wltext {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  color: #00e5ff;
  float: left;
  width: 257px;
  height: 30px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 28px;
  margin-left: 26px;
}

.wltext1 {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  color: #00e5ff;
  float: left;
  width: 500px;
  height: 100px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 28px;
  margin-left: 26px;
  flex: tent;
}

.cblj {
  margin: 10px;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  width: 540px;
  height: 600px;
  float: left;
  position: relative;
}

.sigma-expand {
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  width: 556px;
  height: 525px;
  margin: 0 auto;
}

.sigma_edges_canvas {
  aspect-ratio: auto 556 / 525;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  position: absolute;
}

.sigma_nodes_canvas {
  aspect-ratio: auto 556 / 525;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  position: absolute;
}

.sigma_labels_canvas {
  aspect-ratio: auto 556 / 525;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  position: absolute;
}

.sigma_hover_canvas {
  aspect-ratio: auto 556 / 525;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  position: absolute;
}

.sigma_monitor_div {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  position: absolute;
}

.sigma_mouse_canvas {
  aspect-ratio: auto 556 / 525;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  position: absolute;
}

.cbtext {
  color: #00e5ff;
}

.yhweibo {
  padding-top: 10px;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  float: left;
  width: 100%;
  height: 60px;
  color: #fff;
  display: flex;
}

.rmrb {
  position: relative;
  top: 20px;
}

.yhweibo1 {
  padding-top: 20px;
  padding-right: 10px;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  float: left;
  width: 60px;
  height: 40px;
  color: #fff;
  display: flex;
  position: relative;
  left: 20px;
}

.yhname {
  margin: 0;
  padding: 10;
  border: 10;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  float: left;
  color: #d7e02b;
  font-size: 20px;
  height: 16px;
  line-height: 16px;
  margin-top: 8px;
}

.ico1 {
  color: #63b2cc;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  width: 22px;
  height: 16px;
  background: url("../img1/sinaicon.png");
  background-position: 0px 2px;
  display: inline-block;
}

.yhfs {
  color: #00e5ff;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  float: left;
  width: 139px;
  font-size: 15px;
  margin-top: 5px;
}

.yhzfs {
  margin: 5px;
  padding-left: 0;
  padding-top: 10px;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  width: 230px;
  height: 70px;
  background: #0a4158;
  float: left;
}

.yhdate {
  margin: 0;
  padding-right: 5px;
  border: 0;

  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  text-align: center;
  font-size: 19px;
}

.yhtime {
  margin: 0;
  padding: 0;
  border: 0;

  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  text-align: center;
  font-size: 16px;
}



.zfsvalue {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  font-size: 19px;
  text-align: center;
}

.ztfx {
  width: 540px;
  height: 320px;
  position: relative;
  top: -15px;
}

.sjimg {
  margin: 0;
  padding: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  border: 0px;
  float: left;
  margin-top: 50px;
  margin-left: 6px;
}

.ztfxtext {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  float: left;
  text-align: center;
  width: 100%;
  margin-top: 24px;
  font-size: 15px;
}

.rightulliimg {
  width: 50px;
  height: 50px;
}

/* 文字滚动 */
.merquee {
  padding-top: 15px;
  height: 40px;
  line-height: 30px;
  box-sizing: border-box;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  width: 450px;
  background-color: transparent;
}

.merquee-txt {
  display: inline-block;
  padding-left: 100%;
  /* 从右至左开始滚动 */
  animation: marqueeTransform 30s linear infinite;
  size: 80px;
}

@keyframes marqueeTransform {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}
</style>
