import { createRouter, createWebHistory } from 'vue-router'




const routes = [
    {
        path: "/",
        name: "default",
        component: () => import("../src/views/Home.vue")
    },
    {
        path: "/tool",
        name: "Tool",
        component: () => import("../src/views/Tool.vue"),
        children: [
            {
                path: "videocover",
                name: "VideoCover",
                component: () => import("../src/views/bilibiliTool/Videocover.vue")
            },
            {
                path: "avOrbv",
                name: "AvOrbv",
                component: () => import("../src/views/bilibiliTool/AvOrbv.vue")
            },
            {
                path: "TraditionalColor",
                name: "TraditionalColor",
                component: () => import("../src/views/colorTool/TraditionalColor.vue")
            },
            {
                path: "MD5encryption",
                name: "MD5encryption",
                component: () => import("../src/views/encryption/MD5encryption.vue")
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../src/views/About.vue")
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../src/views/404.vue')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router