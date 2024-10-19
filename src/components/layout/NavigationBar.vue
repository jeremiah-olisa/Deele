<script setup lang="ts">
import { CircleUserRound, Search, ShoppingBag } from 'lucide-vue-next'
</script>

<template>
  <div class="flex max-sm:[640px]:flex-col w-full justify-between items-center py-[18px] gap-y-2">
    <h3 class="font-poppins text-2xl font-medium">Deele</h3>
    <div class="flex gap-5 font-space-grotesk text-sm">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Shop</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </div>
    <div class="flex gap-4 md:pr-20">
      <Search :size="24" class="max-sm:w-3 max-md:w-4" />
      <CircleUserRound :size="24" class="max-sm:w-3 max-md:w-4" />
      <div class="relative">
        <ShoppingBag :size="24" class="max-sm:w-3 max-md:w-4" />
        <span
          class="bg-[#141718] text-white text-xs font-medium rounded-full px-1.5 absolute -top-1 -right-2"
          >2</span
        >
      </div>
    </div>
  </div>
</template>
