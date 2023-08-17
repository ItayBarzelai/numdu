import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExitModal from "../components/modals/ExitModal";
import BackArrow from "../components/BackArrow";
import COLORS from "../colors";
import { SocketContext } from "../socketContext";

  const socket = useContext(SocketContext);
  const [exitModalVisible, setExitModalVisible] = useState(false);

  const handleQuit = () => {};
  const handleGoBack = () => {
    setExitModalVisible(true);
  };

  const formatGameCode = (code: number) => {
    return code.toString().padStart(6, "0");
  };

  return (
    <View style={styles.container}>
      <ExitModal
        visible={exitModalVisible}
        setVisible={setExitModalVisible}
        onPressQuit={handleQuit}
      />
      <BackArrow onPress={handleGoBack} />
      <Text style={styles.titleText}>GAME PIN</Text>
      <Text style={styles.pinText}>{formatGameCode(gameCode)}</Text>
      <Image
        style={styles.spinner}
        source={require("numdu/assets/gifs/spinner.gif")}
      />
    </View>
  );
};

export default PinLobbyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    gap: 20,
  },
  titleText: {
    color: COLORS.WHITE,
    fontFamily: "rubikMedium",
    textAlign: "center",
    fontSize: 40,
  },
  pinText: {
    color: COLORS.WHITE,
    fontFamily: "rubikMedium",
    textAlign: "center",
    fontSize: 64,
  },
  spinner: {
    width: 120,
    height: undefined,
    aspectRatio: 1,
    tintColor: COLORS.WHITE,
  },
});
