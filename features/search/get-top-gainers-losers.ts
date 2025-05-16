
type Props = {
    symbol: string,
    price: string,
    change_amount: string,
    change_percentage: string,
}

export const getTopGainers = async (): Promise<Props[]> => {
    const response = await fetch("http://localhost:3000/api/alpha-vantage/gainers-losers");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gainers: Props[] = data.top_gainers.map((item: any) => ({
        symbol: item.ticker,
        price: item.price,
        change_amount: item.change_amount,
        change_percentage: item.change_percentage,
    }));

    return gainers;
}

export const getTopLosers = async (): Promise<Props[]> => {
    const response = await fetch("http://localhost:3000/api/alpha-vantage/gainers-losers");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const losers: Props[] = data.top_losers.map((item: any) => ({
        symbol: item.ticker,
        price: item.price,
        change_amount: item.change_amount,
        change_percentage: item.change_percentage,
    }));

    return losers;
}