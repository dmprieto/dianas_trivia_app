import { Text, TouchableOpacity, View } from "react-native"
import mergeOptions from "../../util/MergeOptions"

export const StartQuiz = ({
  questions,
  category,
  quizStatus,
  setQuizStatus,
  setCurrentQuestion
}) => {
  if (quizStatus !== undefined) {
    return null //the quiz already on, its either started/finished
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl text-fuchsia-200 font-bold text-center tracking-wide mb-5">{`${category} Quiz`}</Text>
      <Text className="text-2xl font-bold  text-white text-center mb-10">{`Number of Questions: ${questions.length}`}</Text>
      <TouchableOpacity
        onPress={() => {
          setCurrentQuestion({
            ...questions[0],
            allOptions: mergeOptions(questions[0]),
            id: 0
          })

          setQuizStatus("started")
        }}
        className="bg-purple-800 hover:bg-purple-500 py-2 px-4 rounded mt-4 opacity-90"
      >
        <Text className="text-xl text-white font-bold">Start</Text>
      </TouchableOpacity>
    </View>
  )
}
