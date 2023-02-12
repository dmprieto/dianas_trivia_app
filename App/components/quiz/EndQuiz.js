import LottieView from "lottie-react-native"
import { useRef } from "react"
import { FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DetailedQuestion } from "./DetailedQuestion"

export const EndQuiz = ({ questions, category, quizStatus, answers }) => {
  if (quizStatus && quizStatus === "ended") {
    const animation = useRef(null)
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-lg text-fuchsia-200 font-bold text-center tracking-wide pt-10">{`${category} Quiz Results`}</Text>
        <LottieView
          autoPlay
          loop={false}
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "transparent"
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../assets/game-complete.json")}
        />
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
