
import { StockPriceType, StockPrice } from "@/Schemas/api-schemas";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ticker-tracker-steel.vercel.app" || "http://localhost:3000";


export const getStockPrice = async (symbol: string): Promise<StockPriceType> => {
    const response = await fetch(`${BASE_URL}/api/twelve-data/stocks/${symbol}/price`);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    };

      const data = await response.json();
    
      const parsedData = StockPrice.safeParse(data);
    
      if (!parsedData.success) {
        throw new Error("Invalid response format for stock price");
      }

    return parsedData.data;
};
