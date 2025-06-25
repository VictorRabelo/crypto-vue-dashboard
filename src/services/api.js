import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.coingecko.com/api/v3',
})

export default {
  async getMarketData() {
    const response = await apiClient.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        price_change_percentage: '24h',
      },
    })
    return response.data
  },
  async getCoinChart(coin) {
    const response = await apiClient.get(`/coins/${coin}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: 7,
      },
    })
    return response.data
  },
}
