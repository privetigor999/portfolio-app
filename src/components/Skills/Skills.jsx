import React from "react";
import { mySkills } from "../../data/skills";

import styles from "./styles.module.scss";

const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <p>I use and have some practice tools:</p>
      <div className={styles.listSkills}>
        {mySkills.map((item) => (
          <div className={styles.itemSkills} key={item.id}>
            <img src={item.img} alt="picture" className={styles.picturePng} />
            <h3>{item.title}</h3>
            <ul className={styles.ul}>
              {item.skills.map((skill) => (
                <li key={Math.random()}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
