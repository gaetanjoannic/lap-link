import { Text, ImageBackground } from 'react-native'
import { customStyles } from '../assets/css/styles'

const image = require('../assets/images/carbon-bg.jpg')

const HomeScreen = () => {
  return (
    <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
      <Text style={customStyles.title}>Bienvenue sur LapLink</Text>
      <Text style={customStyles.subtitle}>
        Pour ajouter une voiture, va sur la page Profil
      </Text>
    </ImageBackground>
  )
}

export default HomeScreen
