import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Correct name: ThemeProvider (capitalized)
export const ThemeProvider = ThemeContext.Provider;

// Custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
