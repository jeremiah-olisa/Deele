<script setup></script>
<template>
  <div class="grid grid-cols-2 gap-4 justify-center items-center max-md:py-4">
    <div class="max-md:order-2">
      <img
        src="./../../assets/images/banner-img.png"
        class="md:h-[calc(100vh-300px)] w-auto"
        alt="Banner Image"
      />
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <p class="banner-header">
          Boldly <span class="text-[#377DFF]">African</span>, Unapologetically
          <span class="text-[#377DFF]">Stylish</span>.
        </p>
        <p class="banner-desc">Experience the vibrant spirit of African fashion, where culture meets style</p>
      </div>
      <div>
        <button class="btn dark">Shop Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-header {
  @apply font-poppins font-medium max-sm:text-3xl sm:text-5xl md:text-6xl text-[#121212];
}

.banner-desc {
  @apply font-normal text-xl text-[#121212];
}
</style>
