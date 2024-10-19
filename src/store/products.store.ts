import axiosClient from "@/lib/axios"
import { delay } from "@/lib/utils"
import { ref } from "vue"

export interface IProductListItem {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}
export type ApiFetchStatus = 'idle' | 'loading' | 'success' | 'failed';

export const useProductsStore = () => {
    const products = ref<IProductListItem[]>([]);
    const status = ref<ApiFetchStatus>('idle');

    const getAllProducts = async () => {
        status.value = 'loading';
        const { data } = await axiosClient.get<IProductListItem[]>('/products');

        await delay(3)

        products.value = data;
        status.value = 'success';
    }

    return { products, status, getAllProducts }
}