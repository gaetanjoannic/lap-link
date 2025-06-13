import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import data from '../datas.json'
import { customStyles } from '../assets/css/styles'
import CardDetailed from '../components/cards/not-clickable-cards/CardDetailed'
import ButtonComponent from '../components/ButtonComponent'
import { ScrollView } from 'react-native-gesture-handler'

function CrewDetailsScreen ({ navigation, route }) {
  const image = require('../assets/images/carbon-bg.jpg')
  const { id } = route.params
  const crew = data.crews.find((c) => c.id === id)

  if (!crew) {
    return (
      <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
        <View style={styles.loadingContainer}>
          <Text style={{ color: '#f1f1f1' }}>Crew non trouvé</Text>
        </View>
      </ImageBackground>
    )
  }0

  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode='cover' style={customStyles.container}>
        <Button title='<-' onPress={() => navigation.goBack()} />
        {crew && (
          <>
            <Text style={customStyles.title}>{crew?.name}</Text>
            <CardDetailed element={crew} type='Crew' />

            <ButtonComponent
              type='Crew' label="S'inscrire a l'évènement" handlePress={() => navigation.navigate('Go')}
            />
          </>
        )}
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f1f1f1'
  },
  location: {
    fontSize: 18,
    color: '#f1f1f1',
    marginBottom: 20
  }
})

export default CrewDetailsScreen
