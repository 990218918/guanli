import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        redirect: '/check',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/Home.vue')
            },
            {
                path: '/check',
                name: 'check',
                component: () => import('../views/check/Check.vue')
            },
            {
                path: '/collect',
                name: 'collect',
                component: () => import('../views/collect/Collect.vue')
            },
            {
                path: '/information',
                name: 'information',
                component: () => import('../views/information/Information.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router