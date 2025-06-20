import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const cardsData = [
  {
    id: '1',
    title: 'CIRCUITS',
    route: 'Circuits',
    image: require('../../assets/images/cardImage/card1.jpg')
  },
  {
    id: '2',
    title: 'EVENNEMENTS',
    route: 'Events',
    image: require('../../assets/images/cardImage/card2.jpg')
  },
  {
    id: '3',
    title: 'CREW',
    route: 'Crews',
    image: require('../../assets/images/cardImage/card3.jpg')
  }
]

export const getCardsData = () => cardsData

function Card ({ title, description, image, onPress, route }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(route)}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.overlay}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    margin: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  cardImage: {
    width: '100%',
    height: 180
  },
  overlay: {
    position: 'absolute',
    bottom: 12,
    left: 12
  },
  cardTitle: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  }
})
