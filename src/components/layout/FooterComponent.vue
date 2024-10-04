<script setup lang="ts">
import { Facebook, Instagram, Youtube } from 'lucide-vue-next'
import { computed, ref } from 'vue'
</script>
<template>
  <footer class="bg-black text-white">
    <div class="flex justify-between align-middle pt-5 ps-28 pe-28 pb-20">
      <div class="logo text-xl font-semibold flex gap-10">
        <a href="#">3legant.</a>|
        <div class="text-base font-light">
          <span> Gift & Decoration Store</span>
        </div>
      </div>
      <ul class="nav-links flex gap-5">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="flex justify-between align-middle pt-5 ps-28 pe-28 pb-5">
      <div class="flex gap-5">
        <p class="font-light">Copyright © 2023 3legant. All rights reserved</p>
        <div>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Terms of Use</p>
        </div>
      </div>
      <div class="flex gap-3">
        <Instagram />
        <Facebook />
        <Youtube />
      </div>
    </div>
  </footer>
</template>
