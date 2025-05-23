import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircuitsNavigator from './CircuitsNavigator'
import HomeScreen from '../screens/HomeScreen'
import CrewsNavigator from './CrewsNavigator'
import EventsNavigator from './EventsNavigator'
import GoNavigator from './GoNavigator'
import { StyleSheet } from 'react-native'
import Icon from '@react-native-vector-icons/material-design-icons'

const Tab = createBottomTabNavigator()

function BottomTabsNavigator () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#B71918',
        tabBarInactiveTintColor: '#F1F1F1',
        tabBarItemStyle: styles.menuElement,
        tabBarShowLabel: false,
        tabBarIcon: styles.icon
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='favorite' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Circuits'
        component={CircuitsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='favorite' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Go'
        component={GoNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='favorite' color={color} size={size} />
          ),
          tabBarItemStyle: styles.goElement
        }}
      />
      <Tab.Screen
        name='Crews'
        component={CrewsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='favorite' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Events'
        component={EventsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='favorite' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1B1B1B',
    borderTopWidth: 1
  },
  menuElement: {
    backgroundColor: '#F1F1F1',
    borderRadius: 100,
    padding: 10,
    margin: 5,
    color: '#B71918',
    elevation: 5
  },
  goElement: {
    backgroundColor: '#B71918',
    color: '#F1F1F1',
    borderRadius: 100,
    borderColor: '#510B0B',
    borderWidth: 3,
    padding: 10,
    margin: 5,
    elevation: 5
  },
  icon: {
    backgroundColor: '#1B1B1B',
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1'
  }
})

export default BottomTabsNavigator
