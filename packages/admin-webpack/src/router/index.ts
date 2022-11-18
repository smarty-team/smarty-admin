// import Index from "@/pages/index.vue"

import Index from "@/pages/dashboard/index.vue"
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/layouts/default.vue'
const router = createRouter({
    history: createWebHistory(

    ),
    routes: [
        // { path: '/', component: Index },
        // { path: '/a', component: () => import('@/pages/index.vue') },
        { path: '/login', component: () => import('@/pages/login.vue') },
        {
            path: '/', component: () => import('@/layouts/default.vue'),
            children: [
                {
                    path: '',
                    component: () => import('@/pages/dashboard/index.vue')
                },
                {
                    path: 'vue',
                    component: () => import('@/pages/vue.vue')
                },
                {
                    path: 'react',
                    component: () => import('@/pages/react.vue')
                }


            ]
        },
    ]
})
export default router