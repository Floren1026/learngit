<template>
  <div class="pro_info">
    <div class="top">
      <div class="left">
        <div class="title4">
          <span>各地域用户评论</span>
        </div>
        <div>
          <qushitu4 />

        </div>
      </div>
      <div class="right">
        <div>
          <qushitu1 />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div>
        </div>
      </div>
      <div class="right">
        <qushitu3 />
      </div>
    </div>
  </div>
</template> 
<script setup  lang="ts">
import qushitu1 from "./diyufenxi map.vue"
import qushitu2 from "./diyufenxi2.vue"
import qushitu3 from "./diyufenxi1.vue"
import qushitu4 from "./lunbo.vue"
import aaa from "./aaa.vue"
</script>

<style>
.pro_info {
  position: absolute;
  width: 100%;
  height: 100%;
}

.pro_info .top {
  width: 100%;
  height: 50%;

}

.pro_info .bottom {
  float: bottom;
  width: 100%;
  height: 50%;
}

.left {
  width: 20%;
  height: 100%;
  float: left;
}


.right {
  float: right;
  width: 80%;
  height: 100%;
}

.title4 {
  margin: 0;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Microsoft Yahei';
  font-size: 20px;
  color: #31abe3;
  background-size: 100%;
  text-shadow: 0 0 0px #00e5ff, 0 0 0px #00e5ff, 0 0 10px #00e5ff, 0 0 0px #00e5ff, 0 0 1px #00e5ff;
  height: 80px;
  line-height: 30px;
  width: 300px;
  text-align: center;
}
</style>