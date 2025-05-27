
import { Hono } from "hono";
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

export const runtime = "nodejs";



const client = new DynamoDBClient({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_DYNAMODB_KEY!,
        secretAccessKey: process.env.AWS_DYNAMODB_SECRET_KEY!,
    },
});

const app = new Hono().basePath("/api/dynamodb")
    .get("/owned/:userId", async (c) => {
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
    .get("/watchlist/:userId", async (c) => {
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
            const watchlist = item.watchlist ?? {};

            return c.json({ watchlist });
        } catch {
            return c.json({error: "Failed to fetch data"}, 500);
        }
    })

export const GET = app.fetch;