import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Key from "./Key";

interface Props {
  value: string;
  setValue: (value: string) => void;
  onPressSend: () => void;
}

const Keypad = ({ value, setValue, onPressSend }: Props) => {
  const handleBackpace = () => {
    setValue(value.slice(0, -1));
  };

  const handlePress = (content: string | "send" | "backspace") => {
    if (content === "send") onPressSend();
    else if (content === "backspace") handleBackpace();
    else if (value.length < 7) setValue(value + content);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Key content={"1"} handlePress={handlePress} />
        <Key content={"2"} handlePress={handlePress} />
        <Key content={"3"} handlePress={handlePress} />
        <Key content={"send"} handlePress={handlePress} />
      </View>
      <View style={styles.row}>
        <Key content={"4"} handlePress={handlePress} />
        <Key content={"5"} handlePress={handlePress} />
        <Key content={"6"} handlePress={handlePress} />
        <Key content={"backspace"} handlePress={handlePress} />
      </View>
      <View style={styles.row}>
        <Key content={"7"} handlePress={handlePress} />
        <Key content={"8"} handlePress={handlePress} />
        <Key content={"9"} handlePress={handlePress} />
        <Key content={"0"} handlePress={handlePress} />
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    gap: 5,
    flex: 1,
  },
  row: {
    gap: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    maxHeight: 85,
  },
});
