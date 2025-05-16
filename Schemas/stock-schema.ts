
import { z } from "zod";

export const StockData = z.object({
  ticker: z.string(),
  price: z.string(),
  change_amount: z.string(),
  change_percentage: z.string(),
  volume: z.string(),
});

export type StockDataType = z.infer<typeof StockData>;
