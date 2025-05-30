import { StyleSheet } from 'react-native'

export const customStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    marginTop: 40,
    marginHorizontal: 20,
    color: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GoodTimes-Regular'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#f1f1f1',
    fontFamily: 'ProximaNova-Regular'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#f1f1f1',
    fontFamily: 'ProximaNova-Regular'
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  buttonText: {
    color: '#1B1B1B',
    fontSize: 12,
    fontFamily: 'ProximaNova-Bold'
  }
})
