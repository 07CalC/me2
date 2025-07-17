


const websites: { name: string; url: string }[] = [
  {
    name: "vinm.me",
    url: "https://vinm.me",
  },
  {
    name: "crux.ix.tc",
    url: "https://crux.ix.tc",
  },
  {
    name: "batua.site",
    url: "https://batua.site",
  },
  {
    name: "jeelore.site",
    url: "https://jeelore.site",
  }
]


export default async function Websites() {
  const results = await Promise.all(
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
  console.log(results);
  return (

    <div className="flex flex-col items-start  justify-center">
      <div className="text-white font-extrabold text-2xl mb-2 flex items-center w-full justify-between">
        Websites
      </div>
      {
        results.map((site) => (
          <div key={site.name} className="text-white text-xl mb-2">
            {site.name}: <span className={site.status === "UP" ? "text-green-500" : "text-red-500"}>{site.status}</span>
          </div>
        ))
      }
    </div>
  )
}

