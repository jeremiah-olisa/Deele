<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import CartMenu from '@/components/Cart/CartMenu.vue'
import CartSummaryOption from '@/components/Cart/CartSummaryOption.vue'
import ProductOptions from '@/components/Cart/ProductOptions.vue'
import CartOrderView from './CartOrderView.vue'
import { X, TicketPercent, LoaderCircle, LoaderCircleIcon } from 'lucide-vue-next'
import { cartItems, emptyCart, subTotal } from './../store/cart.store'
import { useCartDetails } from '@/store/cart.details'

const { products, status, getAllProducts } = useCartDetails()

getAllProducts()
</script>

<template>
  <section class="ps-20 pe-20">
    <NavigationBar />
  </section>
  <div class="text-center p-10 max-sm:text-center max-md:px-[300px]">
    <h1 class="text-4xl font-medium">Cart</h1>
  </div>
  <div
    class="flex justify-center gap-24 max-sm:text-sm max-sm:gap-10 max-md:px-[300px] max-md:text-sm"
  >
    <CartMenu to="/cart" :page="1" name="Shopping Cart" status="current" />
    <CartMenu to="/checkout" :page="2" name="Checkout details" status="pending" />
    <CartMenu :page="3" name="Order complete" status="pending" />
  </div>

  <div
    v-if="status == 'success'"
    class="flex justify-center gap-20 pt-10 pb-20 max-md:grid grid-cols-1 max-sm:w-full max-md:text-sm"
  >
    <div class="gap-2 max-sm:px-[20px] max-md:px-16">
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
          v-for="(item, index) in cartItems"
          :item="item"
          :key="index"
          id="5"
          userid="5"
          :date="20 - 10 - 2024"
          :products="item.imageURL"
        />
        <div></div>
      </table>
    </div>
    <div class="max-sm:ps-[20px] max-sm:w-full max-md:px-32">
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
          <span>${{ subTotal }}</span>
        </div>
        <div class="flex justify-between pt-8 pr-0.5">
          <span>Total</span>
          <span>$120.00</span>
        </div>
        <div class="flex flex-col gap-2 text-white pt-16 pb-3">
          <button class="border border-black bg-black rounded-[4px] w-full h-auto p-1">
            Checkout
          </button>
          <button
            @click="emptyCart"
            class="border border-red-800 bg-red-600 rounded-[4px] w-full h-auto p-1"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="status == 'loading'" class="flex justify-center items-center w-full pt-12">
    <LoaderCircle class="animate-spin size-10" />
  </div>
  <div class="coupon ps-36 pb-10">
    <h3 class="font-semibold">Have a coupon?</h3>
    <p class="font-light text-sm pt-1 pb-1">Add your code for an instant cart discount</p>
    <div class="flex items-center gap-2 border border-black w-[300px] p-2">
      <TicketPercent class="ps-1" :size="30" />
      <div class="flex justify-between w-full text-sm">
        <span></span>
        <textarea
          name="coupon"
          id="textarea"
          cols="1"
          rows="1"
          class="w-full py-1 text-center border-0 bg-transparent outline-none"
          placeholder="Enter Code"
        ></textarea>
        <button class="font-semibold pl-2">Apply</button>
      </div>
    </div>
  </div>
</template>
