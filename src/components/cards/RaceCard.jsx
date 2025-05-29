import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const RaceCard = ({ title, trackImage, scores, myTime }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={styles.trackContainer}>
        <Image
          source={trackImage}
          style={styles.image}
          resizeMode='contain'
        />
      </View>

      {/* Title + toggle arrow */}
      <TouchableOpacity onPress={toggleExpand}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.arrow}>{isExpanded ? '⌃' : '⌄'}</Text>
        </View>
      </TouchableOpacity>

      {/* Scores */}
      {isExpanded && (
        <View style={styles.scoresContainer}>
          {scores.map((score, index) => (
            <View key={index} style={styles.scoreRow}>
              <Text style={styles.medal}>
                {score.place === 1 ? '🥇' : score.place === 2 ? '🥈' : '🥉'}
              </Text>
              <Text>
                {score.time} {score.name}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* My time */}
      <View style={styles.myTimeContainer}>
        <Text style={styles.myTimeText}>{myTime} Me</Text>
      </View>
    </View>
  )
}

export default RaceCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    overflow: 'hidden',
    margin: 16,
    elevation: 5,
    width: '60%'
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
    color: '#f1f1f1',
    fontWeight: 'bold'
  },
  image: {
    width: '80%',
    height: 180
  }
})
