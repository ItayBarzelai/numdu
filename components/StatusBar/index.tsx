import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../colors";

const StatusBar = () => {
  const status = "a";
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "red",
    alignItems: "center",
  },
  statusBar: {
    width: 30,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
  },
});
