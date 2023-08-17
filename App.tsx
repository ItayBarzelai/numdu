import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import DualGameScreen from "./screens/DualGameScreen";
import DualWinningScreen from "./screens/DualWinningScreen";
import HomeScreen from "./screens/HomeScreen";
import PinLobbyScreen from "./screens/PinLobbyScreen";
import useFonts from "./useFonts";
import { SocketContext } from "./socketContext";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// export const SocketContext = createContext(socket);

const Stack = createNativeStackNavigator();

const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  const socket = useContext(SocketContext);

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      console.log("Connect: " + socket.id);
      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log("Disconnect: " + socket.id);
      setIsConnected(false);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

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
        <SocketContext.Provider value={socket}>
          <NavigationContainer theme={navTheme}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PinLobby"
                component={PinLobbyScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DualGame"
                component={DualGameScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DualWinning"
                component={DualWinningScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SocketContext.Provider>
      </ImageBackground>
    );
};

export default App;
