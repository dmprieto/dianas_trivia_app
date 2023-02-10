import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
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

const setFinalStep = (setQuizStatus) => {
  setQuizStatus("ended")
}

const getLeftArrowComponent = (
  currentQuestion,
  setCurrentQuestion,
  questions,
  answers,
  setAnswer
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("answers:" + JSON.stringify(answers))
        setAnswer(answers[currentQuestion.id - 1].answer)
        setNextStep(currentQuestion, setCurrentQuestion, questions, false)
      }}
      className="flex-none"
      disabled={currentQuestion.id === 0}
    >
      <MaterialCommunityIcons
        size={90}
        color={currentQuestion.id === 0 ? "transparent" : "#d4d4d8"}
        name="menu-left"
      />
    </TouchableOpacity>
  )
}

const getRightArrowComponent = (
  currentQuestion,
  setCurrentQuestion,
  questions,
  answer,
  setAnswer,
  answers,
  setAnswers,
  setQuizStatus
) => {
  const color =
    currentQuestion.id === questions.length - 1 ? "#06b6d4" : "#d4d4d8"
  // if it reached the last question, end quiz
  return (
    <TouchableOpacity
      onPress={() => {
        const nextAnswer = answers.find((answer) => {
          return answer.id === currentQuestion.id + 1
        })
        if (nextAnswer !== undefined) {
          setAnswer(nextAnswer.answer)
        } else {
          setAnswer("")
        }

        const currentAnswer = answers.find((answer) => {
          return answer.id === currentQuestion.id
        })

        if (currentAnswer !== undefined) {
          console.log("ASDFASDF:" + JSON.stringify(currentAnswer))
          currentAnswer.answer = answer
          setAnswers([...answers])
        } else {
          setAnswers([...answers, { id: currentQuestion.id, answer: answer }])
        }

        if (currentQuestion.id === questions.length - 1) {
          setFinalStep(setQuizStatus)
        } else {
          setNextStep(currentQuestion, setCurrentQuestion, questions, true)
        }
      }}
      className="flex-none"
      disabled={answer === ""}
    >
      <MaterialCommunityIcons
        size={90}
        color={answer === "" ? "#6b7280" : color}
        name="menu-right"
      />
    </TouchableOpacity>
  )
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
  if (quizStatus && quizStatus === "started") {
    return (
      <View className="flex-none p-10">
        <Text className="text-xl text-fuchsia-200 font-bold text-center">{`${currentQuestion.category} Quiz`}</Text>
        <Text className="text-2xl text-sky-300 text-center">{`Question ${
          currentQuestion.id + 1
        } Of ${questions.length}`}</Text>
        <Text className="text-xl text-slate-50 font-bold text-center">{`${currentQuestion.question}?`}</Text>
        <View className="flex flex-row">
          {getLeftArrowComponent(
            currentQuestion,
            setCurrentQuestion,
            questions,
            answers,
            setAnswer
          )}

          <MultipleOptions
            options={currentQuestion.allOptions}
            answer={answer}
            setAnswer={setAnswer}
          />
          {getRightArrowComponent(
            currentQuestion,
            setCurrentQuestion,
            questions,
            answer,
            setAnswer,
            answers,
            setAnswers,
            setQuizStatus
          )}
        </View>
      </View>
    )
  }
  return null
}
