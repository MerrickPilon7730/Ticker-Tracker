
import { StockAPIResponse, StockAPIResponseSchema } from "@/Schemas/api-schemas";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllStocks = async (): Promise<StockAPIResponse> => {
    const response = await fetch(`${BASE_URL}/api/twelve-data/stocks`);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

      const data = await response.json();
    
      const parsedData = StockAPIResponseSchema.safeParse(data);
    
      if (!parsedData.success) {
        throw new Error("Invalid response format for stock price");
      }

    return parsedData.data;
};
