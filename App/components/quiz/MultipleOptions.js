import { FlatList, Pressable, Text, View } from "react-native"

export const MultipleOptions = ({ options, answer, setAnswer }) => {
  const optionStyles = "bg-sky-500 py-2 px-4 rounded ml-4 mt-4"

  return (
    <View className="shrink w-60">
      <FlatList
        data={options}
        renderItem={({ item }) => {
          let opacity = ""
          if (answer !== "" && answer === item.name) {
            opacity += "opacity-1"
          } else {
            opacity += "opacity-70"
          }
          return (
            <Pressable
              className={`${optionStyles} ${opacity}`}
              onPress={() => {
                setAnswer(item.name)
              }}
            >
              <Text className="text-xl text-white font-bold">{item.name}</Text>
            </Pressable>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
