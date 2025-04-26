import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircuitsNavigator from './CircuitsNavigator'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator()

function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Circuits' component={CircuitsNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigator
