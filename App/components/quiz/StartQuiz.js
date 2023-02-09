import { Text, TouchableOpacity, View } from "react-native";
import mergeOptions from "../../util/MergeOptions";

export const StartQuiz = ({
  questions,
  category,
  quizStatus,
  setQuizStatus,
  setCurrentQuestion,
}) => {
  if (quizStatus !== undefined) {
    return null; //the quiz already started, its either started/finished
  }
  return (
    <View className="items-center justify-center">
      <Text className="text-4xl text-fuchsia-200 font-bold text-center tracking-wide">{`${category} Quiz`}</Text>
      <Text className="text-4xl text-white text-center">{`Number of Questions: ${questions.length}`}</Text>
      <TouchableOpacity
        onPress={() => {
          setCurrentQuestion({
            ...questions[0],
            allOptions: mergeOptions(questions[0]),
            id: 0,
          });

          setQuizStatus("started");
        }}
        className="bg-purple-800 hover:bg-purple-500 py-2 px-4 rounded ml-4 mt-4 opacity-80"
      >
        <Text className="text-xl text-white font-bold">Start</Text>
      </TouchableOpacity>
    </View>
  );
};
