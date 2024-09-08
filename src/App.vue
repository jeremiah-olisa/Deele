<script setup>
import BannerComponent from './components/Home/BannerComponent.vue'
import NavigationBar from './components/layout/NavigationBar.vue'
import PromotionHeader from './components/layout/PromotionHeader.vue'
</script>

<template>
  <PromotionHeader />
  <section class="px-4 sm:px-20 md:px-40 bg-gradient-to-br from-[#FFC94D] to-[#F9A825]">
    <NavigationBar />
    <BannerComponent />
  </section>
</template>
