<template>
  <div class="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg">
    <div v-if="loading" class="flex justify-center py-10">
      <div class="loader"></div>
    </div>
    <apexchart
      v-else
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import api from '../services/api'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({ coin: String })

const series = ref([{ data: [] }])
const chartOptions = ref({
  chart: {
    id: 'prices',
    background: '#1f2937', // Tailwind bg-gray-800
    foreColor: '#fff'
  },
  xaxis: { categories: [] },
  stroke: { curve: 'smooth' },
  tooltip: { theme: 'dark' }
})

const loading = ref(true)

const loadChart = async () => {
  loading.value = true
  const data = await api.getCoinChart(props.coin)
  series.value = [{ data: data.prices.map(p => p[1]) }]
  chartOptions.value.xaxis.categories = data.prices.map(p =>
    new Date(p[0]).toLocaleDateString()
  )
  loading.value = false
}

watch(() => props.coin, loadChart, { immediate: true })
onMounted(loadChart)
</script>

<style scoped>
.loader {
  border: 6px solid #e5e7eb; /* gray-200 */
  border-top: 6px solid #3b82f6; /* blue-500 */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
