<template>
  <MainLayout>
    <div class="w-full px-6 py-6 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <!-- {/* Table */} -->
        <div class="flex-none w-full max-w-full px-3">
          <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
            <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <div class="flex items-center">
                <h6 class="text-gray-400">ข้อมูลบัญชีทั้งหมด</h6>
              </div>
            </div>
            <div class="flex-auto px-0 pt-0 pb-10">
              <div class="p-0 overflow-x-auto">
                <table class="items-center w-full mb-0 align-top border-collapse text-slate-500">
                  <thead class="align-bottom">
                    <tr>
                      <th
                        class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        ชื่อ-นามสกุล
                      </th>
                      <th
                        class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        ที่อยู่
                      </th>
                      <th
                        class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        เบอร์ติดต่อ
                      </th>
                      <th
                        class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        สถานะ
                      </th>
                      <th
                        class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div class="flex px-2 py-1">
                          <div>
                            <img src="" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" />
                          </div>
                          <div class="flex flex-col justify-center">
                            <h6 class="mb-0 text-sm leading-normal">มาดี</h6>
                            <p class="mb-0 text-xs leading-tight text-slate-400">นาย มาดี นะครับ</p>
                          </div>
                        </div>
                      </td>
                      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p class="mb-0 text-xs font-semibold leading-tight">Manager</p>
                        <p class="mb-0 text-xs leading-tight text-slate-400">Organization</p>
                      </td>
                      <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span class="text-xs font-semibold leading-tight text-slate-400">081-2345678</span>
                      </td>
                      <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span
                          class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                          >Online</span
                        >
                      </td>
                      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <a class="text-xs font-semibold leading-tight text-slate-400"> รายละเอียด </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- paging -->
            <div class="flex pb-2 items-center justify-center">
              <Pagination :currentPageIndex="1" :totalPage="5" />
            </div>
            <!-- end paging -->
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Component
import MainLayout from '@/components/layout/MainLayout.vue'
import Pagination from '@/components/layout/Pagination.vue'

// Icon
import IconAddBlue from '@/components/icons/IconAddBlue.vue'

export default defineComponent({
  components: {
    MainLayout,
    Pagination,
    IconAddBlue
  },
  setup() {
    return {}
  },
  methods: {
    createUser() {
      this.$router.push({
        name: 'create-room'
      })
    }
  }
})
</script>
