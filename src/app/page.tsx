import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

export default function HomePage() {
  return (
    <div className="flex pb-10 w-full h-screen overflow-y-hidden">
      <div className="hidden sm:flex w-1/3 overflow-y-auto justify-end">
        <div className="w-full flex justify-end h-max px-4 py-6">
          <LeftPanel />
        </div>
      </div>

      <div className="flex w-full sm:w-2/3 overflow-y-auto justify-start">
        <div className="w-full h-max px-4 py-6">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
