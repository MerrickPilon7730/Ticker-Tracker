
import { DailyTimeSeriesAPISchema, TimeSeriesDailyType } from "@/schemas/api-schemas";

export const getDailyTimeSeries = async (symbol: string): Promise<TimeSeriesDailyType> => {
    const response = await fetch(`/api/alpha-vantage/stocks/${symbol}/daily-time-series`);

    if (!response.ok){
        throw new Error("Failed to fetch time series");
    }

    const data = await response.json();
    const parsedData = DailyTimeSeriesAPISchema.safeParse(data);

    if(!parsedData.success){
        throw new Error("Invalid time series data format");
    }

    return parsedData.data["Time Series (Daily)"];
}