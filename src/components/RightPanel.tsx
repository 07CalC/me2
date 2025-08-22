import { Suspense } from "react";
import About from "./About";
import Experience from "./Experience";
import Heatmap from "./Heatmap";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Github from "./Github";
import Spotify from "./Spotify";
import Websites from "./Websites";
import TotalViews from "./TotalViews";
import { People } from "./People";

export default function RightPanel() {
  return (
    <div className="flex flex-col sm:items-start justify-start gap-y-5 no-scrollbar overflow-y-auto scrollbar-hidden max-w-full sm:pr-60 pb-10">
      <img
        src="https://avatars.githubusercontent.com/u/96346957?v=4"
        alt="Vinayak's Avatar"
        className="w-64 h-64 mb-4 sm:hidden"
      />
      <div className="sm:hidden">
        <Suspense fallback={<div className="w-40 h-8 bg-gray-800 animate-pulse rounded-lg mb-4" />}>
          <TotalViews />
        </Suspense>
      </div>
      <About />
      <Experience />
      <Projects />
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
      <Suspense fallback={<div className="flex sm:hidden flex-col items-start justify-center animate-pulse">
        <div className="text-white font-extrabold text-2xl mb-2 flex items-center w-full justify-between">
          Websites
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 mb-2">
            <div className="w-32 h-6 bg-gray-700 rounded" />
            <div className="w-12 h-6 bg-gray-800 rounded" />
          </div>
        ))}
      </div>}>
        <div className="sm:hidden">
          <Websites />
        </div>
      </Suspense>
      <div>
        <People />
      </div>
    </div >
  )
}
