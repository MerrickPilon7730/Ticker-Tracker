
import { Hono } from "hono";
import { handle } from "hono/vercel";

import twelveData from "./twelve-data"
import alphaVantage from "./alpha-vantage"

export const runtime = "edge"

const app = new Hono().basePath("/api")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
    .route("/twelve-data", twelveData)
    .route("/alpha-vantage", alphaVantage)

export const GET = handle(app)

export type AppType = typeof routes; 