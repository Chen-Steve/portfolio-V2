import React from "react";
import About from "@/components/About";
import Credits from "@/components/Credits";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";

import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div id={styles.content}>
        <Intro />
        <About />
        <SocialLinks/>
        <Projects />
        <Credits />
      </div>
    
    </main>
  );
};

export default Home;