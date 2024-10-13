<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import CartMenu from '@/components/Cart/CartMenu.vue'
import CartSummaryOption from '@/components/Cart/CartSummaryOption.vue'
import ProductOptions from '@/components/Cart/ProductOptions.vue'
import { X, TicketPercent, PartyPopper } from 'lucide-vue-next'
import { ref } from 'vue'

const mainImageIndex = ref(0)
const imageURLS = [
  'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972',
  'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/2066921/1.jpg?9606',
  'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/1412401/1.jpg?9606',
  'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/2799081/1.jpg?9422'
]
</script>

<template>
  <section class="ps-20 pe-20">
    <NavigationBar />
  </section>
  <div class="text-center p-10">
    <h1 class="text-4xl font-medium">Complete!</h1>
  </div>
  <div class="flex justify-center gap-24 pb-6">
    <CartMenu :page="1" name="Shopping Cart" :is-active="false" />
    <CartMenu :page="2" name="Checkout details" :is-active="false" />
    <RouterLink to="#">
      <CartMenu :page="3" name="Order complete" :is-active="true" />
    </RouterLink>
  </div>
  <div class="ms-[350px] me-[350px] pb-10">
    <div class="card text-center shadow-2xl shadow-[#1212121A]">
      <div class="flex justify-center pt-10">
        <span class="text-2xl font-medium pb-4">Thank You!</span>
        <PartyPopper :size="30" />
      </div>

      <h1 class="text-3xl font-medium pb-6">
        Your order has been<br />
        received
      </h1>
      <div class="my-orders">
        <div class="flex justify-center gap-8">
          <div class="relative">
            <img :src="imageURLS[0]" alt="" class="w-full md:w-[90px] h-auto" />
            <span
              class="bg-[#141718] text-white text-xs font-medium rounded-full px-1.5 absolute -top-1 -right-1"
              >3</span
            >
          </div>
          <div class="relative">
            <img :src="imageURLS[0]" alt="" class="w-full md:w-[90px] h-auto" />
            <span
              class="bg-[#141718] text-white text-xs font-medium rounded-full px-1.5 absolute -top-1 -right-1"
              >2</span
            >
          </div>
          <div class="relative">
            <img :src="imageURLS[0]" alt="" class="w-full md:w-[90px] h-auto" />
            <span
              class="bg-[#141718] text-white text-xs font-medium rounded-full px-1.5 absolute -top-1 -right-1"
              >1</span
            >
          </div>
        </div>
        <div class="flex justify-between gap-5 px-36 pt-4 pb-3">
          <span>Order code:</span>
          <span>#0123_45678</span>
        </div>
        <div class="flex justify-between gap-5 px-36 pb-3">
          <span>Date:</span>
          <span>October 19, 2024</span>
        </div>
        <div class="flex justify-between gap-5 px-36 pb-3">
          <span>Total:</span>
          <span>$1,345.00</span>
        </div>
        <div class="flex justify-between gap-5 px-36 pb-7">
          <span>Payment method:</span>
          <span>Credit Card</span>
        </div>
        <div class="pb-12">
          <button class="bg-black text-white rounded-2xl px-4 py-2 text-sm">
            Purchase history
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
