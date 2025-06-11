

import { z } from "zod";

export const OwnedStocks = z.object({
    quantity: z.number().int().nonnegative(),
    price: z.number().nonnegative(),
});

export const OwnedStocksSchema = z.record(z.string(), z.array(OwnedStocks));
export type OwnedStocksType = z.infer<typeof OwnedStocksSchema>;

export const WatchList = z.array(z.string())
export type WatchListType = z.infer<typeof WatchList>;

export const UserData = z.object({
    userId: z.string(),
    watchList: WatchList,
    owned: OwnedStocksSchema,
});

export type userDataType = z.infer<typeof UserData>;