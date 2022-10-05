import React from "react";
import styles from "./styles.module.scss";
import nightPng from "./../../images/night.png";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <p> </p>
      <h5>Portfolio</h5>
      <img src={nightPng} className={styles.modePng} alt="mode" />
    </div>
  );
};

export default Header;
