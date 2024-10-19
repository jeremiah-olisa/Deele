<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import { Check } from 'lucide-vue-next'
import { Banknote } from 'lucide-vue-next'
import { TicketPercent } from 'lucide-vue-next'
import CartMenu from '@/components/Cart/CartMenu.vue'
</script>

<template>
  <section class="px-20">
    <NavigationBar />
  </section>
  <section class="flex items-center justify-center w-full px-16 xl:px-0 bg-[#FFFFFF]">
    <div class="flex flex-col gap-4">
      <h1 class="text-[#000000] text-center text-4xl font-poppins">Check Out</h1>
      <div class="flex flex-row items-center justify-center gap-24">
        <CartMenu name="Shopping Cart" to="/cart" :page="1" status="done" />
        <CartMenu name="Checkout Details" :page="2" status="current" to="/checkout" />
        <CartMenu to="cart-order" name="Order Complete" :page="3" status="pending" />
      </div>
      <div class="flex max-sm:flex-col flex-row gap-6 my-16 w-full">
        <div class="form">
          <div class="box 1 border border-[#6C7275] rounded py-5 px-3">
            <form action="">
              <h4 class="font-poppins text-xl text-[#000000]">Contact Information</h4>
              <div class="flex max-md:flex-col gap-6 mt-5">
                <div class="flex flex-col">
                  <div class="mb-2 text-xs"><label for="FIRST NAME"> FIRST NAME</label></div>
                  <div class="h-auto pt-2 pb-2 pl-5 border rounded-md">
                    <input type="text" placeholder="First name" required />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="mb-2 text-xs"><label for="LAST NAME"> LAST NAME</label></div>
                  <div class="h-auto pt-2 pb-2 pl-5 border rounded-md">
                    <input type="text" placeholder="last name" required />
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <label class="text-xs font-inter text-[#6C7275] mt-6" for="phone number"
                  >Phone Number</label
                >
                <input
                  class="border rounded-sm w-full h-auto pl-5 py-1"
                  type="text"
                  placeholder="phone number"
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <label class="text-xs font-inter text-[#6C7275] mt-6" for="EMAIL ADDRESS"
                  >EMAIL ADDRESS</label
                >
                <input
                  class="border rounded-sm w-full h-auto pl-5 py-1"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </form>
          </div>
          <div class="box 2 border border-[#6C7275] rounded py-5 px-3 mt-6">
            <form action="">
              <h4 class="font-poppins text-xl text-[#141718] mt-5">Shipping Address</h4>
              <div class="flex flex-col gap-4">
                <label class="text-xs font-inter text-[#6C7275] mt-6" for="STREET ADDRESS"
                  >STREET ADDRESS *</label
                >
                <input
                  class="border rounded-sm w-full h-auto pl-5 py-1"
                  type="text"
                  placeholder="Street Address"
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <label class="text-xs font-inter text-[#6C7275] mt-6" for="COUNTRY"
                  >COUNTRY *</label
                >
                <input
                  class="border rounded-sm w-full h-auto pl-5 py-1"
                  type="text"
                  placeholder="Country"
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <label class="text-xs font-inter text-[#6C7275] mt-6" for=" TOWN / CITY"
                  >TOWN /CITY *</label
                >
                <input
                  class="border rounded-sm w-full h-auto pl-5 py-1"
                  type="text"
                  placeholder="Town /City"
                  required
                />
              </div>
              <div class="flex max-md:flex-col gap-6 mt-5">
                <div class="flex flex-col">
                  <div class="mb-2 text-xs"><label for="STATE"> STATE</label></div>
                  <div class="h-auto pt-2 pb-2 pl-5 border rounded-md">
                    <input type="text" placeholder="State" required />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="mb-2 text-xs"><label for="ZIP CODE"> ZIP CODE</label></div>
                  <div class="h-auto pt-2 pb-2 pl-5 border rounded-md">
                    <input type="text" placeholder="Zip Code" required />
                  </div>
                </div>
              </div>
              <div class="flex flex-row gap-3 mt-5">
                <input type="checkbox" name="" id="checkout" />
                <p class="font-inter text-sm text-[#6C7275]">
                  Use a different billing address (optional)
                </p>
              </div>
            </form>
          </div>
          <div class="box 3 border border-[#6C7275] rounded py-5 px-3 mt-6">
            <form action="">
              <h4 class="font-poppins text-xl text-[#141718] mt-3">Payment method</h4>
              <div class="flex flex-col">
                <div
                  class="flex justify-between border w-[580px] h-[40px] pl-5 pr-5 mt-3 items-center"
                >
                  <div class="flex gap-4">
                    <input type="radio" name="card" id="radio" />
                    <label class="font-inter text-xs" for="Pay by Card Credit"
                      >Pay by Card Credit</label
                    >
                  </div>
                  <div>
                    <Banknote :size="24" />
                  </div>
                </div>
                <div class="flex gap-3 border w-[580px] h-[40px] pl-5 mt-3 items-center">
                  <input type="radio" name="card" id="radio" />
                  <label class="font-inter text-xs" for="Paypal">Paypal</label>
                </div>
                <input class="border-0 bg-transparent" type="text" name="" id="" />
                <div class="flex flex-col">
                  <div class="mb-2 text-xs"><label for="CARD NUMBER"> CARD NUMBER</label></div>
                  <div class="h-auto pt-2 pb-2 pl-5 border rounded-md">
                    <input type="text" placeholder="1234 1234 1234" required />
                  </div>
                </div>
                <div class="flex max-md:flex-col gap-6 mt-5">
                  <div class="flex text-xs gap-2 flex-col">
                    <label class="" for="EXPIRATION DATE"> EXPIRATION DATE</label>
                    <input
                      class="h-auto pt-2 pb-2 pl-5 border rounded-md"
                      type="text"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div class="flex flex-col">
                    <div class="mb-2 text-xs"><label for="CVC"> CVC</label></div>
                    <div class="h-auto pt-2 pb-2 pl-5 border rounded-md">
                      <input type="text" placeholder="cvc Code" required />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button class="font-inter w-full h-10 mt-6 bg-[#141718] text-[#FFFFFF] rounded">
            Place Order
          </button>
        </div>
        <div class="border rounded-md pl-6">
          <h2 class="mt-3 font-poppins text-2xl text-[#121212]">Order Summary</h2>
          <table class="mt-10">
            <tbody class="flex flex-col gap-6 divide-y divide-slate-200">
              <tr class="flex gap-16">
                <td>
                  <div class="flex gap-4">
                    <img
                      class="w-[80px] h-[98px]"
                      src="./../assets/images/Black_tray_table.png"
                      alt="Tray Table"
                    />
                    <div class="flex flex-col gap-2">
                      <span class="font-bold pb-2">Tray Table</span>
                      <span class="text-xs pb-1">Colour: Black</span>
                      <button class="border border-black rounded-md-1">
                        <span class="p-2">-</span> 2
                        <span class="p-2">+</span>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <span>$38.00</span>
                  </div>
                </td>
              </tr>
              <tr class="flex gap-16 mt-2">
                <td class="mt-4 pt-9">
                  <div class="flex gap-4">
                    <img
                      class="w-[80px] h-[98px]"
                      src="./../assets/images/Black_tray_table.png"
                      alt="Tray Table"
                    />
                    <div class="flex flex-col gap-2">
                      <span class="font-bold pb-2">Tray Table</span>
                      <span class="text-xs pb-1">Colour: Red</span>
                      <button class="border border-black rounded-md-1">
                        <span class="p-2">-</span> 2
                        <span class="p-2">+</span>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="pt-12">
                    <span>$38.00</span>
                  </div>
                </td>
              </tr>
              <tr class="flex gap-16 mt-2">
                <td class="mt-4 pt-9">
                  <div class="flex gap-4">
                    <img
                      class="w-[80px] h-[98px]"
                      src="./../assets/images/table_lamp2.png"
                      alt="Table Lamp"
                    />
                    <div class="flex flex-col gap-2">
                      <span class="font-bold pb-2">Table Lamp</span>
                      <span class="text-xs pb-1">Colour: gold</span>
                      <button class="border border-black rounded-md-1">
                        <span class="p-2">-</span> 2
                        <span class="p-2">+</span>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="pt-12">
                    <span>$39.00</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex mt-6 gap-6">
            <input
              class="w-full h-[46px] border pl-3 rounded"
              type="text"
              placeholder="input"
              required
            />
            <button class="w-[90px] h-[46px] border rounded-lg bg-[#141718] text-[#FFFFFF]">
              Apply
            </button>
          </div>
          <div class="w-[365px] h-[208px] mt-4">
            <table>
              <tbody class="flex flex-col gap-5 divide-y divide-slate-200">
                <tr class="flex gap-10 relative ml-4 font-inter text-sm">
                  <td class="pt-6 pl-5 text-[#141718]">
                    <TicketPercent class="absolute -left-3" /> JenkateMW
                  </td>
                  <td class="pt-6 text-[#38CB89]">-$25.00 [Remove]</td>
                </tr>
                <tr class="flex pt-1 gap-36 font-inter text-[#141718] text-sm">
                  <td class="pt-2">Shipping</td>
                  <td class="pt-2">Free</td>
                </tr>
                <tr class="flex pt-1 gap-36 font-inter text-sm text-[#141718]">
                  <td class="pt-2">Subtotal</td>
                  <td class="pt-2">$99.00</td>
                </tr>
                <tr class="flex pt-1 gap-36 font-poppins text-[#141718] text-2xl">
                  <td class="pt-2">Total</td>
                  <td class="pt-2">$234.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
