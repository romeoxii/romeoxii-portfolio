<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import GithubIcon from '/public/icons/GithubIcon.vue'
import EmailIcon from '/public/icons/EmailIcon.vue'
import XIcon from '/public/icons/xIcon.vue'
import VueIcon from '/public/icons/VueIcon.vue'
import TailwindIcon from '/public/icons/TailwindIcon.vue'
import JavascriptIcon from '/public/icons/JavascriptIcon.vue'
import PythonIcon from '/public/icons/PythonIcon.vue'
import GitIcon from '/public/icons/GitIcon.vue'
import ArrowLeftIcon from '/public/icons/ArrowLeftIcon.vue'
import SupabaseIcon from '/public/icons/supabaseIcon.vue'
</script>

<template>
  <div
    class="h-screen w-full flex items-center justify-center md:p-8 py-8 px-4 text-gray-800/90 font-Poppins"
  >
    <div class="h-full md:w-4xl w-full md:p-6">
      <div class="h-full w-full flex flex-col justify-between space-y-3">
        <div class="w-full flex flex-col justify-between md:p-8 py-4 space-y-5">
          <h1 class="text-3xl font-bold md:mt-5 mt-7">Hi, Romeo here</h1>
          <div class="md:text-[11.5px] text-sm">
            <p>Introvert by nature, web developer by passion.</p>
            <p>
              Eager to build things that speak louder than I do, using
              <span class="text-green-600 font-medium">Vue.js</span>,
              <span class="text-sky-500 font-medium">Tailwind CSS</span>, and lately,
              <span class="text-[#028A0F] font-medium">Nuxt.js</span>.
            </p>
            <p>
              My happy place? A quiet mid-lit room, some lo-fi beats, and a UI that just feels
              right. I love clean design, smooth flows, and websites that don't need instructions.
            </p>
          </div>
          <p class="pb-8 pt-4 md:text-[11.5px] text-sm">
            When I'm not coding, I'm probably rewatching my favorite anime, reading a book (just
            picked this up out of nowhere), or just enjoying some quiet time offline.
          </p>

          <div class="">
            <h2 class="md:text-xl text-lg font-semibold mb-2">
              Language, tools or frameworks I'm familiar with
            </h2>
            <p class="md:text-[11.5px] text-sm">
              I don't really have a stack per say but maybe that'll be revealed when I dive deeper
              into ths niche or get more curious about how things work, but for now my go-to for
              front-end is
              <span class="text-green-600 font-medium">Vue.js</span>
              <span class="text-sm"> & </span>
              <span class="text-sky-500 font-medium">Tailwind CSS</span>.
            </p>
          </div>
          <div class="flex items-center flex-wrap text-[10px] gap-2">
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg">
              <VueIcon />
              <p>Vue</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg">
              <TailwindIcon />
              <p>Tailwind</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1.5 rounded-lg">
              <JavascriptIcon />
              <p>Javascript</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg">
              <PythonIcon />
              <p>Python</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg">
              <GitIcon />
              <p>Git</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg">
              <SupabaseIcon />
              <p>Supabase</p>
            </div>
          </div>
          <div class="mt-3 w-full flex justify-center flex-col">
            <ul class="flex items-center gap-2">
              <li class="p-1 rounded-full border border-gray-300">
                <a href="https://github.com/pRom3o" target="_blank"><GithubIcon /></a>
              </li>
              <li class="p-1 rounded-full border border-gray-300">
                <a href="https://x.com/xii_romeo" target="_blank"><XIcon /></a>
              </li>
              <li class="p-1 rounded-full border border-gray-300">
                <a href="mailto:alameleromeo1@gmail.com" target="_blank"><EmailIcon /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:px-4">
          <RouterLink to="/" class="w-full"
            ><button
              class="md:px-8 px-4 border-t border-blue-200/50 bg-gradient-to-r from-blue-400 to-blue-600 shadow-inner rounded-full size-full space gap-2 py-3 text-white/80 flex items-center justify-between"
            >
              <ArrowLeftIcon />Home
            </button></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
