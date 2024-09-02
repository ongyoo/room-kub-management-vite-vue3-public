<template>
  <img :src="blobUrl" alt="image-view" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import DownloadProvider from '@/resources/download.provider'

export default defineComponent({
  props: {
    url: String,
  },
  components: {},
  setup(props) {
    const url = props.url
    const blobUrl = ref('')
    const downloadProvider = new DownloadProvider()
    const fetchData = async () => {
      if (url !== undefined) {
        try {
          const dataResponse = await downloadProvider.getImage(url)
          // Create a Blob from the binary data
          const blob = new Blob([dataResponse.data], {
            type: dataResponse.headers['content-type'],
          })
          // Generate a Blob URL
          blobUrl.value = URL.createObjectURL(blob)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }

    onMounted(() => {
      if (url !== undefined) {
        fetchData()
      }
    })
    return { blobUrl }
  },
  beforeUnmount() {
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl)
    }
  },
  methods: {},
})
</script>
