import React from "react";
import styles from "../CSS/About.module.css";

export default function Education() {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education & Certification</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Certifications: </h3>
              <p>Certified Associate Python Programmer (PCAP) – Python Institute (Feb 2025)</p>
              <p>Artificial Intelligence Fundamentals – IBM Skills Build (Dec 2024)</p>
              <p>Python for Data Science – IBM Skills Build (Dec 2024)</p>
              <p>Data Analyst Fundamentals – IBM Skills Build (Oct - Dec 2024)</p>
              <p>Web Development Fundamentals – IBM Skills Build (Oct - Nov 2024)</p>
              <p>Python & Data IT Security – Lexicon IT-Proffs (Mar 2024 – Aug 2024)</p>
              <p>PECP Certification – Python Institute (Dec 2023)</p>
              <p>Bachelor of Arts – VKSU (2005 - 2008)</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Courses</h3>
              <p>Docker for the Absolute Beginner – Hands-On DevOps (Udemy, May 2025)</p>
              <p>Kubernetes for the Absolute Beginners – Hands-On (Udemy, May 2025)</p>
              <p>Machine Learning Model Deployment with Flask, React & NodeJS (Udemy, April 2025)</p>
              <p>5-Day Coding Challenge (HTML, JS, CSS) – Code Institute (2024)</p>
              <p>Agile Methodology – Stockholm IT Academy (2024)</p>
              <p>Software Testing Fundamentals – Stockholm IT Academy (2024)</p>
              <p>Java – NIIT, Mumbai, India (2009)</p>
              <p>Certification in Computer Software – Aptech, Mumbai, India (2008)</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
