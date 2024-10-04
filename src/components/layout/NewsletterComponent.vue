<script setup lang="ts">
import { ArrowLeft, ArrowRight, Mail } from 'lucide-vue-next'
</script>
<template>
  <div class="new-arrivals relative bg-[url('/images/footer-bg.png')]">
    <img src="/images/footer-bg.png" alt="Image" class="w-full h-auto" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center space-y-1">
        <h1 class="text-2xl">Join Our Newsletter</h1>
        <p class="">Sign up for deals, new products and promotions.</p>
        <div class="flex items-center justify-center">
          <form class="pt-8 border-b border-gray-400">
            <div class="flex items-center justify-between">
              <Mail color="#f2f4f6" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                class="px-3 bg-[#F2F4F6] border-0 bg-transparent outline-none"
              />
              <div class="text-sm text-gray-400">
                <button type="submit" class="px-3">Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
