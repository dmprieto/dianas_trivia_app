import LottieView from "lottie-react-native"
import { useRef } from "react"
import { ImageBackground, Text, View } from "react-native"
import { AppButton } from "../components/AppButton"

const bgImage = "../assets/background/init.jpg"

export default ({ navigation }) => {
  const animation = useRef(null)
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <View className="items-center justify-center absolute inset-5 backdrop-blur bg-black/30">
        <Text className="text-4xl text-fuchsia-200 font-bold text-center tracking-wide">
          Welcome to Diana's Trivia!!!!
        </Text>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "transparent"
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/game-start.json")}
        />
        <AppButton
          title="Let's Play"
          onPress={() => {
            navigation.push("Game")
          }}
        />
      </View>
    </ImageBackground>
  )
}
