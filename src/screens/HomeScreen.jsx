import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur LapLink</Text>

      <Text style={styles.subtitle}>
        Pour ajouter une voiture, va sur la page Profil
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#2a2a2a'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#f1f1f1'
  }
})

export default HomeScreen
