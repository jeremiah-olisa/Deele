<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import ProductDisplayComponent from '@/components/Shop/ProductDisplayComponent.vue'
import NewsletterComponent from '@/components/layout/NewsletterComponent.vue'
import ProductReviewComponent from '@/components/Shop/ProductReviewComponent.vue'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const mainImageIndex = ref(0)
const imageURLS = [
  'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972',
  'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/2066921/1.jpg?9606',
  'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/1412401/1.jpg?9606',
  'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/2799081/1.jpg?9422'
]

/* The code snippet `const restImages = computed(() => imageURLS.filter(function (v, index) { return
mainImageIndex.value != index }))` is creating a computed property named `restImages`. */
const restImages = computed(() =>
  imageURLS.filter(function (v, index) {
    return mainImageIndex.value != index
  })
)

/**
 * The function "prev" decrements the value of mainImageIndex unless it is already at 0, in which case
 * it sets it to the last index of the imageURLS array.
 */
function prev() {
  if (mainImageIndex.value <= 0) mainImageIndex.value = imageURLS.length - 1
  else mainImageIndex.value = mainImageIndex.value - 1
}

/**
 * The function `next` increments the `mainImageIndex` value by 1, looping back to 0 if it reaches the
 * end of the `imageURLS` array.
 */
const next = () => {
  if (mainImageIndex.value < imageURLS.length - 1) mainImageIndex.value = mainImageIndex.value + 1
  else mainImageIndex.value = 0
}
</script>

<template>
  <section class="ps-20 pe-20">
    <NavigationBar />
  </section>
  <div>
    <div class="nav-links flex gap-2 font-thin ps-20 text-sm">
      <ul class="nav-links flex gap-2 font-thin text-sm">
        <li>
          <a href="#">Home ></a>
        </li>
        <li><a href="#">Shop ></a></li>
        <li><a href="#">Living Room ></a></li>
        <li><a href="#" class="active font-normal">Product</a></li>
      </ul>
    </div>
    <div class="tray-table grid grid-cols-2 ps-20 pe-24 pt-5">
      <div class="table-page relative w-11/12">
        <button @click="prev" class="absolute top-[-50px] start-0 pt-96 pr-10">
          <ArrowLeft />
        </button>
        <button @click="next" class="absolute top-[-50px] end-0 pt-96 pr-3">
          <ArrowRight />
        </button>
        <img :src="imageURLS[mainImageIndex]" alt="" />
        <div class="sub-images pt-6 grid grid-cols-3 gap-3">
          <img
            v-for="(image, index) in restImages"
            :src="image"
            alt=""
            class="h-auto"
            :key="index"
          />
        </div>
        <div class="flex flex-col justify-start items-start gap-1 absolute top-3 left-3">
          <button
            class="bg-[#FFFFFF] w-[60px] h-6 py-0 px-3.5 rounded font-[inter] text-base border"
            type="button"
          >
            New
          </button>
          <button
            class="bg-[#38CB89] w-[60px] h-6 py-0 px-3.5 rounded font-[inter] text-base"
            type="button"
          >
            -50%
          </button>
        </div>
      </div>
      <div class="text-page pe-4">
        <div class="inline-grid grid-cols-2 gap-2">
          <ProductReviewComponent :rating="5" />
          <!-- <img src="./../assets/images/Rating.png" alt="" /> -->
          <h6 class="text-xs">11 Reviews</h6>
        </div>
        <h1 class="text-2xl font-semibold pt-4">Tray Table</h1>
        <p class="font-extralight break-normal">
          Buy one or buy a few and make every space where you sit more convenient. Light and easy to
          move around with removable tray top, handy for serving snacks.
        </p>
        <p class="font-semibold pt-2 text-xl">
          $199.00
          <span class="font-extralight text-base line-through pl-1">$400.00</span>
        </p>
        <div class="offers pt-12">
          <p class="pb-1">Offers expires in:</p>
          <div class="inline-grid grid-cols-4 text-center gap-2">
            <div>
              <h1 class="font-bold text-3xl bg-[#F3F5F7] text-center">02</h1>
              <span class="text-xs">Days</span>
            </div>
            <div>
              <h1 class="font-bold text-3xl bg-[#F3F5F7] text-center">12</h1>
              <span class="text-xs">Hours</span>
            </div>
            <div>
              <h1 class="font-bold text-3xl bg-[#F3F5F7] text-center">45</h1>
              <span class="text-xs">Minutes</span>
            </div>
            <div>
              <h1 class="font-bold text-3xl bg-[#F3F5F7] text-center">05</h1>
              <span class="text-xs">Seconds</span>
            </div>
          </div>
        </div>
        <div class="measurement pt-12">
          <h6>Measurements</h6>
          <p>17 1/2x20 5/8 "</p>
        </div>
        <div class="colour pt-8">
          <h5>Choose Color <span class="pl-1">></span></h5>
          <div>
            <h3 class="pt-5">Black</h3>
            <div class="small-table inline-grid grid-cols-4 gap-3 pt-5 w-80">
              <div class="border">
                <img :src="imageURLS[0]" alt="" class="w-full md:w-[262px] h-auto" />
              </div>
              <div><img :src="imageURLS[0]" alt="" class="w-full md:w-[262px] h-auto" /></div>
              <div><img :src="imageURLS[0]" alt="" class="w-full md:w-[262px] h-auto" /></div>
              <div><img :src="imageURLS[0]" alt="" class="w-full md:w-[262px] h-auto" /></div>
            </div>
          </div>
        </div>
        <div class="buttons flex gap-4 pt-12">
          <div>
            <button class="bg-[#F5F5F5] p-1 pl-8 pr-9 border-solid rounded-md">
              <span class="pr-5">-</span> 1 <span class="pl-5">+</span>
            </button>
          </div>
          <div>
            <button class="flex gap-1 border border-solid rounded-md border-black p-1 pl-32 pr-32">
              <img src="./../assets/images/heart.png" alt="" class="h-6 W-4" />
              <Heart :size="23" /><span class="font-semibold">Wishlist</span>
            </button>
          </div>
        </div>
        <div class="pt-4">
          <button
            class="border border-solid rounded-md border-black text-white bg-black p-1 pl-[220px] pr-[203px]"
          >
            Add to Cart
          </button>
          <div class="flex gap-5 pt-16 font-thin text-sm">
            <p>SKU</p>
            <p>1117</p>
          </div>
          <div class="flex gap-5 pt-2 font-thin text-sm">
            <p>CATEGORY</p>
            <p>Living Room, Bedroom</p>
          </div>
        </div>
      </div>
    </div>
    <div class="new-arrivals pt-10 pb-20">
      <div class="flex justify-between ps-20 pe-32">
        <h1 class="font-bold">You might also like</h1>
        <div class="flex gap-0.5 font-extralight text-sm">
          <p>More Products</p>
          <img src="./../assets/images/right-arrow.png" alt="" class="w-4" />
        </div>
      </div>
      <div class="arrivals-cards flex gap-6 pt-8 ps-20">
        <ProductDisplayComponent :rating="2" :tag="'New'" :percentage="50" :discount="200" />
        <ProductDisplayComponent :rating="3" />
        <ProductDisplayComponent :rating="4" />
        <ProductDisplayComponent :rating="5" />
        <ProductDisplayComponent :rating="6" />
      </div>
    </div>
  </div>
  <section><NewsletterComponent /></section>
</template>
