import React, { useLayoutEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("app-theme") || "dark"
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);
  return { theme, setTheme };
};
