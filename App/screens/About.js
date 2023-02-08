import { ImageBackground, Text, View } from "react-native";

const bgImage = "../assets/background/init.jpg";

export default () => {
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/30">
        <Text className="text-4xl text-fuchsia-200 font-bold text-center tracking-wide">
          ABOUT
        </Text>
      </View>
    </ImageBackground>
  );
};
