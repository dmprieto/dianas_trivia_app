import { FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryCard } from "../components/CategoryCard";
import categories from "../sample_data/categories.json";

const bgImage = "../assets/background/init.jpg";

export default ({ navigation }) => {
  categories.trivia_categories.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <SafeAreaView className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/40">
        <FlatList
          data={categories.trivia_categories}
          renderItem={({ item }) => {
            return (
              <CategoryCard
                title={item.name}
                onPress={() => {
                  navigation.push("Quiz", {
                    category: item.name,
                    test: "hi",
                  });
                }}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
