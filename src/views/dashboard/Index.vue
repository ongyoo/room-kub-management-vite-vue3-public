<template>
  <MainLayout>
    <div class="w-full px-6 py-6 mx-auto">
      <!-- row 1 -->
      <div class="flex flex-wrap -mx-3">
        <!-- card 1-4 -->
        <TotalCard
          :title="'ยอดกรวม1'"
          :totalCount="100.01"
          :cardType="cardType()"
        />
        <TotalCard
          :title="'ยอดกรวม2'"
          :totalCount="100.02"
          :cardType="cardType()"
        />
        <TotalCard
          :title="'ยอดกรวม3'"
          :totalCount="100.03"
          :cardType="cardType()"
        />
        <TotalCard
          :title="'ยอดกรวม4'"
          :totalCount="100.04"
          :cardType="cardType()"
        />
      </div>

      <!-- cards row 2 -->
      <div class="flex flex-wrap mt-6 -mx-3">
        <!-- <DashboardChartCard/> -->
        <!-- <ImageSlideCard/> -->
      </div>

      <!-- cards row 3 -->
      <div class="flex flex-wrap mt-6 -mx-3">
        <div
          class="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none"
        >
          <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div class="p-4 pb-0 mb-0 rounded-t-4">
              <div class="flex justify-between">
                <h6 class="mb-2">Sales by Country</h6>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table
                class="items-center w-full mb-4 align-top border-collapse border-gray-200"
              >
                <tbody>
                  <tr>
                    <td
                      class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap"
                    >
                      <div class="flex items-center px-2 py-1">
                        <div>
                          <img src="../assets/img/icons/flags/US.png" />
                        </div>
                        <div class="ml-6">
                          <p class="mb-0 text-xs font-semibold leading-tight">
                            Country:
                          </p>
                          <h6 class="mb-0 text-sm leading-normal">
                            United States
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Sales:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">2500</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Value:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">$230,900</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="flex-1 text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Bounce:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">29.9%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap"
                    >
                      <div class="flex items-center px-2 py-1">
                        <div>
                          <img src="../assets/img/icons/flags/DE.png" />
                        </div>
                        <div class="ml-6">
                          <p class="mb-0 text-xs font-semibold leading-tight">
                            Country:
                          </p>
                          <h6 class="mb-0 text-sm leading-normal">Germany</h6>
                        </div>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Sales:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">3.900</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Value:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">$440,000</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="flex-1 text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Bounce:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">40.22%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap"
                    >
                      <div class="flex items-center px-2 py-1">
                        <div>
                          <img src="../assets/img/icons/flags/GB.png" />
                        </div>
                        <div class="ml-6">
                          <p class="mb-0 text-xs font-semibold leading-tight">
                            Country:
                          </p>
                          <h6 class="mb-0 text-sm leading-normal">
                            Great Britain
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Sales:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">1.400</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Value:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">฿190,700</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap"
                    >
                      <div class="flex-1 text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Bounce:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">23.44%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap"
                    >
                      <div class="flex items-center px-2 py-1">
                        <div>
                          <img src="../assets/img/icons/flags/BR.png" />
                        </div>
                        <div class="ml-6">
                          <p class="mb-0 text-xs font-semibold leading-tight">
                            Country:
                          </p>
                          <h6 class="mb-0 text-sm leading-normal">Brasil</h6>
                        </div>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-0 whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Sales:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">562</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 align-middle bg-transparent border-0 whitespace-nowrap"
                    >
                      <div class="text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Value:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">$143,960</h6>
                      </div>
                    </td>
                    <td
                      class="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap"
                    >
                      <div class="flex-1 text-center">
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Bounce:
                        </p>
                        <h6 class="mb-0 text-sm leading-normal">32.14%</h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
          <div
            class="border-black/12.5 shadow-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="p-4 pb-0 rounded-t-4">
              <h6 class="mb-0">Categories</h6>
            </div>
            <div class="flex-auto p-4">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li
                  class="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit"
                >
                  <div class="flex items-center">
                    <div
                      class="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-xl"
                    ></div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700">
                        Devices
                      </h6>
                      <span class="text-xs leading-tight"
                        >250 in stock,
                        <span class="font-semibold">346+ sold</span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all"
                    ></button>
                  </div>
                </li>
                <li
                  class="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit"
                >
                  <div class="flex items-center">
                    <div
                      class="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-xl"
                    >
                      <i
                        class="text-white ni ni-tag relative top-0.75 text-xxs"
                      ></i>
                    </div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700">
                        Tickets
                      </h6>
                      <span class="text-xs leading-tight"
                        >123 closed,
                        <span class="font-semibold">15 open</span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all"
                    ></button>
                  </div>
                </li>
                <li
                  class="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-b-lg rounded-xl text-inherit"
                >
                  <div class="flex items-center">
                    <div
                      class="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-xl"
                    ></div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700">
                        Error logs
                      </h6>
                      <span class="text-xs leading-tight"
                        >1 is active,
                        <span class="font-semibold">40 closed</span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all"
                    >
                      <i
                        class="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </li>
                <li
                  class="relative flex justify-between py-2 pr-4 border-0 rounded-b-lg rounded-xl text-inherit"
                >
                  <div class="flex items-center">
                    <div
                      class="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-xl"
                    >
                      <i
                        class="text-white ni ni-satisfied relative top-0.75 text-xxs"
                      ></i>
                    </div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700">
                        Happy users
                      </h6>
                      <span class="text-xs leading-tight"
                        ><span class="font-semibold">+ 430 </span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all"
                    ></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end cards -->
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Component
import MainLayout from '@/components/layout/MainLayout.vue'
import TotalCard from '@/components/card/TotalCard.vue'
// Enum
import { TotalCardType } from '@/models/enum/card.enum'

export default defineComponent({
  components: {
    MainLayout,
    TotalCard,
  },
  setup() {
    return {}
  },
  methods: {
    submitLogin() {
      console.log('submitLogin')
    },
    cardType(): TotalCardType {
      return TotalCardType.TOTALBAHT
    },
  },
})
</script>
