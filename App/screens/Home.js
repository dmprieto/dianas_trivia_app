import { Text, View } from 'react-native';
import { AppButton } from '../components/AppButton';

export default ({ navigation }) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-4xl font-bold text-zinc-800 text-center tracking-wide">Welcome to Diana's Trivia!!!!</Text>
          <AppButton title="Let's Play" onPress={()=>{navigation.push('Categories')}} />
        </View>
      );
}