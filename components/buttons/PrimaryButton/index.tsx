import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import COLORS from "../../../colors";
import Icon from "../../Icon";

interface Props {
  text: string;
  icon?: any;
  onPress: () => void;
}

const PrimaryButton = ({ text, icon, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon !== undefined ? <Icon icon={icon} /> : null}
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
    gap: 18,
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
