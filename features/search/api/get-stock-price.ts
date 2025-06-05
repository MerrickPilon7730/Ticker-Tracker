
import { StockPriceType, StockPrice } from "@/Schemas/api-schemas";

export const getStockPrice = async (symbol: string): Promise<StockPriceType> => {
    const response = await fetch(`/api/twelve-data/stocks/${symbol}/price`);

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
