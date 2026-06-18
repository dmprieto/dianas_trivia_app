import { ImageBackground, Text, View } from "react-native"
import { useTheme } from "../context/ThemeContext"

const bgImage = "../assets/background/init.jpg"

export default () => {
  const { theme } = useTheme()
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <View className={`flex-1 items-center justify-center ${theme.overlay}`}>
        <Text className={`text-4xl ${theme.titleText} font-bold text-center tracking-wide`}>
          SETTINGS
        </Text>
      </View>
    </ImageBackground>
  )
}
