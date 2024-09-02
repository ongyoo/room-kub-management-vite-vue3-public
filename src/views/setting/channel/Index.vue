<template>
<MainLayout>
  <div class="w-full px-6 py-6 mx-auto">
    <div class="flex flex-wrap -mx-3">
      <!-- {/* Table */} -->
      <div class="flex-none w-full max-w-full px-3">
        <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
          <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div class="flex items-center">
              <h6 class="text-gray-400">ตั้งค่าต่างๆ</h6>
            </div>
          </div>
          <div class="flex-auto px-0 pt-0 pb-10">
            <div class="p-0 overflow-x-auto">
              Body
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</MainLayout>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
// Component
import MainLayout from '@/components/layout/MainLayout.vue'

// Icon
import IconAddBlue from '@/components/icons/IconAddBlue.vue'

export default defineComponent({
  components: {
    MainLayout,
    IconAddBlue,
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
