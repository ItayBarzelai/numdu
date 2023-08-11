import { useFonts } from "expo-font";

  const [fontsLoaded] = useFonts({
    rubik: require("numdu/assets/fonts/Rubik-Regular.ttf"),
    rubikMedium: require("numdu/assets/fonts/Rubik-Medium.ttf"),
    rubikBold: require("numdu/assets/fonts/Rubik-Bold.ttf"),
  });

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
