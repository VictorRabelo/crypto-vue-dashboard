<template>
  <div>
    <table class="table-auto w-full text-left">
      <thead>
        <tr>
          <th class="px-2 py-1">Name</th>
          <th class="px-2 py-1">Price</th>
          <th class="px-2 py-1">Market Cap</th>
          <th class="px-2 py-1">Volume</th>
          <th class="px-2 py-1">Change %</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id" class="hover:bg-gray-100 cursor-pointer" @click="$emit('selectCoin', coin.id)">
          <td class="px-2 py-1">{{ coin.name }}</td>
          <td class="px-2 py-1">${{ coin.current_price.toLocaleString() }}</td>
          <td class="px-2 py-1">${{ coin.market_cap.toLocaleString() }}</td>
          <td class="px-2 py-1">${{ coin.total_volume.toLocaleString() }}</td>
          <td class="px-2 py-1" :class="coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'">
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const coins = ref([])
const fetchData = async () => {
  coins.value = await api.getMarketData()
}
onMounted(() => {
  fetchData()
  setInterval(fetchData, 30000)
})
</script>
