import { useState } from "react"
import { ImageBackground, TouchableOpacity, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { EndQuiz } from "../components/quiz/EndQuiz"
import { Question } from "../components/quiz/Question"
import { StartQuiz } from "../components/quiz/StartQuiz"
import data from "../sample_data/questions.json"

const bgImage = "../assets/background/init.jpg"

export default ({ navigation, route = {} }) => {
  const [questions, setQuestions] = useState(data.results)
  const [quizStatus, setQuizStatus] = useState(undefined)
  const [currentQuestion, setCurrentQuestion] = useState(undefined)
  const [answers, setAnswers] = useState([])

  //TODO: when getting data from API, use setQuestions
  //setQuestions(...data.results)

  const params = route.params || {}
  const { category } = params
  return (
    <ImageBackground className="flex-1" source={require(bgImage)}>
      <View className="flex-1 items-center absolute inset-1 backdrop-blur bg-black/70">
        <StartQuiz
          questions={questions}
          category={category}
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
          category={category}
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
