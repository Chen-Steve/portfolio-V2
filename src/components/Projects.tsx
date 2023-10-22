import React from "react";
import styles from "@/styles/Projects.module.css";

const PROJECTS = [
    { title: "Project 1", description: "Description" },
    { title: "Project 2", description: "Description" },
    { title: "Project 3", description: "Description" },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            {PROJECTS.map(project => (
                <article key={project.title} className={styles.projectCard}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                </article>
            ))}
        </section>
    );
};

export default Projects;