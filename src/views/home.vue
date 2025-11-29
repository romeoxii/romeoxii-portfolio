<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ArrowIcon from '/public/icons/ArrowRightIcon.vue'
import ProjectsSvg from '/public/icons/ProjectsSvg.vue'
import GithubIcon from '/public/icons/GithubIcon.vue'
import EmailIcon from '/public/icons/EmailIcon.vue'
import XIcon from '/public/icons/xIcon.vue'
</script>

<template>
  <div class="min-h-screen w-full font-Poppins transition-colors duration-300 px-2">
    <!-- Page Wrapper -->
    <div class="flex items-center justify-center w-full h-full p-3">
      <!-- Content Card -->
      <div class="flex flex-col items-center space-y-5 p-5 md:w-[40%] w-full mt-16">
        <!-- Name + Title -->
        <div class="flex flex-col text-center">
          <h1 class="text-7xl font-extrabold text-black">Romeo</h1>
          <p class="text-sm text-black/70">(romeo.xii).</p>
        </div>

        <!-- Role -->
        <div class="p-1 rounded-full border border-black/10 bg-blue-50 text-center w-48 mb-8">
          <p class="text-black/80">Web Developer</p>
        </div>

        <!-- Two Cards -->
        <div class="flex items-center justify-center space-x-10 p-5">
          <!-- About Me Card -->
          <div
            class="-rotate-6 h-68 md:w-54 w-40 p-3 border border-black/10 shadow-xs rounded-2xl dark:bg-neutral-800"
          >
            <div class="h-full w-full py-2 flex flex-col items-center justify-between">
              <div class="w-34 h-34 rounded-full bg-blue-50 p-2 flex items-center justify-center">
                <img
                  src="../assets/Images/pfp.JPG"
                  alt="#"
                  class="w-full h-full border rounded-full"
                />
              </div>

              <RouterLink to="/about" class="w-full">
                <button
                  class="border-t border-blue-200/50 dark:border-blue-700 bg-linear-to-r from-blue-400 to-blue-600 rounded-full p-3 text-white/80 flex items-center justify-evenly shadow-inner w-full"
                >
                  About me <ArrowIcon />
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- Projects Card -->
          <div
            class="rotate-6 h-68 md:w-54 w-40 p-3 border border-black/10 shadow-xs rounded-2xl dark:bg-neutral-800"
          >
            <div class="h-full w-full py-2 flex flex-col items-center justify-between">
              <div class="w-34 h-34 rounded-full bg-blue-50 flex items-center justify-center">
                <ProjectsSvg class="p-2" />
              </div>

              <RouterLink to="/projects" class="w-full">
                <button
                  class="border-t border-blue-200/50 dark:border-blue-700 bg-linear-to-r from-blue-400 to-blue-600 rounded-full p-3 text-white/80 flex items-center justify-evenly shadow-inner w-full"
                >
                  Projects <ArrowIcon />
                </button>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Socials -->
        <div class="p-3 w-full mt-10 flex items-center justify-center flex-col">
          <ul class="flex items-center justify-center space-x-5 md:w-[50%] w-[80%]">
            <li class="md:p-3 p-2 rounded-full border border-gray-300 dark:border-gray-600">
              <a href="https://github.com/romeoxii" target="_blank"><GithubIcon /></a>
            </li>

            <li class="md:p-3 p-2 rounded-full border border-gray-300 dark:border-gray-600">
              <a href="https://x.com/_404xii" target="_blank"><XIcon /></a>
            </li>

            <li class="md:p-3 p-2 rounded-full border border-gray-300 dark:border-gray-600">
              <a href="mailto:alameleromeo1@gmail.com" target="_blank"><EmailIcon /></a>
            </li>
          </ul>

          <div class="mt-6 text-black/60 /50">&copy; 2025 Alamele Romeo.</div>
        </div>
      </div>
    </div>
  </div>
</template>
