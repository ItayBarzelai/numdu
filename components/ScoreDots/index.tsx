import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../colors";

interface Props {
  score: number;
  maxScore?: number;
  invert?: boolean;
}

const ScoreDots = ({ score, maxScore = 5, invert = false }: Props) => {
  return (
    <View
      style={[
        styles.container,
        { flexDirection: invert ? "row-reverse" : "row" },
      ]}
    >
      <FlatList
        data={Array(score)}
        renderItem={() => <View style={[styles.dot, styles.fullDot]} />}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        horizontal
      />
      <FlatList
        data={Array(maxScore - score)}
        renderItem={() => <View style={[styles.dot, styles.halfDot]} />}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        horizontal
      />
    </View>
  );
};

export default ScoreDots;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "flex-start",
    gap: 10,
    backgroundColor: "black",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  fullDot: {
    backgroundColor: COLORS.WHITE,
  },
  halfDot: {
    backgroundColor: "#FFFFFF77",
  },
  gap: {
    width: 10,
    backgroundColor: "red",
  },
});
