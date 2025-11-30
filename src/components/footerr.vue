<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import GithubIcon from '/public/icons/GithubIcon.vue'
import EmailIcon from '/public/icons/EmailIcon.vue'
import XIcon from '/public/icons/xIcon.vue'
import { ref } from 'vue'

const form = ref(null)
const userName = ref('')
const userMessage = ref('')
const loading = ref(false)
const userEmail = ref('')

async function sendEmail() {
  loading.value = true

  const res = await fetch('https://romeoxii-portfolio.vercel.app/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_NODE_KEY}`,
    },
    body: JSON.stringify({
      name: userName.value,
      email: userEmail.value,
      message: userMessage.value,
    }),
  })

  const data = await res.json()
  loading.value = false

  if (data?.success) {
    alert('Message sent!')
    userName.value = ''
    userEmail.value = ''
    userMessage.value = ''
  } else {
    alert('Unable to send message. Try again.')
  }
}
</script>

<template>
  <!-- Socials -->
  <div class="min-h-96 w-full flex items-center justify-center flex-col bg-blue-50/40">
    <div class="min-h-20 w-full sm:w-[70%] lg:w-[50%] flex flex-col items-center p-3 space-y-5">
      <form
        class="flex flex-col items-center w-[80%] p-1 space-y-5"
        @submit.prevent="sendEmail"
        ref="form"
      >
        <h1 class="font-kanit text-3xl font-medium text-neutral-600/80 text-center">
          Got an idea? Let's bring it to life.
        </h1>
        <div class="flex flex-col w-full space-y-2">
          <label for="userName" class="text-sm font-kanit">Name *</label
          ><input
            type="text"
            id="userName"
            v-model="userName"
            required
            placeholder="name"
            class="hover"
          />
        </div>
        <div class="flex flex-col w-full space-y-2">
          <label for="userEmail" class="text-sm font-kanit">Email *</label
          ><input
            type="email"
            id="userEmail"
            v-model="userEmail"
            required
            placeholder="email"
            class="hover"
          />
        </div>
        <div class="flex flex-col w-full space-y-2">
          <label for="userMessage" class="text-sm font-kanit">Message *</label>
          <textarea
            v-model="userMessage"
            id="userMessage"
            required
            placeholder="message"
            class="resize-none h-20 hover"
          ></textarea>
        </div>
        <div class="w-full flex items-center justify-end">
          <button
            class="bg-neutral-400 hover hover:bg-neutral-500 rounded-lg px-5 py-2 sm:py-1 text-white border border-neutral-500"
            type="submit"
            :disabled="loading"
          >
            {{ loading ? 'Sending...' : 'Send' }}
          </button>
        </div>
      </form>
      <div class="flex flex-col w-full items-center">
        <ul class="flex items-center justify-center space-x-5 md:w-[50%] w-[80%]">
          <li class="md:p-3 p-2 rounded-full border border-neutral-200">
            <a href="https://github.com/romeoxii" target="_blank"><GithubIcon /></a>
          </li>

          <li class="md:p-3 p-2 rounded-full border border-neutral-200">
            <a href="https://x.com/_404xii" target="_blank"><XIcon /></a>
            <span></span>
          </li>

          <li class="md:p-3 p-2 rounded-full border border-neutral-200">
            <a href="mailto:alameleromeo1@gmail.com" target="_blank"><EmailIcon /></a>
          </li>
        </ul>
        <div class="mt-4 text-neutral-500 text-sm">&copy; 2025 Alamele Romeo.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  /* border: 1px solid #7183f8; */
  border-radius: 3px;
  outline: 2px solid #d4d4d4;
  padding: 8px 5px;
  font-weight: 300;

  font-size: small;
}

input:focus,
textarea:focus {
  caret-color: #d4d4d4;
  outline: 2px solid #d4d4d4;
  /* border: 1px solid #d4d4d4; */
  border-radius: 7px;
  box-shadow:
    0 0 3px 3px #d4d4d4,
    0 0 3px 3px #d4d4d455;
}

label {
  font-weight: 300;
  color: #434343;
  margin-bottom: 5px;
}
</style>
