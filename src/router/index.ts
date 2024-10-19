import HomeView from '@/views/HomeView.vue'
import NotFoundVIew from '@/views/NotFoundVIew.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ProductListView from '@/views/ProductListView.vue'
import CartDetailView from '@/views/CartDetailView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CartOrderView from '@/views/CartOrderView.vue'
import CheckOutDetailsView from '@/views/CheckOutDetailsView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/product', component: ProductDetailView },
  { path: '/products', component: ProductListView },
  { path: '/cart', component: CartDetailView },
  { path: '/checkout', component: CheckOutDetailsView},
  { path: '/:pathMatch(.*)*', component: NotFoundVIew },
  { path: '/cart-order', component: CartOrderView },

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
