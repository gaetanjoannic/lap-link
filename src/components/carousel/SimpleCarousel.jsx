import React from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import RaceCard from '../cards/FavoriteTrackCard.jsx' // ton composant

const { width: PAGE_WIDTH } = Dimensions.get('window')

function SimpleCarousel ({ data }) {
  const CARD_WIDTH = PAGE_WIDTH * 1 // largeur réduite pour l’effet peeking
  const CARD_MARGIN = -50

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate='fast'
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.cardWrapper,
              { width: CARD_WIDTH, marginHorizontal: CARD_MARGIN }
            ]}
          >
            <RaceCard
              title={item.title}
              trackImage={item.trackImage}
              scores={item.scores}
              myTime={item.myTime}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 0 // un petit padding si tu veux encore plus d’espace
  },
  cardWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SimpleCarousel
