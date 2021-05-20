import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import CartList from '../components/cart/Cart_List.vue'
import ProductList from '../components/product/Product_List.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
