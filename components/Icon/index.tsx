import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";

interface Props {
  icon: any;
  onPress?: () => any;
}

const Icon = ({ icon, onPress = () => {} }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {},
  icon: {
    height: 24,
    resizeMode: "center",
    aspectRatio: 1,
    width: undefined,
  },
});
