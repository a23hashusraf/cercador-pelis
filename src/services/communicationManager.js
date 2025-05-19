const API_KEY = '19f8a30e'
const BASE_URL = 'http://www.omdbapi.com/'

export default {
  async buscar (query) {
    const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`)
    return await response.json()
  },

  async detalle (id) {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)
    return await response.json()
  },
}
