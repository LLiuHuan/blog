import {createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory} from 'vue-router'
import {App} from "vue";

import Layout from '../layout/Index.vue'
// import {createRouterGuards} from "./router-guards";

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue') // 首页
const Dynamic = () => import(/* webpackChunkName: "dynamic" */ '../views/dynamic/Index.vue') // 动态
const Article = () => import(/* webpackChunkName: "article" */ '../views/article/Index.vue') // 文章
const Archives = () => import(/* webpackChunkName: "archives" */ '../views/archives/Index.vue') // 归档
const Links = () => import(/* webpackChunkName: "links" */ '../views/links/Index.vue') // 友链
const About = () => import(/* webpackChunkName: "about" */ '../views/about/Index.vue') // 关于



const baseRouters: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        redirect: '/dashboard',
        component: Layout,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/dashboard',
                name: "home",
                component: Dashboard,
                meta: {
                    title: '首页',
                    icon: ''
                },
            },
            {
                path: '/dynamic',
                name: "dynamic",
                component: Dynamic,
                meta: {
                    title: '动态',
                    icon: ''
                },
            },
            {
                path: '/article',
                name: "article",
                component: Article,
                meta: {
                    title: '文章',
                    icon: ''
                },
            },{
                path: '/archives',
                name: "archives",
                component: Archives,
                meta: {
                    title: '归档',
                    icon: ''
                },
            },{
                path: '/links',
                name: "links",
                component: Links,
                meta: {
                    title: '友链',
                    icon: ''
                },
            },{
                path: '/about',
                name: "about",
                component: About,
                meta: {
                    title: '关于',
                    icon: ''
                },
            },

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: baseRouters,
})

export function setupRouter(app: App) {
    app.use(router)
    // 创建路由守卫
    // createRouterGuards(router)
}


export default router
