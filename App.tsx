import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DualGameScreen from "./screens/DualGameScreen";
import { useFonts } from "expo-font";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    rubik: require("numdu/assets/fonts/Rubik-Regular.ttf"),
    rubikMedium: require("numdu/assets/fonts/Rubik-Medium.ttf"),
    rubikBold: require("numdu/assets/fonts/Rubik-Bold.ttf"),
  });

export default function App() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
