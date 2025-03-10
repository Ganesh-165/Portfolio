import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  leetcode,
  skillrack,
  udemy,
  cognizant,
  expensetracker,
  resourcehub,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr Software Engineer",
    company_name: "Saptang Labs Private Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - February 2025",
    points: [
      "Developed and optimized frontend interfaces, building interactive dashboards with React.js and Next.js to enhance user engagement and improve performance efficiency by 30%.",
      "Achieved a reduction in frontend performance lag by implementing optimizations that enhanced responsiveness, yielding a smoother user experience with improved load times by 20%",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const achievements = [
  {
    category: "LeetCode",
    details: "Solving 450+ problems and participating in 40+ contests.",
    link: "https://leetcode.com/GaneshVT/",
    linkText: "Profile",
    logo: leetcode,
  },
  {
    category: "Skillrack",
    details:
      "Ranked 2000th out of 500,000 users. Solved 1500+ problems and earned 600+ medals.",
    link: "https://www.skillrack.com/faces/resume.xhtml?id=316912&key=312ed7962a962d0bf5d00d3efe27ebda0b5938b8",
    linkText: "Profile",
    logo: skillrack,
  },
  {
    category: "Certifications",
    details:
      'Completed "Mastering Data Structures and Algorithms in C" and "Java Programming (Beginner to Master)" on Udemy.',
    link: "https://drive.google.com/file/d/1URlbQ99qjGPpMIJ8lRTI-QtMiTozU-Bj/view?usp=drive_link",
    linkText: "Certificate",
    logo: udemy,
  },
  {
    category: "Internship",
    details:
      "Gained hands-on software development experience through a 1 week internship at Cognizant.",
    link: "https://drive.google.com/file/d/1bhyaeZ4niMXLUsIla9Bhv_A0cEqJ0KGH/view?usp=drive_link",
    linkText: "Certificate",
    logo: cognizant,
  },
];

const projects = [
  {
    name: "Resource Hub",
    description:
      "Full-stack web app to store and display 100+ question papers for school students and government exams, featuring real-time updates and a centralized repository for better accessibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: resourcehub,
    source_code_link: "https://github.com/Ganesh-165/ResourseHub_Client",
  },
  {
    name: "QuickBite",
    description:
      "A real-time food ordering system that enhances user convenience, reduces order processing time by 20%, and improves accuracy through real-time status updates and efficient API usage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ganesh-165/FoodOderApplication",
  },
  {
    name: "Expense Tracker",
    description:
      "A financial tracking system that improves budgeting accuracy and provides real-time spending insights, reducing budget tracking errors by 30% and enhancing forecasting accuracy by 40%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://github.com/Ganesh-165/AmountTracker_Client",
  },
];

export { services, technologies, experiences, achievements, projects };
