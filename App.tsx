import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import DualGameScreen from "./screens/DualGameScreen";
import HomeScreen from "./screens/HomeScreen";
import useFonts from "./useFonts";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady)
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  else
    return (
      <ImageBackground
        source={require("numdu/assets/images/background-image.png")}
        style={{ flex: 1 }}
      >
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="DualGame"
              component={DualGameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
