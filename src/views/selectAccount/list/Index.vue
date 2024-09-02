<template>
  <div class="h-screen flex flex-col bg-gray-500">
    <div class="flex flex-row p-4 mb-24">
      <RoomKubLogo class="h-20" />
    </div>
    <div class="flex flex-col items-center justify-center mt-28">
      <!-- Title -->
      <h1 class="text-white text-5xl">เลือก `แอคเค้าท์` ที่ต้องการใช้งาน</h1>

      <!-- Profiles -->
      <div class="flex flex-row flex-wrap gap-5 mt-8">
        <!-- Profile 1 -->
        <a
          v-for="(item, index) in myChannelItems"
          :key="index"
          href="#"
          @click="selectAccount()"
          class="flex flex-col items-center group gap-2"
        >
          <img
            class="w-24 h-24 rounded border-2 border-transparent group-hover:border-2 group-hover:border-orange-300"
            :src="item.logoThumbnailUrl"
          />
          <p class="text-white group-hover:text-orange-300">
            {{ item.name }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import BusinessProvider from '@/resources/business.provider'
import { setAuthToken } from '@/utils/cookie'
import { sessionStorageKey } from '@/utils/constants'
// icon
import RoomKubLogo from '@/components/icons/logo/RoomkubLogoV2.vue'
import {
  MyChannelListResponse,
  MyChannelItemResponse,
} from '@/models/response/mychannel.list.resposne'

export default defineComponent({
  components: { RoomKubLogo },
  setup() {
    const businessProvider = new BusinessProvider()
    const items: MyChannelItemResponse[] = []
    const myChannelItems = ref(items)
    const currentPage = ref(1)
    const fetchData = async () => {
      try {
        const dataResponse = await businessProvider.getMyChannelList(
          currentPage.value
        )
        const response = new MyChannelListResponse(dataResponse.data)
        myChannelItems.value = response.result
        console.log('fetchData : ' + dataResponse)
        console.log('items : ')
        console.log(items)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })
    return { myChannelItems }
  },
  methods: {
    selectAccount() {
      const token = sessionStorage.getItem(sessionStorageKey.authenJWTToken)
      if (token !== null && token.length > 0) {
        setAuthToken(token)
        this.$router.push({
          name: 'dashboard',
        })
      }
    },
  },
})
</script>
