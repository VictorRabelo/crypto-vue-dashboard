<template>
  <div class="min-h-screen bg-gray-900 text-white p-6">
    <h1 class="text-4xl font-bold mb-6 text-center animate-fade-in">Crypto Dashboard</h1>

    <CryptoList @selectCoin="updateCoin" />

    <div class="mt-10">
      <ChartComponent :coin="selectedCoin" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CryptoList from '../components/CryptoList.vue'
import ChartComponent from '../components/ChartComponent.vue'

const selectedCoin = ref('bitcoin')
function updateCoin(coin) {
  selectedCoin.value = coin
}
</script>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>
