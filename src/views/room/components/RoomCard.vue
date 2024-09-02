<template>
  <div @click="selectRoomDetail" class="p-6 rounded-lg">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border hover:bg-orange-100 cursor-pointer"
    >
      <div
        class="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
      >
        <div class="h-40 text-center">
          <IconDoorWood v-if="item.isAvailable" class="h-full w-full" />
          <IconDoorRed v-if="item.isBusyAndOrverDue" class="h-full w-full" />
          <IconDoorOrange v-if="item.isReportOut" class="h-full w-full" />
          <IconDoorGreen v-if="item.isBusyAndPaid" class="h-full w-full" />
          <IconDoorBlack v-if="item.isRepair" class="h-full w-full" />
        </div>
      </div>
      <div class="flex-auto p-4 pt-0 text-center">
        <!-- title -->
        <div class="flex justify-center flex-row items-center">
          <h5 class="mb-0 font-bold text-center">ห้อง: {{ item.name }}</h5>
          <h5 class="mb-0 font-bold text-center px-2">
            ชั้น: {{ item.floor }}
          </h5>
        </div>
        <!-- description -->
        <span class="text-xs leading-tight"
          ><span class="text-xs font-medium leading-tight text-black"
            >รายละเอียด:</span
          >
          {{ description }}</span
        >
        <hr
          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
        />
        <div class="flex flex-col items-center">
          <div v-if="item.specialPrice" class="flex flex-col mb-0">
            <div class="flex justify-center items-baseline mb-4">
              <span class="line-through text-gray-500 mr-2"
                >฿{{ item.price.toLocaleString() }}</span
              >
              <span class="text-red-500 text-2xl font-bold"
                >฿{{ item.specialPrice.toLocaleString() }}</span
              >
            </div>
          </div>
          <span
            v-else
            class="mb-0 line-through text-gray-400 text-gl font-medium"
          >
            ฿{{ item.price.toLocaleString() }}
          </span>
        </div>
        <h5
          class="mb-0"
          :class="{
            'text-green-500': item.isAvailable || item.isBusyAndPaid,
            'text-red-500': item.isBusyAndOrverDue,
            'text-orange-500': item.isReportOut,
            'text-yellow-500': item.isRepair,
          }"
        >
          สถานะ: {{ status }}
        </h5>
        <h6
          v-if="item.isRepair || item.isReportOut || item.isBusyAndOrverDue"
          class="mb-0 text-yellow-500"
        >
          หมายเหตุ: แอร์, น้ำไม่ไหล
        </h6>
      </div>
    </div>
  </div>

  <!-- <div @click="selectRoomDetail('101')" class="p-6 rounded-lg">
    <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border hover:bg-slate-400 cursor-pointer">
      <div class="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
        <div class="h-40 text-center">
          <IconDoorWood class="h-full w-full" />
        </div>
      </div>
      <div class="flex-auto p-4 pt-0 text-center">
        <h5 class="mb-0 text-center">ห้อง 101</h5>
        <span class="text-xs leading-tight ">ห้องพัดลม</span>
        <hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <h5 class="mb-0">ราคา: 2,500 บาท</h5>
        <h5 class="mb-0 text-green-500">สถานะ: ว่าง</h5>
      </div>
    </div>
  </div>
   {/* end cell */}
  {/* cell */}
  <div class="p-6 rounded-lg">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border hover:bg-slate-400"
    >
      <div
        class="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
      >
        <div class="h-40 text-center">
          <IconDoorRed class="h-full w-full" />
        </div>
      </div>
      <div class="flex-auto p-4 pt-0 text-center">
        <h5 class="mb-0 text-center">ห้อง 102</h5>
        <span class="text-xs leading-tight">ห้องพัดลม</span>
        <hr
          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
        />
        <h5 class="mb-0">ค้างชำระ 5,500 บาท</h5>
        <h5 class="mb-0 text-red-500">สถานะ: ค้างชำระ</h5>
      </div>
    </div>
  </div>
  {/* end cell */} 
  {/* cell */}
  <div class="p-6 rounded-lg">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border hover:bg-slate-400"
    >
      <div
        class="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
      >
        <div class="h-40 text-center">
          <IconDoorOrange class="h-full w-full" />
        </div>
      </div>
      <div class="flex-auto p-4 pt-0 text-center">
        <h5 class="mb-0 text-center">ห้อง 103</h5>
        <span class="text-xs leading-tight">ห้องพัดลม</span>
        <hr
          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
        />
        <h5 class="mb-0">ค้างชำระ 8,500 บาท</h5>
        <h5 class="mb-0 text-orange-500">สถานะ: แจ้งออกวันที่ 12/12/2566</h5>
      </div>
    </div>
  </div>
  {/* end cell */}
  {/* cell */}
  <div class="p-6 rounded-lg">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border hover:bg-slate-400"
    >
      <div
        class="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
      >
        <div class="h-40 text-center">
          <IconDoorGreen class="h-full w-full" />
        </div>
      </div>
      <div class="flex-auto p-4 pt-0 text-center">
        <h5 class="mb-0 text-center">ห้อง 104</h5>
        <span class="text-xs leading-tight">ห้องพัดลม</span>
        <hr
          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
        />
        <h5 class="mb-0">ราคา: 2,500 บาท</h5>
        <h5 class="mb-0 text-green-500">สถานะ: มีผู้เช่าปกติ</h5>
      </div>
    </div>
  </div>
  {/* end cell */}
  {/* cell */}
  <div class="p-6 rounded-lg">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border hover:bg-slate-400"
    >
      <div
        class="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
      >
        <div class="h-40 text-center">
          <IconDoorBlack class="h-full w-full" />
        </div>
      </div>
      <div class="flex-auto p-4 pt-0 text-center">
        <h5 class="mb-0 text-center">ห้อง 105</h5>
        <span class="text-xs leading-tight">ห้องพัดลม</span>
        <hr
          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
        />
        <h5 class="mb-0 text-black">สถานะ: แจ้งซ่อม</h5>
        <h6 class="mb-0 text-yellow-500">หมายเหตุ: แอร์, น้ำไม่ไหล</h6>
      </div>
    </div>
  </div>
  -->
  <!-- {/* end cell */} -->
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RoomItemResponse } from '@/models/response/room/room.list.response'

// Icon
import IconDoorBlack from '@/components/icons/room/IconDoorBlack.vue'
import IconDoorGreen from '@/components/icons/room/IconDoorGreen.vue'
import IconDoorOrange from '@/components/icons/room/IconDoorOrange.vue'
import IconDoorRed from '@/components/icons/room/IconDoorRed.vue'
import IconDoorWood from '@/components/icons/room/IconDoorWood.vue'

export default defineComponent({
  props: {
    roomItem: RoomItemResponse,
  },
  components: {
    IconDoorBlack,
    IconDoorGreen,
    IconDoorOrange,
    IconDoorRed,
    IconDoorWood,
  },
  setup(props) {
    const item = props.roomItem
    // Computed property as a getter
    const status = computed(() => {
      if (item?.isAvailable) {
        return 'ว่าง'
      } else if (item?.isBusy) {
        if (item.isBusyAndPaid) {
          return 'ชำระแล้ว'
        }

        if (item.isBusyAndWaitingForPayment) {
          return 'รอชำระ'
        }

        if (item.isBusyAndWaitingForApprove) {
          return 'รอตรวจสอบชำระ'
        }

        if (item.isBusyAndCashPayment) {
          return 'ชำระเงินสด'
        }

        if (item.isBusyAndPaymentBankTransfer) {
          return 'ชำระด้วยการโอนเงิน'
        }

        if (item.isBusyAndOverdue) {
          return 'ค้างชำระ'
        }

        if (item.isBusyAndNone) {
          return 'ไม่มีสถานะ'
        }
        return 'ไม่ทราบ'
      } else if (item?.isReportOut) {
        return 'แจ้งออก'
      } else if (item?.isRepair) {
        return 'แจ้งซ่อม'
      }
      return ''
    })

    const description = computed(() => {
      const maxLength = 128
      const detail = item?.description || ''
      return detail.length > maxLength
        ? detail.substring(0, maxLength) + '...'
        : detail
    })
    return { item, status, description }
  },
  methods: {
    selectRoomDetail() {
      this.$emit('onSelectRoom', this.item?.id)
    },
  },
})
</script>
