import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
}

const BackArrow = ({ onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.arrow}
        source={require("numdu/assets/images/arrow.png")}
      />
    </Pressable>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  arrow: {
    width: 32,
    height: 24,
  },
});
