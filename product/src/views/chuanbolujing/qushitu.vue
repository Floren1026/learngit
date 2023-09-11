<template>
  <div class="pro_info">
    <div class="top">
      <div class="left">
        <div style="display: flex" class="qushitu4">
          <qushitu4 />
          <div>
            <div class="tishi">
              <span class="text-danger">17</span><span>条/小时</span>
              <span class="text-daner">平均传播速度</span>
            </div>
            <div class="tishi">
              <span class="text-danger">126</span><span>条/小时</span>
              <span class="text-daner"> 峰值传播速度</span>
            </div>
            <div class="tishi">
              <span class="text-danger">4</span><span>天</span><span class="text-danger">15</span><span>小时</span>
              <span class="text-daner">事件持续时间</span>
            </div>

          </div>
        </div>
      </div>

      <div class="right">
        <qushitu1 />
      </div>
    </div>

    <div class="bottom">
      <div class="left">
        <div>
          <qushitu2 />
        </div>
      </div>

      <div class="right">
        <qushitu3 />
      </div>
    </div>
  </div>
</template> 

<script setup  lang="ts">
import qushitu1 from "./qushitu1.vue"
import qushitu2 from "./qushitu2.vue"
import qushitu3 from "./qushitu3.vue"
import qushitu4 from "./qushitu4.vue"
</script>

<style>
.pro_info {
  position: absolute;
  width: 100%;
  height: 100%;
}

.top {
  width: 100%;
  height: 50%;
  position: relative;
  top: 20px;
}

.bottom {
  /* float: bottom; */
  width: 100%;
  height: 50%;
  position: relative;
  top:50px;
}

.left {
  width: 30%;
  height: 100%;
  float: left;
}


.right {
  float: right;
  width: 70%;
  height: 100%;
}

.qushitu4 {
  padding-top: 80px;
  width: 600px;
  height: 600px;
}

.tishi {
  white-space: nowrap;
  height: 100px;
  padding-top: 30px;
}

.text-danger {
  margin: 5px;
  border: 0px;
  font-size: 30px;
  color: #31abe3;
  background-size: 100%;
  text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 10px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff;
  height: 30px;
  padding: 0px 5px;
  width: 30px;
}

.text-daner {
  border: 0px;
  font-size: 20px;
  color: #00e5ff;
  background-size: 100%;
  text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 0px #00e5ff;
  height: 30px;
  padding: 0px 15px;
  width: 200px;
}
</style>