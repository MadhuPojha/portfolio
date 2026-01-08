import React from "react";
import styles from "../CSS/Projects.module.css";
import ProjectCard from "./ProjectCard";

// Import images from src/assets
import ProjShoppingImage from "../assets/Proj_Shopping.jpg";
import ProjWeatherImage from "../assets/Proj_Weather.jpg";
import ProjPhDirImage from "../assets/Proj_PhDir.jpg";
import BooksQuotesApp from "../assets/BooksQuotesApp.png";

export default function Projects() {
  const projects = [
    {
      
      title: "Books & Quotes App",
      imageSrc: BooksQuotesApp,
      description:
        "CRUD app for books & quotes with JWT auth, dark/light theme, FastAPI + Bootstrap.",
      skills: [
        "HTML5", "CSS", "JS", "Bootstrap ", "Python","FastAPI", "SQLite", "JWT Authentication",
      ],
      link: "https://github.com/MadhuPojha/book-quote-app",
        
    },
    {
      title: "Online Clothing Store",
      imageSrc: ProjShoppingImage,
      description:
        "Django-based online store with browsing, shopping, and admin inventory management features.",
      skills: ["Python", "Django", "JS", "HTML", "CSS", "SQLite"],
      link: "https://github.com/MadhuPojha/Clothing-Store",
    },
    {
      title: "Weather Forecast App",
      imageSrc: ProjWeatherImage,
      description:
        "React-based weather app that fetches real-time weather data using OpenWeatherMap API.",
      skills: ["React", "JavaScript", "CSS", "API"],
      link: "https://github.com/MadhuPojha/Weather-App",
    },
    {
      title: "PhD Directory System",
      imageSrc: ProjPhDirImage,
      description:
        "Platform for managing PhD student records with advanced filtering and profile features.",
      skills: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "https://github.com/MadhuPojha/PhD-Directory",
    },
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}
