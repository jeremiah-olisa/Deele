<script setup>
import { CircleUserRound, Search, ShoppingBag } from 'lucide-vue-next'
</script>

<template>
  <div class="flex max-sm:flex-col w-full justify-between items-center py-[18px] gap-y-2">
    <h3 class="font-poppins text-2xl font-medium">Deele</h3>
    <div class="flex gap-5 font-space-grotesk text-sm">
      <a href="">Home</a>
      <a href="">Shop</a>
      <a href="">Product</a>
      <a href="">Cart</a>
    </div>
    <div class="flex gap-4">
      <Search :size="24" />
      <CircleUserRound :size="24" />
      <div class="relative">
        <ShoppingBag :size="24" />
        <span
          class="bg-[#141718] text-yellow text-xs font-medium rounded-full px-1.5 absolute -top-1 -right-2"
          >2</span
        >
      </div>
    </div>
  </div>
</template>
