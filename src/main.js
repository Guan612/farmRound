import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 等宽字体

const app = createApp(App)

app.use(router)

app.mount('#app')
