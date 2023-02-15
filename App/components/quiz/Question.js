import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { decode } from "../../util/Base64UTF8Decode"
import mergeOptions from "../../util/MergeOptions"
import { MultipleOptions } from "./MultipleOptions"

const setNextStep = (
  currentQuestion,
  setCurrentQuestion,
  questions,
  moveForward
) => {
  const newId = moveForward ? currentQuestion.id + 1 : currentQuestion.id - 1
  setCurrentQuestion({
    ...questions[newId],
    allOptions: mergeOptions(questions[newId]),
    id: newId
  })
}

export const Question = ({
  currentQuestion,
  setCurrentQuestion,
  quizStatus,
  setQuizStatus,
  questions,
  answers,
  setAnswers
}) => {
  const [answer, setAnswer] = useState("")
  function evalNextAnswer() {
    const nextAnswer = answers.find((answer) => {
      return answer.id === currentQuestion.id + 1
    })
    nextAnswer !== undefined ? setAnswer(nextAnswer.answer) : setAnswer("")
  }
  function evalCurrentAnswer() {
    const currentAnswer = answers.find((answer) => {
      return answer.id === currentQuestion.id
    })

    if (currentAnswer !== undefined) {
      currentAnswer.answer = answer
      setAnswers([...answers])
    } else {
      setAnswers([...answers, { id: currentQuestion.id, answer: answer }])
    }
  }
  if (quizStatus && quizStatus === "started") {
    const color =
      currentQuestion.id === questions.length - 1 ? "#06b6d4" : "#ffffff"
    return (
      <SafeAreaView className="flex-1 pt-5">
        <View className="px-2">
          <Text className="text-2xl text-fuchsia-200 font-bold text-center px-10 max-w-prose">{`${
            currentQuestion.question !== undefined &&
            currentQuestion.data !== ""
              ? decode(currentQuestion.category)
              : ""
          } Quiz`}</Text>
          <Text className="text-2xl text-sky-300 text-center">{`Question ${
            currentQuestion.id + 1
          } Of ${questions.length}`}</Text>
          <Text className="text-xl text-slate-50 font-bold text-center px-6 pt-5">{`${
            currentQuestion.question !== undefined &&
            currentQuestion.data !== ""
              ? decode(currentQuestion.question)
              : ""
          }?`}</Text>
        </View>
        <View className="flex-1 flex-row">
          <TouchableOpacity
            onPress={() => {
              setAnswer(answers[currentQuestion.id - 1].answer)
              setNextStep(currentQuestion, setCurrentQuestion, questions, false)
            }}
            disabled={currentQuestion.id === 0}
          >
            <MaterialCommunityIcons
              size={90}
              color={currentQuestion.id === 0 ? "transparent" : "#ffffff"}
              name="menu-left"
            />
          </TouchableOpacity>

          <MultipleOptions
            options={currentQuestion.allOptions}
            answer={answer}
            setAnswer={setAnswer}
          />
          <TouchableOpacity
            onPress={() => {
              evalNextAnswer()
              evalCurrentAnswer()

              if (currentQuestion.id === questions.length - 1) {
                setQuizStatus("ended")
              } else {
                setNextStep(
                  currentQuestion,
                  setCurrentQuestion,
                  questions,
                  true
                )
              }
            }}
            disabled={answer === ""}
          >
            <MaterialCommunityIcons
              size={90}
              color={answer === "" ? "#6b7280" : color}
              name="menu-right"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
  return null
}
