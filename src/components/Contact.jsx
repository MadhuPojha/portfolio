import React from "react";
import styles from "../CSS/Contact.module.css";
import Contact_linkedin from '../assets/Contact_linkedin.png';
import Contact_github from '../assets/Contact_github.png';
import Contact_email from '../assets/Contact_email.png';

export default function Contact(){
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        Copyright © 2025 | All rights reserved | Designed By Madhu
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={Contact_email} alt="Email icon" />
          <a href="mailto:myemail@email.com">mpriya1201@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={Contact_linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/madhu-priyadarshni-ojha-169a1a22/">linkedin.com/MadhuPojha</a>
        </li>
        <li className={styles.link}>
          <img src={Contact_github} alt="Github icon" />
          <a href="https://github.com/MadhuPojha">github.com/MadhuPojha</a>
        </li>
      </ul>
    </footer>
  );
};
