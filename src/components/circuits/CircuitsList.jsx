import { FlatList } from 'react-native'
import CircuitsListItem from './CircuitsListItem'

function CircuitsList({ circuits }) {
  console.log('CircuitsList', circuits.data)
  return (
    <>
      <FlatList
        keyExtractor={(item) => item.id}
        data={circuits.data}
        renderItem={
          ({ item, index, separators }) => (
            <CircuitsListItem
              key={index}
              circuit={item}
            />
          )
        }
      />
    </>
  )
}

export default CircuitsList
