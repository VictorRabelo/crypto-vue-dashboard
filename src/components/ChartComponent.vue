<template>
  <div class="mt-8">
    <apexchart type="line" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import api from '../services/api'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  coin: String,
})
const series = ref([{ data: [] }])
const chartOptions = ref({
  chart: { id: 'prices' },
  xaxis: { categories: [] },
})

const loadChart = async () => {
  const data = await api.getCoinChart(props.coin)
  series.value = [{ data: data.prices.map(p => p[1]) }]
  chartOptions.value.xaxis.categories = data.prices.map(p => new Date(p[0]).toLocaleDateString())
}

watch(() => props.coin, loadChart, { immediate: true })
onMounted(() => loadChart())
</script>
