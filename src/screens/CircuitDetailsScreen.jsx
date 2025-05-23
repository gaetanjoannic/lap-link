import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import useSingleCircuit from '../hooks/useSingleCircuit'
import { useEffect } from 'react'
import WeatherForecastArray from '../components/weather/WeatherForecastArray'

function CircuitDetailsScreen({ route, navigation }) {
  const { id } = route.params
  const { circuit, isLoading, getCircuitData } = useSingleCircuit()
  useEffect(() => {
    if (id) {
      getCircuitData(id)
    }
  }, [id])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Button title='Retour' onPress={() => navigation.goBack()} />
      {circuit && (
        <>
          <Text style={styles.title}>{circuit?.data[0]?.name}</Text>
          <Text style={styles.location}>{circuit.data[0].location}.</Text>
          <Text style={styles.description}>{circuit.data[0].description || "Oups, nous n'avons pas encore d'informations pour ce circuit."}.</Text>
          <WeatherForecastArray lat={circuit.data[0].latitude} lon={circuit.data[0].longitude} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1B1B1B'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f1f1f1'
  },
  location: {
    fontSize: 18,
    color: '#f1f1f1',
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    color: '#f1f1f1',
    marginBottom: 20
  }
})

export default CircuitDetailsScreen
