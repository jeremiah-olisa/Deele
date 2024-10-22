import axiosClient from '@/lib/axios'
import { delay } from '@/lib/utils'
import { ref } from 'vue'
import type { ApiFetchStatus, IProductListItem } from './products.store'

export const getProductsItem = () => {
  const products = ref<IProductListItem | null>(null)
  const status = ref<ApiFetchStatus>('idle')

  const getASingleProduct = async (id: number) => {
    status.value = 'loading'
    const { data } = await axiosClient.get<IProductListItem>(`/products/${id}`)

    // await delay(4)

    products.value = data
    status.value = 'success'
  }

  return { products, status, getASingleProduct }
}
