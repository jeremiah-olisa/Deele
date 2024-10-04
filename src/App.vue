<script setup>
import FooterComponent from './components/layout/FooterComponent.vue'
import PromotionHeader from './components/layout/PromotionHeader.vue'
</script>

<template>
  <PromotionHeader />
  <RouterView />
  <FooterComponent />
</template>
