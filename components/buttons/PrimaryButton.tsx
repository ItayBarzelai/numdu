import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import COLORS from "../../colors";

interface Props {
  text: string;
  icon?: any;
  onPress: () => void;
}

const PrimaryButton = ({ text, icon, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon !== undefined ? <Image source={icon} style={styles.icon} /> : null}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
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
  icon: {
    resizeMode: "center",
    height: 24,
    width: undefined,
    aspectRatio: 1,
  },
});
