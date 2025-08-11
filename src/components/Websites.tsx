import Link from "next/link";

const websites: { name: string; url: string }[] = [
  { name: "vinm.me", url: "https://vinm.me" },
  { name: "crux.hs.vc", url: "https://crux.hs.vc" },
  { name: "batua.site", url: "https://batua.site" },
  { name: "jeelore.site", url: "https://jeelore.site" },
];

type SiteStatus = { name: string; status: "UP" | "DOWN" };

async function getStatuses(): Promise<SiteStatus[]> {
  const results: SiteStatus[] = await Promise.all(
    websites.map(async (site) => {
      try {
        const res = await fetch(site.url, { method: "HEAD", cache: "no-store" });
        return {
          name: site.name,
          status: res.ok ? "UP" : "DOWN",
        } as const;
      } catch {
        return {
          name: site.name,
          status: "DOWN",
        } as const;
      }
    })
  );
  return results;
}

export default async function Websites() {
  const results = await getStatuses();

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="text-white font-extrabold text-2xl mb-2 flex items-center w-full justify-between">
        Websites:
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-1 w-full">
        {results.map((site) => (
          <Link
            href={`https://${site.name}`}
            target="_blank"
            key={site.name}
            className="text-white text-lg sm:text-xl mb-2 hover:underline"
          >
            {site.name}:{" "}
            <span className={site.status === "UP" ? "text-green-500" : "text-red-500"}>
              {site.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
