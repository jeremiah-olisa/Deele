<script setup lang="ts">
import { Star } from 'lucide-vue-next'
// import ProductRatingComponent from '@/components/Shop/'
</script>

<template>
  <div class="relative">
    <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3 flex-wrap">
      <button
        class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base border"
        type="button"
      >
        New
      </button>
      <button
        class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base"
        type="button"
      >
        -50%
      </button>
    </div>
    <img
      src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972"
      alt="hoodie"
    />
    <button
      class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]"
    >
      Add to cart
    </button>
    <div class="flex flex-row mt-16 ml-10">
      <Star :size="16" />
      <Star :size="16" />
      <Star :size="16" />
      <Star :size="16" />
    </div>
    <div class="ml-10">Loveseat Sofa</div>
    <div class="ml-10">$199.00</div>
  </div>
</template>
