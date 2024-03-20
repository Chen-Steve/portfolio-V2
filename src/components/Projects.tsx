import React from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import "@/styles/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const Projects = () => {
  const projects = [
    { title: 'CPU Monitor Electron DeskApp', description: 'A cross-platform desktop application built with Electron.js.', imageUrl: '/images/cpuMonitor.png', url: 'https://drive.google.com/drive/folders/1CdnR0ll3LlbUhr-AncfTZts2DauDL7S6?usp=sharing'},
    { title: 'Servicemen to Scholars', description: 'A non-profit MENN stack website + gpt-4 for tailoring personal scholarships & grants', imageUrl: '/images/s2s.png', url: 'https://servicemen-to-scholars.vercel.app/'},
    { title: 'Secure Surf', description: 'Web app + Twilio text bot for testing domain safety. Trained with gpt-3.5-turbo', imageUrl: '/images/secure_surf.png', url: 'https://github.com/shashankdatta/secure-surf'},
    { title: 'My personal Website!', description: 'Built with Next.js, TypeScript and React.js', imageUrl: '/images/website.png' },
    { title: 'SpoonFul', description: 'A fullstack website to reduce household waste', imageUrl: '/images/SpoonFul.png', url: 'https://github.com/Chen-Steve/SpoonFulWeb'},
  ];
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles["section-header"]}>
        <span className={styles["section-title"]}>/ My Projects</span>
      </div>
      <div className={styles["spotlight-container"]}>
        <Carousel>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.imageUrl}
                alt={project.title}
                placeholder="empty"
                className="d-block w-100"
                sizes="100vw"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  opacity: "0.5",
                }}
              />
              <div className={styles["caption-bg"]}>
                <Carousel.Caption>
                  <h3>{project.title}</h3>
                  <div>{project.description}</div>
                </Carousel.Caption>
              </div>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;