
import { Hono, type Context } from "hono";

import { DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall, marshall } from "@aws-sdk/util-dynamodb";

import { verifyToken } from "@clerk/backend";

export const runtime = "nodejs";

const TABLE_NAME = "TickerTrackerUsers";

const client = new DynamoDBClient({
    region: process.env.REGION!,
    credentials: {
        accessKeyId: process.env.DYNAMODB_KEY!,
        secretAccessKey: process.env.DYNAMODB_SECRET_KEY!,
    },
});

async function getUserIdFromToken(c: Context) {
  const authHeader = c.req.header("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { error: "Unauthorized", status: 401 as const };
  }

  const token = authHeader.split(" ")[1];

  try {
    const { userId } = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY!,
    });
    return { userId };
  } catch {
    return { error: "Invalid or expired token", status: 401 as const };
  }
}

const app = new Hono().basePath("/api/dynamodb")
    .get("/users/:userId/owned", async (c) => {
        const tokenResult = await getUserIdFromToken(c);
        if ("error" in tokenResult) return c.json({ error: tokenResult.error }, tokenResult.status);

        const tokenUserId = tokenResult.userId;

        const userId = c.req.param("userId");
        if (userId !== tokenUserId) {
            return c.json({ error: "Forbidden" }, 403);
        }

        const command = new GetItemCommand({
            TableName: TABLE_NAME,
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
        } catch (err) {
            
            console.error("DynamoDB Error: ", err);
            return c.json({error: "Failed to fetch data" }, 500);
        }
    })
    .get("/users/:userId/watchlist", async (c) => {
        const tokenResult = await getUserIdFromToken(c);
        if ("error" in tokenResult) return c.json({ error: tokenResult.error }, tokenResult.status);

        const tokenUserId = tokenResult.userId;

        const userId = c.req.param("userId");
        if (userId !== tokenUserId) {
            return c.json({ error: "Forbidden" }, 403);
        }

        const command = new GetItemCommand({
            TableName: TABLE_NAME,
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
    .post("/new-user", async (c) => {
        const authHeader = c.req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return c.json({ error: "Missing or invalid token" }, 401);
        }

        const token = authHeader.split(" ")[1];

        try {
            const { userId } = await verifyToken(token, {secretKey: process.env.CLERK_SECRET_KEY!});

            const body = await c.req.json();
            const { owned = {}, watchList = {} } = body;

            const command = new PutItemCommand({
            TableName: TABLE_NAME,
            Item: marshall({
                userId,
                owned,
                watchList,
            }),
            ConditionExpression: "attribute_not_exists(userId)",
            });

            await client.send(command);

            return c.json({ message: "User created"}, 201);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error("Error creating user:", err);

            if (err.name === "ConditionalCheckFailedException") {
            return c.json({ error: "User already exists" }, 409);
            }

            return c.json({ error: "Failed to create user" }, 500);
        }
    })

export const GET = app.fetch;
export const POST = app.fetch;