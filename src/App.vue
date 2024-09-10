<script setup>
import FooterComponent from './components/layout/FooterComponent.vue'
import NewsletterComponent from './components/layout/NewsletterComponent.vue';
import PromotionHeader from './components/layout/PromotionHeader.vue'
</script>

<template>
  <PromotionHeader />
  <RouterView />
  <NewsletterComponent />
  <FooterComponent />
</template>
