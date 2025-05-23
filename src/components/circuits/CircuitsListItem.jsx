import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import WeatherIcon from '../weather/WeatherIcon'

function CircuitsListItem({ circuit }) {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('CircuitDetails', {
      id: circuit.id
    })
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{circuit.name}</Text>
        <WeatherIcon lat={circuit.latitude} lon={circuit.longitude} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#1B1B1B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
})

export default CircuitsListItem
