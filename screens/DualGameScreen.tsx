import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import BackArrow from "../components/BackArrow";
import QuestionCard from "../components/QuestionCard";
import StatusBar from "../components/StatusBar";
import Bubble from "../components/Bubble";
import ScoreDots from "../components/ScoreDots";
import Keypad from "../components/Keypad";
import ExitModal from "../components/modals/ExitModal";
import { SocketContext } from "../socketContext";

const DualGameScreen = ({ route, navigation }: any) => {
  const socket = useContext(SocketContext);
  const selfNickname = route.params.selfNickname;
  const otherNickname = route.params.otherNickname;
  const [myGuess, setMyGuess] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [status, setStatus] = useState<"guessing" | "countdown">("guessing");
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [exitModalVisible, setExitModalVisible] = useState(false);

  const [selfPlayer, setSelfPlayer] = useState({ score: 0 });
  const [otherPlayer, setOtherPlayer] = useState({ score: 0 });

  const handleQuit = () => {
    // send quit message
    socket.off("players");
    socket.off("start-round");
    socket.off("start-countdown");
    socket.off("end-countdown");
    socket.off("end-game");
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  const handleGoBack = () => {
    setExitModalVisible(true);
  };
  const handleSend = () => {
    socket.emit("send-guess", { guess: myGuess === "" ? 0 : myGuess });
  };

  const formattedNumber = (guess: string) => {
    if (guess === "") return "0";
    else return parseInt(guess).toLocaleString();
  };

  useEffect(() => {
    socket.on("players", (payload) => {
      let players = payload.players;
      // insert here
      const USERID = "hola"; // get from app
      players.forEach((player: any) => {
        if (player.userId === USERID) setSelfPlayer(player);
        else setOtherPlayer(player);
      });
      console.log(players);
    });

    socket.on("start-round", (payload) => {
      setQuestionText(payload.question);
      setTimeout(() => setAnswerText(payload.answer), 1000);
      setStatus("guessing");
      setRevealAnswer(false);
      setMyGuess("");
    });

    socket.on("start-countdown", (payload) => {
      let length = payload.length; // make it useful
      setStatus("countdown");
    });

    socket.on("end-countdown", (payload) => {
      if (payload.error !== "") return;
      setRevealAnswer(true);
    });

    socket.on("end-game", (payload) => {
      if (payload.error !== "") return;
      navigation.navigate("DualWinning", payload.winners);
    });

    return () => {
      socket.off("players");
      socket.off("start-round");
      socket.off("start-countdown");
      socket.off("end-countdown");
      socket.off("end-game");
    };
  }, []);

  return (
    <View style={styles.container}>
      <ExitModal
        visible={exitModalVisible}
        setVisible={setExitModalVisible}
        onPressQuit={handleQuit}
      />

      <BackArrow onPress={handleGoBack} />
      <QuestionCard
        answerText={answerText}
        questionText={questionText}
        revealAnswer={revealAnswer}
      />
      <StatusBar status={status} />
      <View style={styles.oppositeContainer}>
        <Bubble nickname={selfNickname} guess={formattedNumber(myGuess)} />
        <Bubble nickname={otherNickname} guess={"waiting"} invert />
      </View>
      <View style={styles.oppositeContainer}>
        <ScoreDots score={selfPlayer.score} />
        <ScoreDots score={otherPlayer.score} invert />
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
