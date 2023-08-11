import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ICONS from "../icons";
import COLORS from "../colors";

const HomeScreen = () => {
  const handleUser = () => {
    console.log("handleUser");
  };
  const handleCoin = () => {
    console.log("handleCoin");
  };
  const handleLightning = () => {
    console.log("handleLightning");
  };
  const handleQuickPlay = () => {
    console.log("handleQuickPlay");
  };
  const handleChallangeAFriend = () => {
    console.log("handleChallangeAFriend");
  };
  const handleGroup = () => {
    console.log("handleGroup");
  };
  const handlePractice = () => {
    console.log("handlePractice");
  };
  const handleLeaderBoard = () => {
    console.log("handleLeaderBoard");
  };
  const handleSettings = () => {
    console.log("handleSettings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Pressable onPress={handleUser}>
          <Image
            style={styles.barIcon}
            source={require("numdu/assets/images/user.png")}
          />
        </Pressable>
        <Pressable style={styles.barContaienr} onPress={handleCoin}>
          <Image
            style={styles.barIcon}
            source={require("numdu/assets/images/coin.png")}
          />
          <Text style={styles.barText}>999,999</Text>
        </Pressable>
        <Pressable style={styles.barContaienr} onPress={handleLightning}>
          <Image
            style={styles.barIcon}
            source={require("numdu/assets/images/lightning.png")}
          />
          <Text style={styles.barText}>8/8</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          text="Quick Play"
          icon={ICONS.play}
          onPress={handleQuickPlay}
        />
        <PrimaryButton
          text="Challange A Friend"
          icon={ICONS.friend}
          onPress={handleChallangeAFriend}
        />
        <PrimaryButton
          text="Group (coming soon...)"
          icon={ICONS.group}
          onPress={handleGroup}
        />
        <PrimaryButton
          text="Practice"
          icon={ICONS.bowAndArrow}
          onPress={handlePractice}
        />
        <PrimaryButton
          text="Leader Board"
          icon={ICONS.medal}
          onPress={handleLeaderBoard}
        />
      </View>
      <Pressable style={styles.settingsIcon} onPress={handleSettings}>
        <Image
          style={styles.barIcon}
          source={require("numdu/assets/images/settings.png")}
        />
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    paddingTop: 100,
    paddingHorizontal: 30,
    gap: 20,
  },
  buttonsContainer: {
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    gap: 10,
  },
  settingsIcon: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  bar: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  barContaienr: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  barText: {
    textAlign: "center",
    fontFamily: "rubikMedium",
    fontSize: 24,
    color: COLORS.WHITE,
  },
  barIcon: {
    resizeMode: "center",
    height: 35,
    width: undefined,
    aspectRatio: 1,
  },
});
