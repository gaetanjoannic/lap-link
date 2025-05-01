import { Text, View } from 'react-native'
import useCircuits from '../hooks/useCircuits'
import CircuitsList from '../components/circuits/CircuitsList'

function CircuitsScreen() {
  const { circuits, isLoading } = useCircuits()
  // if (isLoading) {
  //   return 'Circuits incomming'
  // }
  return (
    <View>
      <Text>Circuit Screen</Text>
      <CircuitsList
        circuits={circuits}
      />
    </View>
  )
}

export default CircuitsScreen
