import { ActivityIndicator, Text, View } from 'react-native'
import useSingleCircuit from '../hooks/useSingleCircuit'
import { useEffect } from 'react'

function CircuitDetailsScreen({ route }) {
  const { id } = route.params
  const { circuit, isLoading, getCircuitData } = useSingleCircuit()
  useEffect(() => {
    if (id) {
      getCircuitData(id)
    }
  }, [id])
  console.log(circuit)
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <View>
      {circuit && (
        <>
          <Text>{circuit?.data[0]?.name}</Text>
          <Text>{circuit.data[0].location}.</Text>
          <Text>{circuit.data[0].description || "Oups, nous n'avons pas encore d'informations pour ce circuit."}.</Text>
        </>
      )}
    </View>
  )
}

export default CircuitDetailsScreen
