<script setup>
import { X, TicketPercent, ArrowRight } from 'lucide-vue-next'
import { ref } from 'vue'

const isVisible = ref(true)
</script>

<template>
  <div
    v-if="isVisible === true"
    class="relative flex p-2 w-full justify-center items-center bg-dark text-white text-sm max-md:w-[650px] sm:w-full max-md:text-xs max-lg:w-[950px]"
  >
    <div class="flex-gap-3 max-sm:text-xs max-md:text-xs">
      <span class="flex-gap-3">
        <TicketPercent height="18" width="20" class="inline" />
        <span>30% off storewide — Limited time! </span>
      </span>
      <span class="cta-text-yellow">Shop Now <ArrowRight class="inline" size="18" /></span>
    </div>
    <button
      class="sm:absolute sm:top-3 sm:right-4 max-sm:pl-20 max-md:pl-10 md:pr-20 sm:pr-12 lg:pr-20"
      @click="() => (isVisible = !isVisible)"
    >
      <X size="16" />
    </button>
  </div>
</template>

<style>
.flex-gap-3 {
  @apply flex gap-x-3 items-center;
}

.cta-text-yellow {
  @apply text-sm text-yellow border-b-[1px] border-solid border-yellow;
}
</style>
