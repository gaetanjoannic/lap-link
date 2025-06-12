import CardComponent from '../cards/CardComponent'

function CircuitsListItem({ circuit, navigation }) {
  const handlePress = () => {
    console.log('Circuit pressed:', circuit.id)
    navigation.navigate('CircuitDetails', { id: circuit.id })
  }

  return (
    <CardComponent
      element={circuit}
      type='Circuit'
      onPress={handlePress}
    />
  )
}

export default CircuitsListItem
