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
  startup,
  freelance
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
    title: "Web designer",
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
    time: 'Part time',
    iconBg: "#383E56",
    date: "Jan 2023 - Aug 2024",
    points: [
      "Development and maintenance of web applications using React.js and other related technologies",
      "Collaborate with cross-functional teams including designers and other developers to create high-quality products",
      "Implement responsive design and ensure cross-browser compatibility",
      "Participate in code reviews",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Textony",
    icon: freelance,
    time:'Full time',
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Development and support of web applications using Next.js and other related technologies and post-development maintenance to ensure customer satisfaction",
      "Work closely with the product team to understand and implement business needs",
      "Optimizing web application performance to improve user experience",
      "Effectively balance multiple projects and deadlines simultaneously",
      "Contribute to the planning and estimation of software development projects",
      "Ability to work autonomously and make design and development decisions",
    ],
  },
];

const projects = [
  {
    name: "Travel Advisor",
    description: "Searching for places, Fetching restaurants, hotels and attractions based on location from specialized Rapid APIs" +
      "",
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
    developing: false,
  },
  {
    name: "Car Showcase",
    description: "Website that helps you find, book or rent cars. Quickly and easily." +
      "" +
      "",
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
    developing: false,
  },
  {
    name: "Houcase Startup",
    description: "Showcase Startups is an innovative platform where entrepreneurs can present their projects to attract investors, collaborators and customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs15",
        color: "gold-text-gradient",
      },
      {
        name: "sanity",
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
        name: "sentry",
        color: "violet-text-gradient",
      },
      {
        name: "shadcn",
        color: "white-text-gradient"
      }
    ],
    image: startup,
    source_code_link: "https://github.com/caluff/startup",
    url_code_link: "https://startup-caluff.vercel.app/",
    // developing: true,
  },
];

export {services, technologies, experiences, projects};