<script setup lang="ts">
import { Facebook, Instagram, Youtube } from 'lucide-vue-next'
import { computed, ref } from 'vue'
</script>
<template>
  <footer class="bg-black text-white max-md:text-xs md:text-sm">
    <div
      class="flex justify-between align-middle pt-5 ps-28 pe-28 pb-20 max-md:ps-10 max-md:pe-10 max-md:pb-10 md:ps-10 md:pe-10 md:pb-10"
    >
      <div class="logo text-xl font-semibold flex gap-10">
        <a href="#">3legant.</a>|
        <div class="text-base font-light cursor-pointer">
          <span> Gift & Decoration Store</span>
        </div>
      </div>
      <div class="flex gap-5 font-space-grotesk text-md">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Shop</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </div>
    </div>
    <div
      class="flex justify-between align-middle pt-5 ps-28 pe-28 pb-5 max-md:ps-10 max-md:pe-10 md:ps-10 md:pe-10"
    >
      <div class="flex gap-5">
        <p class="font-light">Copyright © 2023 3legant. All rights reserved</p>
        <div class="cursor-pointer">
          <p>Privacy Policy</p>
        </div>
        <div class="cursor-pointer">
          <p>Terms of Use</p>
        </div>
      </div>
      <div class="flex gap-3 cursor-pointer max-md:gap-2 md:gap-2">
        <Instagram class="max-sm: size-4 md:size-5" />
        <Facebook class="max-sm: size-4 md:size-5" />
        <Youtube class="max-sm: size-4 md:size-5" />
      </div>
    </div>
  </footer>
</template>
