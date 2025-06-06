
import { StockAPIResponse, StockAPIResponseSchema } from "@/schemas/api-schemas";


export const getAllStocks = async (): Promise<StockAPIResponse> => {
    const response = await fetch(`/api/twelve-data/stocks`);

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
