import { Text, TouchableOpacity } from 'react-native'

function ButtonComponent({ type, label, handlePress }) {
  let bgColor = '#F1F1F1'

  switch (type) {
    case 'Circuit':
      bgColor = '#B71918'
      break
    default:
      bgColor = '#F1F1F1'
      break
  }

  console.log(bgColor)

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ borderRadius: 20, padding: 10, textAlign: 'center', backgroundColor: bgColor, marginTop: 10 }}
    >
      <Text style={{ color: '#f1f1f1', fontSize: 16, textAlign: 'center' }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent
