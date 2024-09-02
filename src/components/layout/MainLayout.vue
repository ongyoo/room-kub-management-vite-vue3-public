<template>
  <div class="m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500">
    <!-- <div class="absolute bg-y-50 w-full top-0 min-h-75" :class="`bg-[url('${ imageBannerUrl }')]`"> -->
    <div class="absolute w-full bg-blue-500 min-h-75">
      <span class="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
    </div>
    <SideNav />
    <div class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
      <Navbar />
      <div class="w-full px-6 py-6 mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Components
import Navbar from '@/components/layout/navBar.vue'
import SideNav from '@/components/layout/sideNav.vue'

export default defineComponent({
  components: {
    Navbar,
    SideNav
  },
  setup() {
    const imageBannerUrl = new URL('@/components/icons/png/banner/bg-banner-1.jpg', import.meta.url)
    return {
      imageBannerUrl
    }
  },
  methods: {
    submitLogin() {
      console.log('submitLogin')
    }
  }
})
</script>
