<script setup lang="ts">
defineProps<{
  page: number
  name: string
  isActive: boolean
}>()
</script>

<template>
  <div :class="[{ 'border-b-2 pb-2 border-[#23262F]': isActive == true }]">
    <button
      :class="[
        'rounded-full text-white p-1 w-8',
        {
          'bg-[#23262F]': isActive == true,
          ' bg-[#B1B5C3]': isActive != true
        }
      ]"
    >
      {{ page }}</button
    ><span :class="['pl-3', isActive ? 'text-[#23262F]' : 'text-[#B1B5C3]']">{{ name }}</span>
      </div>
</template>
