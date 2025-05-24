
import { StockQuoteType } from "@/Schemas/api-schemas";

export const getStockQuote = async (symbol: string): Promise<StockQuoteType> => {
    const response = await fetch(`http://localhost:3000/api/twelve-data/stock-quote/${symbol}`);

    if(!response.ok){
        throw new Error("Failed to fetch data");
    };

    return response.json();
}