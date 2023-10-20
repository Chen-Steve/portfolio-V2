import React from 'react';
import TypeWriter from 'react-typewriter';
import styles from "@/styles/Intro.module.css";

const Intro: React.FC = () => {
  return (
    <div id="intro" className={styles.intro}>
      <div className={styles["cmd-style"]}>
        <div className={styles["intro-name"]}>{`SC:-/$\u00A0`}</div>
        <span className={styles["intro-title"]}>
          {"hello, "}
          <TypeWriter typing={1}>
            <span className={styles["intro-name"]}>Steven</span>
          </TypeWriter>
          {" here"}
        </span>
      </div>
      <div className={styles["intro-subtitle"]}>
        Good things take time... finishing soon!
      </div>
      <div className={styles["intro-desc"]}>
        I&apos;m an aspiring software engineer with a passion for full-stack
        development, artificial intelligence, and machine learning. Let&apos;s
        build something amazing together!
      </div>
    </div>
  );
}

export default Intro;
