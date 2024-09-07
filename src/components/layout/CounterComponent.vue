<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  if (count.value < 10) count.value += 1
}

function decrement() {
  if (count.value > 0) count.value = count.value - 1
}
</script>

<template>
  <div class="py-10 flex flex-col gap-4 w-full justify-center items-center">
    <h2 class="text-4xl text-orange-400">{{ count }}</h2>
    <div class="flex gap-4 flex-row-reverse">
      <button @click="increment" class="bg-green-700 py-1 px-4 rounded-md text-white font-inter">
        Increment
      </button>
      <button @click="decrement" class="bg-red-600 py-1 px-4 rounded-md text-white font-inter">
        Decrement
      </button>
    </div>
  </div>
</template>
