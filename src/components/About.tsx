import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
import { SiHyprland } from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
export default function About() {
  return (
    <>

      <h1 className="text-3xl font-bold text-white mb-4">Hi, i'm Vinayak a.k.a. CalC</h1>
      <p className="text-2xl text-white">
        pursuing B.Tech in Electronics and Communication Engineering at IIIT Allahabad.
      </p>
      <p className="text-2xl text-white">
        I enjoy working across the stack, especially on web and mobile apps, and I’m always looking for ways to turn ideas into clean, functional products.
      </p>

      <p className="text-2xl text-white">
        I mostly work in Rust and TypeScript, choosing languages based on the kind of reliability and control I need.
        I like my tools fast, local-first, and hackable.
      </p>
      <p className="text-2xl text-white font-medium">
        I like cats and raccoons, infact i identify as a racc/oon.
      </p>
      <div className="flex gap-x-5">
        <GrArchlinux className="text-5xl text-white" />
        <SiNeovim className="text-5xl text-white" />
        <SiHyprland className="text-5xl text-white" />
        <VscTerminalLinux className="text-5xl text-white" />
      </div>
    </>
  )
}
