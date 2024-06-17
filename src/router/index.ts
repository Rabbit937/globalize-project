import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: "/home",
        },
        {
            path: "/home",
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/recommend',
            name: "Recommend",
            component: () => import('../views/Recommend.vue')
        },
        {
            path: '/ad_overview',
            name: 'Ad-overview',
            component: () => import('../views/Ad-overview.vue')
        },
        {
            path: '/user_behavior',
            name: "UserBehavior",
            component: () => import('../views/UserBehavior.vue')
        },
        {
            path: '/potential_portrait',
            name: 'PotentialPortrait',
            component: () => import('../views/PotentialPortrait.vue')
        }, {
            path: '/delivery_strategy',
            name: 'DeliveryStrategy',
            component: () => import('../views/DeliveryStrategy.vue')
        },
        {
            path: "/dunjia",
            name: "Dunjia",
            component: () => import('../views/Dunjia.vue')
        },
        {
            path: "/optoverview",
            name: "Optoverview",
            component: () => import('../views/OptOverview.vue')
        },
        {
            path: "/payoverview",
            name: "Payoverview",
            component: () => import('../views/PayOverview.vue')
        },
        {
            path: "/paylog",
            name: "Paylog",
            component: () => import('../views/PayLog.vue')
        },

        {
            path: "/loginlog",
            name: "LoginLog",
            component: () => import('../views/LoginLog.vue')
        },

        {
            path: "/strategy",
            name: "Strategy",
            component: () => import('../views/Strategy.vue')
        },
        {
            path: "/potential_user_analysis",
            name: 'PotentialUserAnalysis',
            component: () => import('../views/PotentialUserAnalysis.vue')
        }
    ]
})

export default router;
