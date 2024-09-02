<template>
  <MainLayout>
    <div class="w-full px-6 py-6 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div
              class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
            >
              <div class="flex items-center">
                <h4 class="text-gray-400">ห้องพักทั้งหมด</h4>
                <button
                  @click="createRoom()"
                  type="button"
                  class="inline-block px-4 py-2 mb-1 font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in cursor-pointer text-xs tracking-tight-rem hover:-translate-y-px active:opacity-85"
                >
                  <IconAddBlue class="pb-1 h-6 w-6" />
                  เพิ่มห้องพัก
                </button>
              </div>
            </div>
            <!-- <div class="container mx-auto px-20"> -->
            <div class="px-20">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <!-- room card -->
                <RoomCard
                  v-for="(item, index) in roomItems"
                  :key="index"
                  :roomItem="item"
                  @onSelectRoom="onSelectRoom"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- {/* Table */} -->
        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div
              class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
            >
              <h6>Authors table</h6>
            </div>
            <div class="flex-auto px-0 pt-0 pb-10">
              <div class="p-0 overflow-x-auto">
                <table
                  class="items-center w-full mb-0 align-top border-collapse text-slate-500"
                >
                  <thead class="align-bottom">
                    <tr>
                      <th
                        class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        Author
                      </th>
                      <th
                        class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        Function
                      </th>
                      <th
                        class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        Status
                      </th>
                      <th
                        class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        Employed
                      </th>
                      <th
                        class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                      >
                        <div class="flex px-2 py-1">
                          <div>
                            <img
                              src=""
                              class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                            />
                          </div>
                          <div class="flex flex-col justify-center">
                            <h6 class="mb-0 text-sm leading-normal">
                              John Michael
                            </h6>
                            <p
                              class="mb-0 text-xs leading-tight text-slate-400"
                            >
                              john@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                      >
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Manager
                        </p>
                        <p class="mb-0 text-xs leading-tight text-slate-400">
                          Organization
                        </p>
                      </td>
                      <td
                        class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                      >
                        <span
                          class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                          >Online</span
                        >
                      </td>
                      <td
                        class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                      >
                        <span
                          class="text-xs font-semibold leading-tight text-slate-400"
                          >23/04/18</span
                        >
                      </td>
                      <td
                        class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                      >
                        <a
                          class="text-xs font-semibold leading-tight text-slate-400"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import RoomProvider from '@/resources/room.provider'
import {
  RoomListResponse,
  RoomItemResponse,
} from '@/models/response/room/room.list.response'
// Component
import MainLayout from '@/components/layout/MainLayout.vue'
import RoomCard from '@/views/room/components/RoomCard.vue'

// Icon
import IconDoorBlack from '@/components/icons/room/IconDoorBlack.vue'
import IconDoorGreen from '@/components/icons/room/IconDoorGreen.vue'
import IconDoorOrange from '@/components/icons/room/IconDoorOrange.vue'
import IconDoorRed from '@/components/icons/room/IconDoorRed.vue'
import IconDoorWood from '@/components/icons/room/IconDoorWood.vue'

import IconAddBlue from '@/components/icons/IconAddBlue.vue'

export default defineComponent({
  components: {
    MainLayout,
    IconDoorBlack,
    IconDoorGreen,
    IconDoorOrange,
    IconDoorRed,
    IconDoorWood,
    IconAddBlue,
    RoomCard,
  },
  setup() {
    const roomProvider = new RoomProvider()
    const items: RoomItemResponse[] = []
    const roomItems = ref(items)
    const currentPage = ref(1)
    const fetchData = async () => {
      try {
        const dataResponse = await roomProvider.getRoomList(currentPage.value)
        const response = new RoomListResponse(dataResponse.data)
        roomItems.value = response.roomList
        console.log(response.roomList)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })
    return { roomItems, fetchData, currentPage }
  },
  methods: {
    createRoom() {
      this.$router.push({
        name: 'create-room',
      })
    },
    onSelectRoom(id: string) {
      this.$router.push({
        name: 'room-detail',
        params: {
          id: id,
        },
      })
    },
  },
})
</script>
