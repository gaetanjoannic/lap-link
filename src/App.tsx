/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import { TouchableOpacity, Text } from 'react-native'
import SplashScreen from './screens/SplashScreen'

const Stack = createNativeStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'LapLink',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                <Text style={{ color: '#fff', marginRight: 15 }}>Profil</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name='Profil'
          component={ProfileScreen}
          options={{
            title: 'Mon Profil',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name='Splash'
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
