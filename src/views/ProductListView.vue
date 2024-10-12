<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
</script>

<template>
  
   <section
      class="p-4 sm:px-10 md:px-12 lg:px-16 2xl:px-40"
    >
      <NavigationBar />
    </section>
    <section class="banner">
        <div class="flex justify-center items-center flex-col gap-6">
            <div class="flex justify-center gap-4 mt-28 font-[inter] text-sm">
              <div>Home ></div>
              <div>Shop</div>
            </div>
            <div class="font-[poppins] text-5xl">Shop Page</div>
            <div class="font-[inter] text-xl">
              Lets design the place you always imagined
            </div>
          </div>
    </section>
    <section class="product  pt-14 pl-40 w-full">
      <div class="Tool-bar flex justify-between w-full h-[82px]">
        <div class="drop-down flex flex-row gap-6">
          <div class="flex flex-col">
            <h2 class="pb-2">CATEGORIES</h2>
          <select class="w-[170px] h-[30px] pt-2 pl-2 pb-2 bg-white border-2 border-[#6C7275] rounded " name="Living Room">
            <option value="1">Living Room</option>
            <option value="2">Dining</option>
            <option value="3">Bed Room</option>
          </select>
          </div>
          <div>
            <h2 class="pb-2">PRICES</h2>
            <select class="w-[170px] h-[30px] pt-2 pl-2 pb-2 bg-white border-2 border-[#6C7275] rounded " name="All Prices ">
              <option value="1">All Prices</option>
              <option value="2">All Prices</option>
              <option value="3">All Prices</option>
            </select>
          </div>
        </div>
        <div class=" flex flex-row gap-8 mt-8 pr-64 h-6  ">
          <select class="bg-white border" name="Sort by">
            <option value="3">Sort by</option>
            <option value="2">Latest</option>
            <option value="1">Newest</option>
          </select>
          
          <div class="flex flex-row w-6 h-5 gap-6 ">
            <img src="../Assest/Images/vector_1.png" alt="vector">
            <img src="../Assest/Images/fluent_grid-24-filled.png" alt="vector">
            <img src="../Assest/Images/Vector_2.png" alt="vector">
            <img src="../Assest/Images/fluent_grid-24.png" alt="vector">
  
          </div>
        </div> 
      </div>
      <div class="productList">
        <div class="First_row flex w-[1120px] h-[433px] gap-6">
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="./../../assest/images/Loveseat image.png" alt="Loveseat">
            <button class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>Loveseat Sofa</div>
              <div>$199.00</div>
            </div>
          </div>
          <div>
            <div class="relative">
              <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
                <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
                <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
              </div>
              <img src="../Assest/Images/Luxury_Sofa.png" alt="Luxury Sofa">
              <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
              <div>
                <div>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div>Luxury Sofa Sofa</div>
                <div>$299.00</div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative">
              <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
                <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
                <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
              </div>
              <img src="../Assest/Images/Table-Lamp.png" alt="Table Lamp">
              <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
              <div>
                <div>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div>Table Lamp</div>
                <div>$19.00</div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative">
              <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
                <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
                <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
              </div>
              <img src="../Assest/Images/Cosy_Sofa.png" alt="Cosy Sofa">
              <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
              <div>
                <div>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div>Cosy Sofa</div>
                <div>$299.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="second_row flex w-[1120px] h-[433px] gap-6">
        <div class="relative">
          <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
            <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
            <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
          </div>
          <img src="../Assest/Images/White_drawer.png" alt="White drawer">
          <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
          <div>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div>White Drawer unit</div>
            <div>$89.99</div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="../Assest/Images/Black_tray_table.png" alt="Black_tray_table">
            <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>Black Tray Table</div>
              <div>$19.99</div>
            </div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="../Assest/Images/table_lamp3.png" alt="Table Lamp">
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>Table Lamp</div>
              <div>$19.00</div>
            </div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="../Assest/Images/Table.png" alt="Table">
            <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>Black Brow Side Table</div>
              <div>$16.99</div>
            </div>
          </div>
        </div>
      </div>

      <div class="third_row flex w-[1120px] h-[433px] gap-6">
        <div class="relative">
          <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
            <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
            <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
          </div>
          <img src="../Assest/Images/Pillow.png" alt="Pillow">
          <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
          <div>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div>Light Beige Pillow</div>
            <div>$3.99</div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="../Assest/Images/table_lamp2.png" alt="table lamp">
            <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>table Lamp</div>
              <div>$39.99</div>
            </div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="../Assest/Images/Basket.png" alt="Basket">
            <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>Bamboo Basket</div>
              <div>$9.99</div>
            </div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex flex-col justify-start items-start gap-2 absolute mt-3 pl-3">
              <button class="bg-[#FFFFFF] w-[67px] h-6 py-0 px-3.5  rounded font-[inter] text-base border  "  type="button">New</button>
              <button class="bg-[#38CB89] w-[67px] h-6 py-0 px-3.5 rounded font-[inter] text-base   "  type="button">-50%</button>
            </div>
            <img src="../Assest/Images/pillow2.png" alt="Pillow">
            <button  class="bg-[#141718] absolute top-72 right-32 left-8 w-[200px] h-[36px] text-[#FEFEFE] rounded-lg bg-opacity-0 hover:bg-[#141718]">Add to cart</button>
            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>Off White Pillow</div>
              <div>$7.99</div>
            </div>
          </div>
        </div>
      </div>
      <button class=" flex py-1 px-6 border rounded-3xl text-[#141718] border-gray-500 ml-96 mt-10">Show more</button>
    <!-- </div> -->
    </section>

    
  
</template>
