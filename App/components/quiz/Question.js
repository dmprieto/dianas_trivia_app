import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MultipleOptions } from "./MultipleOptions";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Question = ({
  currentQuestion,
  setCurrentQuestion,
  quizStatus,
  questions,
  setQuestions,
}) => {
  const [answer, setAnswer] = useState("");
  if (quizStatus && quizStatus === "started") {
    const showPrevious = currentQuestion && currentQuestion !== 0;
    const showNext =
      currentQuestion &&
      currentQuestion !== questions.length - 1 &&
      answer !== "";
    const showFinish =
      currentQuestion && currentQuestion === questions.length - 1;

    return (
      <View className="items-center justify-center">
        <Text className="text-xl text-white font-bold text-center tracking-wide">{`${currentQuestion.category} Quiz`}</Text>
        <Text className="text-3xl text-fuchsia-200 text-center tracking-wide">{`Question ${
          currentQuestion.id + 1
        } Of ${questions.length}`}</Text>
        <Text className="text-2xl text-fuchsia-200 font-bold text-center tracking-wide">{`${currentQuestion.question}?`}</Text>
        <View className="flex flex-row">
          <TouchableOpacity
            onPress={() => console.log("menu-left")}
            style={{ paddingHorizontal: 10 }}
          >
            <MaterialCommunityIcons className="" name="menu-left" size={70} />
          </TouchableOpacity>

          <MultipleOptions
            options={currentQuestion.allOptions}
            answer={answer}
            setAnswer={setAnswer}
          />
          <TouchableOpacity
            onPress={() => console.log("menu-right")}
            style={{ paddingHorizontal: 10 }}
          >
            <MaterialCommunityIcons
              className="text-white"
              name="menu-right"
              size={70}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return null;
};
