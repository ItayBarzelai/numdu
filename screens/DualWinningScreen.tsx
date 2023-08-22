import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackArrow from "../components/BackArrow";
import COLORS from "../colors";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ICONS from "../icons";

const DualWinningScreen = ({ route, navigation }: any) => {
  const winners = route.params;

  console.log(winners);

  const getMessage = (winners: any) => {
    if (winners.length === 2) return "it's a tie!";
    else if (winners[0].userId === "hola") return "you won!";
    else return `${winners[0].nickname} won!`;
  };

  const handleQuit = () => {
    console.log("a");
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  const handlePlayAgain = () => {};
  const handleAddFriend = () => {};

  return (
    <View style={styles.container}>
      <BackArrow onPress={handleQuit} />
      <Text style={styles.title}>{getMessage(winners)}</Text>
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
