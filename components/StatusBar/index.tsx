import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import COLORS from "../../colors";

interface Props {
  status: "guessing" | "countdown";
}

const StatusBar = ({ status }: Props) => {
  const swingRef = useRef(new Animated.Value(0)).current;
  const widthRef = useRef(new Animated.Value(0)).current;

  const swingAnim = Animated.loop(
    Animated.sequence([
      Animated.timing(swingRef, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }),
      Animated.timing(swingRef, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }),
    ])
  );

  const widthAnim = Animated.sequence([
    Animated.parallel([
      Animated.timing(widthRef, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(swingRef, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]),
    Animated.parallel([
      Animated.timing(widthRef, {
        toValue: 0,
        duration: 4500,
        useNativeDriver: false,
      }),
      Animated.timing(swingRef, {
        toValue: 0.6,
        duration: 4500,
        useNativeDriver: false,
      }),
    ]),
  ]);

  const resetAnim = Animated.parallel([
    Animated.timing(widthRef, {
      toValue: 0.15,
      duration: 500,
      useNativeDriver: false,
    }),
    swingAnim,
  ]);

  useEffect(() => {
    if (status === "guessing") {
      resetAnim.start();
    } else if (status === "countdown") {
      widthAnim.start();
    }
  }, [status]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.statusBar,
          {
            width: widthRef.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
            left: swingRef.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "85%"],
            }),
          },
        ]}
      />
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
  statusBar: {
    width: 30,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
  },
});
