import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../colors";

interface Props {
  options: { label: string; value: any }[];
  selected: any;
  setSelected: (selected: any) => void;
}

const ButtonGroup = ({ options, selected, setSelected }: Props) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Pressable
          style={[
            styles.optionContainer,
            {
              borderLeftWidth: option !== options[0] ? 2 : 0,
            },
          ]}
          onPress={() => setSelected(option.value)}
        >
          <Text
            style={[
              styles.optionText,
              { opacity: option.value === selected ? 1 : 0.5 },
            ]}
          >
            {option.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  optionContainer: {
    flex: 1,
    borderColor: COLORS.PRIMARY,
  },
  optionText: {
    fontFamily: "rubikMedium",
    fontSize: 20,
    color: COLORS.WHITE,
    textAlign: "center",
  },
});
