import { ImageBackground, Text } from 'react-native'
import { customStyles } from '../assets/css/styles'

const image = require('../assets/images/carbon-bg.jpg')

function GoScreen() {
  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <Text style={customStyles.title}>Go page</Text>
    </ImageBackground>
  )
}

export default GoScreen
