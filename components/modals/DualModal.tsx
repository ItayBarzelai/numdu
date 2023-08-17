import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import BlankModal from "./BlankModal";
import ButtonGroup from "../ButtonGroup";
import PrimaryButton from "../buttons/PrimaryButton";
import COLORS from "../../colors";
import Input from "../Input";
import { SocketContext } from "../../socketContext";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const DualModal = ({ visible, setVisible }: Props) => {
  const socket = useContext(SocketContext);
  const options = [
    { label: "100", value: 100 },
    { label: "200", value: 200 },
    { label: "300", value: 300 },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [code, setCode] = useState("");

  const handleStart = () => {};
  const handleJoin = () => {};

  return (
    <BlankModal visible={visible} setVisible={setVisible}>
      <View style={styles.createContainer}>
        <Image
          style={styles.icon}
          source={require("numdu/assets/images/coin.png")}
        />
        <ButtonGroup
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
      <PrimaryButton text="CREATE" onPress={handleStart} />
      <View style={styles.divider} />
      <Input
        placeholder="Enter PIN"
        value={code}
        setValue={setCode}
        maxLength={6}
        inputMode="numeric"
      />
      <PrimaryButton text="JOIN" onPress={handleJoin} />
    </BlankModal>
  );
};

export default DualModal;

const styles = StyleSheet.create({
  createContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: COLORS.SECONDARY,
  },
  divider: {
    backgroundColor: COLORS.SECONDARY,
    width: "100%",
    height: 3,
    marginVertical: 10,
    opacity: 0.5,
  },
});
