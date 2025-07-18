import Link from "next/link";
export const dynamic = "force-dynamic";
type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type Track = {
  name: string;
  artists: Artist[];
  album: Album;
  external_urls: {
    spotify: string;
  };
};

export type Artist = {
  name: string;
};

export type Album = {
  images: Image[];
};

export type Image = {
  url: string;
  height?: number;
  width?: number;
};

type CurrentlyPlayingResponse = {
  is_playing: boolean;
  item: Track | null;
};

type RecentlyPlayedResponse = {
  items: {
    track: Track;
  }[];
};

let cachedAccessToken: string | null = null;
let tokenExpiresAt: number | null = null;
async function getSpotifyToken(): Promise<string> {
  const now = Date.now();

  if (cachedAccessToken && tokenExpiresAt && now < tokenExpiresAt) {
    return cachedAccessToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    cache: "no-store",
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Spotify token");
  }

  const data: SpotifyTokenResponse = await response.json();
  cachedAccessToken = data.access_token;
  tokenExpiresAt = now + data.expires_in * 1000 - 60 * 1000;

  return cachedAccessToken;
}

export default async function Spotify() {
  try {
    const accessToken = await getSpotifyToken();

    const currentRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing?market=IN", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    let track: Track | null = null;
    let isPlaying = false;

    if (currentRes.status === 200) {
      const data: CurrentlyPlayingResponse = await currentRes.json();
      if (data?.item) {
        track = data.item;
        isPlaying = data.is_playing;
      }
    }

    if (!track) {
      const recentRes = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      });

      if (recentRes.status === 200) {
        const recentData: RecentlyPlayedResponse = await recentRes.json();
        track = recentData.items?.[0]?.track ?? null;
      }
    }

    if (!track) {
      return (
        <div className="text-white">No track is currently or recently played.</div>
      );
    }

    const albumImage = track.album.images[0]?.url;
    const artistNames = track.artists.map((artist) => artist.name).join(", ");

    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <div className="text-white font-extrabold text-2xl mb-2 flex items-center w-full justify-between">
            {isPlaying ? "Currently Playing" : "Last Played"}
            <div
              className={`w-3 h-3 rounded-full ml-2 ${isPlaying ? "bg-green-500 animate-pulse" : "bg-gray-500"}`}
            />
          </div>

          <Link
            target="_blank"
            href={track.external_urls.spotify}
            className="flex items-center bg-purple-800/40 text-white px-4 py-2 rounded-lg cursor-pointer w-[300px] h-[100px]"
          >
            {albumImage && (
              <img
                src={albumImage}
                alt={track.name}
                className="w-16 h-16 rounded mr-4 object-cover"
              />
            )}
            <div className="overflow-hidden">
              <div className="font-semibold text-base truncate">{track.name}</div>
              <div className="text-gray-100 text-sm truncate">{artistNames}</div>
            </div>
          </Link>
        </div>
        <div className="border-b sm:hidden border-white w-full my-4" />

      </>
    );
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return (
      <div className="text-white">Error loading Spotify track.</div>
    );
  }
}
