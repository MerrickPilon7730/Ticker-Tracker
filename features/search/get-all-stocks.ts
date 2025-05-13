type Stock = {
    symbol: string,
    name: string,
    currency: string,
    exchange: string,
};

export type StockAPIResponse = {
  data: Stock[];
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
