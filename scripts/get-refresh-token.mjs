#!/usr/bin/env node
/**
 * scripts/get-refresh-token.mjs
 *
 * Run this ONCE to generate your SPOTIFY_REFRESH_TOKEN.
 *
 * Usage:
 *   1. Fill in CLIENT_ID and CLIENT_SECRET below (from Spotify Developer Dashboard)
 *   2. Run:  node scripts/get-refresh-token.mjs
 *   3. Open the URL it prints in your browser, log in, and authorize the app
 *   4. You'll be redirected to localhost:3000 with a `code=...` in the URL — copy it
 *   5. Paste the full callback URL (or just the code) when prompted
 *   6. Copy the printed SPOTIFY_REFRESH_TOKEN into your .env.local
 */

import http from "http";
import { URL } from "url";
import readline from "readline";

// ─────────────────────────────────────────────────
// 1. FILL THESE IN — get them from:
//    https://developer.spotify.com/dashboard
// ─────────────────────────────────────────────────


const CLIENT_ID = "73b405a28acb4a91961ad15a082c3ada"; // <-- paste your Client ID here
const CLIENT_SECRET = "3fa3af21bf1544199c7c14d4e11675a2"; // <-- paste your Client Secret here
// ─────────────────────────────────────────────────

const REDIRECT_URI = "http://127.0.0.1:3000/api/spotify/callback";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
].join(" ");

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("\n❌  Please fill in CLIENT_ID and CLIENT_SECRET at the top of this script.\n");
  process.exit(1);
}

// Build the authorization URL
const authUrl = new URL("https://accounts.spotify.com/authorize");
authUrl.searchParams.set("client_id", CLIENT_ID);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("scope", SCOPES);
authUrl.searchParams.set("show_dialog", "true");

console.log("\n🎵  Spotify Refresh Token Generator\n");
console.log("Step 1: Open this URL in your browser:\n");
console.log(authUrl.toString());
console.log(
  "\nStep 2: Log in to Spotify and click 'Agree'.\n" +
  "        You'll be redirected to 127.0.0.1:3000 — the page will likely show an error,\n" +
  "        but that's OK. Just copy the FULL URL from your browser's address bar.\n"
);

// Spin up a tiny local server to catch the callback automatically
let server;
const serverPromise = new Promise((resolve) => {
  server = http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://127.0.0.1:3000");
    if (url.pathname !== "/api/spotify/callback") {
      res.end("OK");
      return;
    }

    const code = url.searchParams.get("code");
    if (!code) {
      res.end("No code found — please try again.");
      resolve(null);
      return;
    }

    res.end(
      "✅ Authorization code received! You can close this tab and check your terminal."
    );
    resolve(code);
  });

  server.listen(3000, () => {
    console.log("(Auto-catching callback on http://127.0.0.1:3000 ...)\n");
  }).on("error", () => {
    // Port 3000 is taken (dev server running) — fall back to manual entry
    server = null;
    resolve(null);
  });
});

let code = await serverPromise;
if (server) server.close();

// If auto-catch failed (port busy), ask the user to paste the URL
if (!code) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  code = await new Promise((resolve) => {
    rl.question(
      "Step 3: Paste the full redirect URL (or just the `code=...` value) here:\n> ",
      (answer) => {
        rl.close();
        // Accept either the full URL or just the code itself
        try {
          const parsed = new URL(answer.trim());
          resolve(parsed.searchParams.get("code") || answer.trim());
        } catch {
          resolve(answer.trim());
        }
      }
    );
  });
}

if (!code) {
  console.error("❌  Could not obtain authorization code. Please try again.");
  process.exit(1);
}

// Exchange the authorization code for tokens
console.log("\n⏳  Exchanging code for tokens...");
const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
  }),
});

if (!tokenRes.ok) {
  const err = await tokenRes.text();
  console.error(`\n❌  Token exchange failed (${tokenRes.status}): ${err}`);
  process.exit(1);
}

const tokens = await tokenRes.json();

console.log("\n✅  Success! Add these to your .env.local file:\n");
console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`);
console.log(`SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}`);
console.log(
  "\n⚠️   Never commit .env.local to Git. Make sure it's in .gitignore!\n"
);
