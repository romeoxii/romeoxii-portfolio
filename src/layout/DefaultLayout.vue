<script setup>
import NavBar from '@/components/NavBar.vue'

import { onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useToggleStore } from '@/store/toggle'
import ThemeToggle from '@/components/themeToggle.vue'

const toggleStore = useToggleStore()

// Watch the theme and apply dark class
watch(
  () => toggleStore.currentTheme,
  (newTheme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  },
)

// Load saved theme on mount
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) toggleStore.currentTheme = saved
  document.documentElement.classList.toggle('dark', toggleStore.currentTheme === 'dark')
})
</script>

<template>
  <NavBar />
  <main class="relative bg-white transition-colors duration-300 min-h-screen">
    <RouterView />
    <ThemeToggle class="fixed sm:bottom-4 sm:right-6 bottom-2 right-2" />
  </main>
</template>
