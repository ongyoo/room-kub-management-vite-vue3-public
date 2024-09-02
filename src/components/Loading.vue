<template>
  <div v-if="loading > 0" class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
    <IconLoading />
    <h2 class="text-center text-white text-xl font-semibold">กำลังโหลดข้อมูล...</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
// Component
import PubSub from 'pubsub-js'
import { pubSubSubscribeChannels } from '@/utils/constants'
import IconLoading from '@/components/icons/IconLoading.vue'

export default defineComponent({
  components: {
    IconLoading
  },
  setup() {
    //const loading: number = 0
    const loading = ref(0)

    const handleLoadingIncrease = () => {
      loading.value = loading.value + 1
    }

    const handleLoadingDecrease = () => {
      loading.value = loading.value - 1
    }

    onMounted(() => {
      console.log('onMounted Loading')
      console.log(loading)
      PubSub.subscribe(pubSubSubscribeChannels.loadingIncrease, handleLoadingIncrease)
      PubSub.subscribe(pubSubSubscribeChannels.loadingDecrease, handleLoadingDecrease)
    })

    onBeforeUnmount(() => {
      PubSub.unsubscribe(pubSubSubscribeChannels.loadingIncrease)
      PubSub.unsubscribe(pubSubSubscribeChannels.loadingDecrease)
    })

    return { loading }
  }
})
</script>

<!-- <script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PubSub from 'pubsub-js'
import { pubSubSubscribeChannels } from '@/utils/constants'
import IconLoading from '@/components/icons/IconLoading.vue'

@Options({
  components: {
    IconLoading,
  },
})
export default class Loading extends Vue {
  private loading = 0

  mounted(): void {
    PubSub.subscribe(
      pubSubSubscribeChannels.loadingIncrease,
      this.handleLoadingIncrease
    )
    PubSub.subscribe(
      pubSubSubscribeChannels.loadingDecrease,
      this.handleLoadingDecrease
    )
  }

  beforeDestroy(): void {
    PubSub.unsubscribe(pubSubSubscribeChannels.loadingIncrease)
    PubSub.unsubscribe(pubSubSubscribeChannels.loadingDecrease)
  }

  private handleLoadingIncrease(): void {
    this.loading++
  }

  private handleLoadingDecrease(): void {
    this.loading--
  }
}
</script> -->
