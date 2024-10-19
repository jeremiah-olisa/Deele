<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import ProductList from '@/components/CartProduct/ProductList.vue'
import NewsletterComponent from '@/components/layout/NewsletterComponent.vue'
import ShopBannerComponent from '@/components/Home/ShopBannerComponent.vue'
// import ProductRatingComponent from '@/components/Shop/ProductRatingComponent.vue';
import { Grid3x3 } from 'lucide-vue-next'
import { LayoutGrid, StretchVertical, StretchHorizontal } from 'lucide-vue-next'
// import { StretchVertical } from 'lucide-vue-next';
// import { StretchHorizontal } from 'lucide-vue-next';
import { ref } from 'vue'

const mainImageIndex = ref(0)
const imageURLS = [
  'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972',
  'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/2066921/1.jpg?9606',
  'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/1412401/1.jpg?9606',
  'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/2799081/1.jpg?9422'
]
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
      <div class="First_row flex w-[1120px] h-[433px] gap-6">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>

    <div class="second_row flex w-[1120px] h-[433px] gap-6">
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>

    <div class="third_row flex w-[1120px] h-[433px] gap-6">
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
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
