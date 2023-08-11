import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Dot from "./Dot";

class DotAnim {
  public heightDelta;

  constructor() {
    this.heightDelta = useRef(new Animated.Value(0));
  }

  getDotAnimation() {
    return Animated.sequence([
      Animated.timing(this.heightDelta.current, {
        toValue: 30,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.heightDelta.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]);
  }
}

interface Props {
  scale: number;
}

const WaitingDots = ({ scale }: Props) => {
  const dot1 = new DotAnim();
  const dot2 = new DotAnim();
  const dot3 = new DotAnim();

  Animated.loop(
    Animated.sequence([
      dot1.getDotAnimation(),
      dot2.getDotAnimation(),
      dot3.getDotAnimation(),
    ])
  ).start();

  return (
    <View style={[styles.container, { transform: [{ scale: scale }] }]}>
      <Dot heightDelta={dot1.heightDelta} />
      <Dot heightDelta={dot2.heightDelta} />
      <Dot heightDelta={dot3.heightDelta} />
    </View>
  );
};

export default WaitingDots;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
});
