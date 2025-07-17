import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="hidden sm:flex items-center justify-between p-4 bg-[#161411]/80 w-full fixed h-16 top-0 px-80">
      <Link href={'/'} className="text-3xl font-bold text-purple-500">
        Vinayak
      </Link>
      <div className="flex gap-x-16">
        <Link href="/projects" className="text-white hover:underline text-2xl">Projects</Link>
        <Link href="/blog" className="text-white hover:underline text-2xl">Blog</Link>
      </div>
    </nav>
  )
}
