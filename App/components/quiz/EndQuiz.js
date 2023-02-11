import { FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DetailedQuestion } from "./DetailedQuestion"

export const EndQuiz = ({ questions, category, quizStatus, answers }) => {
  if (quizStatus && quizStatus === "ended") {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-2xl text-fuchsia-200 font-bold text-center tracking-wide pt-10">{`${category} Quiz Results`}</Text>
        <Text className="text-xl text-white font-semibold text-center pb-3">{`Number of Questions: ${questions.length}`}</Text>
        <FlatList
          className="w-screen"
          data={answers}
          renderItem={({ item }) => {
            const question = questions[item.id]
            return <DetailedQuestion question={question} answer={item} />
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    )
  }
  return null
}
