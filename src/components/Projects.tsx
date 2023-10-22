import React from "react";

import Image from "next/image";

import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/Projects.module.css";
import "@/styles/Carousel.css"
import Carousel from "react-bootstrap/Carousel";

import SocialLinks from "@/components/SocialLinks";
import "bootstrap/dist/css/bootstrap.css";


const PROJECTS = [
    { title: "Project 1", description: "Description" },
    { title: "Project 2", description: "Description" },
    { title: "Project 3", description: "Description" },
];

const Projects: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    return (
        <div ref={emblaRef} className={styles.carousel}>
            <div className={styles.carousel__viewport}>
                {PROJECTS.map((project) => (
                    <div key={project.title} className={styles.carousel__slide}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;