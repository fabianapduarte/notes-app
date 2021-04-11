import { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
  theme: string;
  switchTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(localStorage.getItem("theme")!);

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");

      document.querySelector("body")?.classList.remove("bg-light");
      document.querySelector("body")?.classList.add("bg-dark");

      localStorage.setItem("theme", "dark");
    } 
    else {
      setTheme("light");

      document.querySelector("body")?.classList.remove("bg-dark");
      document.querySelector("body")?.classList.add("bg-light");

      localStorage.setItem("theme", "light");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme
      }}
    >
     { children }
   </ThemeContext.Provider>
  )
}