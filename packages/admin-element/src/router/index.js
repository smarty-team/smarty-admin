import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddProduct from '@/views/AddProduct.vue'
import Login from '@/views/Login.vue'
import SwiperConfig from '@/views/SwiperConfig.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/add',
      name: 'add',
      component: AddProduct,
      meta: {
        title: '新增商品'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        showMenu: false
      }
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: SwiperConfig,
      meta: {
        title: '轮播图配置'
      }
    }
  ]
})

export default router