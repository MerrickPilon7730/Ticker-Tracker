
import { z } from "zod";

export const Stock = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string(),
  exchange: z.string(),
});

export type StockType = z.infer<typeof Stock>;

export const StockPrice = z.object({
  price: z.string(),
});

export type StockPriceType = z.infer<typeof StockPrice>;

export const StockData = z.object({
  ticker: z.string(),
  price: z.string(),
  change_amount: z.string(),
  change_percentage: z.string(),
});

export type StockDataType = z.infer<typeof StockData>;

export const GainersLosersData = z.object({
    metadata: z.string(),
    last_updated: z.string(),
    top_gainers: z.array(StockData),
    top_losers: z.array(StockData),
    most_actively_traded: z.array(StockData),
});

export type GainersLosersDataType = z.infer<typeof GainersLosersData>;
