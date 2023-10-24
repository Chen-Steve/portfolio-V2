import React from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import "@/styles/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import SocialLinks from "@/components/SocialLinks";
import "bootstrap/dist/css/bootstrap.css";

const Projects = () => {
  const projects = [
    { title: 'Secure Surf', description: 'Description 1', imageUrl: '/public/images/website.png' },
    { title: 'GeoHarbin', description: 'Description 2', imageUrl: '/public/images/website.png' },
    { title: 'My Website!', description: 'Description 2', imageUrl: '/public/images/website.png' }
    // more projects in the future
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
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;