import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import { TouchableOpacity, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

function TopTabsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'LapLink',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
              <Text style={{ color: '#fff', marginRight: 15 }}>Profil</Text>
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name='Profil'
        component={ProfileScreen}
        options={{
          title: 'Mon Profil',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  )
}

export default TopTabsNavigator
