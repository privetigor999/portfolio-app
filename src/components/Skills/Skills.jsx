import React from "react";
import styles from "./styles.module.scss";
import bagPng from "./../../images/bag.png";
import codePng from "./../../images/code.png";
import imagesPng from "./../../images/images.png";
const Skills = () => {
  const items = [
    {
      id: 1,
      img: imagesPng,
      title: "Styles",
      skills: [
        "CSS",
        "Flexbox",
        "Styled components",
        "SASS",
        "Figma",
        "Adaptability",
        "Base BEM",
      ],
    },
    {
      id: 2,
      img: codePng,
      title: "Code",
      skills: [
        "HTML",
        "JavaScript",
        "React",
        "React Router Dom",
        "Redux ToolKit",
        "Async",
        "Base TypeScript",
      ],
    },
    {
      id: 3,
      img: bagPng,
      title: "Others",
      skills: ["npm", "JSON", "Base Git", "Base Yarn"],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <p>I use and have some practice tools:</p>
      <div className={styles.listSkills}>
        {items.map((item) => (
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
