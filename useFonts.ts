import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    rubik: require("numdu/assets/fonts/Rubik-Regular.ttf"),
    rubikMedium: require("numdu/assets/fonts/Rubik-Medium.ttf"),
    rubikBold: require("numdu/assets/fonts/Rubik-Bold.ttf"),
  });
 
export default useFonts;
