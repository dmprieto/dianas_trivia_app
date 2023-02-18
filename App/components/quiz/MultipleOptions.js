import { FlatList, Pressable, Text, View } from "react-native"
import { decode } from "../../util/Base64UTF8Decode"

export const MultipleOptions = ({ options, answer, setAnswer }) => {
  const optionStyles = "bg-sky-500 py-2 px-4 rounded mt-4 md:px-20"

  return (
    <View className="w-3/4 items-center shrink">
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
                {decode(item.name)}
              </Text>
            </Pressable>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
