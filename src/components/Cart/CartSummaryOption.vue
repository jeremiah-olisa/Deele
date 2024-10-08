<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    price: number
    symbol?: string
  }>(),
  { symbol: '$' }
)
</script>

<template>
  <div class="flex justify-between pl-2 pr-2 border border-black rounded-[4px] bg-[#F3F5F7] p-2">
    <div>
      <input id="cart-pickup-option" name="cart-pickup-option" type="radio" />
      <span class="pl-2 pr-20">{{ name }}</span>
    </div>
    <span>{{ symbol }}{{ price.toFixed(2) }}</span>
  </div>
</template>
