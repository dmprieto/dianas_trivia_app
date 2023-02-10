import { Text, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const getAnswerDetail = (question, answer) => {
  let result = ""
  if (question.correct_answer === answer.answer) {
    result = `Correct! Answer: ${answer.answer}`
  } else {
    result = `Incorrect, you selected: ${answer.answer} but the correct answer is:${question.correct_answer}`
  }
  //Correct, and show answer
  return (
    <View>
      <MaterialCommunityIcons
        className="flex-none"
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
      <Text className="text-xl font-bold text-white">{result}</Text>
    </View>
  )
}

export const DetailedQuestion = ({ question, answer }) => {
  return (
    <View
      className="m-3 p-3 rounded-md opacity-90 bg-purple-900"
      key={answer.id}
    >
      <Text className="text-lg font-semibold text-white">{`Question ${
        answer.id + 1
      } `}</Text>
      <Text className="text-xl font-bold text-sky-300 tracking-wide ">{`${question.question}?`}</Text>
      {getAnswerDetail(question, answer)}
    </View>
  )
}
