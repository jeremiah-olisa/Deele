<script setup lang="ts">
import { Check } from 'lucide-vue-next'

defineProps<{
  page?: number
  name: string
  to?: string
  status: 'current' | 'done' | 'pending'
}>()
</script>

<template>
  <router-link :to="to ?? '#'">
    <div
      :class="[
        'flex items-center',
        { 'border-b-2 pb-2': status != 'pending' },
        { 'border-[#38CB89]': status == 'done' },
        { 'border-[#23262F]': status == 'current' }
      ]"
    >
      <button
        v-if="page && status != 'done'"
        :class="[
          'rounded-full text-white p-1 w-8',
          {
            'bg-[#000]': status == 'current',
            'bg-[#23262F]': status == 'current',
            ' bg-[#B1B5C3]': status == 'pending'
          }
        ]"
      >
        {{ page }}
      </button>
      <div v-if="status == 'done'" class="bg-[#38CB89] rounded-full p-1.5">
        <Check :size="18" color="white" />
      </div>
      <slot />
      <span
        :class="[
          `pl-3`,
          {
            'text-[#38CB89]': status == 'done',
            'text-[#23262F]': status == 'current',
            'text-[#B1B5C3]': status == 'pending'
          }
        ]"
        >{{ name }}</span
      >
    </div>
  </router-link>
</template>
