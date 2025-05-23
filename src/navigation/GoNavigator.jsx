import GoScreen from '../screens/GoScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function GoNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Go' component={GoScreen} />
    </Stack.Navigator>
  )
}

export default GoNavigator
