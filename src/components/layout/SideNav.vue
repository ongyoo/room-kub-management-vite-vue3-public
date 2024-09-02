<template>
  <!-- sidenav  -->
  <aside
    class="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-50 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
    :class="!isOpen ? '-translate-x-full' : ''"
    aria-expanded="false"
  >
    <div class="h-19">
      <i
        class="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
        sidenav-close
      ></i>
      <a
        class="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
        href="#"
        target="_blank"
      >
        <RoomKubLogo
          class="h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand"
        />
      </a>
    </div>

    <hr
      class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
    />

    <div
      class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full"
    >
      <ul class="flex flex-col pl-0 mb-0">
        <li
          class="mt-0.5 w-full"
          v-for="(item, index) in menuItems"
          :key="index"
          :index="index"
          :item="item"
        >
          <a
            v-if="item.type === 'menu_item'"
            @click="onClickMenuItem(item)"
            class="cursor-pointer py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors hover:bg-orange-400"
            :class="validateCurrentMenu(item.pathName) ? 'bg-blue-500/13' : ''"
          >
            <div
              class="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-center stroke-0 text-center"
            >
              <IconMenuDashboard
                v-if="item.iconName === 'dashboard'"
                class="h-6 w-6"
              />
              <IconMenuRoom v-if="item.iconName === 'rooms'" class="h-6 w-6" />
              <IconMenuAddRoom
                v-if="item.iconName === 'create-room'"
                class="h-6 w-6"
              />
              <IconMenuTenant
                v-if="item.iconName === 'tenant'"
                class="h-6 w-6"
              />
              <IconMenuUser v-if="item.iconName === 'user'" class="h-6 w-6" />
              <IconMenuAccounting
                v-if="item.iconName === 'accounting'"
                class="h-6 w-6"
              />
              <IconMenuRepair
                v-if="item.iconName === 'repair'"
                class="h-6 w-6"
              />
              <IconMenuReport
                v-if="item.iconName === 'report'"
                class="h-6 w-6"
              />
              <IconMenuSettingChannel
                v-if="item.iconName === 'setting-channel'"
                class="h-6 w-6"
              />
              <IconMenuContract
                v-if="item.iconName === 'contract'"
                class="h-6 w-6"
              />
              <IconMenuTemplateContract
                v-if="item.iconName === 'template-contract'"
                class="h-6 w-6"
              />
              <IconMenuPermissions
                v-if="item.iconName === 'permission'"
                class="h-6 w-6"
              />
              <IconMenuChat v-if="item.iconName === 'chat'" class="h-6 w-6" />
              <IconMenuUndefined
                v-if="item.iconName === 'undefined'"
                class="h-6 w-6"
              />
            </div>
            <span
              class="ml-1 duration-300 opacity-100 pointer-events-none ease"
              >{{ item.name }}</span
            >
          </a>
          <h6
            v-else-if="item.type === 'section_title'"
            class="pl-6 ml-2 pt-4 text-xl font-bold leading-tight uppercase opacity-60"
          >
            {{ item.title }}
          </h6>
        </li>
      </ul>
    </div>
    <!-- footer -->
    <div class="flex flex-col">
      <div class="flex justify-center pt-4">
        <img
          class="object-cover h-20 w-auto"
          :src="logoChannelUrl"
          alt="carousel image"
        />
      </div>
      <div
        class="flex justify-center text-xs font-bold leading-tight uppercase opacity-80"
      >
        VK House ชุมแพ
      </div>
    </div>
  </aside>

  <!-- end sidenav -->
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import {
  useSidebar,
  useNotificationsDropDown,
  useProfileDropDown,
} from '@/hooks/useSidebar'
// Model
import SideNavItemModel from '@/models/sideNav/sideNavItem.model'

// Enum
import { SideItemType } from '@/models/enum/card.enum'

// Icon
import RoomKubLogo from '@/components/icons/logo/RoomkubLogoV2.vue'
import IconMenuDashboard from '@/components/icons/sideMenu/IconMenuDashboard.vue'
import IconMenuRoom from '@/components/icons/sideMenu/IconMenuRoom.vue'
import IconMenuAddRoom from '@/components/icons/sideMenu/IconMenuAddRoom.vue'
import IconMenuTenant from '@/components/icons/sideMenu/IconMenuTenant.vue'
import IconMenuUser from '@/components/icons/sideMenu/IconMenuUser.vue'
import IconMenuAccounting from '@/components/icons/sideMenu/IconMenuAccounting.vue'
import IconMenuRepair from '@/components/icons/sideMenu/IconMenuRepair.vue'
import IconMenuReport from '@/components/icons/sideMenu/IconMenuReport.vue'
import IconMenuSettingChannel from '@/components/icons/sideMenu/IconMenuSettingChannel.vue'
import IconMenuContract from '@/components/icons/sideMenu/IconMenuContract.vue'
import IconMenuTemplateContract from '@/components/icons/sideMenu/IconMenuTemplateContract.vue'
import IconMenuPermissions from '@/components/icons/sideMenu/IconMenuPermissions.vue'
import IconMenuChat from '@/components/icons/sideMenu/IconMenuChat.vue'

import IconMenuUndefined from '@/components/icons/sideMenu/IconMenuUndefined.vue'

export default defineComponent({
  components: {
    IconMenuDashboard,
    IconMenuRoom,
    RoomKubLogo,
    IconMenuTenant,
    IconMenuUser,
    IconMenuAccounting,
    IconMenuAddRoom,
    IconMenuRepair,
    IconMenuReport,
    IconMenuSettingChannel,
    IconMenuContract,
    IconMenuTemplateContract,
    IconMenuPermissions,
    IconMenuChat,
    IconMenuUndefined,
  },
  setup() {
    const { isOpen } = useSidebar()
    const { isOpenNotifications } = useNotificationsDropDown()
    const { isOpenProfile } = useProfileDropDown()
    const logoChannelUrl = new URL(
      '@/assets/png/partner/logo-vk-house.png',
      import.meta.url
    )

    const menuItems: SideNavItemModel[] = [
      new SideNavItemModel({
        id: '1',
        title: 'แดชบอร์ด',
        name: 'แดชบอร์ด',
        detail: 'ข้อมูล dashboard',
        iconName: 'dashboard',
        pathName: '/dashboard',
        routName: 'dashboard',
        type: SideItemType.MENUITEM,
      }),
      // section ข้อมูลแชท
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลแชท',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '2',
        title: 'แชท',
        name: 'แชท',
        detail: 'แชท',
        iconName: 'chat',
        pathName: '/chat/list',
        routName: 'chat-list',
        type: SideItemType.MENUITEM,
      }),
      // section ข้อมูลผู้เช่า
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลห้องพัก',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '2',
        title: 'ห้องพักทั้งหมด',
        name: 'ห้องพักทั้งหมด',
        detail: 'ห้องพักทั้งหมด',
        iconName: 'rooms',
        pathName: '/rooms',
        routName: 'room-list',
        type: SideItemType.MENUITEM,
      }),
      new SideNavItemModel({
        id: '2',
        title: 'เพิ่มข้อมูลห้องพัก',
        name: 'เพิ่มข้อมูลห้องพัก',
        detail: 'เพิ่มข้อมูลห้องพัก',
        iconName: 'create-room',
        pathName: '/rooms/create',
        routName: 'create-room',
        type: SideItemType.MENUITEM,
      }),
      // section ข้อมูลผู้เช่า
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลผู้เช่า',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '3',
        title: 'ผู้เช่าทั้งหมด',
        name: 'ผู้เช่าทั้งหมด',
        detail: 'ผู้เช่าทั้งหมด',
        iconName: 'tenant',
        pathName: '/tenant/list',
        routName: 'tenant-list',
        type: SideItemType.MENUITEM,
      }),
      // section ข้อมูลสมาชิก
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลสมาชิก',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '4',
        title: 'จัดการสมาชิกทั้งหมด',
        name: 'จัดการสมาชิกทั้งหมด',
        detail: 'จัดการสมาชิกทั้งหมด',
        iconName: 'user',
        pathName: '/user/list',
        routName: 'user-list',
        type: SideItemType.MENUITEM,
      }),
      new SideNavItemModel({
        id: '4',
        title: 'จัดการสิทธิ์การใช้งาน',
        name: 'จัดการสิทธิ์การใช้งาน',
        detail: 'จัดการสิทธิ์การใช้งาน',
        iconName: 'permission',
        pathName: '/user/permission/list',
        routName: 'user-permission-list',
        type: SideItemType.MENUITEM,
      }),
      // section ข้อมูลผู้เช่า
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลสัญญาเช่า',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '4',
        title: 'จัดการสัญญาเช่าทั้งทมด',
        name: 'จัดการสัญญาเช่าทั้งทมด',
        detail: 'จัดการสัญญาเช่าทั้งทมด',
        iconName: 'contract',
        pathName: '/contract/list',
        routName: 'contract-list',
        type: SideItemType.MENUITEM,
      }),
      new SideNavItemModel({
        id: '4',
        title: 'เทมเพลตสัญญาเช่าทั้งทมด',
        name: 'เทมเพลตสัญญาเช่าทั้งทมด',
        detail: 'เทมเพลตสัญญาเช่าทั้งทมด',
        iconName: 'template-contract',
        pathName: '/template-contract/list',
        routName: 'template-contract-list',
        type: SideItemType.MENUITEM,
      }),
      // section ข้อมูลบัญชี
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลบัญชี',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '5',
        title: 'ข้อมูลบัญชีทั้งหมด',
        name: 'ข้อมูลบัญชีทั้งหมด',
        detail: 'ข้อมูลบัญชีทั้งหมด',
        iconName: 'accounting',
        pathName: '/accounting/list',
        routName: 'accounting-list',
        type: SideItemType.MENUITEM,
      }),
      // section แจ้งซ่อม
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลแจ้งซ่อม',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '6',
        title: 'ข้อมูลแจ้งซ่อมทั้งหมด',
        name: 'ข้อมูลแจ้งซ่อมทั้งหมด',
        detail: 'ข้อมูลแจ้งซ่อมทั้งหมด',
        iconName: 'repair',
        pathName: '/repair/list',
        routName: 'repair-list',
        type: SideItemType.MENUITEM,
      }),
      new SideNavItemModel({
        id: '6',
        title: 'เพิ่มแจ้งซ่อม',
        name: 'เพิ่มแจ้งซ่อม',
        detail: 'เพิ่มแจ้งซ่อม',
        iconName: 'repair',
        pathName: '/repair/create',
        routName: 'repair-create',
        type: SideItemType.MENUITEM,
      }),
      // section Report
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลรีพอร์ต',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '7',
        title: 'ข้อมูลรีพอร์ตทั้งหมด',
        name: 'ข้อมูลรีพอร์ตทั้งหมด',
        detail: 'ข้อมูลรีพอร์ตทั้งหมด',
        iconName: 'report',
        pathName: '/report/list',
        routName: 'report-list',
        type: SideItemType.MENUITEM,
      }),
      // section Other
      new SideNavItemModel({
        id: '',
        title: 'ข้อมูลอื่นๆ',
        type: SideItemType.TITLE,
      }),
      new SideNavItemModel({
        id: '8',
        title: 'ตั้งค่าต่างๆ',
        name: 'ตั้งค่าต่างๆ',
        detail: 'ตั้งค่าต่างๆ',
        iconName: 'setting-channel',
        pathName: '/setting/channel',
        routName: 'setting-channel',
        type: SideItemType.MENUITEM,
      }),
      new SideNavItemModel({
        id: '8',
        title: 'ตั้งค่าต่างๆ',
        name: 'อื่นๆ',
        detail: 'อื่นๆ',
        iconName: 'undefined',
        pathName: '/other',
        routName: 'other',
        type: SideItemType.MENUITEM,
      }),
    ]
    return {
      isOpen,
      isOpenNotifications,
      isOpenProfile,
      menuItems,
      logoChannelUrl,
    }
  },
  methods: {
    validateCurrentMenu(pathName: string): boolean {
      return this.$router.currentRoute.value.path == pathName
    },
    onClickMenuItem(item: SideNavItemModel) {
      this.resetState()
      if (!this.validateCurrentMenu(item.pathName)) {
        this.$router.push({
          name: item.routName,
        })
      }
    },
    resetState() {
      this.isOpenNotifications = false
      this.isOpenProfile = false
      this.isOpen = false
    },
  },
})
</script>
