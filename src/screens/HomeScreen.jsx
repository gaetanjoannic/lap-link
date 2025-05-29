import React from 'react'
import { FlatList, StyleSheet, ImageBackground } from 'react-native'
import Card, { getCardsData } from '../components/cards/HomeCard.jsx'
import { ScrollView } from 'react-native-gesture-handler'
import SimpleCarousel from '../components/carousel/SimpleCarousel.jsx'
import raceData from '../components/circuits/circuits-data.js'

const HomeScreen = () => {
  const data = getCardsData()

  return (

    <ImageBackground
      source={require('../assets/images/carbon-bg.jpg')}
      resizeMode='cover'
    >
      <ScrollView>
        <SimpleCarousel data={raceData} />
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
