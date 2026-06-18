import { createContext, useContext, useState } from "react"
import { darkTheme, lightTheme } from "../theme/colors"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => setIsDarkMode((prev) => !prev)
  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, theme: isDarkMode ? darkTheme : lightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
