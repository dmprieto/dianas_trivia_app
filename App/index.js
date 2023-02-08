import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AboutScreen from "./screens/About";
import CategoriesScreen from "./screens/Categories";
import HomeScreen from "./screens/Home";
import QuizScreen from "./screens/Quiz";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function GameTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      activeColor="#5001B6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#B204B7", paddingBottom: 5 }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Game"
          options={{
            headerShown: false,
          }}
          component={GameTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
