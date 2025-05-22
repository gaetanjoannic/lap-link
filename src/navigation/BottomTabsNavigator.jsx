import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircuitsNavigator from './CircuitsNavigator'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator()

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Accueil'
        }}
      />
      <Tab.Screen
        name='Circuits'
        component={CircuitsNavigator}
        options={{
          tabBarLabel: 'Circuits'
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigator
