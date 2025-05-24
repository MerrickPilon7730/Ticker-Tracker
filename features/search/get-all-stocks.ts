
import { StockType } from "@/Schemas/api-schemas";

export type StockAPIResponse = {
  data: StockType[];
  count: number;
  status: string;
};

export const getAllStocks = async (): Promise<StockAPIResponse> => {
    const response = await fetch("http://localhost:3000/api/twelve-data/get-stocks");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
};
