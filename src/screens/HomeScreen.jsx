import React from 'react'
import { FlatList, StyleSheet, ImageBackground, Text } from 'react-native'
import Card, { getCardsData } from '../components/cards/HomeCard.jsx'
import EventCard, { getEventCardsData } from '../components/cards/EventCard.jsx'
import { ScrollView } from 'react-native-gesture-handler'
import SimpleCarousel from '../components/carousel/SimpleCarousel.jsx'
import raceData from '../components/circuits/circuits-data.js'
import { customStyles } from '../assets/css/styles.js'

const HomeScreen = () => {
  const data = getCardsData()
  const EventData = getEventCardsData()

  return (

    <ImageBackground
      source={require('../assets/images/carbon-bg.jpg')}
      resizeMode='cover'
    >
      <ScrollView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
        <Text style={customStyles.title}>Circuits Favoris</Text>
        <SimpleCarousel data={raceData} />
        <Text style={customStyles.title}>évènements en cours</Text>
        <FlatList
          data={EventData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventCard
              title={item.title}
              description={item.description}
              image={item.image}
              place={item.place}
              date={item.date}
            />
          )} contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 16
  },
  listContent: {
    paddingBottom: 20
  }
})
