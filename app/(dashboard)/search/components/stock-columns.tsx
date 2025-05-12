

import { ColumnDef } from "@tanstack/react-table";

export type Stock = {
    symbol: string,
    name: string,
    exchange: string,
    price: string,
};

export const columns: ColumnDef<Stock>[] = [
    {
        accessorKey: "symbol",
        header: "Ticker",
    },
    {
        accessorKey: "name",
        header: "Company Name",
    },
    {
        accessorKey: "exchange",
        header: "Exchange",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({row}) => {
            const price = parseFloat(row.getValue("price"));
            return `$${price.toFixed(2)}`;
        }
    }
]