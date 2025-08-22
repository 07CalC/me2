import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
import { SiHyprland } from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTrpc } from "react-icons/si";
import { SiGimp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiDiscordFill, RiGithubFill, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-4">Hi, i'm Vinayak a.k.a. CalC</h1>
      <div className="flex sm:hidden gap-x-2 items-center ">
        <Link href="mailto:hello@vinm.me" target="_blank">
          <MdOutlineMailOutline className=" text-white hover:scale-105 sm:text-4xl text-5xl cursor-pointer" />
        </Link>
        <Link href="https://github.com/07calc" target="_blank">
          <RiGithubFill className="text-5xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://x.com/not_calc" target="_blank">
          <RiTwitterXLine className="text-5xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/maheshwarivinayak/" target="_blank">
          <RiLinkedinBoxLine className="text-5xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>

        <Link href="https://discord.com/users/notcalc" target="_blank">
          <RiDiscordFill className="text-5xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
      </div>
      <Link href="/resume.pdf" target="_blank" className="text-2xl flex items-center gap-x-2 font-semibold bg-purple-500 p-2 rounded-2xl hover:underline sm:hidden">
        Resume
        <FaLocationArrow className="text-2xl" />
      </Link>
      <Link href="https://github.com/07calc/aurora" target="_blank" className="text-2xl sm:hidden font-semibold hover:underline">
        Arch btw
      </Link>


      <p className="text-2xl text-white">
        pursuing B.Tech in Electronics and Communication Engineering at IIIT Allahabad.
      </p>
      <p className="text-2xl text-white">
        Currently trying to dive deep into Databases and Embedded Systems.
      </p>

      <p className="text-2xl text-white">
        I mostly work in Rust and TypeScript, choosing languages based on the kind of reliability and control I need.
        I like my tools fast, local-first, and hackable.
      </p>
      <p className="text-2xl text-white font-medium">
        I like cats and raccoons, infact i identify as a racc/oon.
      </p>

      <div className="grid grid-cols-4 gap-5 sm:flex scrollbar-hidden overflow-x-auto no-scrollbar max-x-full">
        <GrArchlinux className="text-5xl text-white" />
        <SiNeovim className="text-5xl text-white" />
        <SiHyprland className="text-5xl text-white" />
        <VscTerminalLinux className="text-5xl text-white" />
        <SiTypescript className="text-5xl text-white" />
        <FaReact className="text-5xl text-white" />
        <FaRust className="text-5xl text-white" />
        <SiPostgresql className="text-5xl text-white" />
        <RiNextjsFill className="text-5xl text-white" />
        <SiTrpc className="text-5xl text-white" />
        <FaDocker className="text-5xl text-white" />
        <SiGimp className="text-5xl text-white" />
      </div>
      <div className="border-b border-white w-full my-4" />
    </>
  )
}
