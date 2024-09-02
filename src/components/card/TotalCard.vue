<template>
  <div
    class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
  >
    <div
      class="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border"
    >
      <div class="flex-auto p-4">
        <div class="flex flex-row -mx-3">
          <div class="flex-none w-2/3 max-w-full px-3">
            <div>
              <p
                class="mb-0 font-sans text-sm font-semibold leading-normal uppercase"
              >
                {{ title }}
              </p>
              <h5 class="mb-2 font-bold">{{ totalCount }} บาท</h5>
              <p class="mb-0">
                <span class="text-sm font-bold leading-normal text-emerald-500"
                  >+55%</span
                >
              </p>
            </div>
          </div>
          <div class="px-3 text-right basis-1/3">
            <!-- class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500"> -->
            <div
              v-if="cardType === 'total_baht'"
              class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-amber-500 to-yellow-500"
            >
              <IconBaht class="leading-none relative w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Model
import { TotalCardType } from '@/models/enum/card.enum'

// Icon
import IconBaht from '@/components/icons/IconBaht.vue'

export default defineComponent({
  props: {
    cardType: TotalCardType,
    title: String,
    totalCount: Number,
    /*
    someOptionalString: String,

    someRequiredString: {
      type: String,
      required: true
    },
    */
  },
  components: {
    IconBaht,
  },
  setup(props) {
    console.log(props.cardType)
    return {}
  },
  methods: {},
})
</script>
