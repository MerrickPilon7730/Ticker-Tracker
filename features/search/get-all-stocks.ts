type Props = {
    symbol: string,
    name: string,
    currency: string,
    exchange: string,
};

export const getAllStocks = async (): Promise<Props[]> => {
    const res = await fetch("http://localhost:3000/api/twelve-data/get-stocks");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
