<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import FooterComponent from '@/components/layout/FooterComponent.vue'
import { ArrowLeft, ArrowRight, X, TicketPercent } from 'lucide-vue-next'
import { computed, ref } from 'vue'

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
    <div class="border-b-2 border-black pb-2">
      <button class="rounded-full bg-black text-white p-1 w-8">1</button
      ><span class="text-[#B1B5C3] pl-3">Shopping cart</span>
    </div>
    <div>
      <button class="rounded-full bg-[#B1B5C3] p-1 w-8 text-white">2</button
      ><span class="text-[#B1B5C3] pl-3">Checkout details</span>
    </div>
    <div>
      <button class="rounded-full bg-[#B1B5C3] p-1 w-8 text-white">3</button>
      <span class="text-[#B1B5C3] pl-3">Order complete</span>
    </div>
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
        <tbody>
          <tr>
            <td>
              <div class="flex justify-start pt-10">
                <img :src="imageURLS[0]" alt="" class="w-full md:w-[100px] h-auto" />
                <!-- <img src="img/Image 1.png" alt="" /> -->
                <div class="flex flex-col">
                  <span class="font-bold pb-2">Tray Table</span>
                  <span class="text-xs pb-1">Colour: Black</span>
                  <button class="flex gap-0.5 text-sm"><X size="20" /><span>Remove</span></button>
                </div>
              </div>
            </td>
            <td>
              <div class="buttons flex gap-4 pt-12">
                <div>
                  <button class="border border-black rounded-md-1">
                    <span class="p-2">-</span> 1
                    <span class="p-2">+</span>
                  </button>
                </div>
              </div>
            </td>
            <td>
              <div class="pt-12">
                <span>$19.00</span>
              </div>
            </td>
            <td>
              <div class="pt-12">
                <span class="font-semibold">$38.00</span>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div class="flex justify-start pt-10">
                <img :src="imageURLS[0]" alt="" class="w-full md:w-[100px] h-auto" />
                <!-- <img src="img/Image 1.png" alt="" /> -->
                <div class="flex flex-col">
                  <span class="font-bold pb-2">Tray Table</span>
                  <span class="text-xs pb-1">Colour: Black</span>
                  <button class="flex gap-0.5 text-sm"><X size="20" /><span>Remove</span></button>
                </div>
              </div>
            </td>
            <td>
              <div class="buttons flex gap-4 pt-12">
                <div>
                  <button class="border border-black rounded-md-1">
                    <span class="p-2">-</span> 1
                    <span class="p-2">+</span>
                  </button>
                </div>
              </div>
            </td>
            <td>
              <div class="pt-12">
                <span>$19.00</span>
              </div>
            </td>
            <td>
              <div class="pt-12">
                <span class="font-semibold">$38.00</span>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div class="flex justify-start pt-10">
                <img :src="imageURLS[0]" alt="" class="w-full md:w-[100px] h-auto" />
                <!-- <img src="img/Image 1.png" alt="" /> -->
                <div class="flex flex-col">
                  <span class="font-bold pb-2">Tray Table</span>
                  <span class="text-xs pb-1">Colour: Black</span>
                  <button class="flex gap-0.5 text-sm"><X size="20" /><span>Remove</span></button>
                </div>
              </div>
            </td>
            <td>
              <div class="buttons flex gap-4 pt-12">
                <div>
                  <button class="border border-black rounded-md-1">
                    <span class="p-2">-</span> 1
                    <span class="p-2">+</span>
                  </button>
                </div>
              </div>
            </td>
            <td>
              <div class="pt-12">
                <span>$19.00</span>
              </div>
            </td>
            <td>
              <div class="pt-12">
                <span class="font-semibold">$38.00</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cart-summary border border-black rounded-[4px] pl-5 pr-5">
      <div class="pt-8 font-semibold">
        <h1>Cart summary</h1>
      </div>
      <div class="pt-3">
        <div
          class="flex justify-between pl-2 pr-2 border border-black rounded-[4px] bg-[#F3F5F7] p-2"
        >
          <div>
            <input type="radio" />
            <span class="pl-2 pr-20">Free shipping</span>
          </div>
          <span>$20.00</span>
        </div>
      </div>
      <div class="pt-4">
        <div
          class="flex justify-between pl-2 pr-2 border border-black rounded-[4px] bg-[#F3F5F7] p-2"
        >
          <div>
            <input type="radio" />
            <span class="pl-2 pr-20">Express shipping</span>
          </div>
          <span>$20.00</span>
        </div>
      </div>
      <div class="pt-4">
        <div
          class="flex justify-between pl-2 pr-2 border border-black rounded-[4px] bg-[#F3F5F7] p-2"
        >
          <div>
            <input type="radio" />
            <span class="pl-2 pr-20">Pick Up</span>
          </div>
          <span>$20.00</span>
        </div>
      </div>
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
      <TicketPercent class="ps-1" size="30" />
      <div class="flex justify-between w-full text-sm">
        <span>coupon code</span>
        <span class="cursor-pointer font-medium">Apply</span>
      </div>
    </div>
  </div>
</template>
