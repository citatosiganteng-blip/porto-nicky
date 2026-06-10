// app/api/spotify/route.ts
// Server-side proxy for Spotify API — keeps Client Secret and Refresh Token off the browser.
// Returns: { isPlaying, title, artist, albumArt, songUrl } or fallback default data.

export const dynamic = "force-dynamic"; // Never cache this route statically

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

// ── helpers ────────────────────────────────────────────────────────────────

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token as string;
}

// ── main handler ───────────────────────────────────────────────────────────

export async function GET() {
  // If env vars are not configured, return elegant fallback instead of crashing
  if (
    !process.env.SPOTIFY_CLIENT_ID ||
    !process.env.SPOTIFY_CLIENT_SECRET ||
    !process.env.SPOTIFY_REFRESH_TOKEN
  ) {
    return Response.json({
      isPlaying: false,
      title: "Missing Env Vars",
      artist: `ID: ${process.env.SPOTIFY_CLIENT_ID ? "Loaded" : "Missing"}, Secret: ${process.env.SPOTIFY_CLIENT_SECRET ? "Loaded" : "Missing"}, Refresh: ${process.env.SPOTIFY_REFRESH_TOKEN ? "Loaded" : "Missing"}`,
      albumArt: null,
      songUrl: null,
    });
  }

  try {
    const accessToken = await getAccessToken();

    // ── Try currently-playing first ──
    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    const nowPlayingStatus = nowPlayingRes.status;
    let nowPlayingData = null;
    if (nowPlayingStatus === 200) {
      nowPlayingData = await nowPlayingRes.json();

      // Podcast / non-track items don't have `item.artists`
      if (nowPlayingData?.item && nowPlayingData.item.type === "track") {
        return Response.json({
          isPlaying: nowPlayingData.is_playing,
          title: nowPlayingData.item.name,
          artist: nowPlayingData.item.artists
            .map((a: { name: string }) => a.name)
            .join(", "),
          albumArt: nowPlayingData.item.album.images[0]?.url ?? null,
          songUrl: nowPlayingData.item.external_urls.spotify,
        });
      }
    }

    // ── Fallback: recently played ──
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    const recentStatus = recentRes.status;
    let recentData = null;
    if (recentRes.ok) {
      recentData = await recentRes.json();
      const track = recentData?.items?.[0]?.track;

      if (track) {
        return Response.json({
          isPlaying: false,
          title: track.name,
          artist: track.artists
            .map((a: { name: string }) => a.name)
            .join(", "),
          albumArt: track.album.images[0]?.url ?? null,
          songUrl: track.external_urls.spotify,
        });
      }
    }

    // Default static fallback if no active song or recently played history
    return Response.json({
      isPlaying: false,
      title: "Chill Lo-fi Beats",
      artist: "coding in the zone 🎧",
      albumArt: null,
      songUrl: null,
    });
  } catch (error: any) {
    console.error("Spotify API Route Error:", error);
    return Response.json({
      isPlaying: false,
      title: "Chill Lo-fi Beats",
      artist: "coding in the zone 🎧",
      albumArt: null,
      songUrl: null,
    });
  }
}
