/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigation/MainNavigator'
import BootSplash from 'react-native-bootsplash

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1B1B1B'
  }
}

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer
        onReady={() => {
          BootSplash.hide({ fade: true })
        }}
        theme={theme}
      >
        <MainNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
