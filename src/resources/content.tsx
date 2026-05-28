import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alexander",
  lastName: "Fehsenfeld",
  name: `Alexander Fehsenfeld`,
  role: "Software Development Engineer",
  avatar: "/images/avatar.jpg",
  email: "fehsenfeld.xander@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/xanderfehsenfeld",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alexander-fehsenfeld-b96623120/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full-Stack SDE with extensive experience building, deploying, and
        debugging scalable applications. Specialized in Python, Bash,
        TypeScript, and C#, with deep expertise in Azure services, DevOps, CI/CD
        pipelines, and leveraging LLMs and cloud technologies to drive
        automation and operational efficiency.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LiveOcean",
        timeframe: "May 2024 - Present",
        role: "Full Stack Software Engineer",
        achievements: [
          <>Redesigned the UI/UX for the LiveOcean platform.</>,
          <>
            Spearheaded a stronger CI/CD pipeline, reducing deployment time 75%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/LiveOcean/article-page-dark-mobile.png",
            alt: "LiveOcean article page mobile",
            width: 9,
            height: 9,
          },
          {
            src: "/images/projects/LiveOcean/home-page-dark-desktop.png",
            alt: "LiveOcean home page desktop",
            width: 9,
            height: 9,
          },
          {
            src: "/images/projects/LiveOcean/interactive-page-light-animation.gif",
            alt: "LiveOcean data visualization",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/LiveOcean/interactive-page-light-desktop.png",
            alt: "LiveOcean interactive page desktop",
            width: 9,
            height: 9,
          },
        ],
      },
      {
        company: "Spont Club",
        timeframe: "Nov 2022 - May 2024",
        role: "Chief Technology Officer",
        achievements: [
          <>
            Led technical design and development of Spont Club's flagship social
            media app.
          </>,
          <>
            Automated deployment to target iOS and Android devices, enabling
            developers to iterate 60% faster.
          </>,
        ],
        images: [
          {
            src: "/images/projects/spont/Spont_App Icon_HR_2400.png",
            alt: "Spont Club Project image",
            width: 9,
            height: 9,
          },
        ],
      },
      {
        company: "Delhivery",
        timeframe: "Feb 2022 - Oct 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Worked with a team to build multiple React web apps to integrate
            with Delhivery's Logistix API.
          </>,
          <>
            Led push for CI/CD Github Actions YAML to improve developer team
            experience
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Education",
        timeframe: "Nov 2019 - Feb 2022",
        role: "Front-end Engineer",
        achievements: [
          <>
            In first 3 months of employment, removed 5,076 lines of dead code
          </>,
          <>
            Provided consistent, constructive feedback as required pull request
            reviewer
          </>,
        ],
        images: [],
      },
      // {
      //   company: "UpTopHealth",
      //   timeframe: "May 2017 - Feb 2022",
      //   role: "Software Developer",
      //   achievements: [
      //     <>
      //       Worked with a team of UX researchers and designers to build
      //       accessible, beautiful, and intuitive apps for a variety of clients
      //       and business applications. Collaborated on team sizes from 1 to 30+
      //       to build web, mobile, cross-platform and speech solutions and
      //       experiments.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Colorado College",
        description: <>Studied Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + TailwindCSS + Netlify.</>
        ),
        tags: [
          {
            name: "Typescript",
            icon: "BsTypescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, about, work, gallery };
