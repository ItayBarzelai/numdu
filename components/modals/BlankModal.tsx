import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { Children } from "react";
import { Modal } from "react-native";
import COLORS from "../../colors";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
}

const BlankModal = ({ visible, setVisible, children }: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Pressable
            style={styles.xContainer}
            onPress={() => setVisible(false)}
          >
            <Image
              style={styles.x}
              source={require("numdu/assets/images/x.png")}
            />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BlankModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.TINT,
    padding: 20,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 15,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: "rubikMedium",
    textAlign: "center",
    fontSize: 24,
    color: COLORS.WHITE,
  },
  xContainer: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  x: {
    height: 20,
    width: 20,
  },
});
