import React from "react";
import styles from "../CSS/About.module.css";
import aboutImage from '../assets/aboutImage.png';

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
                am a Certified Associate Python Programmer (PCAP) and Software Engineer with over 5 years of experience in full-stack development, specializing in Python and Django. I have a strong foundation in modern web technologies, including JavaScript, React, HTML, CSS, and expertise in CI/CD pipelines, GitHub Actions, Docker, and Kubernetes.
                I am well-versed in project management and collaborative tools such as Jira, Confluence, and agile methodologies including Scrum. Additionally, I have hands-on experience with Figma, Firebase, Supabase, and databases like SQLite, MongoDB, MySQL, and MS SQL.
                I am passionate about building scalable, efficient, and user-centric applications that deliver real value to users.
                Languages: English (Fluent), Swedish (Conversational)
                <br /><br />
                I am currently working as a Full-Stack Developer. I recently completed a 1-year full-stack internship and a 5-month intensive training program at Lexicon IT-Proffs.
                My hands-on experience includes developing real-time chatbots, employee portals, smart dashboards, and e-commerce web applications, following Agile methodologies and implementing CI/CD pipelines with GitHub Actions.
                I have also deployed robust, production-ready solutions on cloud platforms such as Azure and Heroku, ensuring scalable and efficient applications.
                <br /><br />
                I thrive in collaborative, data-driven environments and bring a proactive mindset to every project.
                With strong problem-solving skills, excellent communication abilities, and a constant drive to learn and grow, I am always ready to take on new challenges and deliver impactful solutions.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
