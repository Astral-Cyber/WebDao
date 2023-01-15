import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('../views/MainView.vue')
        },
        {
            path: '/:id',
            name: 'Page',
            component: () => import('../views/MainView.vue')
        },
        {
            path: '/article/:articleId',
            name: 'article',
            component: () => import('../views/ArticleView.vue')
        },
        {
            path: '/author',
            name: 'author',
            component: () => import('../views/AuthorView.vue')
        },
    ]
})

export default router
