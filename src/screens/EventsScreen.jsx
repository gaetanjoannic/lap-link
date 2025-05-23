import { ImageBackground, Text } from 'react-native'
import { customStyles } from '../assets/css/styles'

const image = require('../assets/images/carbon-bg.jpg')

function EventsScreen() {
  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <Text style={customStyles.title}>Events page</Text>
    </ImageBackground>
  )
}

export default EventsScreen
