import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import WeatherIconComponent from '../weather/WeatherIconComponent'

function CircuitsListItem({ circuit }) {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('CircuitDetails', {
      id: circuit.id
    })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Text>{circuit.name}</Text>
        <WeatherIconComponent lat={circuit.latitude} lon={circuit.longitude} />
      </View>
    </TouchableOpacity>
  )
}

export default CircuitsListItem
