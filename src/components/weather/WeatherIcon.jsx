import { Image, StyleSheet, View } from 'react-native'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'

function WeatherIcon({ lat, lon, icon }) {
  const { currentWeather, getCurrentWeatherByCircuit } = useWeather()
  if (lat && lon) {
    useEffect(() => {
      getCurrentWeatherByCircuit(lat, lon)
    }, [lat, lon])
  }
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : currentWeather?.weather?.icon
      ? `https://openweathermap.org/img/wn/${currentWeather.weather.icon}@2x.png`
      : null
  console.log('WeatherIcon: ', icon, iconUrl)
  return (
    <View>
      <Image
        source={{ uri: iconUrl }}
        resizeMode='contain'
        style={styles.weatherIcon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  weatherIcon: {
    width: 50,
    height: 50
  }
})

export default WeatherIcon
