import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import COLORS from "../colors";

interface Props {
  questionText: string;
  answerText: string;
  revealAnswer: boolean;
}

const QuestionCard = ({ questionText, answerText, revealAnswer }: Props) => {
  const bottomVal = useRef(new Animated.Value(85)).current;

  const bottomAnimationReveal = Animated.timing(bottomVal, {
    toValue: 10,
    duration: 300,
    useNativeDriver: false,
  });

  const bottomAnimationHide = Animated.timing(bottomVal, {
    toValue: 85,
    duration: 300,
    useNativeDriver: false,
  });

  const formattedNumber = (guess: string) => {
    if (guess === "") return "0";
    else return parseInt(guess).toLocaleString();
  };

  useEffect(() => {
    if (revealAnswer) bottomAnimationReveal.start();
    else bottomAnimationHide.start();
  }, [revealAnswer]);

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questionText}</Text>
      </View>
      <Animated.View style={[styles.answerContainer, { bottom: bottomVal }]}>
        <Text style={styles.answerText}>{formattedNumber(answerText)}</Text>
      </Animated.View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {},
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
    zIndex: 0,
  },
  answerText: {
    fontFamily: "rubikMedium",
    fontSize: 30,
    textAlign: "center",
    top: 5,
  },
});
