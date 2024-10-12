<script setup lang="ts">
import { X, TicketPercent, Minus, Plus } from 'lucide-vue-next'
import { ref, computed, defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    image: string
    name: string
    colour: string
    price: number
    symbol?: string
  }>(),
  { symbol: '$' }
)

const quantity = ref(2)

const subtotal = computed(() => props.price * quantity.value)
</script>

<template>
  <tbody>
    <tr>
      <td>
        <div class="flex justify-start pt-10">
          <img :src="image" alt="" class="w-full md:w-[100px] h-auto" />
          <div class="flex flex-col">
            <span class="font-bold pb-2">{{ name }}</span>
            <span class="text-xs pb-1">{{ colour }}</span>
            <button class="flex gap-0.5 text-sm"><X :size="20" /><span>Remove</span></button>
          </div>
        </div>
      </td>
      <td>
        <div class="buttons flex gap-4 pt-12">
          <div>
            <button class="border border-black rounded-md-1 ps-3 pe-3">
              <div>
                <button @click="quantity--"><Minus :size="16" class="pt-1" /></button>
                <span class="p-2">{{ quantity }}</span>
                <button @click="quantity++"><Plus :size="15" class="pt-1" /></button>
              </div>
            </button>
          </div>
        </div>
      </td>
      <td>
        <div class="pt-12">
          <span>{{ symbol }}{{ price.toFixed(2) }}</span>
        </div>
      </td>
      <td>
        <div class="pt-12">
          <span class="font-semibold">{{ symbol }}{{ subtotal }}</span>
        </div>
      </td>
    </tr>
  </tbody>
</template>
