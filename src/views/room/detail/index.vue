<template>
  <MainLayout>
    <div class="w-full px-6 py-6 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <!-- {/* ข้อมูลห้องพัก */} -->
        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div class="flex items-center">
                <h4>ข้อมูลห้องพัก</h4>
                <button
                  type="button"
                  class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </div>
            <div class="flex-auto p-6">
              <!-- {/* Body */} -->
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >เลขห้องพัก</label
                    >
                    <input
                      disabled
                      type="text"
                      :value="id"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >สถานะ</label
                    >
                    <select
                      class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected value="US">ว่าง</option>
                      <option value="US">ไม่ว่าง</option>
                    </select>
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >รายละเอียด</label
                    >
                    <input
                      type="text"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >ราคา</label
                    >
                    <input
                      type="text"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >เลขมิเตอร์น้ำล่าสุด</label
                    >
                    <input
                      type="number"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >เลขมิเตอร์ไฟฟ้าล่าสุด</label
                    >
                    <input
                      type="number"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >รายละเอียด</label
                    >
                    <textarea
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div class="flex items-center">
                <h4 class="pt-2">ข้อมูลผู้เช่า</h4>
                <div class="px-2"></div>
                <button
                  @click="isModalSearchVisible = true"
                  type="button"
                  class="inline-block p-0 w-8 h-8 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-full shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                >
                  <IconSearch class="h-5 w-5" />
                </button>
                <button
                  type="button"
                  class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                >
                  Report
                </button>
              </div>
            </div>
            <div class="flex-auto p-6">
              <!-- {/* Body */} -->
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >ชื่อ<label class="font-bold text-xs text-red-500">*</label></label
                    >
                    <input
                      type="text"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >นามสกุล<label class="font-bold text-xs text-red-500">*</label></label
                    >
                    <input
                      type="email"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >อีเมล <label class="font-bold text-xs text-gray-500">(ถ้ามี)</label></label
                    >
                    <input
                      type="text"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >เบอร์ติดต่อ <label class="font-bold text-xs text-red-500">*</label></label
                    >
                    <input
                      type="text"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >เลขบัตรประชาชน <label class="font-bold text-xs text-red-500">*</label></label
                    >
                    <input
                      type="email"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <!-- {/* ที่อยู่ */} -->
                <div class="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >ที่อยู่</label
                    >
                    <textarea
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <!-- {/* รูปบัตรประชาชน */} -->
                <div class="flex justify-center w-full max-w-full shrink-0 md:w-full md:flex-0">
                  <div class="max-w-lg">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg"
                    />
                    <div class="mt-2 text-sm text-center text-gray-500">รูปบัตรประชาชน</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div class="flex items-center">
                <h4>ออกบิลค่าเช่า</h4>
                <!-- {/* <button type="button" class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">บันทึก</button> */} -->
              </div>
            </div>
            <div class="flex-auto p-6">
              <!-- {/* Body */} -->
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >หน่วยมิเตอร์ไฟฟ้ารอบบิลที่แล้ว</label
                    >
                    <input
                      disabled
                      value="115"
                      class="text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >หน่วยมิเตอร์น้ำรอบบิลที่แล้ว</label
                    >
                    <input
                      disabled
                      value="45"
                      class="text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >หน่วยมิเตอร์ไฟฟ้า</label
                    >
                    <input
                      type="number"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >หน่วยมิเตอร์น้ำ</label
                    >
                    <input
                      type="number"
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <!-- {/* หมายเหตุ */} -->
                <div class="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div class="mb-4">
                    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
                      >หมายเหตุ</label
                    >
                    <textarea
                      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <hr
                    class="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent"
                  />
                  <p class="leading-normal uppercase text-sm">รายการบิลเพิ่มเติม</p>
                </div>

                <!-- {/* List */} -->
                <button
                  @click="addOtherItem"
                  type="button"
                  class="inline-block px-2 py-2 font-bold leading-normal text-center text-black align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                >
                  เพิ่มรายการ
                </button>
                <div
                  class="flex justify-center w-full max-w-full shrink-0 pt-2 md:w-full md:flex-0 overflow-auto"
                >
                  <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3"># ลำดับ</th>
                        <th scope="col" class="px-6 py-3">ชื่อรายการ</th>
                        <th scope="col" class="px-6 py-3">หน่วย</th>
                        <th scope="col" class="px-6 py-3">ราคา/หน่วย</th>
                        <th scope="col" class="px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- {/* Cell */} -->
                      <!-- {!showEmptyOtherList ? <RoomOtherBillCard/> : null} -->
                    </tbody>
                  </table>
                </div>
                <div class="flex justify-center w-full pt-2">ไม่มีรายการ</div>
                <!-- {/* Action */} -->
                <div
                  class="flex flex-row justify-center w-full max-w-full shrink-0 md:w-full md:flex-0 pt-8"
                >
                  <div class="px-2">
                    <button
                      type="button"
                      class="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      บันทึกข้อมูล
                    </button>
                  </div>
                  <div class="px-2">
                    <button
                      type="button"
                      class="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      พิมพ์ใบแจ้งหนี้
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <FormModal :isVisible="isModalVisible" @onCloseModal="closeAddOtherModal">
      <h3 class="mb-4 text-xl font-medium text-gray-900">เพิ่มข้อมูลบิล</h3>
      <form class="space-y-6" action="#">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900">ชื่อรายการ</label>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900">ราคา</label>
          <input
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          เพิ่มรายการ
        </button>
      </form>
    </FormModal>

    <!-- Search Modal -->
    <FormModal :isVisible="isModalSearchVisible" @onCloseModal="isModalSearchVisible = false">
      <h3 class="mb-4 text-xl font-medium text-gray-900">ค้นหาข้อมูลผู้เช่า</h3>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          maxlength="10"
          type="search"
          class="block w-full p-3 pl-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="ค้นหาด้วยเบอร์โทรศัพท์ ตัวอย่าง 0812345678"
        />
        <button
          class="text-white absolute right-2.5 inset-y-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-0"
        >
          ค้นหา
        </button>
      </div>
      <div
        class="flex justify-center w-full max-w-full shrink-0 pt-2 md:w-full md:flex-0 overflow-auto"
      >
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3"># ลำดับ</th>
              <th scope="col" class="px-6 py-3">ชื่อ - นามสกุล</th>
              <th scope="col" class="px-6 py-3">เบอร์ติดต่อ</th>
              <th scope="col" class="px-6 py-3">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <!-- {/* Cell */} -->
            <!-- {!showEmptyOtherList ? <RoomOtherBillCard/> : null} -->
          </tbody>
        </table>
      </div>
      <div class="flex justify-center w-full pt-2">ไม่มีรายการ</div>
    </FormModal>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// Component
import MainLayout from '@/components/layout/MainLayout.vue'
// Modal
import FormModal from '@/components/modal/FormModal.vue'

// Icon
import IconSearch from '@/components/icons/IconSearch.vue'
/*
import IconDoorBlack from '@/components/icons/room/IconDoorBlack.vue'
import IconDoorGreen from '@/components/icons/room/IconDoorGreen.vue'
import IconDoorOrange from '@/components/icons/room/IconDoorOrange.vue'
import IconDoorRed from '@/components/icons/room/IconDoorRed.vue'
import IconDoorWood from '@/components/icons/room/IconDoorWood.vue'
*/

export default defineComponent({
  components: {
    MainLayout,
    FormModal,
    IconSearch
  },
  props: {
    id: String
  },
  setup() {
    const isModalVisible = ref(false)
    const isModalSearchVisible = ref(false)
    return {
      isModalVisible,
      isModalSearchVisible
    }
  },
  methods: {
    addOtherItem() {
      this.isModalVisible = true
      console.log('addOtherItem')
      console.log(this.isModalVisible)
    },
    closeAddOtherModal() {
      this.isModalVisible = false
    }
  }
})
</script>
