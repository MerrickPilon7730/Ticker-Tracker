
import { Hono } from "hono";
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

export const runtime = "nodejs";



const client = new DynamoDBClient({
    region: process.env.REGION!,
    credentials: {
        accessKeyId: process.env.DYNAMODB_KEY!,
        secretAccessKey: process.env.DYNAMODB_SECRET_KEY!,
    },
});

const app = new Hono().basePath("/api/dynamodb")
    .get("/users/:userId/owned", async (c) => {
        const userId = c.req.param("userId");

        const command = new GetItemCommand({
            TableName: "TickerTrackerUsers",
            Key: {
                userId: { S: userId },
            },
        });

        try {
            const result = await client.send(command);

            if (!result.Item) {
                return c.json({error: "User not found"}, 404);
            }

            const item = unmarshall(result.Item);
            const owned = item.owned ?? {};

            return c.json({ owned });
        } catch {
            return c.json({error: "Failed to fetch data"}, 500)
        }
    })
    .get("/users/:userId/watchlist", async (c) => {
        const userId = c.req.param("userId");

        const command = new GetItemCommand({
            TableName: "TickerTrackerUsers",
            Key: {
                userId: { S: userId},
            },
        });

        try {
            const result = await client.send(command);

            if (!result.Item) {
                return c.json({error: "User not found"}, 404);
            }

            const item = unmarshall(result.Item);
            const watchList = item.watchList ?? {};

            return c.json({ watchList });
        } catch {
            return c.json({error: "Failed to fetch data"}, 500);
        }
    })

export const GET = app.fetch;