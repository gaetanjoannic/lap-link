import { FlatList } from 'react-native-gesture-handler'
import CardDetailsItem from './CardDetailsItem'

function CardDetailsElement ({ element }) {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={element}
      renderItem={
        ({ item, index, separators }) => (
          <CardDetailsItem
            key={index}
            element={element}
          />
        )
      }
    />
  )
}

export default CardDetailsElement
