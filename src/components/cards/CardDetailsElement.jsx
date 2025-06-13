import { FlatList } from 'react-native-gesture-handler'
import CardDetailsItem from './CardDetailsItem'

function CardDetailsElement ({ element, type }) {
  const dataArray = Object.values(element || {})

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={dataArray}
      renderItem={({ item, index }) => (
        <CardDetailsItem
          key={index}
          element={item}
          type={type}
        />
      )}
    />
  )
}

export default CardDetailsElement
