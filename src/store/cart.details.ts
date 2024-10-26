import axiosClient from "@/lib/axios"
import { delay } from "@/lib/utils"
import { ref } from "vue"
import { cartItems } from "./cart.store"

export interface ICartDetail {
    id: number
    userid: string
    date: number
    products: string
}
export type ApiFetchStatus = 'idle' | 'loading' | 'success' | 'failed';

export const useCartDetails = () => {
    const products = ref<ICartDetail[]>([]);
    const status = ref<ApiFetchStatus>('idle');

    const getAllProducts = async () => {
        status.value = 'loading';
        const { data } = await axiosClient.get<ICartDetail[]>('/carts');

        await delay(3)

        products.value = data;
        status.value = 'success';
    }

    return { cartItems, status, getAllProducts }
}