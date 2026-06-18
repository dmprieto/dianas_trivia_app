import { Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "../context/ThemeContext"

export const CategoryCard = ({ onPress, title }) => {
  const { theme } = useTheme()
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className={`py-3 px-3 opacity-90 ${theme.cardBg} text-white text-lg font-semibold rounded-md mt-4`}
      >
        <Text className={`text-2xl ${theme.bodyText}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
