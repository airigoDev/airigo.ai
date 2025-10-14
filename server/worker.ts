import { insertWaitlistSchema } from "@shared/schema";

type Env = {
  DB: any; // D1Database
};

async function jsonResponse(
  status: number,
  data: unknown,
  headers: HeadersInit = {}
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

async function handleWaitlist(req: Request, env: Env) {
  try {
    const body = await req.json();
    const parsed = insertWaitlistSchema.safeParse(body);
    if (!parsed.success) {
      return jsonResponse(400, {
        error: parsed.error.errors.map((e) => e.message).join(", "),
      });
    }

    // Check duplicate email (case-insensitive)
    const { results } = await env.DB.prepare(
      "SELECT 1 FROM waitlist WHERE email = ? COLLATE NOCASE LIMIT 1"
    )
      .bind(parsed.data.email)
      .all();

    if (results.length > 0) {
      return jsonResponse(409, {
        error: "This email is already on the waitlist",
      });
    }

    // Insert new entry
    const entry = {
      id: crypto.randomUUID(),
      email: parsed.data.email,
      name: parsed.data.name,
      createdAt: new Date().toISOString(),
    };

    await env.DB.prepare(
      "INSERT INTO waitlist (id, email, name, created_at) VALUES (?, ?, ?, ?)"
    )
      .bind(entry.id, entry.email, entry.name, entry.createdAt)
      .run();

    return jsonResponse(201, entry);
  } catch (e: any) {
    return jsonResponse(500, {
      error: "Failed to join waitlist. Please try again.",
    });
  }
}

export default {
  async fetch(req: Request, env: Env, ctx: any) {
    const url = new URL(req.url);

    if (req.method === "POST" && url.pathname === "/api/waitlist") {
      return await handleWaitlist(req, env);
    }

    // static assets via assets binding configured in wrangler (dist/public)
    // Let CF Workers assets handler serve them automatically
    // Fallback to index.html
    if (req.method === "GET") {
      // If assets not matched, return index.html for SPA routing
      return new Response(null, {
        status: 302,
        headers: { Location: "/index.html" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
