import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import COLORS from "../../../colors";

interface Props {
  text: string;
  onPress: () => void;
}

const PrimaryButton = ({ text, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 10,
  },
  text: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontFamily: "rubikMedium",
    fontSize: 24,
    paddingVertical: 11,
  },
});
