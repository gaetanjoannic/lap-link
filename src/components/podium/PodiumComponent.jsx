import { View, Text, StyleSheet } from 'react-native'

function PodiumComponent() {
  return (
    <View contentContainerStyle={styles.container}>
      {/* Podium */}
      <View style={styles.podium}>
        <View style={styles.second}>
          <Text style={styles.name}>John Burger</Text>
          <Text style={styles.time}>05 : 10 : 80</Text>
          <Text style={styles.lap}>1 : 27 : 55 / tours</Text>
        </View>

        <View style={styles.first}>
          <Text style={[styles.name, styles.nameFirst]}>John Burger</Text>
          <Text style={styles.time}>05 : 10 : 80</Text>
          <Text style={styles.lap}>1 : 27 : 55 / tours</Text>
        </View>

        <View style={styles.third}>
          <Text style={styles.name}>John Burger</Text>
          <Text style={styles.time}>05 : 10 : 80</Text>
          <Text style={styles.lap}>1 : 27 : 55 / tours</Text>
        </View>
      </View>

      {/* Liste des résultats */}
      <View style={styles.results}>
        <View style={styles.resultRow}>
          <Text style={styles.resultName}>John Burger</Text>
          <Text style={styles.resultTime}>05 : 10 : 80</Text>
          <Text style={styles.resultLap}>1 : 27 : 55 / tours</Text>
        </View>
        <View style={styles.resultRow}>
          <Text style={styles.resultName}>John Burger</Text>
          <Text style={styles.resultTime}>05 : 10 : 80</Text>
          <Text style={styles.resultLap}>1 : 27 : 55 / tours</Text>
        </View>
        <View style={[styles.resultRow, styles.myResult]}>
          <Text style={styles.resultName}>Moi</Text>
          <Text style={styles.resultTime}>07 : 10 : 80</Text>
          <Text style={styles.resultLap}>2 : 00 : 55 / tours</Text>
        </View>
      </View>

      {/* Voir plus */}
      <Text style={styles.more}>Voir plus →</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  podium: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 24
  },
  first: {
    backgroundColor: '#D92027',
    padding: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    width: 100,
    height: 140,
    marginHorizontal: 8
  },
  second: {
    backgroundColor: '#EAEAEA',
    padding: 12,
    alignItems: 'center',
    width: 100,
    height: 100,
    borderTopLeftRadius: 16
  },
  third: {
    backgroundColor: '#EAEAEA',
    padding: 12,
    alignItems: 'center',
    width: 100,
    height: 100,
    borderTopRightRadius: 16
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  nameFirst: {
    color: '#fff'
  },
  time: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  lap: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  },
  results: {
    width: '100%'
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#444'
  },
  resultName: {
    color: '#fff',
    flex: 1
  },
  resultTime: {
    color: '#fff',
    flex: 1,
    textAlign: 'center'
  },
  resultLap: {
    color: '#fff',
    flex: 1,
    textAlign: 'right'
  },
  myResult: {
    backgroundColor: '#D92027'
  },
  more: {
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default PodiumComponent
