import React from "react";
import styles from "./styles.module.scss";
import nightPng from "./../../images/night.png";
import dayPng from "./../../images/day.png";
import { useTheme } from "../../hooks/useTheme";
const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={styles.wrapper}>
      <p> </p>
      <h5>Portfolio</h5>
      <img
        src={theme === "light" ? nightPng : dayPng}
        className={styles.modePng}
        alt="mode"
        onClick={handleChangeTheme}
      />
    </div>
  );
};

export default Header;
