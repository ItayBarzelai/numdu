import {
  StyleSheet,
  Text,
  View,
  TextInput,
  InputModeOptions,
} from "react-native";
import React from "react";
import COLORS from "../colors";

interface Props {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  textAlign?: "center" | "left" | "right";
  inputMode?: InputModeOptions;
}

const Input = ({
  placeholder,
  value,
  setValue,
  maxLength,
  textAlign = "center",
  inputMode = "text",
}: Props) => {
  const onChange = (value: string) => {
    setValue(
      inputMode === "numeric"
        ? value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, "")
        : value
    );
  };

  return (
    <TextInput
      style={styles.container}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      textAlign={textAlign}
      inputMode={inputMode}
      maxLength={maxLength}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    fontSize: 24,
    fontFamily: "rubikMedium",
    paddingHorizontal: 10,
    height: 60,
  },
});
