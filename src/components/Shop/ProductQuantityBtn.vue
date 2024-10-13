<script setup lang="ts">
import { X, TicketPercent, Minus, Plus } from 'lucide-vue-next'
import { ref } from 'vue'

const quantity = ref(1)

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
  <button class="bg-[#F5F5F5] p-1 pl-8 pr-9 border-solid rounded-md">
    <div>
      <button @click="decrement"><Minus :size="16" class="pt-1" /></button>
      <span class="p-2">{{ quantity }}</span>
      <button @click="increment"><Plus :size="16" class="pt-1" /></button>
    </div>
  </button>
</template>
