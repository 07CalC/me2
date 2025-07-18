import { redis } from "@/lib/redis";



export const dynamic = "force-dynamic";

export default async function TotalViews() {
  const totalViews = await redis.get("views");
  return (
    <div className="flex items-center justify-start ">
      <div className="text-white font-extrabold text-2xl">
        Views:
      </div>
      <div className="text-white font-extrabold text-2xl mb-0">
        {totalViews ? totalViews : "0"}
      </div>
    </div>
  );
}
