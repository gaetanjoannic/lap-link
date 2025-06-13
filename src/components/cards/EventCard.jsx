import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ButtonComponent from '../ButtonComponent'
import { useNavigation } from '@react-navigation/native'

const EventData = [
  {
    id: '1',
    title: 'TRACKDAY',
    image: require('../../assets/images/cardImage/Event1.jpg'),
    description: 'Organisé par John organisateur',
    place: 'Circuit Paul Ricard',
    date: '02/07/2025 - 8h15'
  },
  {
    id: '2',
    title: 'RENCONTRE',
    image: require('../../assets/images/cardImage/card2.jpg'),
    description: "Organisé par l'ACO",
    place: 'Circuit Bugatti',
    date: '23/12/2025 - 10h00'
  }
]

export const getEventCardsData = () => EventData

function EventCard ({ title, description, image, place, date, onPress }) {
  const navigation = useNavigation()

  return (
    <View style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.overlay}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text style={styles.cardPlace}>{place}</Text>
        <Text style={styles.cardDate}>{date}</Text>
        <TouchableOpacity>
          <ButtonComponent type='Event' label="Voir l'évènement" handlePress={() => navigation.navigate('Events')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EventCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    margin: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    backgroundColor: '#1b1b1b',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    height: 380
  },
  cardImage: {
    width: '100%',
    height: 180
  },
  overlay: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#1b1b1b',
    height: 120,
    padding: 10
  },
  cardTitle: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    left: 12
  },
  cardDescription: {
    color: '#f1f1f1',
    fontSize: 13,
    borderBottomWidth: 0.3,
    borderBottomColor: '#f1f1f1',
    paddingBottom: 5,
    marginBottom: 5
  },
  cardPlace: {
    fontSize: 13,
    color: '#f1f1f1',
    paddingHorizontal: 10,
    paddingTop: 5
  },
  cardDate: {
    fontSize: 13,
    color: '#f1f1f1',
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 10
  }
})
