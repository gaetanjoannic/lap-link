import CrewScreen from '../screens/CrewScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function CrewsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Crew' component={CrewScreen} />
    </Stack.Navigator>
  )
}

export default CrewsNavigator
