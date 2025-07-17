
let cachedData: {
  totalStars: number;
  totalRepos: number;
  lastCommit: string | null;
} | null = null;

let lastFetched = 0;
const CACHE_TTL = 1000 * 60 * 60;

export async function getGitHubStats() {
  const now = Date.now();
  if (cachedData && now - lastFetched < CACHE_TTL) {
    return cachedData;
  }

  const username = "07calc";
  const token = process.env.GH_ACCESS_TOKEN;


  const [reposRes, eventsRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }),
    fetch(`https://api.github.com/users/${username}/events/public`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }),
  ]);

  const repos = await reposRes.json();
  const events = await eventsRes.json();

  const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
  const totalRepos = repos.length;
  const lastCommitTime = events.find((e: any) => e.type === "PushEvent")?.created_at ?? null;

  const lastCommit = lastCommitTime ? new Date(lastCommitTime).toDateString() : null;
  cachedData = { totalStars, totalRepos, lastCommit };
  lastFetched = now;

  return cachedData;
}


export default async function Github() {
  const { totalStars, totalRepos, lastCommit } = await getGitHubStats();
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="text-2xl font-bold text-white mb-4">GitHub Stats:</h2>
      <div className="text-white text-xl mb-2">
        Total Stars: {totalStars}
      </div>
      <div className="text-white text-xl mb-2">
        Total Repositories: {totalRepos}
      </div>
      <div className="text-white text-xl mb-2">
        Last Commit: {lastCommit}
      </div>
    </div>
  );
}
