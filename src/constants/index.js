import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  postgresql,
  nextjs,
  drizzle,
  prisma,
  mysql,
  spring,
  graphql,
  bounteous,
  codenatives,
  eshop,
  dream11,
  aora
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
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  // {
  //   title: "Web Developer",
  //   icon: backend,
  // },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "GraphQL",
  //   icon: graphql,
  // },
  {
    name: "Springboot",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "drizzle",
    icon: drizzle,
  },
  {
    name: "prisma",
    icon: prisma,
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
    title: "Web Developer Intern",
    company_name: "Codenatives",
    icon: codenatives,
    iconBg: "white",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Developing responsive web pages using html, css, bootstrap and jQuery.",
      "Analyzed product requirements and designed prototypes.",
      "Created working models of approved prototypes.",
      "Implementing responsive design and ensuring cross-device compatibility.",
    ],
  },
  {
    title: "Software Associate Intern",
    company_name: "Bounteous x Accolite",
    icon: bounteous,
    iconBg: "white",
    date: "February 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Writing high quality code and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "E-Shop",
    description:
      "An ecommerce website offering seamless shopping experience with a wide range of products, secure payment options, and fast shipping, designed to meet all your online shopping needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "text-cyan-500",
      },
      {
        name: "firebase",
        color: "text-orange-500",
      },
    ],
    image: eshop,
    source_code_link: "https://github.com/tauseef24/e-shop",
  },
  {
    name: "Dream 11",
    description:
      "A fantasy sports betting website providing immersive gameplay, real-time stats, and secure betting for sports enthusiasts, enhancing your sports experience with exciting rewards and competitions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "radix-ui",
        color: "text-cyan-500",
      },
    ],
    image: dream11,
    source_code_link: "https://github.com/tauseef24/fantasy-server",
  },
  {
    name: "Aora",
    description:
      "A video-sharing mobile app enabling seamless uploads, creative editing tools, and social interactions, allowing users to share and discover engaging content effortlessly.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: aora,
    source_code_link: "https://github.com/tauseef24/aora",
  },
];

export { services, technologies, experiences, projects };
