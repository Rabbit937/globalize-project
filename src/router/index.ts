import { createRouter, createWebHashHistory } from 'vue-router'

console.log(import.meta.env.BASE_URL)

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/recommend',
        name: "Recommend",
        component: () => import('../views/Recommend.vue')
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
    }]
})

export default router;
