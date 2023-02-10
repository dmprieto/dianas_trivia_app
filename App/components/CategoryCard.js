import { Text, TouchableOpacity } from "react-native"

export const CategoryCard = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    className="py-3 px-3 opacity-90 bg-purple-900 text-white text-lg font-semibold rounded-md mt-4"
  >
    <Text className="text-2xl text-purple-100">{title}</Text>
  </TouchableOpacity>
)
