

import { ColumnDef } from "@tanstack/react-table";

export type Stock = {
    symbol: string,
    name: string,
    exchange: string,
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
]