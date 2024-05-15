import type { Config } from "drizzle-kit";

import { Hono } from "hono";
import { serve } from "@hono/node-server";

export const app: Hono = new Hono();

serve({
  fetch: app.fetch,
  port: 8000,
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}/campus`);
});

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./db/campus.db",
  },
} satisfies Config;
