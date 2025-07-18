'use client'
import { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-[#161411]/90 w-full fixed h-16 top-0 sm:px-80 z-50">
        <div className="sm:hidden">
          <IoMdMenu
            className="text-3xl text-purple-500 cursor-pointer"
            onClick={() => toggleSidebar()}
          />
        </div>

        <Link href="/" className="text-3xl font-bold text-purple-500">
          Vinayak
        </Link>

        <div className="hidden sm:flex gap-x-16">
          <Link href="/projects" className="text-white hover:underline text-2xl">
            Projects
          </Link>
          <Link href="/blog" className="text-white hover:underline text-2xl">
            Blog
          </Link>
        </div>
      </nav>

      {sidebarOpen && (
        <div className="fixed bg-black/70  z-40" onClick={() => setSidebarOpen(false)}>
          <div
            className="fixed top-0 left-0 h-full w-64 bg-[#1f1d1a] p-6 text-white shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-y-4 mt-16 text-xl">
              <Link href="/projects" className="hover:underline" onClick={() => setSidebarOpen(false)}>
                Projects
              </Link>
              <Link href="/blog" className="hover:underline" onClick={() => setSidebarOpen(false)}>
                Blog
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
