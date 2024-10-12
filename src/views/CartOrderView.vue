<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import CartMenu from '@/components/Cart/CartMenu.vue'
import CartSummaryOption from '@/components/Cart/CartSummaryOption.vue'
import ProductOptions from '@/components/Cart/ProductOptions.vue'
import { X, TicketPercent, PartyPopper } from 'lucide-vue-next'
import { ref } from 'vue'
</script>

<template>
  <section class="ps-20 pe-20">
    <NavigationBar />
  </section>
  <div class="text-center p-10">
    <h1 class="text-4xl font-medium">Complete!</h1>
  </div>
  <div class="flex justify-center gap-24">
    <CartMenu :page="1" name="Shopping Cart" :is-active="false" />
    <CartMenu :page="2" name="Checkout details" :is-active="false" />
    <RouterLink to="#">
      <CartMenu :page="3" name="Order complete" :is-active="true" />
    </RouterLink>
  </div>
  <div class="text-center">
    <div class="flex justify-center">
      <span class="text-2xl font-medium p-2">Thank You!</span>
      <PartyPopper :size="35" />
    </div>

    <h1 class="text-4xl font-medium">Your order has been received</h1>
  </div>
</template>
