import React, { useState, useMemo } from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from '@react-native-vector-icons/material-design-icons'
import CircuitsList from '../components/circuits/CircuitsList'
import { customStyles } from '../assets/css/styles'
import data from '../datas.json'
import { ScrollView } from 'react-native-gesture-handler'
import SimpleCarousel from '../components/carousel/SimpleCarousel'
import raceData from '../components/circuits/circuits-data.js'

const image = require('../assets/images/carbon-bg.jpg')

function CircuitsScreen () {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCircuits = useMemo(() => {
    if (!searchQuery.trim()) {
      return data.circuits
    }

    const query = searchQuery.toLowerCase().trim()

    return data.circuits.filter(circuit => {
      const nameMatch = circuit.name.toLowerCase().includes(query)
      const locationMatch = circuit.location.toLowerCase().includes(query)

      const cityMatch = circuit.details &&
        circuit.details['2'] &&
        circuit.details['2'].value.toLowerCase().includes(query)

      return nameMatch || locationMatch || cityMatch
    })
  }, [searchQuery])

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <ScrollView style={{ alignSelf: 'center' }}>
        <Text style={customStyles.title}>Liste des circuits</Text>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder='Chercher un circuit'
              placeholderTextColor='#888'
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize='none'
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={clearSearch}
              >
                <Icon name='close' size={20} color='#888' />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Icon name='magnify' size={20} color='#FFF' />
          </TouchableOpacity>
        </View>

        {searchQuery.length > 0 && (
          <Text style={styles.resultsText}>
            {filteredCircuits.length} circuit{filteredCircuits.length > 1 ? 's' : ''} trouvé{filteredCircuits.length > 1 ? 's' : ''}
          </Text>
        )}

        <CircuitsList circuits={filteredCircuits} />

        <Text style={customStyles.title}>Circuits précédemment visités</Text>

        <SimpleCarousel data={raceData} />
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    gap: 10
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0
  },
  clearButton: {
    padding: 5,
    marginLeft: 10
  },
  searchButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  resultsText: {
    color: '#F1F1F1',
    fontSize: 14,
    marginHorizontal: 20,
    marginBottom: 15,
    fontStyle: 'italic'
  }
})

export default CircuitsScreen
