<script setup lang="ts">
import { removeFromCart, updateCartQuantity, type ICartItem } from '@/store/cart.store'
import { X, TicketPercent, Minus, Plus } from 'lucide-vue-next'
import { ref, computed, defineProps, withDefaults, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    item: ICartItem
    symbol?: string
  }>(),
  { symbol: '$' }
)

const quantity = ref(props.item.quantity)

const increment = () => {
  if (quantity.value < props.item.itemLeft) quantity.value += 1
  else alert('Out of stock')
}

const decrement = () => {
  if (quantity.value > 0) quantity.value -= 1
  else alert('You cant go below 0')
}

const subtotal = computed(() => props.item.price * quantity.value)

watch([quantity], () => updateCartQuantity(props.item.id, quantity.value))
</script>

<template>
  <tbody>
    <tr>
      <td>
        <div class="flex justify-start pt-10">
          <img :src="item.imageURL" alt="" class="w-full md:w-[100px] h-auto" />
          <div class="flex flex-col">
            <span class="bg-slate-800 text-white px-1 py-1 rounded-sm text-sm w-5">{{
              item.id
            }}</span>
            <span class="font-bold pb-2">{{ item.name }}</span>
            <span class="text-xs pb-1">Colour: {{ item.color }}</span>
            <button @click="removeFromCart(item.id)" class="flex gap-0.5 text-sm">
              <X :size="20" /><span>Remove</span>
            </button>
          </div>
        </div>
      </td>
      <td>
        <div class="buttons flex gap-4 pt-12">
          <div>
            <button class="border border-black rounded-md-1 ps-3 pe-3">
              <div>
                <button @click="decrement"><Minus :size="16" class="pt-1" /></button>
                <span class="p-2">{{ quantity }}</span>
                <button @click="increment"><Plus :size="16" class="pt-1" /></button>
              </div>
            </button>
          </div>
        </div>
      </td>
      <td>
        <div class="pt-12">
          <span>{{ symbol }}{{ item.price.toFixed(2) }}</span>
        </div>
      </td>
      <td>
        <div class="pt-12">
          <span class="font-semibold">{{ symbol }}{{ subtotal.toFixed(2) }}</span>
        </div>
      </td>
    </tr>
  </tbody>
</template>
