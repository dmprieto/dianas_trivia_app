import { FlatList, StatusBar, Text, View } from 'react-native';
import categories from "../sample_data/categories.json";
export default () => {
  categories.trivia_categories.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <StatusBar barStyle="dark-content" className="bg-white" />
            <FlatList
                data={categories.trivia_categories}
                renderItem={({item}) => {
                    let selected = false

                    return (
                      <Text className="text-2xl text-gray-800 font-bold">{item.name}</Text>
                    )
                }}
                keyExtractor={item =>item.id}
                ItemSeparatorComponent={()=> <View className="w-full p-0.5 bg-purple-600 lg:w-1/3"/>}
                ListFooterComponent={()=>(
                    <View className="border-t border-gray-200" />
                )}
            />
      </View>
    );
  }