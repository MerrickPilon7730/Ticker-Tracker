

import { z } from "zod";

export const OwnedStocks = z.object({
    quantity: z.number().int().nonnegative(),
    price: z.number().nonnegative(),
});

export const OwnedStocksSchema = z.record(z.string(), z.array(OwnedStocks));
export type OwnedStocksType = z.infer<typeof OwnedStocksSchema>;

export const WatchList = z.array(z.string())
export type WatchListType = z.infer<typeof WatchList>;

export const UserInfo = z.object({
    userId: z.string(),
    name: z.string(),
    email: z.string(),
});

export type UserInfoType = z.infer<typeof UserInfo>;

export const UserData = z.object({
    userInfo: UserInfo,
    watchList: WatchList,
    owned: OwnedStocksSchema,
});

export type userDataType = z.infer<typeof UserData>;