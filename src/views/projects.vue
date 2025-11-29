<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ArrowIconBox from '/public/icons/ArrowIconBox.vue'
import VueIcon from '/public/icons/VueIcon.vue'
import TailwindIcon from '/public/icons/TailwindIcon.vue'
import supabaseIcon from '/public/icons/supabaseIcon.vue'
</script>

<template>
  <div class="min-h-screen w-full p-5 flex items-center justify-center font-Poppins">
    <div class="h-full md:w-4xl w-full md:p-6">
      <div class="flex flex-col items-center h-full w-full md:p-3">
        <div class="w-full mt-18 md:mt-8 mb-8">
          <h1 class="text-7xl font-extrabold mb-6 text-gray-800/90">Projects</h1>
          <p class="text-sm fonts-light text-black/70">
            Explore my portfolio, where captivating design ideas are brought to life, a place where
            passion meets curiosity to shape projects I'm truly proud of.
          </p>
        </div>
        <div class="h-full w-full md:p-3 flex flex-col rounded-3xl border border-gray-300 p-4">
          <div class="flex items-center mb-4">
            <div class="flex gap-1">
              <div class="h-2 w-2 rounded-full bg-teal-500"></div>
              <div class="h-2 w-2 rounded-full bg-teal-500"></div>
              <div class="h-2 w-2 rounded-full bg-teal-500"></div>
            </div>
            <p class="p-2 font-semibold text-teal-500">WEB APPS / WEBSITES</p>
          </div>
          <div class="grid sm:grid-cols-2 grid-cols-1 h-[90%] w-full gap-3">
            <div
              class="h-96 rounded-3xl flex flex-col justify-between items-center transition-all duration-300 ease-in-out overflow-hidden border border-gray-300 hover:border-teal-500"
            >
              <img
                src="../assets/Images/celine.png"
                alt="Celine's Treats"
                class="rounded-t-3xl w-full object-cover h-[50%] transition-all duration-600 hover:scale-105 ease-in-out"
              />
              <div class="md:h-[50%] w-full flex flex-col space-y-16 p-5">
                <div class="w-full flex items-center justify-between">
                  <p class="font-bold text-xl text-gray-800/90 flex flex-col">
                    Celine's Treats<span class="font-medium text-sm">october 2025 </span>
                  </p>
                  <a href="https://celinestreats.vercel.app/" target="_blank"
                    ><ArrowIconBox class="p-2 bg-gray-300/60 rounded-full"
                  /></a>
                </div>
                <div class="w-full flex flex-wrap gap-2 text-[10px]">
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <VueIcon />
                    Vuejs
                  </p>
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <TailwindIcon />
                    tailwind
                  </p>
                </div>
              </div>
            </div>
            <div
              class="h-96 rounded-3xl flex flex-col justify-between items-center transition-all duration-300 ease-in-out overflow-hidden border border-gray-300 hover:border-teal-500"
            >
              <img
                src="../assets/Images/AniTracker.png"
                alt="AniTracker"
                class="rounded-t-3xl w-full object-cover h-[50%] transition-all duration-600 hover:scale-105 ease-in-out"
              />
              <div class="md:h-[50%] w-full flex flex-col space-y-16 p-5">
                <div class="w-full flex items-center justify-between">
                  <p class="font-bold text-xl text-gray-800/90 flex flex-col">
                    AniTracker<span class="font-medium text-sm">July 2025 - September 2025 </span>
                  </p>
                  <a href="https://ani-tracker-beta.vercel.app/" target="_blank"
                    ><ArrowIconBox class="p-2 bg-gray-300/60 rounded-full"
                  /></a>
                </div>
                <div class="w-full flex flex-wrap gap-2 text-[10px]">
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <VueIcon />
                    Vuejs
                  </p>
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <TailwindIcon />
                    tailwind
                  </p>
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <supabaseIcon />
                    Supabase
                  </p>
                </div>
              </div>
            </div>
            <div
              class="h-96 rounded-3xl flex flex-col justify-between items-center transition-all duration-300 ease-in-out overflow-hidden border border-gray-300 hover:border-teal-500"
            >
              <img
                src="../assets/Images/Space-tourism.png"
                alt="Space tourism"
                class="rounded-t-3xl w-full object-cover h-[50%] transition-all duration-600 hover:scale-105 ease-in-out"
              />
              <div class="md:h-[50%] w-full flex flex-col space-y-16 p-5">
                <div class="w-full flex items-center justify-between">
                  <p class="font-bold text-xl text-gray-800/90 flex flex-col">
                    Space tourism website<span class="font-medium text-sm">July 2025</span>
                  </p>
                  <a href="https://space-tourism-ebon-iota.vercel.app/" target="_blank"
                    ><ArrowIconBox class="p-2 bg-gray-300/60 rounded-full"
                  /></a>
                </div>
                <div class="w-full flex flex-wrap gap-2 text-[10px]">
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <VueIcon />
                    Vuejs
                  </p>
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <TailwindIcon />
                    tailwind
                  </p>
                </div>
              </div>
            </div>
            <div
              class="h-96 rounded-3xl flex flex-col justify-between items-center transition-all duration-300 ease-in-out overflow-hidden border border-gray-300 hover:border-teal-500"
            >
              <img
                src="../assets/Images/Advice.png"
                alt="Advice Gen App"
                class="rounded-t-3xl w-full object-cover h-[50%] transition-all duration-600 hover:scale-105 ease-in-out"
              />
              <div class="md:h-[50%] w-full flex flex-col space-y-16 p-5">
                <div class="w-full flex items-center justify-between">
                  <p class="font-bold text-xl text-gray-800/90 flex flex-col">
                    Advice generator website<span class="font-medium text-sm">Dec 2024</span>
                  </p>
                  <a href="https://advice-gen-app-wine.vercel.app/" target="_blank"
                    ><ArrowIconBox class="p-2 bg-gray-300/60 rounded-full"
                  /></a>
                </div>
                <div class="w-full flex flex-wrap gap-2 text-[10px]">
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <VueIcon />
                    Vuejs
                  </p>
                  <p class="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-300/50">
                    <TailwindIcon />
                    tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
