import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import COLORS from "../../colors";

interface Props {
  content: string | "send" | "backspace";
  handlePress: (content: string | "send" | "backspace") => void;
}

const Key = ({ content, handlePress }: Props) => {
  const getContent = () => {
    if (content === "send")
      return (
        <Image
          source={require("numdu/assets/images/send.png")}
          style={{ width: 35, height: 30 }}
        />
      );
    else if (content === "backspace")
      return (
        <Image
          source={require("numdu/assets/images/backspace.png")}
          style={{ width: 35, height: 30 }}
        />
      );
    else return <Text style={styles.text}>{content}</Text>;
  };

  return (
    <Pressable style={styles.container} onPress={() => handlePress(content)}>
      {getContent()}
    </Pressable>
  );
};

export default Key;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontFamily: "rubikBold",
    fontSize: 36,
  },
});
