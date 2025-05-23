import EventsScreen from '../screens/EventsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function EventsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Events' component={EventsScreen} />
    </Stack.Navigator>
  )
}

export default EventsNavigator
