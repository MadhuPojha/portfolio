import React from "react";
import styles from "../CSS/Hero.module.css";
import my_img from '../assets/my_img.jpg';

export default function Hero(){
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Madhu Priyadarshni Ojha</h1>
        <p className={styles.description}>
          PCAP™ Certified Python Developer with over 6 years of hands-on experience in Python/Django, JavaScript, TypeScript, React, Java, and SQL, specializing in building scalable, high-performance web applications. Hands-on experience with Docker, Kubernetes, and CI/CD pipelines using GitHub Actions, as well as integrating Shopify and cloud-based solutions.Skilled across both back-end and front-end development, RESTful API design, and cloud integrations. Collaborative and detail-oriented, with a strong commitment to clean, maintainable code, continuous improvement, and delivering robust, user-focused software solutions within Agile/Scrum environments.
          Additionally elligible for NystartJobb. Feel free to reach out to learn more!        </p>
        <a href="mailto:mpriya1201@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={my_img}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
