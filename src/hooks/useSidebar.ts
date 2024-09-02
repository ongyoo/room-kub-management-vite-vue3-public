import { ref } from 'vue'

const isOpen = ref(false)
const isOpenNotifications = ref(false)
const isOpenProfile = ref(false)

export function useSidebar() {
  return {
    isOpen,
  }
}

export function useNotificationsDropDown() {
  return {
    isOpenNotifications,
  }
}

export function useProfileDropDown() {
  return {
    isOpenProfile,
  }
}
