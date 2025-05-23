import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native'
import BottomTabsNavigator from './BottomTabsNavigator'
import ProfileScreen from '../screens/ProfileScreen'
import Icon from '@react-native-vector-icons/material-design-icons'
import { Image } from 'react-native-animatable'

const Stack = createNativeStackNavigator()

function LogoTitle () {
  return (
    <Image
      source={require('../../src/assets/images/top-logo.png')}
      style={{
        width: 100,
        height: 80,
        alignSelf: 'center'
      }}
      resizeMode='contain'
    />
  )
}

function MainNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={BottomTabsNavigator}
        options={({ navigation }) => ({
          headerTitle: () => <LogoTitle navigation={navigation} />,
          headerStyle: { backgroundColor: '#1b1b1b' },
          headerTintColor: '#f1f1f1',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
              <Icon name='account-circle' size={20} color='#f1f1f1' />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name='Profil'
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: '#j1b1b1b' },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
