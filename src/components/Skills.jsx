import React from "react";
import styles from "../CSS/About.module.css";
import { skills } from "./skillsData"; 

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      {skills.map((skillGroup, index) => (
        <div key={index} className={styles.skillGroup}>
          <h3 className={styles.skillTitle}>{skillGroup.category}</h3>

          <div className={styles.skillGrid}>
            {skillGroup.items.map((skill, i) => (
              <div key={i} className={styles.skillBadge}>
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
