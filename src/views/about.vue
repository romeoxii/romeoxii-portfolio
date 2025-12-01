<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import VueIcon from '/public/icons/VueIcon.vue'
import TailwindIcon from '/public/icons/TailwindIcon.vue'
import JavascriptIcon from '/public/icons/JavascriptIcon.vue'
import PythonIcon from '/public/icons/PythonIcon.vue'
import GitIcon from '/public/icons/GitIcon.vue'
import SupabaseIcon from '/public/icons/supabaseIcon.vue'

import footerr from '@/components/footerr.vue'
</script>

<template>
  <div
    class="min-h-screen w-full flex flex-col items-center justify-center pt-8 text-gray-800/90 font-Poppins"
  >
    <div class="h-full md:w-4xl w-full py-6 px-4">
      <div class="h-full w-full flex flex-col justify-between space-y-3">
        <div class="w-full flex flex-col justify-between md:p-8 py-4 space-y-5">
          <h1 class="text-3xl font-bold md:mt-5 mt-7">Hi, Romeo here</h1>
          <div class="text-sm">
            <p>Introvert by nature, web developer by passion.</p>
            <p>
              Eager to build things that speak louder than I do, using
              <span class="text-green-600 font-medium">Vue.js</span>,
              <span class="text-sky-500 font-medium">Tailwind CSS</span>, and lately,
              <span class="text-[#028A0F] font-medium">Nuxt.js</span>.
            </p>
            <p>
              My happy place? A quiet mid-lit room, some gospel tunes, and a UI that just feels
              right. I love clean design, smooth flows, and websites that don't need instructions.
            </p>
            <strong class="block mt-3 w-full text-base text-neutral-700 font-semibold">
              I'm open to collaborations and freelance work.
            </strong>
          </div>
          <p class="pb-8 text-sm">
            When I'm not coding, I'm probably rewatching my favorite anime, reading a book (just
            picked this up out of nowhere), or just enjoying some quiet time offline.
          </p>

          <div class="">
            <h2 class="md:text-xl text-lg font-semibold mb-2">What's my primary stack?</h2>
            <p class="text-sm">
              I don't really have a stack per say but maybe that'll be revealed when I dive deeper
              into ths niche or get more curious about how things work, but for now my primary stack
              for front-end/fullstack is;
              <span class="text-green-600 font-medium">Vue.js, </span>

              <span class="text-sky-500 font-medium">Tailwind CSS</span>
              <span class="text-sm"> & </span>
              <span class="text-green-500 font-medium">Supabase</span>.
            </p>
            <p class="pt-2 text-sm">
              I plan to build more with <span class="text-green-700 font-medium">Nuxtjs </span> and
              <span class="text-yellow-600 font-medium">Python </span>
              <span class="text-[12px] text-neutral-400">(for backend)</span> in my coming projects,
              will be updating this as I progress.
            </p>
          </div>
          <h2 class="md:text-xl text-lg font-semibold mb-2">
            Language, tools or frameworks I'm familiar with:
          </h2>
          <div class="flex items-center flex-wrap text-xs gap-2">
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-200/50">
              <VueIcon />
              <p>Vue</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-200/50">
              <TailwindIcon />
              <p>Tailwind</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-neutral-200/50">
              <JavascriptIcon />
              <p>Javascript</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-200/50">
              <PythonIcon />
              <p>Python</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-200/50">
              <GitIcon />
              <p>Git</p>
            </div>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-200/50">
              <SupabaseIcon />
              <p>Supabase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerr />
  </div>
</template>

<style scoped>
p {
  color: #676767;
}
</style>
