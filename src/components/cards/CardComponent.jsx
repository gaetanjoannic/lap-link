import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CardDetailsElement from './CardDetailsElement'
import LinearGradient from 'react-native-linear-gradient'

function CardComponent ({ element, type }) {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate(`${type}Details`, {
      id: element.id
    })
  }

  console.log(element)

  return (
    <TouchableOpacity onPress={handlePress} style={styles.wrapper}>
      <LinearGradient
        colors={['rgba(241, 241, 241, 0.3)', 'transparent']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Image
          source={element.srcImage ? element.srcImage : require('../../assets/images/default.png')}
          style={styles.image}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.overlay}
        />

        <View style={styles.content}>
          <Text style={styles.name}>
            {element.name}
          </Text>
          <CardDetailsElement element={element.details} type={type} />
        </View>

      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    marginHorizontal: 2,
    width: 350
  },
  container: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 100,
    width: 125,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 145,
    paddingRight: 20,
    paddingVertical: 16
  },
  name: {
    fontSize: 16,
    fontFamily: 'ProximaNova-Bold',
    color: '#F1F1F1',
    marginBottom: 8
  }
})

export default CardComponent
