import { Image, StyleSheet, View } from 'react-native'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'

function WeatherForecastComponent({ lat, lon }) {
  const { forecast, getForecastByCircuit } = useWeather()
  useEffect(() => {
    if (lat && lon) {
      getForecastByCircuit(lat, lon)
    }
  }, [lat, lon])
  console.log('WeatherComponent', forecast)

  return (
    <View>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${forecast?.weather?.icon}@2x.png` }}
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

export default WeatherForecastComponent
