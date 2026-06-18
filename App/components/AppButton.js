import { Text, TouchableOpacity } from "react-native"
import { useTheme } from "../context/ThemeContext"

export const AppButton = ({ onPress, title }) => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${theme.primaryButton} hover:bg-purple-500 py-2 px-4 rounded opacity-80`}
    >
      <Text className="text-xl text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}
