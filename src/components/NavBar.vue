<script setup>
import { ref, computed } from 'vue'
import AboutIcon from '/public/icons/AboutIcon.vue'
import HomeIcon from '/public/icons/HomeIcon.vue'
import ProjectsIcon from '/public/icons/ProjectsIcon.vue'
import { useRoute } from 'vue-router'

const navBar = ref(false)

const toggle = () => {
  navBar.value = !navBar.value
}

const navs = [
  { id: 'Home', path: '/', svg: HomeIcon },
  { id: 'Projects', path: '/projects', svg: ProjectsIcon },
]

const route = useRoute()

// Computed property to determine active link
const isActive = (path) => route.path === path

const currentIcon = computed(() => {
  if (route.path === 'projects') {
    return ProjectsIcon
  } else if (route.path === '/about') {
    return AboutIcon
  } else {
    return HomeIcon
  }
})
</script>

<template>
  <div class="">
    <div class="h-12 w-full flex justify-center items-center p-2 fixed top-4 left-0 z-100">
      <div class="bg-white rounded-full">
        <button
          class="p-2 border border-black/30 text-black/70 shadow-sm rounded-full transition-all duration-600 hover:scale-105 hover:bg-black/5 ease-in-out"
          @click="toggle"
        >
          <component :is="currentIcon" v-if="!navBar" />
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 5L5 19M5 5l14 14"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="navBar"
      class="w-full h-screen fixed bg-black/20 z-70 flex justify-center p-8"
      @click="toggle"
    >
      <Transition name="modal" appear
        ><div
          v-if="navBar"
          class="max-w-sm w-full h-30 border border-black/20 rounded-2xl relative top-[10%] left-0 bg-white flex items-center justify-center p-3"
        >
          <ul class="w-full flex items-center justify-evenly gap-2">
            <li v-for="nav in navs" :key="nav.id">
              <RouterLink :to="nav.path" class="flex flex-col items-center text-black/70"
                ><button
                  class=""
                  :class="[
                    'flex items-center justify-center p-2 rounded-full border border-black/20  transition-all duration-600 hover:scale-105 hover:bg-black/5 ease-in-out',
                    isActive(nav.path) ? 'rounded-full text-blue-400 border-black/30' : '',
                  ]"
                >
                  <component :is="nav.svg" /></button
                >{{ nav.id }}</RouterLink
              >
            </li>
          </ul>
        </div></Transition
      >
    </div>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
