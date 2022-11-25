import React from "react";
import { myProjects } from "../../data/myProjects";

import styles from "./styles.module.scss";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>
        Also you can see my projects here (click):
      </p>
      <div className={styles.listProjects}>
        {myProjects.map((item) => (
          <div className={styles.itemProject} key={item.id}>
            <a href={item.link} target="_blank" className={styles.link}>
              <h3 className={styles.nameProject}>{item.title}</h3>
              <img src={item.url} className={styles.imageProject} alt="img" />
              <div className={styles.toolsList}>
                {item.tools.map((tool) => (
                  <div className={styles.tools} key={Math.random()}>
                    {tool}
                  </div>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
