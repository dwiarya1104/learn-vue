import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import Transaction from './pages/Transaction.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: '/transactions',
            component: Transaction
        }
    ]
})