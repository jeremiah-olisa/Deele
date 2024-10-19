<script setup lang="ts">
import { Star } from 'lucide-vue-next'

defineProps<{
  category?: string
  discount?: string | number
  rating?: number
  title: string
  price: string
  image: string
}>()
</script>

<template>
  <div class="relative group">
    <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3 flex-wrap">
      <button
        v-if="category"
        class="bg-[#FFFFFF] h-6 py-0 px-3.5 rounded font-[inter] text-base border text-pretty"
        type="button"
      >
        {{ category }}
      </button>
      <button
        v-if="discount"
        class="bg-[#38CB89] h-6 py-0 px-3.5 rounded font-[inter] text-base"
        type="button"
      >
        {{ discount }}
      </button>
    </div>
    <img :src="image" class="h-[349px] w-auto object-contain" :alt="title" />
    <button
      class="bg-[#141718] hidden group-hover:block absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg"
    >
      Add to cart
    </button>
    <div v-if="rating" class="flex flex-row mt-16 ml-10">
      <Star v-for="index in Array.from({ length: 5 })" :key="index" :size="16" />
    </div>
    <div class="ml-10">{{ title }}</div>
    <div class="ml-10">${{ price }}</div>
  </div>
</template>
