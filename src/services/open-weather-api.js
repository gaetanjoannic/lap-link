import axios from 'axios'
import Config from 'react-native-config'

const owAPI = axios.create({
  baseURL: Config.OPENWEATHER_API_URL
})

export const getCurrentWeather = async (latitude, longitude) => {
  try {
    if (!Config.OPENWEATHER_API_KEY) {
      throw new Error('Clé API OpenWeather non configurée')
    }

    const response = await owAPI.get(
      '/weather',
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: Config.OPENWEATHER_API_KEY,
          units: 'metric',
          lang: 'fr'
        }
      }
    )

    const weatherData = {
      location: {
        latitude,
        longitude
      },
      weather: {
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon
      },
      temperature: response.data.main.temp,
      wind: {
        speed: response.data.wind.speed,
        direction: response.data.wind.deg
      },
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      cloudiness: response.data.clouds.all,
      timestamp: response.data.dt,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset
    }

    return weatherData
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error)
    throw error
  }
}

export const getForecast = async (latitude, longitude) => {
  try {
    const response = await owAPI.get(
      '/forecast',
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: Config.OPENWEATHER_API_KEY,
          units: 'metric',
          lang: 'fr',
          cnt: 40
        }
      }
    )

    const dailyForecasts = []
    const forecastsByDay = {}

    response.data.list.forEach(item => {
      const [date, time] = item.dt_txt.split(' ')
      if (!forecastsByDay[date]) {
        forecastsByDay[date] = []
      }
      forecastsByDay[date].push(item)
    })

    const currentDate = new Date().toISOString().split('T')[0]

    Object.keys(forecastsByDay).sort().forEach(date => {
      if (dailyForecasts.length < 5) {
        const forecasts = forecastsByDay[date]
        let selectedForecast

        if (date === currentDate) {
          const now = new Date()
          selectedForecast = forecasts.reduce((closest, current) => {
            const forecastTime = new Date(current.dt_txt)
            const closestTime = new Date(closest.dt_txt)

            return Math.abs(forecastTime - now) < Math.abs(closestTime - now) ? current : closest
          }, forecasts[0])
        } else {
          selectedForecast = forecasts.find(f => f.dt_txt.includes('12:00:00')) || forecasts[0]
        }

        dailyForecasts.push({
          timestamp: selectedForecast.dt,
          date: selectedForecast.dt_txt,
          temperature: {
            current: selectedForecast.main.temp,
            feelsLike: selectedForecast.main.feels_like,
            min: selectedForecast.main.temp_min,
            max: selectedForecast.main.temp_max
          },
          weather: {
            description: selectedForecast.weather[0].description,
            icon: selectedForecast.weather[0].icon,
            main: selectedForecast.weather[0].main
          },
          wind: {
            speed: selectedForecast.wind.speed,
            direction: selectedForecast.wind.deg
          },
          humidity: selectedForecast.main.humidity,
          pressure: selectedForecast.main.pressure,
          cloudiness: selectedForecast.clouds.all
        })
      }
    })

    return { data: dailyForecasts }
  } catch (error) {
    console.error('Erreur lors de la récupération des prévisions météo:', error)
    throw error
  }
}
