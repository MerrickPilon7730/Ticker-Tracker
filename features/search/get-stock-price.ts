
import { StockPriceType } from "@/Schemas/api-schema";

export const getStockPrice = async (symbol: string): Promise<StockPriceType> => {
    const res = await fetch(`http://localhost:3000/api/twelve-data/stock-price/${symbol}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
