import { useEffect, useState } from "react"
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { EndQuiz } from "../components/quiz/EndQuiz"
import { Question } from "../components/quiz/Question"
import { StartQuiz } from "../components/quiz/StartQuiz"
import { getQuestions } from "../services/openTriviaService"

const bgImage = "../assets/background/init.jpg"

export default ({ navigation, route = {} }) => {
  const [questions, setQuestions] = useState([])
  const [quizStatus, setQuizStatus] = useState(undefined)
  const [currentQuestion, setCurrentQuestion] = useState(undefined)
  const [answers, setAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const params = route.params || {}
  const { categoryId, categoryName } = params
  const numQuestions = 10

  useEffect(() => {
    async function fetchData() {
      const tempQuestions = await getQuestions(categoryId, numQuestions)
      setQuestions(tempQuestions)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <ImageBackground className="flex-1" source={require(bgImage)}>
        <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/50">
          <Text className="text-3xl text-white m-10 text-center">{`Loading Questions ...`}</Text>
          <ActivityIndicator size="large" color="ffffff" />
        </View>
      </ImageBackground>
    )
  }

  if (questions.length === 0) {
    return (
      <ImageBackground className="flex-1" source={require(bgImage)}>
        <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/70">
          <Text className="text-3xl font-bold  text-white m-10">{`Could not retrieve the questions, please check that your internet connection is working and that opentdb.com is available`}</Text>

          <TouchableOpacity onPress={() => navigation.pop()} className="mt-10">
            <MaterialCommunityIcons
              name="close-circle"
              size={70}
              color="#d4d4d8"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }

  return (
    <ImageBackground className="flex-1" source={require(bgImage)}>
      <View className="flex-1 items-center absolute inset-1 backdrop-blur bg-black/70">
        <StartQuiz
          questions={questions}
          category={categoryName}
          quizStatus={quizStatus}
          setQuizStatus={setQuizStatus}
          setCurrentQuestion={setCurrentQuestion}
        />
        <Question
          questions={questions}
          quizStatus={quizStatus}
          setQuizStatus={setQuizStatus}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
          setAnswers={setAnswers}
        />
        <EndQuiz
          questions={questions}
          category={categoryName}
          quizStatus={quizStatus}
          answers={answers}
        />
        <TouchableOpacity onPress={() => navigation.pop()} className="mt-10">
          <MaterialCommunityIcons
            name="close-circle"
            size={70}
            color="#d4d4d8"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
