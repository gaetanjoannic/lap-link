import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import data from '../datas.json'
import { customStyles } from '../assets/css/styles'
import WeatherForecastArray from '../components/weather/WeatherForecastArray'
import CardDetailed from '../components/cards/not-clickable-cards/CardDetailed'
import ButtonComponent from '../components/ButtonComponent'

function CircuitDetailsScreen ({ navigation, route }) {
  const image = require('../assets/images/carbon-bg.jpg')

  const { id } = route.params
  const circuit = data.circuits.find(c => c.id === id)
  const gps = data.circuit_points.find(c => c.circuit_id === id)

  if (!circuit) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#f1f1f1' }}>Circuit non trouvé</Text>
      </View>
    )
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.container}>
      <Button title='<-' onPress={() => navigation.goBack()} />
      {circuit && (
        <>
          <Text style={customStyles.title}>{circuit?.name}</Text>
          <CardDetailed element={circuit} type='Circuit' />
          {/* <WeatherForecastArray lat={gps?.points[0].lat} lon={gps?.points[0].lng} /> */}
          <ButtonComponent
            type='Circuit' label='Lancer la course' handlePress={() => navigation.navigate('Go')}
          />
          <Text style={customStyles.title}>Podium actuel</Text>
        </>
      )}
    </ImageBackground>
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
  }
})

export default CircuitDetailsScreen
