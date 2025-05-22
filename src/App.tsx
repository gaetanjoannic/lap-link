/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import BootSplash from "react-native-bootsplash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        onReady={() => {
          BootSplash.hide({ fade: true });
        }}
      >
        <MainNavigator />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "LapLink",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
                  <Text style={{ color: "#fff", marginRight: 15 }}>Profil</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Profil"
            component={ProfileScreen}
            options={{
              title: "Mon Profil",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
