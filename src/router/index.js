import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        redirect: '/check',
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('../views/home/Home.vue')
            // },
            {
                path: '/check',
                name: 'check',
                component: () => import('../views/check/Check.vue')
            },
            {
                path: '/collect',
                name: 'collect',
                component: () => import('../views/collect/Collect.vue'),
                redirect: '/andingdan',
                children: [
                    {
                        path: '/andingdan',
                        name: 'andingdan',
                        component: () => import('../views/collect/andingdan/Andingdan.vue')
                    },
                    {
                        path: '/anshangpin',
                        name: 'anshangpin',
                        component: () => import('../views/collect/anshangpin/Anshangpin.vue')
                    },
                    {
                        path: '/ankehu',
                        name: 'ankehu',
                        component: () => import('../views/collect/ankehu/Ankehu.vue')
                    },
                    {
                        path: '/anri',
                        name: 'anri',
                        component: () => import('../views/collect/anri/Anri.vue')
                    },
                ]
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