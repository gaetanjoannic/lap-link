import React from 'react'
import { ImageBackground, Text } from 'react-native'
import { customStyles } from '../assets/css/styles'
import data from '../datas.json'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import CardComponent from '../components/cards/CardComponent'

const image = require('../assets/images/carbon-bg.jpg')

function CrewScreen () {
  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <ScrollView style={{ alignSelf: 'center' }}>
        <Text style={customStyles.title}>Vos crews</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data.crews}
          renderItem={
        ({ item, index, separators }) => (
          <CardComponent
            key={index}
            element={item}
            type='Crew'
          />
        )
      }
          style={{ alignSelf: 'center' }}
        />
      </ScrollView>
    </ImageBackground>
  )
}

export default CrewScreen
