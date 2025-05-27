
import { z } from "zod";

export const ownedStocks = z.object({
    quantity: z.number().int().nonnegative(),
    price: z.number().nonnegative(),
});

export const ownedStocksSchema = z.record(z.string(), z.array(ownedStocks));
export type ownedStocksType = z.infer<typeof ownedStocksSchema>;

export const userData = z.object({
    userId: z.string(),
    email: z.string(),
    password: z.string(),
    watchList: z.array(z.string()),
    owned: ownedStocksSchema,
});