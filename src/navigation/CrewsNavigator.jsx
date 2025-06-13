import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CrewScreen from '../screens/CrewScreen'
import CrewDetailsScreen from '../screens/CrewDetailsScreen'

const Stack = createNativeStackNavigator()

function CrewsNavigator () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Crew' component={CrewScreen} />
      <Stack.Screen name='CrewDetails' component={CrewDetailsScreen} />
    </Stack.Navigator>
  )
}

export default CrewsNavigator
