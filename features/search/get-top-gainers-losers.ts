type Props = {
    ticker: string,
    price: string,
    change_amount: string,
    change_percentage: string,
    volume: string,
};

const fetchGainersLosers = async () => {
    const res = await fetch("http://localhost:3000/api/alpha-vantage/gainers-losers");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export const getAllTopGainers = async (): Promise<Props[]> => {
    const data = await fetchGainersLosers();
    return data.top_gainers;
};

export const getTopFourGainers = async (): Promise<Props[]> => {
    const data = await fetchGainersLosers();
    return data.top_gainers.slice(0, 4);
};

export const getAllTopLosers = async (): Promise<Props[]> => {
    const data = await fetchGainersLosers();
    return data.top_losers;
};

export const getTopFourLosers = async (): Promise<Props[]> => {
    const data = await fetchGainersLosers();
    return data.top_losers.slice(0, 4);
};
