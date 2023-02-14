import { FlatList, Pressable, Text, View } from "react-native"
import base64 from "react-native-base64"

export const MultipleOptions = ({ options, answer, setAnswer }) => {
  const optionStyles = "bg-sky-500 py-2 px-4 rounded mt-4"

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
              <Text className="text-xl text-white font-bold">
                {base64.decode(item.name)}
              </Text>
            </Pressable>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
