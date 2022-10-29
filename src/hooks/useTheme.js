import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setDark] = useState(localStorage.getItem("mode") || "light");

  const setTheme = (mode) => {
    setDark(mode);
    localStorage.setItem("mode", mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
