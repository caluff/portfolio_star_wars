import {
  nextjs,
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  desoft,
  travel_advisor,
  postgresql,
  java,
  creator,
  typescript,
  show_case,
  blackout,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next Developer",
    icon: creator,
  }
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Postgre SQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Desoft",
    icon: desoft,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Development and maintenance of web applications using React.js and other related technologies",
      "Collaborate with cross-functional teams including designers and other developers to create high-quality products",
      "Implement responsive design and ensure cross-browser compatibility",
      "Participate in code reviews",
    ],
  },
];

const projects = [
  {
    name: "Travel Advisor",
    description: "Searching for places, Fetching restaurants, hotels and attractions based on location from specialized Rapid APIs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "gold-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
      {
        name: "GoogleCloud",
        color: "orange-text-gradient",
      },
    ],
    image: travel_advisor,
    source_code_link: "https://github.com/caluff/travel_advisor",
    url_code_link: "https://danielcaluff-traveladvisor.vercel.app/",
    developing:false,
  },
  {
    name: "Car Showcase",
    description: "Website that helps you find, book or rent cars. Quickly and easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "gold-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "headlessUI",
        color: "violet-text-gradient",
      },
    ],
    image: show_case,
    source_code_link: "https://github.com/caluff/car_showcase",
    url_code_link: "https://danielcaluff-car-showcase.vercel.app/",
    developing:false,
  },
  {
    name: "Blackout",
    description: "Website of a caffee-bar that offers information on prices and conditions of products on sale." +
      " In addition, it has an administration section where those in charge of the caffee-bar can easily modify the offers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "gold-text-gradient",
      },
      {
        name: "xata.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "violet-text-gradient",
      },
    ],
    image: blackout,
    source_code_link: "https://github.com/caluff/blackout_coffee",
    url_code_link: "https://danielcaluff-blackout-coffee.vercel.app/",
    developing:true,
  },
];

export {services, technologies, experiences, projects};