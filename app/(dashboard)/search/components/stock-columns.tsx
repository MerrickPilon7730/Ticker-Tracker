

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
        enableGlobalFilter: true,
    },
    {
        accessorKey: "name",
        header: "Company Name",
        enableGlobalFilter: true,
    },
    {
        accessorKey: "exchange",
        header: "Exchange",
    },
]