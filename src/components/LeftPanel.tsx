import { MdOutlineMailOutline } from "react-icons/md";
import { RiDiscordFill, RiGithubFill, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import Spotify from "./Spotify";
import { Suspense } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Github from "./Github";
import Websites from "./Websites";
import TotalViews from "./TotalViews";


export default function LeftPanel() {
  return (
    <div className="hidden sm:flex flex-col items-start justify-start gap-y-5 p-4">
      <img
        src="https://avatars.githubusercontent.com/u/96346957?v=4"
        alt="me"
        className="w-80 h-80 mb-4 object-cover"
      />
      <Suspense fallback={<div className="w-40 h-8 bg-gray-800 animate-pulse rounded-lg mb-4" />}>
        <TotalViews />
      </Suspense>
      <div className="flex gap-x-2 items-center">
        <Link href="mailto:hello@vinm.me" target="_blank">
          <MdOutlineMailOutline className="text-3xl hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://github.com/07calc" target="_blank">
          <RiGithubFill className="text-3xl hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://x.com/not_calc" target="_blank">
          <RiTwitterXLine className="text-3xl hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/maheshwarivinayak/" target="_blank">
          <RiLinkedinBoxLine className="text-3xl hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>

        <Link href="https://discord.com/users/notcalc" target="_blank">
          <RiDiscordFill className="text-3xl hover:scale-105 sm:text-4xl lg:text-5xl cursor-pointer" />
        </Link>
      </div>
      <Link href="/resume.pdf" target="_blank" className="text-2xl flex text-center items-center justify-center bg-purple-500 p-2 rounded-2xl gap-x-2 font-semibold hover:underline">
        Resume
        <FaLocationArrow className="text-2xl" />
      </Link>
      <Link href="https://github.com/07calc/aurora" target="_blank" className="text-2xl font-semibold hover:underline">
        Arch btw
      </Link>
      <Suspense fallback={<div className="flex flex-col justify-center animate-pulse">
        <h2 className="text-2xl font-bold mb-4">GitHub Stats:</h2>

        <div className="bg-gray-700 rounded h-6 w-40 mb-2"></div>
        <div className="bg-gray-700 rounded h-6 w-48 mb-2"></div>
        <div className="bg-gray-700 rounded h-6 w-56 mb-2"></div>
      </div>}>
        <Github />
      </Suspense>
      <Suspense fallback={
        <div className="flex items-center bg-purple-800/40 px-4 py-2 rounded-lg w-[300px] h-[100px] animate-pulse">
          <div className="w-16 h-16 rounded bg-purple-700/50 mr-4" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-purple-700/50 rounded w-32"></div>
            <div className="h-3 bg-purple-700/50 rounded w-24"></div>
          </div>
        </div>
      }>
        <Spotify />
      </Suspense>
      <Suspense fallback={<div className="flex flex-col items-start justify-center animate-pulse">
        <div className="font-extrabold text-2xl mb-2 flex items-center w-full justify-between">
          Websites
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 mb-2">
            <div className="w-32 h-6 bg-gray-700 rounded" />
            <div className="w-12 h-6 bg-gray-800 rounded" />
          </div>
        ))}
      </div>}>
        <Websites />
      </Suspense>

    </div>
  )
}
