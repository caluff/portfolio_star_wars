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
  freelance,
  gallo_express
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
    title: "Frontend Architecture",
    icon: web,
  },
  {
    title: "Payment Integrations",
    icon: mobile,
  },
  {
    title: "Vercel Delivery",
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Git",
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

const integrations = [
  {
    category: "Auth & Identity",
    tools: ["Supabase", "Clerk", "Auth0", "better-auth"],
    description: "Authentication, user accounts, sessions, and secure access flows.",
  },
  {
    category: "Data & Backend",
    tools: ["Convex", "Neon", "Drizzle ORM"],
    description: "Reactive data layers, serverless PostgreSQL, and typed database access.",
  },
  {
    category: "Payments",
    tools: ["Stripe", "NMI"],
    description: "Checkout, subscriptions, and transaction processing workflows.",
  },
  {
    category: "Content & Uploads",
    tools: ["Sanity", "UploadThing"],
    description: "Structured content operations and file upload workflows.",
  },
  {
    category: "APIs & Location",
    tools: ["RapidAPI", "Google Maps API"],
    description: "External data integrations, maps, and place discovery features.",
  },
  {
    category: "CRM, Messaging & Monitoring",
    tools: ["Kommo", "EmailJS", "Resend", "Sentry"],
    description: "CRM workflows, contact flows, transactional emails, and production error visibility.",
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Textony",
    icon: freelance,
    time:'Full time',
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Develop, maintain, and evolve modern web applications using Next.js, React, and TypeScript, ensuring scalability, performance, and technical quality",
      "Integrate payment gateways such as Stripe and NMI for secure transaction processing, subscriptions, and custom checkout flows",
      "Implement and automate build and deployment pipelines on Vercel, improving delivery speed and reducing production environment errors",
      "Participate in frontend architecture decisions and define best practices to improve maintainability and scalability across the codebase",
    ],
  },
  {
    title: "Computer Science Specialist",
    company_name: "Desoft",
    icon: desoft,
    time: 'Part time',
    iconBg: "#383E56",
    date: "Jan 2023 - Aug 2024",
    points: [
      "Developed and maintained web applications using React.js and related frontend technologies",
      "Implemented responsive designs and ensured cross-browser compatibility across supported devices",
      "Participated in code reviews to improve quality, readability, and consistency across the codebase",
    ],
  },
];

const projects = [
  {
    name: "Gallo Express",
    description: "Production-ready ecommerce app with catalogs, multi-location inventory, admin area, auth, file uploads, and persistent cart.",
    tags: [
      {
        name: "nextjs15",
        color: "gold-text-gradient",
      },
      {
        name: "react19",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCSS4",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "drizzle",
        color: "white-text-gradient",
      },
      {
        name: "better-auth",
        color: "violet-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
      {
        name: "uploadthing",
        color: "orange-text-gradient",
      },
    ],
    image: gallo_express,
    source_code_link: "https://github.com/caluff/gallo-express",
    url_code_link: "https://galloexpress.com/",
    developing: false,
  },
  {
    name: "Travel Advisor",
    description: "Location-based travel discovery app that integrates maps and external APIs to surface restaurants, hotels, and attractions.",
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
    url_code_link: "https://traveladvisor-caluff.vercel.app",
    developing: false,
  },
  {
    name: "Car Showcase",
    description: "Responsive car discovery platform with filtering, detailed vehicle data, and a streamlined browsing experience.",
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
    url_code_link: "https://carshowcase-caluff.vercel.app",
    developing: false,
  },
  {
    name: "Startup Showcase",
    description: "Platform for entrepreneurs to publish startup profiles, present ideas, and connect with potential investors and collaborators.",
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

export {services, technologies, integrations, experiences, projects};
