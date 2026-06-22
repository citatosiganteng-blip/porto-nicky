import { NextRequest } from "next/server";
import Pusher from "pusher";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const appId = process.env.PUSHER_APP_ID;
  const key = process.env.PUSHER_KEY;
  const secret = process.env.PUSHER_SECRET;
  const cluster = process.env.PUSHER_CLUSTER;

  // Verify Pusher variables are present
  if (!appId || !key || !secret || !cluster) {
    return new Response("Pusher is not configured on the server", {
      status: 500,
    });
  }

  const pusher = new Pusher({
    appId,
    key,
    secret,
    cluster,
    useTLS: true,
  });

  try {
    let socketId = "";
    let channelName = "";

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      socketId = body.socket_id;
      channelName = body.channel_name;
    } else {
      const formData = await req.formData();
      socketId = formData.get("socket_id") as string || "";
      channelName = formData.get("channel_name") as string || "";
    }

    if (!socketId || !channelName) {
      return new Response("Missing socket_id or channel_name", {
        status: 400,
      });
    }

    // Presence channels require user data
    const userId = `user_${Math.random().toString(36).substring(2, 9)}`;
    const authResponse = pusher.authorizeChannel(socketId, channelName, {
      user_id: userId,
      user_info: {
        name: "Anonymous Visitor",
      },
    });

    return Response.json(authResponse);
  } catch (error) {
    console.error("Pusher auth error:", error);
    return new Response("Authentication failed", { status: 500 });
  }
}
