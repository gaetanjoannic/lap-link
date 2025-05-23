import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircuitsNavigator from './CircuitsNavigator'
import HomeScreen from '../screens/HomeScreen'
import CrewsNavigator from './CrewsNavigator'
import EventsNavigator from './EventsNavigator'
import GoNavigator from './GoNavigator'
import { Image, StyleSheet } from 'react-native'
import Icon from '@react-native-vector-icons/material-design-icons'

const Tab = createBottomTabNavigator()

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#B71918',
        tabBarInactiveTintColor: '#666666',
        tabBarItemStyle: styles.menuElement,
        tabBarShowLabel: false,
        tabBarIconStyle: styles.icons
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='car' color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name='Circuits'
        component={CircuitsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='go-kart-track' color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name='Go'
        component={GoNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/icons/go.png')}
              style={styles.goImage}
            />
          ),
          tabBarItemStyle: styles.goElement
        }}
      />
      <Tab.Screen
        name='Crews'
        component={CrewsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='account-multiple' color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name='Events'
        component={EventsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='calendar-month' color={color} size={28} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#2A2A2A',
    height: 90,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingBottom: 35,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10
  },
  menuElement: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    margin: 5,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3
  },
  goElement: {
    flex: 1,
    backgroundColor: '#B71918',
    borderRadius: 40,
    margin: 5,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    bottom: 15
  },
  goImage: {
    width: 35,
    height: 12,
    tintColor: '#FFFFFF'
  }
})

export default BottomTabsNavigator
