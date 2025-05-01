import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function CircuitsListItem({ circuit, data }) {
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
      </View>
    </TouchableOpacity>
  )
}

export default CircuitsListItem
