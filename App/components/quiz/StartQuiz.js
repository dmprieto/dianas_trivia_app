import { Text, TouchableOpacity, View } from "react-native"
import Animated, { BounceIn } from "react-native-reanimated"
import mergeOptions from "../../util/MergeOptions"
import { useTheme } from "../../context/ThemeContext"

export const StartQuiz = ({
  questions,
  category,
  quizStatus,
  setQuizStatus,
  setCurrentQuestion
}) => {
  const { theme } = useTheme()

  if (quizStatus !== undefined) {
    return null //the quiz already on, its either started/finished
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Animated.Text
        entering={BounceIn}
        className={`text-4xl ${theme.titleText} font-bold text-center tracking-wide mb-5`}
      >{`${category} Quiz`}</Animated.Text>
      <Text className={`text-2xl font-bold ${theme.bodyText} text-center mb-10`}>{`Number of Questions: ${questions.length}`}</Text>
      <TouchableOpacity
        onPress={() => {
          setCurrentQuestion({
            ...questions[0],
            allOptions: mergeOptions(questions[0]),
            id: 0
          })

          setQuizStatus("started")
        }}
        className={`${theme.primaryButton} hover:bg-purple-500 py-2 px-4 rounded mt-3 opacity-90`}
      >
        <Text className="text-xl text-white font-bold">Start</Text>
      </TouchableOpacity>
    </View>
  )
}
