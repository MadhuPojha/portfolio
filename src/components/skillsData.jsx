import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaGithub,
  FaFigma,
  FaJira,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDjango,
  SiNextdotjs,
  SiGithubactions,
  SiKubernetes,
  SiConfluence,
  SiFirebase,
  SiSupabase,
  SiShopify,
} from "react-icons/si";

export const skills = [
  {
    category: "Programming & Frameworks",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "SCSS" },
    ],
  },
  {
    category: "APIs & DevOps",
    items: [
      { name: "APIs" },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "CI/CD" },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
    ],
  },
  {
    category: "Project Management & Methodologies",
    items: [
      { name: "Jira", icon: <FaJira /> },
      { name: "Confluence", icon: <SiConfluence /> },
      { name: "Agile" },
      { name: "Scrum" },
    ],
  },
  {
    category: "UI/UX & Design",
    items: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Shopify", icon: <SiShopify /> },
    ],
  },
  {
    category: "Databases & Cloud Platforms",
    items: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "SQLite", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "MsSQL", icon: <FaDatabase /> },
    ],
  },
];
