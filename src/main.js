import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import './style.css'
import 'animate.css'

createApp(App)
  .use(router)
  .use(VueApexCharts)
  .mount('#app')
