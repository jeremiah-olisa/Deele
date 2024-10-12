<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import CartMenu from '@/components/Cart/CartMenu.vue'
import CartSummaryOption from '@/components/Cart/CartSummaryOption.vue'
import ProductOptions from '@/components/Cart/ProductOptions.vue'
import CartOrderView from './CartOrderView.vue'
import { X, TicketPercent } from 'lucide-vue-next'
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
    <h1 class="text-4xl font-medium">Cart</h1>
  </div>
  <div class="flex justify-center gap-24">
    <CartMenu :page="1" name="Shopping Cart" :is-active="true" />
    <CartMenu :page="2" name="Checkout details" :is-active="false" />
    <RouterLink to="/CartOrder">
      <CartMenu :page="3" name="Order complete" :is-active="false" />
    </RouterLink>
  </div>

  <div class="flex justify-center gap-20 pt-10 pb-20">
    <div class="gap-2">
      <table>
        <thead class="border-b border-black">
          <tr>
            <th class="pr-44 pb-4">Product</th>
            <th class="pr-14 pb-4">Quantity</th>
            <th class="pr-14 pb-4">Price</th>
            <th class="pr-14 pb-4">Subtotal</th>
          </tr>
        </thead>
        <ProductOptions
          :image="imageURLS[0]"
          name="Tray Table"
          colour="Colour: Black"
          :price="199"
        />
        <ProductOptions :image="imageURLS[0]" name="Tray Table" colour="Colour: Red" :price="109" />
        <ProductOptions
          :image="imageURLS[0]"
          name="Tray Table"
          colour="Colour: Brown"
          :price="189"
        />
      </table>
    </div>
    <div class="cart-summary border border-black rounded-[4px] pl-5 pr-5">
      <div class="pt-8 font-semibold">
        <h1>Cart summary</h1>
      </div>
      <form class="flex flex-col gap-4 pt-3">
        <CartSummaryOption name="Free Shopping" :price="0" />
        <CartSummaryOption name="Express shipping" :price="15" symbol="+$" />
        <CartSummaryOption name="Pick Up" :price="20" symbol="%" />
      </form>
      <div class="flex justify-between pt-8 pr-0.5">
        <span>Subtotal</span>
        <span>$60.00</span>
      </div>
      <div class="flex justify-between pt-8 pr-0.5">
        <span>Total</span>
        <span>$120.00</span>
      </div>
      <div class="text-center text-white pt-10">
        <button class="border border-black bg-black rounded-[4px] w-full h-auto p-1">
          Checkout
        </button>
      </div>
    </div>
  </div>
  <div class="coupon ps-36 pb-10">
    <h3 class="font-semibold">Have a coupon?</h3>
    <p class="font-light text-sm pt-1 pb-1">Add your code for an instant cart discount</p>
    <div class="flex items-center gap-2 border border-black w-[300px] p-2">
      <TicketPercent class="ps-1" :size="30" />
      <div class="flex justify-between w-full text-sm">
        <span>coupon code</span>
        <span class="cursor-pointer font-medium">Apply</span>
      </div>
    </div>
  </div>
</template>
