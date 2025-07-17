import About from "./About";





export default function RightPanel() {
  return (
    <div className="hidden sm:flex flex-col items-start justify-start h-full gap-y-5 overflow-y-scroll pr-60">
      <About />
    </div>
  )
}
