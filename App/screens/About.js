import { useEffect, useState } from "react"
import { ImageBackground, Text, View } from "react-native"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

const bgImage = "../assets/background/init.jpg"

const createAcknowledgments = () => {
  return (
    <View className="flex-1 justify-center absolute inset-1 backdrop-blur bg-black/70 px-4">
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-white font-bold pb-5"
      >
        I want to thank:
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-fuchsia-200 font-bold pb-2 pl-3"
      >
        - Natalia Swierz (https://lottiefiles.com/nswierz)
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-fuchsia-200 font-bold pb-3 pl-3"
      >
        - Selva Kumar (https://lottiefiles.com/SelvaUX)
      </Animated.Text>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        className="text-xl text-white font-bold"
      >
        for the free versions of the animated images
      </Animated.Text>
    </View>
  )
}

const createAbout = () => {
  return (
    <View className="flex-1 justify-center absolute inset-1 backdrop-blur bg-black/70">
      <Text className="text-xl text-fuchsia-200 font-bold pt-4 px-5">
        The main purpose of the application is to create a project to showcase
        my knowledge in React/React Hooks/Axios.
      </Text>
      <Text className="text-xl text-fuchsia-200 font-bold pt-6 px-5">
        Also, it gave me the opportunity to learn on my own react
        native/nativewind(tailwind)/react navigate/reanimate/lottie.
      </Text>
      <Text className="text-xl text-fuchsia-200 font-bold pt-6 px-5">
        The project was designed based on Open Trivia API (https://opentdb.com/)
        and all the resources and libraries are open source
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
      }, 5000)
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
