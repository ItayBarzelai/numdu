import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../colors";

const QuestionCard = () => {
  const questionText = "How many seconds are there in an hour?";
  const answerText = 3600;
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questionText}</Text>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>{answerText.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
  },
  questionContainer: {
    backgroundColor: COLORS.WHITE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 140,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  questionText: {
    fontFamily: "rubikMedium",
    fontSize: 24,
    textAlign: "center",
  },
  answerContainer: {
    backgroundColor: COLORS.GRAY,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 85,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    bottom: 10,
    zIndex: 0,
  },
  answerText: {
    fontFamily: "rubikMedium",
    fontSize: 30,
    textAlign: "center",
    top: 5,
  },
});
