<template>
  <RouterView />
  <LoadingView />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'
// Components
import LoadingView from '@/components/Loading.vue'

export default defineComponent({
  components: {
    RouterView,
    LoadingView
  },
  setup() {
    const route = useRoute()
    watchEffect(() => {
      // if (route.meta) {
      //   document.title = route.meta.title || 'Room Kub (รูม-คับ) ระบบจัดการห้องพัก'
      // } else {
      //   document.title = 'Room Kub [Free ใช้งานฟรี] ระบบจัดการห้องพักครบวงจร ใช้งาน ฟรี !!'
      // }
    })
    return { route }
  },
  methods: {}
})
</script>

<!-- <script lang="ts">
import { watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Loading from '@/components/Loading.vue'
const route = useRoute()
watchEffect(() => {
  // if (route.meta) {
  //   document.title = route.meta.title || 'Room Kub (รูม-คับ) ระบบจัดการห้องพัก'
  // } else {
  //   document.title = 'Room Kub [Free ใช้งานฟรี] ระบบจัดการห้องพักครบวงจร ใช้งาน ฟรี !!'
  // }
})
</script> -->
