<template>
  <div class="bg-gray-800 rounded-lg shadow-lg p-4">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="text-gray-400 border-b border-gray-600">
          <th class="px-3 py-2">Name</th>
          <th class="px-3 py-2">Price</th>
          <th class="px-3 py-2">Market Cap</th>
          <th class="px-3 py-2">Volume</th>
          <th class="px-3 py-2">Change %</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="coin in coins"
          :key="coin.id"
          class="transition-all duration-200 hover:bg-gray-700 cursor-pointer"
          @click="$emit('selectCoin', coin.id)"
        >
          <td class="px-3 py-2 text-white font-medium">{{ coin.name }}</td>
          <td class="px-3 py-2 text-white">${{ coin.current_price.toLocaleString() }}</td>
          <td class="px-3 py-2 text-white">${{ coin.market_cap.toLocaleString() }}</td>
          <td class="px-3 py-2 text-white">${{ coin.total_volume.toLocaleString() }}</td>
          <td
            class="px-3 py-2 font-semibold"
            :class="coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'"
          >
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="coins.length === 0" class="text-center text-gray-400 py-6 animate-pulse">
      Loading cryptocurrency data...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const coins = ref([])

const fetchData = async () => {
  try {
    coins.value = await api.getMarketData()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
  setInterval(fetchData, 30000)
})
</script>
