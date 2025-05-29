import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'
import { Image } from 'react-native-animatable'

const RaceCard = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Animation pour dérouler (optionnelle)
  const [height] = useState(new Animated.Value(0))

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)

    Animated.timing(height, {
      toValue: isExpanded ? 0 : 85, // Ajuste la hauteur ici
      duration: 400,
      useNativeDriver: false
    }).start()
  }

  return (
    <View style={styles.card}>
      <View style={styles.trackContainer}>
        <Image
          source={require('../../assets/images/circuit-track/Track-FDB.png')}
          resizeMode='contain'
          style={styles.trackImage}
        />
      </View>
      <TouchableOpacity onPress={toggleExpand}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Fay de Bretagne</Text>
          <Text style={styles.arrow}>{isExpanded ? '⌄' : '⌃'}</Text>
        </View>
      </TouchableOpacity>

      {/* Zone déroulante */}
      <Animated.View style={[styles.scoresContainer, { height }]}>
        <View style={styles.scoreRow}>
          <Text style={styles.medal}>🥇 1:29:00 John Burger</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.medal}>🥈 1:38:50 Johni Tortelini</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.medal}>🥉 1:40:68 Johne Sanchez</Text>
        </View>
      </Animated.View>

      <View style={styles.myTimeContainer}>
        <Text style={styles.myTimeText}>1:56:68 Me</Text>
      </View>
    </View>
  )
}
export default RaceCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    margin: 16,
    elevation: 5,
    width: '55%'
  },
  trackContainer: {
    height: 180,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  arrow: {
    fontSize: 20
  },
  scoresContainer: {
    padding: 12,
    backgroundColor: '#f1f1f1'
  },
  myTimeContainer: {
    backgroundColor: '#B71918',
    padding: 12,
    alignItems: 'center'
  },
  myTimeText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  trackImage: {
    width: '80%',
    height: 180
  }
})
