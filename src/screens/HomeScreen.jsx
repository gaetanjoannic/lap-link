import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#e89f30'
  }
})

export default HomeScreen
