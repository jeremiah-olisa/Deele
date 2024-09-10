import HomeView from '@/views/HomeView.vue'
import NotFoundVIew from '@/views/NotFoundVIew.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ProductListView from '@/views/ProductListView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/product', component: ProductDetailView },
  { path: '/products', component: ProductListView },
  { path: '/:pathMatch(.*)*', component: NotFoundVIew },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
