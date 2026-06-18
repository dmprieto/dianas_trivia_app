import LottieView from "lottie-react-native"
import { useRef } from "react"
import { ImageBackground, View } from "react-native"
import { AppButton } from "../components/AppButton"
import WelcomeTrivia from "../components/WelcomeTrivia"
import { useTheme } from "../context/ThemeContext"

const bgImage = "../assets/background/init.jpg"

export default ({ navigation }) => {
  const animation = useRef(null)
  const { theme } = useTheme()
  return (
    <ImageBackground className="flex-1" source={require(bgImage)}>
      <View className={`flex-1 items-center justify-center ${theme.overlayHome}`}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "transparent"
          }}
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
