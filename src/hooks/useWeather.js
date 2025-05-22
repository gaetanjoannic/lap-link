import { useState } from 'react'
import { getCurrentWeather, getForecast } from '../services/open-weather-api'

function useWeather() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getCurrentWeatherByCircuit = async (lat, lon) => {
    setIsLoading(true)
    try {
      const data = await getCurrentWeather(lat, lon)
      if (data) {
        setCurrentWeather(data)
      }
    } catch (error) {
      console.error('Error fetching circuit:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getForecastByCircuit = async (lat, lon) => {
    setIsLoading(true)
    try {
      const data = await getForecast(lat, lon)
      if (data) {
        setForecast(data)
      }
    } catch (error) {
      console.error('Error fetching circuit:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getCurrentWeatherByCircuit,
    getForecastByCircuit,
    isLoading,
    currentWeather,
    forecast
  }
}
export default useWeather
