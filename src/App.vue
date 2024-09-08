<script setup>
import BannerComponent from './components/Home/BannerComponent.vue'
import NavigationBar from './components/layout/NavigationBar.vue'
import PromotionHeader from './components/layout/PromotionHeader.vue'
</script>

<template>
  <PromotionHeader />
  <section class="p-4 sm:px-10 md:px-12 lg:px-16 2xl:px-40 bg-gradient-to-br from-[#FFC94D] to-[#F9A825]">
    <NavigationBar />
    <BannerComponent />
  </section>
</template>
