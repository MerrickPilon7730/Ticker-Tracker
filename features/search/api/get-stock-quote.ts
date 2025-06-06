
import { StockQuoteType, StockQuote } from "@/schemas/api-schemas";

export const getStockQuote = async (symbol: string): Promise<StockQuoteType> => {
    const response = await fetch(`/api/twelve-data/stocks/${symbol}/quote`);

    if(!response.ok){
        throw new Error("Failed to fetch data");
    };

    const data = await response.json();

    const parsedData = StockQuote.safeParse(data);

    if (!parsedData.success) {
        throw new Error("Invalid response format for stock quote");
    }

    return parsedData.data;
}