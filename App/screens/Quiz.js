import { useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { EndQuiz } from "../components/quiz/EndQuiz";
import { Question } from "../components/quiz/Question";
import { StartQuiz } from "../components/quiz/StartQuiz";
import data from "../sample_data/questions.json";

const bgImage = "../assets/background/init.jpg";

export default ({ navigation, route = {} }) => {
  const [questions, setQuestions] = useState(data.results);
  const [quizStatus, setQuizStatus] = useState(undefined);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);

  const params = route.params || {};
  const { category } = params;
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/50">
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{ paddingHorizontal: 10 }}
        >
          <MaterialCommunityIcons name="close" size={30} color="#FBBCE9" />
        </TouchableOpacity>
        <StartQuiz
          questions={questions}
          category={category}
          quizStatus={quizStatus}
          setQuizStatus={setQuizStatus}
          setCurrentQuestion={setCurrentQuestion}
        />
        <Question
          questions={questions}
          setQuestions={setQuestions}
          quizStatus={quizStatus}
          setQuizStatus={setQuizStatus}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
        <EndQuiz
          questions={questions}
          category={category}
          quizStatus={quizStatus}
        />
      </View>
    </ImageBackground>
  );
};
