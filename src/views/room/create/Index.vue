<template>
  <MainLayout>
    <div class="w-full px-6 py-6 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <!-- {/* เพิ่มข้อมูลห้อง */} -->
        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
          >
            <div
              class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0"
            >
              <div class="flex items-center">
                <h4>เพิ่มข้อมูลห้อง</h4>
                <button
                  @click="addRoom()"
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
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0"
                >
                  <InputForm
                    v-model="inputName"
                    title="เลขที่ห้องพัก"
                    placeholder="กรุณาใส่ชื่อห้องพักเช่น 101, A101 เป็นต้น"
                    :required="true"
                  />
                </div>
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0"
                >
                  <InputForm
                    v-model="inputName"
                    title="ชั้นที่"
                    type="number"
                    :maxlength="2"
                    placeholder="กรุณาใส่เลขชั้นห้องพักเช่น 1 เป็นต้น"
                    :required="true"
                  />
                </div>
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0"
                >
                  <InputForm
                    v-model="inputName"
                    title="ราคาเต็ม"
                    type="number"
                    :maxlength="7"
                    placeholder="กรุณาใส่ราคาเต็มห้องพัก"
                    :required="true"
                  />
                </div>
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0"
                >
                  <InputForm
                    v-model="inputName"
                    title="ราคาพิเศษ (ลดสูงสุด)"
                    type="number"
                    :maxlength="7"
                    placeholder="กรุณาใส่ราคาพิเศษ (ลดสูงสุด) ถ้าไม่มีไม่ต้องกรอก"
                  />
                </div>
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0"
                >
                  <InputSelect
                    title="สถานะ"
                    :status="selectedStatus"
                    :options="dropdownOptions"
                    @update:status="handleStatusUpdate"
                  />
                </div>
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0"
                >
                  <InputAreaForm
                    v-model="inputName"
                    title="รายละเอียด"
                    placeholder="กรุณาใส่รายละเอียด"
                    :required="true"
                  />
                </div>
                <div
                  class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0"
                >
                  <InputTagForm
                    title="แท็ก"
                    placeholder="เพิ่มแท็ก"
                    :initialTags="inputTags"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// Component
import MainLayout from '@/components/layout/MainLayout.vue'
import InputSelect from '@/components/input/InputSelect.vue'
import InputForm from '@/components/input/InputForm.vue'
import InputAreaForm from '@/components/input/InputAreaForm.vue'
import InputTagForm from '@/components/input/InputTagForm.vue'
// Modal
import FormModal from '@/components/modal/FormModal.vue'

// Icon
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
    InputSelect,
    InputForm,
    InputAreaForm,
    InputTagForm,
  },
  props: {
    id: String,
  },
  setup() {
    const isModalVisible = ref(false)
    const inputName = ref('')
    const inputTags = ref<string[]>(['Vue', 'Tailwind', 'TypeScript'])
    const selectedStatus = ref('option1')
    const dropdownOptions = ref([
      { value: 'option1', text: 'ว่าง' },
      { value: 'option2', text: 'ไม่ว่าง' },
    ])

    return {
      isModalVisible,
      selectedStatus,
      dropdownOptions,
      inputName,
      inputTags,
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
    },
    handleStatusUpdate(newStatus: string) {
      this.selectedStatus.value = newStatus
    },
    addRoom() {
      this.$router.back()
    },
  },
})
</script>

<!-- {
  "name": "101",
  "description": "ห้องแอร์ พร้อมอยู่",
  "floor": 1,
  "price": 3500.00,
  "special_price": 3200.00,
  "is_special_price": true,
  "tags": ["ห้องแอร์", "เฟอร์นิเจอร์", "ชุมแพ"],
  "location": null,
  "type": "apartment",
  "sub_type": "other"

} -->
