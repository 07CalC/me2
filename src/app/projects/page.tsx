import type { Metadata } from 'next';

import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Projects | Vinayak Maheswari",
  description: 'Explore my projects, showcasing my skills in web and mobile development. From innovative web applications to efficient mobile solutions, discover how I bring ideas to life through code.',
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/96346957?v=4',
    shortcut: 'https://avatars.githubusercontent.com/u/96346957?v=4',
  },

};

const projects = [
  {
    title: "Crux",
    description: `A web platform that provides previous years' opening and closing ranks for various colleges under JoSAA and CSAB,
  helping students make informed decisions during counseling.`,
    image: "/crux.png",
    tech: [
      {
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwind.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/Postgres.svg",
      },
      {
        name: "Docker",
        icon: "/docker.svg",
      },
      {
        name: "Prisma",
        icon: "/prisma.svg",
      }
    ],
    github: "https://github.com/07calc/crux",
    demo: "https://crux.ix.tc/",
  },
  {
    title: "Cook.nvim",
    description: `cook.nvim is a modular and extensible Neovim plugin that lets you effortlessly compile or run the current file based on its filetype — inside a floating terminal.`,
    image: "/cook.gif",
    tech: [
      {
        name: "Lua",
        icon: "/lua.svg"
      },
      {
        name: "Neovim",
        icon: "/neovim.svg"
      }
    ],
    github: "https://github.com/07calc/cook.nvim",
  },

  {
    title: "Dorara",
    description: `An all-in-one productivity app that combines to-do lists, notes, and journaling to help users stay organized and track their
  daily activities.`,
    image: "/dorara.png",
    tech: [
      {
        name: "React Native",
        icon: "/react.svg",
      },
      {
        name: "Expo",
        icon: "/expo.svg",
      },
      {
        name: "Sqlite",
        icon: "/sqlite.svg",
      },
      {
        name: "Nativewind CSS",
        icon: "/tailwind.svg",
      },
    ],
    github: "https://github.com/07Calc/dorara",
    demo: "https://github.com/07CalC/Dorara/releases/tag/v1.2"
  },
  {
    title: "LaxCI",
    description: `LaxCI is a blazing-fast, minimal CI runner written in Rust that executes workflows defined in a laxci.yml file — just like GitHub Actions, but entirely local.`,
    image: "/laxci.png",
    tech: [
      {
        name: "Rust",
        icon: "/rust.svg"
      }
    ],
    github: "https://github.com/07calc/laxci",
    demo: "https://crates.io/crates/laxci"
  },
  {
    title: "JeeLore",
    description: `A community-driven web forum where JEE and NEET aspirants can post questions, share answers, and collaborate to
  solve academic doubts.`,
    image: "/jeelore.png",
    tech: [
      {
        name: "Express.js",
        icon: "/express.svg",
      },
      {
        name: "React",
        icon: "/react.svg",
      },
      {
        name: "MongoDB",
        icon: "/mongo.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwind.svg",
      },
      {
        name: "Cloudinary",
        icon: "/cloudinary.svg",

      },
      {
        name: "Docker",
        icon: "/docker.svg",
      }
    ],
    github: "https://github.com/07calc/jeelore",
    demo: "https://jeelore.site/",
  }, {
    title: "Batua",
    description: `A web application that allows users to track their expenses and providing insights into their financial habits.`,
    image: "/batua.jpg",
    tech: [
      {
        name: "Express.js",
        icon: "/express.svg",
      },
      {
        name: "React",
        icon: "/react.svg",
      },

      {
        name: "Tailwind CSS",
        icon: "/tailwind.svg",
      },
      {
        name: "MongoDb",
        icon: "/mongo.svg",
      },
    ],
    github: "https://github.com/07calc/batua",
    demo: "https://batua.site/",
  },
  {
    title: "RustProx",
    tech: [
      {
        name: "Rust",
        icon: "/rust.svg"
      }
    ],
    description: `RustProx is a lightweight, command-line proxy toggler built with Rust, designed to quickly enable or disable system or application-level proxy settings. Ideal for developers and network administrators.`,
    image: "/rustProx.jpg",
    github: "https://github.com/07calc/rustprox"
  },
  {
    title: "VtreeX",
    description: `A fast and colorful Rust CLI tool to print directory trees — like tree, but better.
Includes stats, ignore filters, text export, and human-readable performance timing.`,
    image: "/vtreex.png",
    tech: [
      {
        name: "Rust",
        icon: "/rust.svg"
      }
    ],
    github: "https://github.com/07calc/vtreex",
    demo: "https://crates.io/crates/vtreex"
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-start  justify-center p-4 sm:px-80">
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project, index) => (
            <div key={index} className="gap-x-4 border-b border-dashed border-white rounded-lg flex flex-col sm:flex-row w-full py-6 px-3 shadow-lg">
              <img src={project.image} alt={project.title} className="sm:w-1/3 object-cover rounded-md mb-4" />
              <div className="flex flex-col sm:w-2/3">
                <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-x-2 bg-gray-700 px-3 py-1 rounded-lg">
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-x-4 items-center justify-start">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      <RiGithubFill className="inline-block text-4xl mr-1" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      <FaExternalLinkAlt className="inline-block text-3xl mr-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
