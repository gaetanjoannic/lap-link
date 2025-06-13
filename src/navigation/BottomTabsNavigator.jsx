import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircuitsNavigator from './CircuitsNavigator'
import HomeScreen from '../screens/HomeScreen'
import CrewsNavigator from './CrewsNavigator'
import EventsNavigator from './EventsNavigator'
import GoNavigator from './GoNavigator'
import { Image, StyleSheet } from 'react-native'
import Icon from '@react-native-vector-icons/material-design-icons'

const Tab = createBottomTabNavigator()

function BottomTabsNavigator () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#B71918',
        tabBarInactiveTintColor: '#666666',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='car' color={color} size={28} style={styles.styleIcons} />
          ),
          tabBarItemStyle: styles.menuElement
        }}
      />
      <Tab.Screen
        name='Circuits'
        component={CircuitsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='go-kart-track' color={color} size={28} style={styles.styleIcons} />
          ),
          tabBarItemStyle: styles.menuElement
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
            <Icon name='account-multiple' color={color} size={28} style={styles.styleIcons} />
          ),
          tabBarItemStyle: styles.menuElement
        }}
      />
      <Tab.Screen
        name='Events'
        component={EventsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='calendar-month' color={color} size={28} style={styles.styleIcons} />
          ),
          tabBarItemStyle: styles.menuElement
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#1b1b1b',
    height: 60,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingBottom: 35,
    borderColor: '#1b1b1b'
  },
  menuElement: {
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    margin: 5,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  goElement: {
    flex: 1,
    backgroundColor: '#B71918',
    borderRadius: 50,
    margin: 5,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    bottom: 14
  },
  goImage: {
    width: 46,
    height: 19,
    tintColor: '#FFFFFF',
    marginTop: 20
  },
  styleIcons: {
    width: 28,
    height: 28,
    marginTop: 18
  }

})

export default BottomTabsNavigator
