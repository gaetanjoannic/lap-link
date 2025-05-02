import { Image, StyleSheet, View } from 'react-native'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'

function WeatherIconComponent({ lat, lon }) {
  const { currentWeather, getCurrentWeatherByCircuit } = useWeather()
  useEffect(() => {
    if (lat && lon) {
      getCurrentWeatherByCircuit(lat, lon)
    }
  }, [lat, lon])
  console.log('WeatherComponent', currentWeather)

  return (
    <View>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${currentWeather?.weather?.icon}@2x.png` }}
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

export default WeatherIconComponent
