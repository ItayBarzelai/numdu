import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SocketContext } from "../socketContext";
import COLORS from "../colors";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ICONS from "../icons";
import DualModal from "../components/modals/DualModal";
import PracticeModal from "../components/modals/PracticeModal";

const HomeScreen = () => {
  const socket = useContext(SocketContext);
  const navigation = useNavigation();

  const [dualModalVisible, setDualModalVisible] = useState(false);
  const [practiceModalVisible, setPracticeModalVisible] = useState(false);

  const handleUser = () => {};
  const handleCoin = () => {};
  const handleLightning = () => {};
  const handleQuickPlay = () => {};
  const handleChallangeAFriend = () => {
    setDualModalVisible(true);
  };
  const handleGroup = () => {};
  const handlePractice = () => {
    setPracticeModalVisible(true);
  };
  const handleLeaderBoard = () => {};
  const handleSettings = () => {};

  return (
    <View style={styles.container}>
      <DualModal visible={dualModalVisible} setVisible={setDualModalVisible} />
      <PracticeModal
        visible={practiceModalVisible}
        setVisible={setPracticeModalVisible}
      />

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
