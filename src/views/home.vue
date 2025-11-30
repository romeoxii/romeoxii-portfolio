<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ArrowIcon from '/public/icons/ArrowRightIcon.vue'
import ProjectsSvg from '/public/icons/ProjectsSvg.vue'
</script>

<template>
  <div class="min-h-screen w-full font-Poppins transition-colors duration-300">
    <!-- Page Wrapper -->
    <div class="flex items-center justify-center w-full h-full p-3">
      <!-- Content Card -->
      <div
        class="flex flex-col items-center space-y-5 p-5 sm:w-[85%] md:w-[70%] lg:w-[60%] w-full mt-16"
      >
        <!-- Name + Title -->
        <div class="flex flex-col text-center">
          <h1 class="text-7xl font-extrabold text-black">Romeo</h1>
          <p class="text-sm text-black/70">(romeo.xii).</p>
        </div>

        <!-- Role -->
        <div
          class="p-1 rounded-full border border-black/10 bg-blue-50 text-center text-sm w-48 mb-8"
        >
          <p class="text-black/80">Frontend Web Developer</p>
        </div>

        <!-- Two Cards -->
        <div
          class="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-10 space-y-8 sm:space-y-0 p-5 w-full"
        >
          <!-- About Me Card -->
          <div
            class="sm:-rotate-6 h-68 sm:w-64 w-[80%] p-3 border border-black/10 shadow-xs rounded-2xl"
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
                  class="border-t border-blue-200/50 bg-linear-to-r from-blue-400 to-blue-600 rounded-full p-3 text-white/80 flex items-center justify-evenly shadow-inner w-full"
                >
                  About me <ArrowIcon />
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- Projects Card -->
          <div
            class="sm:rotate-6 h-68 sm:w-64 w-[80%] p-3 border border-black/10 shadow-xs rounded-2xl"
          >
            <div class="h-full w-full py-2 flex flex-col items-center justify-between">
              <div class="w-34 h-34 rounded-full bg-blue-50 flex items-center justify-center">
                <ProjectsSvg class="p-2" />
              </div>

              <RouterLink to="/projects" class="w-full">
                <button
                  class="border-t border-blue-200/50 bg-linear-to-r from-blue-400 to-blue-600 rounded-full p-3 text-white/80 flex items-center justify-evenly shadow-inner w-full"
                >
                  Projects <ArrowIcon />
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
