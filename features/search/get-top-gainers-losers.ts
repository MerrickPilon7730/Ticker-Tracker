
import {z} from "zod";

const StockData = z.object({
    symbol: z.string(),
    price: z.string(),
    change_amount: z.string(),
    change_percentage: z.string(),
    volume: z.string(),
});

const GainersLosersData = z.object({
    metadata: z.string(),
    last_updated: z.string(),
    top_gainers: z.array(StockData),
    top_losers: z.array(StockData),
    most_actively_traded: z.array(StockData),
});

let cachedData: z.infer<typeof GainersLosersData> | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 120; 

export const getTopGainersLosers = async (): Promise<z.infer<typeof GainersLosersData>> => {
    const now = Date.now();

    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
        return cachedData;
    }

    const response = await fetch("http://localhost:3000/api/alpha-vantage/gainers-losers");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const json = await response.json();
    const data = GainersLosersData.parse(json);

    cachedData = data;
    lastFetchTime = now;
    
    return data;
}

export const getTopFourGainers = async (): Promise<z.infer<typeof StockData>[]> => {
    const topFourGainers = await getTopGainersLosers();
    return topFourGainers.top_gainers.slice(0,4);
}

export const getTopFourLosers = async (): Promise<z.infer<typeof StockData>[]> => {
    const topFourLosers = await getTopGainersLosers();
    return topFourLosers.top_losers.slice(0,4);
}

export const getTopFourTraded = async (): Promise<z.infer<typeof StockData>[]> => {
    const topFourTraded = await getTopGainersLosers();
    return topFourTraded.most_actively_traded.slice(0,4);
}

export const getAllGainers = async (): Promise<z.infer<typeof StockData>[]> => {
    const topGainers = await getTopGainersLosers();
    return topGainers.top_gainers;
}

export const getAllLosers = async ():Promise<z.infer<typeof StockData>[]> => {
    const topLosers = await getTopGainersLosers();
    return topLosers.top_losers;
}

export const getMostActivelyTraded = async (): Promise<z.infer<typeof StockData>[]> => {
    const mostTraded = await getTopGainersLosers();
    return mostTraded.most_actively_traded;
}