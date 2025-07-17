import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import Spotify from "@/components/Spotify";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full justify-start overflow-hidden">
      <div className="hidden sm:flex w-1/3 overflow-y-auto justify-end">
        <LeftPanel />
      </div>
      <div className="hiden sm:flex w-2/3 overflow-y-auto justify-start">
        <RightPanel />
      </div>

    </div >
  );
}
