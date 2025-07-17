import { Suspense } from "react";
import About from "./About";
import Experience from "./Experience";
import Heatmap from "./Heatmap";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Github from "./Github";
import Spotify from "./Spotify";

export default function RightPanel() {
  return (
    <div className="flex flex-col sm:items-start justify-start gap-y-5 overflow-y-auto max-w-full sm:pr-60">
      <img
        src="https://avatars.githubusercontent.com/u/96346957?v=4"
        alt="Vinayak's Avatar"
        className="w-64 h-64 mb-4 sm:hidden"
      />
      <About />
      <Projects />
      <Experience />
      <Blogs />

      <Suspense fallback={<div className="grid grid-cols-53 gap-1">
        {Array.from({ length: 7 * 53 }).map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 bg-gray-800 animate-pulse rounded-sm"
          />
        ))}
      </div>}>
        <div className="max-w-full flex flex-col gap-y-5">
          <div className="sm:hidden">
            <Github />
          </div>
          <Heatmap />
        </div>
      </Suspense >
      <Suspense fallback={<div className="flex items-center sm:hidden bg-purple-800/40 text-white px-4 py-2 rounded-lg w-[300px] h-[100px] animate-pulse">
        <div className="w-16 h-16 rounded bg-purple-700/50 mr-4" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-purple-700/50 rounded w-32"></div>
          <div className="h-3 bg-purple-700/50 rounded w-24"></div>
        </div>
      </div>
      }>
        <div className="sm:hidden">
          <Spotify />
        </div>
      </Suspense>

    </div >
  )
}
