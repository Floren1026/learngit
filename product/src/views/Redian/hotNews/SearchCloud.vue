<template>
    <div class="searchCloud">
        <div class="card-title">
            <div class="titleSource" style="display: inline;">热点搜索词云图</div>
        </div>
        <div id="cloudPic" ref="wordcloud" style="width: 100%; height: 100%;">
        </div>
    </div>
</template>

<script>
import './hotNews.css'
import { reactive, ref } from 'vue'
import { inject, onMounted, getCurrentInstance } from "vue"
// import 'echarts-wordcloud'

export default {
    name: 'SearchCloud',
    data() {
        return {
            hotWord: ['原来高铁坐过站可以免费坐回去', '《封神》投资30亿回本难 ', '幼儿园老师发作业直接扔被开除', '中介称20万就能买国企身份',
                '北京：避免到山区游玩', '健身网红举重时遭杠铃压断脖子去世', '刀郎新歌《罗刹海市》', '非必要不出门', '微观大运会', '习近平的大运会时间', '日本核污染水排海'],
            color: [
                '#a18cd1', '#fad0c4', '#ff8177',
                '#fecfef', '#fda085', '#f5576c',
                '#fe9a8b', '#30cfd0', '#38f9d7'
            ],
            wordArr: [],
            timer: null,
            resetTime: 10,
            ContainerSize: ''
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.dealSpan();
            this.initWordPos();
            this.render();
        },
        dealSpan() {
            const wordArr = [];
            this.hotWord.forEach((value) => {
                // 根据词云数量生成span数量设置字体颜色和大小
                const spanDom = document.createElement('span');
                spanDom.style.position = 'relative';
                spanDom.style.display = 'inline-block';
                spanDom.style.color = this.randomColor();
                spanDom.style.fontSize = this.randomNumber(15, 30) + 'px';
                spanDom.innerHTML = value;
                spanDom.local = {
                    position: {
                        // 位置
                        x: 0,
                        y: 0
                    },
                    direction: {
                        // 方向 正数往右 负数往左
                        x: 1,
                        y: 1
                    },
                    velocity: {
                        // 每次位移初速度
                        x: -0.5 + Math.random(),
                        y: -0.5 + Math.random()
                    },
                };
                this.$refs.wordcloud.appendChild(spanDom);
                wordArr.push(spanDom);
            });
            this.wordArr = wordArr;
        },
        randomColor() {
            // 获取随机颜色
            var colorIndex = Math.floor(this.color.length * Math.random());
            return this.color[colorIndex];
        },
        randomNumber(lowerInteger, upperInteger) {
            // 获得一个包含最小值和最大值之间的随机数。
            const choices = upperInteger - lowerInteger + 1;
            return Math.floor(Math.random() * choices + lowerInteger);
        },
        render() {
            if (this.resetTime < 100) {
                this.resetTime = this.resetTime + 1;
                this.timer = requestAnimationFrame(this.render.bind(this));
                this.resetTime = 0;
            }
            this.wordFly();
        },
        wordFly() {
            this.wordArr.forEach((value) => {
                // 设置运动方向 大于边界或者小于边界的时候换方向
                if (value.local.realPos.minx + value.local.position.x < this.ContainerSize.leftPos.x || value.local.realPos.maxx + value.local.position.x > this.ContainerSize.rightPos.x) value.local.direction.x = -value.local.direction.x;
                if (value.local.realPos.miny + value.local.position.y < this.ContainerSize.leftPos.y || value.local.realPos.maxy + value.local.position.y > this.ContainerSize.rightPos.y) value.local.direction.y = -value.local.direction.y;
                value.local.position.x += value.local.velocity.x * value.local.direction.x;
                value.local.position.y += value.local.velocity.y * value.local.direction.y;
                // 给每个词云加动画过渡
                value.style.transform = 'translateX(' + value.local.position.x + 'px) translateY(' + value.local.position.y + 'px)';
            });
        },
        initWordPos() {
            // 计算每个词的真实位置和容器的位置
            this.wordArr.forEach((value) => {
                value.local.realPos = {
                    minx: value.offsetLeft,
                    maxx: value.offsetLeft + value.offsetWidth,
                    miny: value.offsetTop,
                    maxy: value.offsetTop + value.offsetHeight
                };
            });
            this.ContainerSize = this.getContainerSize();
        },
        getContainerSize() {
            // 判断容器大小控制词云位置
            const el = this.$refs.wordcloud;
            return {
                leftPos: {
                    // 容器左侧的位置和顶部位置
                    x: el.offsetLeft,
                    y: el.offsetTop
                },
                rightPos: {
                    // 容器右侧的位置和底部位置
                    x: el.offsetLeft + el.offsetWidth,
                    y: el.offsetTop + el.offsetHeight
                }
            };
        }
    },
    destroyed() {
        // 组件销毁，关闭定时执行
        cancelAnimationFrame(this.timer);
    },
}



</script>

<style scoped lang="scss">
.searchCloud {
    height: 470px;
    padding: 20px;
}

// #cloudPic {
//     width: 200px;
//     height: 275px;
// }
</style>