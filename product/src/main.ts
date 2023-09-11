import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DataV from '@kjgl77/datav-vue3';

import '@/assets/css/main.scss'
import '@/assets/css/tailwind.css'

import {registerEcharts} from "@/plugins/echarts"
//不使用mock 请注释掉
import { mockXHR } from "@/mock/index";
mockXHR()

import * as echarts from 'echarts'

import Vant from 'vant'; 
import 'vant/lib/index.css'; 


const app = createApp(App)
registerEcharts(app)
app.use(createPinia())
app.use(router)
app.use(DataV)
app.use(Vant);

app.config.globalProperties.$echarts = echarts
app.mount('#app')
