import React from "react";
import { Animated, StyleSheet } from "react-native";
import COLORS from "../../colors";

interface Props {
  heightDelta: React.MutableRefObject<Animated.Value>;
}

const Dot = ({ heightDelta }: Props) => {
  return (
    <Animated.View
      style={[
        styles.dot,
        {
          bottom: heightDelta.current,
        },
      ]}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: COLORS.DARKER_GRAY,
    height: 15,
    width: 15,
    borderRadius: 8,
  },
});
