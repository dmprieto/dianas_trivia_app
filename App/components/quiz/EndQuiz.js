import { Text, View } from "react-native";
export const EndQuiz = ({ quizStatus }) => {
  if (quizStatus && quizStatus === "ended") {
    return (
      <View className="items-center justify-center">
        <Text className="text-4xl text-fuchsia-200 font-bold text-center tracking-wide">{`${category} Quiz Results`}</Text>
        <Text className="text-4xl text-white text-center">{`Number of Questions: ${questions.length}`}</Text>
      </View>
    );
  }
  return null;
};
