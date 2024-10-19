<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import ProductList from '@/components/CartProduct/ProductList.vue'
import NewsletterComponent from '@/components/layout/NewsletterComponent.vue'
import ShopBannerComponent from '@/components/Home/ShopBannerComponent.vue'
// import ProductRatingComponent from '@/components/Shop/ProductRatingComponent.vue';
import { Grid3x3, LoaderCircle } from 'lucide-vue-next'
import { LayoutGrid, StretchVertical, StretchHorizontal } from 'lucide-vue-next'
import { useProductsStore } from '@/store/products.store'

const { products, status, getAllProducts } = useProductsStore()

getAllProducts()
</script>

<template>
  <section class="p-4 sm:px-10 md:px-12 lg:px-16 2xl:px-40">
    <NavigationBar />
  </section>
  <section class="banner">
    <ShopBannerComponent />
  </section>
  <section class="product pt-14 px-40 pr w-full max-sm:p-4">
    <div class="Tool-bar flex justify-between w-full h-[82px] mb-10 max-sm:flex-col">
      <div class="drop-down flex flex-row gap-6 max-sm:flex-col">
        <div class="flex flex-col">
          <h2 class="pb-2">CATEGORIES</h2>
          <select
            class="w-[170px] h-[35px] pt-2 pl-2 pb-0 bg-white border-2 border-[#6C7275] rounded"
            name="Living Room"
          >
            <option value="1">Living Room</option>
            <option value="2">Dining</option>
            <option value="3">Bed Room</option>
          </select>
        </div>
        <div class="max-sm:mt-10">
          <h2 class="pb-2">PRICES</h2>
          <select
            class="w-[170px] h-[35px] pt-2 pl-2 pb-0 bg-white border-2 border-[#6C7275] rounded"
            name="All Prices "
          >
            <option value="1">All Prices</option>
            <option value="2">All Prices</option>
            <option value="3">All Prices</option>
          </select>
        </div>
      </div>
      <div class="flex flex-row gap-8 mt-8 pr-64 h-6 max-sm:mt-28">
        <select class="bg-white border" name="Sort by">
          <option value="3">Sort by</option>
          <option value="2">Latest</option>
          <option value="1">Newest</option>
        </select>

        <div class="flex gap-6">
          <Grid3x3 :size="18" />
          <LayoutGrid :size="18" />
          <StretchVertical :size="18" />
          <StretchHorizontal :size="18" />
        </div>
      </div>
    </div>
    <div class="productList max-sm:mt-72">
      <div v-if="status == 'success'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductList
          v-for="product in products"
          :title="product.title"
          :category="product.category"
          :discount="234"
          :image="product.image"
          :price="product.price"
          :rating="3"
          :key="product.id"
        />
      </div>
      <div v-if="status == 'loading'" class="flex justify-center items-center w-full">
        <LoaderCircle class="animate-spin" />
      </div>
    </div>
    <button
      class="flex py-1 px-6 border rounded-3xl text-[#141718] border-gray-500 ml-96 mt-10 mb-20"
    >
      Show more
    </button>
    <div />
  </section>
  <NewsletterComponent />
</template>
