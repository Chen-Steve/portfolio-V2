import React from "react";

import About from "@/components/About";
import Credits from "@/components/Credits";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import SideBarNav from "@/components/SideBarNav";

import "@/app/global.css";
import styles from "@/app/index.module.css";

const Home: React.FC = () => {
    return (
      <main className={styles.main}>
        <div id={styles.content}>
          <Intro />
          <About />
          <SocialLinks />
          <SideBarNav />
          <Projects />
          <Credits />
        </div>
      </main>
  );
}

export default Home;
