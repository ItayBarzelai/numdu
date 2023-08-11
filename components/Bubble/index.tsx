import React, { useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import COLORS from "../../colors";
import WaitingDots from "../WaitingDots";

interface Props {
  nickname: string;
  guess: number | "waiting" | "sent";
  invert?: boolean;
}

const Bubble = ({ nickname, guess, invert = false }: Props) => {
  const animation = useRef(null);

  const bubbleContent = () => {
    if (typeof guess === "number")
      return <Text style={styles.guessText}>{guess.toLocaleString()}</Text>;
    else if (guess === "waiting") return <WaitingDots scale={0.5} />;
    else if (guess === "sent")
      return (
        <Image
          style={styles.airplane}
          source={require("numdu/assets/images/airplane.png")}
        />
      );
  };

  return (
    <View
      style={[
        styles.container,
        { alignItems: invert ? "flex-end" : "flex-start" },
      ]}
    >
      <Text style={styles.nicknameText}>{nickname}</Text>
      <View
        style={[
          styles.bubble,
          {
            borderBottomRightRadius: invert ? 0 : 10,
            borderBottomLeftRadius: invert ? 10 : 0,
          },
        ]}
      >
        {bubbleContent()}
      </View>
      <View
        style={[
          styles.tail,
          {
            borderRightWidth: invert ? 0 : 20,
            borderLeftWidth: invert ? 20 : 0,
          },
        ]}
      />
    </View>
  );
};

export default Bubble;

const styles = StyleSheet.create({
  container: {},
  nicknameText: {
    color: COLORS.WHITE,
    fontFamily: "rubikMedium",
    fontSize: 16,
    paddingBottom: 5,
  },
  bubble: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    height: 50,
    width: 132,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  guessText: {
    color: COLORS.BLACK,
    fontFamily: "rubikMedium",
    fontSize: 24,
    textAlign: "center",
  },
  tail: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 10,
    borderTopColor: COLORS.WHITE,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },
  airplane: {
    tintColor: COLORS.BLACK,
    width: 35,
    height: 30,
    transform: [{ scale: -1 }],
    right: 5,
  },
  waitingDots: {
    backgroundColor: "red",
  },
});
