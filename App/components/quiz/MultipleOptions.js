import { Pressable, Text, View } from "react-native"

export const MultipleOptions = ({ options, answer, setAnswer }) => {
  const optionStyles = "bg-sky-500 py-2 px-4 rounded ml-4 mt-4"

  return (
    <View className="flex-auto">
      {options.map((option) => {
        let opacity = ""
        if (answer !== "" && answer === option.name) {
          opacity += "opacity-1"
        } else {
          opacity += "opacity-70"
        }
        return (
          <Pressable
            className={`${optionStyles} ${opacity}`}
            key={option.id}
            onPress={() => {
              setAnswer(option.name)
            }}
          >
            <Text className="text-xl text-white font-bold">{option.name}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}
