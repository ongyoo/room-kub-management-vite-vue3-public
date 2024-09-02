<template>
<nav aria-label="Pagination" class="flex items-center text-gray-600">
  <!-- previous -->
  <a href="#" @click="onPrevious()" class="p-2 mr-4 rounded hover:bg-gray-100">
    <IconArrowLeft class="h-6 w-6" />
  </a>
  <a href="#" class="px-4 py-2 rounded hover:bg-orange-300" :class="{'text-gray-900 font-medium bg-orange-400': item === currentPageIndex}" v-for="(item, index) in totalPage" :key="index" :index="index" :item="item"> {{ item }} </a>
  <!-- next -->
  <a href="#" @click="onNext()" class="p-2 ml-4 rounded hover:bg-gray-100">
    <IconArrowRight class="h-6 w-6" />
  </a>
</nav>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

// Icon
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

export default defineComponent({
  props: {
    currentPageIndex: Number,
    totalPage: Number,
  },
  components: {
    IconArrowLeft,
    IconArrowRight,
  },
  setup() {
    return {}
  },
  methods: {
    onPrevious() {
      console.log('onPrevious')
    },
    onNext() {
      console.log('onNext')
    },
    onSelectNumber(index: number) {
      console.log('onSelectNumber : ' + index)
    },
  }
})
</script>
