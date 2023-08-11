import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import COLORS from "../../colors";

interface Props {
  text: string;
  onPress: () => void;
}

const TertiaryButton = ({ text, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default TertiaryButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontFamily: "rubikMedium",
    fontSize: 20,
    paddingVertical: 11,
    textDecorationLine: "underline",
  },
});
