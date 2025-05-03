import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'
import WeatherIcon from './WeatherIcon'

function WeatherForecastArray({ lat, lon }) {
  const { forecast, getForecastByCircuit, isLoading } = useWeather()

  useEffect(() => {
    if (lat && lon) {
      getForecastByCircuit(lat, lon)
    }
  }, [lat, lon])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  if (!forecast || forecast.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text>Aucune donnée météo disponible</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prévisions météo</Text>
      <FlatList
        data={forecast.data}
        renderItem={({ item }) => {
          return (
            <View style={styles.forecastItem}>
              <WeatherIcon icon={item?.weather?.icon} />
              <Text style={styles.dateText}>
                {new Date(item.date).toLocaleString('fr-FR', {
                  day: 'numeric',
                  month: 'long'
                })}
              </Text>
              <Text>{item.weather.description}</Text>
              <Text>{Math.round(item.temperature.current)}°C</Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => item.timestamp?.toString() || index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  loadingContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forecastItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 120
  },
  dateText: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: '500'
  }
})

export default WeatherForecastArray
