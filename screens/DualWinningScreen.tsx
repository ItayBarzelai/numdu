import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackArrow from "../components/BackArrow";
import COLORS from "../colors";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ICONS from "../icons";

const DualWinningScreen = () => {
  const [winners, setWinners] = useState([]);
  const [message, setMessage] = useState("");

  const handleQuit = () => {};
  const handlePlayAgain = () => {};
  const handleAddFriend = () => {};

  // add when websocket sends winners:
  // - message = "you won"
  // - message = "cheese23 won"
  // - message = "it's a tie"
  useEffect(() => {
    setMessage("You won");
  }, []);

  return (
    <View style={styles.container}>
      <BackArrow onPress={handleQuit} />
      <Text style={styles.title}>{message}</Text>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          text="Play Again"
          icon={ICONS.repeat}
          onPress={handlePlayAgain}
        />
        <PrimaryButton
          text="Add Friend"
          icon={ICONS.addFriend}
          onPress={handleAddFriend}
        />
      </View>
    </View>
  );
};

export default DualWinningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 30,
    gap: 20,
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: "rubikMedium",
    textAlign: "center",
    fontSize: 40,
  },
  buttonsContainer: {
    gap: 15,
  },
});
