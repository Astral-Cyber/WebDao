import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('../views/MainView.vue')
        },
        {
            path: '/:page',
            name: 'Page',
            component: () => import('../views/MainView.vue')
        },
        {
            path: '/article/:articleId',
            name: 'Article',
            component: () => import('../views/ArticleView.vue')
        },
        {
            path: '/author/:page',
            name: 'AuthorPage',
            component: () => import('../views/AuthorView.vue')
        },
        {
            path: '/author',
            name: 'Author',
            component: () => import('../views/AuthorView.vue')
        },
        {
            path: '/draft/:page',
            name: 'DraftPage',
            component: () => import('../views/DraftView.vue')
        },
        {
            path: '/draft',
            name: 'Draft',
            component: () => import('../views/DraftView.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('../views/AdminView.vue')
        },
        {
            path: '/admin/:page',
            name: 'AdminPage',
            component: () => import('../views/AdminView.vue')
        },
    ]
})

export default router
