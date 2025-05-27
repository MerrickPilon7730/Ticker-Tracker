

import { z } from "zod";

export const ownedStocks = z.object({
    quantity: z.number().int().nonnegative(),
    price: z.number().nonnegative(),
});

export const ownedStocksSchema = z.record(z.string(), z.array(ownedStocks));
export type ownedStocksType = z.infer<typeof ownedStocksSchema>;

export const watchList = z.array(z.string())
export type watchListType = z.infer<typeof watchList>;

export const userData = z.object({
    userId: z.string(),
    email: z.string(),
    password: z.string(),
    watchList: watchList,
    owned: ownedStocksSchema,
});

