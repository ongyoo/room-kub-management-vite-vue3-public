import { createRouter, createWebHistory } from 'vue-router'
// Login
import LoginView from '@/views/authen/login/Index.vue'
// Select Account List
import SelectAccountListView from '@/views/selectAccount/list/Index.vue'
// Dashboard
import Dashboard from '@/views/dashboard/Index.vue'
// Chat
import ChatList from '@/views/chat/list/Index.vue'
// Room
import RoomList from '@/views/room/list/Index.vue'
import RoomDetail from '@/views/room/detail/index.vue'
import CreateRoom from '@/views/room/create/Index.vue'
// Tenant
import TenantList from '@/views/tenant/list/Index.vue'
// User
import UsertList from '@/views/user/list/Index.vue'
import UsertPermissionList from '@/views/user/list/Index.vue'
// Contract
import ContractList from '@/views/contract/list/Index.vue'
// Template Contract
import TemplateContractList from '@/views/contract/template/list/Index.vue'
// Accounting
import AccountingList from '@/views/accounting/list/Index.vue'
// Repair
import RepairList from '@/views/repair/list/Index.vue'
// Report
import ReportView from '@/views/report/Index.vue'
// Setting
import SettingChannelView from '@/views/setting/channel/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    // authen
    {
      path: '/login',
      name: 'login-1',
      component: LoginView
    },
    // Select Account List
    {
      path: '/select/account',
      name: 'select-account',
      component: SelectAccountListView
    },
    // Dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    // Chat
    {
      path: '/chat/list',
      name: 'chat-list',
      component: ChatList,
      meta: {
        requiresAuth: true,
      },
    },
    // Room
    {
      path: '/rooms',
      name: 'room-list',
      component: RoomList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/rooms/detail/:id',
      name: 'room-detail',
      props: true,
      component: RoomDetail,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/rooms/create',
      name: 'create-room',
      props: true,
      component: CreateRoom,
      meta: {
        requiresAuth: true,
      },
    },
    // Tenant
    {
      path: '/tenant/list',
      name: 'tenant-list',
      component: TenantList,
      meta: {
        requiresAuth: true,
      },
    },
    // User
    {
      path: '/user/list',
      name: 'user-list',
      component: UsertList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/permission/list',
      name: 'user-permission-list',
      component: UsertPermissionList,
      meta: {
        requiresAuth: true,
      },
    },
    // Contract
    {
      path: '/contract/list',
      name: 'contract-list',
      component: ContractList,
      meta: {
        requiresAuth: true,
      },
    },
    // Template Contract
    {
      path: '/template-contract/list',
      name: 'template-contract-list',
      component: TemplateContractList,
      meta: {
        requiresAuth: true,
      },
    },
    // Accounting
    {
      path: '/accounting/list',
      name: 'accounting-list',
      component: AccountingList,
      meta: {
        requiresAuth: true,
      },
    },
    // Repair
    {
      path: '/repair/list',
      name: 'repair-list',
      component: RepairList,
      meta: {
        requiresAuth: true,
      },
    },
    // Report
    {
      path: '/report/list',
      name: 'report-list',
      component: ReportView,
      meta: {
        requiresAuth: true,
      },
    },
    // Setting
    {
      path: '/setting/channel',
      name: 'setting-channel',
      component: SettingChannelView,
      meta: {
        requiresAuth: true,
      },
    },
  ]
})

export default router
