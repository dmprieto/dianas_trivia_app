import { useEffect } from "react"
import { Switch, Text, View } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AboutScreen from "./screens/About"
import CategoriesScreen from "./screens/Categories"
import HomeScreen from "./screens/Home"
import QuizScreen from "./screens/Quiz"
import SettingsScreen from "./screens/Settings"
import { ThemeProvider, useTheme } from "./context/ThemeContext"

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginRight: 12 }}>
      <Text style={{ color: "#ffffff", marginRight: 6, fontSize: 16 }}>
        {isDarkMode ? "🌙" : "☀️"}
      </Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} thumbColor="#ffffff" />
    </View>
  )
}

function GameTabs() {
  const { theme } = useTheme()
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      goBack="none"
      activeColor={theme.tabBarActive}
      inactiveColor={theme.tabBarInactive}
      barStyle={{ backgroundColor: theme.tabBarBg, paddingBottom: 5 }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          )
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
          )
        }}
      />
    </Tab.Navigator>
  )
}

function GameScreen({ navigation }) {
  const { isDarkMode, theme } = useTheme()

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: theme.headerBg },
      headerTintColor: "#ffffff",
      headerTitle: "Diana's Trivia",
      headerRight: () => <ThemeToggle />,
    })
  }, [isDarkMode])

  return <GameTabs />
}

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{
              headerShown: true
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
