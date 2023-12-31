import React from "react";
import { Typewriter } from 'react-simple-typewriter'

import styles from "@/styles/Intro.module.css";

const Intro: React.FC = () => {
  return (
    <header id="intro" className={styles.intro}>
      <div className={styles["cmd-style"]}>
        <div className={styles["intro-name"]}>SC:-/$ </div>
          <span className={styles["intro-title"]}>
            <Typewriter 
            words={['hello, Steven here']} 
            cursor={true}
            />
          </span>
        </div>
        <div className={styles["intro-subtitle"]}>
          <Typewriter 
        words={['Check out my Newsletter!']}
        />
      </div>
      <div className={styles["intro-link"]}>
        <a href="https://thedigitalpulse.substack.com/" target="_blank" rel="noopener noreferrer">The Digital Pulse</a>    
      </div>
      <div className={styles["intro-desc"]}>
        I&apos;m an aspiring software engineer with a passion for full-stack
        development, artificial intelligence, and machine learning. Let&apos;s
        build something amazing together!
      </div>
    </header>
  );
};

export default Intro;