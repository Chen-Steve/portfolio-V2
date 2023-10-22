import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  const one = (
    <p>
      I am an undergrad <b>Computer Science student</b> at{" "}
      <a
        className={styles["about-description"]}
        href="https://illinois.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        UIUC
      </a>
      . My particular focus lies at the intersection of creating machine learning applications and enhancing cybersecurity.
    </p>
  );
  const two = (
    <p>
      Outside of school and work, I&apos;m interested in following the developments of
      science and technology. I also enjoy playing video games, playing badminton,
      and working out.
    </p>
  );
  const three = (
    <p>
      <b>Want to chat?</b> Shoot me a message at{" "}
      <Link href="mailto:zhangc2@illinois.edu">
        zhangc2@illinois.edu
      </Link>{" "}
      and let&apos;s talk.
    </p>
  );

  const tech_stack: string[] = [
    "Next.js",
    "TensorFlow",
    "Express.js",
    "React.js",
    "Node.js",
    "Kotlin",
    "Python",
    "Java",
    "HTML & CSS",
    "PostgreSQL",
    "C/C++",
    "TypeScript",
  ];

  return (
    <section id="about" className={styles.about}>
      <header className={styles["section-header"]}>
        <span className={styles["section-title"]}>/ about me</span>
      </header>
      <div className={styles["about-content"]}>
        <div className={styles["about-description"]}>
          {one}
          {"Here are some technologies I have been working with:"}
          <ul className={styles["tech-stack"]}>
            {tech_stack.map((tech_item, i) => (
              <li key={i}>{tech_item}</li>
            ))}
          </ul>
        </div>
        <div className={styles["about-image-wrapper"]}>
          <Image
            src="/images/steven.jpg"
            alt="Steven's Headshot"
            width={500}
            height={500}
            className={styles["about-image"]}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;