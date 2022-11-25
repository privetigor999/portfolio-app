import bagPng from "./../images/icons/bag.png";
import codePng from "./../images/icons/code.png";
import imagesPng from "./../images/icons/images.png";

export const mySkills = [
  {
    id: 1,
    img: imagesPng,
    title: "Styles",
    skills: [
      "CSS",
      "Flexbox",
      "SASS",
      "Figma",
      "Adaptability",
      "Base BEM",
      "Base grid",
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
      "Redux ToolKit",
      "TypeScript",
      "React Router Dom",
      "Async",
    ],
  },
  {
    id: 3,
    img: bagPng,
    title: "Others",
    skills: ["npm", "JSON", "Base Git", "Base Yarn"],
  },
];
