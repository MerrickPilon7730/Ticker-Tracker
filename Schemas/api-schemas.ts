
import { z } from "zod";

export const Stock = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string(),
  exchange: z.string(),
});

export type StockType = z.infer<typeof Stock>;

// API responce for get all stocks from Twelve Data
export const StockAPIResponseSchema = z.object({
  data: z.array(Stock),
  count: z.number(),
  status: z.string(),
});

export type StockAPIResponse = z.infer<typeof StockAPIResponseSchema>;

// Stock Price from Twelve Data
export const StockPrice = z.object({
  price: z.string(),
});

export type StockPriceType = z.infer<typeof StockPrice>;

// Stock data from Gainers and losers- Alpha Vantage
export const StockData = z.object({
  ticker: z.string(),
  price: z.string(),
  change_amount: z.string(),
  change_percentage: z.string(),
  volume: z.string(),
});

export type StockDataType = z.infer<typeof StockData>;

//API responce from Alpha Vantage for gainers-losers
export const GainersLosersData = z.object({
  metadata: z.string(),
  last_updated: z.string(),
  top_gainers: z.array(StockData),
  top_losers: z.array(StockData),
  most_actively_traded: z.array(StockData),
});

export type GainersLosersDataType = z.infer<typeof GainersLosersData>;

// Fifty two weeks from stock Quote-Twelve Data
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

// Stock quote from Twelve Data
export const StockQuote = z.object({
  symbol: z.string(),
  name: z.string(),
  exchange: z.string(),
  mic_code: z.string(),
  currency: z.string(),
  datetime: z.string(),
  timestamp: z.number(),
  last_quote_at: z.number(),
  open: z.string(),
  high: z.string(),
  low: z.string(),
  close: z.string(),
  volume: z.string(),
  previous_close: z.string(),
  change: z.string(),
  percent_change: z.string(),
  average_volume: z.string(),
  is_market_open: z.boolean(),
  fifty_two_week: FiftyTwoWeek,
});

export type StockQuoteType = z.infer<typeof StockQuote>;