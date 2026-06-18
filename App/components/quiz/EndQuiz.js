import LottieView from "lottie-react-native"
import { useEffect, useRef, useState } from "react"
import { FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DetailedQuestion } from "./DetailedQuestion"
import { useTheme } from "../../context/ThemeContext"

const calculateScore = (questions, answers) => {
  let tempScore = 0
  questions.forEach((question, index) => {
    const tempAnswer = answers[index].answer
    if (tempAnswer && question.correct_answer === tempAnswer) {
      tempScore++
    }
  })

  return tempScore
}

export const EndQuiz = ({ questions, category, quizStatus, answers }) => {
  const { theme } = useTheme()
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const animation = useRef(null)

  useEffect(() => {
    if (quizStatus !== "ended") return
    setScore(calculateScore(questions, answers))
    const timer = setTimeout(() => {
      setShowResults(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [quizStatus])

  if (quizStatus !== "ended") return null

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
          source={require("../../assets/game-complete.json")}
        />
        <Text className={`text-lg ${theme.titleText} font-bold text-center tracking-wide pt-10`}>{`Calculating Results ...`}</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className={`text-2xl ${theme.titleText} font-semibold text-center pt-10`}>{`${category} Quiz Results`}</Text>
      <Text className={`text-3xl ${theme.bodyText} font-bold text-center pb-5`}>{`Score: ${score}/10`}</Text>

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
