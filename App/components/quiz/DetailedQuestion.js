import { Text, View } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { decode } from "../../util/Base64UTF8Decode"
import { useTheme } from "../../context/ThemeContext"

const getAnswerDetail = (question, answer, theme) => {
  let result = ""
  if (question.correct_answer === answer.answer) {
    result = `Correct! Your answer: ${decode(answer.answer)}`
  } else {
    result = `Incorrect, your answer: '${decode(
      answer.answer
    )}' - correct answer : '${decode(question.correct_answer)}'`
  }
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
      <Text className={`text-xl font-bold ${theme.bodyText} flex-shrink w-50 pl-1`}>
        {result}
      </Text>
    </View>
  )
}

export const DetailedQuestion = ({ question, answer }) => {
  const { theme } = useTheme()
  return (
    <Animated.View
      entering={FadeIn}
      className={`mx-5 my-2 p-4 rounded-md ${theme.cardBgTransparent}`}
      key={answer.id}
    >
      <Text className={`text-lg font-semibold ${theme.bodyText} pb-1`}>{`Question ${
        answer.id + 1
      } `}</Text>
      <Text className={`text-xl font-semibold ${theme.questionText}`}>{`${decode(
        question.question
      )}?`}</Text>
      {getAnswerDetail(question, answer, theme)}
    </Animated.View>
  )
}
