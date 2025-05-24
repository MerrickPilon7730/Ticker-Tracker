
import { Hono } from "hono";

const API_KEY = process.env.TWELVE_DATA_API_KEY;

const app = new Hono()
    .get("/get-stocks", async (c) => {
        const response = await fetch(`https://api.twelvedata.com/stocks?country=US&apikey=${API_KEY}&type=Common Stock`);

        if(!response.ok){
            return c.json({error: "Unable to fetch stocks"}, 400);
        }

        const data = await response.json();

        return c.json(data);
    })
    .get("/stock-price/:symbol", async (c) =>{
        const symbol = c.req.param("symbol");
        const response = await fetch(`https://api.twelvedata.com/price?country=US&symbol=${symbol}&apikey=${API_KEY}`);

        if(!response.ok){
            return c.json({error: "Failed to fetch stock price"}, 400);
        }

        const data = await response.json();

        return c.json(data);
    })
    .get("/stock-quote/:symbol", async (c) =>{
        const symbol = c.req.param("symbol");
        const response = await fetch(`https://api.twelvedata.com/quote?country=US&symbol=${symbol}&apikey=${API_KEY}`);

        if(!response.ok){
            return c.json({error: "Failed to fetch stock quote"}, 400);
        }

        const data = await response.json();
        return c.json(data);
    })

export default app;