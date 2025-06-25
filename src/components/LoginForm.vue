<template>
  <form @submit.prevent="handleLogin" class="space-y-4">
    <input v-model="username" type="text" placeholder="Username" class="w-full p-2 border" />
    <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border" />
    <button class="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '../auth/authService'

const username = ref('')
const password = ref('')

async function handleLogin() {
  await login(username.value, password.value)
}
</script>
