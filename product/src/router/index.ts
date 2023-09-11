import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/redian',
    component: () => import('@/views/Redian/Redian.vue')
  },
  {
    path: '/newsdetail2',
    // name:'DetailNews',
    component: () => import('@/views/Redian/hotNews/DetailNews2.vue')
  },
  {
    path: '/jiance',
    component: () => import('@/views/Jiance/Jiance.vue')
  },
  {
    path: '/yuqing',
    component: () => import('@/views/Yuqing/Yuqing.vue')
  },
  {
    path: '/chuanbo',
    component: () => import('@/views/chuanbofenxi/index.vue')

  },
  {
    path: '/chuanbolujing',
    component: () => import('@/views/chuanbolujing/chuanbolujing.vue')

  }, {
    path: '/qushitu',
    component: () => import('@/views/chuanbolujing/qushitu.vue')

  }, {
    path: '/diyufenbu',
    component: () => import('@/views/chuanbolujing/diyufenxi.vue')

  }

]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  next();
})

export default router