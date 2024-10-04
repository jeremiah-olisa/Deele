<script setup lang="ts">
import { defineProps } from 'vue'
import { Star } from 'lucide-vue-next'

const props = defineProps<{
  rating: number
  discount?: number
  tag: string
  percentage?: number
}>()
</script>
<template>
  <div class="relative">
    <div class="flex flex-col justify-start items-start gap-1 absolute mt-3 pl-3">
      <button
        v-if="tag"
        class="bg-[#FFFFFF] w-[60px] h-6 py-0 rounded font-[inter] text-base border"
        type="button"
      >
        {{ tag }}
      </button>
      <button
        v-if="percentage"
        class="bg-[#38CB89] w-[60px] h-6 py-0 px-3.5 rounded font-[inter] text-base"
        type="button"
      >
        -{{ percentage }}%
      </button>
    </div>
    <img
      :src="'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/2066921/1.jpg?9606'"
      alt="Product image"
      class="w-full md:w-[262px] h-auto"
    />
    <div class="flex">
      <Star class="pt-1" :size="16" v-for="i in Array.from({ length: rating })" :key="i" />
    </div>
    <h3>Loveseat Sofa</h3>
    <p class="font-semibold pt-1 text-sm">
      $199.00
      <span v-if="discount" class="font-extralight text-xs line-through pl-1">
        ${{ discount.toFixed(2) }}
      </span>
    </p>
  </div>
</template>
