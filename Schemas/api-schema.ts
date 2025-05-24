
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

export const FiftyTwoWeek = z.object({
  low: z.string(),
  high: z.string(),
  low_change: z.string(),
  high_change: z.string(),
  low_change_percent: z.string(),
  high_change_percent: z.string(),
  range: z.string(),
});

export type FiftyTwoWeekType = z.infer<typeof FiftyTwoWeek>;

export const StockQuote = z.object({
  symbol: z.string(),
  name: z.string(),
  exchange: z.string(),
  mic_code: z.string(),
  currency: z.string(),
  datetime: z.string(),
  timestamp: z.number(),
  open: z.string(),
  high: z.string(),
  low: z.string(),
  close: z.string(),
  volume: z.string(),
  previous_close: z.string(),
  change: z.string(),
  percent_change: z.string(),
  average_volume: z.string(),
  rolling_1d_change: z.string(),
  rolling_7d_change: z.string(),
  rolling_period_change: z.string(),
  is_market_open: z.boolean(),
  fifty_two_week: FiftyTwoWeek,
  extended_change: z.string(),
  extended_percent_change: z.string(),
  extended_price: z.string(),
  extended_timestamp: z.number(),
  last_quote_at: z.number(),
});

export type StockQuoteType = z.infer<typeof StockQuote>;