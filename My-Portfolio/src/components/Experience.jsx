import React from "react";
import styles from "../CSS/Experience.module.css";

export default function Experience(){
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>experience</h2>
      <div className={styles.content}>
      
        <ul className={styles.aboutItems}>
          <div className={styles.aboutItemText}>
    
            <li className={styles.aboutItem}>
              <p><strong>Fullstack Developer Intern Strictly Post Production AB - Stockholm (September 2025 – Present) : </strong><br />
                Developed a full-stack video management platform using Python, React, Typescript, and Supabase with secure file uploads, duplicate detection, and metadata tracking.
				Migration from Supabase to Google Cloud Storage (GCS) for scalable media handling.
				Implementing custom Edge Functions for signed uploads and integrated real-time progress tracking and automated video processing workflows.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>Fullstack Developer Intern
				Flexera AB & Historical Parts AB - Stockholm (March 2025 – July 2025) : </strong><br />
                Developed a web application providing customers a consolidated view of resource utilization costs across various SaaS applications.
				Utilized Go for back-end development and React/NextJS for front-end development to create dynamic and responsive web applications for this use case.
				Set up and maintained CI/CD pipelines to automate testing, building, and deployment processes, ensuring rapid and reliable software delivery
				Worked on scalable e-commerce platforms and AI modules—built with Python and integrated with RESTful APIs for image recognition, authentication, and data management.
				Involved in full project lifecycle planning, agile development, code reviews, performance tuning, and delivery while keeping tech and business teams in sync.
				Developed and customized e-commerce solutions using Shopify.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>Fullstack Developer Intern
				Lexicon Interactive, Infinity IT Consulting AB, Linespottin AB - Stockholm (September 2024 – February 2025)	 : </strong><br />
                Built a responsive and interactive chatbot application using Python and Django.
				Implemented real-time communication and thread management for smooth user interaction.
				Built an Employee Workplace Portal using Python and Django with role-based authentication.
				Implemented password reset workflows, email notifications, and optimized RESTful APIs.
				Developed smart energy monitoring dashboards with features like consumption tracking, cost analysis, and energy usage alerts/notifications.
				Contributed to the development of a web application to manage and monitor energy usage, devices, and sources using Python, Flask API, React, NextJS, SCSS, and Firebase
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>IT-Trainer | NGO | Bangalore, India | 2015-2017 : </strong><br />
                Designed and delivered training materials for youth with varying computer skills, leading workshops on HTML, CSS, word processing, spreadsheets, and internet use.
                Monitored student progress, managed feedback, and tracked sessions using basic database tools to ensure effective learning outcomes.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>IT-Teacher | Little-Flower School | Bangalore, India | 2012-2014 : </strong><br />
                Taught basic computer skills and introductory programming languages like HTML, JavaScript, SQL, C, and C++, providing hands-on support to enhance student learning.
                Guided students in coding, problem-solving, and responsible internet use, and led a project where they built a simple website using HTML and JavaScript.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>Java Developer | Fusion Software | Mumbai, India | 2009-2011 : </strong><br />
                Developed and tested a Loan Tracking System using Java, HTML, JavaScript, CSS, and SQL, with a focus on user-friendly interfaces and smooth functionality.
                Utilized CI/CD pipelines for continuous integration and delivery, and enhanced performance by reviewing and debugging existing code.
              </p>
            </li>
            </div>
        </ul>
      </div>
    </section>
  );
};
