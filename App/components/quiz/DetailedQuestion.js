import { Text, View } from "react-native"
import Animated, { ZoomIn } from "react-native-reanimated"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import base64 from "react-native-base64"

const getAnswerDetail = (question, answer) => {
  let result = ""
  if (question.correct_answer === answer.answer) {
    result = `Correct! Your answer: ${base64.decode(answer.answer)}`
  } else {
    result = `Incorrect, your answer: '${base64.decode(
      answer.answer
    )}' - correct answer : '${base64.decode(question.correct_answer)}'`
  }
  //Correct, and show answer
  return (
    <View className="flex flex-row pt-2">
      <MaterialCommunityIcons
        size={30}
        color={
          question.correct_answer === answer.answer ? "#22c55e" : "#e11d48"
        }
        name={
          question.correct_answer === answer.answer
            ? "check-circle"
            : "close-thick"
        }
      />
      <Text className="text-xl font-bold text-white flex-shrink w-50 pl-1">
        {result}
      </Text>
    </View>
  )
}

export const DetailedQuestion = ({ question, answer }) => {
  return (
    <Animated.View
      entering={ZoomIn}
      className="mx-5 my-2 p-4 rounded-md opacity-90 bg-purple-900"
      key={answer.id}
    >
      <Text className="text-lg font-semibold text-white pb-1">{`Question ${
        answer.id + 1
      } `}</Text>
      <Text className="text-xl font-semibold text-sky-300">{`${base64.decode(
        question.question
      )}?`}</Text>
      {getAnswerDetail(question, answer)}
    </Animated.View>
  )
}
