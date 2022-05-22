import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
const app = createApp(App)
app.use(router) // 引用路由实例
app.mount('#app')
