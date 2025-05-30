
import { Hono } from "hono";
import { handle } from "hono/vercel";

import twelveData from "./twelve-data"
import alphaVantage from "./alpha-vantage"

export const runtime = "edge"

const app = new Hono().basePath("/api")

app.use("*", async (c, next) => {
  c.header("Access-Control-Allow-Origin", "https://ticker-tracker-steel.vercel.app/");
  c.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (c.req.method === "OPTIONS") {
    return c.text("ok", 200);
  }

  await next();
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
    .route("/twelve-data", twelveData)
    .route("/alpha-vantage", alphaVantage)

export const GET = handle(app)

export type AppType = typeof routes; 