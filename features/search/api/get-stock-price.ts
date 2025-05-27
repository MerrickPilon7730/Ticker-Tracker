
import { StockPriceType, StockPrice } from "@/Schemas/api-schemas";

export const getStockPrice = async (symbol: string): Promise<StockPriceType> => {
    const response = await fetch(`http://localhost:3000/api/twelve-data/stock-price/${symbol}`);

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
