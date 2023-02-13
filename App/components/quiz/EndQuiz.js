import LottieView from "lottie-react-native"
import { useEffect, useRef, useState } from "react"
import { FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DetailedQuestion } from "./DetailedQuestion"

const calculateScore = (questions, answers) => {
  let tempScore = 0
  console.log("started rfect")
  questions.forEach((question, index) => {
    const tempAnswer = answers[index].answer
    if (tempAnswer && question.correct_answer === tempAnswer) {
      tempScore++
    }
  })

  console.log("finalscore:" + tempScore)
  return tempScore
}

export const EndQuiz = ({ questions, category, quizStatus, answers }) => {
  if (quizStatus && quizStatus === "ended") {
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const animation = useRef(null)

    useEffect(() => {
      setScore(calculateScore(questions, answers))
      const timer = setTimeout(() => {
        setShowResults(true)
      }, 3000)
      return () => clearTimeout(timer)
    }, [])

    if (!showResults) {
      return (
        <SafeAreaView className="flex-1 items-center justify-center">
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
          <Text className="text-lg text-fuchsia-200 font-bold text-center tracking-wide pt-10">{`Calculating Results ...`}</Text>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-2xl text-fuchsia-200 font-semibold text-center tracking-wide pt-10">{`${category} Quiz Results`}</Text>
        <Text className="text-xl text-white font-bold text-center tracking-wide">{`Score: ${score}/10`}</Text>

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
