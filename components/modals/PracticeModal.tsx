import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonGroup from "../ButtonGroup";
import PrimaryButton from "../buttons/PrimaryButton";
import BlankModal from "./BlankModal";
import COLORS from "../../colors";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const PracticeModal = ({ visible, setVisible }: Props) => {
  const optionsTime = [
    { label: "10s", value: 10 },
    { label: "30s", value: 30 },
    { label: "∞", value: "inf" },
  ];
  const optionsAmount = [
    { label: "5", value: 100 },
    { label: "∞", value: "inf" },
  ];

  const [selectedTime, setSelectedTime] = useState(optionsTime[0].value);
  const [selectedAmount, setSelectedAmount] = useState(optionsAmount[0].value);

  const handleStart = () => {};

  return (
    <BlankModal visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <Text style={styles.text}>How many questions?</Text>
        <ButtonGroup
          options={optionsAmount}
          selected={selectedAmount}
          setSelected={setSelectedAmount}
        />
        <Text style={styles.text}>Time per question?</Text>
        <ButtonGroup
          options={optionsTime}
          selected={selectedTime}
          setSelected={setSelectedTime}
        />
        <View style={styles.divider} />
        <PrimaryButton text="START" onPress={handleStart} />
      </View>
    </BlankModal>
  );
};

export default PracticeModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
    display: "flex",
    alignItems: "stretch",
  },
  divider: {
    backgroundColor: COLORS.SECONDARY,
    width: "100%",
    height: 3,
    marginVertical: 10,
    opacity: 0.5,
  },
  text: {
    fontFamily: "rubikMedium",
    textAlign: "center",
    color: COLORS.WHITE,
    fontSize: 20,
  },
});
