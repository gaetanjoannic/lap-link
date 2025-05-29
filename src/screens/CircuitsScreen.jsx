import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import useCircuits from '../hooks/useCircuits'
import CircuitsList from '../components/circuits/CircuitsList'
import { customStyles } from '../assets/css/styles'
import data from '../datas.json'
import { ScrollView } from 'react-native-gesture-handler'

const image = require('../assets/images/carbon-bg.jpg')

function CircuitsScreen() {
  // const { circuits } = useCircuits()
  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <ScrollView style={{ alignSelf: 'center' }}>
        <Text style={customStyles.title}>Liste des circuits</Text>
        <CircuitsList
          circuits={data.circuits}
        />
      </ScrollView>
    </ImageBackground>
  )
}

export default CircuitsScreen
