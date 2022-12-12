import React from "react";
import { myProjects } from "../../data/myProjects";
import Project from "./Project/Project";

import styles from "./styles.module.scss";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>
        Also you can see my projects here (click):
      </p>
      <div className={styles.listProjects}>
        {myProjects.map((item) => (
          <Project item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
