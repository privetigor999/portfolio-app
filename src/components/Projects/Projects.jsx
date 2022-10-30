import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../redux/projectsSlice";
import styles from "./styles.module.scss";
import weatherImg from "./../../images/weather-app.png";
import citiesImg from "./../../images/cities-app.png";
import todoImg from "./../../images/todo-app.png";
import countryImg from "./../../images/country.png";
import rickMortyImg from "./../../images/rick-and-morty.png";
import getDogImg from "./../../images/get-dog.png";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);
  React.useEffect(() => {
    dispatch(getItems());
  }, []);

  const items = [
    {
      id: 1,
      title: "Weather-App",
      url: weatherImg,
      link: "https://privetigor999.github.io/react-weather-two/",
      tools: ["React", "Weather Api", "IconScout"],
    },
    {
      id: 2,
      title: "Rick and Morty",
      url: rickMortyImg,
      link: "https://privetigor999.github.io/rick-and-morty-app/",
      tools: ["React", "Redux ToolKit", "Rick and Morty Api"],
    },
    {
      id: 3,
      title: "Classic-Todo-App",
      url: todoImg,
      link: "https://privetigor999.github.io/todo-app/",
      tools: ["JavaScript", "React", "TypeScript"],
    },
    {
      id: 4,
      title: "Get Random Dog Picture",
      url: getDogImg,
      link: "https://privetigor999.github.io/get-random-dog-picture/",
      tools: ["React", "Redux ToolKit", "Dog Api"],
    },
    {
      id: 5,
      title: "Get-Country-Info",
      url: countryImg,
      link: "https://privetigor999.github.io/get-country-info/",
      tools: ["React", "REST Countries Api", "Material UI"],
    },
    {
      id: 6,
      title: "Cities-Game",
      url: citiesImg,
      link: "https://privetigor999.github.io/city-redux/",
      tools: ["JavaScript", "React", "Redux ToolKit"],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>
        Also you can see my projects here (click):
      </p>
      <div className={styles.listProjects}>
        {items.map((item) => (
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