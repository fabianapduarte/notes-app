import { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
  theme: string;
  color: string;
  setThemePage: () => void;
  switchTheme: () => void;
  switchColor: (color: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(localStorage.getItem("theme")!);
  const [color, setColor] = useState(localStorage.getItem("color")!);

  function setThemePage() {
    document.querySelector("body")?.classList.add(`bg-${theme}`);
  }

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

  function switchColor(color: string) {
    setColor(color);
    localStorage.setItem("color", color);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        color,
        setThemePage,
        switchTheme,
        switchColor
      }}
    >
     { children }
   </ThemeContext.Provider>
  )
}