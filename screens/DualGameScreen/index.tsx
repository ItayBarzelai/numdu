import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BackArrow from "../../components/BackArrow";
import QuestionCard from "../../components/QuestionCard";
import StatusBar from "../../components/StatusBar";
import Bubble from "../../components/Bubble";
import ScoreDots from "../../components/ScoreDots";
import Keypad from "../../components/Keypad";
import ExitModal from "../../components/modals/ExitModal";

const DualGameScreen = () => {
  const selfNickname = "cheese23";
  const otherNickname = "burger32";
  const [myGuess, setMyGuess] = useState("");
  const questionText = "How many seconds are there in an hour?";
  const answerText = "3600";
  const [status, setStatus] = useState<"guessing" | "countdown">("guessing");
  const [exitModalVisible, setExitModalVisible] = useState(true);

  const handleQuit = () => {};
  const handleGoBack = () => {
    setExitModalVisible(true);
  };
  const handleSend = () => {};

  const formattedNumber = (guess: string) => {
    if (guess === "") return "0";
    else return parseInt(guess).toLocaleString();
  };

  return (
    <View style={styles.container}>
      <ExitModal
        visible={exitModalVisible}
        setVisible={setExitModalVisible}
        onPressQuit={handleQuit}
      />

      <BackArrow onPress={handleGoBack} />
      <QuestionCard answerText={answerText} questionText={questionText} />
      <StatusBar status={status} />
      <View style={styles.oppositeContainer}>
        <Bubble nickname="cheese23" guess={formattedNumber(myGuess)} />
        <Bubble nickname="burger32" guess={"waiting"} invert />
      </View>
      <View style={styles.oppositeContainer}>
        <ScoreDots score={0} />
        <ScoreDots score={3} invert />
      </View>
      <Keypad value={myGuess} setValue={setMyGuess} onPressSend={handleSend} />
    </View>
  );
};

export default DualGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    paddingTop: 100,
    paddingHorizontal: 30,
    gap: 20,
  },
  oppositeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
