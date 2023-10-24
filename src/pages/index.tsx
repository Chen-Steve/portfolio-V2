import React from "react";
import { useEffect } from "react";

import About from "@/components/About";
import Credits from "@/components/Credits";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import SideBarNav from "@/components/SideBarNav";

import "@/app/global.css";
import styles from "@/app/index.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
    useEffect(() => {
    AOS.init();
    }, []);

    return (
      <main className={styles.main}>
        <div id={styles.content}>
          <div data-aos="fade-in" data-aos-duration="2000">
            <Intro />
          </div>
          <div data-aos="fade-in" data-aos-duration="2000">
            <About />
          </div>
            <SocialLinks />
            <SideBarNav />
          <div data-aos="fade-in" data-aos-duration="2000">
            <Projects />
          </div>
          <div data-aos="fade-in" data-aos-duration="2000">
            <Credits />
          </div>
        </div>
      </main>
  );
}

export default Home;
