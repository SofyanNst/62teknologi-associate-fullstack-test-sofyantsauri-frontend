//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'default',
        component: () => import( /* webpackChunkName: "login" */ '@/views/Index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue')
    },
    {
        path: '/detailrestaurant/:id',
        name: 'detailrestaurant',
        component: () => import('@/views/DetailRestaurant.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Index.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('@/views/dashboard/Category.vue')
    },
    {
        path: '/addcategory',
        name: 'addcategory',
        component: () => import('@/views/dashboard/AddCategory.vue')
    },
    {
        path: '/editcategory/:id',
        name: 'editcategory',
        component: () => import('@/views/dashboard/EditCategory.vue')
    },
    {
        path: '/restaurant',
        name: 'restaurant',
        component: () => import('@/views/dashboard/Restaurant.vue')
    },
    {
        path: '/addrestaurant',
        name: 'addrestaurant',
        component: () => import('@/views/dashboard/AddRestaurant.vue')
    },
    {
        path: '/editrestaurant/:id',
        name: 'editrestaurant',
        component: () => import('@/views/dashboard/EditRestaurant.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router