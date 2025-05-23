import { ImageBackground, StyleSheet, View } from 'react-native'
import useCircuits from '../hooks/useCircuits'
import CircuitsList from '../components/circuits/CircuitsList'
import { customStyles } from '../assets/css/styles'

const image = require('../assets/images/carbon-bg.jpg')

function CircuitsScreen() {
  const { circuits } = useCircuits()
  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <CircuitsList
        circuits={circuits}
      />
    </ImageBackground>
  )
}

export default CircuitsScreen
