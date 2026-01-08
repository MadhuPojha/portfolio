import React from "react";
import styles from "../CSS/ProjectCard.module.css";

export default function ProjectCard({
  project: { title, imageSrc, description, skills, link },
}){
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </a>
      
      <p className={styles.description}>{description}</p>
      <p className={styles.skills}>
        Skills: {skills.join(', ')}
      </p>

      
    </div>
  );
};
