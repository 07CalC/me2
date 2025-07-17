import { MdOutlineMailOutline } from "react-icons/md";
import { RiDiscordFill, RiGithubFill, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import Spotify from "./Spotify";
import { Suspense } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Github from "./Github";
import Websites from "./Websites";
import Loading from "./Loading";


export default function LeftPanel() {
  return (
    <div className="hidden sm:flex flex-col items-start justify-start gap-y-5 p-4">
      <img
        src="https://avatars.githubusercontent.com/u/96346957?v=4"
        alt="me"
        className="w-80 h-80 mb-4 object-cover"
      />
      <div className="flex gap-x-2 items-center">
        <Link href="mailto:hello@vinm.me" target="_blank">
          <MdOutlineMailOutline className="text-3xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://github.com/07calc" target="_blank">
          <RiGithubFill className="text-3xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://x.com/not_calc" target="_blank">
          <RiTwitterXLine className="text-3xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/maheshwarivinayak/" target="_blank">
          <RiLinkedinBoxLine className="text-3xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>

        <Link href="https://discord.com/users/notcalc" target="_blank">
          <RiDiscordFill className="text-3xl text-white hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
      </div>
      <Link href="/resume.pdf" target="_blank" className="text-2xl flex text-center items-center justify-center gap-x-2 font-semibold hover:underline">
        Resume
        <FaLocationArrow className="text-2xl" />
      </Link>
      <Link href="https://github.com/07calc/aurora" target="_blank" className="text-2xl font-semibold hover:underline">
        Arch btw
      </Link>
      <Suspense fallback={<div className="flex flex-col justify-center animate-pulse">
        <h2 className="text-2xl font-bold text-white mb-4">GitHub Stats:</h2>

        <div className="bg-gray-700 rounded h-6 w-40 mb-2"></div>
        <div className="bg-gray-700 rounded h-6 w-48 mb-2"></div>
        <div className="bg-gray-700 rounded h-6 w-56 mb-2"></div>
      </div>}>
        <Github />
      </Suspense>
      <Suspense fallback={
        <div className="flex items-center bg-purple-800/40 text-white px-4 py-2 rounded-lg w-[300px] h-[100px] animate-pulse">
          <div className="w-16 h-16 rounded bg-purple-700/50 mr-4" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-purple-700/50 rounded w-32"></div>
            <div className="h-3 bg-purple-700/50 rounded w-24"></div>
          </div>
        </div>
      }>
        <Spotify />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Websites />
      </Suspense>

    </div>
  )
}
