import { FlatList, ImageBackground, StatusBar, View } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import categories from "../sample_data/categories.json";

const bgImage = "../assets/background/init.jpg";

export default () => {
  categories.trivia_categories.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require(bgImage)}
    >
      <View className="flex-1 items-center justify-center absolute inset-1 backdrop-blur bg-black/50">
        <StatusBar barStyle="dark-content" className="bg-white" />
        <FlatList
          data={categories.trivia_categories}
          renderItem={({ item }) => {
            let selected = false;

            return <CategoryCard title={item.name} />;
          }}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => (
            <View className="border-t border-gray-200" />
          )}
        />
      </View>
    </ImageBackground>
  );
};
