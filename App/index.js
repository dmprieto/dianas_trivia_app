import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AboutScreen from "./screens/About";
import CategoriesScreen from "./screens/Categories";
import HomeScreen from "./screens/Home";
import QuizScreen from "./screens/Quiz";
import SettingsScreen from "./screens/Settings";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
//const QuizModal = createStackNavigator();

function GameTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      goBack="none"
      activeColor="#5001B6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#a21caf", paddingBottom: 5 }}
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
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
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
          name="Quiz"
          component={QuizScreen}
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
