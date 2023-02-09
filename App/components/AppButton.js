import { Text, TouchableOpacity } from "react-native";

export const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-purple-800 hover:bg-purple-500 py-[5rem] px-4 rounded ml-4 mt-4 opacity-80"
  >
    <Text className="text-xl text-white font-bold">{title}</Text>
  </TouchableOpacity>
);
