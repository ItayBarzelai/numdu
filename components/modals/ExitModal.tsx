import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BlankModal from "./BlankModal";
import COLORS from "../../colors";
import PrimaryButton from "../buttons/PrimaryButton";
import TertiaryButton from "../buttons/TertiaryButton";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onPressQuit: () => void;
}

const ExitModal = ({ visible, setVisible, onPressQuit }: Props) => {
  return (
    <BlankModal visible={visible} setVisible={setVisible}>
      <Text style={styles.quitText}>You sure you want to quit?</Text>
      <PrimaryButton text="No" onPress={() => setVisible(false)} />
      <TertiaryButton text="Yes" onPress={onPressQuit} />
    </BlankModal>
  );
};

export default ExitModal;

const styles = StyleSheet.create({
  quitText: {
    fontFamily: "rubikMedium",
    fontSize: 20,
    color: COLORS.WHITE,
    textAlign: "center",
  },
});
