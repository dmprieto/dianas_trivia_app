import { useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CategoryCard } from "../components/CategoryCard"
import { getCategories } from "../services/openTriviaService"

const bgImage = "../assets/background/init.jpg"

export default ({ navigation }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const unsortedCategories = await getCategories()
      if (unsortedCategories !== undefined && unsortedCategories.length > 0) {
        setCategories(
          unsortedCategories.sort((a, b) => (a.name > b.name ? 1 : -1))
        )
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <ImageBackground className="flex-1" source={require(bgImage)}>
        <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/50">
          <Text className="text-3xl text-white m-10 text-center">{`Loading Categories ...`}</Text>
          <ActivityIndicator size="large" color="ffffff" />
        </View>
      </ImageBackground>
    )
  }
  if (categories.length === 0) {
    return (
      <ImageBackground className="flex-1" source={require(bgImage)}>
        <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/70">
          <Text className="text-3xl font-bold  text-white m-10">{`Could not retrieve the categories, please check that your internet connection is working and that opentdb.com is available`}</Text>
        </View>
      </ImageBackground>
    )
  }
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <SafeAreaView className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/40">
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return (
              <CategoryCard
                title={item.name}
                onPress={() => {
                  navigation.push("Quiz", {
                    categoryId: item.id,
                    categoryName: item.name
                  })
                }}
              />
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}
