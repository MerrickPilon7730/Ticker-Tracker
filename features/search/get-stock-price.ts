
import { StockPriceType } from "@/Schemas/api-schema";

export const getStockPrice = async (symbol: string): Promise<StockPriceType> => {
    const response = await fetch(`http://localhost:3000/api/twelve-data/stock-price/${symbol}`);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    };

    return response.json();
};
