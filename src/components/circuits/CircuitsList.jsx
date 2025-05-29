import { FlatList } from 'react-native'
import CircuitsListItem from './CircuitsListItem'

function CircuitsList({ circuits }) {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={circuits}
      renderItem={
        ({ item, index, separators }) => (
          <CircuitsListItem
            key={index}
            circuit={item}
          />
        )
      }
      style={{ alignItems: 'center' }}
    />
  )
}

export default CircuitsList
