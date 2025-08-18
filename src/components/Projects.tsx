import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

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
    demo: "https://crux.hs.vc/",
  },
  {
    title: "Cook.nvim",
    description: `cook.nvim is a modular and extensible Neovim plugin that lets you effortlessly compile or run the current file based on its filetype.`,
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
]


export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-start  justify-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-white">(some) Projects</h1>
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project, index) => (
            <div key={index} className="gap-x-4 border-white rounded-lg flex flex-col sm:flex-row w-full py-6 px-3 shadow-lg">
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
      <Link href={"/projects"} className="text-2xl font-semibold px-5 flex items-center justify-start text-white hover:underline mt-8">
        view all
        <FaExternalLinkAlt className="inline-block text-2xl ml-4" />
      </Link>
      <div className="border-b border-white w-full my-4" />

    </>
  );
}
