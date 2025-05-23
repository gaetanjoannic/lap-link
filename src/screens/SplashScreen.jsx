import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home')
    }, 2500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
  }
})
