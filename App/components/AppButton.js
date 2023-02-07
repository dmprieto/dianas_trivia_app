import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
})
export const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} className="bg-indigo-500 hover:bg-indigo-800 py-[5rem] px-4 rounded ml-4 mt-4">
    <Text className="text-lg text-white font-bold">{title}</Text>
  </TouchableOpacity>
);