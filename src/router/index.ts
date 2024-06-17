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
            path: "/paytimelog",
            name: "PayTimeLog",
            component: () => import('../views/PayTimeLog.vue')
        },

        {
            path: "/daymoneylog",
            name: "DayMoneyLog",
            component: () => import('../views/DayMoneyLog.vue')
        },

        {
            path: "/monthmoneylog",
            name: "MonthMoneyLog",
            component: () => import('../views/MonthMoneyLog.vue')
        },


        {
            path: "/dangweimoneylog",
            name: "DangWeiMoneyLog",
            component: () => import('../views/DangWeiMoneyLog.vue')
        },

        {
            path: "/huodongcanyulog",
            name: "HuoDongCanYuLog",
            component: () => import('../views/HuoDongCanYuLog.vue')
        },

        {
            path: "/loginlog",
            name: "LoginLog",
            component: () => import('../views/LoginLog.vue')
        },


        {
            path: "/zhuxianlog",
            name: "ZhuXianLog",
            component: () => import('../views/ZhuXianLog.vue')
        },


        {
            path: "/fubenlog",
            name: "FuBenLog",
            component: () => import('../views/FuBenLog.vue')
        },


        {
            path: "/hexindaojulog",
            name: "HeXinDaoJuLog",
            component: () => import('../views/HeXinDaoJuLog.vue')
        },


        {
            path: "/hexindhuzhichengzhanglog",
            name: "HeXinShuZhiChengZhangLog",
            component: () => import('../views/HeXinShuZhiChengZhangLog.vue')
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
