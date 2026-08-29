import React, { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Theme = "dark" | "light";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const theme: Theme = pathParts[0] === "light" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("cremp-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    const newParts = [...pathParts];
    if (newParts.length > 0 && (newParts[0] === "light" || newParts[0] === "dark")) {
      newParts[0] = newTheme;
    } else {
      newParts.unshift(newTheme);
    }
    navigate(`/${newParts.join("/")}`);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
