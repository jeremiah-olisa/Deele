import { computed, ref } from "vue";

export interface ICartItem {
    id: number,
    name: string,
    imageURL: string,
    price: number,
    color: string,
    quantity: number,
    itemLeft: number,
};

export const cartItems = ref<ICartItem[]>([
    {
        name: "Tray Table",
        imageURL: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972",
        price: 199.00,
        color: "Black",
        quantity: 1,
        id: 1,
        itemLeft: 8,
    },
    {
        name: "Tray Table",
        imageURL: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972",
        price: 199.00,
        color: "Black",
        quantity: 1,
        id: 2,
        itemLeft: 218,
    },
    {
        name: "Tray Table",
        imageURL: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972",
        price: 199.00,
        color: "Black",
        quantity: 1,
        id: 3,
        itemLeft: 18,
    },
    {
        name: "Tray Table",
        imageURL: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/257805/1.jpg?2972",
        price: 199.00,
        color: "Black",
        quantity: 1,
        id: 4,
        itemLeft: 3,
    },
]);

/* This line of code is creating a reactive computed property named `subTotal`. It calculates the total
cost of all items in the `cartItems` array by multiplying the price of each item with its quantity
and then summing up these values using the `reduce` method. The initial value of the accumulator is
set to 0. */
export const subTotal = computed(() => cartItems.value.reduce((accumulator, current) =>
    (accumulator) + (current.price * current.quantity), 0
))

/**
 * The function removeFromCart removes an item from the cartItems array based on the provided id.
 * @param {number} id - The `id` parameter in the `removeFromCart` function is a number that represents
 * the unique identifier of the item that needs to be removed from the cart.
 */
export const removeFromCart = (id: number) => {
    cartItems.value = cartItems.value.filter((cartItem) => cartItem.id != id);
}

export const emptyCart = () => {
    // cartItems.value = [];
    cartItems.value.length = 0;
}

export const updateCartQuantity = (id: number, quantity: number) => console.table({ id, quantity })