import React from "react";
import { Image, StyleSheet } from "react-native";

interface Props {
  icon: any;
}

const Icon = ({ icon }: Props) => {
  return <Image source={icon} style={styles.icon} />;
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    resizeMode: "center",
    aspectRatio: 1,
    width: undefined,
  },
});
