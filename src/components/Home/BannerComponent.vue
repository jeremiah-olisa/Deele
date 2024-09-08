<script setup></script>
<template>
  <div class="flex max-md:flex-col gap-4 justify-center items-center max-md:py-4">
    <div class="max-md:order-2">
      <img
        src="./../../assets/images/banner-img.png"
        class="h-auto w-[690px]"
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
  @apply font-poppins font-bold md:font-medium text-xl max-sm:text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-[#121212];
}

.banner-desc {
  @apply font-light md:font-normal text-lg md:text-xl text-[#121212];
}
</style>
