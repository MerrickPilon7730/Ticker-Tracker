import { Hono } from "hono";

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY

const app = new Hono()
    .get("/stocks/market-movers", async (c) => {
        const response = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`)

        if(!response.ok){
            return c.json({error: "Unable to fetch stocks"}, 400);
        }

        const data = await response.json();

        return c.json(data);
    })

export default app;