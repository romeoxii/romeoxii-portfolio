import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToggleStore = defineStore('toggle', () => {
  // current theme
  const currentTheme = ref('light')

  // switch ro light theme
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  return { currentTheme, toggleTheme }
})
