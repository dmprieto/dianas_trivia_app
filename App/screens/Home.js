import LottieView from "lottie-react-native"
import { useRef } from "react"
import { ImageBackground, View } from "react-native"
import { AppButton } from "../components/AppButton"
import WelcomeTrivia from "../components/WelcomeTrivia"

const bgImage = "../assets/background/init.jpg"

export default ({ navigation }) => {
  const animation = useRef(null)
  return (
    <ImageBackground className="flex-1" source={require(bgImage)}>
      <View className="items-center justify-center absolute inset-5 backdrop-blur bg-black/30">
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "transparent"
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/game-start.json")}
        />
        <WelcomeTrivia />

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
