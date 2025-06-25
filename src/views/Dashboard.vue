<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Crypto Dashboard</h1>
    <CryptoList @selectCoin="updateCoin" />
    <ChartComponent :coin="selectedCoin" />
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
