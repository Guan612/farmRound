import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'


const app = createApp(App)

app.use(router)
app.use(naive)

app.mount('#app')
