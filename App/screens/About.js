import { useEffect, useState } from "react"
import { ImageBackground, Text, View } from "react-native"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

const bgImage = "../assets/background/init.jpg"

const createAcknowledgments = () => {
  return (
    <View className="flex-1 justify-center absolute inset-1 backdrop-blur bg-black/80 px-4">
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-white font-bold pb-5"
      >
        Special thanks:
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-fuchsia-200 font-bold pb-2 pl-3"
      >
        ⭐ Natalia Swierz (https://lottiefiles.com/nswierz)
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-fuchsia-200 font-bold pb-3 pl-3"
      >
        ⭐ Selva Kumar (https://lottiefiles.com/SelvaUX)
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-white font-bold "
      >
        For the free versions of the animated images
      </Animated.Text>
    </View>
  )
}

const createAbout = () => {
  return (
    <View className="flex-1 justify-center absolute inset-1 backdrop-blur bg-black/80">
      <Text className="text-xl font-bold text-white px-5 max-w-prose">
        👾 This application demonstrates my knowledge in
      </Text>
      <Text className="text-xl font-bold text-fuchsia-200 px-5">
        React/React Hooks/Axios
      </Text>
      <Text className="text-xl font-bold text-white pt-5 px-4">
        📚 It gave me the opportunity to learn on my own how to use
      </Text>
      <Text className="text-xl text-fuchsia-200 font-bold px-4">
        React Native/Nativewind(Tailwind)/React Navigate/Reanimate/Lottie
      </Text>
      <Text className="text-xl font-bold text-white pt-5 px-4">
        🔎 Data is retrieved from
      </Text>
      <Text className="text-xl text-fuchsia-200 font-bold px-4">
        Open Trivia (opentdb.com)
      </Text>
      <Text className="text-xl font-bold text-white pt-5 px-4">
        💜 All the resources and libraries are Open Source
      </Text>
    </View>
  )
}

export default ({ navigation }) => {
  const [showAkg, setShowAkg] = useState(true)

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setShowAkg(true)
      setTimeout(() => {
        setShowAkg(false)
      }, 4000)
    })

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe
  }, [navigation])

  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      {showAkg ? createAcknowledgments() : createAbout()}
    </ImageBackground>
  )
}
