import Icon from '@react-native-vector-icons/material-design-icons'
import { View, Text } from 'react-native'

function CardDetailsItem ({ element }) {
  const nameIcon = 'car'

  return (
    <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
      <Icon
        name={nameIcon}
        color='#F1F1F1'
        size={20}
      />
      <Text style={{ color: '#F1F1F1' }}>
        {element.data} km
      </Text>
    </View>
  )
}

export default CardDetailsItem
