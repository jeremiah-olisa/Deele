<script setup lang="ts">
import { X, TicketPercent, Minus, Plus } from 'lucide-vue-next'
import { ref } from 'vue'

const quantity = ref(0)

const increment = () => {
  if (quantity.value < 10) quantity.value += 1
  else alert('Out of stock')
}

const decrement = () => {
  if (quantity.value > 0) quantity.value -= 1
  else alert('You cant go below 0')
}
</script>
<template>
  <button
    class="bg-[#F5F5F5] p-1 pl-8 pr-9 border-solid rounded-md max-md:p-0 max-md:pl-2 max-md:pr-2 md:pl-2 md:pr-2 md:p-0"
  >
    <div class="max-md:flex flex-row md:flex">
      <button @click="decrement">
        <Minus :size="16" class="pt-1 max-md:p-0 max-md:size-3 md:size-3 md:p-0" />
      </button>
      <span class="p-2 max-md:text-xs md:text-xs">{{ quantity }}</span>
      <button @click="increment">
        <Plus :size="16" class="pt-1 max-md:p-0 max-md:size-3 md:size-3 md:p-0" />
      </button>
    </div>
  </button>
</template>
