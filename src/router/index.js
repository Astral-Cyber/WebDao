import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:uuid',
            name: 'Pass',
            component: () => import('../views/MainView.vue')
        },
        {
            path: '/',
            name: 'Main',
            component: () => import('../views/MainView.vue')
        },
        {
            path: '/article/:articleId/:uuid',
            name: 'article',
            component: () => import('../views/ArticleView.vue')
        },
    ]
})

export default router
