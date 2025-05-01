import axios from 'axios'
import Config from 'react-native-config'

const weatherAPI = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

export const getWeatherByCoordinates = async (lat, lon, units = 'metric', lang = 'fr') => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        lat,
        lon,
        appid: Config.OPEN_WEATHER_API_KEY,
        units,
        lang
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}

export const getCircuitWeather = async (circuit, units = 'metric', lang = 'fr') => {
  if (!circuit || !circuit.latitude || !circuit.longitude) {
    throw new Error('Invalid circuit data: missing coordinates')
  }

  try {
    return await getWeatherByCoordinates(circuit.latitude, circuit.longitude, units, lang)
  } catch (error) {
    console.error(`Error fetching weather for circuit ${circuit.id || 'unknown'}:`, error)
    throw error
  }
}
