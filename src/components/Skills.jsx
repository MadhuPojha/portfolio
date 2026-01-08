import React from "react";

//import styles from "./CSS/About.module.css";
import styles from "../CSS/About.module.css";

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>

              <p><strong>Programming & Scripting:</strong> Python, JavaScript (JS), HTML, CSS, SCSS</p>
          
              <p><strong>Frameworks & Libraries:</strong> Django, ReactJS, TypeScript, NextJS</p>
          
              <p><strong>APIs & Development Tools:</strong> RESTful APIs, GitHub Actions, CI/CD, Docker, Kubernetes</p>
          
              <p><strong>Project Management & Methodologies:</strong> Jira, Confluence, Agile, Scrum</p>
          
              <p><strong>UI/UX & Design:</strong> Figma, Shopify</p>
          
              <p><strong>Databases & Cloud Platforms:</strong> Firebase, Supabase, AWS, Google Cloud Storage</p>
          
              <p><strong>Soft Skills:</strong> Problem-solving, Time Management, Communication, Teamwork, Adaptability</p>
          
              <p><strong>Languages:</strong> English, Hindi, Swedish</p>
          
          </div>

          </li>
        </ul>
      </div>
    </section>
  );
};
