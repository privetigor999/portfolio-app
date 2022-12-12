import React from "react";
import { useInView } from "react-intersection-observer";
import { BeatLoader } from "react-spinners";
import styles from "./styles.module.scss";

const Project = ({ item }) => {
  const { link, url, title, id, tools } = item;
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div className={styles.itemProject} ref={ref}>
      <a href={link} target="_blank" className={styles.link}>
        <h3 className={styles.nameProject}>{title}</h3>
        {inView ? (
          <img src={url} className={styles.imageProject} alt="img" />
        ) : (
          <div className={styles.sceleton}>
            <BeatLoader color="#192626" />
          </div>
        )}

        <div className={styles.toolsList}>
          {tools.map((tool) => (
            <div className={styles.tools} key={Math.random()}>
              {tool}
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Project;
