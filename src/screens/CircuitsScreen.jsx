import { StyleSheet, Text, View } from 'react-native'
import useCircuits from '../hooks/useCircuits'
import CircuitsList from '../components/circuits/CircuitsList'

function CircuitsScreen() {
  const { circuits, isLoading } = useCircuits()
  return (
    <View style={styles.container}>
      <CircuitsList
        circuits={circuits}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  }
})
export default CircuitsScreen
