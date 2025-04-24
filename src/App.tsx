/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import BootSplash from 'react-native-bootsplash';

function App () {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        onReady={() => {
          BootSplash.hide({ fade: true })
        }}
      >
        <MainNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
