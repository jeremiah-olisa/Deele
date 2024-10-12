<script setup lang="ts">
import { defineProps } from 'vue'
import { Star } from 'lucide-vue-next'

const props = defineProps<{
  rating: number
}>()
</script>
<template>
  <div class="flex">
    <Star class="pt-1" :size="16" v-for="i in Array.from({ length: rating })" :key="i" />
  </div>
</template>
