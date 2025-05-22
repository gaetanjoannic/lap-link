import CircuitsScreen from '../screens/CircuitsScreen'
import CircuitDetailsScreen from '../screens/CircuitDetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function CircuitsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Circuits' component={CircuitsScreen} />
      <Stack.Screen name='CircuitDetails' component={CircuitDetailsScreen} />
    </Stack.Navigator>
  )
}

export default CircuitsNavigator
