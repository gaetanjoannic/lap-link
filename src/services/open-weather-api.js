import axios from 'axios'
import Config from 'react-native-config'

export const getCurrentWeather = async (latitude, longitude) => {
  try {
    console.log('OW API KEY', Config.OPENWEATHER_API_KEY)
    // if (!Config.OPENWEATHER_API_KEY) {
    //   throw new Error('Clé API OpenWeather non configurée')
    // }

    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: '575d5db056d98746a9da34b3fbce8aa0',
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
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: '575d5db056d98746a9da34b3fbce8aa0',
          units: 'metric',
          lang: 'fr'
        }
      }
    )

    const forecastData = {
      forecast: response.data.list.map(item => ({
        timestamp: item.dt,
        date: item.dt_txt,
        temperature: {
          current: item.main.temp,
          feelsLike: item.main.feels_like,
          min: item.main.temp_min,
          max: item.main.temp_max
        },
        weather: {
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          main: item.weather[0].main
        },
        wind: {
          speed: item.wind.speed,
          direction: item.wind.deg
        },
        humidity: item.main.humidity,
        pressure: item.main.pressure,
        cloudiness: item.clouds.all
      }))
    }

    return forecastData
  } catch (error) {
    console.error('Erreur lors de la récupération des prévisions météo:', error)
    throw error
  }
}
