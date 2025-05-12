
import { Hono } from "hono";

const API_KEY = process.env.FINNHUB_API_KEY;

const app = new Hono()
    .get("/get-stocks", async (c) => {
        const response = await fetch(`https://api.twelvedata.com/stocks?country=US&apikey=${API_KEY}&type=Common Stock`)

        const data = await response.json();

        return c.json(data);
    })

export default app;