import Icon from '@react-native-vector-icons/material-design-icons'
import { View, Text } from 'react-native'

function CardDetailsItem ({ element, type }) {
  let nameIcon = 'help'
  let displayValue = element.value
  let iconColor = '#F1F1F1'

  switch (element.type) {
    case 'distance':
      nameIcon = 'car'
      displayValue = `${element.value} km`
      break
    case 'location':
      nameIcon = 'pin'
      displayValue = element.value
      break
    default:
      nameIcon = 'help'
      break
  }

  switch (type) {
    case 'Circuit':
      iconColor = '#B71918'
      break
    case 'Crew':
      iconColor = '#F7A715'
      break
    default:
      iconColor = '#F1F1F1'
      break
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
      <Icon
        name={nameIcon}
        color={iconColor}
        size={20}
      />
      <Text style={{ color: '#F1F1F1' }}>
        {displayValue}
      </Text>
    </View>
  )
}

export default CardDetailsItem
