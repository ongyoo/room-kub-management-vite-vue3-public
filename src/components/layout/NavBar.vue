<template>
  <!-- Navbar -->
  <nav
    class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
    navbar-main
    navbar-scroll="false"
  >
    <div
      class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit"
    >
      <nav>
        <!-- breadcrumb -->
        <ol
          class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16"
        >
          <li class="text-sm leading-normal">
            <a class="text-white opacity-50" href="javascript:;">Pages</a>
          </li>
          <li
            class="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
            aria-current="page"
          >
            Dashboard
          </li>
        </ol>
        <h6 class="mb-0 font-bold text-white capitalize">Dashboard</h6>
      </nav>

      <div
        class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
      >
        <div class="flex items-center md:ml-auto md:pr-4">
          <!-- <div
          class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
          <span
            class="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            class="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
            placeholder="Type here..." />
        </div> -->
        </div>
        <ul class="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
          <!-- online builder btn  -->
          <!-- <li class="flex items-center">
          <a class="inline-block px-8 py-2 mb-0 mr-4 text-xs font-bold text-center text-blue-500 uppercase align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer leading-pro hover:-translate-y-px active:shadow-xs hover:border-blue-500 active:bg-blue-500 active:hover:text-blue-500 hover:text-blue-500 tracking-tight-rem hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053">Online Builder</a>
        </li> -->
          <!-- profile -->
          <li class="flex items-center">
            <a
              @click="onClickProfile()"
              class="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
            >
              <img
                v-if="userPayLoadModel?.thumbnailUrl"
                class="h-8 w-8 border-2 border-white border-solid rounded-circle hover:bg-orange-400 cursor-pointer"
                :src="userPayLoadModel?.thumbnailUrl"
              />
              <IconAccountDefault
                v-else
                class="h-8 w-8 border-2 border-white border-solid rounded-circle hover:bg-orange-400 cursor-pointer"
              />
            </a>

            <ul
              v-if="isOpenProfile"
              class="text-sm lg:shadow-3xl duration-250 min-w-44 before:sm:right-8 before:text-5.5 absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:z-50 before:text-white before:antialiased before:transition-all sm:-mr-2 lg:absolute lg:right-0 lg:left-auto lg:block lg:cursor-pointer transform-dropdown-show mt-8"
            >
              <!-- dropdown profile -->
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-black hover:bg-orange-400"
                  >ข้อมูลของฉัน</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-red-500 hover:bg-orange-400"
                  >ออกจากระบบ</a
                >
              </li>
            </ul>
          </li>

          <li class="flex items-center pl-4 xl:hidden">
            <a
              @click="onClickOpenSide()"
              class="block p-0 text-sm text-white transition-all ease-nav-brand"
            >
              <div class="w-4.5 overflow-hidden">
                <i
                  class="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"
                ></i>
                <i
                  class="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"
                ></i>
                <i
                  class="ease relative block h-0.5 rounded-sm bg-white transition-all"
                ></i>
              </div>
            </a>
          </li>
          <li class="flex items-center px-4">
            <a
              href="javascript:;"
              class="p-0 text-sm text-white transition-all ease-nav-brand"
            >
              <i fixed-plugin-button-nav class="cursor-pointer fa fa-cog"></i>
              <!-- fixed-plugin-button-nav  -->
            </a>
          </li>

          <!-- notifications -->

          <li class="relative flex items-center pr-2">
            <p class="hidden transform-dropdown-show"></p>
            <a
              @click="onClickNotifications()"
              class="block p-0 text-sm text-white transition-all ease-nav-brand"
            >
              <!-- <IconBell class="cursor-pointer h-5 w-5" /> -->
              <IconBellDot class="cursor-pointer h-5 w-5" />
            </a>

            <ul
              v-if="isOpenNotifications"
              class="text-sm lg:shadow-3xl duration-250 min-w-44 before:sm:right-8 before:text-5.5 absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:z-50 before:text-white before:antialiased before:transition-all sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer transform-dropdown-show"
            >
              <!-- add show class on dropdown open js -->
              <li class="relative mb-2 hover:bg-orange-300">
                <a
                  class="ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 lg:transition-colors"
                  href="javascript:;"
                >
                  <div class="flex py-1">
                    <div class="my-auto">
                      <img
                        src="../assets/img/team-2.jpg"
                        class="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
                      />
                    </div>
                    <div class="flex flex-col justify-center">
                      <h6 class="mb-1 font-normal leading-normal text-sm">
                        <span class="font-semibold">ข้อความใหม่</span> จาก คุณ
                        มาดี มานะ
                      </h6>
                      <p class="mb-2 leading-tight text-xs text-slate-400">
                        ทดสอบ ข้อความ ดีเทล
                      </p>
                      <p class="mb-0 leading-tight text-xs text-slate-400">
                        <IconNotiClock class="mr-1 mb-1 h-3 w-3" />
                        13 นาทีที่แล้ว
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- end Navbar -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  useSidebar,
  useNotificationsDropDown,
  useProfileDropDown,
} from '@/hooks/useSidebar'
import UserProvider from '@/resources/user.provider'
//import UserPayloadModel from '@/models/user/user.payload.model'

// Icon
import IconBell from '@/components/icons/IconBell.vue'
import IconBellDot from '@/components/icons/IconBellDot.vue'
import IconNotiClock from '@/components/icons/IconNotiClock.vue'
import IconAccountDefault from '@/components/icons/IconAccountDefault.vue'

export default defineComponent({
  components: {
    IconBell,
    IconBellDot,
    IconNotiClock,
    IconAccountDefault,
  },
  setup() {
    const { isOpen } = useSidebar()
    const { isOpenNotifications } = useNotificationsDropDown()
    const { isOpenProfile } = useProfileDropDown()
    const userProvider = new UserProvider()
    const userPayLoadModel = userProvider.getAuthenJWT()
    return {
      isOpen,
      isOpenNotifications,
      isOpenProfile,
      userPayLoadModel,
    }
  },
  methods: {
    onClickOpenSide() {
      this.resetRef()
      this.isOpen = !this.isOpen
    },
    onClickProfile() {
      this.isOpen = false
      this.isOpenNotifications = false
      this.isOpenProfile = !this.isOpenProfile
    },
    onClickNotifications() {
      this.isOpen = false
      this.isOpenProfile = false
      this.isOpenNotifications = !this.isOpenNotifications
    },
    resetRef() {
      this.isOpenProfile = false
      this.isOpenNotifications = false
    },
  },
})
</script>
