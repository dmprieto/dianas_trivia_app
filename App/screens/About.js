import { useEffect, useState } from "react"
import { ImageBackground, Text, View } from "react-native"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import { useTheme } from "../context/ThemeContext"

const bgImage = "../assets/background/init.jpg"

const createAcknowledgments = (theme) => {
  return (
    <View className={`flex-1 justify-center ${theme.overlay} px-4 md:px-1 md:items-center`}>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className={`text-xl ${theme.bodyText} font-bold pb-5`}
      >
        Special thanks:
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className={`text-xl ${theme.titleText} font-bold pb-2 pl-3`}
      >
        ⭐ Natalia Swierz (https://lottiefiles.com/nswierz)
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className={`text-xl ${theme.titleText} font-bold pb-3 pl-3`}
      >
        ⭐ Selva Kumar (https://lottiefiles.com/SelvaUX)
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className={`text-xl ${theme.bodyText} font-bold`}
      >
        For the free versions of the animated images
      </Animated.Text>
    </View>
  )
}

const createAbout = (theme) => {
  return (
    <View className={`flex-1 justify-center ${theme.overlay}`}>
      <View className="p-4 md:p-5 md:items-center">
        <Text className={`text-xl font-bold ${theme.bodyText} px-5 max-w-prose`}>
          👾 This application demonstrates my knowledge in
        </Text>
        <Text className={`text-xl font-bold ${theme.titleText} px-5`}>
          React/React Hooks/Axios
        </Text>
        <Text className={`text-xl font-bold ${theme.bodyText} pt-5 px-4`}>
          📚 It gave me the opportunity to learn on my own how to use
        </Text>
        <Text className={`text-xl ${theme.titleText} font-bold px-4`}>
          React Native/Nativewind(Tailwind)/React Navigate/Reanimate/Lottie
        </Text>
        <Text className={`text-xl font-bold ${theme.bodyText} pt-5 px-4`}>
          🔎 Data is retrieved from
        </Text>
        <Text className={`text-xl ${theme.titleText} font-bold px-4`}>
          Open Trivia (opentdb.com)
        </Text>
        <Text className={`text-xl font-bold ${theme.bodyText} pt-5 px-4`}>
          💜 All the resources and libraries are Open Source
        </Text>
      </View>
    </View>
  )
}

export default ({ navigation }) => {
  const [showAkg, setShowAkg] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setShowAkg(true)
      setTimeout(() => {
        setShowAkg(false)
      }, 4000)
    })

    return unsubscribe
  }, [navigation])

  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      {showAkg ? createAcknowledgments(theme) : createAbout(theme)}
    </ImageBackground>
  )
}
