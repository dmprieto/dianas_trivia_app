import { ImageBackground, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";

const bgImage = "../assets/background/init.jpg";

export default ({ navigation }) => {
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <View className="items-center justify-center absolute inset-5 backdrop-blur bg-black/50">
        <Text className="text-4xl text-purple-200 text-center tracking-wide">
          Welcome to Diana's Trivia!!!!
        </Text>
        <AppButton
          title="Let's Play"
          onPress={() => {
            navigation.push("Categories");
          }}
        />
      </View>
    </ImageBackground>
  );
};
