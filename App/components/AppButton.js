import { Text, TouchableOpacity } from "react-native"

export const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-purple-800 hover:bg-purple-500 py-2 px-4 rounded opacity-80"
  >
    <Text className="text-xl text-white font-bold">{title}</Text>
  </TouchableOpacity>
)
