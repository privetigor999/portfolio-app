import React from "react";
import { ReactComponent as GitHubLogo } from "./../../images/github.svg";
import { ReactComponent as TelegramLogo } from "./../../images/telegram.svg";
import { ReactComponent as HeadHunterLogo } from "./../../images/headhunter.svg";
import aboutPhotoPng from "./../../images/aboutPhoto.png";
import styles from "./styles.module.scss";
const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBlock}>
        <div className={styles.leftBlock}>
          <b className={styles.name}>Igor Ershov</b>
          <b className={styles.employee}>Junior Frontend Developer</b>
        </div>
        <img src={aboutPhotoPng} alt="about" className={styles.aboutPhoto} />
      </div>

      <p className={styles.aboutInfo}>
        I am 29 years old. I usually live in Moscow, but it also happens in
        other cities. Every day I study something new for myself in the field of
        development. I am currently practicing RTK and TypeScript. I would be
        glad to work with you and benefit your team!
      </p>
      <div className={styles.logosList}>
        <a href="https://github.com/privetigor999" target="_blank">
          {" "}
          <GitHubLogo className={styles.logoItem} width="60" height="60" />
        </a>
        <a
          href="https://hh.ru/resume/33c10ef2ff0b147d7f0039ed1f716a30473472"
          target="_blank"
        >
          {" "}
          <HeadHunterLogo className={styles.logoItem} width="60" height="60" />
        </a>
        <a href="https://t.me/dontrememberme" target="_blank">
          {" "}
          <TelegramLogo className={styles.logoItem} width="60" height="60" />
        </a>
      </div>
    </div>
  );
};

export default Main;
