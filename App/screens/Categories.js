import { FlatList, ImageBackground, View } from "react-native";
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
      <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/50">
        <FlatList
          data={categories.trivia_categories}
          renderItem={({ item }) => {
            return (
              <CategoryCard
                title={item.name}
                onPress={() => {
                  navigation.navigate("Game", { screen: "Quiz" });
                }}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};
