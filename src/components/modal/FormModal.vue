<template>
<div v-if="isVisible" class="fixed flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-500 bg-opacity-50">
  <div class="relative w-full max-w-md max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow">
      <button @click="$emit('onCloseModal')" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
        <IconCloseModal class="w-3 h-3" />
        <span class="sr-only">Close modal</span>
      </button>
      <div class="px-6 py-6 lg:px-8">
        <slot />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
// Icon
import IconCloseModal from '@/components/icons/IconCloseModal.vue'

export default defineComponent({
  props: {
    isVisible: Boolean
  },
  components: {
    IconCloseModal,
  },
  setup() {
    return {}
  },
  methods: {

  }
})
</script>
